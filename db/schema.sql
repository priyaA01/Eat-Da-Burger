CREATE DATABASE burgers_db;

	-- drop table burgers_db.burgers;

CREATE TABLE burgers_db.burgers(
		id INT AUTO_INCREMENT PRIMARY KEY,
        burger_name VARCHAR(100),
        devoured BOOLEAN DEFAULT FALSE
);