-- --------------------------------------------------------
-- Хост:                         127.0.0.1
-- Версия сервера:               8.0.31 - MySQL Community Server - GPL
-- Операционная система:         Win64
-- HeidiSQL Версия:              11.3.0.6295
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

-- Дамп структуры для таблица dis24.apartments
CREATE TABLE IF NOT EXISTS `apartments` (
  `id` int NOT NULL AUTO_INCREMENT,
  `apartment_address` varchar(100) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `contract_numbers` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL,
  `contract_date` date DEFAULT NULL,
  `price` float DEFAULT NULL,
  `price_date` date DEFAULT NULL,
  `category_id` int DEFAULT NULL,
  `security_type_id` int DEFAULT NULL,
  `contract_file_number` int DEFAULT NULL,
  `lettered_file_number` int DEFAULT NULL,
  `spi_id` int DEFAULT NULL,
  `hardware_id` int DEFAULT NULL,
  `pult_number_id` int DEFAULT NULL,
  `sim_id` int DEFAULT NULL,
  `assortment` varchar(20) COLLATE utf8mb4_general_ci DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `Индекс 2` (`id`),
  KEY `FK_apartments_apartment_categories` (`category_id`),
  KEY `FK_apartments_security_types` (`security_type_id`),
  KEY `FK_apartments_spi` (`spi_id`),
  KEY `FK_apartments_hardware` (`hardware_id`),
  KEY `FK_apartments_pult_numbers` (`pult_number_id`),
  KEY `FK_apartments_sim_cards` (`sim_id`),
  CONSTRAINT `FK_apartments_apartment_categories` FOREIGN KEY (`category_id`) REFERENCES `apartment_categories` (`id`),
  CONSTRAINT `FK_apartments_hardware` FOREIGN KEY (`hardware_id`) REFERENCES `hardware` (`id`),
  CONSTRAINT `FK_apartments_pult_numbers` FOREIGN KEY (`pult_number_id`) REFERENCES `pult_numbers` (`id`),
  CONSTRAINT `FK_apartments_security_types` FOREIGN KEY (`security_type_id`) REFERENCES `security_types` (`id`),
  CONSTRAINT `FK_apartments_sim_cards` FOREIGN KEY (`sim_id`) REFERENCES `sim_cards` (`id`),
  CONSTRAINT `FK_apartments_spi` FOREIGN KEY (`spi_id`) REFERENCES `spi` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Дамп данных таблицы dis24.apartments: ~0 rows (приблизительно)
DELETE FROM `apartments`;
/*!40000 ALTER TABLE `apartments` DISABLE KEYS */;
/*!40000 ALTER TABLE `apartments` ENABLE KEYS */;

-- Дамп структуры для таблица dis24.apartment_categories
CREATE TABLE IF NOT EXISTS `apartment_categories` (
  `id` int NOT NULL AUTO_INCREMENT,
  `apartment_category_name` varchar(30) COLLATE utf8mb4_general_ci DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `Индекс 2` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Дамп данных таблицы dis24.apartment_categories: ~0 rows (приблизительно)
DELETE FROM `apartment_categories`;
/*!40000 ALTER TABLE `apartment_categories` DISABLE KEYS */;
/*!40000 ALTER TABLE `apartment_categories` ENABLE KEYS */;

-- Дамп структуры для таблица dis24.external_organizations
CREATE TABLE IF NOT EXISTS `external_organizations` (
  `id` int NOT NULL AUTO_INCREMENT,
  `external_organization_name` varchar(30) COLLATE utf8mb4_general_ci DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `Индекс 2` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Дамп данных таблицы dis24.external_organizations: ~0 rows (приблизительно)
DELETE FROM `external_organizations`;
/*!40000 ALTER TABLE `external_organizations` DISABLE KEYS */;
/*!40000 ALTER TABLE `external_organizations` ENABLE KEYS */;

-- Дамп структуры для таблица dis24.facilities
CREATE TABLE IF NOT EXISTS `facilities` (
  `id` int NOT NULL AUTO_INCREMENT,
  `facility_name` varchar(100) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `facility_address` varchar(100) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `contract_numbers` varchar(20) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `contract_date` date DEFAULT NULL,
  `price` float DEFAULT NULL,
  `price_date` date DEFAULT NULL,
  `ownership_id` int DEFAULT NULL,
  `category_id` int DEFAULT NULL,
  `security_type_id` int DEFAULT NULL,
  `contract_file_number` int DEFAULT NULL,
  `lettered_file_number` int DEFAULT NULL,
  `spi_id` int DEFAULT NULL,
  `hardware_id` int DEFAULT NULL,
  `surv_org_id` int DEFAULT NULL,
  `mount_org_id` int DEFAULT NULL,
  `pult_number_id` int DEFAULT NULL,
  `sim_id` int DEFAULT NULL,
  `responsible` varchar(20) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `assortment` varchar(20) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `security_hours` varchar(100) COLLATE utf8mb4_general_ci DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `Индекс 2` (`id`),
  KEY `FK_facilities_ownership_type` (`ownership_id`),
  KEY `FK_facilities_facility_categories` (`category_id`),
  KEY `FK_facilities_security_types` (`security_type_id`),
  KEY `FK_facilities_spi` (`spi_id`),
  KEY `FK_facilities_external_organizations` (`mount_org_id`),
  KEY `FK_facilities_external_organizations_2` (`surv_org_id`),
  KEY `FK_facilities_pult_numbers` (`pult_number_id`),
  KEY `FK_facilities_hardware` (`hardware_id`) USING BTREE,
  KEY `FK_facilities_sim_cards` (`sim_id`),
  CONSTRAINT `FK_facilities_external_organizations` FOREIGN KEY (`mount_org_id`) REFERENCES `external_organizations` (`id`),
  CONSTRAINT `FK_facilities_external_organizations_2` FOREIGN KEY (`surv_org_id`) REFERENCES `external_organizations` (`id`),
  CONSTRAINT `FK_facilities_facility_categories` FOREIGN KEY (`category_id`) REFERENCES `facility_categories` (`id`),
  CONSTRAINT `FK_facilities_hardware` FOREIGN KEY (`hardware_id`) REFERENCES `hardware` (`id`),
  CONSTRAINT `FK_facilities_ownership_type` FOREIGN KEY (`ownership_id`) REFERENCES `ownership_types` (`id`),
  CONSTRAINT `FK_facilities_pult_numbers` FOREIGN KEY (`pult_number_id`) REFERENCES `pult_numbers` (`id`),
  CONSTRAINT `FK_facilities_security_types` FOREIGN KEY (`security_type_id`) REFERENCES `security_types` (`id`),
  CONSTRAINT `FK_facilities_sim_cards` FOREIGN KEY (`sim_id`) REFERENCES `sim_cards` (`id`),
  CONSTRAINT `FK_facilities_spi` FOREIGN KEY (`spi_id`) REFERENCES `spi` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Дамп данных таблицы dis24.facilities: ~0 rows (приблизительно)
DELETE FROM `facilities`;
/*!40000 ALTER TABLE `facilities` DISABLE KEYS */;
/*!40000 ALTER TABLE `facilities` ENABLE KEYS */;

-- Дамп структуры для таблица dis24.facility_categories
CREATE TABLE IF NOT EXISTS `facility_categories` (
  `id` int NOT NULL AUTO_INCREMENT,
  `facility_category_name` varchar(30) COLLATE utf8mb4_general_ci DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `Индекс 2` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Дамп данных таблицы dis24.facility_categories: ~0 rows (приблизительно)
DELETE FROM `facility_categories`;
/*!40000 ALTER TABLE `facility_categories` DISABLE KEYS */;
/*!40000 ALTER TABLE `facility_categories` ENABLE KEYS */;

-- Дамп структуры для таблица dis24.hardware
CREATE TABLE IF NOT EXISTS `hardware` (
  `id` int NOT NULL AUTO_INCREMENT,
  `hardware_name` varchar(30) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `serial_number` varchar(20) COLLATE utf8mb4_general_ci DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `Индекс 2` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Дамп данных таблицы dis24.hardware: ~0 rows (приблизительно)
DELETE FROM `hardware`;
/*!40000 ALTER TABLE `hardware` DISABLE KEYS */;
/*!40000 ALTER TABLE `hardware` ENABLE KEYS */;

-- Дамп структуры для таблица dis24.organizations
CREATE TABLE IF NOT EXISTS `organizations` (
  `id` int NOT NULL AUTO_INCREMENT,
  `organization_name` varchar(75) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `legal_address` varchar(75) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `inn` varchar(10) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL,
  `ogrn` varchar(13) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `facility_id` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `Индекс 2` (`id`),
  KEY `FK_organizations_facilities` (`facility_id`),
  CONSTRAINT `FK_organizations_facilities` FOREIGN KEY (`facility_id`) REFERENCES `facilities` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Дамп данных таблицы dis24.organizations: ~0 rows (приблизительно)
DELETE FROM `organizations`;
/*!40000 ALTER TABLE `organizations` DISABLE KEYS */;
/*!40000 ALTER TABLE `organizations` ENABLE KEYS */;

-- Дамп структуры для таблица dis24.owners
CREATE TABLE IF NOT EXISTS `owners` (
  `id` int NOT NULL AUTO_INCREMENT,
  `owner` varchar(100) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `legal_address` varchar(100) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `inn` varchar(12) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `passport_series` varchar(5) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `passport_number` varchar(6) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `passport_organization` varchar(100) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `passport_date` date DEFAULT NULL,
  `apartment_id` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `Индекс 2` (`id`),
  KEY `FK_owners_apartments` (`apartment_id`),
  CONSTRAINT `FK_owners_apartments` FOREIGN KEY (`apartment_id`) REFERENCES `apartments` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Дамп данных таблицы dis24.owners: ~0 rows (приблизительно)
DELETE FROM `owners`;
/*!40000 ALTER TABLE `owners` DISABLE KEYS */;
/*!40000 ALTER TABLE `owners` ENABLE KEYS */;

-- Дамп структуры для таблица dis24.ownership_types
CREATE TABLE IF NOT EXISTS `ownership_types` (
  `id` int NOT NULL AUTO_INCREMENT,
  `ownership_name` varchar(20) COLLATE utf8mb4_general_ci DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `Индекс 2` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Дамп данных таблицы dis24.ownership_types: ~0 rows (приблизительно)
DELETE FROM `ownership_types`;
/*!40000 ALTER TABLE `ownership_types` DISABLE KEYS */;
/*!40000 ALTER TABLE `ownership_types` ENABLE KEYS */;

-- Дамп структуры для таблица dis24.pult_numbers
CREATE TABLE IF NOT EXISTS `pult_numbers` (
  `id` int NOT NULL AUTO_INCREMENT,
  `pult_number` varchar(5) COLLATE utf8mb4_general_ci DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `Индекс 2` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Дамп данных таблицы dis24.pult_numbers: ~0 rows (приблизительно)
DELETE FROM `pult_numbers`;
/*!40000 ALTER TABLE `pult_numbers` DISABLE KEYS */;
/*!40000 ALTER TABLE `pult_numbers` ENABLE KEYS */;

-- Дамп структуры для таблица dis24.roles
CREATE TABLE IF NOT EXISTS `roles` (
  `id` int NOT NULL AUTO_INCREMENT,
  `role_name` varchar(50) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `user_id` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `Индекс 2` (`id`),
  KEY `FK_roles_users` (`user_id`),
  CONSTRAINT `FK_roles_users` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Дамп данных таблицы dis24.roles: ~0 rows (приблизительно)
DELETE FROM `roles`;
/*!40000 ALTER TABLE `roles` DISABLE KEYS */;
/*!40000 ALTER TABLE `roles` ENABLE KEYS */;

-- Дамп структуры для таблица dis24.security_types
CREATE TABLE IF NOT EXISTS `security_types` (
  `id` int NOT NULL AUTO_INCREMENT,
  `security_type_name` varchar(20) COLLATE utf8mb4_general_ci DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `Индекс 2` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Дамп данных таблицы dis24.security_types: ~0 rows (приблизительно)
DELETE FROM `security_types`;
/*!40000 ALTER TABLE `security_types` DISABLE KEYS */;
/*!40000 ALTER TABLE `security_types` ENABLE KEYS */;

-- Дамп структуры для таблица dis24.sim_cards
CREATE TABLE IF NOT EXISTS `sim_cards` (
  `id` int NOT NULL AUTO_INCREMENT,
  `sim_number` varchar(10) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `fcc_id` varchar(18) COLLATE utf8mb4_general_ci DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `Индекс 2` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Дамп данных таблицы dis24.sim_cards: ~0 rows (приблизительно)
DELETE FROM `sim_cards`;
/*!40000 ALTER TABLE `sim_cards` DISABLE KEYS */;
/*!40000 ALTER TABLE `sim_cards` ENABLE KEYS */;

-- Дамп структуры для таблица dis24.spi
CREATE TABLE IF NOT EXISTS `spi` (
  `id` int NOT NULL AUTO_INCREMENT,
  `spi_name` varchar(20) COLLATE utf8mb4_general_ci DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `Индекс 2` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Дамп данных таблицы dis24.spi: ~0 rows (приблизительно)
DELETE FROM `spi`;
/*!40000 ALTER TABLE `spi` DISABLE KEYS */;
/*!40000 ALTER TABLE `spi` ENABLE KEYS */;

-- Дамп структуры для таблица dis24.users
CREATE TABLE IF NOT EXISTS `users` (
  `id` int NOT NULL AUTO_INCREMENT,
  `username` varchar(20) COLLATE utf8mb4_general_ci NOT NULL,
  `password_hashed` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `role_id` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `Индекс 2` (`id`),
  KEY `FK_users_roles` (`role_id`),
  CONSTRAINT `FK_users_roles` FOREIGN KEY (`role_id`) REFERENCES `roles` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Дамп данных таблицы dis24.users: ~0 rows (приблизительно)
DELETE FROM `users`;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
/*!40000 ALTER TABLE `users` ENABLE KEYS */;

/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;
