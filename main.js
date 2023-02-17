const trabajos = document.getElementById("trabajo")
const servicio = document.getElementById("servicio")
const certificado = document.getElementById("certificado")
const contacto = document.getElementById("contacto")
const botonReiniciar = document.getElementById("reiniciar")

const sectionBotones = document.getElementById("botones")
const sectionInicio = document.getElementById("inicio")

trabajos.addEventListener("click", functionTrabajos)
servicio.addEventListener("click", functionServicio)
certificado.addEventListener("click", functionCertificado)


function functionTrabajos(){   
    document.getElementById("contenido").innerHTML = `<section class="page-section bg-light" id="portfolio">
    <div class="container">
        <div class="text-center">
            <h2 class="section-heading text-uppercase">TRABAJOS </h2>
            <h4 class="section-subheading text-muted">Sitios web realizados, presiona imagen para obtener informacion del trabajo o el boton de abajo para ver el sitio web.</h4>
        </div>
        <div class="row">
            <div class="col-lg-4 col-sm-6 mb-4">
                <div class="portfolio-item">
                    <a class="portfolio-link" data-bs-toggle="modal" href="#portfolioModal1">
                        <div class="portfolio-hover">
                            <div class="portfolio-hover-content"><i class="fas fa-plus fa-3x"></i></div>
                        </div>
                        <img class="img-fluid" src="./assets/logoMarfil.png" alt="logo pagina de masajes" />
                    </a>
                    <div class="portfolio-caption">
                        <div class="portfolio-caption-heading">Marfil</div>
                        <div class="portfolio-caption-subheading text-muted">Masajes</div>
                        <a href="https://marfilmasajes.netlify.app/"><button class="btn btn-primary btn-sm text-uppercase" data-bs-dismiss="modal" type="button">
                            <i class="fas fa-xmark me-1"></i>
                            Sitio Web
                          </button></a>
                    </div>
                </div>
            </div>
            <div class="col-lg-4 col-sm-6 mb-4">
                <div class="portfolio-item">
                    <a class="portfolio-link" data-bs-toggle="modal" href="#portfolioModal2">
                        <div class="portfolio-hover">
                            <div class="portfolio-hover-content"><i class="fas fa-plus fa-3x"></i></div>
                        </div>
                        <img class="img-fluid" src="./assets/logoTako.png" alt="logo de pagina de cerrajeria y zapateria" />
                    </a>
                    <div class="portfolio-caption">
                        <div class="portfolio-caption-heading">Tako Jet</div>
                        <div class="portfolio-caption-subheading text-muted">Zapateria y Cerrajeria</div>
                        </button>  
                          <a href="https://takojet.netlify.app/"><button class="btn btn-primary btn-sm text-uppercase" data-bs-dismiss="modal" type="button">
                            <i class="fas fa-xmark me-1"></i>
                            Sitio Web
                          </button></a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section> 
<div class="portfolio-modal modal fade" id="portfolioModal1" tabindex="-1" role="dialog" aria-hidden="true">
  <div class="modal-dialog">
      <div class="modal-content">
          <div class="close-modal" data-bs-dismiss="modal"><img src="./assets/close-icon.svg" alt="Close modal" /></div>
          <div class="container">
              <div class="row justify-content-center">
                  <div class="col-lg-8">
                      <div class="modal-body">
                          <h2 class="text-uppercase">Marfil</h2>
                          <p class="item-intro text-muted">Pagina de masajes.</p>
                          <img class="img-fluid d-block mx-auto" src="./assets/logoMarfil.png" alt="logo pagina de masajes" />
                          <p>Cuenta con: menu con mapeo del sitio (menu-desplegable en vista mobile) con referencia a:</p>
                          <p>Servicios: tarjetas con nombre de los servicios y con una breve descripcion de cada uno</p>
                          <p>Forma de pago: una imagen con un diseño de las formas de pago que se aceptan</p>
                          <p>Contacto: información escencial como: ubicación del negocio, medios de contacto, horarios de atención.</p>
                          <p>Ademas de:</p>
                          <p>Sistema de turnos online: pagina que maneja los turnos de sus clientes y ella controla todo eso mediante la misma</p>
                          <p>Boton emergente de whatsapp: para asi poder contactarte al instante con la persona responsable del negocio.</p>
                          <button class="btn btn-primary btn-xl text-uppercase" data-bs-dismiss="modal" type="button">
                              <i class="fas fa-xmark me-1"></i>
                              Salir
                          </button>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  </div>
</div>
<div class="portfolio-modal modal fade" id="portfolioModal2" tabindex="-1" role="dialog" aria-hidden="true">
  <div class="modal-dialog">
      <div class="modal-content">
          <div class="close-modal" data-bs-dismiss="modal"><img src="./assets/close-icon.svg" alt="Close modal" /></div>
          <div class="container">
              <div class="row justify-content-center">
                  <div class="col-lg-8">
                      <div class="modal-body">
                          <h2 class="text-uppercase">Tako Jet</h2>
                          <p class="item-intro text-muted">Pagina de Zapateria y Cerrajeria.</p>
                          <img class="img-fluid d-block mx-auto" src="./assets/logoTako.png" alt="logo de pagina de cerrajeria y zapateria" />
                          <p>Cuenta con: menu con mapeo del sitio (menu-desplegable en vista mobile) con referencia a:</p>
                          <p>Servicios: secciones con servicios que ofrece, dividido en 2 acordeones(listas despleglabes) cada uno que muestran las opciones de cada uno de ellos.</p>
                          <p>Formas de pago: una imagen con un diseño de las formas de pago que se aceptan</p>
                          <p>Ubicación: mapa de google maps (iframe) con la ubicacion exacta, es utilizable si se lo requiere.</p>
                          <p>Contacto: información escencial como: ubicación del negocio, medios de contacto, horarios de atención</p>
                          <p>Ademas de:</p>
                          <p>Boton emergente de whatsapp: para asi poder contactarte al instante con la persona responsable del negocio.</p>
                          <button class="btn btn-primary btn-xl text-uppercase" data-bs-dismiss="modal" type="button">
                              <i class="fas fa-xmark me-1"></i>
                              Salir
                          </button>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  </div>
</div>
<div id="rei">
        <a href="./index.html"><button id="reiniciar">Volver</button></a>
              </div>`;
}

function functionServicio(){    
    
    document.getElementById("contenido").innerHTML =  `
    <div>
      <h2 class="text-center" >COMO TRABAJO Y EL TIEMPO QUE MANEJO:</h2>
            <img src="./assets/imagenes/Fase de diseño (Portada para Facebook) (1).jpg" id="img" alt="">
    </div>
    <div id="rei">
                <a href="./index.html"><button id="reiniciar">Volver</button></a>
              </div>`
}

function functionCertificado(){   

    document.getElementById("contenido").innerHTML = `<div class="color2">
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
 </div>
 <div id="rei">
                <a href="./index.html"><button id="reiniciar">Volver</button></a>
              </div> `
}

{/* <div class="color">
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
        </section>
    </div> */}