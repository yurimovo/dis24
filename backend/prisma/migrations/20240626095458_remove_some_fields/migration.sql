/*
  Warnings:

  - The primary key for the `facilities` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `fccid` on the `facilities` table. All the data in the column will be lost.
  - You are about to drop the column `ls_id` on the `facilities` table. All the data in the column will be lost.
  - You are about to drop the column `phones` on the `facilities` table. All the data in the column will be lost.
  - You are about to drop the column `serial_number` on the `facilities` table. All the data in the column will be lost.
  - You are about to alter the column `facility_id` on the `facilities` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Int`.

*/
-- AlterTable
ALTER TABLE `facilities` DROP PRIMARY KEY,
    DROP COLUMN `fccid`,
    DROP COLUMN `ls_id`,
    DROP COLUMN `phones`,
    DROP COLUMN `serial_number`,
    MODIFY `facility_id` INTEGER NOT NULL AUTO_INCREMENT,
    MODIFY `price_date` VARCHAR(10) NULL,
    MODIFY `contruct_date` VARCHAR(10) NULL,
    ADD PRIMARY KEY (`facility_id`);

-- RenameIndex
ALTER TABLE `facilities` RENAME INDEX `facilities_facility_id_key` TO `Индекс 2`;
