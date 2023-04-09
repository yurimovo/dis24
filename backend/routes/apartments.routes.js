const Router = require('express');
const { PrismaClient } = require('@prisma/client');

const router = Router();
const prisma = new PrismaClient();

router.get('/apartments_list', async (req, res) => {
    const apartmentsList = await prisma.apartments.findMany({
        select: {
            apartment_address: true,
            contract_numbers: true,
            owners: {
              select: {
                owner: true,
              }
            }
        }
    });
    res.json(apartmentsList);
});

module.exports = router;