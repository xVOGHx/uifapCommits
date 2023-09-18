const { Router } = require("express");
const usuarioController = require("./controllers/usuarioController");
const router = Router();

router.post("/criarUsuario", usuarioController.criaUsuario);
router.get(`/buscarUsuario/:id`, usuarioController.buscarUsuario)
router.get(`/buscarUsuario`, usuarioController.buscarUsuarios);
router.put(`/atualizaUsuario/:id`, usuarioController.atualizaUsuario);
router.delete(`/deletarUsuario/:id`, usuarioController.deletarUsuario);

module.exports = { router }