const express = require('express')
const app = express()

app.get('/persona', function(req, res) {
    var user_id = req.param('id'); 
    if (req.param('id')== '4'){
        res.send(cualquiera.nombre);
    } else {
        res.send('No existe este usuario');
    }
    
  });

app.listen(3000, function(req,res){
    console.log('Escuchando en el puerto 3000');
})
var persona = {
      id : '4',
      nombre : null,
      apellido:null,
      edad:null,
  }
  
  var cualquiera = persona;
  cualquiera.nombre = 'Martin';
  var profesor = persona;
  profesor.universidad = 'udea';
  var estudiante = persona;
  estudiante.carrera = 'derecho';
