// =============================================
// main.js — Page rendering and event handling
// =============================================

function renderPage(){
  const t = getLang();
  document.documentElement.lang = currentLang;
  setH('topbar-left', t.topbarTxt);
  setH('btn-skip', t.skip); setH('btn-sr', t.sr);
  document.getElementById('btn-en').classList.toggle('active', currentLang==='en');
  document.getElementById('btn-mr').classList.toggle('active', currentLang==='mr');
  setH('hdr-sub', t.subheading);
  setH('hdr-h1', t.h1);
  setH('hdr-tag', t.tagline);
  setH('hdr-jh', t.jaiHind);
  ['Home','About','Mem','Svc','Sch','Nt','Gal','Bdg','Rti','Con'].forEach((k,i)=>{
    const keys = ['navHome','navAbout','navMem','navSvc','navSch','navNt','navGal','navBdg','navRti','navCon'];
    const el = document.getElementById('nav-'+k.toLowerCase());
    if(el) el.innerHTML = t[keys[i]];
  });
  setH('hero-badge', t.heroBadge);
  setH('hero-h2', t.heroH2);
  setH('hero-p', t.heroP);
  setH('hero-btn1', t.heroBtn1);
  setH('hero-btn2', t.heroBtn2);
  setH('stat-pop', t.statPop); setH('stat-ward', t.statWard);
  setH('stat-sch', t.statSch); setH('stat-vil', t.statVil);
  setH('mq', t.mq.map(m=>`<span>${m}</span>`).join(''));
  setH('svc-title', t.svcTitle); setH('svc-sub', t.svcSub);
  setH('svc-grid', t.svc.map((s,i)=>`
    <div class="card" onclick="openForm('svc',${i})">
      <div class="card-icon">${s.icon}</div>
      <h3>${s.title}</h3>
      <p>${s.desc}</p>
      <button class="card-apply-btn">✍️ ${t.applyBtn}</button>
    </div>`).join(''));
  setH('nt-title', t.ntTitle); setH('nt-sub', t.ntSub); setH('nt-hdr', t.ntHeader);
  setH('nt-board', t.nt.map(([d,txt,isN])=>`
    <div class="notice-item">
      <div class="notice-date">${d}</div>
      <div class="notice-text">${txt}${isN?'<span class="new-badge">NEW</span>':''}</div>
    </div>`).join(''));
  setH('gal-title', t.galTitle); setH('gal-sub', t.galSub);
  setH('mem-title', t.memTitle); setH('mem-sub', t.memSub);
  const mNames = ["[सरपंच नाव]","[उप-सरपंच नाव]","[वार्ड सदस्य 1]","[वार्ड सदस्य 2]","[वार्ड सदस्य 3]","[वार्ड सदस्य 4]","[ग्रामसेवक]","[रोजगार सहायक]"];
  setH('mem-grid', t.memRoles.map((r,i)=>`
    <div class="member-card" ${i===0?'style="border:2px solid var(--gold)"':''}>
      ${i===0 ? `<div class="member-photo-wrap"><img src="SARPANCH_IMG" alt="Sarpanch" loading="lazy"></div>` : `<div style="padding-top:16px;"><div class="member-avatar">👤</div></div>`}
      <div class="member-card-body">
        <div class="role">${r}</div>
        <div class="name">${mNames[i]}</div>
        <div class="ward">${t.memWards[i]}</div>
      </div>
    </div>`).join(''));
  setH('sch-title', t.schTitle); setH('sch-sub', t.schSub);
  setH('sch-list', t.sch.map(s=>`
    <div class="scheme-item">
      <div class="scheme-icon">${s.icon}</div>
      <div>
        <h4>${s.title}</h4>
        <p>${s.desc}</p>
        <button class="scheme-apply-btn" onclick="openForm('scheme','${s.key}')">✍️ ${t.schApply}</button>
      </div>
    </div>`).join(''));
  setH('abt-title', t.abtTitle); setH('abt-sub', t.abtSub);
  setH('abt-table', t.abtRows.map((r,i)=>`<tr><td>${r}</td><td>${t.abtVals[i]}</td></tr>`).join(''));
  setH('bdg-title', t.bdgTitle); setH('bdg-sub', t.bdgSub);
  setH('bdg-grid', t.bdg.map(([ic,ti,de,li])=>`
    <div class="card"><div class="card-icon">${ic}</div><h3>${ti}</h3><p>${de}</p><a href="#" class="card-apply-btn" style="text-decoration:none">${li}</a></div>`).join(''));
  setH('rti-title', t.rtiTitle); setH('rti-p', t.rtiP);
  setH('rti-btn1', t.rtiBtn1); setH('rti-btn2', t.rtiBtn2);
  setH('con-title', t.conTitle); setH('con-sub', t.conSub);
  setH('con-addr-l', t.conAddrL); setH('con-addr-v', t.conAddrV);
  setH('con-ph-l', t.conPhL); setH('con-ph-v', t.conPhV);
  setH('con-mob-l', t.conMobL); setH('con-mob-v', t.conMobV);
  setH('con-em-l', t.conEmL); setH('con-em-v', t.conEmV);
  setH('con-hr-l', t.conHrL); setH('con-hr-v', t.conHrV);
  setH('ql-title', t.qlTitle);
  setH('ft-about-t', t.ftAboutT); setH('ft-about-p', t.ftAboutP);
  setH('ft-ql', t.ftQL); setH('ft-res', t.ftRes); setH('ft-help', t.ftHelp);
  const ftSections = ['ft-links','ft-res2','ft-help2'];
  const ftKeys = ['ftLinks','ftRes2','ftHelp2'];
  const ftHrefs = [['#home','#about','#members','#services','#schemes'],
    ['#notices','#budget','#rti','https://egramswaraj.gov.in','https://nrega.nic.in'],
    ['#contact','#','#','#','#']];
  ftKeys.forEach((k,si)=>{
    setH(ftSections[si], t[k].map((l,li)=>`<li><a href="${ftHrefs[si][li]}">${l}</a></li>`).join(''));
  });
  setH('ft-copy', t.copyright);
  setH('ft-updated', `${t.lastUpd} &nbsp;|&nbsp; <a href="#">${t.webPol}</a>`);
}

