package ac.simons.doag2016;

import ac.simons.doag2016.db.tables.Genres;
import org.jooq.Record;
import org.jooq.RecordMapper;
import org.springframework.stereotype.Component;

@Component
public class GenreWithPlaycountValueRecordMapper implements RecordMapper<Record, GenreWithPlaycountValue> {

    @Override
    public GenreWithPlaycountValue map(Record record) {
        return new GenreWithPlaycountValue(record.get(Genres.GENRES.GENRE), record.get("cnt", Integer.class));
    }
}
