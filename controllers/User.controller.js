const mongoose = require("mongoose");
const User = mongoose.model("User");

const registro = async (req, res) => {
  try {
    //Creamos nuestro usuario con lo que viene del body
    const { password } = req.body;

    delete req.body.password;

    const user = new User(req.body);

    user.hashPassword(password);

    const resp = await user.save();

    return res.status(201).json({ mensaje: "Usuario creado", detalles: resp });
  } catch (e) {
    return res.status(400).json({ mensaje: "Error", detalles: e.message });
  }
};

const verUsuarios = async (req, res) => {
  try {
    const usuarios = await User.find();
    if (!usuarios.length)
      return res
        .status(404)
        .json({ mensaje: "Error", detalles: "Colección vacía" });
    return res
      .status(200)
      .json({ mensaje: "Usuarios encontrados", detalles: usuarios });
  } catch (e) {
    return res.status(400).json({ mensaje: "Error", detalles: e.message });
  }
};

const filtrarUsuarios = async (req, res) => {
  try {
    const usuarios = await User.find(req.body);
    if (!usuarios.length)
      return res
        .status(404)
        .json({ mensaje: "Error", detalles: "Usuarios no encontrados" });
    return res
      .status(200)
      .json({ mensaje: "Usuarios encontrados", detalles: usuarios });
  } catch (e) {
    return res.status(400).json({ mensaje: "Error", detalles: e.message });
  }
};

const eliminarUsuarioPorId = async (req, res) => {
  try {
    const { id } = req.params;
    if (id.length !== 24)
      return res
        .status(400)
        .json({ mensaje: "Error", detalles: "ID no válido" });
    const usuario = await User.findById(id);
    if (!usuario)
      return res
        .status(404)
        .json({ mensaje: "Error", detalles: "Usuario no encontrado" });
    const eliminado = await User.findByIdAndDelete(id);
    return res
      .status(200)
      .json({ mensaje: "Usuario eliminado", detalles: eliminado });
  } catch (e) {
    return res.status(400).json({ mensaje: "Error", detalles: e.message });
  }
};

const eliminarUsuariosPorFiltro = async (req, res) => {
  try {
    const eliminados = await User.deleteMany(req.body);
    return res
      .status(200)
      .json({ mensaje: "Usuarios eliminados", detalles: eliminados });
  } catch (e) {
    return res.status(400).json({ mensaje: "Error", detalles: e.message });
  }
};

const actualizarUsuario = async (req, res) => {
  try {
    const { id } = req.params;

    const actualizado = await User.findByIdAndUpdate(
      id,
      { $set: req.body },
      { new: true }
    );
    return res
      .status(200)
      .json({ mensaje: "Usuario actualizado", detalles: actualizado });
  } catch (e) {
    return res.status(400).json({ mensaje: "Error", detalles: e.message });
  }
};

module.exports = {
  registro,
  verUsuarios,
  filtrarUsuarios,
  eliminarUsuarioPorId,
  eliminarUsuariosPorFiltro,
  actualizarUsuario,
};
