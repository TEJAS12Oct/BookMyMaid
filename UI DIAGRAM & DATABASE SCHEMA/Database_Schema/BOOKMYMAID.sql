-- MySQL dump 10.13  Distrib 8.0.30, for Win64 (x86_64)
--
-- Host: localhost    Database: bookmymaid
-- ------------------------------------------------------
-- Server version	8.0.30

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
-- Table structure for table `booking_info`
--

DROP TABLE IF EXISTS `booking_info`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `booking_info` (
  `booking_info_id` int NOT NULL AUTO_INCREMENT,
  `maid_id` int NOT NULL,
  `user_id` int NOT NULL,
  `services_id` int NOT NULL,
  `maid_booking_date` date NOT NULL,
  `month_charges` int NOT NULL,
  `maid_time_slots` time NOT NULL,
  `maid_holidays` int NOT NULL,
  PRIMARY KEY (`booking_info_id`),
  KEY `maid_id` (`maid_id`),
  KEY `user_id` (`user_id`),
  KEY `services_id` (`services_id`),
  CONSTRAINT `booking_info_ibfk_1` FOREIGN KEY (`maid_id`) REFERENCES `maid` (`maid_id`),
  CONSTRAINT `booking_info_ibfk_2` FOREIGN KEY (`user_id`) REFERENCES `user` (`user_id`),
  CONSTRAINT `booking_info_ibfk_3` FOREIGN KEY (`services_id`) REFERENCES `services` (`services_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `booking_info`
--

LOCK TABLES `booking_info` WRITE;
/*!40000 ALTER TABLE `booking_info` DISABLE KEYS */;
/*!40000 ALTER TABLE `booking_info` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `maid`
--

DROP TABLE IF EXISTS `maid`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `maid` (
  `maid_id` int NOT NULL AUTO_INCREMENT,
  `maid_name` varchar(30) NOT NULL,
  `maid_username` varchar(30) NOT NULL,
  `maid_password` varchar(30) NOT NULL,
  `maid_age` int NOT NULL,
  `maid_mobile_no` varchar(30) NOT NULL,
  `maid_email_id` varchar(30) NOT NULL,
  `maid_address` varchar(100) NOT NULL,
  `maid_city` varchar(100) NOT NULL,
  `maid_pincode` varchar(100) NOT NULL,
  `maid_adhar_card` varchar(30) NOT NULL,
  `maid_police_verification_certificate` varchar(30) NOT NULL,
  `maid_extra_charge_per_room` int NOT NULL,
  `maid_extra_charge_per_member` int NOT NULL,
  `maid_experience` int NOT NULL,
  `maid_images` longblob,
  PRIMARY KEY (`maid_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `maid`
--

LOCK TABLES `maid` WRITE;
/*!40000 ALTER TABLE `maid` DISABLE KEYS */;
/*!40000 ALTER TABLE `maid` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `maid_review`
--

DROP TABLE IF EXISTS `maid_review`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `maid_review` (
  `maid_review_id` int NOT NULL AUTO_INCREMENT,
  `maid_id` int NOT NULL,
  `user_id` int NOT NULL,
  `maid_rating` varchar(30) NOT NULL,
  `maid_comments` varchar(100) NOT NULL,
  PRIMARY KEY (`maid_review_id`),
  KEY `maid_id` (`maid_id`),
  KEY `user_id` (`user_id`),
  CONSTRAINT `maid_review_ibfk_1` FOREIGN KEY (`maid_id`) REFERENCES `maid` (`maid_id`),
  CONSTRAINT `maid_review_ibfk_2` FOREIGN KEY (`user_id`) REFERENCES `user` (`user_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `maid_review`
--

LOCK TABLES `maid_review` WRITE;
/*!40000 ALTER TABLE `maid_review` DISABLE KEYS */;
/*!40000 ALTER TABLE `maid_review` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `services`
--

DROP TABLE IF EXISTS `services`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `services` (
  `services_id` int NOT NULL AUTO_INCREMENT,
  `services_name` varchar(30) NOT NULL,
  `base_charges` int NOT NULL,
  PRIMARY KEY (`services_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `services`
--

LOCK TABLES `services` WRITE;
/*!40000 ALTER TABLE `services` DISABLE KEYS */;
/*!40000 ALTER TABLE `services` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user` (
  `user_id` int NOT NULL AUTO_INCREMENT,
  `user_name` varchar(30) NOT NULL,
  `user_username` varchar(30) NOT NULL,
  `user_password` varchar(30) NOT NULL,
  `user_gender` varchar(10) NOT NULL,
  `user_family_members` int NOT NULL,
  `user_rooms` int NOT NULL,
  `user_mobile_no` varchar(30) NOT NULL,
  `user_email_id` varchar(30) NOT NULL,
  `user_address` varchar(100) NOT NULL,
  `user_city` varchar(100) NOT NULL,
  `user_pincode` varchar(100) NOT NULL,
  `user_adhar_card` varchar(30) NOT NULL,
  `user_images` longblob,
  PRIMARY KEY (`user_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-09-09  9:31:50
