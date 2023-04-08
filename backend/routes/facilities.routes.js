const Router = require('express');

const router = Router();

router.get('/facility_list', async (req, res) => {
    const { organizationId } = req.body;
    const facilityList = await prisma.organizations.findUnique({
        where: { id: organizationId }
    }).facilities()
    res.json(facilityList);
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