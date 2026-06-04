window.addEventListener('message', function(e) {
  if (e.data && e.data.type === 'setLang' && LANGS[e.data.lang]) {
    const lang = e.data.lang;
    // Arabic en andere talen die grond.html niet kent, vallen terug op Engels
    const safeLang = LANGS[lang] ? lang : 'en';
    document.querySelectorAll('.lang-btn').forEach(b =>
      b.classList.toggle('active', b.dataset.lang === safeLang)
    );
    setLang(safeLang);
  }
});
  
function render(key) {
  // Volledig scherm voor grond-pagina
  const pageWrap = document.querySelector('.page-wrap');
  const sidebar  = document.getElementById('sidebar');
  const twoCol   = document.querySelector('.two-col');

  if (key === 'grond') {
    pageWrap.style.maxWidth  = '100%';
    pageWrap.style.padding   = '0';
    twoCol.style.display     = 'block';
    sidebar.style.display    = 'none';
  } else {
    pageWrap.style.maxWidth  = '';
    pageWrap.style.padding   = '';
    twoCol.style.display     = '';
    sidebar.style.display    = '';
  }

  const fn = PAGES[key];
  const noticeKey = `gb_notice_${LANG}`;
  const noticeSeen = sessionStorage.getItem(noticeKey);
  const notice = (LANG !== 'nl' && !noticeSeen)
    ? `<div class="translation-notice" id="translationNotice">
        ⚠ ${t('translation_notice')}
        <button onclick="dismissNotice()" style="margin-left:auto;background:none;border:none;cursor:pointer;font-size:1rem;color:var(--muted);">✕</button>
       </div>`
    : '';

  document.getElementById('main').innerHTML = fn
    ? notice + fn()
    : '<section class="section"><p>404</p></section>';

  document.getElementById('sidebar').innerHTML = sidebarHTML();

  document.querySelectorAll('nav a[data-page]').forEach(a =>
    a.classList.toggle('active', a.dataset.page===key)
  );

  const pageKey = {
    agenda:'nav_agenda',
    geschiedenis:'nav_gesch',
    samenwerking:'nav_samen',
    grond:'nav_grond',
    voorbij:'nav_voorbij',
    huren:'nav_huren',
    steunen:'nav_steunen',
    contact:'nav_contact'
  }[key];

  document.title = (t(pageKey)||key) + ' — ' + (t('hero_title')||'Goede Bijstand').replace('\n',' ');
}

function go(key) {
  render(key);
  document.getElementById('nav').scrollIntoView({behavior:'smooth', block:'start'});
}

/* ─── TRANSLATION NOTICE ─── */
function dismissNotice() {
  sessionStorage.setItem(`gb_notice_${LANG}`, '1');
  const el = document.getElementById('translationNotice');
  if (el) el.remove();
}
  
/* ─── GDPR ─── */
function gdprAccept() {
  localStorage.setItem('gb_gdpr', '1');
  document.getElementById('gdprOverlay').classList.add('hidden');
}

function showGdpr() {
  document.getElementById('gdprOverlay').classList.remove('hidden');
}
  
/* ─── INIT ─── */
(function init() {
  document.querySelectorAll('.lang-btn[data-lang]').forEach(button => {
    button.addEventListener('click', () => setLang(button.dataset.lang));
  });

  document.querySelectorAll('nav a[data-page]').forEach(link => {
    link.addEventListener('click', event => {
      event.preventDefault();
      go(link.dataset.page);
    });
  });

  const isRtl = LANGS[LANG]?.rtl === true;
  document.body.classList.toggle('rtl', isRtl);
  document.documentElement.setAttribute('dir', isRtl ? 'rtl' : 'ltr');
  document.documentElement.setAttribute('lang', LANG);

  document.querySelectorAll('.lang-btn').forEach(b =>
    b.classList.toggle('active', b.dataset.lang===LANG)
  );

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const v = t(el.dataset.i18n);
    if (v) el.innerHTML = v.replace(/\n/g,'<br>');
  });

  render('welkom');

  if (!localStorage.getItem('gb_gdpr')) showGdpr();
})();

function toggleTab(id) {
  ['kerkfabriek','parochieploeg','bijstandnight'].forEach(name => {
    const tab = document.getElementById('tab-' + name);
    const btn = document.getElementById('btn-' + name);
    if (!tab) return;

    const isTarget = name === id;
    const isOpen   = tab.style.display === 'block';

    tab.style.display = (isTarget && !isOpen) ? 'block' : 'none';

    if (btn) {
      btn.style.background = (isTarget && !isOpen) ? 'var(--stone-mid)' : 'var(--cream)';
      btn.style.color = (isTarget && !isOpen) ? 'var(--gold-lt)' : 'var(--stone-mid)';
    }
  });

  if (id === 'wereldwijd') {
    const tab    = document.getElementById('tab-wereldwijd');
    const iframe = document.getElementById('wereldwijd-iframe');
    const isNowOpen = tab.style.display === 'block';

    if (isNowOpen) {
      if (iframe && !iframe.src.includes('grond.html')) {
        iframe.src = 'grond.html';
      }

      tab.classList.add('tab-fullscreen');
      document.body.style.overflow = 'hidden';
    }
  }
}

function toggleFullscreen() {
  sluitWerelwijd();
}

