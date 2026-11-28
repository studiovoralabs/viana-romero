'use strict';
const header = document.querySelector('#header');
const desktop = matchMedia('(min-width: 1001px)');
const hover = matchMedia('(hover: hover) and (pointer: fine)');
const reduced = matchMedia('(prefers-reduced-motion: reduce)');
const triggers = [...document.querySelectorAll('[data-mega]')];
const panels = [...document.querySelectorAll('.mega')];
const stage = document.querySelector('#mega-stage');
let active = null, panelTimer;
function setMega(name) {
  if (name && !desktop.matches) return;
  if (active === name) return;
  clearTimeout(panelTimer);
  active = name;
  triggers.forEach(button => button.setAttribute('aria-expanded', String(button.dataset.mega === name)));
  if (name) {
    panels.forEach(panel => { panel.hidden = panel.id !== `mega-${name}`; panel.inert = panel.hidden; });
    header.classList.remove('is-closing');
    header.classList.add('is-open');
    stage.style.height = document.getElementById(`mega-${name}`).getBoundingClientRect().height + 'px';
  } else {
    panels.forEach(panel => panel.inert = true);
    header.classList.remove('is-open');
    header.classList.add('is-closing');
    stage.style.height = '0px';
    const finish = () => { if (!active) { panels.forEach(panel => panel.hidden = true); header.classList.remove('is-closing'); } };
    if (reduced.matches || !desktop.matches) finish(); else panelTimer = setTimeout(finish, 950);
  }
}
window.addEventListener('resize', () => { if (active && desktop.matches) stage.style.height = document.getElementById(`mega-${active}`).getBoundingClientRect().height + 'px'; });
document.fonts?.ready.then(() => { if (active && desktop.matches) stage.style.height = document.getElementById(`mega-${active}`).getBoundingClientRect().height + 'px'; });
triggers.forEach(button => {
  button.addEventListener('pointerenter', event => { if (hover.matches && event.pointerType === 'mouse') setMega(button.dataset.mega); });
  button.addEventListener('click', event => {
    // A mouse click on a panel already revealed by hover keeps it open.
    const name = button.dataset.mega;
    setMega(active === name && (event.detail === 0 || !hover.matches) ? null : name);
  });
});
header.querySelectorAll('.desktop-nav a,.brand').forEach(link => link.addEventListener('pointerenter', () => { if (hover.matches) setMega(null); }));
header.addEventListener('pointerleave', () => { if (hover.matches) setMega(null); });
header.addEventListener('focusout', event => { if (event.relatedTarget && !header.contains(event.relatedTarget) && !header.matches(':hover')) setMega(null); });
document.addEventListener('pointerdown', event => { if (!header.contains(event.target)) setMega(null); });
document.addEventListener('keydown', event => { if (event.key === 'Escape' && active) { const button = triggers.find(b => b.dataset.mega === active); setMega(null); button?.focus(); } });
function updateScroll(){
  header.classList.toggle('is-solid', window.scrollY > 24);
  const barHeight = header.querySelector('.bar').offsetHeight;
  const overDark = ['equipe','contato'].some(id => {const bounds = document.getElementById(id)?.getBoundingClientRect();return bounds && bounds.top <= barHeight * .5 && bounds.bottom > barHeight * .5;});
  header.classList.toggle('is-over-dark', overDark);
}
window.addEventListener('scroll', updateScroll, {passive:true}); updateScroll();
const dialog = document.querySelector('#mobile-menu');
const openButton = document.querySelector('#open-menu');
const mobilePanel = dialog.querySelector('.mobile-panel');
const cookieTrigger = document.querySelector('#cookie-trigger');
const cookieHome = document.querySelector('#cookie-home');
// V38 — A cor acompanha o fundo no centro do botão, não o topo da tela.
const cookieDarkSections = [...document.querySelectorAll('#inicio, #equipe, #contato')];
let cookieThemeFrame = 0;
function updateCookieTheme(){
  cookieThemeFrame = 0;
  const rect = cookieTrigger.getBoundingClientRect();
  const x = rect.left + rect.width / 2, y = rect.top + rect.height / 2;
  const dark = dialog.open || cookieDarkSections.some(section => {
    const bounds = section.getBoundingClientRect();
    return bounds.left <= x && bounds.right > x && bounds.top <= y && bounds.bottom > y;
  });
  cookieTrigger.classList.toggle('is-over-dark', dark);
}
function queueCookieTheme(){if(!cookieThemeFrame)cookieThemeFrame=requestAnimationFrame(updateCookieTheme);}
window.addEventListener('scroll',queueCookieTheme,{passive:true});
window.addEventListener('resize',queueCookieTheme,{passive:true});
window.addEventListener('pageshow',queueCookieTheme);
window.visualViewport?.addEventListener('resize',queueCookieTheme,{passive:true});
window.visualViewport?.addEventListener('scroll',queueCookieTheme,{passive:true});
if('ResizeObserver' in window){const cookieResize=new ResizeObserver(queueCookieTheme);document.querySelectorAll('main, main > section').forEach(section=>cookieResize.observe(section));}
updateCookieTheme();

