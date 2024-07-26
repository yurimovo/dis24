/*
  Warnings:

  - You are about to drop the column `fccid` on the `apartments` table. All the data in the column will be lost.
  - You are about to drop the column `serial_number` on the `apartments` table. All the data in the column will be lost.
  - You are about to drop the column `sim_number` on the `apartments` table. All the data in the column will be lost.
  - You are about to alter the column `lettered_file_number` on the `apartments` table. The data in that column could be lost. The data in that column will be cast from `UnsignedInt` to `VarChar(50)`.
  - You are about to alter the column `penal_number` on the `apartments` table. The data in that column could be lost. The data in that column will be cast from `UnsignedInt` to `VarChar(50)`.
  - You are about to alter the column `price` on the `apartments` table. The data in that column could be lost. The data in that column will be cast from `Double` to `VarChar(50)`.
  - You are about to alter the column `contruct_file_number` on the `facilities` table. The data in that column could be lost. The data in that column will be cast from `UnsignedInt` to `VarChar(50)`.
  - You are about to alter the column `lettered_file_number` on the `facilities` table. The data in that column could be lost. The data in that column will be cast from `UnsignedInt` to `VarChar(50)`.
  - You are about to alter the column `price` on the `facilities` table. The data in that column could be lost. The data in that column will be cast from `Double` to `VarChar(50)`.

*/
-- AlterTable
ALTER TABLE `apartments` DROP COLUMN `fccid`,
    DROP COLUMN `serial_number`,
    DROP COLUMN `sim_number`,
    MODIFY `contruct_date` VARCHAR(10) NULL,
    MODIFY `contruct_file_number` VARCHAR(50) NULL,
    MODIFY `lettered_file_number` VARCHAR(50) NULL,
    MODIFY `penal_number` VARCHAR(50) NULL,
    MODIFY `price` VARCHAR(50) NULL,
    MODIFY `price_date` VARCHAR(10) NULL;

-- AlterTable
ALTER TABLE `facilities` MODIFY `contruct_file_number` VARCHAR(50) NULL,
    MODIFY `lettered_file_number` VARCHAR(50) NULL,
    MODIFY `price` VARCHAR(50) NULL,
    MODIFY `ownership_type` VARCHAR(50) NULL;
