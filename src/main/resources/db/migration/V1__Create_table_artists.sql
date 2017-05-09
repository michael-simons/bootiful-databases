CREATE TABLE artists (
    id SERIAL NOT NULL,
    artist VARCHAR(255) NOT NULL,
    CONSTRAINT artists_pk PRIMARY KEY (id),
    CONSTRAINT artists_uk UNIQUE (artist)
);