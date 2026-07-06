const db = require('../database/conexion.js');

class CursosController {
  constructor() {}

  consultar(req, res) {
    res.json({ msg: 'Consulta de cursos desde clase' });
  }

  consultarDetalle(req, res) {
    const { id } = req.params;
    res.json({
      msg: `Consulta detalle de curso desde clase con id:${id}`,
    });
  }
  ingresar(req, res) {
    res.json({ msg: 'Ingreso de curso desde clase' });
  }

  actualizar(req, res) {
    res.json({ msg: 'Actualizacion de curso desde clase' });
  }
  borrar(req, res) {
    res.json({ msg: 'Borrado de curso desde clase' });
  }
}

module.exports = new CursosController();
