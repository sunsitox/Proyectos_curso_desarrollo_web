// Seleccionar elementos...

// querySelector

const textoHeading = document.querySelector('.header__texto h2');
console.log(textoHeading);

textoHeading.textContent = 'Nuevo Heading'; // También se puede utilizar .text

// querySelectorAll
const enlaces = document.querySelectorAll('.navegacion a');
console.log(enlaces)

// Algunas operaciones...

// Cambiar el texto
enlaces[0].textContent = 'Nuevo Texto enlace';

// Cambiar el enlace del primer enlace
enlaces[0].href = 'https://google.com';

// Agregar una clase...
enlaces[0].classList.add('nueva-clase');

// Eliminar una clase...
// enlaces[0].classList.remove('navegacion__enlace');


// Generar HTML desde JavaScript...
const nuevoEnlace = document.createElement('A')

console.log(nuevoEnlace);

// Un enlace tiene una clase...
nuevoEnlace.classList.add('navegacion__enlace');

// Tiene un href
nuevoEnlace.href ='nuevo-enlace.html';

// Tiene un Texto...
nuevoEnlace.textContent = 'Un Nuevo Enlace';

// console.log(nuevoEnlace);

// Finalmente se agrega donde lo deseamos colocar...

// Tienes que seleccionar el elemento padre

const navegacion = document.querySelector('.navegacion');
navegacion.appendChild(nuevoEnlace);






// Eventos en JavaScript...

// Hay muchos eventos ocurriendo en tus sitios y aplicaciones web, cuando un usuario da click, cuando dan scroll, al presionar en un botón, enviar un formulario, pero uno de los más comunes es esperar a que el documento este listo...



console.log('1');
window.addEventListener('load', function() { // Cuando el Archivo JS y los archivos dependientes han cargado como es el HTML y las imagenes...
    console.log('2');
});

window.onload = function() {
    console.log('3')
};

document.addEventListener('DOMContentLoaded', function() { // Este se ejecuta cuando el HTML ha sido descargado pero no espera por CSS o imagenes...
    console.log('4');
});

console.log('5');

// Estos closures también pueden ser con una función aparte...


// // Eventos Scroll...
// window.onscroll = function(e) {
//     console.log('scrolling...');

//     console.log(this.scrollY);
// }



// Seleccionar elementos y asociarles un evento

// const btnEnviar = document.querySelector('.boton--primario');
// btnEnviar.addEventListener('click', function(evento) { // callback o closure 
//     console.log(evento);
//     evento.preventDefault;

//     // Validar un formulario


//     console.log('enviando formulario')
// });



// Eventos de los Inputs y Textarea

const datos = {
    nombre: '',
    email: '',
    mensaje: ''
}

const nombre = document.querySelector('#nombre');
const email = document.querySelector('#email');
const mensaje = document.querySelector('#mensaje');
const formulario = document.querySelector('.formulario')


nombre.addEventListener('input', leerTexto);
email.addEventListener('input', leerTexto);
mensaje.addEventListener('input', leerTexto);

// El Evento de Submit
formulario.addEventListener('submit', function(evento) {
    evento.preventDefault();

    // Validar el formulario

    const {nombre, email, mensaje} = datos;

    if(nombre === '' || email === '' || mensaje === '') {
        mostrarAlerta('Todos los campos son obligatorios')

        return; // Detiene la ejecución de esta función
    }

    // Crear la otra alerta
    mostrarAlerta('Mensaje enviado correctamente');

    // Enviar el formulario
    console.log('Enviando Formulario')
})

function mostrarAlerta(mensaje, error = null) {
    const alerta = document.createElement('P')
    alerta.textContent = mensaje;

    if(error) {
        alerta.classList.add('error')
    }
    else {
        alerta.classList.add('correcto')
    }

    formulario.appendChild( alerta )

    // Desaparezca despues de 5 segundos
    setTimeout(() => {
        alerta.remove();
    }, 5000);
}

function leerTexto(e) {
    // console.log(e);
    // console.log(e.target.value);

    datos[e.target.id] = e.target.value;

    // console.log(datos);
}