let pendingAnchor = null;
const closeButton = document.querySelector('#close-menu');
let closing = false;
function openMenu(){
  if (dialog.open || desktop.matches) return;
  setMega(null); dialog.append(cookieTrigger); dialog.showModal(); updateCookieTheme(); document.body.classList.add('menu-open'); openButton.setAttribute('aria-expanded','true');
  // Force initial off-screen style before moving the drawer in.
  mobilePanel.getBoundingClientRect(); dialog.classList.add('is-visible'); closeButton.focus({preventScroll:true});
}
function finishClose(){ if (!dialog.open) return; dialog.close(); cookieHome.append(cookieTrigger); updateCookieTheme(); dialog.classList.remove('is-visible'); document.body.classList.remove('menu-open'); openButton.setAttribute('aria-expanded','false'); closing=false; if (pendingAnchor) { const target = pendingAnchor; pendingAnchor = null; target.scrollIntoView({block:'start'}); target.querySelector('h2')?.focus({preventScroll:true}); } else if (!desktop.matches) openButton.focus({preventScroll:true}); }
let closeTimer;
function closeMenu(){ if (!dialog.open || closing) return; closing=true; dialog.classList.remove('is-visible'); if (reduced.matches) finishClose(); else closeTimer=setTimeout(finishClose,1350); }
dialog.addEventListener('transitionend',event=>{ if (event.target===mobilePanel && event.propertyName==='transform' && closing){clearTimeout(closeTimer);finishClose();} });
openButton.addEventListener('click',openMenu); closeButton.addEventListener('click',closeMenu);
dialog.addEventListener('cancel',event=>{event.preventDefault();closeMenu();});
desktop.addEventListener('change',()=>{setMega(null);if(desktop.matches){clearTimeout(closeTimer);finishClose();}});
const mobileSections=[...document.querySelectorAll('[data-mobile-section]')];
mobileSections.forEach(button=>button.addEventListener('click',()=>{
  const shouldOpen=button.getAttribute('aria-expanded')==='false';
  mobileSections.forEach(other=>{const isOpen=other===button && shouldOpen;other.setAttribute('aria-expanded',String(isOpen));document.getElementById(other.getAttribute('aria-controls')).hidden=!isOpen;other.querySelector('span').textContent=isOpen?'−':'+';});
}));
const notice=document.querySelector('#notice'); let noticeTimer;
function showNotice(message){clearTimeout(noticeTimer);notice.hidden=false;notice.textContent=message;noticeTimer=setTimeout(()=>{notice.hidden=true;},4500);}
// Replace empty destinations as each section is implemented; existing anchors work automatically.
document.addEventListener('click',event=>{
  const link=event.target.closest('a[href^="#"]:not(.skip)');
  const instagram=event.target.closest('[data-instagram]');
  if(link){const target=document.getElementById(link.hash.slice(1));if(!target){event.preventDefault();showNotice('Esta seção será adicionada em uma próxima etapa do site.');}else if(dialog.open){event.preventDefault();pendingAnchor=target;history.replaceState(null,'',link.hash);}setMega(null);if(dialog.open)closeMenu();}
  if(instagram){showNotice('O perfil oficial do Instagram ainda será informado.');setMega(null);if(dialog.open)closeMenu();}
});

