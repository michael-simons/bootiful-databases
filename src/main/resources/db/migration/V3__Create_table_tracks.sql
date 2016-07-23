CREATE TABLE tracks (
    id INTEGER NOT NULL,
    artist_id INTEGER NOT NULL,
    genre_id INTEGER NOT NULL,
    album VARCHAR2(255) NOT NULL,    
    name VARCHAR2(4000) NOT NULL,    
    year NUMBER(4) NULL,   
    compilation VARCHAR2(1) DEFAULT 'f' NOT NULL CHECK(compilation IN ('t','f')) ,
    disc_count   NUMBER(2) NULL,
    disc_number  NUMBER(2) NULL,
    track_count  NUMBER(2) NULL,
    track_number NUMBER(2) NULL,
    CONSTRAINT tracks_pk PRIMARY KEY (id),
    CONSTRAINT tracks_uk UNIQUE (artist_id, genre_id, album, name, track_number, disc_number),
    CONSTRAINT tracks_artists_fk FOREIGN KEY (artist_id) REFERENCES artists(id),
    CONSTRAINT tracks_genres_fk FOREIGN KEY (genre_id) REFERENCES genres(id)
);