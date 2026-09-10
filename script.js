/* ============================================================
   FRUTICHOC — datos y lógica
   ============================================================
   CARTA: transcrita del menú digital que el propio local publica en
   MeniuApp (menu.meniuapp.com/68a4e78c53c164588af89ad5), consultado el
   10-09-2026. Los precios son REALES, ninguno inventado.

   Las descripciones vienen truncadas desde ese menú (el servidor las
   corta con "..."), así que aquí solo se deja la parte confirmada y NO
   se completa la frase inventando el resto.
   ============================================================ */

const MENU = {
  desayuno: {
    label: 'Desayuno & Once',
    items: [
      { n:'Huevos revueltos',        d:'Suaves huevos revueltos',                       p:7990 },
      { n:'Huevos jamón & queso',    d:'Paila de huevos',                               p:9990 },
      { n:'Omelette',                d:'Con jamón, queso fundido y tomate',             p:10820 },
      { n:'Sándwich jamón & queso',  d:'En pan de molde',                               p:9490 },
      { n:'Tostadas con palta',      d:'Dos tostadas crujientes',                       p:8990 },
      { n:'Torta',                   d:'Incluye un trozo de torta',                     p:10990 },
    ]
  },
  bolleria: {
    label: 'Bollería y Pastelería',
    items: [
      { n:'Torta hoja manjar',       d:'Láminas de hojarasca con capas de dulce',       p:4500 },
      { n:'Muffin Nutella',          d:'Muffin de vainilla, suave y esponjoso',         p:2890 },
      { n:'Muffin arándanos',        d:'Muffin de vainilla con arándanos',              p:2590 },
      { n:'Muffin zanahoria nuez',   d:'Suave y húmedo muffin de zanahoria',            p:2590 },
      { n:'Queques',                 d:'Queques artesanales, varios sabores',           p:2490 },
    ]
  },
  waffles: {
    label: 'Waffles',
    items: [
      { n:'Manjar, fruta + helado',  d:'Waffle recién preparado con base de manjar',    p:8680 },
      { n:'Nutella, fruta + helado', d:'Waffle recién preparado con base de Nutella',   p:9890 },
      { n:'Manjar + helado',         d:'Waffle con base de manjar',                     p:6690 },
      { n:'Nutella + helado',        d:'Waffle con base de Nutella',                    p:7690 },
      { n:'Manjar + fruta',          d:'Waffle con base de manjar',                     p:6730 },
      { n:'Nutella + fruta',         d:'Waffle con base de Nutella',                    p:7990 },
      { n:'Waffle 4 estaciones',     d:'Nuestro waffle dividido en cuatro',             p:7660 },
    ]
  },
  crepesDulces: {
    label: 'Crepes Dulces',
    items: [
      { n:'Manjar, fruta + helado',  d:'Crepe con base de manjar',                      p:8590 },
      { n:'Nutella, fruta + helado', d:'Crepe con base de Nutella',                     p:9890 },
      { n:'Manjar + helado',         d:'Crepe con base de manjar',                      p:6190 },
      { n:'Nutella + helado',        d:'Crepe con base de Nutella',                     p:6990 },
      { n:'Manjar + fruta',          d:'Crepe con base de manjar',                      p:6290 },
      { n:'Nutella + fruta',         d:'Crepe con base de Nutella',                      p:7590 },
      { n:'Base manjar',             d:'Crepe con base de manjar y azúcar flor',        p:3990 },
      { n:'Base Nutella',            d:'Crepe con base de Nutella y azúcar flor',       p:4190 },
      { n:'Manjar kids',             d:'Crepe con base de manjar',                      p:6990 },
      { n:'Nutella kids',            d:'Crepe con base de Nutella',                     p:7790 },
    ]
  },
  crepesSalados: {
    label: 'Crepes Salados',
    items: [
      { n:'Napolitano',              d:'Relleno con queso mantecoso',                   p:10790 },
      { n:'Philadelphia',            d:'Relleno con queso crema',                       p:9990 },
      { n:'Canadiense',              d:'Relleno con queso fresco',                      p:9990 },
      { n:'Italiano',                d:'Relleno con jamón planchado',                   p:9990 },
    ]
  },
  sandwich: {
    label: 'Sándwich',
    items: [
      { n:'Húngaro',                 d:'Pan ciabatta relleno con salame y queso',       p:7190 },
      { n:'Romano',                  d:'Pan de molde dorado a la plancha, con jamón',   p:3890 },
      { n:'Napolitano',              d:'Pan ciabatta relleno con jamón pierna',         p:6390 },
      { n:'Italiano',                d:'Pan artesano con jamón planchado',              p:6990 },
      { n:'Mediterráneo',            d:'Pan artesano relleno con jamón pierna',         p:8890 },
    ]
  },
  helados: {
    label: 'Helados',
    items: [
      { n:'Cono simple',             d:'Cono de galleta artesanal con una bola',        p:2890 },
      { n:'Cono doble',              d:'Cono de galleta artesanal con dos bolas',       p:5370 },
      { n:'Copa payaso',             d:'Canastillo artesanal con dos bolas',            p:5900 },
      { n:'Copa mix helado',         d:'Mezcla de frutas con helado',                   p:5190 },
      { n:'Banana split',            d:'Plátano con dos bolas de helado',               p:7780 },
      { n:'Brownie con helado',      d:'Brownie tibio con una bola de helado',          p:5790 },
      { n:'Canastillo',              d:'Canastillo artesanal con una bola',             p:4620 },
    ]
  },
  beber: {
    label: 'Para Beber',
    items: [
      { n:'Jugo natural',            d:'Jugos 100% naturales preparados al momento',    p:3990 },
      { n:'Naranja exprimido',       d:'Jugo de naranja recién exprimido',              p:4840 },
      { n:'Limonada',                d:'Limonada preparada al momento',                 p:3990 },
      { n:'Batido',                  d:'Batidos cremosos preparados con leche',         p:4570 },
      { n:'Café helado',             d:'Café de selección con dos scoops',              p:7120 },
      { n:'Milkshake',               d:'Batido cremoso preparado con leche',            p:6990 },
      { n:'Milkshake Oreo',          d:'Batido cremoso con Oreo',                       p:7490 },
      { n:'Cielo shake',             d:'Mezcla suave y cremosa de helado',              p:6990, img:'fotos/cielo-shake.jpg' },
      { n:'Milkshake Super 8',       d:'Batido cremoso con Super 8',                    p:7990 },
      { n:'Agua mineral',            d:'600 ml',                                        p:1850 },
      { n:'Bebida',                  d:'350 ml',                                        p:1990 },
      { n:'Té Twinings',             d:'',                                              p:1700 },
      { n:'Espresso',                d:'',                                              p:2330 },
      { n:'Café mediano',            d:'',                                              p:2740 },
      { n:'Café grande',             d:'',                                              p:4120 },
    ]
  },
  disfruta: {
    label: 'Disfruta',
    items: [
      { n:'Vaso chocolate',          d:'Elige una o más frutas cubiertas con chocolate', p:4900 },
      { n:'Vaso manjar',             d:'Elige una o más frutas con manjar',              p:6190 },
      { n:'Vaso Nutella',            d:'Elige una o más frutas con Nutella',             p:7990 },
      { n:'Fondue',                  d:'Chocolate derretido para compartir',             p:17290, img:'fotos/carro-abierto.jpg' },
      { n:'Fetuccini a la Nutella',  d:'Fetuccini de fina masa de crepe',                p:5490 },
    ]
  }
};

