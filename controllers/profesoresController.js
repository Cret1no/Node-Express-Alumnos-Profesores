class ProfesoresController {
  constructor() {}

  consultar(req, res) {
    res.json({ msg: 'Consulta de profesores desde clase' });
  }
  consultarDetalle(req, res) {
    res.json({ msg: 'Consulta detalle de profesor desde clase' });
  }
  ingresar(req, res) {
    res.json({ msg: 'Ingreso de profesor desde clase' });
  }
  actualizar(req, res) {
    res.json({ msg: 'Actualizacion de profesor desde clase' });
  }
  borrar(req, res) {
    res.json({ msg: 'Borrado de profesor desde clase' });
  }
}

module.exports = new ProfesoresController();
