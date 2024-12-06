require('json5/lib/register')

module.exports = {
  cache: {
    path: `${__dirname}/../tmp/cache`,
    ttl: 1000 * 60 * 60 * 24 * 365, // 365 days (in milliseconds)
  },
  fetch: {
    timeout: 30000,
    headers: {
      'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36',
      'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8',
      'Accept-Language': 'en-US,en;q=0.5',
      'Connection': 'keep-alive',
      'Upgrade-Insecure-Requests': '1',
      'Cache-Control': 'max-age=0',
      'TE': 'Trailers'
    },
    waitUntil: 'networkidle0'
  },
  subschemas: [
    require(`${__dirname}/../data/schemas/subschemas/country.json5`),
    require(`${__dirname}/../data/schemas/subschemas/language.json5`),
    require(`${__dirname}/../data/schemas/subschemas/gender.json5`),
    require(`${__dirname}/../data/schemas/subschemas/url.json5`),
    require(`${__dirname}/../data/schemas/subschemas/wikipedia.json5`),
    require(`${__dirname}/../data/schemas/subschemas/relation.json5`),
    require(`${__dirname}/../data/schemas/subschemas/picture.json5`),
  ],
  documents: [
    {
      name: 'sources',
      data: require(`${__dirname}/../data/sources.json5`),
      schema: require(`${__dirname}/../data/schemas/sources.json5`),
    },
    {
      name: 'relations',
      data: require(`${__dirname}/../data/relations.json5`),
      schema: require(`${__dirname}/../data/schemas/relations.json5`),
    },
    {
      name: 'documents',
      data: require(`${__dirname}/../data/documents.json5`),
      schema: require(`${__dirname}/../data/schemas/documents.json5`),
    },
    {
      name: 'entities',
      data: require(`${__dirname}/../data/entities.json5`),
      schema: require(`${__dirname}/../data/schemas/entities.json5`),
    },
    {
      name: 'places',
      data: require(`${__dirname}/../data/places.json5`),
      schema: require(`${__dirname}/../data/schemas/places.json5`),
    },
    {
      name: 'events',
      data: require(`${__dirname}/../data/events.json5`),
      schema: require(`${__dirname}/../data/schemas/events.json5`),
    },
    {
      name: 'persons',
      data: require(`${__dirname}/../data/persons.json5`),
      schema: require(`${__dirname}/../data/schemas/persons.json5`),
    },
    {
      name: 'articles',
      data: require(`${__dirname}/../data/articles.json5`),
      schema: require(`${__dirname}/../data/schemas/articles.json5`),
    },
  ],
  payloads: {
    elconfidencial: `
      document.querySelector('body').innerHTML += \`
        <style>
          body.tp-modal-open { overflow: scroll !important; }
          div.tp-modal, div.tp-backdrop, div.skinRevenue { display: none; }
        </style>\`
      setTimeout(() => {
        if (document.querySelector('button#didomi-notice-agree-button')) {
          document.querySelector('button#didomi-notice-agree-button').click()
        }
      }, 100)
    `,
    telegraph: `
      document.querySelector('body').innerHTML += \`
      <style>
        div#advert_tmg_ban, div.martech-hard-paywall-overlay { display: none; }
        div.martech-modal-component-overlay { display: none; }
        body.martech-overlay-not-visible { overflow: scroll !important; }
      </style>\`
      document.querySelectorAll('iframe').forEach(iframe => iframe.style.display = 'none')
      document.querySelector('div#sp_message_container_330645').style.display = 'none'
    `,
    elespanol: `
      document.querySelector('button#didomi-notice-agree-button').click()
      document.querySelector('div#megasuperior').style.display = 'none'
    `,
    larazon: `
      document.querySelector('button#didomi-notice-agree-button').click()
      document.querySelectorAll('.ad-background').forEach(ad => ad.remove())
      document.querySelectorAll('.content__ad').forEach(ad => ad.setAttribute('hidden', true))
    `,
    lesoir: `
      document.querySelector('button#didomi-notice-agree-button').click()
    `,
    dw: `
      document.querySelectorAll('.adsContainer').forEach(ad => ad.setAttribute('hidden', true))
      document.querySelectorAll('iframe').forEach(iframe => iframe.setAttribute('hidden', true))
    `,
    thetimes: `
      document.querySelectorAll('iframe').forEach(iframe => iframe.style.display = 'none')
      document.querySelector('div#paywall-portal-page-footer').setAttribute('hidden', true)
      document.querySelector('html').classList.remove('sp-message-open')
    `,
    bbc: `
      document.querySelector('button').click()
      document.querySelectorAll('*[aria-label*=Publicidad]').forEach(e => e.setAttribute('hidden', true))
    `,
    sueddeutsche: `
      document.querySelectorAll('iframe').forEach(iframe => iframe.style.display = 'none')
      document.querySelector('html').classList.remove('sp-message-open')
      document.querySelector('div[id^=sp_message_container').remove()
    `,
    tagesanzeiger: `
      if (document.querySelector('button[data-context=YES]')) {
        document.querySelector('button[data-context=YES]').click()
      }
      document.querySelector('div[class^=PageLayout_topaddesktop]').style.display = 'none'
      document.querySelectorAll('div[class^=Ad_]').forEach(i => i.style.display = 'none')
      document.querySelector('body').classList.remove('h-disable-scroll')
      document.querySelector('header').innerHTML += \`
        <style>
          div.o-overlay__horizontal-alignment { display: none }
          div.o-tamedia-wrapper { display: none }
        </style>\`
    `,
    lavanguardia: `
      document.querySelector('button#didomi-notice-agree-button').click()
      document.querySelector('header').innerHTML += \`
        <style>
          body { overflow: scroll !important; position: relative !important }
          div.ev-open-modal-paywall-REQUIRE_LOGIN { display: none !important }
        </style>\`
    `,
    vozpopuli: `
      document.querySelector('div[class$=-summary-buttons] button[mode=primary]').click()
    `,
    eldiario: `
      document.querySelector('a.sibbo-cmp-button[data-accept-all]').click()
    `,
    propublica: `
      // Remover banners de suscripción y newsletters
      document.querySelectorAll('.subscription-prompt, .newsletter-signup').forEach(el => el.remove());
      
      // Añadir estilos para ocultar elementos molestos
      document.querySelector('body').innerHTML += \`
        <style>
          .big-story-prompt { display: none !important; }
          .recaptcha-wrapper { display: none !important; }
          .donate-banner { display: none !important; }
          .newsletter-signup-module { display: none !important; }
          .site-navigation { position: static !important; }
          .modal-window { display: none !important; }
          body { overflow: auto !important; }
        </style>\`

      // Remover overlay de reCAPTCHA
      document.querySelectorAll('iframe[src*="recaptcha"]').forEach(el => el.remove());
    `,
    nius: `
      document.querySelector('button#didomi-notice-agree-button').click()
    `,
    tdg: `
      document.querySelector('button[data-qa=oil-YesButton]').click()
      if (document.querySelector('button[data-context=YES]')) {
        document.querySelector('button[data-context=YES]').click()
      }
      document.querySelector('div[class^=PageLayout_topaddesktop]').style.display = 'none'
      document.querySelectorAll('div[class^=Ad_]').forEach(i => i.style.display = 'none')
      document.querySelector('html').classList.remove('h-disable-scroll')
      document.querySelector('header').innerHTML += \`
        <style>
          div.o-overlay__horizontal-alignment { display: none }
          div.o-tamedia-wrapper { display: none }
        </style>\`
    `,
    huffingtonpost: `
      document.querySelector('button#didomi-notice-agree-button').click()
      document.querySelector('body').innerHTML += \`
        <style>
          div.newsletter-toaster__inner-container { display: none; }
          div.body-splash { display: none; }
        </style>\`
    `,
    elpais: `
      document.querySelector('button#didomi-notice-agree-button').click()
      document.querySelector('header').innerHTML += \`
        <style>
          div#paywallOfferSmall { display: none; }
        </style>\`
    `,
    elmundo: `
      document.querySelector('button#didomi-notice-agree-button').click()
    `,
    rtve: `
      document.querySelector('div#auxGPDR button#OK').click()
    `,
    abc: `
      document.querySelector('button#didomi-notice-agree-button').click()
    `,
    '20minutos': `
      document.querySelector('button#didomi-notice-agree-button').click()
      document.querySelectorAll('div[id^=axds]').forEach(div => div.style.display = 'none')
    `,
    bild: `
      document.querySelectorAll('iframe').forEach(iframe => iframe.style.display = 'none')
      document.querySelector('html').style.position = 'relative !important'
      document.querySelector('html').style.overflow = 'scroll !important'
      document.querySelector('div[id^=sp_message_container').remove()
      document.querySelector('html').classList.remove('sp-message-open')
    `,
    ft: `
      if (document.querySelector('a.o-cookie-message__button')) {
        document.querySelector('a.o-cookie-message__button').click()
      }
    `,
    lastampa: `
      if (document.querySelector('button.iubenda-cs-accept-btn').click()) {
        document.querySelector('button.iubenda-cs-accept-btn').click()
      }
    `,
    casareal: ``,
    boe: ``,
    nyt: `
      // Remover elementos innecesarios
      document.querySelector('div#wm-ipp-base')?.remove();
      document.querySelector('div#donato')?.remove();
      document.querySelector('div#top-wrapper')?.remove();
      document.querySelector('div#bottom-wrapper')?.remove();
      
      // Estilos básicos
      document.body.style.overflow = 'auto';
      document.querySelector('article').style.maxWidth = '1200px';
      document.querySelector('article').style.margin = '0 auto';
      document.querySelector('article').style.padding = '20px';
    `,
    okdiario: `
      if (document.querySelector('button#didomi-notice-agree-button')) {
        document.querySelector('button#didomi-notice-agree-button').click()
      }
      if (document.querySelector('button#onesignal-slidedown-cancel-button')) {
        document.querySelector('button#onesignal-slidedown-cancel-button').click()
      }
      document.querySelectorAll('*[id^=google_ads]').forEach(element => element.style.display = 'none')
      document.querySelectorAll('iframe').forEach(element => element.style.display = 'none')
      document.querySelector('div#tbl-next-up').style.display = 'none'
    `,
    raichali: `
      // Eliminar columna lateral y otros divs
      document.querySelector('.tdi_78')?.remove();
      document.querySelector('#tdi_90')?.remove();
      document.querySelector('#tdi_96')?.remove();
      document.querySelector('#tdi_109')?.remove();
      
      // Ajustar ancho de la columna principal
      const mainColumn = document.querySelector('.tdi_72');
      if (mainColumn) {
        mainColumn.style.setProperty('width', '80%', 'important');
        mainColumn.style.setProperty('margin', '0 auto', 'important');
      }
      
      // Ajustar tamaño de texto
      document.querySelectorAll('p').forEach(element => {
        element.style.setProperty('font-size', '2em', 'important');
      });
      
      // Ajustar line-height en el div específico
      document.querySelector('.tdi_130 p')?.style.setProperty('line-height', 'normal', 'important');
      
      // Ajustar tamaño de listas con un tamaño más pequeño
      document.querySelectorAll('ol, li').forEach(element => {
        element.style.setProperty('font-size', '1.4em', 'important');
      });
      
      // Ocultar los thumbnails de video que no cargan correctamente
      document.querySelectorAll('.wp-block-video').forEach(video => {
        video.style.display = 'none';
      });
    `,
    border_report: `
      // Remover elementos no deseados
      const elementsToRemove = [
        'div#wm-ipp-base',
            'div#donato',
            'aside.ad-unit',
            'aside.social-links',
            '.post-top-stories',
            '.post-more-stories',
            '#ns-article-bin-10',
            '#ns-article-bin-6',
            '#ns-article-bin-9',
            '#ns-video-bin-',
            '.ns-block-embed-anvato'
          ];
          
          elementsToRemove.forEach(selector => {
            document.querySelectorAll(selector).forEach(el => {
              console.log('Eliminando elemento:', selector);
              el.remove();
            });
          });
    `,
    texastribune: `
      document.querySelectorAll([
        '.c-plugin',
        '.c-story-bottom',
        '.grid_separator',
        '.has-xl-btm-marg:not(#main-tt-content):not(.l-container--1):not(.c-image):not(.has-page-padding-at-bp-l):not(.c-author-info__container)'
      ].join(',')).forEach(element => element.remove());
    `,
    elpaso_times: `
      // Remover elementos no deseados
      const elementsToRemove = [
        // Publicidad y elementos promocionales
        'div[data-module-name="advertisement"]',
        'aside[aria-label="advertisement"]',
        'div[id^="ad-slot"]',
        'div.gnt_em_vp__tp',
        'div.gnt_rr', // barra lateral derecha
        'div[data-c-name="newsletterSignup"]',
        'div.gnt_xbr',
        // Footer y elementos relacionados
        'footer.gnt_ft',
        'div.gnt_em_vp__tp',
        // Elementos de suscripción
        'div[data-c-name="subscription"]',
        'div.gnt_tb', // top banner
        'div.gnt_em_fb', // feedback banner
        // iframes y otros elementos publicitarios
        'iframe',
        'div[id^="gnt_em_vp"]', // video player container
        'div[class*="partner-placement"]',
        'div[data-gh-ad]',
        'aside.gnt_em'
      ];
      
      // Remover elementos
      elementsToRemove.forEach(selector => {
        document.querySelectorAll(selector).forEach(el => el.remove());
      });

      // Centrar la sección principal del contenido
      const mainContent = document.querySelector('article.gnt_pr');
      if (mainContent) {
        mainContent.style.float = 'none';
        mainContent.style.margin = '0 auto';
        mainContent.style.width = '80%';
      }    
    `,
    eluniversal: `
      // Remover elementos no deseados
      const elementsToRemove = [
        // Publicidad
        'div.cookies-message',
        'div[class*="dfp-tag-wrapper-container"]',
        'div[class*="ad-"]',
        'div[class*="google-ads"]',
        'div.sc__recommend',
        'aside.sidebar',
        'div[class*="si__body"]',
        'div.ELU_VIDEO',
        'div[class*="wrapper_box"]',
        'div[class*="sc__google-news"]',
        'div[class*="sc-tags"]',
        'div[class*="coupons__container"]',
        'section.short_reviews',
        '[class*="paywallContentTitle"]',
        'footer',
        'iframe',
        'div.row',
        'div.uniplust1',
        'div[id*="adWrapper"]',
        'div[id*="taboola"]',
      ];
      
      // Remover elementos
      elementsToRemove.forEach(selector => {
        document.querySelectorAll(selector).forEach(el => el.remove());
      });

      // Remover párrafos que contienen "Lee también:"
      document.querySelectorAll('p').forEach(p => {
        const strongText = p.querySelector('strong')?.textContent;
        if (strongText && strongText.includes('Lee también:')) {
          p.remove();
        }
      });

      // Cargar imágenes con lazyload inmediatamente
      document.querySelectorAll('img.lazyload').forEach(img => {
        // Transferir el src de data-src
        if (img.dataset.src) {
          img.src = img.dataset.src;
        }
        // Transferir srcset si existe
        if (img.dataset.srcset) {
          img.srcset = img.dataset.srcset;
        }
        // Remover clases de lazyload
        img.classList.remove('lazyload');
        img.classList.remove('lazy');
        // Asegurar que la imagen sea visible
        img.style.display = 'block';
        img.style.visibility = 'visible';
        img.loading = 'eager';
      });      
    `,
    elheraldodechihuahua: `
      // Remover elementos no deseados
      const elementsToRemove = [
            'div#oemaceptacion',
            'div.advertisement',
            'div#smart-video',
            'div.anuncio',
            'div#google-news',
            'div.tags-list',
            'div.advertisment content-banner hidden-m ',
            'div#related-wrap',
            'div#related-label',
            'div#notas-relacionadas',
            'div.fb-comments',
            'div.clasificados-oem',
            '.morestories',
            'div.local_chihuahua',
            'div.local_juarez',
            'div.local_parral',
            'div.policiaca',
            'div#affix-share',
            'aside.col-sm-4',
            'footer',
            'div#taboola-below-article-thumbnails'
          ];
          
          elementsToRemove.forEach(selector => {
            document.querySelectorAll(selector).forEach(el => {
              el.remove();
            });
          });

          // Centrar la sección principal del contenido
          const mainContent = document.querySelector('section.col-sm-8');
          if (mainContent) {
            mainContent.style.float = 'none';
            mainContent.style.margin = '0 auto';
            mainContent.style.width = '80%';
          }
    `,
    bcjb: `
      // Remover elementos no deseados
      const elementsToRemove = [
        'div#wm-ipp-base',
        'div#donato',
        'iframe',
        'div[class^="indexstyled__MediaWrapper"]'
          ];
          
          elementsToRemove.forEach(selector => {
            document.querySelectorAll(selector).forEach(el => {
              el.remove();
            });
          });  
    `,
    noroeste: `
      // Remover elementos de Web Archive
      document.querySelector('div#wm-ipp-base')?.remove();
      document.querySelector('div#donato')?.remove();
      document.querySelector('div#wm-ipp-print')?.remove();
      document.querySelector('div#wm-ipp-inside')?.remove();
      document.querySelector('div#wm-ipp-sparkline')?.remove();
      document.querySelector('div#wm-ipp-content')?.remove();

      // Remover elementos de navegación y compartir
      document.querySelectorAll([
        '.comentarios',
      ].join(',')).forEach(element => element.remove());

      // Ajustar estilos para mejor lectura
      document.querySelector('body').innerHTML += \`
        <style>
          body { max-width: 1200px; margin: 0 auto; padding: 20px; }
          img { max-width: 100%; height: auto; }
          .article-content { font-size: 1.2em; line-height: 1.6; }
        </style>\`
    `,
  },
}
