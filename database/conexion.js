const mysql = require('mysql2');

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'e32917148',
  database: 'cursos',
});

db.connect((err) => {
  if (err) {
    throw err;
  }
  console.log('Base de datos conectada');
});

module.exports = db;
