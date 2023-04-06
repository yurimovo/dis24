import express from 'express'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()
const app = express()

app.use(express.json());

app.use('/api/facilities', require('./routes/facilities.ts'));
app.use('/api/apartments', require('./routes/apartments.ts'));
app.use('/api/users', require('./routes/users.ts'));

app.listen(5000, () =>
    console.log('REST API server ready at: http://localhost:5000'),
);



app.put('/publish/:id', async (req, res) => {
    const { id } = req.params
    const post = await prisma.post.update({
        where: { id },
        data: { published: true },
    })
    res.json(post)
})

app.delete('/user/:id', async (req, res) => {
    const { id } = req.params
    const user = await prisma.user.delete({
        where: {
        id,
        },
    })
    res.json(user)
})

const server = app.listen(3000)