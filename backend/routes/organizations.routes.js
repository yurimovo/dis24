const { Router } = require('express');
const { PrismaClient } = require('@prisma/client');

const router = new Router();
const prisma = new PrismaClient();

router.get('/organizations_list', async (req, res) => {
    try {
        const organizationsList = await prisma.organizations.findMany();
        console.log(organizationsList);
        res.json(organizationsList);
    } catch (error) {
        res.status(500).json({ message: 'Что-то пошло не так, попробуйте снова' });
    }
});

module.exports = router;