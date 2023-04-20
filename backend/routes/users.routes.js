const { Router } = require('express');
const { PrismaClient } = require('@prisma/client');

const router = new Router();
const prisma = new PrismaClient();

router.post('/new_user', async (req, res) => {
    try {
        const { username, password } = req.body;
        const candidate = await prisma.users.findFirst({ username })
        
        if (candidate) {
            return res.status(400).json({ message: 'Такой пользователь уже существует' })
        }

        const hashedPassword = await bcrypt.hash(password, 12);

        const user = await prisma.users.create({
            data: {
                username: username,
                password_hashed: hashedPassword,
                role_id: 2
            }
        });
    } catch (error) {
        res.status(500).json({ message: 'Что-то пошло не так, попробуйте снова' });
    }
})

module.exports = router;