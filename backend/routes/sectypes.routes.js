const Router = require('express');
const { PrismaClient } = require('@prisma/client');

const router = Router();
const prisma = new PrismaClient();

router.get('/sectypes-list', async (req, res) => {
    const sectypesList = await prisma.security_types.findMany({
        orderBy: {type_name: 'asc'}
    });
    res.json(sectypesList);
});

router.post('/sectype-add', async (req, res) => {
    try {
        console.log('Тело запроса:', req.body);
        const { 
            type_name
        } = req.body;

        const sectypeCandidate = await prisma.security_types.create({
            data: {
                type_name
            }
        });

        console.log('candidate:', sectypeCandidate);

        res.status(201).json({
            message: 'Вид охраны создан',
            alarm: sectypeCandidate
        });
    } catch (error) {
        console.error('Ошибка при создании вида охраны:', error);
        res.status(500).json({ 
            message: 'Что-то пошло не так, попробуйте снова',
            error: error.message
        });
    }
});

router.delete('/sectype-delete/:id', async (req, res) => {
    try {
        const { id } = req.params;

        const deletedSectype = await prisma.security_types.delete({
            where: { type_id: Number(id) }
        });

        console.log('Удаленная запись:', deletedSectype);

        res.status(200).json({
            message: 'Запись удалена',
            hardware: deletedSectype
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