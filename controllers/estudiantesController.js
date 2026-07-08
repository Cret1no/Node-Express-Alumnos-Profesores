const db = require('../database/conexion.js');

class EstudiantesController {
  constructor() {}

  consultar(req, res) {
    try {
      db.query('SELECT * FROM estudiantes', (err, rows) => {
        if (err) {
          res.status(400).send(err);
        }
        res.status(200).json(rows);
      });
    } catch (error) {
      res.status(500).send(error.message);
    }
  }

  consultarDetalle(req, res) {
    try {
      const { id } = req.params;
      db.query(`SELECT * FROM estudiantes WHERE id = ?`, [id], (err, rows) => {
        if (err) {
          res.status(400).send(err);
        }
        res.status(200).json(rows);
      });
    } catch (error) {
      res.status(500).send(error.message);
    }
  }

  ingresar(req, res) {
    try {
      const { nombre, apellido, dni, email } = req.body;
      db.query(
        `INSERT INTO estudiantes
        (id, nombre, apellido, dni, email)
        VALUES(NULL, ?, ?, ?, ?);`,
        [nombre, apellido, dni, email],
        (err, rows) => {
          if (err) {
            res.status(400).send(err);
          }
          res.status(201).json({ id: rows.insertId });
        },
      );
    } catch (error) {
      res.status(500).send(error.message);
    }
  }

  actualizar(req, res) {
    res.json({ msg: 'Actualizacion de estudiante desde clase' });
  }
  borrar(req, res) {
    res.json({ msg: 'Borrado de estudiante desde clase' });
  }
}

module.exports = new EstudiantesController();