function setH(id,html){const el=document.getElementById(id);if(el)el.innerHTML=html;}
function setLang(lang){currentLang=lang;renderPage();}

function openForm(type, key){
  const t = getLang(); const fL = t.fL;
  let title, formHTML;
  if(type==='svc'){
    title = t.svc[key].title;
    formHTML = FORMS[SVC_FORM_MAP[key]] ? FORMS[SVC_FORM_MAP[key]](fL) : '';
  } else {
    const s = t.sch.find(x=>x.key===key);
    title = s ? s.title : key;
    formHTML = FORMS[key] ? FORMS[key](fL) : '';
  }
  document.getElementById('form-title').textContent = title;
  document.getElementById('form-notice-txt').textContent = fL.notice;
  document.getElementById('form-fields').innerHTML = formHTML;
  document.getElementById('form-upload-label').textContent = fL.uploadDocs;
  document.getElementById('form-upload-hint').textContent = fL.uploadHint;
  document.getElementById('form-submit-btn').textContent = fL.submit;
  document.getElementById('form-reset-btn').textContent = fL.reset;
  document.getElementById('form-success').style.display='none';
  document.getElementById('main-form').style.display='block';
  document.getElementById('success-title').textContent = fL.successTitle;
  document.getElementById('success-msg').textContent = fL.successMsg;
  document.getElementById('ref-label').textContent = fL.refLabel;
  document.getElementById('form-overlay').classList.add('open');
  document.body.style.overflow='hidden';
}
function closeForm(){document.getElementById('form-overlay').classList.remove('open');document.body.style.overflow='';}
function submitForm(e){
  e.preventDefault();
  const ref = 'PGP-'+Date.now().toString().slice(-8);
  document.getElementById('ref-num').textContent = ref;
  document.getElementById('main-form').style.display='none';
  document.getElementById('form-success').style.display='block';
}
function openLightbox(src, caption){
  const lb = document.getElementById('lightbox');
  lb.querySelector('img').src = src;
  lb.querySelector('.lightbox-caption').textContent = caption;
  lb.classList.add('open');
  document.body.style.overflow='hidden';
}
function closeLightbox(){
  document.getElementById('lightbox').classList.remove('open');
  document.body.style.overflow='';
}

// -------- Initialise & scroll listener --------
renderPage();
const secs = document.querySelectorAll('[id]');
const navAs = document.querySelectorAll('nav a');
window.addEventListener('scroll',()=>{
  let cur='';
  secs.forEach(s=>{if(window.scrollY>=s.offsetTop-110)cur=s.id;});
  navAs.forEach(a=>{a.classList.remove('active');if(a.getAttribute('href')==='#'+cur)a.classList.add('active');});
});
document.querySelectorAll('a[href^="#"]').forEach(a=>{
  a.addEventListener('click',e=>{
    const t=document.querySelector(a.getAttribute('href'));
    if(t){e.preventDefault();t.scrollIntoView({behavior:'smooth',block:'start'});}
  });
});