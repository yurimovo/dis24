-- CreateTable
CREATE TABLE `department` (
    `department_id` INTEGER NOT NULL AUTO_INCREMENT,
    `short_name` VARCHAR(150) NULL,
    `full_name` VARCHAR(350) NULL,
    `legal_address` VARCHAR(250) NULL,
    `actual_address` VARCHAR(250) NULL,
    `inn` VARCHAR(10) NULL,
    `company_director` VARCHAR(50) NULL,

    UNIQUE INDEX `Индекс 1`(`department_id`),
    PRIMARY KEY (`department_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `hardware` (
    `hardware_id` INTEGER NOT NULL AUTO_INCREMENT,
    `hardware_name` VARCHAR(20) NULL,

    UNIQUE INDEX `Индекс 1`(`hardware_id`),
    PRIMARY KEY (`hardware_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `security_types` (
    `type_id` INTEGER NOT NULL AUTO_INCREMENT,
    `type_name` VARCHAR(10) NOT NULL,

    UNIQUE INDEX `Индекс 1`(`type_id`),
    PRIMARY KEY (`type_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `facility_categories` (
    `category_id` INTEGER NOT NULL AUTO_INCREMENT,
    `category_name` VARCHAR(50) NULL,

    UNIQUE INDEX `Индекс 1`(`category_id`),
    PRIMARY KEY (`category_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `apartment_categories` (
    `category_id` INTEGER NOT NULL AUTO_INCREMENT,
    `category_name` VARCHAR(50) NULL,

    UNIQUE INDEX `Индекс 1`(`category_id`),
    PRIMARY KEY (`category_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `spi` (
    `spi_id` INTEGER NOT NULL AUTO_INCREMENT,
    `spi_name` VARCHAR(50) NULL,

    UNIQUE INDEX `Индекс 1`(`spi_id`),
    PRIMARY KEY (`spi_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `mounting_organizations` (
    `org_id` INTEGER NOT NULL AUTO_INCREMENT,
    `org_name` VARCHAR(50) NULL,

    UNIQUE INDEX `Индекс 1`(`org_id`),
    PRIMARY KEY (`org_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `surving_organizations` (
    `org_id` INTEGER NOT NULL AUTO_INCREMENT,
    `org_name` VARCHAR(50) NULL,

    UNIQUE INDEX `Индекс 1`(`org_id`),
    PRIMARY KEY (`org_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `assortments` (
    `assort_id` INTEGER NOT NULL AUTO_INCREMENT,
    `assort_name` VARCHAR(50) NULL,

    UNIQUE INDEX `Индекс 1`(`assort_id`),
    PRIMARY KEY (`assort_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `responsibles` (
    `resp_id` INTEGER NOT NULL AUTO_INCREMENT,
    `resp_name` VARCHAR(50) NULL,

    UNIQUE INDEX `Индекс 1`(`resp_id`),
    PRIMARY KEY (`resp_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
