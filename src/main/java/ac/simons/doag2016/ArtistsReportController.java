package ac.simons.doag2016;

import java.io.IOException;
import javax.servlet.http.HttpServletResponse;
import org.jooq.DSLContext;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import static ac.simons.doag2016.db.Tables.ARTISTS;

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
}
