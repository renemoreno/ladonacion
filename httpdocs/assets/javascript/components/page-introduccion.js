// Importaciones necesarias
import { data } from '/resources/ladonacion.js'
import { references } from '/assets/javascript/modules/references.js'
import '/assets/javascript/components/ladonacion-details.js'

/**
 * Creación del template para <page-introduccion>
 */
const template = document.createElement('template')

template.innerHTML = `
  <style>
    @keyframes swing {
      0% {
        transform: rotateZ(-0.75deg);
      }

      100% {
        transform: rotateZ(0.75deg);
      }
    }

    :host {
      display: block;
      font-size: 1.35em;
      max-width: var(--main-width);
      padding: var(--main-padding);
      margin: var(--main-margin) auto;
    }

    .nowrap {
      white-space: nowrap;
    }

    em {
      font-style: normal;
      font-weight: 700;
      color: var(--color-white);
    }

    a:not([rel="nofollow"]),
    strong {
      padding: 0.1em 0.5em;
      font-weight: 600;
    }

    a:not([rel="nofollow"]) {
      text-decoration: none;
      background: var(--color-yellow-400);
      color: var(--color-warmGray-900);
    }

    a[rel="nofollow"] {
      font-weight: 600;
      color: var(--color-white);
    }

    a[href^="mailto"] {
      font-weight: inherit;
      text-decoration: none;
    }

    strong {
      background: var(--color-warmGray-100);
      color: var(--color-warmGray-900);
    }

    h1 {
      display: none;
    }

    h2 a {
      display: inline-block;
      text-indent: 100em;
      margin-left: -100em;
      padding: 0.25em 1em 0.25em 0 !important;
      background: var(--color-warmGray-100) !important;
      color: var(--color-warmGray-900);
    }

    p {
      font-weight: 400;
      line-height: 1.35;
      max-width: 35em;
    }

    p code {
      font-size: 1.25em;
    }

    ladonacion-details aside {
      font-size: 0.9em;
    }

    ladonacion-details span[slot="summary"] {
      display: block;
      padding: 0.25em 0.5em 0.25em 1.5em;
    }

    ladonacion-details::part(marker) {
      padding: 0.25em 0;
    }

    ladonacion-details::part(contents) {
      padding-left: 1.5em;
    }

    ladonacion-details::part(summary),
    ladonacion-details::part(marker) {
      font-weight: 800;
      color: var(--color-yellow-400);
    }

    ladonacion-details::part(summary):hover {
      background: var(--color-yellow-400);
      color: var(--color-warmGray-900);
    }

    ladonacion-details::part(marker) {
      mix-blend-mode: difference;
    }

    section {
      --figure-margin: 2.5em;
      margin: 4em 0 0 0;
    }

    :host > aside {
      text-align: center;
      margin: 4em 0 0 calc(50% - 50vw);
      padding: 2em 1em;
      width: 100vw;
      box-sizing: border-box;
      background: var(--color-warmGray-700);
      transform: skewY(-2deg);
    }

    hr {
      margin-bottom: 12em;
      border: none;
    }

    section#introduccion figure {
      position: relative;
      float: right;
      width: 20em;
      margin: -0.5em 0 0 var(--figure-margin);
      border: 10px solid var(--color-black);
      transform-origin: top;
      animation: swing 3s ease-in-out alternate infinite;
      z-index: 1;
      box-sizing: border-box;
      box-shadow: -1px 1px 4px 1px rgba(0, 0, 0, 0.1),
        -2px 2px 4px 1px rgba(0, 0, 0, 0.09), -3px 3px 4px 1px rgba(0, 0, 0, 0.08),
        -4px 4px 4px 1px rgba(0, 0, 0, 0.07), -5px 5px 4px 1px rgba(0, 0, 0, 0.06),
        -6px 6px 4px 1px rgba(0, 0, 0, 0.05), -7px 7px 4px 1px rgba(0, 0, 0, 0.04),
        -8px 8px 4px 1px rgba(0, 0, 0, 0.03), -9px 9px 4px 1px rgba(0, 0, 0, 0.03),
        -10px 10px 4px 1px rgba(0, 0, 0, 0.03),
        -11px 11px 4px 1px rgba(0, 0, 0, 0.03),
        -12px 12px 4px 1px rgba(0, 0, 0, 0.02),
        -13px 13px 4px 1px rgba(0, 0, 0, 0.02),
        -14px 14px 4px 1px rgba(0, 0, 0, 0.01),
        -15px 15px 4px 1px rgba(0, 0, 0, 0.01),
        -16px 16px 4px 1px rgba(0, 0, 0, 0.01);
    }

    section#introduccion figure img {
      display: block;
      padding: 1.5em;
      width: 100%;
      box-sizing: border-box;
      background: var(--color-warmGray-200);
    }

    aside#fuentes img {
      height: 2rem;
      padding: 1.25rem 2rem;
      filter: saturate(0%) invert(100%) contrast(.5) sepia(.1);
    }

    section#colaborar figure {
      float: right;
      width: 25em;
      margin: 0 0 0 var(--figure-margin);
      box-sizing: border-box;
    }

    section#colaborar figure div {
      border-image: url("/assets/images/frame.png") 75 74 97 96 stretch stretch;
      border-style: inset;
      border-width: 3em;
      transform-origin: top;
      animation: swing 3s ease-in-out alternate infinite;
    }

    section#colaborar figure img {
      display: block;
      margin: 0 1px -6px 0;
      width: 100%;
      box-sizing: border-box;
      background-color: var(--color-warmGray-100);
    }

    section#colaborar figure figcaption {
      line-height: 1.25;
      text-align: center;
      font-size: 0.75em;
      color: var(--color-warmGray-400);
    }

    svg.arrow {
      position: absolute;
      height: 2em;
      margin: 0.5em 0 0 0.5em;
      fill: white;
    }

    svg.twitter {
      height: 1.35em;
      vertical-align: middle;
    }

    aside#patronos {
      font-family: "Permanent Marker", cursive;
    }

    aside#patronos a {
      color: var(--color-yellow-400);
      background: inherit;
      text-decoration: underline;
      transition: 150ms;
    }

    aside#patronos a:hover {
      background: var(--color-yellow-400);
      color: var(--color-warmGray-900);
      text-decoration: none;
    }

    aside#patronos > * {
      display: inline-block;
      font-weight: 600;
      padding: 0.35em 1em;
    }

    table {
      font-size: 1rem;
      border-collapse: collapse;
    }

    table h2 {
      margin: 2em 0 0 0;
    }

    table th:not([colspan]) {
      text-align: left;
    }

    table th:not([colspan]):first-of-type {
      text-transform: uppercase;
      white-space: nowrap;
    }

    table th,
    table td {
      padding: 0.5em 1em;
    }

    table th small {
      font-size: 0.65em;
      font-weight: 100;
      color: var(--color-warmGray-400);
      margin-left: 0.5em;
    }

    table tr.relation:nth-child(odd) {
      background: var(--color-warmGray-800);
    }

    table svg {
      width: 1em;
      margin-right: 0.5em;
      vertical-align: middle;
      fill: currentColor;
      cursor: help;
    }

    @media (max-width: 1280px) {
      aside#patronos > * {
        padding: 0.25em 0.75em;
      }

      aside#fuentes img {
        height: 1.5rem;
        padding: 0.75rem 1.5rem;
      }
    }

    @media (max-width: 1024px) {
      section {
        max-width: 35em;
        margin: 4em auto;
      }

      section#introduccion figure,
      section#colaborar figure {
        float: none;
        margin: 0 auto 2em auto;
      }

      section#introduccion figure {
        max-width: 80%;
      }

      section#colaborar figure {
        max-width: 95%;
      }

      :host > aside {
        padding: 1em 0;
      }

      aside#fuentes img {
        padding: 0.5rem 1.25rem;
      }
    }

    @media (max-width: 768px) {
      :host {
        font-size: 1.15em;
      }

      hr {
        margin-bottom: 8em;
      }

      aside#patronos {
        font-size: 0.85em;
        padding: 1em 0.5em;
      }

      aside#fuentes img {
        height: 1rem;
        padding: 0.5rem 1rem;
      }

      table,
      th,
      td,
      tr {
        display: block;
      }

      th[colspan],
      tr:not(.relation) th {
        display: none;
      }

      tr.relation {
        padding: 1em 0.5em;
      }

      tr.relation td {
        padding: 0.25em 1em;
      }

      tr.relation td:nth-child(3):before {
        content: "Sujetos permitidos: ";
      }

      tr.relation td:nth-child(4):before {
        content: "Objetos permitidos: ";
      }
      h2 a {
        display: inline;
        text-indent: 0;
        margin-left: 0;
        padding: 0 !important;
        background: none !important;
        color: var(--color-warmGray-100);
        box-shadow: inset 0 -0.5em 0 var(--color-warmGray-100);
        text-decoration: none;
        line-height: 1.5;
      }

      h2 {
        display: inline;
        background: var(--color-warmGray-100);
        box-decoration-break: clone;
        -webkit-box-decoration-break: clone;
        padding: 0.2em 0;
      }
    }

    }

    @media (max-width: 640px) {
      aside#patronos {
        font-size: 0.75em;
      }

      aside#fuentes img {
        height: 0.85rem;
        padding: 0.35rem 0.75rem;
      }
      h2 a {
        display: inline;
        text-indent: 0;
        margin-left: 0;
        padding: 0 !important;
        background: none !important;
        color: var(--color-warmGray-100);
        box-shadow: inset 0 -0.5em 0 var(--color-warmGray-100);
        text-decoration: none;
        line-height: 1.5;
      }

      h2 {
        display: inline;
        background: var(--color-warmGray-100);
        box-decoration-break: clone;
        -webkit-box-decoration-break: clone;
        padding: 0.2em 0;
      }  
    }
  </style>

  <!-- Título Principal de la Página -->
  <h1>Introducción a Vigilancia Masiva Transfronteriza</h1>

  <!-- Introducción General -->
  <section id="introduccion">

    <figure>
      <div>
        <img
          src="https://www.thedigitalfix.com/wp-content/sites/thedigitalfix/2022/09/rings-of-power-sauron-explained.jpg"
          alt="Sauron"
          loading="lazy"
        />
      </div>
    </figure>

    <p>
      En 2017, la ciudad de Chihuahua se embarcó en un proyecto de seguridad sin precedentes que, a primera vista, parecía un esfuerzo legítimo por combatir la creciente violencia y el crimen organizado. Sin embargo, a medida que se construían los cimientos de lo que oficialmente se presentó como la “Plataforma Escudo Chihuahua”, los verdaderos objetivos de esta infraestructura comenzaron a revelarse. Esta es la historia de cómo un proyecto de vigilancia masiva se expandió más allá de las fronteras estatales, convirtiéndose en un complejo sistema de espionaje con conexiones internacionales, que incluso afecta las políticas de seguridad en Estados Unidos.
    </p>
  </section>

  <!-- Primera Capa: La Superficie Visible -->
  <section id="primera-capa">
    <h2>Primera Capa: La Superficie Visible</h2>
    
    <p>
      La narrativa comienza con la presentación oficial de la Torre Centinela, un edificio icónico que se alza como símbolo de modernidad y seguridad en el centro de Ciudad Juárez. La gobernadora Maru Campos, al anunciar la expansión de la Plataforma Centinela a todo el estado y su colaboración con Ciudad Juárez, destacó los beneficios de un sistema de vigilancia que, según el discurso oficial, permitiría prevenir crímenes y proteger a la población.
    </p>
    
    <p>
      Sin embargo, tras el discurso político y los titulares de los medios, comienzan a surgir las primeras preguntas: ¿Por qué un proyecto de seguridad cuesta tanto? ¿Por qué la opacidad en el uso de fondos y la falta de detalles técnicos sobre las empresas involucradas?
    </p>
  </section>

  <!-- Segunda Capa: Los Integradores Tecnológicos -->
  <section id="segunda-capa">
    <h2>Segunda Capa: Los Integradores Tecnológicos</h2>
    
    <p>
      Al analizar más a fondo los contratos y las escasas declaraciones oficiales disponibles, la investigación revela que la Torre Centinela y el proyecto de vigilancia no se limitan sólo a cámaras de seguridad. Detrás de estas infraestructuras, encontramos un entramado de empresas tecnológicas especializadas en procesamiento de datos, reconocimiento facial e integración de plataformas con Inteligencia Artificial (IA).
    </p>
    
    <p>
      Entre los integradores involucrados destacan compañías como Herta, que no solo proveen software para análisis de patrones delictivos, sino que también facilitan la conexión de esta información con bases de datos privadas y, lo más inquietante, con redes de seguridad al otro lado de la frontera. La presencia de integradores con experiencia en tecnología militar y seguridad nacional sugiere que el verdadero alcance del proyecto va más allá de la vigilancia urbana.
    </p>
  </section>

  <!-- Tercera Capa: Los Fabricantes y el Contexto Transfronterizo -->
  <section id="tercera-capa">
    <h2>Tercera Capa: Los Fabricantes y el Contexto Transfronterizo</h2>
    
    <p>
      A medida que desenmarañamos esta red de integradores, llegamos a los verdaderos fabricantes de la tecnología. Aquí es donde se revela la conexión con fabricantes de hardware y software que operan a nivel global. Empresas como Hikvision, TKH Security, Ubiquiti, Radwin, IndigoVision, Milestone Systems, Dahua y DJI emergen como proveedores clave de dispositivos y componentes que permiten la implementación de vigilancia avanzada, capaz de identificar patrones de comportamiento y rastrear objetivos en tiempo real.
    </p>
    
    <p>
      La implicación de estos actores internacionales no solo levanta banderas rojas sobre la posible transferencia de datos sensibles, sino que también pone en entredicho la soberanía de la información recopilada por estas plataformas. La narrativa adquiere un tono transfronterizo cuando se descubre que, a través de colaboraciones con la administración de Greg Abbott en Texas, parte de los datos recolectados podrían estar siendo utilizados para fines de control migratorio y operaciones conjuntas a lo largo de la frontera entre México y Estados Unidos.
    </p>
  </section>

  <!-- Cuarta Capa: La Amenaza Oculta y las Implicaciones Éticas -->
  <section id="cuarta-capa">
    <h2>Cuarta Capa: La Amenaza Oculta y las Implicaciones Éticas</h2>
    
    <p>
      Finalmente, la narrativa llega a la capa más profunda: el verdadero impacto de la Plataforma Centinela en la privacidad de los ciudadanos y la amenaza que representa para la libertad de expresión y el derecho a la protesta.
    </p>
    
    <p>
      A través de la colaboración con organismos como la Organización Internacional para las Migraciones (OIM) y la expansión de programas como Juárez Vigilante, la vigilancia masiva se extiende no solo a delincuentes, sino también a activistas, periodistas y cualquier persona considerada “sospechosa”.
    </p>
    
    <p>
      El proyecto, que al inicio parecía ser una simple mejora de infraestructura de seguridad, ha evolucionado en una red de espionaje masivo con implicaciones éticas y legales preocupantes. La narrativa cierra con un llamado a la acción, destacando la necesidad de un control ciudadano sobre estas tecnologías y la importancia de cuestionar el verdadero propósito de estas plataformas.
    </p>
  </section>

  <!-- Epílogo: Desmontando la Cebolla -->
  <section id="epilogo">
    <h2>Epílogo: Desmontando la Cebolla</h2>
    
    <p>
      La imagen de la Torre Centinela, que al inicio se presentaba como un símbolo de seguridad, se transforma en la metáfora de una cebolla de múltiples capas. Cada capa que se desprende revela no solo un nivel más profundo de opacidad y control, sino también la compleja red de intereses políticos, económicos y tecnológicos que la sostienen. Al final, la narrativa invita a los lectores a reflexionar: ¿Qué más se oculta detrás de la fachada de la seguridad moderna? ¿Hasta dónde llega el verdadero alcance de la Plataforma Centinela?
    </p>
  </section>
`

