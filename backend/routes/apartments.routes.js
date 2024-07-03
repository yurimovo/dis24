const Router = require('express');
const { PrismaClient } = require('@prisma/client');

const router = Router();
const prisma = new PrismaClient();

router.get('/apartments_list', async (req, res) => {
    const apartmentsList = await prisma.apartments.findMany({
        orderBy: {owner: 'asc'}
    });
    res.json(apartmentsList);
});

router.get('/apartment-info/:id', async (req, res) => {
    const { id } = req.params;

    try {
        console.log(`Fetching apartment info for ID: ${id}`);

        if (isNaN(id)) {
            throw new Error('Invalid apartment ID');
        }

        const apartmentInfo = await prisma.apartments.findUnique({
            where: { apartment_id: Number(id) },
        });

        if (apartmentInfo) {
            console.log('Apartment info found:', apartmentInfo);
            res.json(apartmentInfo);
        } else {
            console.log('Apartment not found');
            res.status(404).json({ error: 'Apartment not found' });
        }
    } catch (error) {
        console.error('Error fetching apartment info:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

module.exports = router;