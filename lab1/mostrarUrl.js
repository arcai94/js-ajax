//Espera a que esté totalmente cargado el DOM
document.addEventListener('DOMContentLoaded', function () {
   
  //Recoge el cuadro de texto
  var entrada = document.getElementById('recurso');
  
  // Crear una instancia de XMLHttpRequest
  var ajaxRequest = new XMLHttpRequest();
  
  // Realiza la solicitud
  ajaxRequest.open('GET', window.location.href, true);

  // Enviar la solicitud
  ajaxRequest.send();
  
  // Establecer un controlador de eventos para manejar cambios en el estado de la solicitud
  ajaxRequest.onreadystatechange = function () {

  // Comprobar si la solicitud se ha completado
    if (ajaxRequest.readyState === 4) {

      // Comprobar si la solicitud fue exitosa
      if (ajaxRequest.status === 200) {
            
        // Establecer el valor del cuadro de texto con la URL de la página
        entrada.value = window.location.href;
      } else {
        alert('No se ha podido cargar la URL por defecto.');
      }
    }
  };
});