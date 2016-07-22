#!/bin/bash

echo 'Initialising database'

export ORACLE_SID=ORCLCDB

sqlplus / as sysdba @/var/tmp/scripts/create_tablespace_and_user.sql

echo 'Tablespace and user created'