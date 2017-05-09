package ac.simons.bootiful_databases;

public class GenreWithPlaycount {
    private final String genre;
    
    private final int playcount;

    public GenreWithPlaycount(String genre, int playcount) {
        this.genre = genre;
        this.playcount = playcount;
    }

    public String getGenre() {
        return genre;
    }

    public int getPlaycount() {
        return playcount;
    }
}