// Preferências locais. Nenhuma ferramenta de análise é carregada nesta versão.
const cookieDialog=document.querySelector('#cookie-dialog');
const analyticsInput=document.querySelector('#analytics-consent');
const cookieStatus=document.querySelector('#cookie-status');
const cookieKey='viana.cookies.v2';
const measurementId=String(window.VIANA_CONFIG?.ga4||'');
const analyticsAvailable=/^G-[A-Z0-9]+$/.test(measurementId);
const consentDays=180;
function readConsent(){try{const value=JSON.parse(localStorage.getItem(cookieKey));return value?.version===2 && value.expiresAt>Date.now()?value:null;}catch{return null;}}
analyticsInput.disabled=!analyticsAvailable;
if(analyticsAvailable){document.querySelector('#analytics-description').textContent='O Google Analytics mede visitas somente se você autorizar.';document.querySelector('#analytics-detail-text').textContent='Google Analytics: cookies _ga e _ga_*; validade configurada de até 180 dias. Você pode retirar a autorização a qualquer momento.';}

let cookieOpener=null, cookieClosing=false, cookieTimer;
const cookieBody=cookieDialog.querySelector('.cookie-body');
function openCookies(button){
  if(cookieDialog.open) return;
  cookieOpener=button;
  analyticsInput.checked=analyticsAvailable&&readConsent()?.analytics===true;
  cookieStatus.textContent='';
  cookieDialog.showModal();
  document.body.classList.add('cookies-open');
  cookieBody.scrollTop=0;
  cookieDialog.getBoundingClientRect();
  cookieDialog.classList.add('is-visible');
  cookieDialog.querySelector('[data-cookie-close]').focus({preventScroll:true});
}
function finishCookies(){
  clearTimeout(cookieTimer);
  if(cookieDialog.open) cookieDialog.close();
  cookieDialog.classList.remove('is-visible');
  document.body.classList.remove('cookies-open');
  cookieClosing=false;
  cookieOpener?.focus({preventScroll:true});
}
function closeCookies(){
  if(!cookieDialog.open||cookieClosing)return;
  cookieClosing=true;
  cookieDialog.classList.remove('is-visible');
  if(reduced.matches){finishCookies();return;}
  cookieTimer=setTimeout(finishCookies,desktop.matches?650:1350);
}
cookieDialog.addEventListener('transitionend',e=>{if(e.target===cookieDialog && e.propertyName==='transform' && cookieClosing)finishCookies();});
cookieTrigger.addEventListener('click',()=>{if(!closing)openCookies(cookieTrigger);});
cookieDialog.querySelector('[data-cookie-close]').addEventListener('click',closeCookies);
cookieDialog.addEventListener('cancel',e=>{e.preventDefault();closeCookies();});
cookieDialog.addEventListener('click',e=>{if(e.target===cookieDialog&&desktop.matches){const r=cookieDialog.getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)closeCookies();}});
cookieDialog.querySelectorAll('.cookie-expand').forEach(button=>button.addEventListener('click',()=>{
  const open=button.getAttribute('aria-expanded')!=='true';
  button.setAttribute('aria-expanded',String(open));
  document.getElementById(button.getAttribute('aria-controls')).hidden=!open;
}));
document.querySelectorAll('[data-consent]').forEach(button=>button.addEventListener('click',()=>{
  const action=button.dataset.consent;
  const value={necessary:true,analytics:analyticsAvailable&&(action==='accept'||(action==='save'&&analyticsInput.checked)),version:2,expiresAt:Date.now()+consentDays*86400000};
  try{localStorage.setItem(cookieKey,JSON.stringify(value));localStorage.removeItem('viana.cookies.v1');}catch{cookieStatus.textContent='Não foi possível salvar sua escolha neste navegador.';return;}
  window.dispatchEvent(new CustomEvent('viana:consent',{detail:value}));closeCookies();
}));

