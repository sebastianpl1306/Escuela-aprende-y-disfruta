//Define las variables que necesites
var fechaActual;
var eventos;
var mostrarNuevosEventos = [];
var mostrarAntiguosEventos = [];
var nuevosEventos = [];
var antiguosEventos = [];

$(document).ready(function () {
  //Carga los datos que estan en el JSON (info.json) usando AJAX
  $.ajax({
    url: "info.json"
  }).done(function (resultado){
    //Guarda el resultado en variables
    fechaActual = new Date(resultado.fechaActual);
    eventos = resultado.eventos;

    //Clasifica los eventos segun la fecha actual del JSON
    for(i=0;i < eventos.length;i++){
      if(new Date(eventos[i].fecha) > fechaActual){
        nuevosEventos.push(eventos[i]);
      }else{
        antiguosEventos.push(eventos[i]);
      }
    }
    
    //Ordena los eventos segun la fecha (los mas cercanos primero)
    nuevosEventos = nuevosEventos.sort(function(x,y){
      if (new Date(x.fecha) > new Date(y.fecha)){
        return 1;
      }
      return -1;
    });
    //Extrae solo dos eventos
    for(i=0;i<2;i++){
      mostrarNuevosEventos.push(nuevosEventos[i]);
    }

    //Ordena los eventos segun la fecha (los mas cercanos primero)
    antiguosEventos = antiguosEventos.sort(function(x,y){
      if (new Date(x.fecha) > new Date(y.fecha)){
        return 1;
      }
      return -1;
    });
    //Extrae solo dos eventos
    for(i=0;i<2;i++){
      mostrarAntiguosEventos.push(antiguosEventos[i]);
    }
    //Crea un string que contenga el HTML que describe el detalle del evento
    var htmlNuevos = ""

    //Recorre el arreglo y concatena el HTML para cada evento
    for(var j = 0; j < mostrarNuevosEventos.length; j++){
      htmlNuevos += `
        <div class="col-5 bg-light text-left mx-2 px-5 rounded">
          <h2><a href="./detalle.html?id=${mostrarNuevosEventos[j].id}">${mostrarNuevosEventos[j].nombre}</a></h2>
          <p class="text-muted">${mostrarNuevosEventos[j].fecha}</p>
          <p>${mostrarNuevosEventos[j].descripcion}</p>
        </div>
      `
    }

  //Modifica el DOM agregando el html generado
  document.getElementById("nuevosEventos").innerHTML = htmlNuevos;
  //Crea un string que contenga el HTML que describe el detalle del evento
  var htmlAntiguos = ""
  //Recorre el arreglo y concatena el HTML para cada evento
  for(var j = 0; j < mostrarAntiguosEventos.length; j++){
    htmlAntiguos += `
      <div class="col-5 bg-light text-left mx-2 px-5 rounded">
        <h2><a href="./detalle.html?id=${mostrarAntiguosEventos[j].id}">${mostrarAntiguosEventos[j].nombre}</a></h2>
        <p class="text-muted">${mostrarAntiguosEventos[j].fecha}</p>
        <p>${mostrarAntiguosEventos[j].descripcion}</p>
      </div>
    `
  }
  //Modifica el DOM agregando el html generado
  document.getElementById("antiguosEventos").innerHTML = htmlAntiguos;
  });
});
