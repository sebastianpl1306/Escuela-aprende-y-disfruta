var antiguosEventos = [];
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
    if(new Date(eventos[i].fecha) < fechaActual){
      antiguosEventos.push(eventos[i]);
    }
  }

  //Ordena los eventos segun la fecha (los mas cercanos primero)
  antiguosEventos = antiguosEventos.sort(function(x,y){
    if (new Date(x.fecha) > new Date(y.fecha)){
      return 1;
    }
    return -1;
  });
  //Crea un string que contenga el HTML que describe el detalle del evento
  var htmlAntiguos = ""

  //Recorre el arreglo y concatena el HTML para cada evento
  for(var j = 0; j < antiguosEventos.length; j++){
    htmlAntiguos += `
      <div class="col-12 bg-light text-left my-3 px-5 rounded">
        <h2><a href="./detalle.html?id=${antiguosEventos[j].id}">${antiguosEventos[j].nombre}</a></h2>
        <p class="text-muted">${antiguosEventos[j].fecha} - ${antiguosEventos[j].lugar}</p>
        <p>${antiguosEventos[j].descripcion}</p>
        <p class="text-primary">invitados: ${antiguosEventos[j].invitados}</p>
      </div>
    `;
  }
  //Modifica el DOM agregando el html generado dentro del div con id=evento
  document.getElementById("pasados").innerHTML = htmlAntiguos;
  });
});