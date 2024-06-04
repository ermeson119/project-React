import express from 'express'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const app = express()
app.use(express.json())

// Listando
app.get('/usuarios', async (req, res) =>{
    try {
        const allUsers = await prisma.user.findMany();
        res.status(200).json(allUsers);
    } catch (error) {
        console.error('Erro ao buscar usuários:', error);
        res.status(500).json({ error: 'Erro ao buscar usuários' });
    }

})

//Busbando pelo id
app.get('/usuarios/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const usuario = await prisma.user.findUnique({
            where: {
                id: parseInt(id)
            }
        });
        if (usuario) {
            res.status(200).json(usuario);
        } else {
            res.status(404).json({ error: 'Usuário não encontrado' });
        }
    } catch (error) {
        console.error('Erro ao buscar usuário:', error);
        res.status(500).json({ error: 'Erro ao buscar usuário' });
    }
});

// Criando
app.post('/usuarios', async (req, res) =>{
    await prisma.user.create({
        data: {
          email: req.body.email,
          name: req.body.name,
          age: req.body.age
        }
    })
    res.status(201).json({message: "Usuario criado com suscesso"})
})


//Atualizando
app.put('/usuarios/:id', async (req, res) =>{
    await prisma.user.update({
        where: {
            id: parseInt(req.params.id)
        },
        data: {
          email: req.body.email,
          name: req.body.name,
          age: req.body.age
        }
    })
    res.status(200).json({message: "Usuario atualizado com suscesso"})
})


// deteletando por id
app.delete('/usuarios/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const usuario = await prisma.user.deleteMany({
            where: {
                id: parseInt(id)
            }
        });
        if (usuario) {
            res.status(200).json({message : `Usuario: ${usuario} deletado com sucesso`});
        } else {
            res.status(404).json({ error: 'Usuário não encontrado' });
        }
    } catch (error) {
        console.error('Erro ao buscar usuário:', error);
        res.status(500).json({ error: 'Erro em apagar usuário' });
    }
});




app.listen(3000)

/*
ermeson 
SENI17
*/