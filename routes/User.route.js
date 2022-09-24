/**
 * 1.- Importar express
 * 2.- Instanciar enrutador
 * 3.- Importar controladores
 * 4.- Declaramos las rutas
 * 5.- Exportamos el enrutador
 */

//! 1.- Importar express
const express = require('express');

//! 2.- Instanciar enrutador
const router = express.Router();

//! 3.- Importar controladores
const {
    registro,
    verUsuarios,
} = require ('../controllers');

//! 4.- Declaramos las rutas
router.post('/', registro);
router.get('/getAll', verUsuarios);

//! 5.- Exportamos el enrutador
module.exports = router;