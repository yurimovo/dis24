const Router = require('express');
const { PrismaClient } = require('@prisma/client');

const router = Router();
const prisma = new PrismaClient();

router.get('/facility-list', async (req, res) => {
    const facilityList = await prisma.facilities.findMany({
        orderBy: {organization: 'asc'}
    });
    res.json(facilityList);
});

router.get('/facility-info/:id', async (req, res) => {
    const { id } = req.params;

    try {
        console.log(`Fetching facility info for ID: ${id}`);

        if (isNaN(id)) {
            throw new Error('Invalid facility ID');
        }

        const facilityInfo = await prisma.facilities.findUnique({
            where: { facility_id: Number(id) }
        });

        if (facilityInfo) {
            console.log('Facility info found:', facilityInfo);
            res.json(facilityInfo);
        } else {
            console.log('Facility not found');
            res.status(404).json({ error: 'Facility not found' });
        }
    } catch (error) {
        console.error('Error fetching facility info:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

router.get('/facility-edit-info/:id', async (req, res) => {
    const { id } = req.params;

    try {
        console.log(`Fetching facility edit info for ID: ${id}`);

        if (isNaN(id)) {
            throw new Error('Invalid facility ID');
        }

        const facilityEditInfo = await prisma.facilities.findUnique({
            where: { facility_id: Number(id) }
        });

        if (facilityEditInfo) {
            console.log('Facility info found:', facilityEditInfo);
            res.json(facilityEditInfo);
        } else {
            console.log('Facility not found');
            res.status(404).json({ error: 'Facility not found' });
        }
    } catch (error) {
        console.error('Error fetching facility edit info:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

router.post('/facility-add', async (req, res) => {
    try {
        console.log('Тело запроса:', req.body);
        const { 
            organization, facility, address, contruct_number, contruct_date,
            price, price_date, ownership_type, facility_category, security_type, contruct_file_number,
            lettered_file_number, spi, facility_hardware, surving_organization, mounting_organization, pult_number,
            sim_number, responsible, assortment, security_hours
        } = req.body;

        const facilityCandidate = await prisma.facilities.create({
            data: {
                organization, facility, address, contruct_number, contruct_date,
                price, price_date, ownership_type, facility_category, security_type, contruct_file_number,
                lettered_file_number, spi, facility_hardware, surving_organization, mounting_organization, pult_number,
                sim_number, responsible, assortment, security_hours
            }
        });

        console.log('candidate:', facilityCandidate);

        res.status(201).json({
            message: 'Объект создан',
            facility: facilityCandidate
        });
    } catch (error) {
        console.error('Ошибка при создании объекта:', error);
        res.status(500).json({ 
            message: 'Что-то пошло не так, попробуйте снова',
            error: error.message
        });
    }
});

router.put('/facility-update/:id', async (req, res) => {
    try {
        const { id } = req.params;
        console.log('Тело запроса:', req.body);
        const {
            organization,
            facility,
            address,
            contruct_number,
            contruct_date,
            price,
            price_date,
            ownership_type,
            facility_category,
            security_type,
            contruct_file_number,
            lettered_file_number,
            spi,
            facility_hardware,
            surving_organization,
            mounting_organization,
            pult_number,
            sim_number,
            responsible,
            assortment,
            security_hours
        } = req.body;

        const updatedFacility = await prisma.facilities.update({
            where: { facility_id: Number(id) },
            data: {
                organization,
                facility,
                address,
                contruct_number,
                contruct_date,
                price,
                price_date,
                ownership_type,
                facility_category,
                security_type,
                contruct_file_number,
                lettered_file_number,
                spi,
                facility_hardware,
                surving_organization,
                mounting_organization,
                pult_number,
                sim_number,
                responsible,
                assortment,
                security_hours
            }
        });

        console.log('Обновленная запись:', updatedFacility);

        res.status(200).json({
            message: 'Запись обновлена',
            facility: updatedFacility
        });
    } catch (error) {
        console.error('Ошибка при обновлении записи:', error); // Логирование ошибки на сервере
        res.status(500).json({
            message: 'Что-то пошло не так, попробуйте снова',
            error: error.message // Отправка сообщения об ошибке клиенту
        });
    }
});

router.delete('/facility-delete/:id', async (req, res) => {
    try {
        const { id } = req.params;

        const deletedFacility = await prisma.facilities.delete({
            where: { facility_id: Number(id) }
        });

        console.log('Удаленная запись:', deletedFacility);

        res.status(200).json({
            message: 'Запись удалена',
            facility: deletedFacility
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