class PDFViewer extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
      <style>
        :host {
          display: block;
          width: 100%;
          height: 100%;
          overflow: hidden;
        }
        iframe {
          width: 100%;
          height: 100%;
          border: none;
          display: block;
        }

        @media (max-width: 768px) {
          :host {
            min-height: 50vh;
          }
          iframe {
            height: 50vh;
            min-height: 50vh;
          }
        }
      </style>
      <iframe id="pdf-js-viewer"></iframe>
    `;
  }

  connectedCallback() {
    const pdfUrl = this.getAttribute('src');
    const iframe = this.shadowRoot.querySelector('iframe');
    
    const fullPdfUrl = window.location.origin + pdfUrl;
    iframe.src = `/assets/javascript/pdfjs/web/viewer.html?file=${encodeURIComponent(fullPdfUrl)}`;
    iframe.setAttribute('sandbox', 'allow-scripts allow-same-origin allow-forms allow-downloads allow-popups');
  }
}

customElements.define('pdf-viewer', PDFViewer);
