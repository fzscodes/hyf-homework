CREATE DATABASE `Meal_sharing` DEFAULT CHARACTER SET utf8mb4 COLLATE=utf8mb4_unicode_ci;
USE `Meal_sharing`;

SET NAMES utf8mb4;

CREATE TABLE  `Meal` (
 `id` int(10) unsigned NOT NULL AUTO_INCREMENT PRIMARY KEY,
 `title` VARCHAR(255) NOT NULL,
 `description` text NULL DEFAULT NULL,
 `location` VARCHAR(255) NOT NULL,
 `meal_time` DATETIME NOT NULL,
 `max_reservations` int(10) unsigned NOT NULL,
 `price` DECIMAL(6, 2) NOT NULL,
 `created_date` DATE NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE `Reservation`(
 `id` int(10) unsigned NOT NULL AUTO_INCREMENT PRIMARY KEY,
 `number_of_guests` int(10) unsigned NOT NULL,
 `meal_id` int(10) unsigned NOT NULL,
 `created_date` DATE NOT NULL,
 CONSTRAINT `fk_meal_reservation` FOREIGN KEY (`meal_id`) REFERENCES `Meal` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE `Review`(
 `id` int(10) unsigned NOT NULL AUTO_INCREMENT PRIMARY KEY,
 `title` VARCHAR(255) NOT NULL,
 `description` text NULL DEFAULT NULL,
 `meal_id` int(10) unsigned NOT NULL,
 `stars` int(10) unsigned NOT NULL,
 `created_date` DATE NOT NULL,
 CONSTRAINT `fk_meal_review` FOREIGN KEY (`meal_id`) REFERENCES `Meal` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
 ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
 
 -- Meal
 insert into Meal (title, description, location, meal_time, max_reservations, price, created_date) 
  values ('Soup', 'Campbells-Classic Chix', '53 Kenwood Junction', '2020-05-19  18:49:10', 2, 17.34, '2020-05-15');
insert into Meal (title, description, location, meal_time, max_reservations, price, created_date) 
  values ('Muffin', 'Mix - Creme Brule 15l', '8208 Homewood Place', '	2020-05-27 01:39:10', 3, 20.75, '2020-05-25');
insert into Meal (title, description, location, meal_time, max_reservations, price, created_date) 
  values ('Bouillion', ' Fish', '71 Annamark Drive', '2020-05-24 11:08:33', 5, 42.67, '2020-05-23');
insert into Meal (title, description, location, meal_time, max_reservations, price, created_date) 
  values ('Bread' , 'Wheat Baguette', '4 Blaine Junction', '	2020-05-31 15:47:01', 10, 11.31, '2020-05-30');
insert into Meal (title, description, location, meal_time, max_reservations, price, created_date) 
  values ('Appetizer', 'Assorted Box', '2 Redwing Trail', '2020-05-29 03:55:20', 8, 8.14, '2020-05-26');

-- Reservation
insert into Reservation (number_of_guests,meal_id,created_date)
 values(4, 1, '2020-05-20');
insert into Reservation (number_of_guests,meal_id,created_date)
 values(5, 2, '2020-05-29');
insert into Reservation (number_of_guests,meal_id,created_date)
 values(10, 4, '2020-05-15');
 insert into Reservation (number_of_guests,meal_id,created_date)
 values(2, 3, '2020-05-26');
 insert into Reservation (number_of_guests,meal_id,created_date)
 values(8, 5, '2020-05-19');
 insert into Reservation (number_of_guests,meal_id,created_date)
 values(3, 2, '2020-05-26');
  
-- Review
insert into Review (title, description, meal_id, stars,created_date)
 values ('Soup review', 'ok', 1, 4,'2020-05-22');
insert into Review (title, description, meal_id, stars,created_date)
 values ('Muffin review', 'Very Good', 2, 5,'2020-06-01');
insert into Review (title, description, meal_id, stars,created_date)
 values ('Bouillion review', 'Bad', 3, 1,'2020-06-02');
insert into Review (title, description, meal_id, stars,created_date)
 values ('Bread review', 'Good', 4, 4,'2020-06-04');
insert into Review (title, description, meal_id, stars,created_date)
 values ('Appetizer review', 'Ok', 5, 3,'2020-05-31');

-- QUERIES

-- MEAL
-- 1)Get all meals
SELECT * 
FROM Meal;

-- 2)Add a new meal
insert into Meal (title, description, location, meal_time, max_reservations, price, created_date) 
  values ('Halibut', 'Steaks',  '3 Trailsway Junction', '2020-06-02 20:29:13', 6, '35.05', '2020-06-01');
  
-- 3)Get a meal with any id, fx 1
SELECT * 
FROM Meal
WHERE id = 1;

-- 4)Update a meal with any id, fx 1. Update any attribute fx the title or multiple attributes
UPDATE Meal
SET location = '390 Grasskamp Lane'
WHERE id = 1;

-- 5)Delete a meal with any id, fx 1
DELETE FROM Meal
WHERE id = 1;

-- RESERVATION
-- 1)Get all reservations
SELECT *
FROM Reservation;

-- 2)Add a new reservation
insert into Reservation (number_of_guests,meal_id,created_date)
 values('6', '5', '2020-05-30');

-- 3)Get a reservation with any id, fx 1
SELECT *
FROM Reservation
WHERE id = 1;

-- 4)Update a reservation with any id, fx 1. Update any attribute fx the title or multiple attributes
UPDATE Reservation
SET number_of_guests = '15'
WHERE id = 1;

-- 5)Delete a reservation with any id, fx 1
DELETE FROM Reservation
WHERE id = 1;

-- REVIEW
-- 1)Get all reviews
SELECT *
FROM Review;

