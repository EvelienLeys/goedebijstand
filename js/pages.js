const IMG_EXT = 'https://www.flemishmastersinsitu.com/sites/vlaamsemeestersinsitu/files/public/media/images/2023-06/Aangepast%20Exterieur_Knop%204%201%20Icoon%20Kerkgebouw%20Goede%20Bijstand.jpg';
const IMG_INT = 'https://www.flemishmastersinsitu.com/sites/vlaamsemeestersinsitu/files/public/media/images/2023-06/Aangepast%20Interieur_Onze-Lieve-Vrouw%20van%20Goede%20Bijstandkerk_JPR4243_%C2%A9%20visit.brussels%20-%20Jean-Paul%20Remy.jpg';
const IMG_ALT = 'https://www.flemishmastersinsitu.com/sites/vlaamsemeestersinsitu/files/public/media/images/2023-06/Aangepast%20Extra%20%28kunstwerk%20detail%29_Altaar%20Goede%20Bijstandskerk_0.jpg';

const PAGES = {

welkom: ()=>`
<section class="section">
  <img src="goede_bijstand_welkomstfoto.jpg" 
       class="church-photo" 
       style="height:340px;object-fit:cover;object-position:center 30%;cursor:zoom-in;" 
       alt="Interieur Goede Bijstand"
       onclick="openFoto()">
       
       <!-- BANNER 15 NOVEMBER: na zondag verwijderen -->
       <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@700&family=Inter:wght@400;600&display=swap">
<style>
 .gb-banner{box-sizing:border-box;width:100%;max-width:820px;margin:1.4rem auto 1.8rem;padding:28px 32px 22px;
    display:flex;flex-direction:column;justify-content:space-between;gap:20px;
    background:linear-gradient(135deg,#16354b 0%,#1d4a63 60%,#235870 100%);color:#f6efe0;font-family:'Inter',system-ui,sans-serif}
  .gb-banner a{color:#f0d58c;font-weight:600}
  .gb-banner a:hover{color:#fff}
  .gb-date{font-size:13px;letter-spacing:2px;text-transform:uppercase;color:#f0d58c;font-weight:600;margin:0 0 10px}
  .gb-banner h1{margin:0 0 12px;font-family:'Cormorant Garamond',Georgia,serif;font-weight:700;font-size:clamp(30px,5vw,48px);line-height:1.05;color:#fbf6ea}
  .gb-rule{width:64px;height:2px;background:#d9b866;margin-bottom:12px}
.gb-text{margin:0;font-size:16px;line-height:1.5;color:#e8e1cf;max-width:560px}
.gb-evere{display:flex;align-items:center;gap:14px;border-top:1px solid rgba(217,184,102,.5);padding-top:14px;max-width:760px;font-size:15px;line-height:1.45;color:#e8e1cf}
  .gb-evere img{display:block;flex:none;width:84px;height:60px;object-fit:cover;border:1px solid #d9b866;border-radius:3px}
  @media (max-width:640px){.gb-banner{padding:22px 18px 18px}.gb-text{font-size:15px}}
</style>

<section class="gb-banner" aria-label="Mededeling zondag 15 november">
  <div>
    <p class="gb-date">Zondag 15 november 2026</p>
    <h1>Geen eucharistieviering<br>deze zondag</h1>
    <div class="gb-rule"></div>
    <p class="gb-text">In Onze-Lieve-Vrouw van Goede Bijstand is er op 15 november geen eucharistieviering. De kerk is wel open vanaf 10.30 uur.</p>
  </div>
  <div class="gb-evere">
    <a href="https://www.paulusgemeenschappen.be/nl/activiteiten-vorming/tv-mis-sint-jozef-evere" target="_blank" rel="noopener" aria-label="Meer info over de TV-mis in de Sint-Jozefkerk in Evere">
      <img src="data:image/jpeg;base64,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" alt="Affiche TV-mis in de Sint-Jozefkerk in Evere" width="84" height="60">
    </a>
    <div>
      TV-mis in de Sint-Jozefkerk (Evere), zondag 15 november om 10:00 u.<br>
      <a href="https://www.paulusgemeenschappen.be/nl/activiteiten-vorming/tv-mis-sint-jozef-evere" target="_blank" rel="noopener">Meer info &rsaquo;</a>
    </div>
  </div>
</section>
       <!-- EINDE BANNER -->

<div style="background:var(--parchment);border:1px solid var(--border);border-left:5px solid var(--gold);border-radius:var(--r);padding:1.4rem 1.6rem;margin:1.4rem auto 1.8rem;max-width:820px;">
    <h2 class="section-title" style="font-size:1.3rem;margin-bottom:1.2rem;">📰 ${t('welkom_kijker_title')}</h2>

    <div class="exh-card" style="background:white;border-radius:var(--r);box-shadow:var(--shadow);padding:1.2rem;display:flex;flex-direction:column;gap:0.8rem;">
      <img src="exhibition_2026.jpg" alt="Art Exhibition – Sue Ball – Consider the Birds" style="width:100%;max-width:220px;height:auto;border-radius:var(--r);cursor:zoom-in;border:1px solid var(--border);" onclick="openExhibition()">
      <p style="font-size:0.85rem;color:var(--stone);line-height:1.6;">
        <strong>Art Exhibition – Sue Ball – Consider the Birds</strong><br>
        17 oktober – 28 november 2026<br>
        OLV van Goede Bijstandskerk, Kolenmarkt 91, 1000 Brussel<br>
        <a href="mailto:info@316.be" style="color:var(--gold-dk);">info@316.be</a>
      </p>
    </div>
</div>

<div style="background:var(--parchment);border:1px solid var(--border);border-left:5px solid var(--gold);border-radius:var(--r);padding:1.4rem 1.6rem;margin:1.4rem auto 1.8rem;max-width:820px;">
  <h2 class="section-title" style="font-size:1.3rem;margin-bottom:1.2rem;">🕯 ${t('welkom_rouw_title')}</h2>
  <div style="display:block;">
    <div style="background:#fff;border-radius:var(--r);box-shadow:var(--shadow);padding:1.2rem;text-align:center;">
      <a href="Rouwbericht_Vanhemelryck.png" target="_blank" rel="noopener">
        <img src="Rouwbericht_Vanhemelryck.png" alt="Rouwbericht Christiaan Vanhemelryck" style="width:100%;height:auto;border-radius:6px;">
      </a>
    </div>
  </div>
</div>

  <div class="card-grid">
    <div class="card" onclick="go('agenda')">
      <div class="card-icon">📅</div>
      <h3>${t('nav_agenda')}</h3>
      <p>${t('welkom_card_agenda')}</p>
      <a>${t('welkom_meer')} →</a>
    </div>
    <div class="card" onclick="go('geschiedenis')">
      <div class="card-icon">🏛</div>
      <h3>${t('nav_gesch')}</h3>
      <p>${t('welkom_card_gesch')}</p>
      <a>${t('welkom_meer')} →</a>
    </div>
    <div class="card" onclick="go('samenwerking')">
      <div class="card-icon">🤝</div>
      <h3>${t('nav_samen')}</h3>
      <p>${t('welkom_card_samen')}</p>
      <a>${t('welkom_meer')} →</a>
    </div>
    <div class="card" onclick="go('huren')">
      <div class="card-icon">🎵</div>
      <h3>${t('nav_huren')}</h3>
      <p>${t('welkom_card_huren')}</p>
      <a>${t('welkom_meer')} →</a>
    </div>
    <div class="card" onclick="go('steunen')">
      <div class="card-icon">🙏</div>
      <h3>${t('nav_steunen')}</h3>
      <p>${t('welkom_card_steunen')}</p>
      <a>${t('welkom_meer')} →</a>
    </div>
    <div class="card" onclick="go('contact')">
      <div class="card-icon">✉</div>
      <h3>${t('nav_contact')}</h3>
      <p>${t('welkom_card_contact')}</p>
      <a>${t('welkom_meer')} →</a>
    </div>
  </div>
</section>`,
  
agenda: ()=>`
<section class="section">
  <h2 class="section-title">${t('ag_title')}</h2>
  <p style="font-style:italic;color:var(--muted);margin-bottom:1.2rem;font-size:0.93rem;">${t('ag_intro')}</p>
  <div style="max-width:620px;margin:0 auto;">
    ${agendaHTML()}
  </div>
</section>`,

geschiedenis: ()=>`
<section class="section">
  <h2 class="section-title">${t('gesch_title')}</h2>
  <img src="${IMG_EXT}" class="church-photo" style="height:280px;" alt="Exterieur">
  <p>${t('gesch_intro')}</p>
  <div class="timeline">
    <div class="tl-item"><div class="tl-year">${t('tl1_year')}</div><div class="tl-text">${t('tl1_text')}</div></div>
    <div class="tl-item"><div class="tl-year">${t('tl2_year')}</div><div class="tl-text">${t('tl2_text')}</div></div>
    <div class="tl-item"><div class="tl-year">${t('tl3_year')}</div><div class="tl-text">${t('tl3_text')}</div></div>
    <div class="tl-item"><div class="tl-year">${t('tl4_year')}</div><div class="tl-text">${t('tl4_text')}</div></div>
  </div>
  <div class="ornament">✦ ✦ ✦</div>
<p class="subsection">${t('gesch_arch_title')}</p>
<div class="photo-grid">
  <div>
    <img src="${IMG_INT}" alt="Interieur" style="margin-bottom:0;">
    <p class="photo-caption" style="text-align:right;margin-top:0.3rem;margin-bottom:0;font-size:0.78rem;font-style:italic;color:var(--gold);">Jean-Paul Remy – Visit Brussels</p>
  </div>
  <div>
    <img src="${IMG_ALT}" alt="Altaar" style="margin-bottom:0;">
    <p class="photo-caption" style="text-align:right;margin-top:0.3rem;margin-bottom:0;font-size:0.78rem;font-style:italic;color:var(--gold);">Dominique Provost – Art in Flanders (copyright Okv) </p>
  </div>
</div>
  <p>${t('gesch_arch')}</p>
  <p><a href="https://www.flemishmastersinsitu.com/nl/locaties/onze-lieve-vrouw-van-goede-bijstandkerk-brussel" target="_blank">${t('gesch_masters')}</a></p>
  <div class="ornament">✦ ✦ ✦</div>
  <p class="subsection">${t('gesch_visit_title')}</p>
  <div class="huren-grid">
    <div class="info-box">
      <h3>🕐 ${t('gesch_visit_title')}</h3>
      <p style="white-space:pre-line;">${t('gesch_open')}</p>
      <p style="margin-top:0.4rem;font-style:italic;color:var(--muted);font-size:0.88rem;">${t('gesch_free')}</p>
    </div>
    <div class="info-box">
      <h3>📍 ${t('sb_addr')}</h3>
      <p>Kolenmarkt 91<br>(kant Fontainasplein)<br>1000 Brussel</p>
      <p style="margin-top:0.5rem;"><a href="https://maps.google.com/?q=Kolenmarkt+91,+1000+Brussel" target="_blank">${t('gesch_maps')}</a></p>
    </div>
  </div>
</section>`,

samenwerking: ()=>`
<section class="section">
  <h2 class="section-title">${t('samen_title')}</h2>
  <p style="margin-bottom:1.4rem;">${t('samen_intro')}</p>

  <div class="partner">
    <strong>${t('p_parochie')}</strong>
    <p>${t('p_parochie_desc')}</p>
    <div style="display:flex;gap:0.6rem;flex-wrap:wrap;margin-top:0.8rem;">
      <button onclick="toggleTab('kerkfabriek')"
  style="font-family:var(--font-ui);font-size:0.72rem;font-weight:600;letter-spacing:0.08em;
         padding:0.35rem 0.9rem;border-radius:var(--r);cursor:pointer;transition:all var(--t);
         background:var(--cream);border:1px solid var(--border);color:var(--stone-mid);"
  id="btn-kerkfabriek">
  ${t('p_kerkfabriek')}
</button>
<button onclick="toggleTab('parochieploeg')"
  style="font-family:var(--font-ui);font-size:0.72rem;font-weight:600;letter-spacing:0.08em;
         padding:0.35rem 0.9rem;border-radius:var(--r);cursor:pointer;transition:all var(--t);
         background:var(--cream);border:1px solid var(--border);color:var(--stone-mid);"
  id="btn-parochieploeg">
  ${t('p_parochieploeg')}
</button>
<button onclick="toggleTab('bijstandnight')"
  style="font-family:var(--font-ui);font-size:0.72rem;font-weight:600;letter-spacing:0.08em;
         padding:0.35rem 0.9rem;border-radius:var(--r);cursor:pointer;transition:all var(--t);
         background:var(--cream);border:1px solid var(--border);color:var(--stone-mid);"
  id="btn-bijstandnight">
  🌙 Bijstand by Night
</button>
<a href="https://www.paulusgemeenschappen.be/nl/vieringen-sacramenten#ziekenzalving" target="_blank"
  style="font-family:var(--font-ui);font-size:0.72rem;font-weight:600;letter-spacing:0.08em;
         padding:0.35rem 0.9rem;border-radius:var(--r);cursor:pointer;transition:all var(--t);
         background:var(--cream);border:1px solid var(--border);color:var(--stone-mid);
         text-decoration:none;display:inline-block;">
  ${t('p_sacramenten')} ↗
</a>
<a href="https://www.paulusgemeenschappen.be/nl/activiteiten-vorming/data-catechese-parelvissers-2026-2027" target="_blank"
  style="font-family:var(--font-ui);font-size:0.72rem;font-weight:600;letter-spacing:0.08em;
         padding:0.35rem 0.9rem;border-radius:var(--r);cursor:pointer;transition:all var(--t);
         background:var(--cream);border:1px solid var(--border);color:var(--stone-mid);
         text-decoration:none;display:inline-block;">
  Kindercatechese ↗
</a>
    </div>

    <div id="tab-kerkfabriek" style="display:none;margin-top:0.8rem;padding:0.9rem 1.1rem;background:var(--parchment);border-radius:var(--r);border:1px solid var(--border);font-size:0.9rem;color:var(--stone);">
      ${t('p_kerkfabriek_desc')}
    </div>
    <div id="tab-parochieploeg" style="display:none;margin-top:0.8rem;padding:0.9rem 1.1rem;background:var(--parchment);border-radius:var(--r);border:1px solid var(--border);font-size:0.9rem;color:var(--stone);">
      ${t('p_parochieploeg_desc')}
    </div>
    <div id="tab-bijstandnight" style="display:none;margin-top:0.8rem;padding:0.9rem 1.1rem;background:var(--parchment);border-radius:var(--r);border:1px solid var(--border);font-size:0.9rem;color:var(--stone);">
      Elke vrijdagavond van mei t.e.m. augustus, tussen 18 en 22 uur, staat de kerk voor iedereen open.
    </div>
  </div>
  
  <div class="partner">
  <a href="https://www.paulusgemeenschappen.be/nl" target="_blank" rel="noopener">
    <img src="paulusgemeenschappen_logo.png" alt="Paulusgemeenschappen" style="height:40px;object-fit:contain;object-position:left;margin-bottom:0.4rem;display:block;">
  </a>
  <p>${t('p_paulus_desc')} <a href="https://www.paulusgemeenschappen.be/nl" target="_blank">paulusgemeenschappen.be →</a></p>
</div>

  <div class="partner">
    <a href="https://www.taize.fr/nl" target="_blank" rel="noopener">
  <img src="taize-logo-HR.jpg" alt="Taizé" style="height:40px;object-fit:contain;object-position:left;margin-bottom:0.4rem;display:block;">
</a>
    <p>${t('p_taize_desc')}</p>
  </div>
  
  <div class="partner">
  <a href="https://ccl-be.net/" target="_blank" rel="noopener">
  <img src="logo_lgbtq.png" alt="La Communauté du Christ Libérateur – LGBTQIA+" style="height:80px;width:auto;object-fit:contain;object-position:left;margin-bottom:0.4rem;display:block;">
</a>
  <p>${t('p_lgbtq_desc')}</p>
</div>

  <div class="partner">
    <a href="https://www.lasemaineduson.be" target="_blank" rel="noopener">
  <img src="week_van_de_klank_logo.png" alt="Week van de Klank" style="height:60px;width:auto;object-fit:contain;object-position:left;margin-bottom:0.4rem;display:block;">
</a>
    <p>${t('p_klank_desc')} <a href="https://www.lasemaineduson.be" target="_blank">${t('p_klank_link')}</a></p>
  </div>

  <div class="partner">
    <a href="https://www.flemishmastersinsitu.com/nl/locaties/onze-lieve-vrouw-van-goede-bijstandkerk-brussel" target="_blank" rel="noopener">
  <img src="vlaamse-meesters-logo.png" alt="Vlaamse Meesters" style="height:60px;width:auto;object-fit:contain;object-position:left;margin-bottom:0.4rem;display:block;">
</a>
    <p>${t('p_meesters_desc')} <a href="https://www.flemishmastersinsitu.com/nl/locaties/onze-lieve-vrouw-van-goede-bijstandkerk-brussel" target="_blank">${t('p_meesters_link')}</a></p>
  </div>
</section>`,
  
grond: ()=>`
<section class="section" style="padding:0;border:none;margin:0;">
  <iframe
    id="grond-iframe"
    src="grond.html"
    style="width:100%;height:calc(100vh - 52px);border:none;display:block;"
    title="Grondbibliotheek"
    loading="lazy"
    onload="syncGrondLang(this)"
  ></iframe>
</section>`,
  
voorbij: ()=>`
<section class="section">
  <h2 class="section-title">${t('voorbij_title')}</h2>

  <p class="subsection">${t('voorbij_muziek_title')}</p>
  <p style="font-style:italic;color:var(--muted);margin-bottom:0.8rem;font-size:0.92rem;">${t('voorbij_muziek_intro')}</p>

   <div class="past-item">
    <span>Concert Artea – Indigo</span>
    <span class="past-date">4 oktober 2026</span>
  </div>
  <img src="Artea_2026.png" alt="Concert Artea – Indigo" style="width:100%;max-width:300px;height:auto;object-fit:contain;background:white;border-radius:var(--r);border:2px solid var(--border);box-shadow:var(--shadow);margin-bottom:1rem;cursor:zoom-in;" onclick="openArtea()">

  <div class="past-item">
    <span>Paysages – Barok Concert, ensemble En Chemin</span>
    <span class="past-date">26 juni 2026</span>
  </div>
  <img src="Paysages.jpg" alt="Paysages" style="width:100%;max-width:300px;height:auto;object-fit:contain;background:white;border-radius:var(--r);border:2px solid var(--border);box-shadow:var(--shadow);margin-bottom:1rem;cursor:zoom-in;" onclick="openPaysages()">

  <div class="past-item">
    <a href="https://www.lasemaineduson.be/nl/event/hoarses/" target="_blank">${t('voorbij_klank_2026')}</a>
    <span class="past-date">2026</span>
  </div>
  <img src="Latebush_concert_profil.jpg"
       alt="Son.Oor/De Week van de Klank - Hoarses"
       style="width:100%;max-width:480px;height:240px;object-fit:cover;border-radius:var(--r);border:2px solid var(--border);box-shadow:var(--shadow);margin-bottom:0.3rem;">
  <p class="photo-caption" style="text-align:left;margin-bottom:1rem;">${t('voorbij_klank_credit')}</p>

  <div class="past-item">
    <a href="https://www.lasemaineduson.be/nl/event/rothko-chapel/" target="_blank">${t('voorbij_klank_2025')}</a>
    <span class="past-date">2025</span>
  </div>
  <img src="Rothko_1.2.1.png"
       alt="Week van de Klank 2025 – Rothko Chapel"
       style="width:100%;max-width:480px;height:240px;object-fit:cover;border-radius:var(--r);border:2px solid var(--border);box-shadow:var(--shadow);margin-bottom:0.3rem;">
  <p class="photo-caption" style="text-align:left;margin-bottom:1rem;">${t('voorbij_klank_credit')}</p>

 <p class="subsection">Vlaanderen Feest</p>
  <div class="past-item" style="margin-bottom:1rem;">
    <a href="https://www.bruzz.be/videoreeks/maandag-11-juli-2022/video-brussels-operette-theater-brengt-vlaamse-componisten-naar" target="_blank">
      ▶ Bekijk het filmpje op Bruzz
    </a>
    <span class="past-date">2022</span>
  </div>
  <p class="photo-caption" style="text-align:left;">Vlaanderen Feest 2022 — Brussels Operettetheater · Bruzz</p>
  </div>

  <div class="ornament">✦ ✦ ✦</div>


  <p class="subsection">${t('voorbij_opnames_title')}</p>
  <p style="font-style:italic;color:var(--muted);margin-bottom:0.8rem;font-size:0.92rem;">${t('voorbij_opnames_intro')}</p>

  <div class="past-item">
    <a href="https://www.facebook.com/watch/?v=1564561861293763" target="_blank">${t('voorbij_trois_fb')}</a>
  </div>
  <div style="margin-bottom:1rem;">
    <a href="https://www.facebook.com/watch/?v=1564561861293763" target="_blank" style="display:inline-block;position:relative;max-width:480px;width:100%;">
      <img src="Screenshot_Les_Trois_Cordes_fb.png"
           alt="Les Trois Cordes – Facebook"
           style="width:100%;height:270px;object-fit:cover;object-position:center top;border-radius:var(--r);border:2px solid var(--border);box-shadow:var(--shadow);display:block;">
      <span style="position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);background:rgba(0,0,0,0.65);color:white;font-size:2.5rem;width:64px;height:64px;border-radius:50%;display:flex;align-items:center;justify-content:center;">▶</span>
    </a>
  </div>

  <div class="past-item">
    <a href="https://www.youtube.com/watch?v=igPMLKkT9KA" target="_blank">${t('voorbij_trois_yt')}</a>
  </div>
  <div style="margin-bottom:1rem;">
    <iframe width="100%" height="270"
      src="https://www.youtube-nocookie.com/embed/igPMLKkT9KA"
      title="Les Trois Cordes"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
      style="border-radius:var(--r);border:2px solid var(--border);box-shadow:var(--shadow);max-width:480px;display:block;">
    </iframe>
  </div>

  <div class="ornament">✦ ✦ ✦</div>

  <p class="subsection">${t('voorbij_film_title')}</p>
  <p style="font-style:italic;color:var(--muted);margin-bottom:0.8rem;font-size:0.92rem;">${t('voorbij_film_intro')}</p>
  <p style="color:var(--muted);font-size:0.9rem;font-style:italic;">— — —</p>
</section>`,

huren: ()=>`
<section class="section">
  <h2 class="section-title">${t('huren_title')}</h2>
  <img src="${IMG_INT}" class="church-photo" style="height:260px;margin-bottom:0.2rem;" alt="Interieur">
  <p style="font-size:0.72rem;font-style:italic;color:var(--gold);margin-bottom:1rem;">Dominique Provost - Art in Flanders (copyright Okv)</p>
  <p style="margin-bottom:1.4rem;">${t('huren_intro')}</p>

  <div class="huren-grid">
    <div class="info-box">
      <h3>🏛 ${t('huren_cap_title')}</h3>
      <p>${t('huren_cap')}</p>
    </div>
    <div class="info-box">
      <h3>📍 ${t('huren_loc_title')}</h3>
      <p>${t('huren_loc')}</p>
    </div>
    <div class="info-box" style="grid-column:1/-1;">
      <h3>✓ ${t('huren_gesch_title')}</h3>
      <p>${t('huren_gesch')}</p>
    </div>
  </div>

  <div class="ornament">✦ ✦ ✦</div>
  <p class="subsection">${t('huren_contact_title')}</p>
  <p>${t('huren_contact')}</p>

  <div class="contact-box" style="margin-top:1rem;">
    <div class="icon">✉</div>
    <div class="txt">
      <p><strong>kerkfabriek@goedebijstand.brussels</strong></p>
      <p>Bijstandsstraat 5, 1000 Brussel</p>
    </div>
    <a class="btn" href="mailto:kerkfabriek@goedebijstand.brussels" target="_blank">${t('contact_msg')}</a>
  </div>

  <p style="margin-top:1rem;font-size:0.85rem;font-style:italic;color:var(--muted);">${t('huren_note')}</p>
</section>`,

steunen: ()=>`
<section class="section">
  <h2 class="section-title">${t('steunen_title')}</h2>
  <p>${t('steunen_intro')}</p>

  <div class="ornament">✦ ✦ ✦</div>
  <p class="subsection">${t('steunen_bank')}</p>

  <div class="bank-block">
    <p class="bank-name">KERKFABRIEK O-L VROUW GOEDE BIJSTAND BRUSSEL</p>
    <p class="iban">BE27 0910 0107 1473</p>
    <p class="bic">BIC: GKCCBEBBXXX</p>
  </div>

  <p class="subsection">${t('steunen_qr')}</p>
  <div class="qr-row">
    <div class="qr-item"><img src="Donate_02_qr_sumup.png" alt="QR SumUp"><span>SumUp</span></div>
    <div class="qr-item"><img src="Donate_02_qr_wero.png" alt="QR Wero"><span>Wero</span></div>
  </div>

  <p style="margin-top:0.8rem;font-size:0.88rem;font-style:italic;color:var(--muted);">${t('steunen_terminal')}</p>
  <p style="margin-top:1rem;font-size:0.88rem;color:var(--muted);">${t('steunen_q')}</p>

  <div class="ornament">✦ ✦ ✦</div>

  <!-- HELPENDE HANDEN -->
  <p class="subsection">🙌 ${t('handen_title')}</p>
  <p style="margin-bottom:1.2rem;">${t('handen_intro')}</p>

  <div class="handen-form-wrap" id="handenFormWrap">
    <div class="handen-form-box">

      <div class="hf-field">
        <label class="hf-label" for="hf_naam">${t('handen_naam')} <span class="hf-req">*</span></label>
        <input class="hf-input" type="text" id="hf_naam" name="naam" required autocomplete="name" placeholder="${t('handen_naam_ph')}">
      </div>

      <div class="hf-field">
        <label class="hf-label" for="hf_email">${t('handen_email')} <span class="hf-req">*</span></label>
        <input class="hf-input" type="email" id="hf_email" name="email" required autocomplete="email" placeholder="naam@voorbeeld.be">
      </div>

      <div class="hf-field">
        <label class="hf-label">${t('handen_beschik')}</label>
        <div class="hf-checks">
          <label class="hf-check"><input type="checkbox" name="beschik" value="weekdag"> ${t('handen_weekdag')}</label>
          <label class="hf-check"><input type="checkbox" name="beschik" value="weekend"> ${t('handen_weekend')}</label>
          <label class="hf-check"><input type="checkbox" name="beschik" value="vakantie"> ${t('handen_vakantie')}</label>
        </div>
      </div>

      <div class="hf-field">
        <label class="hf-label" for="hf_bericht">${t('handen_bericht')}</label>
        <textarea class="hf-input hf-textarea" id="hf_bericht" name="bericht" rows="4" placeholder="${t('handen_bericht_ph')}"></textarea>
      </div>

      <div class="hf-field hf-gdpr-row">
        <label class="hf-check">
          <input type="checkbox" id="hf_gdpr" required>
          <span>${t('handen_gdpr')} <a href="#" onclick="go('privacy');return false;">${t('handen_gdpr_link')}</a>.</span>
        </label>
      </div>

      <div id="handenFeedback" class="hf-feedback" style="display:none;"></div>

      <button class="btn hf-submit" onclick="submitHanden()">${t('handen_verzend')}</button>

    </div>
  </div>

  <p style="margin-top:0.8rem;font-size:0.78rem;font-style:italic;color:var(--muted);">${t('handen_note')}</p>
</section>`,

contact: ()=>`
<section class="section">
  <h2 class="section-title">${t('contact_title')}</h2>
  <p class="subsection">${t('contact_gebouw')}</p>
  <p class="subsection" style="margin-top:0;">${t('contact_secretariaat')}</p>
  <p>${t('contact_addr')}</p>
  <p>${t('contact_email_label')} <a href="mailto:kerkfabriek@goedebijstand.brussels">kerkfabriek@goedebijstand.brussels</a></p>

  <div class="contact-box">
    <div class="icon">✉</div>
    <div class="txt">
      <p><strong>kerkfabriek@goedebijstand.brussels</strong></p>
      <p style="font-size:0.85rem;color:var(--muted);">Kerkfabriek Onze-Lieve-Vrouw van Goede Bijstand</p>
    </div>
    <a class="btn" href="mailto:kerkfabriek@goedebijstand.brussels">${t('contact_msg')}</a>
  </div>

  <div class="ornament">✦ ✦ ✦</div>
  <p class="subsection" style="font-style:italic;font-size:0.9rem;color:var(--muted);margin-bottom:0.8rem;">Voor vragen i.v.m. de parochie / pastores</p>

  <div class="contact-box" style="margin-bottom:1.5rem;">
    <img src="paulusgemeenschappen_logo.png" alt="Paulusgemeenschappen" style="flex:1;height:auto;max-height:60px;object-fit:contain;object-position:left;">
    <a class="btn" href="https://www.paulusgemeenschappen.be/nl/contact" target="_blank">Contactformulier →</a>
  </div>

  <div class="ornament">✦ ✦ ✦</div>
  <p class="subsection">${t('contact_open_title')}</p>

  <div class="huren-grid">
    <div class="info-box">
      <h3>🕐</h3>
      <p style="white-space:pre-line;">${t('contact_open')}</p>
    </div>
    <div class="info-box">
      <h3>📍 ${t('sb_addr')}</h3>
      <p>Kolenmarkt 91<br>1000 Brussel</p>
      <p style="margin-top:0.4rem;"><a href="https://maps.google.com/?q=Kolenmarkt+91,+1000+Brussel" target="_blank">${t('contact_maps')}</a></p>
    </div>
  </div>
</section>`,

privacy: ()=>`
<section class="section">
  <h2 class="section-title">Cookie- &amp; privacybeleid</h2>
  <p>Deze website gebruikt uitsluitend <strong>functionele cookies</strong> om uw taalvoorkeur op te slaan (<code>gb_lang</code>) en uw cookiekeuze te bewaren (<code>gb_gdpr</code>). Er worden geen persoonsgegevens verzameld of gedeeld met derden. Er zijn geen tracking-, analyse- of advertentiecookies aanwezig.</p>
  <p style="margin-top:0.8rem;"><strong>Helpende Handen-formulier:</strong> de gegevens die u invult (naam, e-mailadres, beschikbaarheid en eventueel een bericht) worden uitsluitend gebruikt om contact met u op te nemen in het kader van vrijwilligerswerk voor de kerkfabriek. Ze worden niet gedeeld met derden, behalve met onze verwerker Formspree (VS), die het formulier technisch afhandelt. De doorgifte naar de VS gebeurt op basis van de door de Europese Commissie goedgekeurde standaardcontractbepalingen. U kunt uw gegevens op elk moment laten verwijderen via <a href="mailto:kerkfabriek@goedebijstand.brussels">kerkfabriek@goedebijstand.brussels</a>.</p>
  <p style="margin-top:0.8rem;">Beheerder: <strong>Kerkfabriek Onze-Lieve-Vrouw van Goede Bijstand</strong><br>
  Bijstandsstraat 5, 1000 Brussel<br>
  <a href="mailto:kerkfabriek@goedebijstand.brussels">kerkfabriek@goedebijstand.brussels</a></p>
</section>`,

};

