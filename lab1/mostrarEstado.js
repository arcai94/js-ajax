document.addEventListener('DOMContentLoaded', function() {
    var entrada = document.getElementById('recurso');       //Recoge la url
    var enviarPeticion = document.getElementById('enviar');     //Recoge el botón
    var estado = document.getElementById('estados');        //Recoge el cuadro de estados
    
    //Se inicia con el evento de pulsar el botón
    enviarPeticion.addEventListener('click', function() {
        var url = entrada.value;        //Se guarda la url escrita en el cuadro
        var ajaxRequest = new XMLHttpRequest();     //Se crea una instancia XMLHttpRequest

        estado.innerText = '0. Petición no iniciada\n';     //La petición aun no ha empezado

        ajaxRequest.open('GET', url, true);     //Se abre la petición

        // Establecer un controlador de eventos para manejar cambios en el estado de la solicitud
        ajaxRequest.onreadystatechange = function() {

            var mostrarEstado = '';     //Variable para ir escribiendo el el estado

            //Según la petición se muestra el estado
        
            if (ajaxRequest.readyState === 1) {
                mostrarEstado = '1. Conexión establecida';
            }
            else if (ajaxRequest.readyState === 2) {
                mostrarEstado = '2. Petición recibida';
            }
             else if (ajaxRequest.readyState === 3) {
                mostrarEstado = '3. Procesamiento solicitudes';
            }
            else if (ajaxRequest.readyState === 4) {
                mostrarEstado = '4. Solicitud terminada';
            }

            //Agregar el nuevo estado
            estado.innerText += mostrarEstado + '\n';
        };

        ajaxRequest.send();     //Se envía la petición
    });
});