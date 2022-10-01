const {
  registro,
  verUsuarios,
  filtrarUsuarios,
  eliminarUsuarioPorId,
  eliminarUsuariosPorFiltro,
  actualizarUsuario,
  login
} = require("./User.controller");

const {
  nuevaPelicula,
  verPeliculas,
  eliminarPeliculaPorId,
  actualizarPelicula,
} = require("./Pelicula.controller");

module.exports = {
  registro,
  verUsuarios,
  filtrarUsuarios,
  eliminarUsuarioPorId,
  eliminarUsuariosPorFiltro,
  actualizarUsuario,
  nuevaPelicula,
  verPeliculas,
  eliminarPeliculaPorId,
  actualizarPelicula,
  login,
};
