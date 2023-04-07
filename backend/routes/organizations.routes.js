const { Router } = require('express');

const router = new Router();

router.post('/organizations_list', async (req, res) => {
    try {
        const organizationsList = await prisma.organizations.findMany({
            orderBy: {
                organization_name: 'asc'
            }
        });
        res.json(Array(organizationsList));
        res.status(201).json({ message: 'Список организаций получен' });
    } catch (error) {
        res.status(500).json({ message: 'Что-то пошло не так, попробуйте снова' });
    }
    
});

module.exports = router;