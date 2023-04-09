const Router = require('express');
const { PrismaClient } = require('@prisma/client');

const router = Router();
const prisma = new PrismaClient();

router.get('/facility_list', async (req, res) => {
    const facilityList = await prisma.facilities.findMany({
        select: {
            facility_name: true,
            facility_address: true,
            organizations: {
              select: {
                organization_name: true,
              },
            },
        },
        orderBy: {facility_name: 'asc'}
    });
    res.json(facilityList);
    console.log(facilityList);
});

router.post('/facility_add', async (req, res) => {
    try {
        const { 
            organizationId, facilityName, facilityAddress, contractNumbers, contractDate,
            price, priceDate, ownershipId, categoryId, securityTypeId, contractFileNumber,
            letteredFileNumber, spiId, hardwareId, survOrgId, mountOrgId, pultNumberId,
            simId, responsible, assortment, securityHours
        } = req.body
        const facility = await prisma.post.create({
            data: {
                organizationId, facilityName, facilityAddress, contractNumbers, contractDate,
                price, priceDate, ownershipId, categoryId, securityTypeId, contractFileNumber,
                letteredFileNumber, spiId, hardwareId, survOrgId, mountOrgId, pultNumberId,
                simId, responsible, assortment, securityHours
            }
        });
        res.status(201).json({ message: 'Объект создан' });
        res.json(facility);
    } catch (error) {
        res.status(500).json({ message: 'Что-то пошло не так, попробуйте снова' });
    }
});

module.exports = router;