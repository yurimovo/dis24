/*
  Warnings:

  - You are about to drop the column `department_id` on the `employees` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE `employees` DROP FOREIGN KEY `employees_department_id_fkey`;

-- AlterTable
ALTER TABLE `employees` DROP COLUMN `department_id`;
