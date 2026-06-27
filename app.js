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
      .ktws-quote-hidden {
        display: none !important;
      }

      .ktws-quote-helper {
        background: #f7f8fa;
        border-left: 5px solid #f0bd2f;
        border-radius: 12px;
        padding: 14px 16px;
        color: #424a56;
        font-size: 15px;
        line-height: 1.55;
        margin-bottom: 4px;
      }

      #jordyn img {
        object-fit: cover !important;
        object-position: center 18% !important;
      }

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

      /* =========================================================
         KTWS FINAL MOBILE IMAGE FIXES ONLY
         Desktop remains unchanged.
         ========================================================= */
      @media(max-width:920px){
        /* Home: Medical Courier card — show person properly instead of shoulder-down crop */
        .division-showcase .showcase-card[href="medical-courier.html"] img {
          height: 300px !important;
          object-fit: cover !important;
          object-position: center top !important;
        }

        /* Home: JLV/Trucking card — zoom out so truck is not too tight */
        .division-showcase .showcase-card[href="trucking.html"] img {
          height: 300px !important;
          object-fit: contain !important;
          object-position: center center !important;
          background: #f7f8fa !important;
        }

        /* About: Travis executive photo — show full head/face instead of forehead-to-nose */
        #travis-leadership img {
          height: 430px !important;
          object-fit: contain !important;
          object-position: center center !important;
          background: #0d131b !important;
        }

        /* Trucking memorial: Pops photo — prevent chin cutoff on mobile */
        .memorial-photo-card img {
          height: 440px !important;
          object-fit: contain !important;
          object-position: center center !important;
          background: #0d131b !important;
        }
      }

      @media(max-width:620px){
        .ktws-hub-float{right:16px;bottom:16px;font-size:12px}
        .ktws-hub-panel{right:16px;bottom:74px}
        .ktws-hub-grid{grid-template-columns:1fr}

        #jordyn img {
          height: 360px !important;
          object-position: center 16% !important;
        }

        .division-showcase .showcase-card[href="medical-courier.html"] img {
          height: 285px !important;
          object-position: center top !important;
        }

        .division-showcase .showcase-card[href="trucking.html"] img {
          height: 285px !important;
          object-fit: contain !important;
        }

        #travis-leadership img {
          height: 400px !important;
          object-fit: contain !important;
        }

        .memorial-photo-card img {
          height: 405px !important;
          object-fit: contain !important;
        }
      }

      @media(max-width:420px){
        .division-showcase .showcase-card[href="medical-courier.html"] img,
        .division-showcase .showcase-card[href="trucking.html"] img {
          height: 265px !important;
        }

        #travis-leadership img {
          height: 375px !important;
        }

        .memorial-photo-card img {
          height: 380px !important;
        }
      }
    `;
    document.head.appendChild(style);
  }

  function getFieldWrapperByKeywords(keywords) {
    const fields = Array.from(document.querySelectorAll("label, .form label, .quote-form label"));
    return fields.filter((label) => {
      const text = (label.innerText || label.textContent || "").toLowerCase();
      return keywords.some((word) => text.includes(word));
    });
  }

  function setFieldVisible(labels, visible) {
    labels.forEach((label) => {
      label.classList.toggle("ktws-quote-hidden", !visible);
      label.querySelectorAll("input, textarea, select").forEach((field) => {
        if (!visible) {
          field.dataset.ktwsWasRequired = field.required ? "1" : "0";
          field.required = false;
          if (field.tagName !== "SELECT") field.value = "";
        } else if (field.dataset.ktwsWasRequired === "1") {
          field.required = true;
        }
      });
    });
  }

  function makeQuoteFormSmart() {
    const form = document.querySelector(".quote-form, form");
    if (!form || form.dataset.ktwsSmartQuoteReady === "1") return;
    form.dataset.ktwsSmartQuoteReady = "1";

    const serviceSelect = Array.from(form.querySelectorAll("select")).find((select) => {
      const labelText = (select.closest("label")?.innerText || "").toLowerCase();
      return labelText.includes("service") || labelText.includes("needed");
    }) || form.querySelector("select");

    if (!serviceSelect) return;

    const pickupFields = getFieldWrapperByKeywords(["pickup", "starting location"]);
    const deliveryFields = getFieldWrapperByKeywords(["delivery", "destination"]);
    const dateFields = getFieldWrapperByKeywords(["requested date", "date needed", "delivery date"]);
    const extraLocationFields = [...pickupFields, ...deliveryFields, ...dateFields];

    let helper = form.querySelector(".ktws-quote-helper");
    if (!helper) {
      helper = document.createElement("div");
      helper.className = "ktws-quote-helper";
      serviceSelect.closest("label")?.insertAdjacentElement("afterend", helper);
    }

    function updateForm() {
      const value = (serviceSelect.value || serviceSelect.options[serviceSelect.selectedIndex]?.text || "").toLowerCase();

      const isCourierOrTrucking =
        value.includes("courier") ||
        value.includes("medical") ||
        value.includes("specimen") ||
        value.includes("stat") ||
        value.includes("pharmacy") ||
        value.includes("trucking") ||
        value.includes("freight") ||
        value.includes("transportation") ||
        value.includes("lane") ||
        value.includes("load");

      const isGeneral =
        value.includes("general") ||
        value.includes("business inquiry") ||
        value.includes("call") ||
        value.includes("consult") ||
        value.includes("question");

      if (isCourierOrTrucking) {
        setFieldVisible(extraLocationFields, true);
        helper.textContent = "For courier or trucking requests, pickup/start location and destination help KTWS understand the lane, timing, and service needs.";
      } else {
        setFieldVisible(extraLocationFields, false);
        helper.textContent = "For general questions, call requests, careers, truck parking, assisted living, or business inquiries, just complete your contact info and describe what you need in the message box.";
      }

      if (isGeneral) {
        setFieldVisible(extraLocationFields, false);
      }
    }

    serviceSelect.addEventListener("change", updateForm);
    updateForm();
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
    createHub();
    makeQuoteFormSmart();
    setTimeout(makeQuoteFormSmart, 250);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initKTWS);
  } else {
    initKTWS();
  }
})();
