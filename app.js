const express = require('express');
const app = express();

// GET
app.get('/get/persona/:id', function(req, res) {
    var user_id = req.param('id');
    switch(user_id){
        case '0':
        res.send(cualquiera)
        break;
        case '1':
        res.send(profesor)
        break;
        case '2':
        res.send(estudiante)
        break;
        default:
        res.send('Este usuario no existe');
    }
  });
// POST
  app.post('/post/persona', function(req, res) {
    res.send(cualquiera);
  });

  app.post('/post/estudiante', function(req, res) {
    res.send(estudiante);
  });

  app.post('/post/profesor', function(req, res) {
    res.send(profesor);
  });

  app.put('/put/:id', function(req, res) {
      var user_id = req.param('id');
      switch(user_id){
        case '0':
        cualquiera.nombre= null;
        res.send(cualquiera)
        break;
        case '1':
        profesor.nombre= null;
        res.send(profesor)
        break;
        case '2':
        estudiante.nombre= null;
        res.send(estudiante)
        break;
        default:
        res.send('Este usuario no existe');
    }
  });

  app.delete('/delete/:id', function(req, res) {
    var user_id = req.param('id');
    switch(user_id){
      case '0':
      cualquiera = null;
      res.send(cualquiera);
      break;
      case '1':
      profesor = null;
      res.send(profesor);
      break;
      case '2':
      estudiante = null;
      res.send(estudiante);
      break;
      default:
      res.send('Este usuario no existe');
  }
});

app.listen(3000, function(req,res){
    console.log('Escuchando en el puerto 3000');
});
var persona = {
      id : 0,
      nombre : null,
      apellido:'Perez',
      edad:28,
  }
  var cualquiera = persona;
  cualquiera.nombre = 'Martin';
  var profesor = persona;
  profesor.nombre = 'Andres';
  profesor.universidad = 'udea';
  profesor.id=1;
  var estudiante = persona;
  estudiante.nombre = 'Santiago';
  estudiante.carrera = 'derecho';
  estudiante.id=2;
