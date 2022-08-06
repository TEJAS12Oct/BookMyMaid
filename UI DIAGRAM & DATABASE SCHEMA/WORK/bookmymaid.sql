-- MySQL dump 10.13  Distrib 8.0.30, for Win64 (x86_64)
--
-- Host: localhost    Database: BookMyMaid
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
-- Table structure for table `admin`
--

DROP TABLE IF EXISTS `admin`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `admin` (
  `ID` int NOT NULL AUTO_INCREMENT,
  `UserName` varchar(30) NOT NULL,
  `PassWord` varchar(30) NOT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `admin`
--

LOCK TABLES `admin` WRITE;
/*!40000 ALTER TABLE `admin` DISABLE KEYS */;
INSERT INTO `admin` VALUES (1,'Akshay','Akshay@123'),(2,'Atharva','Atharva@123'),(3,'Tejas','Tejas@123'),(4,'Mayur','Mayur@123'),(5,'Pankaj','Pankaj@123'),(6,'Ruchita','Ruchita@123');
/*!40000 ALTER TABLE `admin` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `booking_info`
--

DROP TABLE IF EXISTS `booking_info`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `booking_info` (
  `ID` int NOT NULL AUTO_INCREMENT,
  `Maid_Id` int DEFAULT NULL,
  `User_Id` int DEFAULT NULL,
  `Service_Id` int DEFAULT NULL,
  `Start_Day` date DEFAULT NULL,
  `End_Day` date DEFAULT NULL,
  `Charges_PerDay` int DEFAULT NULL,
  `Total_Charges` int DEFAULT NULL,
  PRIMARY KEY (`ID`),
  KEY `Maid_Id` (`Maid_Id`),
  KEY `User_Id` (`User_Id`),
  KEY `Service_Id` (`Service_Id`),
  CONSTRAINT `booking_info_ibfk_1` FOREIGN KEY (`Maid_Id`) REFERENCES `maid` (`ID`),
  CONSTRAINT `booking_info_ibfk_2` FOREIGN KEY (`User_Id`) REFERENCES `user` (`ID`),
  CONSTRAINT `booking_info_ibfk_3` FOREIGN KEY (`Service_Id`) REFERENCES `services` (`ID`)
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
-- Table structure for table `contact_us`
--

DROP TABLE IF EXISTS `contact_us`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `contact_us` (
  `ID` int NOT NULL AUTO_INCREMENT,
  `Name` varchar(30) DEFAULT NULL,
  `Mobile_No` varchar(30) DEFAULT NULL,
  `Email_ID` varchar(30) DEFAULT NULL,
  `City` varchar(30) DEFAULT NULL,
  `Message` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `contact_us`
--

LOCK TABLES `contact_us` WRITE;
/*!40000 ALTER TABLE `contact_us` DISABLE KEYS */;
INSERT INTO `contact_us` VALUES (1,'Mayur','7420871877','Mayur123@gmail.com','Nashik','What Is Your Charges..?');
/*!40000 ALTER TABLE `contact_us` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `maid`
--

DROP TABLE IF EXISTS `maid`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `maid` (
  `ID` int NOT NULL AUTO_INCREMENT,
  `Name` varchar(30) NOT NULL,
  `UserName` varchar(30) NOT NULL,
  `PassWord` varchar(30) NOT NULL,
  `Gender` varchar(10) NOT NULL,
  `DOB` date DEFAULT NULL,
  `Mobile_No` varchar(30) NOT NULL,
  `Email_Id` varchar(30) NOT NULL,
  `Address` varchar(100) NOT NULL,
  `Adhar_Card` varchar(30) NOT NULL,
  `Police_Verification_Certificate` varchar(30) NOT NULL,
  `Experience` int DEFAULT NULL,
  `Rating` varchar(30) DEFAULT NULL,
  `Images` varchar(70) DEFAULT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
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
  `ID` int NOT NULL AUTO_INCREMENT,
  `Maid_ID` int DEFAULT NULL,
  `User_ID` int DEFAULT NULL,
  `Rating` varchar(30) DEFAULT NULL,
  `Description` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`ID`),
  KEY `Maid_ID` (`Maid_ID`),
  KEY `User_ID` (`User_ID`),
  CONSTRAINT `maid_review_ibfk_1` FOREIGN KEY (`Maid_ID`) REFERENCES `maid` (`ID`),
  CONSTRAINT `maid_review_ibfk_2` FOREIGN KEY (`User_ID`) REFERENCES `user` (`ID`)
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
  `ID` int NOT NULL AUTO_INCREMENT,
  `Service` varchar(30) NOT NULL,
  `Charges_PerDay` int DEFAULT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `services`
--

LOCK TABLES `services` WRITE;
/*!40000 ALTER TABLE `services` DISABLE KEYS */;
INSERT INTO `services` VALUES (1,'Cooking',35),(2,'Cleaning',25),(3,'Utensil',25),(4,'Laundry',27);
/*!40000 ALTER TABLE `services` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user` (
  `ID` int NOT NULL AUTO_INCREMENT,
  `Name` varchar(30) NOT NULL,
  `UserName` varchar(30) NOT NULL,
  `PassWord` varchar(30) NOT NULL,
  `Gender` varchar(10) NOT NULL,
  `DOB` date NOT NULL,
  `Mobile_No` varchar(30) NOT NULL,
  `Email_Id` varchar(30) NOT NULL,
  `Address` varchar(100) NOT NULL,
  `Adhar_Card` varchar(30) NOT NULL,
  `Images` varchar(70) DEFAULT NULL,
  PRIMARY KEY (`ID`)
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

-- Dump completed on 2022-08-06 21:31:53
