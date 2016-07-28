package ac.simons.doag2016;

import java.io.IOException;
import java.math.BigDecimal;
import java.sql.Date;
import java.time.YearMonth;
import javax.servlet.http.HttpServletResponse;
import org.jooq.CommonTableExpression;
import org.jooq.DSLContext;
import org.jooq.DatePart;
import org.jooq.Field;
import org.jooq.Record3;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

import static ac.simons.doag2016.db.Tables.ARTISTS;
import static ac.simons.doag2016.db.Tables.PLAYS;
import static ac.simons.doag2016.db.Tables.TRACKS;
import static org.jooq.impl.DSL.concat;
import static org.jooq.impl.DSL.count;
import static org.jooq.impl.DSL.denseRank;
import static org.jooq.impl.DSL.name;
import static org.jooq.impl.DSL.orderBy;
import static org.jooq.impl.DSL.select;
import static org.jooq.impl.DSL.trunc;
import static org.jooq.impl.DSL.val;

@Controller
@RequestMapping("/api/charts")
public class ChartReportController {
    
    private final DSLContext create;

    public ChartReportController(DSLContext create) {
        this.create = create;
    }
    
    @RequestMapping("/{year}/{month}")
    public void getCharts(
            @PathVariable final int year,
            @PathVariable final int month,
            @RequestParam(defaultValue = "10") final int n,
            final HttpServletResponse response
    ) throws IOException {
        response.setContentType(MediaType.APPLICATION_JSON_UTF8_VALUE);
        
        final Field<Date> playedOnTruncatedToDay = trunc(PLAYS.PLAYED_ON, DatePart.DAY).cast(Date.class);
        
        YearMonth hlp = YearMonth.of(year, month);        
        final CommonTableExpression<Record3<BigDecimal, Integer, Integer>> currentMonth = name("previous_month").fields("track_id", "cnt", "position")
                .as(select(PLAYS.TRACK_ID, count().as("cnt"), denseRank().over(orderBy(count().desc())).as("position"))
                        .from(PLAYS)
                        .where(playedOnTruncatedToDay.between(Date.valueOf(hlp.atDay(1)), Date.valueOf(hlp.atEndOfMonth())))
                        .groupBy(PLAYS.TRACK_ID));
        
        hlp = hlp.minusMonths(1);
        final CommonTableExpression<Record3<BigDecimal, Integer, Integer>> previousMonth = name("current_month").fields("track_id", "cnt", "position")
                .as(select(PLAYS.TRACK_ID, count().as("cnt"), denseRank().over(orderBy(count().desc())).as("position"))
                        .from(PLAYS)
                        .where(playedOnTruncatedToDay.between(Date.valueOf(hlp.atDay(1)), Date.valueOf(hlp.atEndOfMonth())))
                        .groupBy(PLAYS.TRACK_ID));        
        
        final Field<String> label = concat(ARTISTS.ARTIST, val(" - "), TRACKS.NAME, val(" ("), TRACKS.ALBUM, val(")")).as("label");        
        this.create
                .with(currentMonth)
                .with(previousMonth)
                .select(label, 
                        currentMonth.field("cnt"), 
                        previousMonth.field("position").minus(currentMonth.field("position")).as("change")
                )
                .from(TRACKS)
                .join(ARTISTS).onKey()
                .join(currentMonth).on(currentMonth.field("track_id", BigDecimal.class).eq(TRACKS.ID))
                .leftOuterJoin(previousMonth).on(previousMonth.field("track_id", BigDecimal.class).eq(TRACKS.ID))                
                .orderBy(currentMonth.field("cnt").desc(), label.asc())
                .limit(n)
                .fetch()
                .formatJSON(response.getOutputStream());
    }
}
