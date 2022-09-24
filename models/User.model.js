/**
 * 1.- Importar mongoose
 * 2.- Crear el esquema
 * 3.- Exportar modelo
 */

//! 1.- Importar mongoose
const mongoose = require("mongoose");

//! 2.- Crear el esquema
const UserSchema = new mongoose.Schema({
  nombre: {
    type: String,
    require: true,
  },
  planeta: {
    type: String,
    default: "Tierra",
  },
  edad: {
    type: Number,
    min: [18, "Tienes que ser mayor de edad."],
    max: [100, "Superaste el rango de edad."],
  },
  tipo: {
    type: String,
    enum: ["cliente", "admin", "vendedor", "limpieza"],
    default: "cliente",
  },
});

//! Funciones del modelo

//! 3.- Exportar modelo
mongoose.model("User", UserSchema, "coleccionUser");
