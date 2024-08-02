/*
  Warnings:

  - You are about to drop the `assortments` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `responsibles` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE `assortments`;

-- DropTable
DROP TABLE `responsibles`;

-- CreateTable
CREATE TABLE `employees` (
    `employee_id` INTEGER NOT NULL AUTO_INCREMENT,
    `emploee_name` VARCHAR(100) NULL,
    `emploee_position` VARCHAR(100) NULL,

    UNIQUE INDEX `Индекс 1`(`employee_id`),
    PRIMARY KEY (`employee_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
