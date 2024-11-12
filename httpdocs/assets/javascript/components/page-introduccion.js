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

    li {
      width: fit-content;
      block-size: fit-content;
      max-width: 35em;
      padding-left: 1.5em;
      text-indent: -1.5em;
      margin-bottom: 1em;
    }

    aside .platforms-container {
      display: flex;
      justify-content: space-around;
      align-items: center;
      gap: 2rem;
      margin: 2rem 0;
    }

    aside .platform-item {
      text-align: center;
      flex: 1;
      max-width: 300px;
    }

    aside .platform-item a {
      text-decoration: none;
      color: inherit;
      display: block;
      background: none !important;
      padding: 0 !important;
    }

    aside .platform-item img {
      width: 100%;
      height: auto;
      max-width: 200px;
      display: block;
      margin: 0 auto;
    }

    aside p {
      text-align: center;
      margin: 1rem 0;
    }

    aside .platforms-description {
      display: block;
      text-align: center;
      margin: 1rem 0;
      width: 100%;
    }

    aside h2 a {
      background: var(--color-warmGray-100) !important;
    }

    @media (max-width: 768px) {
      aside h2 {
        background: none !important;
        color: var(--color-white) !important;
      }
    }

    #platforms-title a {
      background: var(--color-warmGray-100) !important;
    }

    @media (max-width: 768px) {
      #platforms-title a {
        background: none !important;
        color: var(--color-white) !important;
        text-indent: 0 !important;
        margin-left: 0 !important;
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
      En 2017, la ciudad de Chihuahua se embarcó en un proyecto de seguridad sin precedentes que, a primera vista, parecía un esfuerzo legítimo por combatir la creciente violencia y el crimen organizado. Sin embargo, a medida que se construían los cimientos de lo que oficialmente se presentó como la <a href="/entramado/plataforma_escudo_chihuahua">"Plataforma Escudo Chihuahua",</a> los verdaderos objetivos de esta infraestructura comenzaron a revelarse. Esta es la historia de <strong>cómo un proyecto de vigilancia masiva se expandió más allá de las fronteras estatales,</strong> convirtiéndose en un complejo sistema de espionaje con conexiones internacionales, que incluso toca las políticas de seguridad en Estados Unidos.
    </p>
  </section>

  <!-- Primera Capa: La Superficie Visible -->
  <section id="primera-capa">
    <h2>Primera Capa: La Superficie Visible</h2>
    
    <p>
      La narrativa comienza en 2017 con la presentación de la <a href="/entramado/plataforma_escudo_chihuahua">"Plataforma Escudo Chihuahua"</a> en el municipio de Chihuahua, argumentando falta de inteligencia en el accionar de la policía municipal. <em>Esto dio pie a una inversión constante de recursos en tecnología de vigilancia masiva que ha trascendido las administraciones municipales</em> iniciándose con <a href="/entramado/maru_campos">Maru Campos</a> y continuando con <a href="/entramado/marco_bonilla">Marco Bonilla.</a>
    </p>
    
    <p>
      Al ganar la gubernatura en 2021, la gobernadora <a href="/entramado/maru_campos">Maru Campos</a> anuncia la expansión del proyecto de videovigilancia masiva a todo el estado con el nombre de <a href="/entramado/plataforma_centinela">"Plataforma Centinela".</a> Esto movilizó las alarmas de grupos que se oponen a la vigilancia masiva centrando las preocupaciones en la construcción de una torre donde se va a concentrar toda la inteligencia generada denominada <a href="/mapa/torre_centinela">"Torre Centinela".</a>
    </p>

    <p>
      Es en ese mismo periodo de tiempo que el nuevo presidente municipal de Ciudad Juárez, <a href="/entramado/cruz_perez_cuellar">Cruz Pérez Cuellar,</a> le quiso hacer la competencia a Maru Campos en el campo de vigilancia masiva con el proyecto <a href="/entramado/juarez_vigilante">"Juárez Vigilante".</a>
    </p>

    <p>
      Sin embargo, tras el discurso político y <a href="/biblioteca/reducira_centinela">los titulares de los medios</a>, comienzan a surgir las primeras preguntas: ¿Por qué un proyecto de seguridad cuesta tanto? <em>¿Por qué la opacidad en el uso de fondos y la falta de detalles técnicos sobre las empresas involucradas?</em>
    </p>

    <p>
      🤔<a href="/entramado">¿Quiénes están detrás de todo esto?</a>
    </p>
  </section>

  <!-- Segunda Capa: Los Integradores Tecnológicos -->
  <section id="segunda-capa">
    <h2>Segunda Capa: Los Integradores Tecnológicos</h2>
    
    <p>
      Al analizar más a fondo los contratos, las escasas declaraciones oficiales disponibles <a href="/biblioteca">y demás documentos,</a> se pudo llegar a los intermediarios que instalaron distintas tecnologías de vigilancia masiva en las 3 plataformas. 
    </p>
    
    <p>
      Los integradores involucrados son las compañías <a href="/entramado/seguritech">Seguritech,</a> <a href="/entramado/telematica">Telemática LEFIC</a> e <a href="/entramado/int_intelligence">Int Intelligence and Telecom Technologies,</a> que se dedican a armar proyectos con tecnología de terceros para la vigilancia masiva.
    </p>
  </section>

  <!-- Tercera Capa: Los Fabricantes -->
  <section id="tercera-capa">
    <h2>Tercera Capa: Los Fabricantes</h2>
    <p>
      A medida que desenmarañamos esta red de integradores, llegamos a los verdaderos fabricantes de la tecnología. <em>Normalmente las investigaciones de este tipo solo llegan en algunos casos a conocer quienes son los integradores,</em> pero no es común que se profundice en saber qué clase de tecnología están instalando. <a href="/metodología">Al realizar estudios de campo, revisiones hemerográficas, estudio de gabinete, entre otras formas de investigación, se nos revela la conexión con fabricantes de hardware y software que operan a nivel global.</a> 
    </p>

    <p>
      <em>Empresas como Hikvision, TKH Security, Invengo, Ubiquiti, Radwin, IndigoVision, Milestone Systems, Dahua, DJI y Droneshield emergen como proveedores clave de dispositivos y componentes que permiten la implementación de vigilancia masiva </em> mediante tecnologías como: 
      <li>Cámaras con lectura de placas de vehículos así como reconocimiento del tipo de vehículo, marca, modelo y color.</li> 
      <li>Radares de lectores de RFDI para leer chips agregados a las placas de los vehículos para contrastar con la información que recolectan las cámaras.</li> 
      <li>Puntos de control carreteros con cámaras con reconocimiento facial para revisar a los pasajeros de los vehículos.</li> 
      <li>Puntos de monitoreo en plazas públicas que contienen cámaras con reconocimiento facial.</li>
      <li>Enlaces por radio punto a punto para la comunicación entre puntos de monitoreo y los centros de comando y control.</li>
      <li>Patrullas equipadas con cámaras con reconocimiento facial.</li>
      <li>Software de gestión de video para la integración de todas las cámaras y puntos de monitoreo.</li>
      <li>Videoanáliticos para reconocimiento facial y reconocimiento de vehículos.</li>
      <li>Drones equipados con cámaras térmicas, medidores laser y cámaras de alta definición esparcidas por el territorio estatal.</li> 
      <li>Equipos antidrones utilizados para neutralizar otros drones que se consideran como enemigos.</li>
    </p>
  </section>
  <aside>
    <h2 id="platforms-title">¿Como funcionan las tecnologías de estas plataformas?</h2>
    <span class="platforms-description">Da click en el nombre de la plataforma para ver el análisis detallado.</span>

    <div class="platforms-container">
      <div class="platform-item">
        <a href="/entramado/plataforma_escudo_chihuahua">
          <img src="/assets/logos/pecuu.svg" alt="Logo Plataforma Escudo Chihuahua" />
        </a>
      </div>
      
      <div class="platform-item">
        <a href="/entramado/juarez_vigilante">
          <img src="/assets/logos/juarez.svg" alt="Logo Juárez Vigilante" />
        </a>
      </div>
      
      <div class="platform-item">
        <a href="/entramado/plataforma_centinela">
          <img src="/assets/logos/centinela.svg" alt="Logo Plataforma Centinela" />
        </a>
      </div>
    </div>
  </aside>

  <!-- Cuarta Capa: La Amenaza Oculta y las Implicaciones Éticas -->
  <section id="cuarta-capa">
    <h2>Cuarta Capa: La Amenaza Oculta y las Implicaciones Éticas</h2>
    <p>
      La narrativa adquiere un tono transfronterizo cuando se descubre que, a través de colaboraciones con la administración de <a href="/entramado/greg_abbott">Greg Abbott</a> en el estado de Texas, de la fiscalía de distrito a cargo de <a href="/entramado/sam_bregman">Sam Bregman</a> en Albuquerque, Nuevo México y del embajador de los Estados Unidos de América en México <a href="/entramado/ken_salazar">Ken Salazar,</a> <em>los datos recolectados están siendo utilizados para fines de control migratorio y operaciones conjuntas a lo largo de la frontera entre México y Estados Unidos.</em>
    </p>
    
    <p>
      Esto se liga con el Plan Estatal de Seguridad Ciudadana y Procuración de Justicia 2022-2027, donde se busca suscribir convenios de colaboración e intercambio de información con instancias de Estados Unidos de Ámerica y de otros países de la región.
    </p>
    
    <p>
      El muro virtual también existe cuando se habla de convenios de colaboración con organismos como la <a href="/entramado/oim_mexico">Organización Internacional para las Migraciones (OIM),</a> donde <em>se busca que las agencias de seguridad del estado de Chihuahua apoyen en la actualización de albergues de migrantes muy probablemente introduciendo estas tecnologías de vigilancia masiva en los mismos</em>.
    </p>
    
    <p>
      El proyecto, que al inicio parecía ser una simple mejora de infraestructura de seguridad, ha evolucionado en una potencial red de espionaje masivo con implicaciones éticas y legales preocupantes.
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
