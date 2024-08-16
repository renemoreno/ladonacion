const template = document.createElement('template')

const transitionDuration = 250

template.innerHTML = `
  <style>
    @keyframes fade {
        0% {
            opacity: 0;
        }

        100% {
            opacity: .8;
        }
    }

    @keyframes appearFromTop {
        0% {
            opacity: 0;
            transform: translateY(-4rem);
        }

        100% {
            opacity: 1;
            transform: translateY(0);
        }
    }

    @keyframes appearFromLeft {
        0% {
            opacity: 0;
            transform: translateX(-100%);
        }

        100% {
            opacity: 1;
            transform: translateX(0);
        }
    }

    :host {
        position: fixed;
        top: 0;
        width: 100%;
        z-index: var(--z-index-header);
    }

    nav {
        --border-thickness: .35rem;
        display: flex;
        align-items: flex-start;
        justify-content: space-between;
        padding: 0 2em;
        font-weight: 400;
        border-bottom: 1px solid transparent;
        background: #1c1917f7; /* var(--color-warmGray-900) */
        color: var(--color-warmGray-400);
        backdrop-filter: blur(1em);
        box-sizing: border-box;
        transition: 250ms;
        position: relative;
    }

    :host(:not(.expanded)) nav.shadow {
        box-shadow: 0 .25em .25em #1c191750; /* var(--color-warmGray-900) */
        border-color: var(--color-warmGray-800);
    }

    button {
        padding: .5rem 1rem;
        border: none;
        background: transparent;
        color: inherit;
        cursor: pointer;
    }

    button[role=button] {
        display: none;
        position: absolute;
        top: 0;
        right: 1em;
        width: auto;
        height: var(--header-height);
    }

    button[role=button] svg {
        transition: 250ms;
        height: 100%;
        max-height: 1.5rem;
        vertical-align: middle;
    }

    button[role=search] {
        width: var(--header-height);
        height: var(--header-height);
    }

    button[role=search] svg {
        height: 1.5rem;
        vertical-align: middle;
    }

    div {
        flex-grow: 1;
    }

    slot {
        display: flex;
        align-items: stretch;
        flex-grow: 1;
        box-sizing: border-box;
    }

    a, ::slotted(a) {
        --padding: 1rem;
        flex-grow: 1;
        padding: calc(var(--padding) - var(--border-thickness)) .5rem var(--padding) .5rem;
        line-height: calc(var(--header-height) - 2 * var(--padding));
        text-align: center;
        border-top: var(--border-thickness) solid transparent;
        text-decoration: none;
        color: var(--color-warmGray-400);
    }

    ::slotted(a),
    button {
        transition: color 500ms, border-color 500ms;
    }

    ::slotted(a:hover),
    button:hover {
        transition: color 250ms, border-color 250ms;
        color: var(--color-white);
    }

    slot,
    button[role=search] {
        animation: appearFromTop 1s backwards;
    }

    a {
        position: relative;
        z-index: var(--z-index-header);
        font-weight: 700;
        font-size: 1.25em;
        text-align: left;
        padding-left: 3rem;
        color: var(--color-white);
        flex-grow: 0;
        animation: appearFromLeft 1s backwards;
    }

    a svg {
        position: absolute;
        left: var(--border-thickness);
        top: var(--border-thickness);
        height: 1.5em;
    }

    ::slotted(a.active) {
        color: var(--color-yellow-400);
        border-color: inherit;
    }

    @media (max-width: 1280px) {
        nav {
            padding: 0 1em;
        }
    }

    @media (max-width: 980px) {
        nav {
            --width: 20rem;
        }

        nav.backdrop::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 100vw;
            height: 100vh;
            background: var(--color-warmGray-900);
            cursor: pointer;
        }

        :host(.expanded) nav.backdrop::before {
            animation: fade ${transitionDuration}ms forwards;
        }

        :host(:not(.expanded)) nav.backdrop::before {
            opacity: 0 !important;
            transition: opacity ${transitionDuration}ms;
        }

        div {
            position: absolute;
            top: 0;
            left: 0;
            padding-top: var(--header-height);
            width: var(--width);
            height: calc(100vh - var(--header-height));
            background: #0d0b0b;
            transform: translateX(calc(-1 * var(--width)));
            transition: transform ${transitionDuration}ms;
            box-shadow: 0px 0 8px var(--color-warmGray-900);
        }

        :host(.expanded) div {
            transform: translateX(0);
        }

        slot {
            display: flex;
            align-items: stretch;
            flex-direction: column;
            text-align: left;
            box-sizing: border-box;
            padding: 0;
        }

        ::slotted(a:first-of-type) {
            border-top: 1px solid var(--color-warmGray-900) !important;
        }

        ::slotted(a) {
            text-align: left;
            border-top: 0;
            border-left: var(--border-thickness) solid transparent;
            padding: 1em;
            font-size: 1.25em;
            font-weight: 600;
            border-bottom: 1px solid var(--color-warmGray-900) !important;
            transition: 250ms;
        }

        ::slotted(a:hover) {
            border-color: var(--color-yellow-400);
            background: var(--color-warmGray-900) !important;
        }

        slot,
        button[role=search] {
            animation: none;
        }

        button[role=button] {
            display: block;
        }

        button[role=search] {
            position: absolute;
            width: 4.5em;
            left: calc(var(--width) - 4.5em);
            transform: translateX(calc(-1 * var(--width)));
            transition: transform ${transitionDuration}ms;
        }

        button[role=search] svg {
            height: 1.25rem;
        }

        :host(.expanded) button[role=button] svg {
            transform: rotate(90deg);
        }

        :host(.expanded) button[role=search] {
            transform: translateX(0);
        }
    }

    @media (max-width: 768px) {
        nav a svg {
            margin-left: var(--border-thickness);
            height: 1.15em;
        }
    }

    @media (max-width: 640px) {
        nav {
            --width: 18rem;
        }
    }
  </style>
  <nav>
    <a href="/">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 356 558" fill="currentColor">
      <path class="st0" d="M177.4,74.2c-3.1,0-5.9,0.4-9.1,0.7v33.9c2.8,0.4,5.9,0.7,8.8,0.7s5.9-0.4,8.8-0.7V74.5   C182.9,74.2,180.1,74.2,177.4,74.2L177.4,74.2z"/>
      <path class="st0" d="M258.2,83.3l-1.8-2.4c-19.2-24.5-48.3-38.1-79.4-38.1s-59.9,14-79.4,38.1l-1.8,2.4H65.4l3.5,17.5h26.9l1.8,2.4   c19.2,24.1,48.3,38.1,79.4,38.1s59.9-14,79.4-38.1l1.8-2.4h26.9l3.5-17.5L258.2,83.3z M212.7,115.5c-11.2,5.2-23.4,8.1-35.7,8.1   c-24.5,0-48.6-10.5-65.4-31.5c8.4-10.5,18.9-18.6,30.1-23.8c11.2-5.2,23.4-8.1,35.7-8.1c24.5,0,48.6,10.5,65.4,31.5   C234.1,102.2,223.9,110.2,212.7,115.5z"/>
      <path class="st0" d="M333.1,18.9H316L269.8,245c-8.8,44.1-48,75.9-92.8,75.9s-84-31.9-92.8-75.6L37.7,18.9H20.6v382.5h52.5v139.3   h207.2V401.4h52.5V18.9L333.1,18.9z M263.1,523.6H90.9V401.8h172.2L263.1,523.6z M315.6,383.9H38.4V108.1l28.7,140.4   c10.5,52.1,57.1,89.6,109.9,89.6c52.9,0,99.4-37.8,109.9-89.6l28.7-140.4L315.6,383.9z"/>
  </svg>
      Vigilancia Masiva Transfronteriza
    </a>
    <div>
      <slot></slot>
    </div>
    <button role="search">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 16 16"
      >
        <path
          d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"
        />
      </svg>
    </button>
    <button role="button">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 16 16"
        fill="currentColor"
      >
        <path
          d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"
        />
      </svg>
    </button>
  </nav>
`

