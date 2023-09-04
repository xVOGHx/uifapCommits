const express = require("express");
const app = express();

app.use(express.json());

const PORT = 8080;
const usuarios = [];

app.get("/", (req, res) => {
    res.json({usuarios: usuarios})
})

app.listen(PORT, () => {
    console.log(`rodado na porta... ${PORT}`)
})

app.post("/usuarios", (req, res) => {
    const idade = req.body;
    usuarios.push(idade);
})

if(idade >= 18){
    res.send("maior de idade");
}else if(idade < 18){
    res.send("de menor");
}