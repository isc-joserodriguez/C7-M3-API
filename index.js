require("dotenv").config();

/**
 * 1.- Importar Express
 * 2.- Hacer instancia de la aplicación
 * 3.- Middlewares
 * 4.- Declarar las rutas
 * 5.- Levantar el servidor
 */

//! 1.- Importar Express
const express = require("express");

//! 2.- Hacer instancia de la aplicación
const app = express();

//! 3.- Configurar Middlewares
app.use(express.json());

//! 4.- Declarar Rutas
app.get("/", (req, res) => {
  res.json({ mensaje: "Bienvenido" });
});

//! 5.- Levantar servidor
app.listen(process.env.PORT, ()=>{
    console.log(`Servidor iniciado en el puerto: ${process.env.PORT}`)
});
