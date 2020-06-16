-- PART 1

-- 1) Add a task with these attributes: title, description, created, updated, due_date, status_id, user_id

INSERT INTO task(
title,
description,
created,
updated,
due_date,
status_id)
VALUES(
'GO to the gym',
'Workout half-hour each day',
'2020-05-24 18:35:40',
'2020-05-25 20:45:15',
'2020-06-30 12:00:00',
'1');

-- 2) Change the title of a task

UPDATE task
SET title = 'Do laundry'
WHERE id = 1;

-- 3)Change a task due date

UPDATE task
SET due_date = '2020-05-30 11:20:10'
WHERE id = 1;

-- 4) Change a task status

UPDATE task
SET status_id = '1'
WHERE id = 1;

-- 5) Mark a task as complete

UPDATE task
SET status_id = '3'
WHERE id = 4;

-- 6) Delete a task

DELETE 
FROM task
WHERE id = 2;
 
 -- PART 2
 -- 1) Create a new database containing the following tables:
-- Class: with the columns: id, name, begins (date), ends (date)
-- Student: with the columns: id, name, email, phone, class_id (foreign key)

CREATE DATABASE school;

USE school;

SET NAMES utf8mb4;

CREATE TABLE `Class` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `name` varchar(255) NOT NULL,
  `begin_date` DATETIME NOT NULL,
  `end_date` DATETIME NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;


CREATE TABLE `Student` (
 `id` int(10) unsigned NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `phone` varchar(255) NULL,
  `class_id` int(10) unsigned NOT NULL,
  CONSTRAINT `fk_class` FOREIGN KEY (`class_id`) REFERENCES `class` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

  -- Create an index on the name column of the student table.
ALTER TABLE Student ADD INDEX idx_newindex (name);
  
  -- Add a new column to the class table named status which can only have the following values: not-started, ongoing, finished
  ALTER TABLE Class
  ADD COLUMN status ENUM ('not-started','ongoing','finished');

-- Part 3: More queries
-- 1)Get all the tasks assigned to users whose email ends in @spotify.com
SELECT *
FROM user u
JOIN user_task ut
ON  u.id = ut.user_id
JOIN task t
ON t.id = ut.task_id
WHERE u.email LIKE '%@spotify.com';

-- 2)Get all the tasks for 'Donald Duck' with status 'Not started'
SELECT *
FROM task t
JOIN status s
ON t.status_id = s.id
JOIN user_task ut
ON ut.task_id = t.id
JOIN user u
ON u.id = ut.user_id
WHERE u.name = 'Donald Duck' AND s.name = 'Not started';

-- 3)Get all the tasks for 'Maryrose Meadows' that were created in september
SELECT *
FROM task t
JOIN user_task ut
ON ut.task_id = t.id
JOIN user u
ON u.id = ut.user_id
WHERE u.name = 'Maryrose Meadows' AND month(t.created )= '09';

-- 4)Find how many tasks where created in each month
 SELECT month(created),COUNT(*)
 FROM task
 GROUP BY month(created);
 