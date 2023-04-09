const { Router } = require('express');
const { PrismaClient } = require('@prisma/client');

const router = new Router();
const prisma = new PrismaClient();

router.get('/owners_list', async (req, res) => {
    try {
        const ownersList = await prisma.owners.findMany({
            select: {
                owner: true,
                legal_address: true,
                inn: true
            },
            orderBy: {owner: 'asc'}
        });
        res.json(ownersList);
    } catch (error) {
        res.status(500).json({ message: 'Что-то пошло не так, попробуйте снова' });
    }
});

module.exports = router;