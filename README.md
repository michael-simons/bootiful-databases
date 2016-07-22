# Database centric applications with Spring Boot and jOOQ

**Important:** _The commits and commit messages have been written very carefully to guide you through reading this project and understanding the talk. Please take your time to study them if you don't understand something_.

## Talk at DOAG 2016

_Note: The talk and the slides are in German as DOAG con is a German conference, the demo, the readme and other artifacts inside this repo are in English in hope they are useful to a broader audience._

This repository contains the This repository contains the talk, including my notes and the complete demo, I've created for [DOAG Konferenz + Ausstellung](https://2016.doag.org/de/home/) in Nürnberg.

The basic idea of this demo is to create "cloud native" app based on [Spring Boot](http://projects.spring.io/spring-boot) and then using [jOOQ](http://www.jooq.org) as "database first", SQL-centric approach to your database.

Functional wise the application deals with a simple database model storing the names, artists, genres and albums of tracks I listened to the last years. Those data in full comes from my daily foto project [Daily Fratze](https://dailyfratze.de) that I've been running this year for more than 12 years.

The application demonstrates the value of jOOQ when it comes to analysis of data, an area for which ORMs like hibernate weren't designed (see comment by Gavin King on ["What ORMs have taught me: just learn SQL"](https://www.reddit.com/r/programming/comments/2cnw8x/what_orms_have_taught_me_just_learn_sql/cjheyec). If you just deal with simple inserts, updates and deletes during OLTP, you're mostly fine using ORMs like JPA, even problems like the _n+1_ query problems are known and often solved.

But if you want to use [modern sql](https://modern-sql.com) and [the index](http://use-the-index-luke.com), for example powerful, analytic functions or have to deal with a database model that is a less than optimal fit for an ORM, than jOOQ will help you.

## Creating and running the demo database

As DOAG Konferenz is an Oracle database centric conference, I used Oracle throughout the demo and prepared some docker scripts to get you up and running quickly.

1. Go to [docker.com](http://www.docker.com/products/docker) and install docker on your machine
2. Download [Oracle Database 12c Release 1 Enterprise Edition for Linux](http://www.oracle.com/technetwork/database/enterprise-edition/downloads/database12c-linux-download-2240591.html)
3. Go to [Oracles docker images repository](https://github.com/oracle/docker-images/tree/master/OracleDatabase), download the _OracleDatabase_ scripts and follow the instructions. Remember to add the two files from step 2 to "dockerfiles/12.1.0.2". I used the following command: `./buildDockerImage.sh -v 12.1.0.2 -e -p admin`
4. Then, inside this repository use `docker build -t msimons/doag2016 .` to create an image containing a user _doag2016_ with the same password inside the PDB container _ORCLPDB1_
5. Run a container based on this image with `docker run -d -p 1521:1521 -p 5500:5500 -p 5501:5501 msimons/doag2016`

You can access the Enterprise manager express for the root container at [https://localhost:5500/em](https://localhost:5500/em) and the container ORCLPDB1 at [https://localhost:5501/em](https://localhost:5501/em).

Use SQL*Plus to interact with the database. The admin password depends on what you used in step 3, the _doag2016_ account can be used with `sqlplus doag2016/doag2016@//localhost:1521/ORCLPDB1`.



## License

<a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/"><img alt="Creative Commons Lizenzvertrag" style="border-width:0" src="https://i.creativecommons.org/l/by-nc-sa/4.0/88x31.png" /></a><br /><span xmlns:dct="http://purl.org/dc/terms/" property="dct:title">"Database centric applications with Spring Boot and jOOQ"</span> von <a xmlns:cc="http://creativecommons.org/ns#" href="https://github.com/michael-simons/DOAG2016" property="cc:attributionName" rel="cc:attributionURL">Michael J. Simons</a> ist lizenziert unter einer <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/">Creative Commons Namensnennung - Nicht-kommerziell - Weitergabe unter gleichen Bedingungen 4.0 International Lizenz</a>.