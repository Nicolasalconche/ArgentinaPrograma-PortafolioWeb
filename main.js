const trabajos = document.getElementById("trabajo")
const servicio = document.getElementById("servicio")
const certificado = document.getElementById("certificado")
const contacto = document.getElementById("contacto")
const botonReiniciar = document.getElementById("reiniciar")

const sectionTrabajo = document.getElementById("sectionTrabajo")
const sectionServicio = document.getElementById("sectionServicio")
const sectionCertificado = document.getElementById("sectionCertificado")
const sectionReiniciar = document.getElementById("rei")
const sectionBotones = document.getElementById("botones")
const sectionInicio = document.getElementById("inicio")

trabajos.addEventListener("click", functionTrabajos)
servicio.addEventListener("click", functionServicio)
certificado.addEventListener("click", functionCertificado)
botonReiniciar.addEventListener("click", reiniciarPag)



sectionReiniciar.style.display = "none"

function reiniciarPag(){
    location.reload()
}

function functionTrabajos(){
    
    sectionBotones.style.display = "none"
    sectionReiniciar.style.display = "flex"
    sectionTrabajo.innerHTML = ``
}

function functionServicio(){
    
    sectionBotones.style.display = "none"
    sectionReiniciar.style.display = "flex"
    sectionServicio.innerHTML = `<div class="color">
    <h2 class="titulo">INFORMACIÓN:</h2>
     <h4 class="titulo" >TE COMENTO UN POCO SOBRE MI TRABAJO Y EL SERVICIO QUE BRINDO. </h4>
    <section class="tarjetas">
        <div class="card" style="width: 18rem;">
            <img src="./assets/imagenes/top-view-of-unrecognizable-hacker-performing-cyberattack-at-night.jpg" class="card-img-top" alt="...">
            <div class="card-body">
            <h4>Desarrolar Web</h4>
            <p class="card-text">Un desarrollador front-end trabaja la interfaz de usuario desde el punto de vista del código, para que la interacción con el sistema sea posible. Por lo tanto, se encarga de la parte visual de la web (de todo aquello que puedes ver en tu explorador) haciendo que su diseño sea intuitivo y atractivo.</p>
            </div>
        </div>
        <div class="card" style="width: 18rem;">
            <img src="./assets/imagenes/7118756_3426526.jpg" class="card-img-top" alt="...">
            <div class="card-body">
               <h4>Te ayudamos a que crezca tu negocio.</h4>
            <p class="card-text">Tenes ganas de tener una presentación online de tus productos o servicios, esta es tu oportunidad, solo basta con detallar que cosas queres que contenga y como queres tu sitio web perfecto.</p>
            <p> No tenes idea de como puede ser tu sitio? No hay problema diseñamos uno para vos o te mostramos posibles sitios de tu gusto.</p>
            </div>
        </div>
        <div class="card" style="width: 18rem;">
            <img src="./assets/imagenes/5462434_Search.jpg" class="card-img-top" alt="...">
            <div class="card-body">
               <h4>Acerca sobre el servicio.</h4>
            <p class="card-text">Diseño profesional y limpio.</p>
            <p class="card-text">Diseño de los diferentes wireframes para definir la estructura de las páginas y su contenido.</p>
            <p class="card-text">Web navegable y accesible: Válido para todos los navegadores.</p>
            <p class="card-text">Responsivo: adaptación a dispositivos mobile, tablets y PC.</p>
            <p class="card-text">Posicionamiento Web. Herramientas SEO</p>
            <p class="card-text">Asistencia Virtual para dudas y consultas.</p>
            </div>
        </div> 
    </div>
    <div>
      <h2 class="text-center" >COMO TRABAJO Y EL TIEMPO QUE MANEJO:</h2>
            <img src="./assets/imagenes/Fase de diseño (Portada para Facebook) (1).jpg" id="img" alt="">
    </div>`
}

function functionCertificado(){
    
    sectionBotones.style.display = "none"
    sectionReiniciar.style.display = "flex"
    sectionCertificado.innerHTML = `<div class="color2">
    <div class="text-center">
    <h2 class="blanco" >CERTIFICACIONES</h2>
    </div>
    <section class="tarjetas">
        <div class="card" style="width: 18rem;">
            <img src="./assets/imagenes/Diploma desarrollo web.png" class="card-img-top" alt="..." height="220">
            <div class="card-body text-center">
              <a href="https://www.coderhouse.com/certificados/639b8f50ac12d1000e961d6f" class="btn btn-primary">Mostrar Credencial</a>
            </div>
          </div>
          <div class="card" style="width: 18rem;">
            <img src="./assets/imagenes/Programacion basica.png" class="card-img-top" alt="..."height="220">
            <div class="card-body text-center">
              <a href="https://platzi.com/p/nicolas_alcon/curso/3208-programacion-basica/diploma/detalle/" class="btn btn-primary">Mostrar Credencial</a>
            </div>
          </div>
          <div class="card" style="width: 18rem;">
            <img src="./assets/imagenes/certificado2.png" class="card-img-top" alt="..." height="220">
            <div class="card-body text-center">
              <a href="https://seprogramar.inti.gob.ar/inti/certificates/verify/zY_e2b-pYpIr-psm" class="btn btn-primary">Mostrar Credencial</a>
            </div>
          </div>
    </section>
 </div>`
}
