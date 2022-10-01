/**
 * 1.- Importar express
 * 2.- Instanciar enrutador
 * 3.- Importar controladores
 * 4.- Declaramos las rutas
 * 5.- Exportamos el enrutador
 */

//! 1.- Importar express & Middleware
const express = require("express");
const auth = require("../middleware/auth");

//! 2.- Instanciar enrutador
const router = express.Router();

//! 3.- Importar controladores
const {
  registro,
  verUsuarios,
  filtrarUsuarios,
  eliminarUsuarioPorId,
  eliminarUsuariosPorFiltro,
  actualizarUsuario,
  login,
} = require("../controllers");

//! 4.- Declaramos las rutas
router.post("/", registro);
router.post("/login", login);
router.get("/getAll", auth, verUsuarios);
router.get("/filtrar", filtrarUsuarios);
router.delete("/:id", eliminarUsuarioPorId);
router.delete("/", eliminarUsuariosPorFiltro);
router.put("/:id", actualizarUsuario);

//! 5.- Exportamos el enrutador
module.exports = router;
