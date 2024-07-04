const Router = require('express');
const { PrismaClient } = require('@prisma/client');

const router = Router();
const prisma = new PrismaClient();

router.get('/apartments-list', async (req, res) => {
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

router.get('/apartment-edit-info/:id', async (req, res) => {
    const { id } = req.params;

    try {
        console.log(`Fetching apartment edit info for ID: ${id}`);

        if (isNaN(id)) {
            throw new Error('Invalid apartment ID');
        }

        const apartmentEditInfo = await prisma.apartments.findUnique({
            where: { apartment_id: Number(id) }
        });

        if (apartmentEditInfo) {
            console.log('Apartment info found:', apartmentEditInfo);
            res.json(apartmentEditInfo);
        } else {
            console.log('Apartment not found');
            res.status(404).json({ error: 'Apartment not found' });
        }
    } catch (error) {
        console.error('Error fetching apartment edit info:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

router.post('/apartment-add', async (req, res) => {
    try {
        console.log('Тело запроса:', req.body);
        const { 
            owner, address, phones, inn, contruct_number, contruct_date, price, price_date, security_type, contruct_file_number,
            lettered_file_number, apartment_category, penal_number, pult_number, spi, apartment_hardware, mounting_organization,
            surving_organization, assortment
        } = req.body;

        const apartmentCandidate = await prisma.apartments.create({
            data: {
                owner, address, phones, inn, contruct_number, contruct_date, price, price_date, security_type, contruct_file_number,
                lettered_file_number, apartment_category, penal_number, pult_number, spi, apartment_hardware, mounting_organization,
                surving_organization, assortment
            }
        });

        console.log('candidate:', apartmentCandidate);

        res.status(201).json({
            message: 'МПХИГ создан',
            apartment: apartmentCandidate
        });
    } catch (error) {
        console.error('Ошибка при создании МПХИГ:', error);
        res.status(500).json({ 
            message: 'Что-то пошло не так, попробуйте снова',
            error: error.message
        });
    }
});

router.put('/apartment-update/:id', async (req, res) => {
    try {
        const { id } = req.params;
        console.log('Тело запроса:', req.body);
        const {
            owner, address, phones, inn, contruct_number, contruct_date, price, price_date, security_type, contruct_file_number,
            lettered_file_number, apartment_category, penal_number, pult_number, spi, apartment_hardware, mounting_organization,
            surving_organization, assortment
        } = req.body;

        const updatedApartment = await prisma.apartments.update({
            where: { apartment_id: Number(id) },
            data: {
                owner, address, phones, inn, contruct_number, contruct_date, price, price_date, security_type, contruct_file_number,
                lettered_file_number, apartment_category, penal_number, pult_number, spi, apartment_hardware, mounting_organization,
                surving_organization, assortment
            }
        });

        console.log('Обновленная запись:', updatedApartment);

        res.status(200).json({
            message: 'Запись обновлена',
            apartment: updatedApartment
        });
    } catch (error) {
        console.error('Ошибка при обновлении записи:', error);
        res.status(500).json({
            message: 'Что-то пошло не так, попробуйте снова',
            error: error.message
        });
    }
});

router.delete('/apartment-delete/:id', async (req, res) => {
    try {
        const { id } = req.params;

        const deletedApartment = await prisma.apartments.delete({
            where: { apartment_id: Number(id) }
        });

        console.log('Удаленная запись:', deletedApartment);

        res.status(200).json({
            message: 'Запись удалена',
            apartment: deletedApartment
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