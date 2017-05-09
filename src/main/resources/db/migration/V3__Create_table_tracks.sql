CREATE TABLE tracks (
    id SERIAL NOT NULL,
    artist_id INTEGER NOT NULL,
    genre_id INTEGER NOT NULL,
    album VARCHAR(255) NOT NULL,    
    name VARCHAR(4000) NOT NULL,    
    year SMALLINT NULL,   
    compilation VARCHAR(1) DEFAULT 'f' NOT NULL CHECK(compilation IN ('t','f')) ,
    disc_count   SMALLINT NULL,
    disc_number  SMALLINT NULL,
    track_count  SMALLINT NULL,
    track_number SMALLINT NULL,
    CONSTRAINT tracks_pk PRIMARY KEY (id),
    CONSTRAINT tracks_uk UNIQUE (artist_id, genre_id, album, name, track_number, disc_number),
    CONSTRAINT tracks_artists_fk FOREIGN KEY (artist_id) REFERENCES artists(id),
    CONSTRAINT tracks_genres_fk FOREIGN KEY (genre_id) REFERENCES genres(id)
);