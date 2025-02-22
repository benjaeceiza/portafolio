

window.addEventListener('scroll', function () {
  
    let animacionTextos = document.getElementById("sobre-mi")
    let contenedorContactoFlotante = document.getElementById("contenedor-contacto-flotante")
    let posicionObj1 = animacionTextos.getBoundingClientRect().top;
    let tamanoPantalla = window.innerHeight / 1;
    let tamanoPantallaTextos = window.innerHeight;




    const agregarEstilo = (animacion, textosProyectos) => {
        animacion.style.height = "500px"
        textosProyectos.style.animation = "opacidad 1s "

    }
    
    const quitarEstilo = (animacion, textosProyectos) => {
        animacion.style.height = "220px"
        textosProyectos.style.animation = "none";
    }

   

 

    if (posicionObj1 = tamanoPantallaTextos) {
        animacionTextos.style.animation = "opacidad 2s ease-out"
    }
})



let proyectoUno = document.getElementById("proyecto-1")
let proyectoDos = document.getElementById("proyecto-2")
let proyectoTres = document.getElementById("proyecto-3")
let proyectoCuatro = document.getElementById("proyecto-4")
let botonCerrarContacto = document.getElementById("cerrar-contacto")
let botonContacto = document.getElementById("boton-contacto")
let contactoFlotante = document.getElementById("contacto-flotante")

const revertSize = (animacion) => {
    animacion.style.scale = "1"
    animacion.style.transition = "all .5s"
}


proyectoUno.onmouseleave = () => revertSize(proyectoUno)
proyectoDos.onmouseleave = () => revertSize(proyectoDos)
proyectoTres.onmouseleave = () => revertSize(proyectoTres)
proyectoCuatro.onmouseleave = () => revertSize(proyectoCuatro)

 
botonContacto.onclick = () => contactoFlotante.style.display = "flex"
botonCerrarContacto.onclick = () => contactoFlotante.style.display = "none"
