const Router = require('express');
const { PrismaClient } = require('@prisma/client');

const router = Router();
const prisma = new PrismaClient();

router.get('/alarms-list', async (req, res) => {
    const alarmsList = await prisma.alarms.findMany({
        orderBy: {alarm_date: 'asc'}
    });
    res.json(alarmsList);
});

router.post('/alarm-add', async (req, res) => {
    try {
        console.log('Тело запроса:', req.body);
        const { 
            facility, alarm_date
        } = req.body;

        const alarmCandidate = await prisma.alarms.create({
            data: {
                facility, alarm_date
            }
        });

        console.log('candidate:', alarmCandidate);

        res.status(201).json({
            message: 'Ложняк создан',
            alarm: alarmCandidate
        });
    } catch (error) {
        console.error('Ошибка при создании ложняка:', error);
        res.status(500).json({ 
            message: 'Что-то пошло не так, попробуйте снова',
            error: error.message
        });
    }
});

router.delete('/alarm-delete/:id', async (req, res) => {
    try {
        const { id } = req.params;

        const deletedAlarm = await prisma.alarms.delete({
            where: { alarm_id: Number(id) }
        });

        console.log('Удаленная запись:', deletedAlarm);

        res.status(200).json({
            message: 'Запись удалена',
            sim: deletedAlarm
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