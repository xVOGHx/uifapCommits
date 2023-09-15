const { Router } = require("express");
const usuarioController = require("./controllers/usuarioController");
const router = Router();

router.post("/criarUsuario", usuarioController.criaUsuario);

module.exports = { router }