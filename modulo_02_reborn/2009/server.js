const  express = require("express");
const {PrismaClient} = require("@prisma/client");
const coockieParser = require("cookie-parser");
const bcrypt = require("bcrypt");
const {createTokens, validaToken} = require("./JWT")

const app = express();
app.use(express.json());

app.use(coockieParser());
const prisma = new PrismaClient();

app.post("/registar", async (req, res) => {
    const {nome, senha} = req.body;
    await bcrypt.hash(senha, 10).then((hash) => {
        prisma.usuario.create({
            data: {
                nome,
                senha: hash
            }
        }).then(() => {
            res.json("Usuario criado");
        }).catch( (err) => {
            res.json({err: "Algo deu errado"});
        })
    })
})

app.post("/login", async (req, res) => {
    const {nome, senha} = req.body;
    const usuario = await prisma.usuario.findFirst({
        where: {nome} 
    })
    if(!usuario){
        res.status(404).json({error: "Usuario não existe"})
    }
    const pSenha = usuario.senha;
    bcrypt.compare(senha, pSenha).then((match) => {
        if(!match){
            res.json({error: "Senha incorreta"});
        } else {
            const acessToken = createTokens(usuario);
            res.cookie("acess-token", acessToken, {
                httpOnly: false
            })
            res.json("Logged In");
        }
    })
})

app.get("/perfil", validaToken ,(req, res) => {
    res.json("entrou no perfil")
})
app.listen(8080, () => {
    console.log("rodando na porta 8080")
})