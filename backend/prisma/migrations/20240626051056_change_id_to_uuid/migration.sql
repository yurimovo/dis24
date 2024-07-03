-- CreateTable
CREATE TABLE `apartments` (
    `apartment_id` INTEGER NOT NULL AUTO_INCREMENT,
    `address` VARCHAR(150) NULL,
    `owner` VARCHAR(150) NULL,
    `security_type` VARCHAR(50) NULL,
    `phones` VARCHAR(50) NULL,
    `contruct_number` VARCHAR(50) NULL,
    `contruct_date` DATE NULL,
    `contruct_file_number` INTEGER NULL,
    `lettered_file_number` INTEGER UNSIGNED NULL,
    `penal_number` INTEGER UNSIGNED NULL,
    `pult_number` VARCHAR(50) NULL,
    `price` DOUBLE NULL,
    `apartment_category` VARCHAR(50) NULL,
    `surving_organization` VARCHAR(50) NULL,
    `price_date` DATE NULL,
    `mounting_organization` VARCHAR(50) NULL,
    `spi` VARCHAR(50) NULL,
    `apartment_hardware` VARCHAR(50) NULL,
    `inn` VARCHAR(50) NULL,
    `serial_number` VARCHAR(10) NULL,
    `assortment` VARCHAR(50) NULL,
    `sim_number` VARCHAR(50) NULL,
    `fccid` VARCHAR(18) NULL,

    UNIQUE INDEX `Индекс 1`(`apartment_id`),
    PRIMARY KEY (`apartment_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `archive_apartments` (
    `apartment_id` INTEGER NOT NULL AUTO_INCREMENT,
    `owner` VARCHAR(150) NULL,
    `address` VARCHAR(150) NULL,
    `security_type` VARCHAR(10) NULL,
    `phones` VARCHAR(50) NULL,
    `contruct_number` VARCHAR(50) NULL,
    `contruct_date` DATE NULL,
    `contruct_file_number` INTEGER NULL DEFAULT 0,
    `lettered_file_number` INTEGER NULL DEFAULT 0,
    `penal_number` INTEGER NULL DEFAULT 0,
    `pult_number` VARCHAR(50) NULL,
    `price` DOUBLE NULL DEFAULT 0,
    `apartment_category` VARCHAR(50) NULL,
    `price_date` DATE NULL,
    `mounting_organization` VARCHAR(50) NULL,
    `spi` VARCHAR(50) NULL,
    `apartment_hardware` VARCHAR(50) NULL,
    `inn` VARCHAR(12) NULL,
    `serial_number` VARCHAR(10) NULL,
    `termination_date` DATE NULL,
    `keys_returned` INTEGER NULL DEFAULT 0,

    UNIQUE INDEX `Индекс 1`(`apartment_id`),
    PRIMARY KEY (`apartment_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `archive_facilities` (
    `facility_id` INTEGER NOT NULL AUTO_INCREMENT,
    `organization` VARCHAR(150) NULL,
    `facility` VARCHAR(150) NULL,
    `address` VARCHAR(150) NULL,
    `security_type` VARCHAR(50) NULL,
    `phones` VARCHAR(50) NULL,
    `contruct_file_number` INTEGER NULL,
    `lettered_file_number` INTEGER NULL,
    `contruct_number` INTEGER NULL,
    `contruct_date` DATE NULL,
    `security_hours` VARCHAR(200) NULL,
    `pult_number` VARCHAR(20) NULL,
    `spi` VARCHAR(50) NULL,
    `ownership_type` VARCHAR(50) NULL,
    `facility_category` VARCHAR(50) NULL,
    `surving_organization` VARCHAR(50) NULL,
    `price_date` DATE NULL,
    `price` DOUBLE NULL,
    `mounting_organization` VARCHAR(50) NULL,
    `facility_hardware` VARCHAR(50) NULL,
    `serial_number` VARCHAR(10) NULL,
    `termination_date` DATE NULL,
    `sim_number` VARCHAR(50) NULL,
    `fccid` VARCHAR(18) NULL,

    UNIQUE INDEX `Индекс 2`(`facility_id`),
    PRIMARY KEY (`facility_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `facilities` (
    `facility_id` VARCHAR(191) NOT NULL,
    `organization` VARCHAR(150) NULL,
    `facility` VARCHAR(150) NULL,
    `address` VARCHAR(150) NULL,
    `pult_number` VARCHAR(20) NULL,
    `security_type` VARCHAR(50) NULL,
    `phones` VARCHAR(50) NULL,
    `contruct_number` VARCHAR(50) NULL DEFAULT '0',
    `contruct_file_number` INTEGER UNSIGNED NULL DEFAULT 0,
    `lettered_file_number` INTEGER UNSIGNED NULL DEFAULT 0,
    `security_hours` VARCHAR(200) NULL,
    `spi` VARCHAR(50) NULL,
    `price` DOUBLE NOT NULL DEFAULT 0,
    `ownership_type` VARCHAR(50) NOT NULL,
    `facility_category` VARCHAR(50) NULL,
    `surving_organization` VARCHAR(50) NULL,
    `mounting_organization` VARCHAR(50) NULL,
    `facility_hardware` VARCHAR(50) NULL,
    `serial_number` VARCHAR(50) NULL,
    `responsible` VARCHAR(50) NULL,
    `assortment` VARCHAR(50) NULL,
    `price_date` DATE NULL,
    `contruct_date` DATE NULL,
    `sim_number` VARCHAR(50) NULL,
    `fccid` VARCHAR(18) NULL,
    `ls_id` INTEGER NULL,

    UNIQUE INDEX `facilities_facility_id_key`(`facility_id`),
    PRIMARY KEY (`facility_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `hardware_apartments` (
    `hardware_id` INTEGER NOT NULL AUTO_INCREMENT,
    `cross_date` DATE NULL,
    `place` VARCHAR(150) NULL,
    `address` VARCHAR(150) NULL,
    `ovo_name` VARCHAR(100) NULL,
    `hardware` VARCHAR(30) NULL,
    `serial_number` VARCHAR(50) NULL,
    `decross_date` DATE NULL,
    `client_post` VARCHAR(150) NULL,
    `ovo_post` VARCHAR(150) NULL,
    `client_name` VARCHAR(150) NULL,
    `sim_number` VARCHAR(50) NULL,
    `fcc_id` VARCHAR(18) NULL,

    UNIQUE INDEX `Индекс 1`(`hardware_id`),
    PRIMARY KEY (`hardware_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `hardware_facilities` (
    `hardware_id` INTEGER NOT NULL AUTO_INCREMENT,
    `cross_date` DATE NULL,
    `place` VARCHAR(150) NULL,
    `address` VARCHAR(150) NULL,
    `ovo_name` VARCHAR(100) NULL,
    `hardware` VARCHAR(30) NULL,
    `serial_number` VARCHAR(10) NULL,
    `decross_date` DATE NULL,
    `client_post` VARCHAR(150) NULL,
    `ovo_post` VARCHAR(150) NULL,
    `client_name` VARCHAR(150) NULL,
    `sim_number` VARCHAR(50) NULL,
    `fccid` VARCHAR(18) NULL,

    UNIQUE INDEX `Индекс 1`(`hardware_id`),
    PRIMARY KEY (`hardware_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `ls` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `ls_date` DATE NULL,

    UNIQUE INDEX `Индекс 2`(`id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `sim` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `fccid` VARCHAR(18) NULL,
    `sim_number` VARCHAR(50) NULL,
    `pult_number` VARCHAR(50) NULL,
    `mounting_date` DATE NULL,
    `place` VARCHAR(150) NULL,
    `address` VARCHAR(150) NULL,

    UNIQUE INDEX `Индекс 1`(`id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `taken_facilities` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `ownership_type` VARCHAR(50) NULL,
    `facility_category` VARCHAR(50) NULL,
    `organization` VARCHAR(150) NULL,
    `address` VARCHAR(150) NULL,
    `contruct` VARCHAR(300) NULL,
    `surving_organization` VARCHAR(150) NULL,
    `security_type` VARCHAR(50) NULL,
    `price` VARCHAR(50) NULL,
    `security_hours` VARCHAR(300) NULL,
    `mounting_organization` VARCHAR(150) NULL,
    `spi` VARCHAR(50) NULL,
    `assortment` VARCHAR(50) NULL,
    `pult_number` VARCHAR(20) NULL,

    UNIQUE INDEX `Индекс 1`(`id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `terminated_facilities` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `ownership_type` VARCHAR(50) NULL,
    `facility_category` VARCHAR(50) NULL,
    `organization` VARCHAR(150) NULL,
    `address` VARCHAR(150) NULL,
    `contruct` VARCHAR(300) NULL,
    `surving_organization` VARCHAR(150) NULL,
    `security_type` VARCHAR(50) NULL,
    `price` VARCHAR(50) NULL,
    `security_hours` VARCHAR(300) NULL,
    `mounting_organization` VARCHAR(150) NULL,
    `spi` VARCHAR(50) NULL,
    `assortment` VARCHAR(50) NULL,
    `pult_number` VARCHAR(20) NULL,

    UNIQUE INDEX `Индекс 1`(`id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `users` (
    `usr_id` INTEGER NOT NULL AUTO_INCREMENT,
    `username` VARCHAR(50) NULL DEFAULT '0',
    `userpassword` VARCHAR(50) NULL DEFAULT '0',
    `hash` VARCHAR(100) NOT NULL DEFAULT '0',

    UNIQUE INDEX `Индекс 2`(`usr_id`),
    PRIMARY KEY (`usr_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
