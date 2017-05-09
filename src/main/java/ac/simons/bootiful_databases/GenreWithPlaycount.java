package ac.simons.bootiful_databases;

public class GenreWithPlaycount {
    private final String name;
    
    private final int playcount;

    public GenreWithPlaycount(String genre, int playcount) {
        this.name = genre;
        this.playcount = playcount;
    }

    public String getName() {
        return name;
    }

    public int getPlaycount() {
        return playcount;
    }
}
