CREATE TABLE artists (
    id INTEGER NOT NULL,
    artist varchar2(255) NOT NULL,
    CONSTRAINT artists_pk PRIMARY KEY (id),
    CONSTRAINT artists_uk UNIQUE (artist)
);