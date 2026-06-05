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

  <div style="background:var(--parchment);border:1px solid var(--border);border-left:5px solid var(--gold);border-radius:var(--r);padding:1.4rem 1.6rem;margin:1.4rem 0 1.8rem;">
    <h2 class="section-title" style="font-size:1.3rem;margin-bottom:1.2rem;">📰 Nieuws</h2>
   <div class="nieuws-grid">
  <a href="https://st-jacques.be/nl/agenda/consult/12/processie-van-brussel-zegeningsmis-voor-pelgrims" target="_blank" rel="noopener" style="display:block;border-radius:var(--r);overflow:hidden;box-shadow:var(--shadow);transition:box-shadow var(--t),transform var(--t);" onmouseover="this.style.transform='translateY(-3px)';this.style.boxShadow='var(--shadow-lg)'" onmouseout="this.style.transform='';this.style.boxShadow='var(--shadow)'">
    <img src="processie_sint_jacob.png" alt="Processie Sint-Jacob" style="width:100%;height:400px;object-fit:cover;display:block;">
  </a>
  <img src="affiche_geenviering_kleur.jpg" alt="Geen viering 14 juni" style="display:block;width:100%;height:400px;object-fit:contain;background:white;border-radius:var(--r);box-shadow:var(--shadow);cursor:zoom-in;" onclick="event.stopPropagation();openGeenViering()">
  <img src="Paysages.jpg" alt="Paysages" style="display:block;width:100%;height:400px;object-fit:contain;background:white;border-radius:var(--r);box-shadow:var(--shadow);cursor:zoom-in;" onclick="event.stopPropagation();openPaysages()">
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
  ${agendaHTML()}
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
    <img src="${IMG_INT}" alt="Interieur">
    <img src="${IMG_ALT}" alt="Altaar">
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
<a href="https://www.paulusgemeenschappen.be/nl/vieringen-sacramenten#vormsel" target="_blank"
  style="font-family:var(--font-ui);font-size:0.72rem;font-weight:600;letter-spacing:0.08em;
         padding:0.35rem 0.9rem;border-radius:var(--r);cursor:pointer;transition:all var(--t);
         background:var(--cream);border:1px solid var(--border);color:var(--stone-mid);
         text-decoration:none;display:inline-block;">
  ${t('p_sacramenten')} ↗
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
    <a href="https://www.lasemaineduson.be/nl/event/hoarses/" target="_blank">${t('voorbij_klank_2026')}</a>
    <span class="past-date">2026</span>
  </div>
  <img src="https://www.lasemaineduson.be/wp-content/uploads/2025/11/Late-Bush_Hoarses.jpg.webp"
       alt="Week van de Klank 2026 – Hoarses"
       style="width:100%;max-width:480px;height:240px;object-fit:cover;border-radius:var(--r);border:2px solid var(--border);box-shadow:var(--shadow);margin-bottom:1rem;">

  <div class="past-item">
    <a href="https://www.lasemaineduson.be/nl/event/rothko-chapel/" target="_blank">${t('voorbij_klank_2025')}</a>
    <span class="past-date">2025</span>
  </div>
  <img src="https://www.lasemaineduson.be/wp-content/uploads/2024/12/JacobHus_rothkochapel_LieveKleeven_1.jpg.webp"
       alt="Week van de Klank 2025 – Rothko Chapel"
       style="width:100%;max-width:480px;height:240px;object-fit:cover;border-radius:var(--r);border:2px solid var(--border);box-shadow:var(--shadow);margin-bottom:1rem;">

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
      src="https://www.youtube.com/embed/igPMLKkT9KA"
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
  <img src="${IMG_INT}" class="church-photo" style="height:260px;" alt="Interieur">
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
  <p style="margin-top:0.8rem;"><strong>Helpende Handen-formulier:</strong> de gegevens die u invult (naam, e-mailadres, beschikbaarheid en eventueel een bericht) worden uitsluitend gebruikt om contact met u op te nemen in het kader van vrijwilligerswerk voor de kerkfabriek. Ze worden niet bewaard op een externe server en niet gedeeld met derden. De verwerking verloopt via Formspree (VS, Privacy Shield-conform). U kunt uw gegevens op elk moment laten verwijderen via <a href="mailto:kerkfabriek@goedebijstand.brussels">kerkfabriek@goedebijstand.brussels</a>.</p>
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
    <img src="${IMG_ALT}" alt="Altaar" style="width:100%;height:110px;object-fit:cover;border-radius:2px;border:1px solid var(--border);margin:0.5rem 0;">
    <p><a href="https://www.flemishmastersinsitu.com/nl/locaties/onze-lieve-vrouw-van-goede-bijstandkerk-brussel" target="_blank">${t('sb_masters_link')}</a></p>
  </div>`;
}
