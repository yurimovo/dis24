const Router = require('express');
const { PrismaClient } = require('@prisma/client');

const router = Router();
const prisma = new PrismaClient();

router.get('/fcats-list', async (req, res) => {
    const fcatList = await prisma.facility_categories.findMany({
        orderBy: {category_name: 'asc'}
    });
    res.json(fcatList);
});

router.post('/fcat-add', async (req, res) => {
    try {
        console.log('Тело запроса:', req.body);
        const { 
            category_name
        } = req.body;

        const fcatCandidate = await prisma.facility_categories.create({
            data: {
                category_name
            }
        });

        console.log('candidate:', fcatCandidate);

        res.status(201).json({
            message: 'Категория создана',
            alarm: fcatCandidate
        });
    } catch (error) {
        console.error('Ошибка при создании категории:', error);
        res.status(500).json({ 
            message: 'Что-то пошло не так, попробуйте снова',
            error: error.message
        });
    }
});

router.delete('/fcat-delete/:id', async (req, res) => {
    try {
        const { id } = req.params;

        const deletedFcat = await prisma.facility_categories.delete({
            where: { category_id: Number(id) }
        });

        console.log('Удаленная запись:', deletedFcat);

        res.status(200).json({
            message: 'Запись удалена',
            hardware: deletedFcat
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