function sluitWerelwijd() {
  const tab = document.getElementById('tab-wereldwijd');
  const btn = document.getElementById('btn-wereldwijd');

  tab.classList.remove('tab-fullscreen');
  tab.style.display = 'none';
  document.body.style.overflow = '';

  if (btn) {
    btn.style.background = 'var(--cream)';
    btn.style.color = 'var(--stone-mid)';
  }
}

function minimaliserKaart() {
  const iframe = document.getElementById('wereldwijd-iframe');
  const btnMin = document.getElementById('btn-minimaliseer');

  if (iframe) iframe.contentWindow.postMessage('minimaliserKaart', '*');
  if (btnMin) btnMin.style.display = 'none';
}

window.addEventListener('message', (e) => {
  if (e.data === 'kaartGemaximaliseerd') {
    // iframe meldt: kaart is max → niets nodig, tab is al fullscreen
  }

  if (e.data === 'kaartGeminimaliseerd') {
    const tab = document.getElementById('tab-wereldwijd');
    tab.classList.remove('tab-fullscreen');
    document.body.style.overflow = '';
    setTimeout(() => tab.scrollIntoView({ behavior: 'smooth', block: 'start' }), 50);
  }

  if (e.data === 'sluitWerelwijd') {
    sluitWerelwijd();
  }
}); 

function openFoto() {
  let overlay = document.getElementById('foto-overlay');

  if (!overlay) {
    overlay = document.createElement('div');
    overlay.id = 'foto-overlay';
    overlay.style.cssText = 'position:fixed;inset:0;z-index:10000;background:rgba(0,0,0,0.92);display:flex;align-items:center;justify-content:center;padding:1rem;cursor:zoom-out;';
    overlay.innerHTML = `
      <img src="goede_bijstand_welkomstfoto.jpg" style="max-width:100%;max-height:100%;object-fit:contain;border-radius:2px;">
      <button onclick="event.stopPropagation();sluitFoto()" style="position:absolute;top:1rem;right:1rem;background:none;border:none;color:white;font-size:2.5rem;cursor:pointer;line-height:1;">✕</button>
    `;
    overlay.onclick = sluitFoto;
    document.body.appendChild(overlay);
  } else {
    overlay.style.display = 'flex';
  }

  document.body.style.overflow = 'hidden';
}

function sluitFoto() {
  const overlay = document.getElementById('foto-overlay');
  if (overlay) overlay.style.display = 'none';
  document.body.style.overflow = '';
}

function syncGrondLang(iframe) {
  try {
    iframe.contentWindow.postMessage({ type: 'setLang', lang: LANG }, '*');
  } catch(e) {}
}

function openPaysages() {
  let overlay = document.getElementById('paysages-overlay');

  if (!overlay) {
    overlay = document.createElement('div');
    overlay.id = 'paysages-overlay';
    overlay.style.cssText = 'position:fixed;inset:0;z-index:10000;background:rgba(0,0,0,0.92);display:flex;align-items:center;justify-content:center;padding:1rem;cursor:zoom-out;';
    overlay.innerHTML = `
      <img src="Paysages.jpg" style="max-width:100%;max-height:100%;object-fit:contain;border-radius:2px;">
      <button onclick="event.stopPropagation();sluitPaysages()" style="position:absolute;top:1rem;right:1rem;background:none;border:none;color:white;font-size:2.5rem;cursor:pointer;line-height:1;">✕</button>
    `;
    overlay.onclick = sluitPaysages;
    document.body.appendChild(overlay);
  } else {
    overlay.style.display = 'flex';
  }

  document.body.style.overflow = 'hidden';
}

function sluitPaysages() {
  const overlay = document.getElementById('paysages-overlay');
  if (overlay) overlay.style.display = 'none';
  document.body.style.overflow = '';
}

function openGeenViering() {
  let overlay = document.getElementById('geenviering-overlay');

  if (!overlay) {
    overlay = document.createElement('div');
    overlay.id = 'geenviering-overlay';
    overlay.style.cssText = 'position:fixed;inset:0;z-index:10000;background:rgba(0,0,0,0.92);display:flex;align-items:center;justify-content:center;padding:1rem;cursor:zoom-out;';
    overlay.innerHTML = `
      <img src="affiche_geenviering_kleur.jpg" style="max-width:100%;max-height:100%;object-fit:contain;border-radius:2px;">
      <button onclick="event.stopPropagation();sluitGeenViering()" style="position:absolute;top:1rem;right:1rem;background:none;border:none;color:white;font-size:2.5rem;cursor:pointer;line-height:1;">✕</button>
    `;
    overlay.onclick = sluitGeenViering;
    document.body.appendChild(overlay);
  } else {
    overlay.style.display = 'flex';
  }

  document.body.style.overflow = 'hidden';
}

function sluitGeenViering() {
  const overlay = document.getElementById('geenviering-overlay');
  if (overlay) overlay.style.display = 'none';
  document.body.style.overflow = '';
}

Object.assign(window, {
  setLang,
  render,
  go,
  dismissNotice,
  gdprAccept,
  showGdpr,
  toggleTab,
  toggleFullscreen,
  sluitWerelwijd,
  minimaliserKaart,
  openFoto,
  sluitFoto,
  syncGrondLang,
  openPaysages,
  sluitPaysages,
  openGeenViering,
  sluitGeenViering
});
