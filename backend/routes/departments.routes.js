const Router = require('express');
const { PrismaClient } = require('@prisma/client');

const router = Router();
const prisma = new PrismaClient();

router.get('/departments-list', async (req, res) => {
    const departmentsList = await prisma.department.findMany({
        orderBy: {short_name: 'asc'}
    });
    res.json(departmentsList);
});

router.post('/department-add', async (req, res) => {
    try {
        console.log('Тело запроса:', req.body);
        const { 
            short_name, full_name, legal_address, actual_address, inn, company_director
        } = req.body;

        const departmentCandidate = await prisma.department.create({
            data: {
                short_name, full_name, legal_address, actual_address, inn, company_director
            }
        });

        console.log('candidate:', departmentCandidate);

        res.status(201).json({
            message: 'Подразделение создано',
            alarm: departmentCandidate
        });
    } catch (error) {
        console.error('Ошибка при создании подразделения:', error);
        res.status(500).json({ 
            message: 'Что-то пошло не так, попробуйте снова',
            error: error.message
        });
    }
});

router.delete('/department-delete/:id', async (req, res) => {
    try {
        const { id } = req.params;

        const deletedDepartment = await prisma.department.delete({
            where: { department_id: Number(id) }
        });

        console.log('Удаленная запись:', deletedDepartment);

        res.status(200).json({
            message: 'Запись удалена',
            sim: deletedDepartment
        });
    } catch (error) {
        console.error('Ошибка при удалении записи:', error);
        res.status(500).json({
            message: 'Что-то пошло не так, попробуйте снова',
            error: error.message
        });
    }
});

module.exports = router;