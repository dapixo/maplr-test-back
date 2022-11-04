-- MySQL dump 10.13  Distrib 8.0.31, for Linux (x86_64)
--
-- Host: localhost    Database: maplrdb
-- ------------------------------------------------------
-- Server version	8.0.31-0ubuntu0.20.04.1

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
-- Table structure for table `cart_line_entity`
--

DROP TABLE IF EXISTS `cart_line_entity`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `cart_line_entity` (
  `id` int NOT NULL AUTO_INCREMENT,
  `productId` int NOT NULL,
  `qty` int NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `REL_fe665c6d7d6ecef0633d5a4958` (`productId`),
  CONSTRAINT `FK_fe665c6d7d6ecef0633d5a49589` FOREIGN KEY (`productId`) REFERENCES `catalogue_item_entity` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=28 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cart_line_entity`
--

LOCK TABLES `cart_line_entity` WRITE;
/*!40000 ALTER TABLE `cart_line_entity` DISABLE KEYS */;
/*!40000 ALTER TABLE `cart_line_entity` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `catalogue_item_entity`
--

DROP TABLE IF EXISTS `catalogue_item_entity`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `catalogue_item_entity` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `description` varchar(500) NOT NULL,
  `image` varchar(255) NOT NULL,
  `price` int NOT NULL,
  `stock` int NOT NULL,
  `type` enum('Amber','Dark','Clear') NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `catalogue_item_entity`
--

LOCK TABLES `catalogue_item_entity` WRITE;
/*!40000 ALTER TABLE `catalogue_item_entity` DISABLE KEYS */;
INSERT INTO `catalogue_item_entity` VALUES (1,'Sirop d\'érable ambré 500ml','Le printemps québécois arrive chez toi grâce à cette boite de conserve de sirop d\'érable ambré 100% pur Canada ! Ce sirop d\'érable medium possède des arômes prononcés qui lui valent le titre de \"ambré au goût riche\" si singulier. Le goûter, c\'est l\'adopter ! ','canne.webp',10,10,'Amber'),(2,'Sirop d\'érable clair 500ml','Le printemps québécois arrive chez toi grâce à cette boite de conserve de sirop d\'érable ambré 100% pur Canada ! Ce sirop d\'érable medium possède des arômes prononcés qui lui valent le titre de \"clair au goût riche\" si singulier. Le goûter, c\'est l\'adopter ! ','canne.webp',10,4,'Clear'),(3,'Sirop d\'érable foncé 500ml','Le printemps québécois arrive chez toi grâce à cette boite de conserve de sirop d\'érable ambré 100% pur Canada ! Ce sirop d\'érable medium possède des arômes prononcés qui lui valent le titre de \"foncé au goût riche\" si singulier. Le goûter, c\'est l\'adopter ! ','canne.webp',11,10,'Dark'),(4,'Sirop d\'érable ambré 250ml','Le printemps québécois arrive chez toi grâce à cette boite de conserve de sirop d\'érable ambré 100% pur Canada ! Ce sirop d\'érable medium possède des arômes prononcés qui lui valent le titre de \"ambré au goût riche\" si singulier. Le goûter, c\'est l\'adopter ! ','bottle.webp',6,8,'Amber'),(5,'Sirop d\'érable clair 250ml','Le printemps québécois arrive chez toi grâce à cette boite de conserve de sirop d\'érable ambré 100% pur Canada ! Ce sirop d\'érable medium possède des arômes prononcés qui lui valent le titre de \"clair au goût riche\" si singulier. Le goûter, c\'est l\'adopter ! ','bottle.webp',6,10,'Clear'),(6,'Sirop d\'érable foncé 250ml','Le printemps québécois arrive chez toi grâce à cette boite de conserve de sirop d\'érable ambré 100% pur Canada ! Ce sirop d\'érable medium possède des arômes prononcés qui lui valent le titre de \"foncé au goût riche\" si singulier. Le goûter, c\'est l\'adopter ! ','bottle.webp',7,10,'Dark');
/*!40000 ALTER TABLE `catalogue_item_entity` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-11-04  7:52:20
