package ac.simons.doag2016;

import java.io.IOException;
import java.math.BigDecimal;
import java.sql.Date;
import javax.servlet.http.HttpServletResponse;
import org.jooq.DSLContext;
import org.jooq.DatePart;
import org.jooq.Field;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;

import static ac.simons.doag2016.db.Tables.ARTISTS;
import static ac.simons.doag2016.db.Tables.PLAYS;
import static ac.simons.doag2016.db.Tables.TRACKS;
import static org.jooq.impl.DSL.count;
import static org.jooq.impl.DSL.orderBy;
import static org.jooq.impl.DSL.sum;
import static org.jooq.impl.DSL.trunc;

@Controller
@RequestMapping("/api/artists")
public class ArtistsReportController {

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

    @RequestMapping(path = "/{artistId}/cumulativePlays")
    public void getCumulativePlays(
            @PathVariable final BigDecimal artistId,
            final HttpServletResponse response
    ) throws IOException {
        response.setContentType(MediaType.APPLICATION_JSON_UTF8_VALUE);
        final Field<Date> playedOnTruncatedToDay = trunc(PLAYS.PLAYED_ON, DatePart.DAY).cast(Date.class);
        this.create
                .select(playedOnTruncatedToDay,
                        ARTISTS.ARTIST,
                        sum(count()).over(orderBy(playedOnTruncatedToDay)).as("cumulativePlays")
                )
                .from(PLAYS)
                .join(TRACKS).onKey()
                .join(ARTISTS).onKey()
                .where(ARTISTS.ID.eq(artistId))
                .groupBy(playedOnTruncatedToDay,
                        ARTISTS.ARTIST
                )
                .orderBy(playedOnTruncatedToDay,
                        ARTISTS.ARTIST
                )
                .fetch()
                .formatJSON(response.getOutputStream());
    }
}
