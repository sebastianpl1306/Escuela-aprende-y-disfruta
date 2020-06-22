// Hemos omitido los acentos en los comentarios por compatibilidad
var comprobacion;
function validar(formulario) {
  if (formulario.nombres.value.trim() == "") {
    document.getElementById("errornombres").innerHTML = "Este campo es obligatorio";
    comprobacion = false;
  }else{
      document.getElementById("errornombres").innerHTML = "";
      comprobacion = true;
  }
  
  //verificamos el correo
  var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (!re.test(formulario.email.value)) {
    document.getElementById("errorEmail").innerHTML = "Campo inválido";
    comprobacion = false;
  }else{
    document.getElementById("errorEmail").innerHTML = "";
    comprobacion = true;
  }

  //verificamos la contraseña
  //Verifica que la contraseña tenga minimo 8 caracteres
  if(formulario.contrasena.value.trim().length < 7){
    document.getElementById("errorContrasena").innerHTML = "debe tener minimo 7 caracteres";
    formulario.contrasena.focus();
    comprobacion = false;
  }else{
    document.getElementById("errorContrasena").innerHTML = "";
    comprobacion = true;
  }

  //verificar que la contraseña coincida con la confirmación
  if(formulario.contrasena.value != formulario.confirmacion.value || formulario.confirmacion.value == ""){
    document.getElementById("errorConfirmacion").innerHTML = "No coincide con contraseña";
    comprobacion = false;
  }else{
      document.getElementById("errorConfirmacion").innerHTML = "";
      comprobacion = true;
  }

  //Verifica que el registro este seleccionado
  if (formulario.tipo.value < 0) {
    document.getElementById("errorTipo").innerHTML = "Este campo es obligatorio";
    comprobacion = false;
  }else{
      document.getElementById("errorTipo").innerHTML = "";
      comprobacion = true;
  }
  //Verifica que el campo terminos este seleccionado
  if (!formulario.acepto.checked) {
    document.getElementById("errorAcepto").innerHTML = "Este campo es obligatorio";
    comprobacion = false;
  }else{
    document.getElementById("errorAcepto").innerHTML = "";
    comprobacion = true;
  }

  if(comprobacion == false){
    return false;
  }else{
    alert("¡Registro Exitoso!");
    return true;
  }
}
