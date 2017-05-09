package ac.simons.bootiful_databases;

import ac.simons.bootiful_databases.db.tables.Genres;
import org.jooq.Record;
import org.jooq.RecordMapper;
import org.springframework.stereotype.Component;

@Component
public class GenreWithPlaycountRecordMapper implements RecordMapper<Record, GenreWithPlaycount> {

    @Override
    public GenreWithPlaycount map(Record record) {
        return new GenreWithPlaycount(record.get(Genres.GENRES.GENRE), record.get("cnt", Integer.class));
    }
}
