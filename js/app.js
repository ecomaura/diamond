/* CONFIG — set your WhatsApp number (country code, digits only) */
const CONFIG={whatsapp:"910000000000",brand:"Maison Aura",instagram:"https://instagram.com/"};
const wa=m=>`https://wa.me/${CONFIG.whatsapp}?text=${encodeURIComponent(m)}`;
const SHAPES=["Round","Oval","Emerald","Pear","Cushion"],METALS=["18k Yellow Gold","18k White Gold","Platinum","18k Rose Gold"];
const COLLS=[
{s:"engagement-rings",n:"Engagement Rings",d:"Solitaires and halos made to begin a lifetime.",t:"Ring",names:["The Solitaire","Halo Eternelle","Trilogy Aurore","Pavé Lumière","Cathedral Crown","Hidden Halo"]},
{s:"diamond-earrings",n:"Diamond Earrings",d:"Light, set close to the face.",t:"Earrings",names:["Studs Étoile","Drop Cascade","Huggie Pavé","Halo Studs","Chandelier Noir","Illusion Hoops"]},
{s:"tennis-bracelets",n:"Tennis Bracelets",d:"An unbroken line of brilliance.",t:"Bracelet",names:["Classic Line","Four-Prong Rivière","Emerald Line","Graduated Line","Bezel Line","Oval Rivière"]},
{s:"diamond-necklaces",n:"Diamond Necklaces",d:"Pendants and rivières with quiet presence.",t:"Necklace",names:["Solitaire Pendant","Rivière Necklace","Floating Diamond","Pear Drop","Halo Pendant","Tennis Collar"]},
{s:"statement-jewellery",n:"Statement Jewellery",d:"Bold forms for unforgettable evenings.",t:"Statement",names:["Cocktail Cluster","Cascade Collar","Sculpted Cuff","Flame Ring","Grand Drop Earrings","Orbit Pendant"]},
{s:"bespoke-creations",n:"Bespoke Creations",d:"One piece. Designed with you, only for you.",t:"Bespoke",names:["Atelier Ring","Heirloom Redesign","Custom Earrings","Signature Pendant","Anniversary Piece","Your Design"]}];
COLLS.forEach((c,ci)=>c.p=c.names.map((n,i)=>({id:i+1,n,shape:SHAPES[(i+ci)%5],carat:(1+((i*3+ci)%6)*.5).toFixed(2),metals:[METALS[i%4],METALS[(i+1)%4],METALS[(i+2)%4]],set:["Solitaire","Halo","Pavé","Bezel","Three-stone","Claw"][i%6],type:c.t})));
const $=(s,r=document)=>r.querySelector(s),$$=(s,r=document)=>[...r.querySelectorAll(s)];
const ph=(l,x="")=>`<div class="ph ${x}" data-label="${l}" data-img=""></div>`;
const here=location.pathname.split("/").pop()||"index.html",home=here==="index.html"||here==="";
document.body.insertAdjacentHTML("afterbegin",`<a class="skip" href="#main">Skip to content</a>
<header class="${home?"":"always"}" id="hd"><a class="logo" href="index.html">Aura</a>
<nav aria-label="Primary"><ul>
<li class="hasmega"><a href="collection.html?c=engagement-rings" aria-haspopup="true">Collections</a><div class="mega">${COLLS.map(c=>`<a href="collection.html?c=${c.s}">${ph(c.n,"")}${c.n}</a>`).join("")}</div></li>
<li><a href="collection.html?c=engagement-rings">Engagement</a></li><li><a href="index.html#story">Our Story</a></li><li><a href="index.html#art">The Art of Diamonds</a></li><li><a href="index.html#bespoke">Bespoke</a></li><li><a href="contact.html">Contact</a></li></ul></nav>
<button class="burger" aria-label="Open menu" id="bg">Menu</button></header>
<div class="drawer" id="dr" aria-hidden="true"><button class="x" id="dx">Close</button>
<a href="index.html">Home</a>${COLLS.slice(0,3).map(c=>`<a href="collection.html?c=${c.s}">${c.n}</a>`).join("")}<a href="index.html#story">Our Story</a><a href="index.html#bespoke">Bespoke</a><a href="contact.html">Contact</a></div>`);
document.body.insertAdjacentHTML("beforeend",`<footer><div class="wrap"><div class="grid"><div><div class="logo">Aura</div><p style="max-width:22rem;margin-top:1.2rem;opacity:.7">Exceptional lab-grown diamonds, set by hand. A new perspective on luxury.</p></div>
<div><h4>Collections</h4><ul>${COLLS.map(c=>`<li><a href="collection.html?c=${c.s}">${c.n}</a></li>`).join("")}</ul></div>
<div><h4>Philosophy</h4><ul><li><a href="index.html#philosophy">Brilliance, Reimagined</a></li><li><a href="index.html#art">The Art of Diamonds</a></li><li><a href="index.html#why">Why Lab-Grown</a></li><li><a href="index.html#bespoke">Bespoke</a></li></ul></div>
<div><h4>Contact</h4><ul><li><a href="${wa("Hello, I would like to speak with a jewellery specialist.")}">WhatsApp enquiry</a></li><li><a href="${CONFIG.instagram}" rel="noopener">Instagram</a></li><li><a href="contact.html">Contact page</a></li><li>Private viewings by appointment</li></ul></div></div>
<div class="legal"><span>© ${new Date().getFullYear()} ${CONFIG.brand}. All rights reserved.</span><span><a href="contact.html#privacy">Privacy Policy</a> · <a href="contact.html#terms">Terms &amp; Conditions</a></span></div></div></footer>
<a class="wa" href="${wa("Hello, I would like to enquire about your jewellery.")}" aria-label="Enquire on WhatsApp"><i></i><span>Enquire</span></a><div class="cur" aria-hidden="true"></div>`);
$$("[data-wa]").forEach(a=>a.href=wa(a.dataset.wa));
$$(".ph[data-img]").forEach(p=>{if(p.dataset.img)p.style.backgroundImage=`url(${p.dataset.img})`});
const hd=$("#hd"),dr=$("#dr"),setH=()=>hd.classList.toggle("solid",scrollY>60);setH();
const tog=o=>{dr.classList.toggle("open",o);dr.setAttribute("aria-hidden",!o)};$("#bg").onclick=()=>tog(true);$("#dx").onclick=()=>tog(false);$$("#dr a").forEach(a=>a.onclick=()=>tog(false));
addEventListener("keydown",e=>e.key==="Escape"&&tog(false));
const io=new IntersectionObserver(es=>es.forEach(e=>e.isIntersecting&&(e.target.classList.add("in"),io.unobserve(e.target))),{threshold:.12});
const obs=()=>$$(".rv:not(.in)").forEach(e=>io.observe(e));obs();
const pr=$$(".par");let tick=0;
addEventListener("scroll",()=>{setH();if(tick)return;tick=requestAnimationFrame(()=>{tick=0;pr.forEach(e=>{const r=e.parentElement.getBoundingClientRect();e.style.transform=`translateY(${(r.top+r.height/2-innerHeight/2)*-.08}px)`})})},{passive:true});
requestAnimationFrame(()=>document.body.classList.add("on"));
$$("a[href]").forEach(a=>{const h=a.getAttribute("href");if(h&&!h.startsWith("#")&&!h.startsWith("http")&&!h.startsWith("mailto")&&!h.includes("wa.me"))a.addEventListener("click",e=>{if(e.metaKey||e.ctrlKey)return;e.preventDefault();document.body.classList.add("out");setTimeout(()=>location.href=h,450)})});
addEventListener("pageshow",()=>document.body.classList.remove("out"));
if(matchMedia("(hover:hover)").matches){const c=$(".cur");addEventListener("mousemove",e=>{c.style.left=e.clientX+"px";c.style.top=e.clientY+"px";c.classList.toggle("h",!!e.target.closest("a,button,.chip"))})}

function tint(r=document){const k=[0,1,4,5];$$(".ph",r).forEach(p=>{if([...p.classList].some(c=>/^t\d$/.test(c)))return;const l=p.dataset.label||"";let h=0;for(const ch of l)h+=ch.charCodeAt(0);p.classList.add("t"+(p.classList.contains("l")?2+h%2:k[h%4]))})}tint();
