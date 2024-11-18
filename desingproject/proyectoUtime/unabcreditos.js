// Función para manejar el inicio de sesión
function handleLogin(event) {
    event.preventDefault(); // Evita el comportamiento predeterminado del formulario

    // Obtener los valores del formulario
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Validación simple: asegurarse de que el campo de correo no esté vacío
    if (username === '') {
        alert('Por favor ingresa tu nombre de usuario.');
        return;
    }

    // Aquí no verificamos la contraseña, puede ser cualquier cosa
    alert('Login exitoso');
    
    // Redirigir a la página 'about.html' (puedes cambiar esto a la página que desees después del login)
    window.location.href = 'about.html'; 
}

// Función para redirigir a la siguiente página en la secuencia
function continuar() {
    // Obtener la URL actual
    const currentPage = window.location.pathname.split('/').pop(); // Obtiene el nombre de la página actual

    // Redirigir a la siguiente página en la secuencia
    switch (currentPage) {
        case 'about.html':
            window.location.href = 'programas.html';
            break;
        case 'programas.html':
            window.location.href = 'calendario.html';
            break;
        case 'calendario.html':
            window.location.href = 'eventos.html';
            break;
        case 'eventos.html':
            window.location.href = 'contacto.html';
            break;
        case 'contacto.html':
            window.location.href = 'noticias.html';
            break;
        case 'noticias.html':
            window.location.href = 'galeria.html';
            break;
        case 'galeria.html':
            window.location.href = 'testimonios.html';
            break;
        case 'testimonios.html':
            window.location.href = 'faq.html';
            break;
        case 'faq.html':
            // Aquí creamos el botón para redirigir al inicio
            crearBotonInicio();
            break;
        default:
            window.location.href = 'programas.html'; // Redirigir a la primera página si no hay coincidencia
            break;
    }
}

// Función para crear un botón que redirija al inicio
function crearBotonInicio() {
    // Verificamos si ya existe el botón para evitar duplicados
    if (!document.getElementById('inicioButton')) {
        const button = document.createElement('button');
        button.textContent = 'Volver al Inicio';
        button.className = 'next-button';
        button.id = 'inicioButton'; // Asignamos un ID al botón

        // Agregar el evento de clic al botón
        button.onclick = function() {
            window.location.href = 'index.html'; // Cambia 'index.html' por la URL que desees
        };

        // Agregar el botón al cuerpo del documento
        document.body.appendChild(button);
    }
}

// Función para registrar en el evento (esto redirige según el evento)
function registrarEvento(evento) {
    switch (evento) {
        case 'evento1':
            window.location.href = 'registro-evento1.html';  // Redirige a la página de registro del evento 1
            break;
        case 'evento2':
            window.location.href = 'registro-evento2.html';  // Redirige a la página de registro del evento 2
            break;
        case 'evento3':
            window.location.href = 'registro-evento3.html';  // Redirige a la página de registro del evento 3
            break;
        case 'evento4':
            window.location.href = 'registro-evento4.html';  // Redirige a la página de registro del evento 4
            break;
        default:
            alert("Evento no encontrado");  // Si el evento no está en la lista, muestra un mensaje
            break;
    }
}

// Agregar el evento de registro al cargar la página
document.addEventListener('DOMContentLoaded', function() {
    // Obtener todos los botones de evento en la página
    const botonesEvento = document.querySelectorAll('.btn-evento');

    // Iterar sobre cada botón y agregar el evento de clic
    botonesEvento.forEach(function(boton, index) {
        boton.addEventListener('click', function() {
            registrarEvento(`evento${index + 1}`);
        });
    });

    // Crear el botón de continuar solo si no estamos en la página inicial
    const currentPage = window.location.pathname.split('/').pop(); // Obtiene el nombre de la página actual

    if (currentPage !== 'index.html' && currentPage !== 'unabcreditos.html') {
        const button = document.createElement('button');
        button.textContent = 'Continuar';
        button.className = 'next-button';
        
        // Agregar el evento de clic al botón de continuar
        button.onclick = continuar;

        // Agregar el botón al cuerpo del documento
        document.body.appendChild(button);
    }

    // Si estamos en la página de FAQ, asegurarnos de que el botón de inicio se cree
    if (currentPage === 'faq.html') {
        crearBotonInicio();
    }
});
