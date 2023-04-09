const { Router } = require('express');
const { PrismaClient } = require('@prisma/client');

const router = new Router();
const prisma = new PrismaClient();

router.get('/organizations_list', async (req, res) => {
    try {
        const organizationsList = await prisma.organizations.findMany({
            select: {
                organization_name: true,
                legal_address: true,
                inn: true
            },
            orderBy: {organization_name: 'asc'}
        });
        res.json(organizationsList);
    } catch (error) {
        res.status(500).json({ message: 'Что-то пошло не так, попробуйте снова' });
    }
});

router.post('/organization_add', async (req, res) => {
    try {
        const org = await prisma.organizations.create({
            data: {
                organization_name,
                legal_address,
                inn,
                ogrn
            }
        })
    } catch (error) {
        res.status(500).json({ message: 'Что-то пошло не так, попробуйте снова' });
    }
})

module.exports = router;