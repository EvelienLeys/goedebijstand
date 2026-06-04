const DN = {
  nl:['Zo','Ma','Di','Wo','Do','Vr','Za'],
  fr:['Di','Lu','Ma','Me','Je','Ve','Sa'],
  en:['Su','Mo','Tu','We','Th','Fr','Sa'],
  de:['So','Mo','Di','Mi','Do','Fr','Sa'],
  it:['Do','Lu','Ma','Me','Gi','Ve','Sa'],
  es:['Do','Lu','Ma','Mi','Ju','Vi','Sá'],
  ru:['Вс','Пн','Вт','Ср','Чт','Пт','Сб'],
  ar:['أح','إث','ثل','أر','خم','جم','سب'],
};
const MS = {
  nl:['jan','feb','mrt','apr','mei','jun','jul','aug','sep','okt','nov','dec'],
  fr:['jan','fév','mar','avr','mai','jun','jul','aoû','sep','oct','nov','déc'],
  en:['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'],
  de:['Jan','Feb','Mär','Apr','Mai','Jun','Jul','Aug','Sep','Okt','Nov','Dez'],
  it:['gen','feb','mar','apr','mag','giu','lug','ago','set','ott','nov','dic'],
  es:['ene','feb','mar','abr','may','jun','jul','ago','sep','oct','nov','dic'],
  ru:['янв','фев','мар','апр','май','июн','июл','авг','сен','окт','ноя','дек'],
  ar:['يناير','فبراير','مارس','أبريل','مايو','يونيو','يوليو','أغسطس','سبتمبر','أكتوبر','نوفمبر','ديسمبر'],
};
const ML = {
  nl:['Januari','Februari','Maart','April','Mei','Juni','Juli','Augustus','September','Oktober','November','December'],
  fr:['Janvier','Février','Mars','Avril','Mai','Juin','Juillet','Août','Septembre','Octobre','Novembre','Décembre'],
  en:['January','February','March','April','May','June','July','August','September','October','November','December'],
  de:['Januar','Februar','März','April','Mai','Juni','Juli','August','September','Oktober','November','Dezember'],
  it:['Gennaio','Febbraio','Marzo','Aprile','Maggio','Giugno','Luglio','Agosto','Settembre','Ottobre','Novembre','Dicembre'],
  es:['Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre'],
  ru:['Январь','Февраль','Март','Апрель','Май','Июнь','Июль','Август','Сентябрь','Октябрь','Ноябрь','Декабрь'],
  ar:['يناير','فبراير','مارس','أبريل','مايو','يونيو','يوليو','أغسطس','سبتمبر','أكتوبر','نوفمبر','ديسمبر'],
};
const dkey = d => `${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,'0')}-${String(d.getDate()).padStart(2,'0')}`;

/* ─── AGENDA ENGINE ─── */

/* Voorganger per zondag: sleutel = datum 'YYYY-MM-DD' */
const VOORGANGERS = {
  '2026-05-03': { naam: '', rol: '' },
  '2026-05-17': { naam: '', rol: '' },
  '2026-05-24': { naam: '', rol: '' },
  '2026-05-31': { naam: '', rol: '' },
  '2026-06-07': { naam: '', rol: '' },
  '2026-06-14': { naam: '', rol: '' },
  '2026-06-21': { naam: '', rol: '' },
  '2026-06-28': { naam: '', rol: '' },
  '2026-07-05': { naam: '', rol: '' },
  '2026-07-12': { naam: '', rol: '' },
  '2026-07-19': { naam: '', rol: '' },
  '2026-07-26': { naam: '', rol: '' },
  '2026-08-02': { naam: '', rol: '' },
  '2026-08-09': { naam: '', rol: '' },
  '2026-08-16': { naam: '', rol: '' },
  '2026-08-23': { naam: '', rol: '' },
  '2026-08-30': { naam: '', rol: '' },
  '2026-09-06': { naam: '', rol: '' },
  '2026-09-13': { naam: '', rol: '' },
  '2026-09-20': { naam: '', rol: '' },
  '2026-09-27': { naam: '', rol: '' },
  '2026-10-04': { naam: '', rol: '' },
};

