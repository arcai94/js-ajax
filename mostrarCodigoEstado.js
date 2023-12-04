document.addEventListener('DOMContentLoaded', function() {
    var entrada = document.getElementById('recurso');       //Recoge la url
    var enviarPeticion = document.getElementById('enviar');     //Recoge el botón
    var mostrarCodigo = document.getElementById('codigo');     //Recoge el recuadro donde se mostrará el código de estado
    
    //Se inicia con el evento de pulsar el botón
    enviarPeticion.addEventListener('click', function() {
        var url = entrada.value;        //Se guarda la url escrita en el cuadro
        var ajaxRequest = new XMLHttpRequest();     //Se crea una instancia XMLHttpRequest

        ajaxRequest.open('GET', url, true);     //Se abre la petición
        ajaxRequest.send();     //Se envía la petición

        // Establecer un controlador de eventos para manejar cambios en el estado de la solicitud
        ajaxRequest.onreadystatechange = function() {

            //Comprobar si la petición ha sido exitosa
            if (ajaxRequest.readyState === 4) {
                mostrarCodigo.innerText = 'Código de estado: ' + ajaxRequest.status + ' -- ' + ajaxRequest.statusText;

            }
            else {
                mostrarCodigo.innerText = 'No se han podido cargar las cabeceras';
            }
        };
    });
});