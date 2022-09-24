require("dotenv").config();

/**
 * 1.- Importar Express
 * 2.- Crear modelos
 * 3.- Crear controladores
 * 4.- Crear rutas
 * 5.- Hacer instancia de la aplicación
 * 6.- Importar rutas
 * 7.- Middlewares
 * 8.- Levantar el servidor
 */

//! 1.- Importar Express
const express = require("express");

//! 5.- Hacer instancia de la aplicación
const app = express();

//! 6.- Configurar Middlewares
app.use(express.json());

//! 7.- Importar Rutas

//! 8.- Levantar servidor
app.listen(process.env.PORT, ()=>{
    console.log(`Servidor iniciado en el puerto: ${process.env.PORT}`)
});
