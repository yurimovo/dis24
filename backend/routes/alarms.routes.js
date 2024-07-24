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

module.exports = router;