// V06: animações de entrada reutilizáveis, sem dependências e sem ocultar conteúdo se JS falhar.
function initReveals(){
  const items=[...document.querySelectorAll('[data-reveal]')];
  if(reduced.matches || !('IntersectionObserver' in window)) return;
  const observer=new IntersectionObserver(entries=>{
    for(const entry of entries){if(entry.isIntersecting){entry.target.classList.add('is-revealed');observer.unobserve(entry.target);}}
  },{threshold:0.12,rootMargin:'0px 0px -24px 0px'});
  for(const item of items){
    // Ao recarregar com scroll já avançado, não esconda conteúdo acima da viewport.
    if(item.getBoundingClientRect().bottom<=0) continue;
    item.classList.add('reveal-ready');observer.observe(item);
    item.addEventListener('focusin',()=>{item.classList.add('is-revealed');observer.unobserve(item);},{once:true});
  }
  reduced.addEventListener('change',()=>{if(reduced.matches){observer.disconnect();items.forEach(item=>item.classList.add('is-revealed'));}});
}
initReveals();

// V07 — deslocamento reversível pela posição do scroll, com amortecimento e sem autoplay.
function initEditorialMarquee(){
  const band=document.querySelector('.editorial-marquee'), track=band?.querySelector('.marquee-track');
  if(!track || reduced.matches)return;
  let visible=false,frame=0,current=0,target=0,lastY=window.scrollY,unit=1;
  const measure=()=>{unit=track.firstElementChild.getBoundingClientRect().width || 1;};
  measure();window.addEventListener('resize',measure,{passive:true});document.fonts?.ready.then(measure);
  const render=()=>{frame=0;if(!visible||reduced.matches)return;current+=(target-current)*.085;if(Math.abs(target-current)<.12)current=target;const offset=((current%unit)+unit)%unit;track.style.transform=`translate3d(${-offset-unit}px,0,0)`;if(current!==target)frame=requestAnimationFrame(render);};
  const update=()=>{const y=window.scrollY,delta=y-lastY;lastY=y;if(!visible||reduced.matches)return;target+=delta*.75;if(!frame)frame=requestAnimationFrame(render);};
  if('IntersectionObserver' in window){new IntersectionObserver(([entry])=>{visible=entry.isIntersecting;lastY=window.scrollY;if(visible&&!frame)frame=requestAnimationFrame(render);}).observe(band);}else visible=true;
  window.addEventListener('scroll',update,{passive:true});
}
initEditorialMarquee();

