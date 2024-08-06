-- AlterTable
ALTER TABLE `employees` ADD COLUMN `department_id` INTEGER NULL;

-- AddForeignKey
ALTER TABLE `employees` ADD CONSTRAINT `employees_department_id_fkey` FOREIGN KEY (`department_id`) REFERENCES `department`(`department_id`) ON DELETE SET NULL ON UPDATE CASCADE;
