const Router = require('express');
const { PrismaClient } = require('@prisma/client');

const router = Router();
const prisma = new PrismaClient();

router.get('/simcards_list', async (req, res) => {
    const simcardsList = await prisma.sim.findMany({
        orderBy: {sim_id: 'asc'}
    });
    res.json(simcardsList);
});

router.post('/sim-add', async (req, res) => {
    try {
        console.log('Тело запроса:', req.body);
        const { 
            sim_number, fccid, object, address, pult_number, mounting_date
        } = req.body;

        const simCandidate = await prisma.sim.create({
            data: {
                sim_number, fccid, object, address, pult_number, mounting_date
            }
        });

        console.log('candidate:', simCandidate);

        res.status(201).json({
            message: 'SIM создана',
            sim: simCandidate
        });
    } catch (error) {
        console.error('Ошибка при создании SIM:', error);
        res.status(500).json({ 
            message: 'Что-то пошло не так, попробуйте снова',
            error: error.message
        });
    }
});

router.delete('/sim-delete/:id', async (req, res) => {
    try {
        const { id } = req.params;

        const deletedSim = await prisma.sim.delete({
            where: { sim_id: Number(id) }
        });

        console.log('Удаленная запись:', deletedSim);

        res.status(200).json({
            message: 'Запись удалена',
            sim: deletedSim
        });
    } catch (error) {
        console.error('Ошибка при удалении записи:', error);
        res.status(500).json({
            message: 'Что-то пошло не так, попробуйте снова',
            error: error.message
        });
    }
});

router.get('/sim-edit-info/:id', async (req, res) => {
    const { id } = req.params;

    try {
        console.log(`Fetching SIM edit info for ID: ${id}`);

        if (isNaN(id)) {
            throw new Error('Invalid SIM ID');
        }

        const simEditInfo = await prisma.sim.findUnique({
            where: { sim_id: Number(id) }
        });

        if (simEditInfo) {
            console.log('SIM info found:', simEditInfo);
            res.json(simEditInfo);
        } else {
            console.log('SIM not found');
            res.status(404).json({ error: 'SIM not found' });
        }
    } catch (error) {
        console.error('Error fetching SIM edit info:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

router.put('/sim-update/:id', async (req, res) => {
    try {
        const { id } = req.params;
        console.log('Тело запроса:', req.body);
        const {
            sim_number, fccid, object, address, pult_number, mounting_date
        } = req.body;

        const updatedSim = await prisma.sim.update({
            where: { sim_id: Number(id) },
            data: {
                sim_number, fccid, object, address, pult_number, mounting_date
            }
        });

        console.log('Обновленная запись:', updatedSim);

        res.status(200).json({
            message: 'Запись обновлена',
            sim: updatedSim
        });
    } catch (error) {
        console.error('Ошибка при обновлении записи:', error);
        res.status(500).json({
            message: 'Что-то пошло не так, попробуйте снова',
            error: error.message
        });
    }
});

router.get('/sim-info/:id', async (req, res) => {
    const { id } = req.params;

    try {
        console.log(`Fetching SIM info for ID: ${id}`);

        if (isNaN(id)) {
            throw new Error('Invalid SIM ID');
        }

        const simInfo = await prisma.sim.findUnique({
            where: { sim_id: Number(id) }
        });

        if (simInfo) {
            console.log('SIM info found:', simInfo);
            res.json(simInfo);
        } else {
            console.log('SIM not found');
            res.status(404).json({ error: 'SIM not found' });
        }
    } catch (error) {
        console.error('Error fetching SIM info:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

module.exports = router;