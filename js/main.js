(() => {
  const D = PORTFOLIO;
  const P = D.profile;
  const $ = (s, el = document) => el.querySelector(s);
  const esc = (s = "") =>
    String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

  /* ---------- icons ---------- */
  const ICON = {
    github: '<svg viewBox="0 0 24 24"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.9a3.4 3.4 0 0 0-.9-2.6c3.1-.3 6.4-1.5 6.4-7A5.4 5.4 0 0 0 20 4.8 5 5 0 0 0 19.9 1S18.7.7 16 2.5a13.4 13.4 0 0 0-7 0C6.3.7 5.1 1 5.1 1A5 5 0 0 0 5 4.8a5.4 5.4 0 0 0-1.5 3.7c0 5.5 3.3 6.7 6.4 7a3.4 3.4 0 0 0-.9 2.6V22"/></svg>',
    linkedin: '<svg viewBox="0 0 24 24"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z"/><circle cx="4" cy="4" r="2"/></svg>',
    twitter: '<svg viewBox="0 0 24 24"><path d="M4 4l16 16M20 4 4 20"/></svg>',
    email: '<svg viewBox="0 0 24 24"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-10 6L2 7"/></svg>',
    external: '<svg viewBox="0 0 24 24"><path d="M15 3h6v6M10 14 21 3M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/></svg>',
    eye: '<svg viewBox="0 0 24 24"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8S1 12 1 12z"/><circle cx="12" cy="12" r="3"/></svg>',
    check: '<svg viewBox="0 0 24 24"><path d="M22 11.1V12a10 10 0 1 1-5.9-9.1"/><path d="M22 4 12 14l-3-3"/></svg>',
    arrowDown: '<svg viewBox="0 0 24 24"><path d="M12 5v14M6 13l6 6 6-6"/></svg>',
    lock: '<svg viewBox="0 0 24 24"><rect x="4" y="11" width="16" height="10" rx="2"/><path d="M8 11V7a4 4 0 0 1 8 0v4"/></svg>',
  };

  /* deterministic gradient per string, for placeholder art */
  const hue = (s) => [...s].reduce((h, c) => (h * 31 + c.charCodeAt(0)) % 360, 7);
  const grad = (s) => {
    const h = hue(s);
    return `linear-gradient(135deg, hsl(${h} 70% 55%), hsl(${(h + 50) % 360} 75% 45%))`;
  };
  const initials = (s) => s.split(/[\s·—-]+/).filter(Boolean).slice(0, 2).map((w) => w[0]).join("").toUpperCase();
  const fmtDate = (d) => {
    if (!d) return "";
    const [y, m] = d.split("-");
    return m ? new Date(y, m - 1).toLocaleDateString("en-US", { month: "short", year: "numeric" }) : y;
  };

  /* ---------- project list (FiveM scripts expanded in place of the suite entry) ---------- */
  const moduleCards = ((D.fivem && D.fivem.modules) || []).map((m) => ({
    title: m.name,
    description: m.description,
    category: "FiveM Script",
    meta: m.resource,
    tags: m.highlights || [],
    image: m.image,
    isModule: true,
    exclusive: D.fivem.exclusive,
  }));
  const projects = D.projects.flatMap((p) => (p.suite ? (p.showCard === false ? moduleCards : [p, ...moduleCards]) : [p]));
  const counts = {
    projects: projects.length,
    live: projects.filter((p) => p.demo).length,
    certs: D.certificates.length,
  };
  const fill = (v) => String(v).replace(/\{(\w+)\}/g, (m, k) => (k in counts ? counts[k] : m));

  /* ---------- profile ---------- */
  document.title = `${P.name} — ${P.role}`;
  $("#navInitials").textContent = P.initials;
  $("#heroName").textContent = P.name;
  $("#heroTagline").textContent = P.tagline;
  $("#footerName").textContent = P.name;
  $("#year").textContent = new Date().getFullYear();
  if (!P.available) $("#availBadge").remove();
  if (P.resume) $("#resumeBtn").href = P.resume;
  else $("#resumeBtn").remove();

  const socialLinks = () =>
    Object.entries(P.socials)
      .filter(([, url]) => url)
      .map(([k, url]) => `<a href="${esc(url)}" target="_blank" rel="noopener" aria-label="${k}">${ICON[k] || ICON.external}</a>`)
      .join("") + `<a href="mailto:${esc(P.email)}" aria-label="email">${ICON.email}</a>`;
  $("#heroSocials").innerHTML = socialLinks();
  $("#contactSocials").innerHTML = socialLinks();
  $("#contactEmail").textContent = P.email;
  $("#contactEmail").href = `mailto:${P.email}`;

  /* code window */
  const topSkills = D.skills.flatMap((g) => g.items).slice(0, 4);
  $("#codeBlock").innerHTML =
    `<span class="tk-k">const</span> <span class="tk-v">developer</span> <span class="tk-p">=</span> <span class="tk-p">{</span>\n` +
    `  name<span class="tk-p">:</span> <span class="tk-s">"${esc(P.name)}"</span><span class="tk-p">,</span>\n` +
    `  role<span class="tk-p">:</span> <span class="tk-s">"${esc(P.role)}"</span><span class="tk-p">,</span>\n` +
    `  location<span class="tk-p">:</span> <span class="tk-s">"${esc(P.location)}"</span><span class="tk-p">,</span>\n` +
    `  stack<span class="tk-p">: [</span>${topSkills.map((s) => `<span class="tk-s">"${esc(s)}"</span>`).join('<span class="tk-p">, </span>')}<span class="tk-p">],</span>\n` +
    `  certifications<span class="tk-p">:</span> <span class="tk-b">${D.certificates.length}</span><span class="tk-p">,</span>\n` +
    `  projects<span class="tk-p">:</span> <span class="tk-b">${counts.projects}</span><span class="tk-p">,</span>\n` +
    `  openToWork<span class="tk-p">:</span> <span class="tk-k">${P.available}</span>\n` +
    `<span class="tk-p">};</span>`;

  /* typing effect */
  const roles = [P.role, ...(D.typedRoles || ["Problem Solver", "Lifelong Learner", "Open-Source Enthusiast"])];
  const typedEl = $("#typed");
  let ri = 0, ci = 0, deleting = false;
  const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (reduce) typedEl.textContent = P.role;
  else
    (function type() {
      const word = roles[ri];
      typedEl.textContent = word.slice(0, ci);
      if (!deleting && ci === word.length) { deleting = true; return setTimeout(type, 1800); }
      if (deleting && ci === 0) { deleting = false; ri = (ri + 1) % roles.length; }
      ci += deleting ? -1 : 1;
      setTimeout(type, deleting ? 35 : 75);
    })();

  /* ---------- about ---------- */
  $("#aboutPhoto").innerHTML = P.photo ? `<img src="${esc(P.photo)}" alt="${esc(P.name)}">` : esc(P.initials);
  $("#aboutText").innerHTML = D.about.map((p) => `<p>${esc(p)}</p>`).join("");
  $("#stats").innerHTML = D.stats.map((s) => `<div class="stat"><strong class="gradient-text">${esc(fill(s.value))}</strong><span>${esc(s.label)}</span></div>`).join("");
  $("#skills").innerHTML = D.skills
    .map((g) => `<div class="card skill-group"><h3>${esc(g.group)}</h3><ul>${g.items.map((i) => `<li class="chip">${esc(i)}</li>`).join("")}</ul></div>`)
    .join("");

  /* ---------- projects ---------- */
  // avoid a lone card on the last row: 2 columns when 3 columns would leave one card alone
  if (projects.length % 3 === 1 && projects.length % 2 === 0) $("#projectGrid").classList.add("cols-2");
  $("#projectGrid").innerHTML = projects
    .map(
      (p) => `
    <article class="card project reveal" data-cat="${esc(p.category)}">
      <div class="project__cover">
        ${p.image ? `<img src="${esc(p.image)}" alt="${esc(p.title)}" loading="lazy">` : `<div class="cover-art${p.isModule ? " cover-art--name" : ""}" style="background:${grad(p.title)}">${p.isModule ? esc(p.title) : `&lt;${esc(p.title.split(" — ")[0])}/&gt;`}</div>`}
        ${p.featured ? `<span class="project__featured">★ Featured</span>` : ""}
        ${p.isModule ? `<span class="project__featured">ATK System</span>` : ""}
      </div>
      <div class="project__body">
        <span class="project__cat">${esc(p.category)}${p.meta ? ` · ${esc(p.meta)}` : ""}</span>
        <h3>${esc(p.title)}</h3>
        <p>${esc(p.description)}</p>
        <div class="project__tags">${p.tags.map((t) => `<span class="chip">${esc(t)}</span>`).join("")}</div>
        ${p.exclusive ? `<div class="project__links"><span class="exclusive" title="${esc(p.exclusive.note || "")}">${ICON.lock}<span><b>${esc(p.exclusive.label)}</b>${p.exclusive.note ? `<small>${esc(p.exclusive.note)}</small>` : ""}</span></span></div>` : ""}
        ${p.github || p.demo || p.more ? `<div class="project__links">
          ${p.github ? `<a href="${esc(p.github)}" target="_blank" rel="noopener">${ICON.github}Code</a>` : ""}
          ${p.demo ? `<a href="${esc(p.demo)}" target="_blank" rel="noopener">${ICON.external}Live demo</a>` : ""}
          ${p.more ? `<a href="${esc(p.more.href)}">${ICON.arrowDown}${esc(p.more.label)}</a>` : ""}
        </div>` : ""}
      </div>
    </article>`
    )
    .join("");

  const cats = ["All", ...new Set(D.projects.map((p) => p.category))];
  const filters = $("#projectFilters");
  filters.innerHTML = cats.map((c, i) => `<button class="${i ? "" : "active"}" data-f="${esc(c)}">${esc(c)}</button>`).join("");
  filters.addEventListener("click", (e) => {
    const btn = e.target.closest("button");
    if (!btn) return;
    filters.querySelectorAll("button").forEach((b) => b.classList.toggle("active", b === btn));
    const f = btn.dataset.f;
    document.querySelectorAll(".project").forEach((card) => {
      card.classList.toggle("hide", f !== "All" && card.dataset.cat !== f);
    });
  });

  /* ---------- certificates ---------- */
  const certs = [...D.certificates].sort((a, b) => (b.date || "").localeCompare(a.date || ""));
  const isImg = (src) => src && !/\.pdf$/i.test(src);
  $("#certGrid").classList.toggle("single", certs.length === 1);
  $("#certGrid").innerHTML = certs
    .map(
      (c, i) => `
    <button class="card cert reveal" data-i="${i}" aria-label="View certificate: ${esc(c.title)}">
      ${isImg(c.image) ? `<div class="cert__thumb"><img src="${esc(c.image)}" alt="" loading="lazy"></div>` : ""}
      <div class="cert__top">
        ${c.issuerLogo
          ? `<div class="cert__logo cert__logo--img"><img src="${esc(c.issuerLogo)}" alt="${esc(c.issuer)}"></div>`
          : `<div class="cert__logo" style="background:${grad(c.issuer)}">${esc(initials(c.issuer))}</div>`}
        <div><div class="cert__issuer">${esc(c.issuer)}</div><div class="cert__date">${esc(fmtDate(c.date))}</div></div>
      </div>
      <h3>${esc(c.title)}</h3>
      <div class="cert__skills">${(c.skills || []).map((s) => `<span class="chip">${esc(s)}</span>`).join("")}</div>
      <div class="cert__foot">
        ${c.verifyUrl || c.credentialId ? `<span class="verified">${ICON.check}Verified</span>` : "<span></span>"}
        <span class="view">${ICON.eye}View</span>
      </div>
    </button>`
    )
    .join("");

  /* modal */
  const modal = $("#modal");
  let lastFocus = null;
  const openCert = (c) => {
    const media = $("#modalMedia");
    if (c.image && /\.pdf$/i.test(c.image)) media.innerHTML = `<iframe src="${esc(c.image)}" title="${esc(c.title)}"></iframe>`;
    else if (c.image) media.innerHTML = `<img src="${esc(c.image)}" alt="${esc(c.title)}">`;
    else
      media.innerHTML = `<div class="modal__placeholder"><div class="cert-art">
        <small>Certificate of completion</small><h4>${esc(c.title)}</h4>
        <span>awarded to <b>${esc(P.name)}</b></span><span style="margin-top:4%">${esc(c.issuer)} · ${esc(fmtDate(c.date))}</span>
        <div class="seal"></div></div></div>`;
    $("#modalInfo").innerHTML = `
      <div class="modal__meta"><h3>${esc(c.title)}</h3><p>${esc(c.issuer)} · Issued ${esc(fmtDate(c.date))}${c.expires ? ` · Valid until ${esc(fmtDate(c.expires))}` : ""}${c.credentialId ? ` · Credential ID: <span class="mono">${esc(c.credentialId)}</span>` : ""}</p></div>
      <div class="modal__actions">
        ${c.pdf ? `<a class="btn btn--ghost" href="${esc(c.pdf)}" target="_blank" rel="noopener">Open PDF</a>` : ""}
        ${c.verifyUrl ? `<a class="btn btn--primary" href="${esc(c.verifyUrl)}" target="_blank" rel="noopener">Verify on Certiport ${ICON.external}</a>` : ""}
      </div>`;
    lastFocus = document.activeElement;
    modal.classList.add("open");
    modal.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
    $(".modal__close").focus();
  };
  const closeModal = () => {
    modal.classList.remove("open");
    modal.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
    lastFocus && lastFocus.focus();
  };
  $("#certGrid").addEventListener("click", (e) => {
    const card = e.target.closest(".cert");
    if (card) openCert(certs[card.dataset.i]);
  });
  modal.addEventListener("click", (e) => e.target.closest("[data-close]") && closeModal());
  document.addEventListener("keydown", (e) => e.key === "Escape" && modal.classList.contains("open") && closeModal());

  /* ---------- timeline (hidden when empty) ---------- */
  if (!D.experience || !D.experience.length) {
    $("#experience").remove();
    const navItem = $('#navLinks a[href="#experience"]');
    if (navItem) navItem.remove();
  } else $("#timeline").innerHTML = D.experience
    .map(
      (x) => `<li class="reveal"><div class="timeline__meta">${x.type ? `<span class="timeline__type timeline__type--${x.type.toLowerCase() === "work" ? "work" : "edu"}">${esc(x.type)}</span>` : ""}${x.level ? `<span class="timeline__level">${esc(x.level)}</span>` : ""}<span class="timeline__period">${esc(x.period)}</span></div><h3>${esc(x.role)}</h3>
      <div class="timeline__company">${esc(x.company)}</div><p>${esc(x.description)}</p></li>`
    )
    .join("");

  /* ---------- contact form (opens the visitor's mail app) ---------- */
  $("#contactForm").addEventListener("submit", (e) => {
    e.preventDefault();
    const f = new FormData(e.target);
    const subject = encodeURIComponent(`Portfolio contact from ${f.get("name")}`);
    const body = encodeURIComponent(`${f.get("message")}\n\n— ${f.get("name")} (${f.get("email")})`);
    const a = document.createElement("a");
    a.href = `mailto:${P.email}?subject=${subject}&body=${body}`;
    a.target = "_blank";
    a.rel = "noopener";
    a.click();
    const note = $("#formNote");
    note.innerHTML = `Your email app should open with this message. If it doesn't, email me at <b>${esc(P.email)}</b>.`;
    note.hidden = false;
  });

  /* copy email button */
  $("#copyEmail").addEventListener("click", (e) => {
    const btn = e.currentTarget;
    const done = () => { btn.textContent = "Copied"; setTimeout(() => (btn.textContent = "Copy"), 1600); };
    const fallback = () => {
      const r = document.createRange();
      r.selectNodeContents($("#contactEmail"));
      const s = getSelection(); s.removeAllRanges(); s.addRange(r);
      btn.textContent = "Press Ctrl+C";
    };
    try { navigator.clipboard.writeText(P.email).then(done, fallback); } catch (err) { fallback(); }
  });

  /* ---------- theme ---------- */
  const isDark = () => {
    const t = document.documentElement.dataset.theme;
    return t ? t === "dark" : !matchMedia("(prefers-color-scheme: light)").matches;
  };
  $("#themeToggle").addEventListener("click", () => {
    const next = isDark() ? "light" : "dark";
    document.documentElement.dataset.theme = next;
    try { localStorage.setItem("theme", next); } catch (e) {}
  });

  /* ---------- nav: scroll state, mobile menu, active link ---------- */
  const nav = $("#nav");
  const links = $("#navLinks");
  const onScroll = () => nav.classList.toggle("scrolled", scrollY > 20);
  addEventListener("scroll", onScroll, { passive: true });
  onScroll();
  $("#burger").addEventListener("click", () => links.classList.toggle("open"));
  links.addEventListener("click", (e) => e.target.tagName === "A" && links.classList.remove("open"));

  const sectionObs = new IntersectionObserver(
    (entries) =>
      entries.forEach((en) => {
        if (en.isIntersecting)
          links.querySelectorAll("a").forEach((a) => a.classList.toggle("active", a.getAttribute("href") === `#${en.target.id}`));
      }),
    { rootMargin: "-45% 0px -50% 0px" }
  );
  document.querySelectorAll("main section[id]").forEach((s) => sectionObs.observe(s));

  /* ---------- reveal on scroll ---------- */
  const revealObs = new IntersectionObserver(
    (entries) =>
      entries.forEach((en) => {
        if (en.isIntersecting) {
          const el = en.target;
          el.classList.add("visible");
          revealObs.unobserve(el);
          // hand transitions back to the element's own styles (e.g. card hover)
          setTimeout(() => {
            el.classList.remove("reveal", "visible");
            el.style.transitionDelay = "";
          }, 1100);
        }
      }),
    { threshold: 0.12 }
  );
  document.querySelectorAll(".reveal").forEach((el, i) => {
    el.style.transitionDelay = `${(i % 3) * 80}ms`;
    revealObs.observe(el);
  });
})();
