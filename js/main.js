

window.addEventListener('scroll', function () {

    let animacionTextos = document.getElementById("sobre-mi")
    let posicionObj1 = animacionTextos.getBoundingClientRect().top;
    let tamanoPantallaTextos = window.innerHeight;



    if (posicionObj1 = tamanoPantallaTextos) {
        animacionTextos.style.animation = "opacidad 2s ease-out"
    }
})



let proyectoUno = document.getElementById("proyecto-1")
let proyectoDos = document.getElementById("proyecto-2")
let proyectoTres = document.getElementById("proyecto-3")
let proyectoCuatro = document.getElementById("proyecto-4")
let proyectoCinco = document.getElementById("proyecto-5")
let botonCerrarContacto = document.getElementById("cerrar-contacto")
let botonContacto = document.getElementById("boton-contacto")
let contactoFlotante = document.getElementById("contacto-flotante")
let contenedorContactoFlotante = document.getElementById("contenedor-contacto-flotante")
let iconoMail = document.getElementById("icono-mail")
let mainFondo = document.getElementById("body")




const revertSize = (animacion) => {
    animacion.style.scale = "1"
    animacion.style.transition = "all .5s"
}

const animationButtonContact = () => {
    iconoMail.src = "./assets/iconos/mail-hover.png";
    botonContacto.style.backgroundColor = "white"
    botonContacto.style.transition = "all .5s"
}
const deleteAnimationButtonContact = () => {
    iconoMail.src = "./assets/iconos/mail.png";
    botonContacto.style.backgroundColor = "#5d2f72";
    botonContacto.style.transition = "all .5s"
}

const mostrarContactoFlotante = () => {

    contactoFlotante.style.display = "flex"
    mainFondo.style.overflow = "hidden"
}
const cerrarContactoFlotante = () => {
    
    contactoFlotante.style.display = "none"
    mainFondo.style.overflow = "auto"  
    
    
}


// ANIMACION PROYECTOS
proyectoUno.onmouseleave = () => revertSize(proyectoUno)
proyectoDos.onmouseleave = () => revertSize(proyectoDos)
proyectoTres.onmouseleave = () => revertSize(proyectoTres)
proyectoCuatro.onmouseleave = () => revertSize(proyectoCuatro)
proyectoCinco.onmouseleave = () => revertSize(proyectoCinco)

// EVENTOS CONTACTO FLOTANTE

botonContacto.onmouseenter = () => animationButtonContact();
botonContacto.onmouseleave = () => deleteAnimationButtonContact();
botonContacto.onclick = () => mostrarContactoFlotante();
botonCerrarContacto.onclick = () => cerrarContactoFlotante();
botonCerrarContacto.onmouseenter = () => botonCerrarContacto.src = "./assets/iconos/cerrar-hover.png"
botonCerrarContacto.onmouseleave = () => botonCerrarContacto.src = "./assets/iconos/cerrar.png"
