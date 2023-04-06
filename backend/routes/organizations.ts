const { Router } = require('express');
const { PrismaClient } = require('@prisma/client');

const router = Router();
const prisma = PrismaClient();

router.post('/organizations_list', async (req, res) => {
    const organizationsList = await prisma.organizations.findMany({
        orderBy: {
            organization_name: 'asc'
        }
    });
    res.json(Array(organizationsList));
});