-- 2)Add a new review
insert into Review (title, description, meal_id, stars,created_date)
 values ('Halibut review', 'Good', 6, 4,'2020-06-03');
 
-- 3)Get a review with any id, fx 1
SELECT *
FROM Review
WHERE id = 1;

-- 4)Update a review with any id, fx 1. Update any attribute fx the title or multiple attributes
UPDATE Review
SET description = 'Good'
WHERE id = 1;

-- 5)Delete a review with any id, fx 1
DELETE FROM Review
WHERE id = 1;

-- Additional Queries
-- Now add a couple of different meals, reservations and reviews with different attributes

-- Meal
insert into Meal (title, description, location, meal_time, max_reservations, price, created_date) 
  values ('Chinese Foods', 'Thick Noodles', '3 New Castle Plaza', '2020-03-25 01:55:16', 20, 120.27, '2020-03-15');
insert into Meal (title, description, location, meal_time, max_reservations, price, created_date) 
  values ('White Baguette', 'Bread', '9 Grim Road', '2020-02-04 07:36:14', 10, 9.21, '2020-02-01');
insert into Meal (title, description, location, meal_time, max_reservations, price, created_date) 
  values ('Spring Roll Wrappers', 'Wraps', '1 Laurel Street', '2020-03-27 02:55:23', 5, 11.32, '2020-03-20');
insert into Meal (title, description, location, meal_time, max_reservations, price, created_date) 
  values ('Pecan Raisin - Tarts', 'Tarts', '149 Westridge Way', '2020-04-17 06:41:29', 7, 5.14, '2020-04-10');
insert into Meal (title, description, location, meal_time, max_reservations, price, created_date) 
  values ('Pasta', 'Lasagna Noodle', '78064 Sherman Drive', '2020-01-23 19:46:26', 12, 134.81, '2020-01-10');
insert into Meal (title, description, location, meal_time, max_reservations, price, created_date) 
  values ('Lamb', 'Whole Head Off', '75827 Warner Alley', '2020-04-27 13:55:57', 25, 152.38, '2020-04-15');
insert into Meal (title, description, location, meal_time, max_reservations, price, created_date) 
  values ('Bread-Pita', 'Pita', '51934 Melrose Street', '2020-03-09 15:05:49', 15, 4.71, '2020-03-02');

  
-- Reservation
insert into Reservation (number_of_guests,meal_id,created_date)
 values(12, 7, '2020-03-20');
insert into Reservation (number_of_guests,meal_id,created_date)
 values(10, 11, '2020-01-22');
insert into Reservation (number_of_guests,meal_id,created_date)
 values(8, 8, '2020-02-02');
insert into Reservation (number_of_guests,meal_id,created_date)
 values(25, 12, '2020-04-25');
insert into Reservation (number_of_guests,meal_id,created_date)
 values(5, 10, '2020-04-15');
insert into Reservation (number_of_guests,meal_id,created_date)
 values(4, 9, '2020-03-26');
 insert into Reservation (number_of_guests,meal_id,created_date)
 values(12, 13, '2020-03-07');
 
-- Review
insert into Review (title, description, meal_id, stars,created_date)
 values ('Chinese Food review', 'Excellent', 7, 5,'2020-03-22');
insert into Review (title, description, meal_id, stars,created_date)
 values ('Lamb review', 'Excellent', 12, 5,'2020-04-25');
insert into Review (title, description, meal_id, stars,created_date)
 values ('Pasta', 'Good', 11, 4,'2020-01-24');
insert into Review (title, description, meal_id, stars,created_date)
 values ('Spring Roll Wrapps review', 'Bad', 9, 1,'2020-03-28');
insert into Review (title, description, meal_id, stars,created_date)
 values ('White Baguette review', 'Ok', 8, 3,'2020-02-03');
insert into Review (title, description, meal_id, stars,created_date)
 values ('Pecan Raisin review', 'Very Good', 10, 4,'2020-04-15');
insert into Review (title, description, meal_id, stars,created_date)
 values ('Pita review', 'Good', 13, 4,'2020-03-15');
insert into Review (title, description, meal_id, stars,created_date)
 values ('Chinese Food review', 'Good', 7,4 ,'2020-03-22');
 
-- QUERIES
-- 1)Get meals that has a price smaller than a specific price fx 90
SELECT * 
FROM meal
WHERE price < 90;

-- 2)Get meals that still has available reservations
SELECT* 
FROM Meal m
JOIN Reservation rs
ON m.id = rs.meal_id
WHERE max_reservations > number_of_guests;

-- 3)Get meals that partially match a title.
SELECT * 
FROM meal
WHERE title LIKE '%Bread%';

-- 4)Get meals that has been created between two dates
SELECT * 
FROM meal
WHERE created_date BETWEEN '2020-03-01 12:00:00' AND '2020-04-01 12:00:00';

-- 5)Get only specific number of meals fx return only 5 meals
SELECT * 
FROM meal
LIMIT 5;

-- 6)Get the meals that have good reviews
SELECT m.title,m.description,m.location,m.max_reservations,m.price,r.meal_id,r.stars
FROM Meal m
JOIN Review r
ON m.id = r.meal_id
WHERE r.stars >= 4;

-- 7)Get reservations for a specific meal sorted by created_date
SELECT * 
FROM Reservation rs
JOIN Meal m
ON m.id = rs.meal_id
WHERE m.id = 12
ORDER BY rs.created_date DESC;

-- 8)Sort all meals by average number of stars in the reviews
SELECT m.id, m.title, m.description, avg(r.stars) as average_review
FROM Meal m
INNER JOIN Review r
ON m.id = r.meal_id
GROUP BY r.meal_id
ORDER BY average_review DESC;


