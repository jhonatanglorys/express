const express = require('express');
const app = express();

app.get('/persona/:id', function(req, res) {
    var user_id = req.param('id');
    switch(user_id){
        case 0:
        res.send(cualquiera.nombre)
        break;
        case 1:
        res.send(cualquiera.nombre)
        break;
        default:
        res.send('Este usuario no existe');
    }
  });

app.listen(3000, function(req,res){
    console.log('Escuchando en el puerto 3000');
});
var identificacion = 0;
var persona = {
      id : identificacion,
      nombre : null,
      apellido:'Perez',
      edad:28,
  }
  identificacion++;
  var cualquiera = persona;
  cualquiera.nombre = 'Martin';
  var profesor = persona;
  profesor.nombre = 'Andres';
  profesor.universidad = 'udea';
  identificacion++;
  var estudiante = persona;
  estudiante.nombre
  estudiante.carrera = 'derecho';
  identificacion++;
