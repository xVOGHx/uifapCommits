const  express = require("express");
const {PrismaClient} = require("@prisma/client");
const coockieParser = require("cookie-parser");
const bcrypt = require("bcrypt");

const app = express()

app.use(express.json());
const prisma = new PrismaClient();

app.post("/registar", async (req, res) => {
    const {nome, senha} = req.body;
    res,json(nome,senha)
})

app.post("/login", async (req, res) => {

})

app.post("/perfil", async (req, res) => {
    res.json("Login")
})
app.listen(8080, () => {
    console.log("rodando na porta 8080")
})