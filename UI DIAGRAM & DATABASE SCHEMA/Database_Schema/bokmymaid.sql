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
  `end_date` date DEFAULT NULL,
  `maid_booking_date` date DEFAULT NULL,
  `maid_holidays` int DEFAULT NULL,
  `maid_time_slots` time DEFAULT NULL,
  `month_charges` int DEFAULT NULL,
  `start_date` date DEFAULT NULL,
  `maid_id` int DEFAULT NULL,
  `services_id` int DEFAULT NULL,
  `user_id` int DEFAULT NULL,
  PRIMARY KEY (`booking_info_id`),
  KEY `FKte4gxinejrmufu3mvssayu18y` (`maid_id`),
  KEY `FKiadidx6fnhdpi96i5xtraucp6` (`services_id`),
  KEY `FKlxf7mokjochrs8eocc6fpu2pi` (`user_id`),
  CONSTRAINT `FKiadidx6fnhdpi96i5xtraucp6` FOREIGN KEY (`services_id`) REFERENCES `services` (`services_id`),
  CONSTRAINT `FKlxf7mokjochrs8eocc6fpu2pi` FOREIGN KEY (`user_id`) REFERENCES `user` (`user_id`),
  CONSTRAINT `FKte4gxinejrmufu3mvssayu18y` FOREIGN KEY (`maid_id`) REFERENCES `maid` (`maid_id`)
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
  `maid_address` varchar(255) DEFAULT NULL,
  `maid_adhar_card` varchar(255) DEFAULT NULL,
  `maid_age` int DEFAULT NULL,
  `maid_city` varchar(255) DEFAULT NULL,
  `maid_email_id` varchar(255) DEFAULT NULL,
  `maid_experience` int DEFAULT NULL,
  `maid_extra_charge_per_member` int DEFAULT NULL,
  `maid_extra_charge_per_room` int DEFAULT NULL,
  `maid_images` longblob,
  `maid_mobile_no` varchar(255) DEFAULT NULL,
  `maid_name` varchar(255) DEFAULT NULL,
  `maid_password` varchar(255) DEFAULT NULL,
  `maid_pincode` varchar(255) DEFAULT NULL,
  `maid_police_verification_certificate` varchar(255) DEFAULT NULL,
  `maid_username` varchar(255) DEFAULT NULL,
  `services_id` int DEFAULT NULL,
  PRIMARY KEY (`maid_id`),
  KEY `FKn57k6ur8me7vkdpthyttb0l9` (`services_id`),
  CONSTRAINT `FKn57k6ur8me7vkdpthyttb0l9` FOREIGN KEY (`services_id`) REFERENCES `services` (`services_id`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `maid`
--

LOCK TABLES `maid` WRITE;
/*!40000 ALTER TABLE `maid` DISABLE KEYS */;
INSERT INTO `maid` VALUES (5,'Room no-101, Gitamai society','123456789911',24,'Nashik',NULL,3,34,12,NULL,'','','Gauri@123','422010','yes','Gauri',3),(6,'Room no-101, Gitamai Housing society','123456789911',24,'NASIKCITY','jawaletejas1299@gmail.com',5,24,12,NULL,'','','sita@123','422010','yes','Sita',2),(7,'Room no 101,gitamai housing soc,Jadhav sankul,kamatwada,nashik','123456789911',24,'Nashik','tejasjawale67@gmail.com',1,24,26,NULL,'+917420871899','Tejas Satish Jawale','Gauri@123','422010','yes','Sita',3),(8,'Room no 101,gitamai housing soc,Jadhav sankul,kamatwada,nashik','123456789911',24,'Nashik','tejasjawale67@gmail.com',1,24,26,NULL,'+917420871899','Tejas Satish Jawale','Gauri@123','422010','yes','Sita',1),(9,'amalner','123456789911',25,'Jalgoan','ruchita@gmail.com',3,10,32,NULL,'1234567899','Ruchita Patil','ruchita@123','321456','yes','Ruchita',3),(10,'Borgad','123456789911',24,'Nashik','Megha@gmail.com',3,20,20,NULL,'1122334455','Megha Badade','Megha@123','422010','yes','Megha',3),(11,'Room no 101,gitamai housing soc,Jadhav sankul,kamatwada,nashik','123456789911',24,'Nashik','manisha@gmail.com',3,21,12,NULL,'1234567895','Manisha','manisha@123','422010','yes','Manisha',2);
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
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `maid_review`
--

LOCK TABLES `maid_review` WRITE;
/*!40000 ALTER TABLE `maid_review` DISABLE KEYS */;
INSERT INTO `maid_review` VALUES (1,'Good In Service','3',NULL,NULL),(2,'Good In All Service','4',NULL,NULL);
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
INSERT INTO `services` VALUES (1,150,'washing'),(2,150,'cleaning'),(3,200,'cooking');
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
  `user_images` longblob,
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
INSERT INTO `user` VALUES (1,'wakad','2266553344889900','Pune','tejas@gmail.com',4,'male',NULL,'9423568784','tejas','tejas@123','422010',4,'tejas'),(2,'wakad','2266553344889900','Pune','mayur@gmail.com',4,'male',NULL,'9423568784','mayur','mayur@123','422010',4,'mayur'),(3,'',NULL,'Kolhapur','Pankaj@gmail.com',4,NULL,NULL,'7788553366','Pankaj Desai',NULL,'416115',0,'Pankaj');
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

-- Dump completed on 2022-09-17 17:02:35
