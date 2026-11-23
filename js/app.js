(() => {
  const WHATSAPP_NUMBER = "91XXXXXXXXXX"; // Replace with the brand's WhatsApp number, digits only.
  const header = document.getElementById("header");
  const toggle = document.querySelector(".menu-toggle");
  const mobileMenu = document.querySelector(".mobile-menu");
  const setMenu = open => {
    toggle?.setAttribute("aria-expanded", String(open));
    mobileMenu?.classList.toggle("open", open);
    mobileMenu?.setAttribute("aria-hidden", String(!open));
    document.body.classList.toggle("menu-open", open);
  };
  toggle?.addEventListener("click", () => setMenu(toggle.getAttribute("aria-expanded") !== "true"));
  mobileMenu?.querySelectorAll("a").forEach(link => link.addEventListener("click", () => setMenu(false)));
  const onScroll = () => header?.classList.toggle("scrolled", window.scrollY > 45);
  onScroll(); window.addEventListener("scroll", onScroll, {passive:true});
  const observer = new IntersectionObserver(entries => entries.forEach(entry => {
    if (entry.isIntersecting) { entry.target.classList.add("visible"); observer.unobserve(entry.target); }
  }), {threshold:.12});
  document.querySelectorAll(".reveal").forEach(el => observer.observe(el));
  document.getElementById("year").textContent = new Date().getFullYear();

  const waMessages = {
    general: "Hello Ecomaura, I would love to explore your lab-grown diamond jewellery collection. Could a jewellery specialist help me?",
    bespoke: "Hello Ecomaura, I am interested in creating a bespoke diamond jewellery piece. I would love to discuss my ideas and possibilities."
  };
  const wa = (message) => "https://wa.me/" + WHATSAPP_NUMBER + "?text=" + encodeURIComponent(message);
  document.querySelectorAll("[data-wa]").forEach(link => {
    const kind = link.dataset.wa || "general";
    link.href = wa(waMessages[kind] || waMessages.general);
    link.target = "_blank"; link.rel = "noopener noreferrer";
  });

  const collectionData = {
    engagement:{title:"A promise, in your own language.",intro:"An expression of commitment, made personal. Discover considered silhouettes, distinctive diamond shapes and settings designed to be treasured.",image:"https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=1600&q=90",items:[["The Solitaire","A timeless centrepiece, quietly confident.","https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=900&q=85"],["The Sculpted Oval","An elongated silhouette with graceful presence.","https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=900&q=85"],["The Three Stone","A story told in three brilliant chapters.","https://images.unsplash.com/photo-1603561591411-07134e71a2a9?auto=format&fit=crop&w=900&q=85"]]},
    earrings:{title:"Light, in motion.",intro:"From understated brilliance to a little more drama, discover diamond earrings designed to move with you.",image:"https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=1600&q=90",items:[["The Essential Stud","A brilliant detail for every day.","https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=900&q=85"],["The Line Earring","A little movement. A lasting impression.","https://images.unsplash.com/photo-1617038220319-276d3cfab638?auto=format&fit=crop&w=900&q=85"]]},
    tennis:{title:"A line of light.",intro:"A continuous rhythm of brilliance. Explore the enduring appeal of the diamond tennis bracelet, interpreted with a modern eye.",image:"https://images.unsplash.com/photo-1611591437281-460bfbe1220a?auto=format&fit=crop&w=1600&q=90",items:[["The Classic Line","An uninterrupted expression of light.","https://images.unsplash.com/photo-1611591437281-460bfbe1220a?auto=format&fit=crop&w=900&q=85"],["The Modern Line","A fresh proportion for a familiar icon.","https://images.unsplash.com/photo-1603561591411-07134e71a2a9?auto=format&fit=crop&w=900&q=85"]]},
    necklaces:{title:"A detail, close to you.",intro:"Personal talismans and refined silhouettes, each designed to hold a little meaning.",image:"https://images.unsplash.com/photo-1599459183200-59c7687a0276?auto=format&fit=crop&w=1600&q=90",items:[["The Solitaire Pendant","One diamond. Your own meaning.","https://images.unsplash.com/photo-1599459183200-59c7687a0276?auto=format&fit=crop&w=900&q=85"],["The Diamond Line","A delicate study in proportion.","https://images.unsplash.com/photo-1596944924616-7b38e7cfac36?auto=format&fit=crop&w=900&q=85"]]},
    bespoke:{title:"A design that begins with you.",intro:"A stone you love, a memory you want to keep, a shape that feels like yours. Our atelier brings your ideas into focus.",image:"https://images.unsplash.com/photo-1603561591411-07134e71a2a9?auto=format&fit=crop&w=1600&q=90",items:[["A singular creation","Made around your story, from first sketch to final setting.","https://images.unsplash.com/photo-1603561591411-07134e71a2a9?auto=format&fit=crop&w=900&q=85"]]}
  };
  const overlay = document.getElementById("page-overlay");
  const renderRoute = () => {
    const match = location.hash.match(/^#collection\/([a-z-]+)/);
    if (!match) { overlay.classList.remove("active"); overlay.innerHTML=""; return; }
    const data = collectionData[match[1]];
    if (!data) return;
    const items = data.items.map((item,i) => `<article class="catalogue-item"><button class="catalogue-image" data-product="${i}" aria-label="Enquire about ${item[0]}"><img src="${item[2]}" alt="${item[0]}" loading="lazy"><span>View details ↗</span></button><div class="catalogue-meta"><span>0${i+1} / ECOMAURA</span><h3>${item[0]}</h3><p>${item[1]}</p><a class="text-link" data-product="${i}" href="#">Enquire about this piece <span>↗</span></a></div></article>`).join("");
    overlay.innerHTML = `<div class="catalogue-page"><div class="catalogue-bar"><a href="#collections" class="back-link">← Back to collections</a><a class="wordmark" href="#home">ecomaura<span>®</span></a><a data-wa="general" href="#">Enquire ↗</a></div><section class="catalogue-hero" style="background-image:linear-gradient(90deg,#111b 0%,#1115 70%),url('${data.image}')"><div><p class="eyebrow light">THE ECOMAURA COLLECTION</p><h1>${data.title}</h1><p>${data.intro}</p><a class="button button-light" data-wa="collection" href="#">Enquire about this collection ↗</a></div></section><section class="catalogue-list"><div class="catalogue-heading"><p class="eyebrow">CONSIDERED FOR YOU</p><h2>Discover the pieces.</h2></div><div class="catalogue-grid">${items}</div></section><section class="catalogue-contact"><p class="eyebrow">A PERSONAL EXPERIENCE</p><h2>Some things are better<br>discovered <em>together.</em></h2><a class="button button-dark" data-wa="collection" href="#">Speak with a specialist ↗</a></section></div>`;
    overlay.classList.add("active"); overlay.scrollTop=0;
    const collectionMessage = "Hello Ecomaura, I am interested in the " + data.title + " collection. Could you share more details and available customisation options?";
    overlay.querySelectorAll('[data-wa="collection"]').forEach(a=>{a.href=wa(collectionMessage);a.target="_blank";a.rel="noopener noreferrer"});
    overlay.querySelectorAll('[data-wa="general"]').forEach(a=>{a.href=wa(waMessages.general);a.target="_blank";a.rel="noopener noreferrer"});
    overlay.querySelectorAll("[data-product]").forEach(el=>el.addEventListener("click",e=>{
      e.preventDefault(); const item=data.items[Number(el.dataset.product)];
      const msg="Hello Ecomaura, I am interested in "+item[0]+". I would like to know more about its diamond specifications, pricing and customisation options.";
      window.open(wa(msg),"_blank","noopener,noreferrer");
    }));
  };
  window.addEventListener("hashchange",renderRoute); renderRoute();
})();