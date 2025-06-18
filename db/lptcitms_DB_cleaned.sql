-- MySQL dump 10.13  Distrib 8.4.5, for Linux (x86_64)
--
-- Host: localhost    Database: lptcitms
-- ------------------------------------------------------
-- Server version	8.4.5
-- Dump completed on 2025-06-05  8:14:01

-- Disable certain checks for dump compatibility
SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT;
SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS;
SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION;
SET NAMES utf8mb4;
SET @OLD_TIME_ZONE=@@TIME_ZONE;
SET TIME_ZONE='+00:00';
SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO';
SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0;

-- ------------------------------------------------------
-- Table structure for table `users`
-- Stores user authentication and role information
-- ------------------------------------------------------
DROP TABLE IF EXISTS `users`;
SET @saved_cs_client = @@character_set_client;
SET character_set_client = utf8mb4;
CREATE TABLE `users` (
  `user_id` INT NOT NULL AUTO_INCREMENT,
  `username` VARCHAR(50) NOT NULL,
  `password_hash` VARCHAR(255) NOT NULL,
  `role` ENUM('student','teacher') NOT NULL,
  `is_first_login` TINYINT(1) DEFAULT '1',
  `created_at` TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`user_id`),
  UNIQUE KEY `username` (`username`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
SET character_set_client = @saved_cs_client;

-- Dumping data for table `users`
LOCK TABLES `users` WRITE;
INSERT INTO `users` VALUES
(1,'teachermock@example.com','$argon2id$v=19$m=65536,t=3,p=4$E1TTYFJdL402HEaDiCsP+g$xkZVK2gSteh7pcwZcSsuI+PucBpA8zT92sEetGd5qFM','teacher',0,'2025-06-02 07:40:34'),
(2,'advisor1@example.com','$argon2id$v=19$m=65536,t=3,p=4$HyBOfwW+fQpt9VSStlErpw$dA0WRGaevsLuu5+KvIG/aWKI9DbPvFJwQkLysuEYcCc','teacher',1,'2025-06-02 07:40:34'),
(3,'65010001','$argon2id$v=19$m=65536,t=3,p=4$xFZfFhM98D/8E+rr01apGA$8rSSM4BUKuF4sWii0SqqiNdrjk8GX9JoHEFMYaBCb2Y','student',0,'2025-06-02 07:41:04'),
(4,'65010002','$argon2id$v=19$m=65536,t=3,p=4$HyBOfwW+fQpt9VSStlErpw$dA0WRGaevsLuu5+KvIG/aWKI9DbPvFJwQkLysuEYcCc','student',1,'2025-06-02 07:41:04'),
(5,'65010003','$argon2id$v=19$m=65536,t=3,p=4$HyBOfwW+fQpt9VSStlErpw$dA0WRGaevsLuu5+KvIG/aWKI9DbPvFJwQkLysuEYcCc','student',1,'2025-06-02 07:41:04');
UNLOCK TABLES;

-- ------------------------------------------------------
-- Table structure for table `teachers`
-- Stores teacher-specific information
-- ------------------------------------------------------
DROP TABLE IF EXISTS `teachers`;
SET @saved_cs_client = @@character_set_client;
SET character_set_client = utf8mb4;
CREATE TABLE `teachers` (
  `teacher_id` INT NOT NULL,
  `full_name` VARCHAR(100) DEFAULT NULL,
  `email` VARCHAR(100) NOT NULL,
  `phone` VARCHAR(20) DEFAULT NULL,
  `position` VARCHAR(50) DEFAULT NULL,
  PRIMARY KEY (`teacher_id`),
  UNIQUE KEY `email` (`email`),
  CONSTRAINT `teachers_ibfk_1` FOREIGN KEY (`teacher_id`) REFERENCES `users` (`user_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
SET character_set_client = @saved_cs_client;

-- Dumping data for table `teachers`
LOCK TABLES `teachers` WRITE;
INSERT INTO `teachers` VALUES
(1,'asdf','PatthananLT@gmail.com','0892663290','teacher'),
(2,'asdfasdf','advisor1@example.com','0800000001','teacher');
UNLOCK TABLES;

-- ------------------------------------------------------
-- Table structure for table `teacher_roles`
-- Defines roles for teachers (instructor or advisor)
-- ------------------------------------------------------
DROP TABLE IF EXISTS `teacher_roles`;
SET @saved_cs_client = @@character_set_client;
SET character_set_client = utf8mb4;
CREATE TABLE `teacher_roles` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `teacher_id` INT NOT NULL,
  `role` ENUM('course_instructor','project_advisor') NOT NULL,
  PRIMARY KEY (`id`),
  KEY `teacher_id` (`teacher_id`),
  CONSTRAINT `teacher_roles_ibfk_1` FOREIGN KEY (`teacher_id`) REFERENCES `teachers` (`teacher_id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
SET character_set_client = @saved_cs_client;

-- Dumping data for table `teacher_roles`
LOCK TABLES `teacher_roles` WRITE;
INSERT INTO `teacher_roles` VALUES
(1,1,'course_instructor'),
(2,2,'project_advisor');
UNLOCK TABLES;

-- ------------------------------------------------------
-- Table structure for table `students`
-- Stores student-specific information
-- ------------------------------------------------------
DROP TABLE IF EXISTS `students`;
SET @saved_cs_client = @@character_set_client;
SET character_set_client = utf8mb4;
CREATE TABLE `students` (
  `student_id` INT NOT NULL,
  `student_code` VARCHAR(20) NOT NULL,
  `full_name_th` VARCHAR(100) DEFAULT NULL,
  `full_name_en` VARCHAR(100) DEFAULT NULL,
  `email` VARCHAR(100) DEFAULT NULL,
  `phone` VARCHAR(20) DEFAULT NULL,
  PRIMARY KEY (`student_id`),
  UNIQUE KEY `student_code` (`student_code`),
  CONSTRAINT `students_ibfk_1` FOREIGN KEY (`student_id`) REFERENCES `users` (`user_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
SET character_set_client = @saved_cs_client;

-- Dumping data for table `students`
LOCK TABLES `students` WRITE;
INSERT INTO `students` VALUES
(3,'65010001','fadsf','Test A',NULL,NULL),
(4,'65010002','adsffad','Test B','b@example.com','0822222222'),
(5,'65010003','adsfadsf','Test C','c@example.com','0833333333');
UNLOCK TABLES;

-- ------------------------------------------------------
-- Table structure for table `project_groups`
-- Stores project group details
-- ------------------------------------------------------
DROP TABLE IF EXISTS `project_groups`;
SET @saved_cs_client = @@character_set_client;
SET character_set_client = utf8mb4;
CREATE TABLE `project_groups` (
  `group_id` INT NOT NULL AUTO_INCREMENT,
  `group_name` VARCHAR(100) DEFAULT NULL,
  `academic_year` VARCHAR(10) DEFAULT NULL,
  `status` ENUM('draft','submitted','approved','rejected','completed') DEFAULT 'draft',
  `advisor_id` INT DEFAULT NULL,
  `created_by` INT NOT NULL,
  `created_at` TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`group_id`),
  KEY `advisor_id` (`advisor_id`),
  KEY `created_by` (`created_by`),
  CONSTRAINT `project_groups_ibfk_1` FOREIGN KEY (`advisor_id`) REFERENCES `teachers` (`teacher_id`),
  CONSTRAINT `project_groups_ibfk_2` FOREIGN KEY (`created_by`) REFERENCES `students` (`student_id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
SET character_set_client = @saved_cs_client;

-- Dumping data for table `project_groups`
LOCK TABLES `project_groups` WRITE;
INSERT INTO `project_groups` VALUES
(1,'IoT','2568','submitted',2,3,'2025-06-02 07:43:50');
UNLOCK TABLES;

-- ------------------------------------------------------
-- Table structure for table `project_members`
-- Stores group membership details
-- ------------------------------------------------------
DROP TABLE IF EXISTS `project_members`;
SET @saved_cs_client = @@character_set_client;
SET character_set_client = utf8mb4;
CREATE TABLE `project_members` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `group_id` INT NOT NULL,
  `student_id` INT NOT NULL,
  `is_leader` TINYINT(1) DEFAULT '0',
  `joined_at` TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE KEY `student_id` (`student_id`),
  KEY `group_id` (`group_id`),
  CONSTRAINT `project_members_ibfk_1` FOREIGN KEY (`group_id`) REFERENCES `project_groups` (`group_id`),
  CONSTRAINT `project_members_ibfk_2` FOREIGN KEY (`student_id`) REFERENCES `students` (`student_id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
SET character_set_client = @saved_cs_client;

-- Dumping data for table `project_members`
LOCK TABLES `project_members` WRITE;
INSERT INTO `project_members` VALUES
(1,1,3,1,'2025-06-02 07:43:52'),
(2,1,4,0,'2025-06-02 07:43:52'),
(3,1,5,0,'2025-06-02 07:43:52');
UNLOCK TABLES;

-- ------------------------------------------------------
-- Table structure for table `project_topics`
-- Stores project topic proposals
-- ------------------------------------------------------
DROP TABLE IF EXISTS `project_topics`;
SET @saved_cs_client = @@character_set_client;
SET character_set_client = utf8mb4;
CREATE TABLE `project_topics` (
  `topic_id` INT NOT NULL AUTO_INCREMENT,
  `group_id` INT NOT NULL,
  `title_th` VARCHAR(255) DEFAULT NULL,
  `title_en` VARCHAR(255) DEFAULT NULL,
  `description` TEXT,
  `submitted_at` TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP,
  `status` ENUM('pending','approved','rejected') DEFAULT 'pending',
  `review_comment` TEXT,
  PRIMARY KEY (`topic_id`),
  KEY `group_id` (`group_id`),
  CONSTRAINT `project_topics_ibfk_1` FOREIGN KEY (`group_id`) REFERENCES `project_groups` (`group_id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
SET character_set_client = @saved_cs_client;

-- Dumping data for table `project_topics`
LOCK TABLES `project_topics` WRITE;
INSERT INTO `project_topics` VALUES
(1,1,'IOT','Air Quality Alert System','table Telegram','2025-06-02 07:43:53','pending',NULL);
UNLOCK TABLES;

-- ------------------------------------------------------
-- Table structure for table `project_documents`
-- Stores submitted project documents
-- ------------------------------------------------------
DROP TABLE IF EXISTS `project_documents`;
SET @saved_cs_client = @@character_set_client;
SET character_set_client = utf8mb4;
CREATE TABLE `project_documents` (
  `document_id` INT NOT NULL AUTO_INCREMENT,
  `group_id` INT NOT NULL,
  `doc_type` ENUM('cover','chapter1','chapter2','chapter3','chapter4','chapter5','final') DEFAULT NULL,
  `file_path` VARCHAR(255) DEFAULT NULL,
  `submitted_at` TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP,
  `status` ENUM('pending','approved','rejected') DEFAULT 'pending',
  `comment` TEXT,
  PRIMARY KEY (`document_id`),
  KEY `group_id` (`group_id`),
  CONSTRAINT `project_documents_ibfk_1` FOREIGN KEY (`group_id`) REFERENCES `project_groups` (`group_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
SET character_set_client = @saved_cs_client;

-- Dumping data for table `project_documents`
LOCK TABLES `project_documents` WRITE;
UNLOCK TABLES;

-- ------------------------------------------------------
-- Table structure for table `document_logs`
-- Stores document action logs
-- ------------------------------------------------------
DROP TABLE IF EXISTS `document_logs`;
SET @saved_cs_client = @@character_set_client;
SET character_set_client = utf8mb4;
CREATE TABLE `document_logs` (
  `log_id` INT NOT NULL AUTO_INCREMENT,
  `document_id` INT NOT NULL,
  `action` ENUM('submit','cancel','resubmit') DEFAULT NULL,
  `timestamp` TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP,
  `comment` TEXT,
  PRIMARY KEY (`log_id`),
  KEY `document_id` (`document_id`),
  CONSTRAINT `document_logs_ibfk_1` FOREIGN KEY (`document_id`) REFERENCES `project_documents` (`document_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
SET character_set_client = @saved_cs_client;

-- Dumping data for table `document_logs`
LOCK TABLES `document_logs` WRITE;
UNLOCK TABLES;

-- ------------------------------------------------------
-- View structure for view `vw_project_group_members`
-- Combines group, member, and advisor information
-- ------------------------------------------------------
DROP VIEW IF EXISTS `vw_project_group_members`;
SET @saved_cs_client = @@character_set_client;
SET character_set_client = utf8mb4;
CREATE VIEW `vw_project_group_members` AS
SELECT
  g.group_id,
  g.group_name,
  g.academic_year,
  g.status AS group_status,
  s.student_id,
  s.student_code,
  s.full_name_th,
  s.full_name_en,
  s.email,
  s.phone,
  pm.is_leader,
  t.full_name AS advisor_name
FROM
  project_groups g
  JOIN project_members pm ON g.group_id = pm.group_id
  JOIN students s ON pm.student_id = s.student_id
  LEFT JOIN teachers t ON g.advisor_id = t.teacher_id
ORDER BY
  g.group_id,
  pm.is_leader DESC;
SET character_set_client = @saved_cs_client;

-- ------------------------------------------------------
-- View structure for view `vw_teachers_with_roles`
-- Combines teacher and role information
-- ------------------------------------------------------
DROP VIEW IF EXISTS `vw_teachers_with_roles`;
SET @saved_cs_client = @@character_set_client;
SET character_set_client = utf8mb4;
CREATE VIEW `vw_teachers_with_roles` AS
SELECT
  t.teacher_id,
  t.full_name,
  t.email,
  tr.role
FROM
  teachers t
  JOIN teacher_roles tr ON t.teacher_id = tr.teacher_id;
SET character_set_client = @saved_cs_client;

-- Restore original settings
SET TIME_ZONE=@OLD_TIME_ZONE;
SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT;
SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS;
SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION;
SET SQL_NOTES=@OLD_SQL_NOTES;