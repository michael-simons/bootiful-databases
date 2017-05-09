package ac.simons.bootiful_databases;

import ac.simons.bootiful_databases.db.tables.pojos.Genres;
import java.util.List;
import org.jooq.DSLContext;
import org.jooq.Field;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import static ac.simons.bootiful_databases.db.tables.Genres.GENRES;
import static ac.simons.bootiful_databases.db.tables.Plays.PLAYS;
import static ac.simons.bootiful_databases.db.tables.Tracks.TRACKS;
import static org.jooq.impl.DSL.count;

@RestController
@RequestMapping("/api/genres")
public class GenreApiController {
    private final DSLContext create;

    private final GenreRepository genreRepository;

    public GenreApiController(DSLContext create, GenreRepository genreRepository) {
        this.create = create;
        this.genreRepository = genreRepository;
    }

    @GetMapping
    public List<Genres> getGenres() {
        return this.create
                .selectFrom(GENRES)
                .orderBy(GENRES.GENRE)
                .fetchInto(Genres.class);
    }

    @GetMapping("/playcounts")
    public List<GenreWithPlaycount> getPlaycounts() {
        final Field<Integer> cnt = count().as("cnt");
        return this.create
                .select(GENRES.GENRE, cnt)
                .from(PLAYS)
                .join(TRACKS).onKey()
                .join(GENRES).onKey()
                .groupBy(GENRES.GENRE)
                .orderBy(cnt)
                .fetchInto(GenreWithPlaycount.class);
    }

    @GetMapping("/withHighestPlaycount")
    public List<GenreEntity> getGenresWithHighestPlaycount() {
        return this.genreRepository
                .findGenresWithHighestPlaycount();
    }
}