// V07 — carrossel local: rolagem só dentro da área das imagens, gestos horizontais em telas touch.
function initBenefits(){
  const explorer=document.querySelector('#benefit-explorer');if(!explorer)return;
  const visual=explorer.querySelector('.benefit-visual');
  const cards=[...explorer.querySelectorAll('.benefit-card')],details=[...explorer.querySelectorAll('.benefit-detail')];
  const count=explorer.querySelector('#benefit-count');
  const line=explorer.querySelector('.benefit-progress-line');
  
  let current=-1,lastWheel=0,wheelSum=0,gestureUntil=0,wheelDirection=0,burstStart=0;
  const categorySelect=document.querySelector('#benefit-category-select');
  const categoryFilter=document.querySelector('#benefit-category-filter');
  const categoryOf=detail=>detail.querySelector('.benefit-category').textContent.trim();
  let pool=[],n=0;
  const cta=explorer.querySelector('.benefit-cta');
  // V09: carregar apenas as fotografias próximas à seleção, quando o carrossel entrar na tela.
  // Mantém a imagem local até que a alternativa em alta resolução esteja disponível.
  let galleryVisible=false;
  function loadVisiblePhotos(){
    if(!galleryVisible)return;
    cards.forEach(card=>{
      if(card.dataset.offset==='hidden')return;
      const original=card.querySelector('img[data-hd-src]');
      if(!original || original.dataset.hdState)return;
      original.dataset.hdState='loading';
      const photo=new Image();
      photo.crossOrigin='anonymous';
      photo.referrerPolicy='no-referrer';
      photo.decoding='async';
      photo.alt=original.dataset.hdAlt || original.alt;
      photo.width=original.width;photo.height=original.height;
      photo.className=original.className;
      photo.draggable=false;
      photo.onload=()=>{if(photo.naturalWidth>=900 && original.isConnected){original.replaceWith(photo);}else{original.dataset.hdState='fallback';}};
      photo.onerror=()=>{original.dataset.hdState='fallback';};
      photo.src=original.dataset.hdSrc;
    });
  }
  if('IntersectionObserver' in window){
    const photoObserver=new IntersectionObserver(entries=>{
      galleryVisible=entries[0].isIntersecting;
      if(galleryVisible)loadVisiblePhotos();
    },{rootMargin:'300px 0px'});
    photoObserver.observe(visual);
  }else{galleryVisible=true;}
  const setIndex=(i,force=false)=>{
    if(!n)return;
    i=Math.max(0,Math.min(n-1,Number(i)));if(!Number.isInteger(i)||(!force&&i===current))return;
    const restoreFocus=cards.includes(document.activeElement);
    current=i;
    const actual=pool[i];
    cards.forEach((card,j)=>{
      const pos=pool.indexOf(j);
      if(pos===-1){card.hidden=true;card.dataset.offset='hidden';card.setAttribute('aria-hidden','true');card.inert=true;card.tabIndex=-1;return;}
      card.hidden=false;
      const off=((pos-i+Math.floor(n/2)+n)%n)-Math.floor(n/2);
      const visible=Math.abs(off)<=2;
      card.dataset.offset=visible?String(off):'hidden';card.setAttribute('aria-hidden',String(!visible));card.tabIndex=off===0?0:-1;card.inert=!visible;
      card.setAttribute('aria-label',off===0?`${details[j].querySelector('h3').textContent}. Clique para ver outro benefício.`:details[j].querySelector('h3').textContent);
    });
    details.forEach((detail,j)=>detail.hidden=j!==actual);
    count.textContent=`${String(i+1).padStart(2,'0')} / ${String(n).padStart(2,'0')}`;
    line.style.setProperty('--progress',`${(i+1)/n*100}%`);
    cta.dataset.contactSubject=details[actual].querySelector('h3').textContent.trim();
    if(restoreFocus)cards[actual].focus({preventScroll:true});
    loadVisiblePhotos();
  };
  function applyCategory(value){
    categorySelect.value=value;
    pool=details.map((detail,j)=>value==='todos'||categoryOf(detail)===value?j:-1).filter(j=>j>=0);n=pool.length;
    current=-1;gestureUntil=0;wheelSum=0;lastWheel=0;wheelDirection=0;burstStart=0;
    setIndex(0,true);
  }
  applyCategory('todos');categoryFilter.hidden=false;explorer.classList.add('is-enhanced');
  categorySelect.addEventListener('change',()=>applyCategory(categorySelect.value));
  window.addEventListener('pageshow',event=>{if(event.persisted)applyCategory('todos');});
  document.querySelectorAll('[data-benefit-all]').forEach(link=>link.addEventListener('click',()=>applyCategory('todos')));
  cards.forEach((card,j)=>card.addEventListener('click',()=>{const i=pool.indexOf(j);if(i>=0&&performance.now()>gestureUntil)setIndex(i===current?(current+1)%n:i);}));
  visual.addEventListener('keydown',event=>{if(['ArrowUp','ArrowDown','ArrowLeft','ArrowRight','Home','End'].includes(event.key)){event.preventDefault();setIndex(event.key==='Home'?0:event.key==='End'?n-1:current+(['ArrowDown','ArrowRight'].includes(event.key)?1:-1));}});
  // Uma troca por gesto de roda/trackpad; para navegar a página basta rolar fora da foto.
  visual.addEventListener('wheel',event=>{
    if(event.ctrlKey||Math.abs(event.deltaX)>Math.abs(event.deltaY)||!event.deltaY)return;
    const dir=Math.sign(event.deltaY),now=performance.now();
    if((current===0&&dir<0)||(current===n-1&&dir>0))return;
    if(now-lastWheel>220||dir!==wheelDirection){wheelSum=0;wheelDirection=dir;burstStart=now;}
    lastWheel=now;
    // Um gesto prolongado volta a rolar a página, mesmo sobre as fotos.
    if(now-burstStart>1100||!event.cancelable)return;
    event.preventDefault();wheelSum+=Math.abs(event.deltaY)*(event.deltaMode===1?16:event.deltaMode===2?visual.clientHeight:1);
    if(wheelSum<35||now<gestureUntil)return;
    wheelSum=0;gestureUntil=now+1000;setIndex(current+dir);
  },{passive:false});
  // Gestos horizontais e verticais iniciados nas fotos. Fora das fotos a página rola normalmente.
  let drag=null;
  visual.addEventListener('pointerdown',event=>{
    if(event.button!==0||!event.isPrimary)return;
    const card=event.target.closest('.benefit-card');if(!card)return;
    drag={id:event.pointerId,x:event.clientX,y:event.clientY,card};
    // Não capturar o ponteiro até confirmar arrasto, preservando o clique normal.
  });
  visual.addEventListener('pointermove',event=>{
    if(!drag||drag.id!==event.pointerId)return;
    if(Math.hypot(event.clientX-drag.x,event.clientY-drag.y)>12&&!drag.captured){
      try{drag.card.setPointerCapture(event.pointerId);drag.captured=true;}catch{}
    }
  });
  visual.addEventListener('pointerup',event=>{
    if(!drag||drag.id!==event.pointerId)return;
    const dx=event.clientX-drag.x,dy=event.clientY-drag.y,axis=Math.abs(dx)>Math.abs(dy)?dx:dy;
    if(Math.abs(axis)>42){gestureUntil=performance.now()+450;setIndex(current+(axis<0?1:-1));}
    drag=null;
  });
  visual.addEventListener('pointercancel',()=>{drag=null;});
  visual.addEventListener('lostpointercapture',()=>{drag=null;});

}
initBenefits();
// V23: preenche o assunto antes que a navegação existente feche o menu e role ao contato.
document.addEventListener('click',event=>{
  const link=event.target.closest('a[data-contact-subject]');
  if(!link||event.button!==0||event.ctrlKey||event.metaKey||event.shiftKey||event.altKey)return;
  const select=document.querySelector('#contact-subject');
  if([...select.options].some(option=>option.value===link.dataset.contactSubject)){
    select.value=link.dataset.contactSubject;
    select.dispatchEvent(new Event('change',{bubbles:true}));
  }
},true);

