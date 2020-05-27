

SET NAMES utf8mb4;

CREATE TABLE `User` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `email` VARCHAR(255) NOT NULL,
  `password` VARCHAR(32) NOT NULL,
  `create_time` DATETIME NOT NULL,
  `name` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE `Occassion` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(255) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;


CREATE TABLE `Payment` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `amount` FLOAT NOT NULL,
  `user_id` INT NOT NULL,
  `Order_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  CONSTRAINT `fk_user`
    FOREIGN KEY (`user_id`)
    REFERENCES `User` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Payment_Order`
    FOREIGN KEY (`Order_id`)
    REFERENCES `Order` (`id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE)
ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;


CREATE TABLE `Order` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `user_id` INT NOT NULL,
  `create_date` DATETIME NOT NULL,
  `status` VARCHAR(25) NOT NULL,
  `Payment_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  CONSTRAINT `fk_user`
    FOREIGN KEY (`user_id`)
    REFERENCES `User` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Order_Payment`
    FOREIGN KEY (`Payment_id`)
    REFERENCES `Payment` (`id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE)
ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;


CREATE TABLE `Cake` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `theme` VARCHAR(45) NOT NULL,
  `flavor` VARCHAR(45) NOT NULL,
  `frosting_type` VARCHAR(45) NOT NULL,
  `type` VARCHAR(45) NOT NULL,
  `Order_id` INT NOT NULL,
  PRIMARY KEY (`id`),
   CONSTRAINT `fk_Cake_Order`
    FOREIGN KEY (`Order_id`)
    REFERENCES `Order` (`id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE)
ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;a


CREATE TABLE `Cake_Occassion` (
  `Cake_id` INT NOT NULL,
  `Occassion_id` INT NOT NULL,
  PRIMARY KEY (`Cake_id`, `Occassion_id`),
     CONSTRAINT `fk_Cake_Occassion_idx1`
    FOREIGN KEY (`Cake_id`)
    REFERENsCES `Cake` (`id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE,
  CONSTRAINT `fk_Cake_Occassion_idx2`
    FOREIGN KEY (`Occassion_id`)
    REFERENCES `Occassion` (`id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE)
ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
}