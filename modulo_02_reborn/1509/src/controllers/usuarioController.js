const { prismaClient, PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

module.exports = {
    async criaUsuario(req, res){
        const { nome, email } = req.body;
        try {
            const usuariosExistente = await prisma.usuario.findFirst({
                where: {
                    email,
                },
            })
            if (usuariosExistente) {
                return res.json("Esse usuario já foi criado");
            }else {
                const usuario = await prisma.usuario.create({
                    data: {
                        email,
                        nome,
                    }
                });
                res.json({ Mensagem: `Usuario criado (e lar destruido)`})
            }
        } catch (error) {
            res.json({error})
        }
    }
}