function sidebarHTML() {
  return `
  <img src="${IMG_EXT}" alt="Goede Bijstand" class="sidebar-img">
  <div class="sidebar-box">
    <h3>📍 ${t('sb_addr')}</h3>
    <p class="addr"><a href="https://www.openstreetmap.org/#map=20/50.8455991/4.3477415&layers=H" target="_blank" style="color:var(--stone-mid);">Kolenmarkt 91</a><br>(kant Fontainasplein)<br>1000 Brussel</p>
  </div>
  <div class="sidebar-box">
    <h3>🕐 ${t('sb_open')}</h3>
    <p style="white-space:pre-line;">${t('sb_open_body')}</p>
    <p style="margin-top:0.5rem;font-size:0.83rem;font-style:italic;color:var(--gold-dk);">${t('sb_free')}</p>
  </div>
  <div class="sidebar-box">
    <h3>🚌 ${t('sb_trans')}</h3>
    <p style="white-space:pre-line;">${t('sb_trans_body')}</p>
  </div>
  <div class="sidebar-box">
  <h3>${t('sb_masters')}</h3>
  <img src="${IMG_ALT}" alt="Altaar" style="width:100%;height:110px;object-fit:cover;border-radius:2px;border:1px solid var(--border);margin:0.5rem 0 0.2rem;">
  <p style="font-size:0.72rem;font-style:italic;color:var(--gold);margin-bottom:0.5rem;">Dominique Provost - Art in Flanders (copyright Okv)</p>
  <p><a href="https://www.flemishmastersinsitu.com/nl/locaties/onze-lieve-vrouw-van-goede-bijstandkerk-brussel" target="_blank">${t('sb_masters_link')}</a></p>
</div>
`;
}