const FIXED = [
  { datum:'2026-03-29', tijd:'11:00', type:'viering', tk:'ev_palm' },
  { datum:'2026-04-02', tijd:'17:00', type:'viering', tk:'ev_holy_thu' },
  { datum:'2026-04-03', tijd:'19:00', type:'viering', tk:'ev_good_fri' },
  { datum:'2026-04-04', tijd:'21:00', type:'viering', tk:'ev_vigil' },
  { datum:'2026-04-05', tijd:'11:00', type:'viering', tk:'ev_easter' },
  { datum:'2026-05-14', tijd:'11:00', type:'viering', tk:'ev_drempel' },
  { datum:'2026-05-17', tijd:'12:00', type:'cleanup', tk:'ev_cleanup', link:'https://www.paulusgemeenschappen.be/nl/activiteiten-vorming/zorg-voor-de-schepping' },
  { datum:'2026-05-23', tijd:'19:00', type:'viering', tk:'ev_pinksterwake', extra:'' },
  { datum:'2026-05-24', tijd:'11:00', type:'woord', tk:'ev_pinkster', extra:'', rol:'' },
  { datum:'2026-05-30', tijd:'19:00', type:'viering', tk:'ev_lgbtq' },
  { datum:'2026-06-06', tijd:'10:30', type:'viering', tk:'ev_processie_jacob', link:'https://st-jacques.be/nl/agenda/consult/12/processie-van-brussel-zegeningsmis-voor-pelgrims' },
  { datum:'2026-06-14', tijd:'10:00', type:'viering', tk:'ev_14juni' },
  { datum:'2026-06-26', tijd:'19:00', type:'concert', tk:'ev_concert_juni', extra:'ensemble En Chemin', gratis:true, onclick:'openPaysages()' },
];

const ZONDAG_UITZONDERINGEN = {
  '2026-05-10': 'woord',
  '2026-05-24': 'skip',
  '2026-06-14': 'skip',
};

function genTaize() {
  const res = [], now = new Date(); now.setHours(0,0,0,0);
  const end = new Date(now); end.setDate(now.getDate()+42); 
  for (let m=0;m<3;m++) {
    const yr=now.getFullYear()+Math.floor((now.getMonth()+m)/12), mn=(now.getMonth()+m)%12;
    let cnt=0;
    for (let d=1;d<=31;d++) {
      const dt=new Date(yr,mn,d);
      if (dt.getMonth()!==mn) break;
      if (dt.getDay()===6&&++cnt===3) {
        if (dt>=now&&dt<=end) res.push({datum:dkey(dt),tijd:'20:00',type:'taize',tk:'ev_taize'});
        break;
      }
    }
  }
  return res;
}

function genNight() {
  const res=[], now=new Date(); now.setHours(0,0,0,0);
  const end=new Date(now); end.setDate(now.getDate()+42);
  const uitsluitingen = ['2026-06-26']; 
  for (let d=new Date(now);d<=end;d.setDate(d.getDate()+1)) {
    if (d.getDay()===5 && d.getMonth()>=4 && d.getMonth()<=7 && !uitsluitingen.includes(dkey(d)))
      res.push({datum:dkey(d),tijd:'18:00',type:'nacht',tk:'ev_night'});
  }
  return res;
}

function genLGBTQ() {
  const res = [], now = new Date(); now.setHours(0,0,0,0);
  const start = new Date(2026, 5, 27);
  const end = new Date(now); end.setDate(now.getDate() + 42);
  for (let m = 0; m < 24; m++) {
    const yr = start.getFullYear() + Math.floor((start.getMonth() + m) / 12);
    const mn = (start.getMonth() + m) % 12;
    let cnt = 0;
    for (let d = 1; d <= 31; d++) {
      const dt = new Date(yr, mn, d);
      if (dt.getMonth() !== mn) break;
      if (dt.getDay() === 6 && ++cnt === 4) {
        if (dt >= now && dt <= end && dt >= start)
          res.push({ datum: dkey(dt), tijd: '20:00', type: 'viering', tk: 'ev_lgbtq' });
        break;
      }
    }
  }
  return res;
}

function buildAgenda() {
  const map = {};
  [...FIXED, ...genTaize(), ...genNight(), ...genLGBTQ()].forEach(ev => {
    (map[ev.datum] = map[ev.datum] || []).push(ev);
  });

  const now = new Date(); now.setHours(0,0,0,0);

  for (let i = 0; i < 42; i++) {
    const d = new Date(now); d.setDate(now.getDate()+i);
    const dw = d.getDay(), sk = dkey(d);

    if (dw === 0 && !['2026-04-05','2026-03-29'].includes(sk)) {
      if (ZONDAG_UITZONDERINGEN[sk] !== 'skip') {
        const zondagNr = Math.ceil(d.getDate() / 7);
        const isWoord  = zondagNr === 4 || ZONDAG_UITZONDERINGEN[sk] === 'woord';
        const zondagNr3 = zondagNr === 3;
        const tkSun    = isWoord ? 'ev_sun_woord' : 'ev_sun_eucharistie';
        const vg       = VOORGANGERS[sk] || { naam: '', rol: '' };

        (map[sk] = map[sk] || []).unshift({
          datum: sk,
          tijd: '11:00',
          type: 'viering',
          tekst: t(tkSun) + (zondagNr3 ? ' 👪 <em style="font-size:0.82rem;color:var(--muted);">Goede Bijtjes en Mosterdzaadjes</em>' : ''),
          voorganger: vg.naam,
          extra: vg.rol,
          rol: vg.rol
        });
      }
    }
  }

  for (const k of Object.keys(map)) map[k].sort((a,b) => a.tijd.localeCompare(b.tijd));
  return map;
}

