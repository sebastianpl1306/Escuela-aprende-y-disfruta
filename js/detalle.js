// Hemos omitido los acentos en los comentarios por compatibilidad
var id;
var mostrarEventos = [];

$(document).ready(function () {
  //Esta es la instruccion para tomar el id del URL detalle.html?id=<identificador>
  id = location.search.match(/id=(\d)*/)[1];
  //Carga los datos que estan en el JSON (info.json) usando AJAX
  $.ajax({
    url: "info.json"
  }).done(function(resultado){
    //Guarda el resultado en una variable
    eventos = resultado.eventos;
    //Busca el elemento en el arreglo
    for(i=0;i < eventos.length;i++){
      if(eventos[i].id == id){
        mostrarEventos.push(eventos[i]);
      }
    }
  
  //Crea un string que contenga el HTML que describe el detalle del evento
  var html = "";
    html +=`
      <div class="col-12 bg-light text-left my-3 px-5 rounded">
        <h2>${mostrarEventos[0].nombre}</h2>
        <p class="text-muted">${mostrarEventos[0].fecha} - ${mostrarEventos[0].lugar}</p>
        <p>${mostrarEventos[0].descripcion}</p>
        <p class="text-primary">Costo: ${mostrarEventos[0].precio}</p>
        <p class="text-danger">invitados: ${mostrarEventos[0].invitados}</p>
      </div>
    `;
  //Modifica el DOM agregando el html generado dentro del div con id=evento
  document.getElementById("evento").innerHTML = html;
  });
});
