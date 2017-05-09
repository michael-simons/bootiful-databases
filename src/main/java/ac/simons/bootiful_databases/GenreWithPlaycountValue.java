package ac.simons.bootiful_databases;

public class GenreWithPlaycountValue {
    private final String genre;
    
    private final int playcount;

    public GenreWithPlaycountValue(String genre, int playcount) {
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