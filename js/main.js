

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

const revertSize = (animacion) => {
    animacion.style.scale = "1"
    animacion.style.transition = "all .5s"
}


proyectoUno.onmouseleave = () => revertSize(proyectoUno)
proyectoDos.onmouseleave = () => revertSize(proyectoDos)
proyectoTres.onmouseleave = () => revertSize(proyectoTres)
proyectoCuatro.onmouseleave = () => revertSize(proyectoCuatro)
proyectoCinco.onmouseleave = () => revertSize(proyectoCinco)

 
botonContacto.onclick = () => contactoFlotante.style.display = "flex"
botonCerrarContacto.onclick = () => contactoFlotante.style.display = "none"
botonCerrarContacto.onmouseenter = () => botonCerrarContacto.src="./assets/iconos/cerrar-hover.png"
botonCerrarContacto.onmouseleave = () => botonCerrarContacto.src="./assets/iconos/cerrar.png"
