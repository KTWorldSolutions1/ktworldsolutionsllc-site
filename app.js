(function () {
  const KTWS = {
    quote: "contact.html",
    phone: "tel:+12523265269",
    email: "mailto:ktworldsolutionsllc@outlook.com",
    connect: "connect.html",
    careers: "careers.html",
    facebook: "https://www.facebook.com/share/1PQuV7TEsZ/?mibextid=wwXIfr",
    instagram: "https://www.instagram.com/ktworldsolutionsllc?igsh=MXMwMWlzMm9vMHZhNw%3D%3D&utm_source=qr",
    tiktok: "https://www.tiktok.com/@kt.world.solutions",
    linkedin: "https://www.linkedin.com/company/ktworldsolutionsllc/"
  };

  function setupMenu() {
    const menuButton = document.querySelector(".menu-toggle");
    if (!menuButton || menuButton.dataset.ktwsMenuReady === "1") return;
    menuButton.dataset.ktwsMenuReady = "1";
    menuButton.addEventListener("click", function () {
      document.body.classList.toggle("menu-open");
    });
  }

  function injectFinalStyles() {
    if (document.getElementById("ktws-final-production-styles")) return;

    const style = document.createElement("style");
    style.id = "ktws-final-production-styles";
    style.textContent = `
      /* =========================================================
         KTWS FINAL PRODUCTION OVERRIDES
         These are intentionally last and targeted.
         ========================================================= */

      /* Homepage Now Hiring restore styling */
      .ktws-hiring-restore {
        background:
          radial-gradient(circle at top right, rgba(240,189,47,.14), transparent 35%),
          linear-gradient(135deg, #080a0e 0%, #111722 66%, #0d131b 100%);
        color: #ffffff;
        border-top: 1px solid rgba(240,189,47,.28);
        border-bottom: 1px solid rgba(240,189,47,.28);
        padding: 42px 0;
      }
      .ktws-hiring-restore-inner {
        width: min(1120px, calc(100% - 48px));
        margin: 0 auto;
        display: grid;
        grid-template-columns: 1.15fr auto;
        gap: 26px;
        align-items: center;
      }
      .ktws-hiring-restore-kicker {
        color: #f0bd2f !important;
        font-size: 13px !important;
        font-weight: 900;
        letter-spacing: .22em;
        text-transform: uppercase;
        margin-bottom: 12px;
      }
      .ktws-hiring-restore h2 {
        color: #ffffff;
        font-size: clamp(30px, 4vw, 48px);
        line-height: 1.02;
        letter-spacing: -.04em;
        text-transform: uppercase;
        margin-bottom: 12px;
      }
      .ktws-hiring-restore p {
        color: #d8dee6 !important;
        font-size: 18px !important;
        line-height: 1.6 !important;
        margin-bottom: 0;
      }
      .ktws-hiring-restore-btn {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        min-width: 230px;
        padding: 17px 26px;
        border-radius: 8px;
        background: #f0bd2f;
        color: #050607 !important;
        font-weight: 900;
        text-transform: uppercase;
        letter-spacing: .04em;
        box-shadow: 0 18px 42px rgba(0,0,0,.24);
        border: 2px solid transparent;
        white-space: nowrap;
        text-decoration: none;
      }

      /* Memorial photo: show full uploaded image, no bad crop */
      .memorial-photo-card {
        background: #0d131b !important;
      }
      .memorial-photo-card img {
        width: 100% !important;
        object-fit: contain !important;
        object-position: center center !important;
        background: #0d131b !important;
      }

      /* Travis card only: show full face/head instead of mouth-down crop */
      #travis-leadership img,
      article[id="travis-leadership"] img,
      .team-card.ktws-travis-card img,
      .ktws-travis-photo-fix {
        width: 100% !important;
        height: 430px !important;
        object-fit: contain !important;
        object-position: center center !important;
        background: #0d131b !important;
      }

      /* Medical Courier homepage card only: stop cutting off the courier image */
      .showcase-card.ktws-medical-card img,
      .card.ktws-medical-card img,
      article.ktws-medical-card img,
      .ktws-medical-card-img {
        width: 100% !important;
        object-fit: contain !important;
        object-position: center center !important;
        background: #f7f8fa !important;
      }

      /* Keep truck/transportation card from being over-touched */
      .showcase-card.ktws-trucking-card img,
      .card.ktws-trucking-card img,
      article.ktws-trucking-card img {
        object-fit: cover !important;
        object-position: center center !important;
      }

      /* Hub */
      .ktws-hub-float{
        position:fixed;
        right:20px;
        bottom:22px;
        z-index:9997;
        border:0;
        border-radius:999px;
        background:linear-gradient(135deg,#f0bd2f,#ffd85a);
        color:#050607;
        padding:14px 18px;
        font-weight:900;
        text-transform:uppercase;
        letter-spacing:.05em;
        box-shadow:0 18px 45px rgba(0,0,0,.30),0 0 24px rgba(240,189,47,.22);
        cursor:pointer;
      }
      .ktws-hub-panel{
        position:fixed;
        right:20px;
        bottom:82px;
        width:min(390px,calc(100vw - 32px));
        max-height:calc(100vh - 112px);
        overflow:auto;
        z-index:9998;
        background:#080a0e;
        color:#fff;
        border:1px solid rgba(240,189,47,.42);
        border-radius:24px;
        box-shadow:0 30px 90px rgba(0,0,0,.42);
        display:none;
      }
      .ktws-hub-panel.open{display:block}
      .ktws-hub-head{
        padding:18px;
        border-bottom:3px solid #f0bd2f;
        background:linear-gradient(135deg,#080a0e,#141922);
        display:flex;
        justify-content:space-between;
        gap:12px;
      }
      .ktws-hub-head strong{display:block;text-transform:uppercase;letter-spacing:.06em}
      .ktws-hub-head span{display:block;color:#d8dee6;font-size:13px;line-height:1.35;margin-top:4px}
      .ktws-hub-close{
        width:34px;height:34px;border-radius:999px;
        border:1px solid rgba(255,255,255,.18);
        background:rgba(255,255,255,.10);
        color:#fff;font-size:20px;cursor:pointer;
      }
      .ktws-hub-grid{padding:16px;display:grid;grid-template-columns:1fr 1fr;gap:10px}
      .ktws-hub-grid a{
        display:flex;flex-direction:column;gap:4px;
        padding:13px;border-radius:16px;
        background:rgba(255,255,255,.065);
        border:1px solid rgba(255,255,255,.12);
        color:#fff;text-decoration:none;font-weight:900;
      }
      .ktws-hub-grid a:hover{border-color:rgba(240,189,47,.68);background:rgba(240,189,47,.10)}
      .ktws-hub-grid small{color:#cfd6df;font-weight:700;font-size:11px;line-height:1.25}
      .ktws-hub-full{grid-column:1 / -1;background:linear-gradient(135deg,#f0bd2f,#ffd85a)!important;color:#050607!important}
      .ktws-hub-full small{color:#202733!important}

      @media(max-width:760px){
        .ktws-hiring-restore-inner{
          grid-template-columns:1fr;
          width:min(1120px, calc(100% - 36px));
        }
        .ktws-hiring-restore-btn{width:100%}
        #travis-leadership img,
        article[id="travis-leadership"] img,
        .team-card.ktws-travis-card img,
        .ktws-travis-photo-fix{
          height:380px !important;
        }
      }
      @media(max-width:620px){
        .ktws-hub-float{right:16px;bottom:16px;font-size:12px}
        .ktws-hub-panel{right:16px;bottom:74px}
        .ktws-hub-grid{grid-template-columns:1fr}
      }
    `;
    document.head.appendChild(style);
  }

  function markCards() {
    document.querySelectorAll(".team-card, .featured-team-card, article, .owner-card").forEach((card) => {
      const text = (card.innerText || "").toLowerCase();
      if (text.includes("travis lewter") || text.includes("founder & chief executive officer")) {
        card.classList.add("ktws-travis-card");
        const img = card.querySelector("img");
        if (img) img.classList.add("ktws-travis-photo-fix");
      }
    });

    document.querySelectorAll(".showcase-card, .card, article").forEach((card) => {
      const text = (card.innerText || "").toLowerCase();
      const img = card.querySelector("img");
      if (!img) return;

      if (text.includes("medical courier services") || (text.includes("medical courier") && text.includes("healthcare logistics"))) {
        card.classList.add("ktws-medical-card");
        img.classList.add("ktws-medical-card-img");
        img.removeAttribute("style");
      }

      if (text.includes("transportation & logistics") || text.includes("regional trucking")) {
        card.classList.add("ktws-trucking-card");
        img.removeAttribute("style");
      }
    });
  }

  function restoreNowHiringBanner() {
    const path = (window.location.pathname || "").toLowerCase();
    const isHome = path.endsWith("/") || path.endsWith("/index.html") || path === "" || path === "/";
    if (!isHome) return;

    const pageText = document.body ? document.body.innerText.toLowerCase() : "";
    const hasHiringText = pageText.includes("now hiring");
    const hasCareersButton = Array.from(document.querySelectorAll("a")).some((a) => {
      const href = (a.getAttribute("href") || "").toLowerCase();
      const text = (a.textContent || "").toLowerCase();
      return href.includes("careers") && (text.includes("career") || text.includes("hiring"));
    });

    if (hasHiringText && hasCareersButton) return;
    if (document.querySelector(".ktws-hiring-restore")) return;

    const section = document.createElement("section");
    section.className = "ktws-hiring-restore";
    section.innerHTML = `
      <div class="ktws-hiring-restore-inner">
        <div>
          <p class="ktws-hiring-restore-kicker">Now Hiring</p>
          <h2>Join the KT World Solutions team.</h2>
          <p>We are building across transportation, courier services, administration, logistics, and care development.</p>
        </div>
        <a class="ktws-hiring-restore-btn" href="careers.html">View Careers →</a>
      </div>
    `;

    const trust = document.querySelector(".trust-motion");
    const showcase = document.querySelector(".division-showcase");
    const hero = document.querySelector(".hero.home-hero") || document.querySelector(".home-hero") || document.querySelector(".hero");

    if (trust && trust.parentNode) {
      trust.parentNode.insertBefore(section, trust);
    } else if (showcase && showcase.parentNode) {
      showcase.parentNode.insertBefore(section, showcase);
    } else if (hero && hero.parentNode) {
      hero.parentNode.insertBefore(section, hero.nextSibling);
    } else {
      document.body.insertBefore(section, document.body.firstChild);
    }
  }

  function createHub() {
    if (document.body.classList.contains("connect-page")) return;
    if (document.querySelector(".ktws-hub-float")) return;

    const btn = document.createElement("button");
    btn.className = "ktws-hub-float";
    btn.type = "button";
    btn.textContent = "KTWS Hub";

    const panel = document.createElement("div");
    panel.className = "ktws-hub-panel";
    panel.innerHTML = `
      <div class="ktws-hub-head">
        <div><strong>KTWS Hub</strong><span>Quick actions, contact, careers, and social links.</span></div>
        <button class="ktws-hub-close" type="button" aria-label="Close">×</button>
      </div>
      <div class="ktws-hub-grid">
        <a class="ktws-hub-full" href="${KTWS.connect}">🌐 Connect Hub<small>Open full digital business card</small></a>
        <a href="${KTWS.quote}">📋 Request Quote<small>Start a service request</small></a>
        <a href="${KTWS.phone}">📞 Call Now<small>(252) 326-5269</small></a>
        <a href="${KTWS.careers}">💼 Careers<small>Now hiring</small></a>
        <a href="${KTWS.facebook}" target="_blank" rel="noopener">📘 Facebook<small>Follow KTWS</small></a>
        <a href="${KTWS.instagram}" target="_blank" rel="noopener">📸 Instagram<small>@ktworldsolutionsllc</small></a>
        <a href="${KTWS.tiktok}" target="_blank" rel="noopener">🎵 TikTok<small>@kt.world.solutions</small></a>
        <a href="${KTWS.linkedin}" target="_blank" rel="noopener">💼 LinkedIn<small>Company page</small></a>
        <a class="ktws-hub-full" href="${KTWS.email}">✉️ Email KTWS<small>ktworldsolutionsllc@outlook.com</small></a>
      </div>
    `;

    document.body.appendChild(btn);
    document.body.appendChild(panel);

    btn.addEventListener("click", () => panel.classList.toggle("open"));
    panel.querySelector(".ktws-hub-close").addEventListener("click", () => panel.classList.remove("open"));
  }

  function initKTWS() {
    injectFinalStyles();
    setupMenu();
    restoreNowHiringBanner();
    createHub();
    markCards();

    /* Run once more after images/layout settle */
    setTimeout(markCards, 250);
    setTimeout(markCards, 1000);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initKTWS);
  } else {
    initKTWS();
  }
})();