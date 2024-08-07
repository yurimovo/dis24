const Router = require('express');
const { PrismaClient } = require('@prisma/client');

const router = Router();
const prisma = new PrismaClient();

router.get('/hardware-list', async (req, res) => {
    const hardwareList = await prisma.hardware.findMany({
        orderBy: {hardware_name: 'asc'}
    });
    res.json(hardwareList);
});

router.post('/hardware-add', async (req, res) => {
    try {
        console.log('Тело запроса:', req.body);
        const { 
            hardware_name
        } = req.body;

        const hardwareCandidate = await prisma.hardware.create({
            data: {
                hardware_name
            }
        });

        console.log('candidate:', hardwareCandidate);

        res.status(201).json({
            message: 'Оборудование создано',
            alarm: hardwareCandidate
        });
    } catch (error) {
        console.error('Ошибка при создании оборудования:', error);
        res.status(500).json({ 
            message: 'Что-то пошло не так, попробуйте снова',
            error: error.message
        });
    }
});

router.delete('/hardware-delete/:id', async (req, res) => {
    try {
        const { id } = req.params;

        const deletedHardware = await prisma.hardware.delete({
            where: { hardware_id: Number(id) }
        });

        console.log('Удаленная запись:', deletedHardware);

        res.status(200).json({
            message: 'Запись удалена',
            hardware: deletedHardware
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