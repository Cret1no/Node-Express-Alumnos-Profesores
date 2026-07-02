const express = require('express');
const app = express();
const estudiantesRoutes = require('./routes/estudiantesRoutes.js');
const profesoresRoutes = require('./routes/profesoresRoutes.js');

app.get('/', (req, res) => {
  res.send('Proyecto Node-Express con base de datos');
});

app.use('/estudiantes', estudiantesRoutes);
app.use('/profesores', profesoresRoutes);

app.listen(3000, (req, res) => {
  console.log('Servidor escuchando en http://localhost:3000');
});
