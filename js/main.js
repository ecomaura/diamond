// Replace with your WhatsApp number: country code + number, digits only (e.g. India: 91XXXXXXXXXX)
const WA_NUMBER = "919999999999";

const waLink = (text) => `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(text)}`;

// Every element with data-wa becomes a WhatsApp link
document.querySelectorAll("[data-wa]").forEach((el) => {
  el.href = waLink(el.dataset.wa);
  el.target = "_blank";
  el.rel = "noopener";
});

// Shape picker
const shapes = [...document.querySelectorAll(".shape")];
const picked = document.getElementById("picked");
const form = document.getElementById("form");

function pickShape(btn) {
  shapes.forEach((b) => b.setAttribute("aria-checked", String(b === btn)));
  const name = btn.dataset.shape;
  picked.innerHTML = `You chose <strong>${name}</strong>. <a class="link" href="#enquire">Continue your enquiry</a>`;
  form.elements.shape.value = name;
}
shapes.forEach((b) => b.addEventListener("click", () => pickShape(b)));

// Keep the picker in sync if the form select changes
form.elements.shape.addEventListener("change", (e) => {
  const match = shapes.find((b) => b.dataset.shape === e.target.value);
  shapes.forEach((b) => b.setAttribute("aria-checked", String(b === match)));
});

// Build the enquiry message and open WhatsApp
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const f = form.elements;
  const err = document.getElementById("err");
  if (!f.name.value.trim()) {
    err.hidden = false;
    f.name.focus();
    return;
  }
  err.hidden = true;
  const lines = [
    `Hi Ecomaura, I’m ${f.name.value.trim()}.`,
    "I’d like a lab-grown diamond quote.",
    f.shape.value && `Shape: ${f.shape.value}`,
    f.carat.value && `Carat: ${f.carat.value}`,
    f.budget.value.trim() && `Budget: ₹${f.budget.value.trim()}`,
    f.note.value.trim() && `Notes: ${f.note.value.trim()}`,
  ].filter(Boolean);
  window.open(waLink(lines.join("\n")), "_blank", "noopener");
});
