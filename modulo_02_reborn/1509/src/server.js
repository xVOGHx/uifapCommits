const express = require("express");
const { router } = require("./routes")
const { prismaClient } = require("@prisma/client");

const app = express();

app.use(express.json());
app.use(router);

app.listen(8080, () => {
    console.log("rodando na porta de tras rs")
})