const money = n => '$' + n.toLocaleString('es-CL');

/* ---------- RENDER DE LA CARTA ---------- */
const tabsEl   = document.getElementById('menuTabs');
const panelsEl = document.getElementById('menuPanels');

Object.keys(MENU).forEach((key, i) => {
  const tab = document.createElement('button');
  tab.className = 'menu-tab' + (i === 0 ? ' active' : '');
  tab.type = 'button';
  tab.textContent = MENU[key].label;
  tab.dataset.key = key;
  tab.setAttribute('role', 'tab');
  tab.setAttribute('aria-selected', i === 0 ? 'true' : 'false');
  tab.addEventListener('click', () => showTab(key));
  tabsEl.appendChild(tab);

  const panel = document.createElement('div');
  panel.className = 'menu-panel' + (i === 0 ? ' active' : '');
  panel.id = 'panel-' + key;

  const grid = document.createElement('div');
  grid.className = 'menu-grid';

  MENU[key].items.forEach(item => {
    const row = document.createElement('div');
    row.className = 'menu-item reveal';

    if (item.img) {
      const foto = document.createElement('div');
      foto.className = 'menu-item-photo';
      const im = document.createElement('img');
      im.src = item.img;
      im.alt = item.n;
      im.loading = 'lazy';
      im.style.cssText = 'width:58px;height:58px;object-fit:cover;border-radius:12px;';
      foto.appendChild(im);
      row.appendChild(foto);
    }

    const texto = document.createElement('div');
    texto.className = 'menu-item-text';

    const nombre = document.createElement('span');
    nombre.className = 'name';
    nombre.textContent = item.n;
    texto.appendChild(nombre);

    if (item.d) {
      const desc = document.createElement('div');
      desc.className = 'desc';
      desc.textContent = item.d;
      texto.appendChild(desc);
    }

    const precio = document.createElement('div');
    precio.className = 'price';
    precio.textContent = money(item.p);

    row.appendChild(texto);
    row.appendChild(precio);
    grid.appendChild(row);
  });

  panel.appendChild(grid);
  panelsEl.appendChild(panel);
});

