-- MySQL dump 10.13  Distrib 8.0.30, for Win64 (x86_64)
--
-- Host: localhost    Database: cdacprojectbookmymaid
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
  `end_date` date DEFAULT NULL,
  `maid_booking_date` date DEFAULT NULL,
  `maid_time_slots` varchar(255) DEFAULT NULL,
  `month_charges` int DEFAULT NULL,
  `start_date` date DEFAULT NULL,
  `services_id` int DEFAULT NULL,
  `maid_id` int DEFAULT NULL,
  `user_id` int DEFAULT NULL,
  PRIMARY KEY (`booking_info_id`),
  KEY `FKiadidx6fnhdpi96i5xtraucp6` (`services_id`),
  KEY `FKte4gxinejrmufu3mvssayu18y` (`maid_id`),
  KEY `FKlxf7mokjochrs8eocc6fpu2pi` (`user_id`),
  CONSTRAINT `FKiadidx6fnhdpi96i5xtraucp6` FOREIGN KEY (`services_id`) REFERENCES `services` (`services_id`),
  CONSTRAINT `FKlxf7mokjochrs8eocc6fpu2pi` FOREIGN KEY (`user_id`) REFERENCES `user` (`user_id`),
  CONSTRAINT `FKte4gxinejrmufu3mvssayu18y` FOREIGN KEY (`maid_id`) REFERENCES `maid` (`maid_id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `booking_info`
--

LOCK TABLES `booking_info` WRITE;
/*!40000 ALTER TABLE `booking_info` DISABLE KEYS */;
INSERT INTO `booking_info` VALUES (1,'2022-10-16','2022-08-21','10 am to 12 pm',4000,'2022-09-16',1,5,1),(2,'2022-10-26','2022-08-21','12 pm to 2 pm',3500,'2022-09-27',3,4,2),(3,'2022-10-27','2022-08-21','8 am to 10 am',4000,'2022-09-27',1,5,2);
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
  `maid_address` varchar(255) DEFAULT NULL,
  `maid_adhar_card` varchar(255) DEFAULT NULL,
  `maid_age` int DEFAULT NULL,
  `maid_city` varchar(255) DEFAULT NULL,
  `maid_email_id` varchar(255) DEFAULT NULL,
  `maid_experience` int DEFAULT NULL,
  `maid_mobile_no` varchar(255) DEFAULT NULL,
  `maid_name` varchar(255) DEFAULT NULL,
  `maid_password` varchar(255) DEFAULT NULL,
  `maid_pincode` varchar(255) DEFAULT NULL,
  `maid_police_verification_certificate` varchar(255) DEFAULT NULL,
  `maid_username` varchar(255) DEFAULT NULL,
  `month_charges` int DEFAULT NULL,
  `services_id` int DEFAULT NULL,
  PRIMARY KEY (`maid_id`),
  KEY `FKn57k6ur8me7vkdpthyttb0l9` (`services_id`),
  CONSTRAINT `FKn57k6ur8me7vkdpthyttb0l9` FOREIGN KEY (`services_id`) REFERENCES `services` (`services_id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `maid`
--

LOCK TABLES `maid` WRITE;
/*!40000 ALTER TABLE `maid` DISABLE KEYS */;
INSERT INTO `maid` VALUES (1,'Wakad','778832159641',25,'Pune','Aarti@gmail.com',3,'7532155896','Aarti Shah','Aarti@123','456321','Yes','Aarti',4000,2),(2,'Wakad','456365789453',30,'Pune','Sayali@gmail.com',4,'8465321590','Sayali Bhosale','Sayali@123','423156','Yes','Sayali',4500,2),(3,'Hadapasar','458963241578',27,'Pune','Megha@gmail.com',2,'7894631542','Megha Badade','Megha@123','498635','YES','Megha',3500,3),(4,'Hadpasar','123456789913',25,'Pune','Aishwarya@gmail.com',1,'889963515','Aishwarya Aher','Aishwarya@123','432156','Yes','Aishwarya',3500,3),(5,'Hinjewadi','789456987456',29,'Pune','Saloni@gmail.com',4,'7898654532','Saloni Pagar','Saloni','456897','YES','Saloni',4000,1),(6,'Hinjewadi','456365789333',24,'Pune','Tejal@gmail.com',2,'8888456321','Tejal Nerpagar','Tejal','458796','YES','Tejal',4000,1);
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
  `maid_comments` varchar(255) DEFAULT NULL,
  `maid_rating` varchar(255) DEFAULT NULL,
  `maid_id` int DEFAULT NULL,
  `user_id` int DEFAULT NULL,
  PRIMARY KEY (`maid_review_id`),
  KEY `FKfonlmx2djdov6iha82g9jx6l8` (`maid_id`),
  KEY `FKp1lh2qbpfc8j45xkb1oxoe8ob` (`user_id`),
  CONSTRAINT `FKfonlmx2djdov6iha82g9jx6l8` FOREIGN KEY (`maid_id`) REFERENCES `maid` (`maid_id`),
  CONSTRAINT `FKp1lh2qbpfc8j45xkb1oxoe8ob` FOREIGN KEY (`user_id`) REFERENCES `user` (`user_id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `maid_review`
--

LOCK TABLES `maid_review` WRITE;
/*!40000 ALTER TABLE `maid_review` DISABLE KEYS */;
INSERT INTO `maid_review` VALUES (1,'Good Services','3',5,1);
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
  `base_charges` int DEFAULT NULL,
  `services_name` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`services_id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `services`
--

LOCK TABLES `services` WRITE;
/*!40000 ALTER TABLE `services` DISABLE KEYS */;
INSERT INTO `services` VALUES (1,150,'washing'),(2,250,'cooking'),(3,150,'cleaning');
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
  `user_address` varchar(255) DEFAULT NULL,
  `user_adhar_card` varchar(255) DEFAULT NULL,
  `user_city` varchar(255) DEFAULT NULL,
  `user_email_id` varchar(255) DEFAULT NULL,
  `user_family_members` int DEFAULT NULL,
  `user_gender` varchar(255) DEFAULT NULL,
  `user_mobile_no` varchar(255) DEFAULT NULL,
  `user_name` varchar(255) DEFAULT NULL,
  `user_password` varchar(255) DEFAULT NULL,
  `user_pincode` varchar(255) DEFAULT NULL,
  `user_rooms` int DEFAULT NULL,
  `user_username` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`user_id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (1,'Wakad','221670966616','Pune','Tejas@gmail.com',4,'Male','7420871899','Tejas Jawale','Tejas@123','422010',3,'Tejas'),(2,'Aakurdi','879632154015','Pune','Vedant@gmail.com',4,'Male','8669547233','Vedant Chalse','Vedant@123','453216',5,'Vedant'),(3,'Pimpari Chinchwad','748596145263','Pune','Lukesh@gmail.com',4,'Male','4586957896','Lukesh Erande','Lukesh@123','457896',3,'Lukesh');
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

-- Dump completed on 2022-09-21 20:47:21
