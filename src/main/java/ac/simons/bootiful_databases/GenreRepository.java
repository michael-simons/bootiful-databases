package ac.simons.bootiful_databases;

import java.util.List;
import javax.persistence.EntityManager;
import javax.persistence.Query;
import org.jooq.DSLContext;
import org.jooq.Field;
import org.jooq.Record;
import org.jooq.SelectQuery;
import org.jooq.conf.ParamType;
import org.jooq.impl.DSL;
import org.springframework.data.repository.CrudRepository;

import static ac.simons.bootiful_databases.db.tables.Genres.GENRES;
import static ac.simons.bootiful_databases.db.tables.Plays.PLAYS;
import static ac.simons.bootiful_databases.db.tables.Tracks.TRACKS;
import static org.jooq.impl.DSL.count;
import static org.jooq.impl.DSL.rank;
import static org.jooq.impl.DSL.select;

public interface GenreRepository extends 
        CrudRepository<GenreEntity, Integer>, GenreRepositoryExt {
    
    List<GenreEntity> findAllByOrderByName();
}

interface GenreRepositoryExt {
    List<GenreWithPlaycount> findAllWithPlaycount();
    
    List<GenreEntity> findWithHighestPlaycount();
}

class GenreRepositoryImpl implements GenreRepositoryExt {

    private final EntityManager entityManager;
    
    private final DSLContext create;

    public GenreRepositoryImpl(EntityManager entityManager, DSLContext create) {
        this.entityManager = entityManager;
        this.create = create;
    }
    
    @Override
    public List<GenreWithPlaycount> findAllWithPlaycount() {
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
    
    @Override
    public List<GenreEntity> findWithHighestPlaycount() {
        /*
        select id, genre 
        from (
          select g.id, g.genre, rank() over (order by count(*) desc) rnk 
            from plays p
            join tracks t on p.track_id = t.id
            join genres g on t.genre_id = g.id
           group by g.id, g.genre
        ) src
        where src.rnk = 1;
        */
        final SelectQuery<Record> sqlGenerator = 
        this.create.select()
                .from(
                        select(
                                GENRES.ID, GENRES.GENRE, 
                                rank().over().orderBy(count().desc()).as("rnk")
                        ).from(PLAYS)
                        .join(TRACKS).onKey()
                        .join(GENRES).onKey()
                        .groupBy(GENRES.ID, GENRES.GENRE)
                ).where(DSL.field("rnk").eq(1)).getQuery();

         // Retrieve sql with named parameter
        final String sql = sqlGenerator.getSQL(ParamType.NAMED);
        // and create actual hibernate query
        final Query query = this.entityManager.createNativeQuery(sql, GenreEntity.class);
        // fill in parameter
        sqlGenerator.getParams().forEach((n, v) -> query.setParameter(n, v.getValue()));
        // execute query
        return query.getResultList();
    }
}