document.documentElement.classList.add("js");
const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)").matches;

// ----- Mobile menu -----
const toggle = document.getElementById("menuToggle");
const nav = document.getElementById("mainNav");
if (toggle && nav) {
  const close = () => { nav.classList.remove("open"); toggle.setAttribute("aria-expanded", "false"); };
  toggle.addEventListener("click", (e) => {
    e.stopPropagation();
    const open = nav.classList.toggle("open");
    toggle.setAttribute("aria-expanded", String(open));
  });
  nav.querySelectorAll("a").forEach((a) => a.addEventListener("click", close));
  document.addEventListener("click", (e) => { if (!nav.contains(e.target)) close(); });
  document.addEventListener("keydown", (e) => { if (e.key === "Escape") close(); });
}

// ----- Header state + reading progress -----
const header = document.querySelector(".site-header");
const bar = document.getElementById("readBar");
const article = document.querySelector(".article");
const onScroll = () => {
  header && header.classList.toggle("scrolled", window.scrollY > 10);
  if (bar && article) {
    const r = article.getBoundingClientRect();
    const total = r.height - window.innerHeight * 0.6;
    const p = Math.min(1, Math.max(0, -r.top / (total || 1)));
    bar.style.width = (p * 100).toFixed(1) + "%";
  }
};
window.addEventListener("scroll", onScroll, { passive: true });
onScroll();

document.querySelectorAll("[data-year]").forEach((el) => (el.textContent = new Date().getFullYear()));

// ----- Reveal on scroll -----
const reveals = document.querySelectorAll(".reveal");
if ("IntersectionObserver" in window && !reduceMotion) {
  const io = new IntersectionObserver((entries) => {
    entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add("visible"); io.unobserve(e.target); } });
  }, { threshold: 0.08, rootMargin: "0px 0px -40px 0px" });
  reveals.forEach((el) => io.observe(el));
} else {
  reveals.forEach((el) => el.classList.add("visible"));
}

// ----- 3D tilt on cards (desktop pointers only) -----
if (finePointer && !reduceMotion) {
  document.querySelectorAll(".tilt").forEach((el) => {
    const max = el.dataset.tilt ? +el.dataset.tilt : el.classList.contains("featured-post") ? 4 : 8;
    el.addEventListener("pointermove", (e) => {
      const r = el.getBoundingClientRect();
      const x = (e.clientX - r.left) / r.width - 0.5;
      const y = (e.clientY - r.top) / r.height - 0.5;
      el.classList.add("tilting");
      el.style.setProperty("--ry", (x * max).toFixed(2) + "deg");
      el.style.setProperty("--rx", (-y * max).toFixed(2) + "deg");
    });
    el.addEventListener("pointerleave", () => {
      el.classList.remove("tilting");
      el.style.setProperty("--rx", "0deg");
      el.style.setProperty("--ry", "0deg");
    });
  });
}

// ----- Hero growth staircase -----
const stageCard = document.getElementById("stageCard");
if (stageCard) {
  const dots = [...stageCard.querySelectorAll(".stage-dot")];
  const bars = [...document.querySelectorAll(".growth-svg .bar")];
  const icons = [...stageCard.querySelectorAll("#stageIcon .si")];
  const body = stageCard.querySelector(".stage-body");
  const no = document.getElementById("stageNo");
  const title = document.getElementById("stageTitle");
  const text = document.getElementById("stageText");
  const prog = stageCard.querySelector(".stage-progress");
  const DUR = 4200;
  let cur = 0, timer;

  const show = (i) => {
    cur = i;
    bars.forEach((b, k) => b.classList.toggle("on", k === i));
    dots.forEach((d, k) => { d.classList.toggle("on", k === i); d.setAttribute("aria-selected", String(k === i)); });
    icons.forEach((ic, k) => ic.classList.toggle("on", k === i));
    no.textContent = i + 1;
    body.classList.add("fade");
    setTimeout(() => {
      title.textContent = dots[i].dataset.title;
      text.textContent = dots[i].dataset.text;
      body.classList.remove("fade");
    }, 220);
    if (!reduceMotion) {
      prog.style.setProperty("--dur", DUR + "ms");
      prog.classList.remove("running"); void prog.offsetWidth; prog.classList.add("running");
    }
  };
  const loop = () => { clearInterval(timer); if (!reduceMotion) timer = setInterval(() => show((cur + 1) % dots.length), DUR); };

  dots.forEach((d, i) => d.addEventListener("click", () => { show(i); loop(); }));
  bars.forEach((b, i) => { b.style.cursor = "pointer"; b.addEventListener("click", () => { show(i); loop(); }); });
  show(0); loop();
}

