/**
 * 1.- Importar mongoose
 * 2.- Crear el esquema
 * 3.- Exportar modelo
 */

//! 1.- Importar mongoose
const mongoose = require("mongoose");

//! 2.- Crear el esquema
const PeliculaSchema = new mongoose.Schema({
  nombre: {
    type: String,
    require: true,
  },
  año: {
    type: Number,
    require: true,
  },
  director: {
    type: String,
    require: true,
  },
});

//! 3.- Exportar modelo
mongoose.model("Pelicula", PeliculaSchema, "coleccionPelicula");