// V10 — Retratos: hover natural no desktop e toque/teclado para alternar cor.
function initTeamPortraits(){
  const portraits = [...document.querySelectorAll('.team-portrait')];
  for (const portrait of portraits) {
    portrait.addEventListener('click', () => {
      const activate = portrait.getAttribute('aria-pressed') !== 'true';
      portraits.forEach(other => other.setAttribute('aria-pressed', String(other === portrait && activate)));
    });
  }
  window.addEventListener('resize', updateScroll, {passive:true});
}
initTeamPortraits();


// V14 — FAQ com filtros por categoria e expansão individual.
function initFaq(){
  const section=document.querySelector('.faq-section');
  if(!section) return;
  const select=section.querySelector('#faq-category-select');
  const items=[...section.querySelectorAll('.faq-item')];
  const questions=items.map(item=>item.querySelector('.faq-question')).filter(Boolean);
  const matches=(item,category)=>category==='todos'||item.dataset.faqCategory.split(/\s+/).includes(category);
  const closeItem=item=>{item.classList.remove('is-open');item.querySelector('.faq-question')?.setAttribute('aria-expanded','false');item.querySelector('.faq-answer-wrap')?.setAttribute('aria-hidden','true');};
  const openItem=item=>{items.forEach(other=>{if(other!==item) closeItem(other);});item.classList.add('is-open');item.querySelector('.faq-question')?.setAttribute('aria-expanded','true');item.querySelector('.faq-answer-wrap')?.setAttribute('aria-hidden','false');};
  function applyFilter(category){
    if(select) select.value=category;
    const visible=[];
    items.forEach(item=>{const show=matches(item,category);item.hidden=!show;closeItem(item);if(show)visible.push(item);});
    visible.forEach((item,index)=>item.querySelector('.faq-index').textContent=String(index+1).padStart(2,'0'));
  }
  select?.addEventListener('change',event=>applyFilter(event.target.value));
  questions.forEach(button=>button.addEventListener('click',()=>{
    const item=button.closest('.faq-item');
    const open=button.getAttribute('aria-expanded')==='true';
    if(open){closeItem(item);}else{openItem(item);} 
  }));
  section.querySelector('.faq-list').classList.add('is-enhanced');
  applyFilter('todos');
  window.addEventListener('pageshow',event=>{if(event.persisted)applyFilter('todos');});
}
initFaq();


