document.addEventListener('DOMContentLoaded', function() {
    var entrada = document.getElementById('recurso');       //Recoge la URL
    var enviarPeticion = document.getElementById('enviar');     //Recoge el botón de enviar
    var mostrarContenido = document.getElementById('contenidos');       //Recoger el cuadro donde se mostrará el estado
    
    //Se inicia con el evento de pulsar el botón
    enviarPeticion.addEventListener('click', function() {
        var url = entrada.value;        //Se guarda la url escrita en el cuadro
        var ajaxRequest = new XMLHttpRequest();     //Se crea una instancia XMLHttpRequest

        ajaxRequest.open('GET', url, true);     //Se abre la petición

        ajaxRequest.send();     //Se envía la petición

        // Establecer un controlador de eventos para manejar cambios en el estado de la solicitud
        ajaxRequest.onreadystatechange = function() {

            // Comprobar que todo salió bien
            if(ajaxRequest.readyState === 4) {

                if(ajaxRequest.status === 200) {

                    //Si todo salió bien se muestra en el cuadro el contenido
                    mostrarContenido.innerText = ajaxRequest.responseText;
                }
                else {
                    mostrarContenido.innerText = 'No se ha podido cargar el contenido';
                }
            }
        };
    });
});