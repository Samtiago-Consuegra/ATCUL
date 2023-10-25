const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'soft_academico_atcul',
});

const archivoSQL = '"C:\Users\Manuel Jose\Desktop\loquesea\soft_academico_atcul (1).sql"'

db.connect(err => {
  if (err) {
    console.error('Error de conexión a la base de datos:', err);
    return;
  }
  console.log('Conexión exitosa a la base de datos.');
});

app.post('/login', (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  const sql = 'SELECT * FROM usuarios WHERE nombreUsuario = ? AND password = ?';

  db.query(sql, [nombreUsuario, password], (err, results) => {
    if (err) {
      console.error('Error en la consulta:', err);
      return res.status(500).send('Error en la consulta');
    }

    if (results.length > 0) {
      // Credenciales válidas, el usuario ha iniciado sesión con éxito
      res.send('Inicio de sesión exitoso');
    } else {
      // Credenciales inválidas, el usuario no puede iniciar sesión
      res.send('Credenciales incorrectas');
    }
  });
});

app.listen(3000, () => {
  console.log('El servidor está en ejecución en el puerto 3000');
});