function agendaHTML() {
  const events = buildAgenda();
  const now = new Date(); now.setHours(0,0,0,0);
  const dn_ = DN[LANG]||DN.nl, ms_ = MS[LANG]||MS.nl, ml_ = ML[LANG]||ML.nl;

  let html = '<div class="agenda-wrap">', curM = -1, count = 0;

  for (let i = 0; i < 42; i++) {
    const d = new Date(now); d.setDate(now.getDate()+i);
    const dw = d.getDay(), mn = d.getMonth(), yr = d.getFullYear(), nr = d.getDate(), sk = dkey(d);

    const seen = new Set();
    const evs = (events[sk]||[]).map(e => ({
      ...e,
      tekst: e.tekst || t(e.tk),
      voorganger: e.voorganger || e.extra || '',
      rol: e.rol || ''
    })).filter(e => {
      const k = `${e.tijd}|${e.tekst}`;
      return seen.has(k) ? false : (seen.add(k), true);
    });

    if (!evs.length) continue;
    count++;

    if (mn !== curM) {
      curM = mn;
      html += `<div class="agenda-month">${ml_[mn]} ${yr}</div>`;
    }

    const cls = 'agenda-row' + (dw === 0 || dw === 6 ? ' weekend' : '');

    html += `<div class="${cls}">
      <div class="date-cell">
        <span class="dn">${i === 0 ? t('ag_today') : dn_[dw]}</span>
        <span class="dd">${nr}</span>
        <span class="dm">${ms_[mn]}</span>
      </div>
      <div class="events-cell">
        ${evs.map(ev => `<div class="ev-row">
          <span class="ev-time">${ev.tijd}</span>
          <span class="ev-dot">${
            ev.datum === '2026-06-14' ? '<span style="color:var(--gold-lt);font-size:1rem;">!</span>' :
            ev.type === 'nacht' ? '🌙' :
            ev.type === 'taize' ? '✝' :
            ev.tk === 'ev_lgbtq' ? '✝' :
            ev.tk === 'ev_concert_juni' ? '🎵' :
            ev.tk === 'ev_drempel' ? '✝👪' :
            ev.tk === 'ev_pinkster' ? '✝' :
            ev.tk === 'ev_pinksterwake' ? '✝ <img src="paulusgemeenschappen_logo_tekening.png" style="height:1.1em;vertical-align:middle;display:inline-block;">' :
            ev.type === 'viering' ? '✝' :
            ev.type === 'cleanup' ? `<img src="paulusgemeenschappen_logo_tekening.png" style="height:1.1em;vertical-align:middle;display:inline-block;">` :
            ev.tekst?.includes(t('ev_sun_eucharistie')) ? '✝' :
            ev.tekst?.includes(t('ev_sun_woord')) ? '✝' :
            '◆'
          }</span>
          <span>${ev.onclick
            ? `<a href="#" onclick="${ev.onclick};return false;" style="cursor:zoom-in;">${ev.tekst}</a>`
            : ev.link
            ? `<a href="${ev.link}" target="_blank">${ev.tekst}</a>`
            : ev.tekst}${ev.gratis
            ? `<span style="margin-left:0.5rem;font-size:0.75rem;font-weight:600;color:var(--gold-dk);">(gratis)</span>`
            : ''}${ev.voorganger
            ? `<span style="margin-left:0.7rem;font-size:0.78rem;color:var(--muted);font-style:italic;">— ${ev.rol === 'voorgangers' ? 'Voorgangers' : ev.type === 'concert' || ev.tk === 'ev_concert_juni' ? t('ev_muzikanten') : t('ev_voorganger')}: ${ev.voorganger}</span>`
            : ''}</span>
        </div>`).join('')}
      </div>
    </div>`;
  }

  if (!count) html += `<div class="agenda-empty">${t('ag_empty')}</div>`;
  html += '</div>';
  html += `<p style="margin-top:0.8rem;font-size:0.8rem;font-style:italic;color:var(--muted);">✝ ${t('ag_leg_viering')} · ${t('ag_leg_taize')} · ${t('ag_leg_lgbtq')} &nbsp;|&nbsp; 🌙 ${t('ag_leg_night')} &nbsp;|&nbsp; 🎵 ${t('ag_leg_concert')} &nbsp;|&nbsp; 👪 ${t('ag_leg_drempel')} &nbsp;|&nbsp; <img src="paulusgemeenschappen_logo_tekening.png" style="height:1em;vertical-align:middle;display:inline-block;"> Paulusgemeenschappen</p>`;  
  return html;
}
