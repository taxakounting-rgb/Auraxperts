document.documentElement.classList.add("js");

// Mobile menu
const toggle = document.getElementById("menuToggle");
const nav = document.getElementById("mainNav");
if (toggle && nav) {
  toggle.addEventListener("click", () => {
    const open = nav.classList.toggle("open");
    toggle.setAttribute("aria-expanded", String(open));
  });
  nav.querySelectorAll("a").forEach((a) => a.addEventListener("click", () => {
    nav.classList.remove("open");
    toggle.setAttribute("aria-expanded", "false");
  }));
}

// Header shadow on scroll
const header = document.querySelector(".site-header");
const onScroll = () => header && header.classList.toggle("scrolled", window.scrollY > 8);
window.addEventListener("scroll", onScroll, { passive: true });
onScroll();

// Current year
document.querySelectorAll("[data-year]").forEach((el) => (el.textContent = new Date().getFullYear()));

// Reveal on scroll
const items = document.querySelectorAll(".reveal");
if ("IntersectionObserver" in window) {
  const io = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) { e.target.classList.add("visible"); io.unobserve(e.target); }
    });
  }, { threshold: 0.1, rootMargin: "0px 0px -40px 0px" });
  items.forEach((el) => io.observe(el));
} else {
  items.forEach((el) => el.classList.add("visible"));
}

// Contact form: send via email app or WhatsApp
const form = document.getElementById("contactForm");
if (form) {
  const params = new URLSearchParams(location.search);
  const pre = params.get("service");
  if (pre) {
    const sel = form.querySelector("select[name=service]");
    [...sel.options].forEach((o) => { if (o.text === pre) sel.value = o.value; });
  }
  let via = "email";
  form.querySelectorAll("button[data-via]").forEach((b) => b.addEventListener("click", () => (via = b.dataset.via)));
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const f = new FormData(form);
    const text =
      `Name: ${f.get("name")}\nEmail: ${f.get("email")}\nPhone: ${f.get("phone") || "-"}\nService: ${f.get("service")}\n\n${f.get("message")}`;
    if (via === "whatsapp") {
      window.open(`https://wa.me/${form.dataset.wa}?text=${encodeURIComponent("New enquiry from website\n\n" + text)}`, "_blank", "noopener");
    } else {
      const subject = `New enquiry: ${f.get("service")} — ${f.get("name")}`;
      location.href = `mailto:${form.dataset.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(text)}`;
    }
  });
}
