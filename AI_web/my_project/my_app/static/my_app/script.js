document.getElementById('boton').addEventListener('click', function() {
    alert('¡Hola! Has hecho clic en el botón.');
});
document.addEventListener('DOMContentLoaded', (event) => {
    // Manejar el clic en el botón para mostrar la hora
    document.getElementById('mostrar-hora').addEventListener('click', () => {
        fetch('/obtener-hora/')
            .then(response => response.json())
            .then(data => {
                document.getElementById('hora-actual').textContent = `Hora actual: ${data.hora}`;
            })
            .catch(error => console.error('Error al obtener la hora:', error));
    });
});
