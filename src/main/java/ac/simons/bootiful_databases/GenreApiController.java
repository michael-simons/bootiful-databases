package ac.simons.bootiful_databases;

import java.util.List;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/genres")
public class GenreApiController {
    private final GenreRepository genreRepository;

    public GenreApiController(GenreRepository genreRepository) {
        this.genreRepository = genreRepository;
    }

    @GetMapping
    public List<GenreEntity> getGenres() {
        return this.genreRepository
                .findAllByOrderByName();
    }

    @GetMapping("/playcounts")
    public List<GenreWithPlaycount> getPlaycounts() {
        return this.genreRepository
                .findAllWithPlaycount();
    }

    @GetMapping("/withHighestPlaycount")
    public List<GenreEntity> getGenresWithHighestPlaycount() {
        return this.genreRepository
                .findWithHighestPlaycount();
    }
}
