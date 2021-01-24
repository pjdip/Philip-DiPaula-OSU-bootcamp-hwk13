DROP DATABASE IF EXISTS burgers_db;
CREATE DATABASE burgers_db;
USE burgers_db;

CREATE TABLE burgers (
    id INT NOT NULL AUTO_INCREMENT,
    burger_name STRING NOT NULL,
    devoured BOOL DEFAULT false,
    PRIMARY KEY (id);
);