function showTab(key) {
  document.querySelectorAll('.menu-tab').forEach(t => {
    const activo = t.dataset.key === key;
    t.classList.toggle('active', activo);
    t.setAttribute('aria-selected', activo ? 'true' : 'false');
  });
  document.querySelectorAll('.menu-panel').forEach(p => {
    p.classList.toggle('active', p.id === 'panel-' + key);
  });
  initScrollReveal();
}

/* ---------- NAVEGACIÓN POR PESTAÑAS (SPA) ---------- */
const navLinks = document.getElementById('navLinks');

function goToTab(tabId) {
  document.querySelectorAll('.tab-panel').forEach(p => {
    p.classList.toggle('active', p.dataset.tabPanel === tabId);
  });
  document.querySelectorAll('.nav-link').forEach(l => {
    l.classList.toggle('active', l.dataset.tab === tabId);
  });
  navLinks.classList.remove('open');
  document.getElementById('navToggle').setAttribute('aria-expanded', 'false');
  window.scrollTo({ top: 0, behavior: 'smooth' });
  initScrollReveal();
}

document.querySelectorAll('[data-tab]').forEach(el => {
  el.addEventListener('click', e => {
    e.preventDefault();
    goToTab(el.dataset.tab);
  });
});

document.getElementById('navToggle').addEventListener('click', function () {
  const abierto = navLinks.classList.toggle('open');
  this.setAttribute('aria-expanded', abierto ? 'true' : 'false');
});

/* ---------- INDICADOR ABIERTO / CERRADO ----------
   ⚠️ Google solo confirma la hora de APERTURA (10:00). El cierre a las
   22:00 viene de un agregador externo y NO está confirmado día por día.
   Se asume 10:00–22:00 todos los días como estimación, y así se declara
   en la pestaña Visítanos. CONFIRMAR CON EL LOCAL antes de entregar. */
const APERTURA = 10 * 60;   // 10:00
const CIERRE   = 22 * 60;   // 22:00

function actualizarEstado(dotId, textId) {
  const dot  = document.getElementById(dotId);
  const text = document.getElementById(textId);
  if (!dot || !text) return;

  const ahora   = new Date();
  const minutos = ahora.getHours() * 60 + ahora.getMinutes();
  const abierto = minutos >= APERTURA && minutos < CIERRE;

  text.textContent = abierto ? 'Abierto ahora' : 'Cerrado ahora';
  dot.classList.toggle('closed', !abierto);
}

actualizarEstado('statusDot', 'statusText');
actualizarEstado('statusDot2', 'statusText2');

/* ---------- SCROLL REVEAL (con red de seguridad) ---------- */
function initScrollReveal() {
  const els = document.querySelectorAll('.reveal:not(.in)');
  if (!('IntersectionObserver' in window)) {
    els.forEach(el => el.classList.add('in'));
    return;
  }
  const io = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in');
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

  els.forEach((el, i) => {
    el.style.transitionDelay = (Math.min(i % 6, 6) * 55) + 'ms';
    io.observe(el);
  });

  // Red de seguridad: si el observer no dispara, se muestra igual.
  setTimeout(() => {
    document.querySelectorAll('.reveal:not(.in)').forEach(el => el.classList.add('in'));
  }, 1200);
}
initScrollReveal();

/* ---------- PANTALLA DE CARGA (rápida, <1s) ---------- */
window.addEventListener('load', () => {
  setTimeout(() => document.getElementById('loader').classList.add('done'), 320);
});
