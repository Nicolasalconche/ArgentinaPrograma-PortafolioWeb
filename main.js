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
            <h4 class="section-subheading text-muted">Sitios web realizados, presiona la imagen para obtener informacion del trabajo o el boton de abajo para ver el sitio web.</h4>
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
                        <div class="sitio">
                            <a href="https://marfilmasajes.netlify.app/"><button type="button" class="btn-2">
                            <strong>Sitio web</strong>
                            <div id="container-stars">
                            <div id="stars"></div>
                            </div>
                            <div id="glow">
                                <div class="circle-2"></div>
                                <div class="circle-2"></div>
                            </div>
                        </button>
                      </a>
                      </div>
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
                        <div class="sitio"> 
                          <a href="https://takojet.netlify.app/"><button type="button" class="btn-2">
                          <strong>Sitio web</strong>
                          <div id="container-stars">
                          <div id="stars"></div>
                          </div>
                          <div id="glow">
                              <div class="circle-2"></div>
                              <div class="circle-2"></div>
                          </div>
                      </button></a>
                      </div>
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
    <h2 class="text-center">SERVICIOS QUE OFREZCO:</h2>
    <div class="container-1">
        <div class="card-1">
            <div class="card__image-container">
            </div>
            
            <svg class="card__svg" viewBox="0 0 800 500">

                <path d="M 0 100 Q 50 200 100 250 Q 250 400 350 300 C 400 250 550 150 650 300 Q 750 450 800 400 L 800 500 L 0 500" stroke="transparent" fill="#333"></path>
                <path class="card__line" d="M 0 100 Q 50 200 100 250 Q 250 400 350 300 C 400 250 550 150 650 300 Q 750 450 800 400" stroke="pink" stroke-width="3" fill="transparent"></path>
            </svg>
            
            <div class="card__content">
            <p class="card__title">Landing page</p>
            <p>Una landing page es una única página, donde las secciones se visualizan al hacer el scroll. No hay páginas internas. Es ideal para pequeños emprendedores que quieren tener presencia digital y mostrar sus servicios.</p>
            <button class="button-1"> Activo </button>
            </div>
        </div>
        <div class="card-1">
            <div class="card__image-container">
            </div>
            
            <svg class="card__svg" viewBox="0 0 800 500">

                <path d="M 0 100 Q 50 200 100 250 Q 250 400 350 300 C 400 250 550 150 650 300 Q 750 450 800 400 L 800 500 L 0 500" stroke="transparent" fill="#333"></path>
                <path class="card__line" d="M 0 100 Q 50 200 100 250 Q 250 400 350 300 C 400 250 550 150 650 300 Q 750 450 800 400" stroke="pink" stroke-width="3" fill="transparent"></path>
            </svg>
            
            <div class="card__content">
            <p class="card__title">Pagina web basica</p>
            <p>Una página web básica cuenta con 4/5 secciones. Es ideal para aquellos que cuentan con poco contenido y quieren tener su sitio web y llevar su negocio online.</p>
            <button class="button-1"> Activo </button>
            </div>
        </div>
        <div class="card-1">
            <div class="card__image-container">
            </div>
            
            <svg class="card__svg" viewBox="0 0 800 500">

                <path d="M 0 100 Q 50 200 100 250 Q 250 400 350 300 C 400 250 550 150 650 300 Q 750 450 800 400 L 800 500 L 0 500" stroke="transparent" fill="#333"></path>
                <path class="card__line" d="M 0 100 Q 50 200 100 250 Q 250 400 350 300 C 400 250 550 150 650 300 Q 750 450 800 400" stroke="pink" stroke-width="3" fill="transparent"></path>
            </svg>
            
            <div class="card__content">
            <p class="card__title">Tienda online</p>
            <p>Una tienda online (o ecommerce) permite vender tus productos (o servicios) facilitando el proceso y potenciando al máximo las ventas. Da la posibilidad de llegar a cualquier parte del país, y tener la página web disponible las 24 horas del día de los 365 días del año.</p>
            <button class="button-1"> Proximamente </button>
            </div>
        </div>
    </div>
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
              <a href="https://www.coderhouse.com/certificados/639b8f50ac12d1000e961d6f"><button class="continue-application">
              <div>
                  <div class="pencil"></div>
                  <div class="folder">
                      <div class="top">
                          <svg viewBox="0 0 24 27">
                              <path d="M1,0 L23,0 C23.5522847,-1.01453063e-16 24,0.44771525 24,1 L24,8.17157288 C24,8.70200585 23.7892863,9.21071368 23.4142136,9.58578644 L20.5857864,12.4142136 C20.2107137,12.7892863 20,13.2979941 20,13.8284271 L20,26 C20,26.5522847 19.5522847,27 19,27 L1,27 C0.44771525,27 6.76353751e-17,26.5522847 0,26 L0,1 C-6.76353751e-17,0.44771525 0.44771525,1.01453063e-16 1,0 Z"></path>
                          </svg>
                      </div>
                      <div class="paper"></div>
                  </div>
              </div>
              Mostrar Credencial
          </button></a>
            </div>
          </div>
          <div class="card" style="width: 18rem;">
            <img src="./assets/imagenes/javaScript.png" class="card-img-top" alt="..." height="220">
            <div class="card-body text-center">
            <a href="https://www.coderhouse.com/certificados/6407d211b5de12000e538d84"><button class="continue-application">
            <div>
                <div class="pencil"></div>
                <div class="folder">
                    <div class="top">
                        <svg viewBox="0 0 24 27">
                            <path d="M1,0 L23,0 C23.5522847,-1.01453063e-16 24,0.44771525 24,1 L24,8.17157288 C24,8.70200585 23.7892863,9.21071368 23.4142136,9.58578644 L20.5857864,12.4142136 C20.2107137,12.7892863 20,13.2979941 20,13.8284271 L20,26 C20,26.5522847 19.5522847,27 19,27 L1,27 C0.44771525,27 6.76353751e-17,26.5522847 0,26 L0,1 C-6.76353751e-17,0.44771525 0.44771525,1.01453063e-16 1,0 Z"></path>
                        </svg>
                    </div>
                    <div class="paper"></div>
                </div>
            </div>
            Mostrar Credencial
        </button></a>
              
            </div>
          </div>
          <div class="card" style="width: 18rem;">
            <img src="./assets/imagenes/Programacion basica.png" class="card-img-top" alt="..."height="220">
            <div class="card-body text-center">
              <a href="https://platzi.com/p/nicolas_alcon/curso/3208-programacion-basica/diploma/detalle/" ><button class="continue-application">
              <div>
                  <div class="pencil"></div>
                  <div class="folder">
                      <div class="top">
                          <svg viewBox="0 0 24 27">
                              <path d="M1,0 L23,0 C23.5522847,-1.01453063e-16 24,0.44771525 24,1 L24,8.17157288 C24,8.70200585 23.7892863,9.21071368 23.4142136,9.58578644 L20.5857864,12.4142136 C20.2107137,12.7892863 20,13.2979941 20,13.8284271 L20,26 C20,26.5522847 19.5522847,27 19,27 L1,27 C0.44771525,27 6.76353751e-17,26.5522847 0,26 L0,1 C-6.76353751e-17,0.44771525 0.44771525,1.01453063e-16 1,0 Z"></path>
                          </svg>
                      </div>
                      <div class="paper"></div>
                  </div>
              </div>
              Mostrar Credencial
          </button></a>
            </div>
          </div>
          <div class="card" style="width: 18rem;">
            <img src="./assets/imagenes/certificado2.png" class="card-img-top" alt="..." height="220">
            <div class="card-body text-center">
              <a href="https://seprogramar.inti.gob.ar/inti/certificates/verify/zY_e2b-pYpIr-psm" ><button class="continue-application">
              <div>
                  <div class="pencil"></div>
                  <div class="folder">
                      <div class="top">
                          <svg viewBox="0 0 24 27">
                              <path d="M1,0 L23,0 C23.5522847,-1.01453063e-16 24,0.44771525 24,1 L24,8.17157288 C24,8.70200585 23.7892863,9.21071368 23.4142136,9.58578644 L20.5857864,12.4142136 C20.2107137,12.7892863 20,13.2979941 20,13.8284271 L20,26 C20,26.5522847 19.5522847,27 19,27 L1,27 C0.44771525,27 6.76353751e-17,26.5522847 0,26 L0,1 C-6.76353751e-17,0.44771525 0.44771525,1.01453063e-16 1,0 Z"></path>
                          </svg>
                      </div>
                      <div class="paper"></div>
                  </div>
              </div>
              Mostrar Credencial
          </button></a>
            </div>
          </div>
          <div class="card" style="width: 18rem;">
            <img src="./assets/imagenes/diseñoGrafico.png" class="card-img-top" alt="..." height="220">
            <div class="card-body text-center">
              <a href="./assets/imagenes/certificado_de_aprobacin.pdf"><button class="continue-application">
              <div>
                  <div class="pencil"></div>
                  <div class="folder">
                      <div class="top">
                          <svg viewBox="0 0 24 27">
                              <path d="M1,0 L23,0 C23.5522847,-1.01453063e-16 24,0.44771525 24,1 L24,8.17157288 C24,8.70200585 23.7892863,9.21071368 23.4142136,9.58578644 L20.5857864,12.4142136 C20.2107137,12.7892863 20,13.2979941 20,13.8284271 L20,26 C20,26.5522847 19.5522847,27 19,27 L1,27 C0.44771525,27 6.76353751e-17,26.5522847 0,26 L0,1 C-6.76353751e-17,0.44771525 0.44771525,1.01453063e-16 1,0 Z"></path>
                          </svg>
                      </div>
                      <div class="paper"></div>
                  </div>
              </div>
              Mostrar Credencial
          </button></a>
            </div>
          </div>
          <div class="card" style="width: 18rem;">
            <img src="./assets/imagenes/ciberseguridad.png" class="card-img-top" alt="..." height="220">
            <div class="card-body text-center">
              <a href="./assets/imagenes/ciberseguridad.pdf"><button class="continue-application">
              <div>
                  <div class="pencil"></div>
                  <div class="folder">
                      <div class="top">
                          <svg viewBox="0 0 24 27">
                              <path d="M1,0 L23,0 C23.5522847,-1.01453063e-16 24,0.44771525 24,1 L24,8.17157288 C24,8.70200585 23.7892863,9.21071368 23.4142136,9.58578644 L20.5857864,12.4142136 C20.2107137,12.7892863 20,13.2979941 20,13.8284271 L20,26 C20,26.5522847 19.5522847,27 19,27 L1,27 C0.44771525,27 6.76353751e-17,26.5522847 0,26 L0,1 C-6.76353751e-17,0.44771525 0.44771525,1.01453063e-16 1,0 Z"></path>
                          </svg>
                      </div>
                      <div class="paper"></div>
                  </div>
              </div>
              Mostrar Credencial
          </button></a>
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