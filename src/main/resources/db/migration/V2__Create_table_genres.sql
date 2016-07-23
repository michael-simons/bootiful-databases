CREATE TABLE genres (
    id INTEGER NOT NULL,
    genre varchar2(255) NOT NULL,
    CONSTRAINT genres_pk PRIMARY KEY (id),
    CONSTRAINT genres_uk UNIQUE (genre)
);