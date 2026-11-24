// Set your WhatsApp number: country code + number, digits only (India: 91XXXXXXXXXX)
const WA_NUMBER="919999999999";
const wa=m=>`https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(m)}`;
const $=(s,r=document)=>r.querySelector(s),$$=(s,r=document)=>[...r.querySelectorAll(s)];
const fr=(t,r)=>`<div class="fr" style="aspect-ratio:${r}"><div class="ph t${t}" data-px></div></div>`;

// Header, mega-menu, mobile menu, footer, floating enquiry
const links=[["Engagement","collection.html?c=engagement"],["Our Story","index.html#story"],["The Art of Diamonds","index.html#art"],["Bespoke","index.html#bespoke"],["Contact","contact.html"]];
$("#hd").outerHTML=`<header class="hd"><a class="logo" href="index.html">Ecomaura</a>
<nav class="dk" aria-label="Primary"><div class="mw"><button class="nl" aria-expanded="false" aria-controls="mega">Collections</button>
<div class="mega" id="mega">${COLS.map((c,i)=>`<a href="collection.html?c=${c.slug}"><div class="fr" style="aspect-ratio:4/5"><div class="ph t${i%4+1}"></div></div><span>${c.name}</span><small>${c.line}</small></a>`).join("")}</div></div>
${links.map(l=>`<a class="nl" href="${l[1]}">${l[0]}</a>`).join("")}</nav>
<button class="mb" aria-expanded="false" aria-controls="mob">Menu</button>
<div class="mob" id="mob"><p>Collections</p>${COLS.map(c=>`<a href="collection.html?c=${c.slug}">${c.name}</a>`).join("")}<p>Maison</p>${links.map(l=>`<a href="${l[1]}">${l[0]}</a>`).join("")}</div></header>`;
$("#ft").outerHTML=`<footer class="ft"><div class="ft-a"><h2>Ecomaura</h2><p>Lab-grown diamond jewellery, designed and finished by hand in Surat.</p><a class="ln" href="${wa("Hello, I would like to speak with a jewellery specialist.")}" target="_blank" rel="noopener">Enquire on WhatsApp</a></div>
<div><h3>Collections</h3>${COLS.map(c=>`<a href="collection.html?c=${c.slug}">${c.name}</a>`).join("")}</div>
<div><h3>Philosophy</h3><a href="index.html#philosophy">Brilliance, reimagined</a><a href="index.html#why">Why lab-grown</a><a href="index.html#bespoke">Bespoke</a><a href="index.html#story">Our story</a></div>
<div><h3>Contact</h3><span>Surat, Gujarat, India</span><span>Mon to Sat, 10am to 7pm</span><a href="mailto:hello@ecomaura.com">hello@ecomaura.com</a><a href="https://instagram.com/ecomaura" target="_blank" rel="noopener">Instagram</a></div>
<div class="ft-b"><span>© 2026 Ecomaura</span><span><a href="legal.html#privacy">Privacy policy</a> <a href="legal.html#terms">Terms and conditions</a></span></div></footer>
<a class="fab" href="${wa("Hello, I would like to speak with a jewellery specialist.")}" target="_blank" rel="noopener">Enquire on WhatsApp</a><div class="cur" aria-hidden="true"></div>`;
$$("[data-wa]").forEach(a=>{a.href=wa(a.dataset.wa);a.target="_blank";a.rel="noopener"});

const hd=$(".hd"),mega=$("#mega"),mb=$(".mb");
const setHd=()=>hd.classList.toggle("solid",scrollY>40||!document.body.classList.contains("dark-top"));
setHd();addEventListener("scroll",setHd,{passive:true});
$(".nl[aria-controls]").addEventListener("click",e=>{const o=mega.classList.toggle("open");e.target.setAttribute("aria-expanded",o)});
mb.addEventListener("click",()=>{const o=hd.classList.toggle("menu");mb.setAttribute("aria-expanded",o);mb.textContent=o?"Close":"Menu"});
addEventListener("keydown",e=>{if(e.key==="Escape"){mega.classList.remove("open");hd.classList.remove("menu");mb.textContent="Menu"}});

// Page transitions
document.addEventListener("click",e=>{const a=e.target.closest("a[href]");if(!a||a.target||e.metaKey||e.ctrlKey)return;const u=new URL(a.href);
if(u.origin!==location.origin||(u.pathname===location.pathname&&u.hash))return;e.preventDefault();document.body.classList.add("out");setTimeout(()=>location.href=a.href,350)});
addEventListener("pageshow",e=>e.persisted&&document.body.classList.remove("out"));

// Scroll reveals + parallax
const io=new IntersectionObserver(es=>es.forEach(e=>e.isIntersecting&&(e.target.classList.add("in"),io.unobserve(e.target))),{threshold:.15});
const observe=()=>$$(".rv:not(.in)").forEach(el=>io.observe(el));observe();
let tick=0;const px=()=>{tick=0;$$("[data-px]").forEach(el=>{const r=el.parentNode.getBoundingClientRect();if(r.bottom<0||r.top>innerHeight)return;el.style.transform=`translate3d(0,${(r.top+r.height/2-innerHeight/2)*-.07}px,0)`})};
addEventListener("scroll",()=>tick||(tick=requestAnimationFrame(px)),{passive:true});px();

