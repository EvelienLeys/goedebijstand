window.addEventListener('message', function(e) {
  if (e.data && e.data.type === 'setLang' && LANGS[e.data.lang]) {
    const lang = e.data.lang;
    const safeLang = LANGS[lang] ? lang : 'en';
    document.querySelectorAll('.lang-btn').forEach(b =>
      b.classList.toggle('active', b.dataset.lang === safeLang)
    );
    setLang(safeLang);
  }
});

function render(key) {
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
    a.classList.toggle('active', a.dataset.page === key)
  );

  const pageKey = {
    agenda:       'nav_agenda',
    geschiedenis: 'nav_gesch',
    samenwerking: 'nav_samen',
    grond:        'nav_grond',
    voorbij:      'nav_voorbij',
    huren:        'nav_huren',
    steunen:      'nav_steunen',
    contact:      'nav_contact'
  }[key];

  document.title = (t(pageKey) || key) + ' — ' + (t('hero_title') || 'Goede Bijstand').replace('\n', ' ');
}

function go(key) {
  history.pushState({ page: key }, '', '#' + key);
  render(key);
  document.getElementById('nav').scrollIntoView({ behavior: 'smooth', block: 'start' });
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
    b.classList.toggle('active', b.dataset.lang === LANG)
  );

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const v = t(el.dataset.i18n);
    if (v) el.innerHTML = v.replace(/\n/g, '<br>');
  });

  // Herstel pagina bij refresh of directe URL via hash
  const hash = location.hash.replace('#', '');
  const startPage = (hash && PAGES[hash]) ? hash : 'welkom';
  if (startPage !== 'welkom') {
    history.replaceState({ page: startPage }, '', '#' + startPage);
  } else {
    history.replaceState({ page: 'welkom' }, '', location.href.split('#')[0]);
  }
  render(startPage);

  // Terugknop / vooruitknop
  window.addEventListener('popstate', e => {
    const page = e.state?.page ?? 'welkom';
    render(page);
    document.getElementById('nav').scrollIntoView({ behavior: 'smooth', block: 'start' });
  });

  if (!localStorage.getItem('gb_gdpr')) showGdpr();
})();