// ----- Generic chip filter -----
function setupFilter(buttonsSel, attr, itemsSel, emptyId, extraTest) {
  const buttons = document.querySelectorAll(buttonsSel);
  if (!buttons.length) return null;
  let current = "all";
  const apply = () => {
    let shown = 0;
    document.querySelectorAll(itemsSel).forEach((it) => {
      const ok = (current === "all" ? !("featured" in it.dataset) : it.dataset.cat === current) && (!extraTest || extraTest(it));
      it.hidden = !ok;
      if (ok) shown++;
    });
    const empty = document.getElementById(emptyId);
    if (empty) empty.hidden = shown > 0;
  };
  buttons.forEach((b) => b.addEventListener("click", () => {
    buttons.forEach((x) => x.classList.toggle("active", x === b));
    current = b.getAttribute(attr);
    apply();
  }));
  return apply;
}

// Blog categories
setupFilter("[data-filter]", "data-filter", "#postGrid .post-card", "emptyNote");

// FAQ categories + search
const faqSearch = document.getElementById("faqSearch");
const norm = (s) => s.toLowerCase().normalize("NFKD");
const applyFaq = setupFilter("[data-faq-filter]", "data-faq-filter", ".faq-item", "faqEmpty", (it) => {
  const q = faqSearch ? norm(faqSearch.value.trim()) : "";
  if (!q) return true;
  const text = norm(it.textContent);
  // every word must match; light stemming so "price" finds "pricing", "websites" finds "website"
  return q.split(/\s+/).every((w) => text.includes(w.length > 4 ? w.replace(/(ing|es|s|e)$/, "") : w));
});
if (faqSearch && applyFaq) {
  faqSearch.addEventListener("input", () => {
    applyFaq();
    if (faqSearch.value.trim()) document.getElementById("faqList")?.scrollIntoView({ behavior: reduceMotion ? "auto" : "smooth", block: "start" });
  });
  // Allow opening a question directly e.g. /faq#pricing
}

// ----- Copy link -----
document.querySelectorAll("[data-copy]").forEach((btn) => btn.addEventListener("click", async () => {
  try { await navigator.clipboard.writeText(btn.dataset.copy); } catch (_) { /* clipboard blocked */ }
  btn.classList.add("copied");
  setTimeout(() => btn.classList.remove("copied"), 1600);
}));

// ----- Contact form -----
const form = document.getElementById("contactForm");
if (form) {
  const pre = new URLSearchParams(location.search).get("service");
  if (pre) form.querySelectorAll('input[name="services"]').forEach((c) => { if (c.value === pre) c.checked = true; });

  const err = document.getElementById("formError");
  let via = "whatsapp";
  form.querySelectorAll("button[data-via]").forEach((b) => b.addEventListener("click", () => (via = b.dataset.via)));

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = form.elements.name, email = form.elements.email, message = form.elements.message;
    const bad = [name, email, message].filter((f) => !f.value.trim() || (f === email && !email.checkValidity()));
    [name, email, message].forEach((f) => f.classList.toggle("invalid", bad.includes(f)));
    if (bad.length) { err.hidden = false; bad[0].focus(); return; }
    err.hidden = true;

    const services = [...form.querySelectorAll('input[name="services"]:checked')].map((c) => c.value);
    const phone = form.elements.phone.value.trim();
    const text = [
      `Name: ${name.value.trim()}`,
      `Email: ${email.value.trim()}`,
      `Phone: ${phone || "-"}`,
      `Services: ${services.length ? services.join(", ") : "Not sure yet"}`,
      "",
      message.value.trim(),
    ].join("\n");

    if (via === "whatsapp") {
      window.open(`https://wa.me/${form.dataset.wa}?text=${encodeURIComponent("New inquiry from the website\n\n" + text)}`, "_blank", "noopener");
    } else {
      const subject = `New inquiry from ${name.value.trim()}${services.length ? " — " + services[0] : ""}`;
      location.href = `mailto:${form.dataset.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(text)}`;
    }
  });
}