// Cursor
if(matchMedia("(hover:hover)").matches){const c=$(".cur");let x=0,y=0,cx=0,cy=0;
addEventListener("pointermove",e=>{x=e.clientX;y=e.clientY;c.classList.add("on");c.classList.toggle("big",!!e.target.closest("a,button,.fr"))});
(function f(){cx+=(x-cx)*.16;cy+=(y-cy)*.16;c.style.transform=`translate(${cx}px,${cy}px)`;requestAnimationFrame(f)})()}

// Page-specific rendering
const page=document.body.dataset.page,Q=new URLSearchParams(location.search);
const spec=p=>`${p.shape} · ${p.carat} · ${p.setting}`;
const tile=(p,i)=>`<a class="pt rv" style="--d:${(i%3)*90}ms" href="product.html?p=${p.slug}">${fr(i%4+1,i%2?"4/5":"1/1")}<h3>${p.name}</h3><span>${spec(p)}</span><em class="ln">View piece</em></a>`;

if(page==="collection"){
 const c=COLS.find(x=>x.slug===Q.get("c"))||COLS[0],all=PRODUCTS.filter(p=>p.col===c.slug);
 document.title=`${c.name} | Ecomaura`;$("meta[name=description]").content=`${c.name} by Ecomaura. ${c.line}`;
 $("#banner").innerHTML=`<div class="fr bn">${`<div class="ph t5" data-px></div>`}</div><div class="bn-t"><p class="lb">Collection</p><h1>${c.name}</h1><p>${c.line}</p></div>`;
 $("#intro").innerHTML=`<p class="lb">${all.length} pieces</p><p class="big">${c.intro}</p>`;
 const opts=k=>[...new Set(all.map(p=>p[k]))];
 $("#filters").innerHTML=[["shape","Diamond shape"],["setting","Setting"],["metal","Metal"]].map(([k,l])=>`<label>${l}<select data-k="${k}"><option value="">All</option>${(k==="metal"?METALS:opts(k)).map(o=>`<option>${o}</option>`).join("")}</select></label>`).join("");
 const draw=()=>{const f={};$$("#filters select").forEach(s=>f[s.dataset.k]=s.value);
  const l=all.filter(p=>(!f.shape||p.shape===f.shape)&&(!f.setting||p.setting===f.setting));
  $("#list").innerHTML=l.length?l.map(tile).join(""):`<p class="big">No pieces match those filters. <a class="ln" href="${wa(`Hello, I am looking for a piece in ${c.name} with ${f.shape||"any shape"}, ${f.setting||"any setting"}, ${f.metal||"any metal"}.`)}" target="_blank" rel="noopener">Ask a specialist</a></p>`;observe();px()};
 $("#filters").addEventListener("change",draw);draw();
 $("#cta").href=wa(`Hello, I am interested in the ${c.name} collection. I would like to know more about available pieces, pricing and customisation options.`);
}
if(page==="product"){
 const p=PRODUCTS.find(x=>x.slug===Q.get("p"))||PRODUCTS[0],c=COLS.find(x=>x.slug===p.col);let metal=METALS[0];
 document.title=`${p.name} | Ecomaura`;$("meta[name=description]").content=`${p.name}: ${spec(p)}. Enquire on WhatsApp.`;
 $("#gal").innerHTML=fr(1,"4/5")+`<div class="g2">${fr(2,"1/1")}${fr(3,"1/1")}</div>${fr(4,"3/2")}`;
 $("#info").innerHTML=`<p class="lb"><a href="collection.html?c=${c.slug}">${c.name}</a></p><h1>${p.name}</h1>
 <p class="big">A ${p.shape.toLowerCase()} lab-grown diamond of ${p.carat}, in a ${p.setting.toLowerCase()} setting, finished by hand in Surat.</p>
 <dl><dt>Diamond shape</dt><dd>${p.shape}</dd><dt>Carat weight</dt><dd>${p.carat}</dd><dt>Setting</dt><dd>${p.setting}</dd><dt>Diamond grading</dt><dd>Shared on request, with the stone’s report</dd></dl>
 <p class="lb">Metal</p><div class="chips" role="radiogroup">${METALS.map((m,i)=>`<button role="radio" aria-checked="${!i}">${m}</button>`).join("")}</div>
 <p class="note">Customisation: ring size, metal, stone size and engraving can all be adjusted. Tell us what you have in mind.</p>
 <a class="btn" id="e1" target="_blank" rel="noopener">Enquire on WhatsApp</a><a class="btn ghost" id="e2" target="_blank" rel="noopener">Request more details</a>`;
 const set=()=>{$("#e1").href=wa(`Hello, I am interested in the ${p.name} (${spec(p)}) in ${metal}. I would like to know more about its specifications, pricing and customisation options.`);
  $("#e2").href=wa(`Hello, please send more details and images of the ${p.name} in ${metal}.`)};set();
 $(".chips").addEventListener("click",e=>{const b=e.target.closest("button");if(!b)return;metal=b.textContent;$$(".chips button").forEach(x=>x.setAttribute("aria-checked",x===b));set()});
 $("#more").innerHTML=PRODUCTS.filter(x=>x.col===p.col&&x.slug!==p.slug).concat(PRODUCTS.filter(x=>x.col!==p.col)).slice(0,3).map(tile).join("");observe();px();
}
if(page==="contact"){
 $("#cf").addEventListener("submit",e=>{e.preventDefault();const f=e.target.elements;if(!f.name.value.trim()){f.name.focus();return}
  window.open(wa(`Hello, my name is ${f.name.value.trim()}. I am interested in: ${f.topic.value}.${f.note.value.trim()?"\n"+f.note.value.trim():""}`),"_blank","noopener")});
}
