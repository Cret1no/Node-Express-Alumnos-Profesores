const db = require('../database/conexion.js');

class EstudiantesController {
  constructor() {}

  consultar(req, res) {
    try {
      db.query('SELECT * FROM estudiantes', (err, rows) => {
        if (err) {
          res.status(400).send(err.message);
        } else {
          res.status(200).json(rows);
        }
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
          res.status(400).send(err.message);
        } else {
          res.status(200).json(rows[0]);
        }
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
            res.status(400).send(err.message);
          } else {
            res.status(201).json({ id: rows.insertId });
          }
        },
      );
    } catch (error) {
      res.status(500).send(error.message);
    }
  }

  actualizar(req, res) {
    const { id } = req.params;
    try {
      const { nombre, apellido, dni, email } = req.body;
      db.query(
        `UPDATE estudiantes
        SET nombre = ?, apellido = ?, dni = ?, email = ?
        WHERE id = ?;`,
        [nombre, apellido, dni, email, id],
        (err, rows) => {
          if (err) {
            res.status(400).send(err.message);
          }
          if (rows.affectedRows == 1) {
            res
              .status(200)
              .json({ respuesta: 'Registro actualizado con exito' });
          }
        },
      );
    } catch (error) {
      res.status(500).send(error.message);
    }
  }

  borrar(req, res) {
    const { id } = req.params;
    try {
      db.query(`DELETE FROM estudiantes WHERE id = ?;`, [id], (err, rows) => {
        if (err) {
          res.status(400).send(err.message);
        }
        if (rows.affectedRows == 1) {
          res.status(200).json({ respuesta: 'Registro eliminado con exito' });
        }
      });
    } catch (error) {
      res.status(500).send(error.message);
    }
  }
}

module.exports = new EstudiantesController();
