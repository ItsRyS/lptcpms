-- MySQL dump 10.13  Distrib 8.4.5, for Linux (x86_64)
--
-- Host: localhost    Database: lptcitms
-- ------------------------------------------------------
-- Server version	8.4.5

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `document_logs`
--

DROP TABLE IF EXISTS `document_logs`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `document_logs` (
  `log_id` int NOT NULL AUTO_INCREMENT,
  `document_id` int NOT NULL,
  `action` enum('submit','cancel','resubmit') DEFAULT NULL,
  `timestamp` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `comment` text,
  PRIMARY KEY (`log_id`),
  KEY `document_id` (`document_id`),
  CONSTRAINT `document_logs_ibfk_1` FOREIGN KEY (`document_id`) REFERENCES `project_documents` (`document_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `document_logs`
--

LOCK TABLES `document_logs` WRITE;
/*!40000 ALTER TABLE `document_logs` DISABLE KEYS */;
/*!40000 ALTER TABLE `document_logs` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `project_documents`
--

DROP TABLE IF EXISTS `project_documents`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `project_documents` (
  `document_id` int NOT NULL AUTO_INCREMENT,
  `group_id` int NOT NULL,
  `doc_type` enum('cover','chapter1','chapter2','chapter3','chapter4','chapter5','final') DEFAULT NULL,
  `file_path` varchar(255) DEFAULT NULL,
  `submitted_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `status` enum('pending','approved','rejected') DEFAULT 'pending',
  `comment` text,
  PRIMARY KEY (`document_id`),
  KEY `group_id` (`group_id`),
  CONSTRAINT `project_documents_ibfk_1` FOREIGN KEY (`group_id`) REFERENCES `project_groups` (`group_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `project_documents`
--

LOCK TABLES `project_documents` WRITE;
/*!40000 ALTER TABLE `project_documents` DISABLE KEYS */;
/*!40000 ALTER TABLE `project_documents` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `project_groups`
--

DROP TABLE IF EXISTS `project_groups`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `project_groups` (
  `group_id` int NOT NULL AUTO_INCREMENT,
  `group_name` varchar(100) DEFAULT NULL,
  `academic_year` varchar(10) DEFAULT NULL,
  `status` enum('draft','submitted','approved','rejected','completed') DEFAULT 'draft',
  `advisor_id` int DEFAULT NULL,
  `created_by` int NOT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`group_id`),
  KEY `advisor_id` (`advisor_id`),
  KEY `created_by` (`created_by`),
  CONSTRAINT `project_groups_ibfk_1` FOREIGN KEY (`advisor_id`) REFERENCES `teachers` (`teacher_id`),
  CONSTRAINT `project_groups_ibfk_2` FOREIGN KEY (`created_by`) REFERENCES `students` (`student_id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `project_groups`
--

LOCK TABLES `project_groups` WRITE;
/*!40000 ALTER TABLE `project_groups` DISABLE KEYS */;
INSERT INTO `project_groups` VALUES (1,'α╕üα╕Ñα╕╕α╣êα╕íα╕úα╕░α╕Üα╕Üα╣üα╕êα╣ëα╕çα╣Çα╕òα╕╖α╕¡α╕Öα╕¡α╕▒α╕êα╕ëα╕úα╕┤α╕óα╕░','2568','submitted',2,3,'2025-06-02 07:43:50');
/*!40000 ALTER TABLE `project_groups` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `project_members`
--

DROP TABLE IF EXISTS `project_members`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `project_members` (
  `id` int NOT NULL AUTO_INCREMENT,
  `group_id` int NOT NULL,
  `student_id` int NOT NULL,
  `is_leader` tinyint(1) DEFAULT '0',
  `joined_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE KEY `student_id` (`student_id`),
  KEY `group_id` (`group_id`),
  CONSTRAINT `project_members_ibfk_1` FOREIGN KEY (`group_id`) REFERENCES `project_groups` (`group_id`),
  CONSTRAINT `project_members_ibfk_2` FOREIGN KEY (`student_id`) REFERENCES `students` (`student_id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `project_members`
--

LOCK TABLES `project_members` WRITE;
/*!40000 ALTER TABLE `project_members` DISABLE KEYS */;
INSERT INTO `project_members` VALUES (1,1,3,1,'2025-06-02 07:43:52'),(2,1,4,0,'2025-06-02 07:43:52'),(3,1,5,0,'2025-06-02 07:43:52');
/*!40000 ALTER TABLE `project_members` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `project_topics`
--

DROP TABLE IF EXISTS `project_topics`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `project_topics` (
  `topic_id` int NOT NULL AUTO_INCREMENT,
  `group_id` int NOT NULL,
  `title_th` varchar(255) DEFAULT NULL,
  `title_en` varchar(255) DEFAULT NULL,
  `description` text,
  `submitted_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `status` enum('pending','approved','rejected') DEFAULT 'pending',
  `review_comment` text,
  PRIMARY KEY (`topic_id`),
  KEY `group_id` (`group_id`),
  CONSTRAINT `project_topics_ibfk_1` FOREIGN KEY (`group_id`) REFERENCES `project_groups` (`group_id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `project_topics`
--

LOCK TABLES `project_topics` WRITE;
/*!40000 ALTER TABLE `project_topics` DISABLE KEYS */;
INSERT INTO `project_topics` VALUES (1,1,'α╕úα╕░α╕Üα╕Üα╣üα╕êα╣ëα╕çα╣Çα╕òα╕╖α╕¡α╕Öα╕áα╕▒α╕óα╕¥α╕╕α╣êα╕Öα╕Ñα╕░α╕¡α╕¡α╕ç','Air Quality Alert System','α╕úα╕░α╕Üα╕Üα╕òα╕úα╕ºα╕êα╕ºα╕▒α╕öα╕äα╕╕α╕ôα╕áα╕▓α╕₧α╕¡α╕▓α╕üα╕▓α╕¿α╣üα╕Ñα╕░α╣üα╕êα╣ëα╕çα╣Çα╕òα╕╖α╕¡α╕Öα╕£α╣êα╕▓α╕Ö Telegram','2025-06-02 07:43:53','pending',NULL);
/*!40000 ALTER TABLE `project_topics` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `students`
--

DROP TABLE IF EXISTS `students`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `students` (
  `student_id` int NOT NULL,
  `student_code` varchar(20) NOT NULL,
  `full_name_th` varchar(100) DEFAULT NULL,
  `full_name_en` varchar(100) DEFAULT NULL,
  `email` varchar(100) DEFAULT NULL,
  `phone` varchar(20) DEFAULT NULL,
  PRIMARY KEY (`student_id`),
  UNIQUE KEY `student_code` (`student_code`),
  CONSTRAINT `students_ibfk_1` FOREIGN KEY (`student_id`) REFERENCES `users` (`user_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `students`
--

LOCK TABLES `students` WRITE;
/*!40000 ALTER TABLE `students` DISABLE KEYS */;
INSERT INTO `students` VALUES (3,'65010001','α╕Öα╕▓α╕óα╣Çα╕¡ α╕ùα╕öα╕¬α╕¡α╕Ü','Test A',NULL,NULL),(4,'65010002','α╕Öα╕▓α╕çα╕¬α╕▓α╕ºα╕Üα╕╡ α╕ùα╕öα╕¬α╕¡α╕Ü','Test B','b@example.com','0822222222'),(5,'65010003','α╕Öα╕▓α╕óα╕ïα╕╡ α╕ùα╕öα╕¬α╕¡α╕Ü','Test C','c@example.com','0833333333');
/*!40000 ALTER TABLE `students` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `teacher_roles`
--

DROP TABLE IF EXISTS `teacher_roles`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `teacher_roles` (
  `id` int NOT NULL AUTO_INCREMENT,
  `teacher_id` int NOT NULL,
  `role` enum('course_instructor','project_advisor') NOT NULL,
  PRIMARY KEY (`id`),
  KEY `teacher_id` (`teacher_id`),
  CONSTRAINT `teacher_roles_ibfk_1` FOREIGN KEY (`teacher_id`) REFERENCES `teachers` (`teacher_id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `teacher_roles`
--

LOCK TABLES `teacher_roles` WRITE;
/*!40000 ALTER TABLE `teacher_roles` DISABLE KEYS */;
INSERT INTO `teacher_roles` VALUES (1,1,'course_instructor'),(2,2,'project_advisor');
/*!40000 ALTER TABLE `teacher_roles` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `teachers`
--

DROP TABLE IF EXISTS `teachers`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `teachers` (
  `teacher_id` int NOT NULL,
  `full_name` varchar(100) DEFAULT NULL,
  `email` varchar(100) NOT NULL,
  `phone` varchar(20) DEFAULT NULL,
  `position` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`teacher_id`),
  UNIQUE KEY `email` (`email`),
  CONSTRAINT `teachers_ibfk_1` FOREIGN KEY (`teacher_id`) REFERENCES `users` (`user_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `teachers`
--

LOCK TABLES `teachers` WRITE;
/*!40000 ALTER TABLE `teachers` DISABLE KEYS */;
INSERT INTO `teachers` VALUES (1,'α╕¡α╕▓α╕êα╕▓α╕úα╕óα╣îα╕ùα╕öα╕Ñα╕¡α╕ç α╕ºα╕┤α╕èα╕▓α╕üα╕▓α╕ú','PatthananLT@gmail.com','0892663290','α╕¡α╕▓α╕êα╕▓α╕úα╕óα╣îα╕¢α╕úα╕░α╕êα╕│α╕ºα╕┤α╕èα╕▓'),(2,'α╕¡α╕▓α╕êα╕▓α╕úα╕óα╣îα╕ùα╕╡α╣êα╕¢α╕úα╕╢α╕üα╕⌐α╕▓ α╣éα╕äα╕úα╕çα╕çα╕▓α╕Ö','advisor1@example.com','0800000001','α╕¡α╕▓α╕êα╕▓α╕úα╕óα╣îα╕ùα╕╡α╣êα╕¢α╕úα╕╢α╕üα╕⌐α╕▓');
/*!40000 ALTER TABLE `teachers` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `user_id` int NOT NULL AUTO_INCREMENT,
  `username` varchar(50) NOT NULL,
  `password_hash` varchar(255) NOT NULL,
  `role` enum('student','teacher') NOT NULL,
  `is_first_login` tinyint(1) DEFAULT '1',
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`user_id`),
  UNIQUE KEY `username` (`username`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'teachermock@example.com','$argon2id$v=19$m=65536,t=3,p=4$E1TTYFJdL402HEaDiCsP+g$xkZVK2gSteh7pcwZcSsuI+PucBpA8zT92sEetGd5qFM','teacher',0,'2025-06-02 07:40:34'),(2,'advisor1@example.com','$argon2id$v=19$m=65536,t=3,p=4$HyBOfwW+fQpt9VSStlErpw$dA0WRGaevsLuu5+KvIG/aWKI9DbPvFJwQkLysuEYcCc','teacher',1,'2025-06-02 07:40:34'),(3,'65010001','$argon2id$v=19$m=65536,t=3,p=4$xFZfFhM98D/8E+rr01apGA$8rSSM4BUKuF4sWii0SqqiNdrjk8GX9JoHEFMYaBCb2Y','student',0,'2025-06-02 07:41:04'),(4,'65010002','$argon2id$v=19$m=65536,t=3,p=4$HyBOfwW+fQpt9VSStlErpw$dA0WRGaevsLuu5+KvIG/aWKI9DbPvFJwQkLysuEYcCc','student',1,'2025-06-02 07:41:04'),(5,'65010003','$argon2id$v=19$m=65536,t=3,p=4$HyBOfwW+fQpt9VSStlErpw$dA0WRGaevsLuu5+KvIG/aWKI9DbPvFJwQkLysuEYcCc','student',1,'2025-06-02 07:41:04');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Temporary view structure for view `vw_project_group_members`
--

DROP TABLE IF EXISTS `vw_project_group_members`;
/*!50001 DROP VIEW IF EXISTS `vw_project_group_members`*/;
SET @saved_cs_client     = @@character_set_client;
/*!50503 SET character_set_client = utf8mb4 */;
/*!50001 CREATE VIEW `vw_project_group_members` AS SELECT 
 1 AS `group_id`,
 1 AS `group_name`,
 1 AS `academic_year`,
 1 AS `group_status`,
 1 AS `student_id`,
 1 AS `student_code`,
 1 AS `full_name_th`,
 1 AS `full_name_en`,
 1 AS `email`,
 1 AS `phone`,
 1 AS `is_leader`,
 1 AS `advisor_name`*/;
SET character_set_client = @saved_cs_client;

--
-- Temporary view structure for view `vw_teachers_with_roles`
--

DROP TABLE IF EXISTS `vw_teachers_with_roles`;
/*!50001 DROP VIEW IF EXISTS `vw_teachers_with_roles`*/;
SET @saved_cs_client     = @@character_set_client;
/*!50503 SET character_set_client = utf8mb4 */;
/*!50001 CREATE VIEW `vw_teachers_with_roles` AS SELECT 
 1 AS `teacher_id`,
 1 AS `full_name`,
 1 AS `email`,
 1 AS `role`*/;
SET character_set_client = @saved_cs_client;

--
-- Final view structure for view `vw_project_group_members`
--

/*!50001 DROP VIEW IF EXISTS `vw_project_group_members`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8mb4 */;
/*!50001 SET character_set_results     = utf8mb4 */;
/*!50001 SET collation_connection      = utf8mb4_unicode_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013 DEFINER=`nutmachi`@`%` SQL SECURITY DEFINER */
/*!50001 VIEW `vw_project_group_members` AS select `g`.`group_id` AS `group_id`,`g`.`group_name` AS `group_name`,`g`.`academic_year` AS `academic_year`,`g`.`status` AS `group_status`,`s`.`student_id` AS `student_id`,`s`.`student_code` AS `student_code`,`s`.`full_name_th` AS `full_name_th`,`s`.`full_name_en` AS `full_name_en`,`s`.`email` AS `email`,`s`.`phone` AS `phone`,`pm`.`is_leader` AS `is_leader`,`t`.`full_name` AS `advisor_name` from (((`project_groups` `g` join `project_members` `pm` on((`g`.`group_id` = `pm`.`group_id`))) join `students` `s` on((`pm`.`student_id` = `s`.`student_id`))) left join `teachers` `t` on((`g`.`advisor_id` = `t`.`teacher_id`))) order by `g`.`group_id`,`pm`.`is_leader` desc */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;

--
-- Final view structure for view `vw_teachers_with_roles`
--

/*!50001 DROP VIEW IF EXISTS `vw_teachers_with_roles`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8mb4 */;
/*!50001 SET character_set_results     = utf8mb4 */;
/*!50001 SET collation_connection      = utf8mb4_unicode_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013 DEFINER=`nutmachi`@`%` SQL SECURITY DEFINER */
/*!50001 VIEW `vw_teachers_with_roles` AS select `t`.`teacher_id` AS `teacher_id`,`t`.`full_name` AS `full_name`,`t`.`email` AS `email`,`tr`.`role` AS `role` from (`teachers` `t` join `teacher_roles` `tr` on((`t`.`teacher_id` = `tr`.`teacher_id`))) */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2025-06-05  8:14:01
