# Demos for the talk "Bootiful database-centric applications with jOOQ"

**Important:** _The commits and commit messages have been written very carefully to guide you through reading this project and understanding the talk. Please take your time to study them if you don't understand something_.

## Slides

Slides are on speaker deck: [Michael Simons](https://speakerdeck.com/michaelsimons)

## Abstract

The basic idea of this demo is to create "cloud native" app based on [Spring Boot](http://projects.spring.io/spring-boot) and then using [jOOQ](http://www.jooq.org) as "database first", SQL-centric approach to your database.

Functional wise the application deals with a simple database model storing the names, artists, genres and albums of tracks I listened to the last years. Those data in full comes from my daily foto project [Daily Fratze](https://dailyfratze.de) that I've been running this year for more than 12 years.

The application demonstrates the value of jOOQ when it comes to analysis of data, an area for which ORMs like hibernate weren't designed (see comment by Gavin King on ["What ORMs have taught me: just learn SQL"](https://www.reddit.com/r/programming/comments/2cnw8x/what_orms_have_taught_me_just_learn_sql/cjheyec). If you just deal with simple inserts, updates and deletes during OLTP, you're mostly fine using ORMs like JPA, even problems like the _n+1_ query problems are known and often solved.

But if you want to use [modern sql](https://modern-sql.com) and [the index](http://use-the-index-luke.com), for example powerful, analytic functions or have to deal with a database model that is a less than optimal fit for an ORM, than jOOQ will help you.

## Sample requests

Part of the application is in actual use (the schema and some of the queries) at [Daily Fratze](https://dailyfratze.de). You can implement your own scrobble application. This version supports the following requests for now

```
## Get all artists
curl -X "GET" "http://127.0.0.1:8080/api/artists"
```

```
## Get top n albums by some artists
curl -X "GET" "http://127.0.0.1:8080/api/artists/54,86/topNAlbums"
```

```
## Get top n tracks by some artists Duplicate
curl -X "GET" "http://127.0.0.1:8080/api/artists/54,86/topNTracks"
```

```
## Get cumulative plays by some artists
curl -X "GET" "http://127.0.0.1:8080/api/artists/54,86/cumulativePlays"
```

```
## Get charts for a month
curl -X "GET" "http://127.0.0.1:8080/api/charts/2016/5?n=40"
```

## Creating and running the demo

The project needs a running PostgreSQL database providing a user `bootiful-databases` with the same password.

The project provides the docker-maven-plugin, that creates a container providing PostgreSQL database. If you have Docker installed for your system, you can run everything with

```
./mvnw docker:start spring-boot:run
```

and access the application at [http://localhost:8080](http://localhost:8080).

## Ressourcen

* [Spring Initializr](http://start.spring.io)
* [jOOQ](http://www.jooq.org)
* [Modern SQL](https://modern-sql.com)
* [Java, SQL and jOOQ](https://blog.jooq.org)
* [Vlad on Hibernate](https://vladmihalcea.com/tutorials/hibernate/)
* [Thoughts on Java](http://www.thoughts-on-java.org/persistence/)
* [Flyway by Boxfuse](https://flywaydb.org)
* [Spring Data JPA](http://projects.spring.io/spring-data-jpa/)
* [Repository Pattern](http://martinfowler.com/eaaCatalog/repository.html)

## License

<a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/"><img alt="Creative Commons Lizenzvertrag" style="border-width:0" src="https://i.creativecommons.org/l/by-nc-sa/4.0/88x31.png" /></a><br /><span xmlns:dct="http://purl.org/dc/terms/" property="dct:title">"Bootiful database-centric applications with jOOQ"</span> von <a xmlns:cc="http://creativecommons.org/ns#" href="https://github.com/michael-simons/DOAG2016" property="cc:attributionName" rel="cc:attributionURL">Michael J. Simons</a> ist lizenziert unter einer <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/">Creative Commons Namensnennung - Nicht-kommerziell - Weitergabe unter gleichen Bedingungen 4.0 International Lizenz</a>.