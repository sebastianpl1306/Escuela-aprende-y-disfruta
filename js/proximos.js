var nuevosEventos = [];

$(document).ready(function (){
  //Carga los datos que estan en el JSON (info.json) usando AJAX
  $.ajax({
    url: "info.json"
  }).done(function(resultado){
  //Guarda el resultado en variables
  fechaActual = new Date(resultado.fechaActual);
  eventos = resultado.eventos;

  //Selecciona los eventos que sean posteriores a la fecha actual del JSON
  for(i=0;i < eventos.length;i++){
    if(new Date(eventos[i].fecha) > fechaActual){
      nuevosEventos.push(eventos[i]);
    }
  }

  //Ordena los eventos segun la fecha (los mas cercanos primero)
  nuevosEventos = nuevosEventos.sort(function(x,y){
    if (new Date(x.fecha) > new Date(y.fecha)){
      return 1;
    }
    return -1;
  });
  //Crea un string que contenga el HTML que describe el detalle del evento
  var htmlNuevos = ""

  //Recorre el arreglo y concatena el HTML para cada evento
  for(var j = 0; j < nuevosEventos.length; j++){
    htmlNuevos += `
      <div class="col-12 bg-light text-left my-3 px-5 rounded">
        <h2><a href="./detalle.html?id=${nuevosEventos[j].id}">${nuevosEventos[j].nombre}</a></h2>
        <p class="text-muted">${nuevosEventos[j].fecha} - ${nuevosEventos[j].lugar}</p>
        <p>${nuevosEventos[j].descripcion}</p>
        <p class="text-primary">invitados: ${nuevosEventos[j].invitados}</p>
      </div>
    `;
  }
  //Modifica el DOM agregando el html generado dentro del div con id=evento
  document.getElementById("eventos").innerHTML = htmlNuevos;
  });
});
