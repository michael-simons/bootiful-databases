CREATE TABLE plays (
    id SERIAL NOT NULL,
    track_id INTEGER NOT NULL,
    played_on TIMESTAMP NOT NULL,        
    CONSTRAINT plays_pk PRIMARY KEY (id),    
    CONSTRAINT plays_tracks_fk FOREIGN KEY (track_id) REFERENCES tracks(id)
);

CREATE INDEX plays_played_on ON plays (played_on);

CREATE INDEX plays_played_on_date ON plays (date_trunc('day', played_on));