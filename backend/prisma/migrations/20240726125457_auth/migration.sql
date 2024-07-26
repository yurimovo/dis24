/*
  Warnings:

  - The primary key for the `sim` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `sim` table. All the data in the column will be lost.
  - You are about to drop the column `place` on the `sim` table. All the data in the column will be lost.
  - You are about to alter the column `sim_number` on the `sim` table. The data in that column could be lost. The data in that column will be cast from `VarChar(50)` to `VarChar(10)`.
  - You are about to alter the column `pult_number` on the `sim` table. The data in that column could be lost. The data in that column will be cast from `VarChar(50)` to `VarChar(10)`.
  - You are about to drop the `ls` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[sim_id]` on the table `sim` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `sim_id` to the `sim` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX `Индекс 1` ON `sim`;

-- AlterTable
ALTER TABLE `apartments` ADD COLUMN `comm_year` VARCHAR(4) NULL;

-- AlterTable
ALTER TABLE `facilities` ADD COLUMN `comm_year` VARCHAR(4) NULL;

-- AlterTable
ALTER TABLE `sim` DROP PRIMARY KEY,
    DROP COLUMN `id`,
    DROP COLUMN `place`,
    ADD COLUMN `object` VARCHAR(150) NULL,
    ADD COLUMN `sim_id` INTEGER NOT NULL AUTO_INCREMENT,
    MODIFY `sim_number` VARCHAR(10) NULL,
    MODIFY `pult_number` VARCHAR(10) NULL,
    MODIFY `mounting_date` VARCHAR(50) NULL,
    ADD PRIMARY KEY (`sim_id`);

-- DropTable
DROP TABLE `ls`;

-- CreateTable
CREATE TABLE `alarms` (
    `alarm_id` INTEGER NOT NULL AUTO_INCREMENT,
    `alarm_date` VARCHAR(10) NULL,
    `facility` VARCHAR(150) NULL,

    UNIQUE INDEX `Индекс 2`(`alarm_id`),
    PRIMARY KEY (`alarm_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateIndex
CREATE UNIQUE INDEX `Индекс 2` ON `sim`(`sim_id`);
