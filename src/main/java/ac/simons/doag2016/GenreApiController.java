package ac.simons.doag2016;

import ac.simons.doag2016.db.tables.pojos.Genres;
import java.util.List;
import org.jooq.DSLContext;
import org.jooq.Field;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import static ac.simons.doag2016.db.tables.Genres.GENRES;
import static org.jooq.impl.DSL.count;

@RestController
@RequestMapping("/genres")
public class GenreApiController {
    private final DSLContext create;

    public GenreApiController(DSLContext create) {
        this.create = create;
    }

    @GetMapping
    public List<Genres> getGenres() {
        return this.create
                .selectFrom(GENRES)
                .orderBy(GENRES.GENRE)
                .fetchInto(Genres.class);                
    }
    
    @GetMapping("/playcounts")
    public List<GenreWithPlaycountValue> getPlaycounts() {
        final Field<Integer> cnt = count().as("cnt");
        return this.create
                .select(GENRES.GENRE, cnt)
                .from(GENRES)
                .groupBy(GENRES.GENRE)
                .orderBy(cnt)
                .fetchInto(GenreWithPlaycountValue.class);
    }
}
