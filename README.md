# Demos for the talk "Bootiful database-centric applications with jOOQ"

**Important:** _The commits and commit messages have been written very carefully to guide you through reading this project and understanding the talk. Please take your time to study them if you don't understand something_.

## Slides

Slides are on speaker deck: [Michael Simons](https://speakerdeck.com/michaelsimons)

## Abstract

The basic idea of this demo is to create a "cloud native" app based on [Spring Boot](http://projects.spring.io/spring-boot) and then using [jOOQ](http://www.jooq.org) as "database first", SQL-centric approach to the database.

Functional wise the application deals with a simple database model storing the names, artists, genres and albums of tracks I listened to the last years. Those data in full comes from my daily foto project [Daily Fratze](https://dailyfratze.de) that I've been running this year for more than 12 years.

The application demonstrates the value of jOOQ when it comes to analysis of data, an area for which ORMs like hibernate weren't designed (see comment by Gavin King on ["What ORMs have taught me: just learn SQL"](https://www.reddit.com/r/programming/comments/2cnw8x/what_orms_have_taught_me_just_learn_sql/cjheyec). If you just deal with simple inserts, updates and deletes during OLTP, you're mostly fine using ORMs like JPA, even problems like the _n+1_ query problems are known and often solved.

But if you want to use powerful, analytic functions or have to deal with a database model that is a less than optimal fit for an ORM, than jOOQ will help you.

jOOQ is one of several quite different technologies to access relational data from Java based applications. 

jOOQ is short for "Java object oriented querying" and describes a query builder framework that takes a look at your database schema, independent wether you use an Open Source database like PostgreSQL or an commercial product like Oracle Database., and provides you with a domain specific language (DSL) for generating statements.

jOOQs goal is explicitly not to shield the user from SQL but providing a type safe way to use it.

Learn in this session who you can facilitate the "magic" of Spring Boot to provide jOOQ with needed resources and then use it to publish advanced analytic queries as HTTP apis.

Along the way you learn how automatic database migrations help you to do continuous delivery even with database centric applications.

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


## Fun

A work of art, done by a madmen, this post by [Lukas Eder](https://twitter.com/lukaseder) ["How to Plot an ASCII Bar Chart with SQL"](https://blog.jooq.org/how-to-plot-an-ascii-bar-chart-with-sql/).
With the dataset available in this repository, you can plot a chart of how often I listened to Queen in 2016:

```
                                          chart                                           
------------------------------------------------------------------------------------------
 45.0000000 |                                              ##                           
 42.0000000 |                                              ##                           
 39.0000000 |                                              ##                           
 36.0000000 |                                              ##          ##               
 33.0000000 |                                              ##          ##               
 30.0000000 |                                              ##          ##               
 27.0000000 |                                              ##          ##               
 24.0000000 |                                              ##          ##               
 21.0000000 |                   ##                         ##          ##               
 18.0000000 |                   ##                         ##          ##               
 15.0000000 | ##    ##    ##    ##             ##          ##          ##               
 12.0000000 | ##    ##    ##    ##             ##          ##          ##               
 9.00000000 | ##    ##    ##    ##             ##       ## ##          ##               
 6.00000000 | ##    ##    ##    ##          ## ##       ## ## ##       ##               
 3.00000000 | ##    ##    ##    ##          ## ##       ## ## ##    ## ##               
 -----------+----------------------------------------------------------------------------
            | 2016-01-13 00:00:00                                     2016-06-30 00:00:00
(17 rows)
```

with this query:


```
-- The example uses https://www.jooq.org/sakila, but you can just replace
-- the "source" table with anything else
with
 
  -- This part is what you can modify to adapt to your own needs
  --------------------------------------------------------------
 
  -- Your data producing query here 
  source (key, value) as (
    select p.played_on::date::timestamp, count(*)
    from plays p join tracks t on t.id = p.track_id join artists a on a.id = t.artist_id
    where a.artist = 'Queen'
    group by p.played_on::date::timestamp
  ),
   
  -- Some configuration items:
  constants as (
    select
     
      -- the height of the y axis
      15 as height, 
 
      -- the width of the x axis, if normalise_x, otherwise, ignored
      25 as width, 
 
      -- the bar characters
      '##' as characters,
 
      -- the characters between bars
      ' ' as separator,
       
      -- the padding of the labels on the y axis
      10 as label_pad, 
       
      -- whether to normalise the data on the x axis by
      -- - filling gaps (if int, bigint, numeric, timestamp, 
      --   timestamptz)
      -- - scaling the x axis to "width"
      true as normalise_x
  ),
   
  -- The rest doesn't need to be touched
  --------------------------------------
   
  -- Pre-calculated dimensions of the source data
  source_dimensions (kmin, kmax, kstep, vmin, vmax) as (
    select
      min(key), max(key), 
      (max(key) - min(key)) / max(width), 
      min(value), max(value)
    from source, constants
  ),
   
  -- Normalised data, which fills the gaps in case the key data
  -- type can be generated with generate_series (int, bigint, 
  -- numeric, timestamp, timestamptz)
  source_normalised (key, value) as (
    select k, coalesce(sum(source.value), 0)
    from source_dimensions
      cross join constants
      cross join lateral 
        generate_series(kmin, kmax, kstep) as t (k)
      left join source 
        on source.key >= t.k and source.key < t.k + kstep
    group by k
  ),
 
  -- Replace source_normalised by source if you don't like the 
  -- normalised version
  actual_source (i, key, value) as (
    select row_number() over (order by key), key, value 
    from source_normalised, constants
    where normalise_x
    union all
    select row_number() over (order by key), key, value
    from source, constants
    where not normalise_x
  ),
     
  -- Pre-calculated dimensions of the actual data
  actual_dimensions (
    kmin, kmax, kstep, vmin, vmax, width_or_count
  ) as (
    select
      min(key), max(key), 
      (max(key) - min(key)) / max(width), 
      min(value), max(value), 
      case
        when every(normalise_x) then least(max(width), count(*)::int) 
        else count(*)::int
      end
    from actual_source, constants
  ),
   
  -- Additional convenience
  dims_and_consts as (
    with
      temp as (
        select *, 
        (length(characters) + length(separator)) 
          * width_or_count as bar_width
      from actual_dimensions, constants
    )
    select *,
      (bar_width - length(kmin::text) - length(kmax::text)) 
        as x_label_pad
    from temp
  ),
   
  -- A cartesian product for all (x, y) data points
  x (x) as (
    select generate_series(1, width_or_count) from dims_and_consts
  ),
  y (y) as (
    select generate_series(1, height) from dims_and_consts
  ),
 
  -- Rendering the ASCII chart
  chart (rn, chart) as (
    select
      y,
      lpad(y * (vmax - vmin) / height || '', label_pad) 
        || ' | '
        || string_agg(
             case
               when height * actual_source.value / (vmax - vmin) 
                 >= y then characters 
               else repeat(' ', length(characters)) 
             end, separator 
             order by x
           )
    from
      x left join actual_source on actual_source.i = x, 
      y, dims_and_consts
    group by y, vmin, vmax, height, label_pad
    union all
    select
      0, 
      repeat('-', label_pad) 
        || '-+-'
        || repeat('-', bar_width)
    from dims_and_consts
    union all
    select
      -1, 
      repeat(' ', label_pad) 
        || ' | '
        || case
             when x_label_pad < 1 then ''
             else kmin || repeat(' ', x_label_pad) || kmax 
           end
    from dims_and_consts
  )
select chart
from chart
order by rn desc
;
```


## License

<a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/"><img alt="Creative Commons Lizenzvertrag" style="border-width:0" src="https://i.creativecommons.org/l/by-nc-sa/4.0/88x31.png" /></a><br /><span xmlns:dct="http://purl.org/dc/terms/" property="dct:title">"Bootiful database-centric applications with jOOQ"</span> von <a xmlns:cc="http://creativecommons.org/ns#" href="https://github.com/michael-simons/DOAG2016" property="cc:attributionName" rel="cc:attributionURL">Michael J. Simons</a> ist lizenziert unter einer <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/">Creative Commons Namensnennung - Nicht-kommerziell - Weitergabe unter gleichen Bedingungen 4.0 International Lizenz</a>.