/* ─── TABS (samenwerking) ─── */
function toggleTab(id) {
  ['kerkfabriek', 'parochieploeg', 'bijstandnight'].forEach(name => {
    const tab = document.getElementById('tab-' + name);
    const btn = document.getElementById('btn-' + name);
    if (!tab) return;

    const isTarget = name === id;
    const isOpen   = tab.style.display === 'block';

    tab.style.display = (isTarget && !isOpen) ? 'block' : 'none';

    if (btn) {
      btn.style.background = (isTarget && !isOpen) ? 'var(--stone-mid)' : 'var(--cream)';
      btn.style.color      = (isTarget && !isOpen) ? 'var(--gold-lt)'   : 'var(--stone-mid)';
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

/* ─── GRONDBIBLIOTHEEK ─── */
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
    btn.style.color      = 'var(--stone-mid)';
  }
}

function minimaliserKaart() {
  const iframe = document.getElementById('wereldwijd-iframe');
  const btnMin = document.getElementById('btn-minimaliseer');

  if (iframe) iframe.contentWindow.postMessage('minimaliserKaart', '*');
  if (btnMin) btnMin.style.display = 'none';
}

window.addEventListener('message', (e) => {
  if (e.data === 'kaartGemaximaliseerd') { /* tab is al fullscreen */ }

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

/* ─── FOTO OVERLAYS ─── */
function _makeOverlay(id, src, sluitFn) {
  let overlay = document.getElementById(id);
  if (!overlay) {
    overlay = document.createElement('div');
    overlay.id = id;
    overlay.style.cssText = 'position:fixed;inset:0;z-index:10000;background:rgba(0,0,0,0.92);display:flex;align-items:center;justify-content:center;padding:1rem;cursor:zoom-out;';
    overlay.innerHTML = `
      <img src="${src}" style="max-width:100%;max-height:100%;object-fit:contain;border-radius:2px;">
      <button onclick="event.stopPropagation();${sluitFn}()" style="position:absolute;top:1rem;right:1rem;background:none;border:none;color:white;font-size:2.5rem;cursor:pointer;line-height:1;">✕</button>
    `;
    overlay.onclick = window[sluitFn];
    document.body.appendChild(overlay);
  } else {
    overlay.style.display = 'flex';
  }
  document.body.style.overflow = 'hidden';
}

function _sluitOverlay(id) {
  const overlay = document.getElementById(id);
  if (overlay) overlay.style.display = 'none';
  document.body.style.overflow = '';
}

function openFoto()       { _makeOverlay('foto-overlay',       'goede_bijstand_welkomstfoto.jpg', 'sluitFoto'); }
function sluitFoto()      { _sluitOverlay('foto-overlay'); }

function openPaysages()   { _makeOverlay('paysages-overlay',   'Paysages.jpg',                   'sluitPaysages'); }
function sluitPaysages()  { _sluitOverlay('paysages-overlay'); }

function openGeenViering()  { _makeOverlay('geenviering-overlay', 'affiche_geenviering_kleur.jpg', 'sluitGeenViering'); }
function sluitGeenViering() { _sluitOverlay('geenviering-overlay'); }

function openTaize()  { _makeOverlay('taize-overlay', 'Taizé.png', 'sluitTaize'); }
function sluitTaize() { _sluitOverlay('taize-overlay'); }

function openLGBTQ()  { _makeOverlay('lgbtq-overlay', 'lgbtq.jpg', 'sluitLGBTQ'); }
function sluitLGBTQ() { _sluitOverlay('lgbtq-overlay'); }

function openOperette()  { _makeOverlay('operette-overlay', 'Promo_Operettetheater_2026.jpg', 'sluitOperette'); }
function sluitOperette() { _sluitOverlay('operette-overlay'); }

/* ─── GROND TAAL SYNC ─── */
function syncGrondLang(iframe) {
  try {
    iframe.contentWindow.postMessage({ type: 'setLang', lang: LANG }, '*');
  } catch(e) {}
}

/* ─── GLOBALS ─── */
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
  sluitGeenViering,
  openTaize,
  sluitTaize,
  openLGBTQ,
  sluitLGBTQ,
  openOperette,
  sluitOperette
});

/* ─── HELPENDE HANDEN FORMULIER ─── */
async function submitHanden() {
  const naam    = document.getElementById('hf_naam');
  const email   = document.getElementById('hf_email');
  const bericht = document.getElementById('hf_bericht');
  const gdpr    = document.getElementById('hf_gdpr');
  const fb      = document.getElementById('handenFeedback');
  const btn     = document.querySelector('.hf-submit');

  // Reset
  [naam, email, bericht].forEach(el => el?.classList.remove('hf-error'));
  fb.style.display = 'none';
  fb.className = 'hf-feedback';

  // Validatie
  let ok = true;
  if (!naam.value.trim())                                  { naam.classList.add('hf-error');  ok = false; }
  if (!email.value.trim() || !email.value.includes('@'))   { email.classList.add('hf-error'); ok = false; }
  if (!gdpr.checked)                                       { ok = false; }

  if (!ok) {
    fb.className = 'hf-feedback err';
    fb.textContent = t('handen_err_verplicht');
    fb.style.display = 'block';
    return;
  }

  // Beschikbaarheid samenvoegen
  const beschik = [...document.querySelectorAll('input[name="beschik"]:checked')]
    .map(cb => cb.value).join(', ') || '—';

  btn.disabled = true;
  btn.textContent = t('handen_bezig');

  try {
    const res = await fetch('https://formspree.io/f/xaqznkjd', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
      body: JSON.stringify({
        naam:        naam.value.trim(),
        email:       email.value.trim(),
        beschikbaar: beschik,
        bericht:     bericht.value.trim(),
        _subject:    'Helpende Handen – ' + naam.value.trim(),
        _language:   LANG,
      })
    });

    if (res.ok) {
      fb.className = 'hf-feedback ok';
      fb.textContent = t('handen_ok');
      fb.style.display = 'block';
      naam.value = '';
      email.value = '';
      bericht.value = '';
      gdpr.checked = false;
      document.querySelectorAll('input[name="beschik"]').forEach(cb => cb.checked = false);
    } else {
      throw new Error('server');
    }
  } catch {
    fb.className = 'hf-feedback err';
    fb.textContent = t('handen_err_server');
    fb.style.display = 'block';
  }

  btn.disabled = false;
  btn.textContent = t('handen_verzend');
}

Object.assign(window, { submitHanden });