customElements.define(
  'ladonacion-header',
  class extends HTMLElement {
    constructor() {
      super()

      const root = this.attachShadow({
        mode: 'open',
      })
      root.append(template.content.cloneNode(true))
    }

    open() {
      this.shadowRoot.querySelector('nav').classList.add('backdrop')
      this.classList.add('expanded')
      document.body.lock()
    }

    close() {
      this.shadowRoot.querySelector('div').addEventListener(
        'transitionend',
        () => {
          if (!this.classList.contains('expanded')) {
            this.shadowRoot.querySelector('nav').classList.remove('backdrop')
          }
        },
        { once: true }
      )

      this.classList.remove('expanded')
      document.body.unlock()
    }

    connectedCallback() {
      const nav = this.shadowRoot.querySelector('nav')
      const closeButton = nav.querySelector('button[role=button]')
      const searchButton = nav.querySelector('button[role=search]')

      ;[
        ...this.querySelectorAll('a'),
        this.shadowRoot.querySelector('a'),
      ].forEach((link) => {
        link.addEventListener('click', () => {
          this.close()
          window.scrollTo({ top: 0 })
        })
      })

      nav.addEventListener(
        'click',
        (event) => event.target === nav && this.close()
      )

      closeButton.addEventListener('click', () => {
        this.classList.contains('expanded') ? this.close() : this.open()
      })

      searchButton.addEventListener('click', () => {
        if (!document.querySelector('ladonacion-search')) {
          this.close()
          document.body.append(document.createElement('ladonacion-search'))
        }
      })

      this.listener = (event) => {
        if (event.key !== 'Escape') {
          return
        }

        if (this.classList.contains('expanded')) {
          this.close()
          event.stopPropagation()
        }
      }

      document.addEventListener('scroll', () => {
        nav.classList.toggle(
          'shadow',
          window.pageYOffset > this.getAttribute('scrollOffset')
        )
      })

      document.addEventListener('activate', (event) => {
        const path = window.location.pathname.split('/')[1]
        this.querySelectorAll('a[href]').forEach((a) => {
          const section = new URL(a.href).pathname.split('/')[1]
          a.classList.toggle('active', section === path)
        })
      })

      document.addEventListener('keydown', this.listener, { capture: true })
    }
  }
)
