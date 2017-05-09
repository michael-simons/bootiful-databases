package ac.simons.bootiful_databases;

import java.io.IOException;
import java.math.BigInteger;
import java.sql.Date;
import java.time.LocalDate;
import java.util.Optional;
import javax.servlet.http.HttpServletResponse;
import org.jooq.DSLContext;
import org.jooq.DatePart;
import org.jooq.Field;
import org.jooq.impl.DSL;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.format.annotation.DateTimeFormat.ISO;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

import static ac.simons.bootiful_databases.db.Tables.ARTISTS;
import static ac.simons.bootiful_databases.db.Tables.PLAYS;
import static ac.simons.bootiful_databases.db.Tables.TRACKS;
import static org.jooq.impl.DSL.count;
import static org.jooq.impl.DSL.partitionBy;
import static org.jooq.impl.DSL.sum;
import static org.jooq.impl.DSL.trunc;

@Controller
@RequestMapping("/api/artists")
public class ArtistsReportController {

    private static final Field<Date> PLAYED_ON_TRUNCATED_TO_DAY 
            = trunc(PLAYS.PLAYED_ON, DatePart.DAY).cast(Date.class);
    
    private final DSLContext create;

    public ArtistsReportController(DSLContext create) {
        this.create = create;
    }

    @RequestMapping
    public void getAllArtists(final HttpServletResponse response) throws IOException {
        response.setContentType(MediaType.APPLICATION_JSON_UTF8_VALUE);
        this.create
                .select()
                .from(ARTISTS)
                .orderBy(ARTISTS.ARTIST.asc())
                .fetch()
                .formatJSON(response.getOutputStream());
    }

    @RequestMapping(path = "/{artistIds}/cumulativePlays")
    public void getCumulativePlays(
            @PathVariable final BigInteger[] artistIds,
            @RequestParam
            @DateTimeFormat(iso = ISO.DATE)
            final Optional<LocalDate> from,
            @RequestParam
            @DateTimeFormat(iso = ISO.DATE)
            final Optional<LocalDate> to,
            final HttpServletResponse response
    ) throws IOException {
        response.setContentType(MediaType.APPLICATION_JSON_UTF8_VALUE);
        this.create
                .select(PLAYED_ON_TRUNCATED_TO_DAY,
                        ARTISTS.ARTIST,
                        sum(count()).over(partitionBy(ARTISTS.ARTIST).orderBy(PLAYED_ON_TRUNCATED_TO_DAY)).as("cumulativePlays")
                )
                .from(PLAYS)
                .join(TRACKS).onKey()
                .join(ARTISTS).onKey()
                .where(ARTISTS.ID.in(artistIds))
                .and(from.map(Date::valueOf)
                        .map(PLAYED_ON_TRUNCATED_TO_DAY::greaterOrEqual)
                        .orElseGet(DSL::trueCondition)
                )
                .and(to.map(Date::valueOf)
                        .map(PLAYED_ON_TRUNCATED_TO_DAY::lessOrEqual)
                        .orElseGet(DSL::trueCondition)
                )
                .groupBy(PLAYED_ON_TRUNCATED_TO_DAY,
                        ARTISTS.ARTIST
                )
                .orderBy(PLAYED_ON_TRUNCATED_TO_DAY,
                        ARTISTS.ARTIST
                )
                .fetch()
                .formatJSON(response.getOutputStream());
    }
    
    @RequestMapping(path = "/{artistIds}/topNAlbums")
    public void getTopNAlbums(
            @PathVariable final BigInteger[] artistIds,
            @RequestParam(defaultValue = "10") final int n,
            @RequestParam
            @DateTimeFormat(iso = ISO.DATE)
            final Optional<LocalDate> from,
            @RequestParam
            @DateTimeFormat(iso = ISO.DATE)
            final Optional<LocalDate> to,
            final HttpServletResponse response
    ) throws IOException {
        response.setContentType(MediaType.APPLICATION_JSON_UTF8_VALUE);
        this.create
                .select(TRACKS.ALBUM,
                        count())
                .from(PLAYS)
                .join(TRACKS).onKey()
                .where(TRACKS.ARTIST_ID.in(artistIds))
                .and(from.map(Date::valueOf)
                        .map(PLAYED_ON_TRUNCATED_TO_DAY::greaterOrEqual)
                        .orElseGet(DSL::trueCondition)
                )
                .and(to.map(Date::valueOf)
                        .map(PLAYED_ON_TRUNCATED_TO_DAY::lessOrEqual)
                        .orElseGet(DSL::trueCondition)
                )
                .groupBy(TRACKS.ARTIST_ID, TRACKS.ALBUM)
                .orderBy(count().desc(), TRACKS.ALBUM.asc())
                .limit(n)
                .fetch()
                .formatJSON(response.getOutputStream());
    }
    
    @RequestMapping(path = "/{artistIds}/topNTracks")
    public void getTopNTracks(
            @PathVariable final BigInteger[] artistIds,
            @RequestParam(defaultValue = "10") final int n,
            @RequestParam
            @DateTimeFormat(iso = ISO.DATE)
            final Optional<LocalDate> from,
            @RequestParam
            @DateTimeFormat(iso = ISO.DATE)
            final Optional<LocalDate> to,
            final HttpServletResponse response
    ) throws IOException {
        response.setContentType(MediaType.APPLICATION_JSON_UTF8_VALUE);        
        this.create
                .select(TRACKS.ALBUM,
                        TRACKS.NAME,
                        count())
                .from(PLAYS)
                .join(TRACKS).onKey()
                .where(TRACKS.ARTIST_ID.in(artistIds))
                .and(from.map(Date::valueOf)
                        .map(PLAYED_ON_TRUNCATED_TO_DAY::greaterOrEqual)
                        .orElseGet(DSL::trueCondition)
                )
                .and(to.map(Date::valueOf)
                        .map(PLAYED_ON_TRUNCATED_TO_DAY::lessOrEqual)
                        .orElseGet(DSL::trueCondition)
                )
                .groupBy(TRACKS.ARTIST_ID, TRACKS.ALBUM, TRACKS.NAME)
                .orderBy(count().desc(), TRACKS.ALBUM.asc(), TRACKS.NAME.asc())
                .limit(n)
                .fetch()
                .formatJSON(response.getOutputStream());
    }    
}
