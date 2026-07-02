const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Proyecto Node-Express con base de datos');
});

app.listen(3000, (req, res) => {
  console.log('Servidor escuchando en http://localhost:3000');
});
