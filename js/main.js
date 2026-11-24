// Replace with your WhatsApp number: country code + number, digits only (India: 91XXXXXXXXXX)
const WA_NUMBER = "919999999999";
const waLink = (t) => `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(t)}`;

document.querySelectorAll("[data-wa]").forEach((el) => {
  el.href = waLink(el.dataset.wa); el.target = "_blank"; el.rel = "noopener";
});

// Expanding shape gallery
const form = document.getElementById("form");
const pans = [...document.querySelectorAll(".pan")];
pans.forEach((p) => {
  const open = () => { pans.forEach((x) => x.classList.toggle("on", x === p)); form.elements.shape.value = p.dataset.shape; };
  p.addEventListener("click", open);
  p.addEventListener("mouseenter", () => matchMedia("(hover:hover)").matches && open());
});

// Pointer glow + card spotlight
const glow = document.querySelector(".glow");
addEventListener("pointermove", (e) => { glow.style.setProperty("--mx", e.clientX + "px"); glow.style.setProperty("--my", e.clientY + "px"); });
document.querySelectorAll(".spot").forEach((c) => c.addEventListener("pointermove", (e) => {
  const r = c.getBoundingClientRect(); c.style.setProperty("--x", e.clientX - r.left + "px"); c.style.setProperty("--y", e.clientY - r.top + "px");
}));

// Headline reveal
const io = new IntersectionObserver((es) => es.forEach((e) => e.isIntersecting && (e.target.classList.add("in"), io.unobserve(e.target))), { threshold: .3 });
document.querySelectorAll(".rv").forEach((el) => io.observe(el));

// Enquiry -> WhatsApp
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const f = form.elements, err = document.getElementById("err");
  if (!f.name.value.trim()) { err.hidden = false; f.name.focus(); return; }
  err.hidden = true;
  const lines = [`Hi Ecomaura, I’m ${f.name.value.trim()}.`, "I’d like a lab-grown diamond quote.",
    f.shape.value && `Shape: ${f.shape.value}`, f.carat.value && `Carat: ${f.carat.value}`,
    f.budget.value.trim() && `Budget: ₹${f.budget.value.trim()}`, f.note.value.trim() && `Notes: ${f.note.value.trim()}`].filter(Boolean);
  window.open(waLink(lines.join("\n")), "_blank", "noopener");
});
