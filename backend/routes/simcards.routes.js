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

module.exports = router;