/**
 * Definición del Web Component <page-introduccion>
 */
customElements.define(
  'page-introduccion',
  class extends HTMLElement {

    whenAllImagesAreLoaded(callback) {
        const waitUntilAllImagesAreLoaded = () => {
          const images = this.shadowRoot.querySelectorAll('img')
          if ([...images].every((image) => image.complete)) {
            callback()
          } else {
            setTimeout(waitUntilAllImagesAreLoaded, 150)
          }
        }
        waitUntilAllImagesAreLoaded()
      }

      open(id, pushState = true) {
        this.whenAllImagesAreLoaded(() => {
          const padding = this.shadowRoot.querySelector(
            'section:first-of-type'
          ).offsetTop
          const top = this.shadowRoot.getElementById(id).offsetTop - padding
          window.scrollTo({ top })
        })
  
        pushState && history.pushState(null, null, `/introduccion/${id}`)
      }
  
      close(pushState = true) {
        pushState && history.pushState(null, null, '/introduccion')
      }

    constructor() {
        super()
  
        // Crear Shadow DOM en modo abierto
        const root = this.attachShadow({ mode: 'open' })
        // Clonar y anexar el contenido del template
        root.append(template.content.cloneNode(true))
      }
    /**
     * Método que se ejecuta cuando el componente se inserta en el DOM
     */
    connectedCallback() {
      // 2. Transformar cada <h2> en un enlace <a> apuntando a su sección
      this.shadowRoot.querySelectorAll('h2').forEach((heading) => {
        const link = document.createElement('a')
        const anchor = heading.closest('section')?.getAttribute('id')
        if (anchor) {
          link.setAttribute('href', `/introduccion/${anchor}`)
          link.innerHTML = heading.innerHTML
          heading.innerHTML = ''
          heading.append(link)
        }
      })

      // 3. Manejar eventos personalizados de activación y desactivación
      this.addEventListener('activate', () => {
        const [, , id = null] =
          window.location.pathname.match(/^\/introduccion(\/(\w+)?)?$/)
        id ? this.open(id, false) : this.close(false)
      })

      this.addEventListener('deactivate', () => this.close(false))

      // 5. Disparar el evento 'ready' para indicar que el componente está listo
      document.dispatchEvent(new Event('ready'))
    }
  }
)