// V16 — Formulário local: abre uma conversa, sem enviar ou guardar dados no site.
function initContact(){
  const form=document.querySelector('#contact-form');if(!form)return;
  const submit=form.querySelector('button[type="submit"]');
  const status=document.querySelector('#contact-status');
  const recipients={eduarda:'5571988785830',dalia:'5571983150847'};
  form.addEventListener('submit',event=>{
    event.preventDefault();
    if(!form.reportValidity())return;
    const data=new FormData(form);
    const name=String(data.get('nome')||'').trim(),message=String(data.get('mensagem')||'').trim();
    const email=String(data.get('email')||'').trim(),subject=String(data.get('assunto')||'');
    const recipient=String(data.get('destinatario')||'');
    if(!name||!message||!subject||!Object.hasOwn(recipients,recipient)){
      status.hidden=false;status.textContent='Confira os campos obrigatórios antes de continuar.';return;
    }
    const text=['Olá! Gostaria de receber orientação previdenciária.', '', 'Nome: '+name, ...(email?['E-mail: '+email]:[]), 'Assunto: '+subject, '', 'Mensagem: '+message].join('\n');
    const url='https://wa.me/'+recipients[recipient]+'?text='+encodeURIComponent(text);
    status.hidden=false;status.textContent='Confira a mensagem no WhatsApp e envie quando estiver pronto.';
    window.location.assign(url);
  });
  submit.disabled=false;
}
initContact();


// V18 — Link do rodapé reutiliza o mesmo painel de cookies, sem criar outro controle flutuante.
document.querySelector('.footer-cookie-link')?.addEventListener('click',event=>openCookies(event.currentTarget));

// V19 — GA4 opcional (modo básico): nenhuma tag ou requisição Google sem autorização.
function initAnalytics(){
  if(!analyticsAvailable)return;
  let loaded=false;
  const disableKey='ga-disable-'+measurementId;
  window[disableKey]=true;
  function removeAnalyticsCookies(){
    for(const item of document.cookie.split(';')){
      const name=item.split('=')[0].trim();if(!/^_ga(?:_|$)/.test(name))continue;
      const domain=location.hostname;
      document.cookie=name+'=; Max-Age=0; Path=/; SameSite=Lax';
      if(domain.includes('.')){const parts=domain.split('.');for(let i=0;i<parts.length-1;i++){document.cookie=name+'=; Max-Age=0; Path=/; Domain='+parts.slice(i).join('.')+'; SameSite=Lax';}}
    }
  }
  function sync(value){
    const granted=value?.analytics===true&&value.expiresAt>Date.now();
    window[disableKey]=!granted;
    if(!granted){if(loaded)window.gtag('consent','update',{analytics_storage:'denied',ad_storage:'denied',ad_user_data:'denied',ad_personalization:'denied'});removeAnalyticsCookies();return;}
    if(loaded){window.gtag('consent','update',{analytics_storage:'granted'});return;}
    loaded=true;
    window.dataLayer=window.dataLayer||[];window.gtag=function(){window.dataLayer.push(arguments);};
    window.gtag('consent','default',{analytics_storage:'denied',ad_storage:'denied',ad_user_data:'denied',ad_personalization:'denied'});
    window.gtag('consent','update',{analytics_storage:'granted'});
    window.gtag('js',new Date());
    window.gtag('config',measurementId,{send_page_view:false,allow_google_signals:false,allow_ad_personalization_signals:false,cookie_expires:15552000,cookie_update:false,page_location:location.origin+location.pathname,page_referrer:''});
    window.gtag('event','page_view',{page_location:location.origin+location.pathname,page_referrer:''});
    const script=document.createElement('script');script.async=true;script.src='https://www.googletagmanager.com/gtag/js?id='+encodeURIComponent(measurementId);script.referrerPolicy='no-referrer';document.head.append(script);
  }
  sync(readConsent());window.addEventListener('viana:consent',e=>sync(e.detail));
  window.addEventListener('storage',e=>{if(e.key===cookieKey||e.key===null)sync(readConsent());});
  window.addEventListener('focus',()=>sync(readConsent()));
  if(!readConsent())openCookies(cookieTrigger);
}
initAnalytics();
if(location.hash==='#preferencias-cookies'&&!cookieDialog.open){openCookies(cookieTrigger);}
