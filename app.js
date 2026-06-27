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

  const menuButton = document.querySelector(".menu-toggle");
  if (menuButton) {
    menuButton.addEventListener("click", function () {
      document.body.classList.toggle("menu-open");
    });
  }

  function injectHubStyles() {
    if (document.getElementById("ktws-hub-styles")) return;
    const style = document.createElement("style");
    style.id = "ktws-hub-styles";
    style.textContent = `
      .ktws-hub-float{position:fixed;right:20px;bottom:22px;z-index:9997;border:0;border-radius:999px;background:linear-gradient(135deg,#f0bd2f,#ffd85a);color:#050607;padding:14px 18px;font-weight:900;text-transform:uppercase;letter-spacing:.05em;box-shadow:0 18px 45px rgba(0,0,0,.30),0 0 24px rgba(240,189,47,.22);cursor:pointer}
      .ktws-hub-panel{position:fixed;right:20px;bottom:82px;width:min(390px,calc(100vw - 32px));max-height:calc(100vh - 112px);overflow:auto;z-index:9998;background:#080a0e;color:#fff;border:1px solid rgba(240,189,47,.42);border-radius:24px;box-shadow:0 30px 90px rgba(0,0,0,.42);display:none}
      .ktws-hub-panel.open{display:block}
      .ktws-hub-head{padding:18px;border-bottom:3px solid #f0bd2f;background:linear-gradient(135deg,#080a0e,#141922);display:flex;justify-content:space-between;gap:12px}
      .ktws-hub-head strong{display:block;text-transform:uppercase;letter-spacing:.06em}
      .ktws-hub-head span{display:block;color:#d8dee6;font-size:13px;line-height:1.35;margin-top:4px}
      .ktws-hub-close{width:34px;height:34px;border-radius:999px;border:1px solid rgba(255,255,255,.18);background:rgba(255,255,255,.10);color:#fff;font-size:20px;cursor:pointer}
      .ktws-hub-grid{padding:16px;display:grid;grid-template-columns:1fr 1fr;gap:10px}
      .ktws-hub-grid a{display:flex;flex-direction:column;gap:4px;padding:13px;border-radius:16px;background:rgba(255,255,255,.065);border:1px solid rgba(255,255,255,.12);color:#fff;text-decoration:none;font-weight:900}
      .ktws-hub-grid a:hover{border-color:rgba(240,189,47,.68);background:rgba(240,189,47,.10)}
      .ktws-hub-grid small{color:#cfd6df;font-weight:700;font-size:11px;line-height:1.25}
      .ktws-hub-full{grid-column:1 / -1;background:linear-gradient(135deg,#f0bd2f,#ffd85a)!important;color:#050607!important}
      .ktws-hub-full small{color:#202733!important}
      @media(max-width:620px){.ktws-hub-float{right:16px;bottom:16px;font-size:12px}.ktws-hub-panel{right:16px;bottom:74px}.ktws-hub-grid{grid-template-columns:1fr}}
    `;
    document.head.appendChild(style);
  }

  function createHub() {
    if (document.body.classList.contains("connect-page")) return;
    if (document.querySelector(".ktws-hub-float")) return;

    injectHubStyles();

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

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", createHub);
  } else {
    createHub();
  }
})();