
(function () {
  const menuButton = document.querySelector(".menu-toggle");
  if (menuButton) {
    menuButton.addEventListener("click", function () {
      document.body.classList.toggle("menu-open");
    });
  }

  const quoteForm = document.getElementById("ktwsQuoteForm");
  if (quoteForm) {
    quoteForm.addEventListener("submit", function (event) {
      event.preventDefault();
      const data = new FormData(quoteForm);
      const subject = "KTWS Service / Quote Request - " + (data.get("service") || "General Inquiry");
      const body = [
        "KT World Solutions LLC Service Request",
        "",
        "Name: " + (data.get("name") || ""),
        "Company: " + (data.get("company") || ""),
        "Phone: " + (data.get("phone") || ""),
        "Email: " + (data.get("email") || ""),
        "",
        "Service Needed: " + (data.get("service") || ""),
        "Pickup / Starting Location: " + (data.get("pickup") || ""),
        "Delivery / Destination: " + (data.get("destination") || ""),
        "Requested Date: " + (data.get("date") || ""),
        "Urgency: " + (data.get("urgency") || ""),
        "",
        "Details:",
        data.get("details") || "",
        "",
        "Sent from ktworldsolutions.com"
      ].join("\\n");

      window.location.href = "mailto:ktworldsolutionsllc@outlook.com?subject=" +
        encodeURIComponent(subject) + "&body=" + encodeURIComponent(body);
    });
  }

  function addMessage(container, text, type) {
    const msg = document.createElement("div");
    msg.className = "ktws-ai-msg " + type;
    msg.textContent = text;
    container.appendChild(msg);
    container.scrollTop = container.scrollHeight;
  }

  function createAiReceptionist() {
    if (document.querySelector(".ktws-ai-toggle")) return;

    const toggle = document.createElement("button");
    toggle.className = "ktws-ai-toggle";
    toggle.type = "button";
    toggle.textContent = "AI Receptionist";

    const widget = document.createElement("div");
    widget.className = "ktws-ai-widget";
    widget.innerHTML = `
      <div class="ktws-ai-header">
        <div>
          <strong>KTWS Receptionist</strong>
          <span>Tell us what you need. I’ll help route your request.</span>
        </div>
        <button class="ktws-ai-close" type="button" aria-label="Close">×</button>
      </div>
      <div class="ktws-ai-body"></div>
      <div class="ktws-ai-footer">
        <a href="contact.html">Open Full Quote Form</a>
      </div>
    `;

    document.body.appendChild(toggle);
    document.body.appendChild(widget);

    const body = widget.querySelector(".ktws-ai-body");
    const close = widget.querySelector(".ktws-ai-close");

    function showStart() {
      body.innerHTML = "";
      addMessage(body, "Hey, welcome to KT World Solutions LLC. What can I help you with today?", "bot");

      const options = document.createElement("div");
      options.className = "ktws-ai-options";
      [
        "Request trucking services",
        "Request medical courier services",
        "Ask about truck parking",
        "Ask about assisted living development",
        "Talk to someone"
      ].forEach((label) => {
        const btn = document.createElement("button");
        btn.type = "button";
        btn.textContent = label;
        btn.addEventListener("click", () => showLeadForm(label));
        options.appendChild(btn);
      });
      body.appendChild(options);
    }

    function showLeadForm(reason) {
      body.innerHTML = "";
      addMessage(body, reason, "user");
      addMessage(body, "Got it. Leave your details and I’ll prepare a message to send to KTWS.", "bot");

      const form = document.createElement("form");
      form.className = "ktws-ai-form";
      form.innerHTML = `
        <input name="name" required placeholder="Your name">
        <input name="phone" required placeholder="Phone number">
        <input name="email" type="email" placeholder="Email">
        <textarea name="details" placeholder="Briefly tell us what you need"></textarea>
        <button class="ktws-ai-submit" type="submit">Prepare Message</button>
      `;

      form.addEventListener("submit", function (event) {
        event.preventDefault();
        const data = new FormData(form);
        const subject = "KTWS Website Lead - " + reason;
        const mailBody = [
          "KTWS Website Lead",
          "",
          "Reason: " + reason,
          "Name: " + (data.get("name") || ""),
          "Phone: " + (data.get("phone") || ""),
          "Email: " + (data.get("email") || ""),
          "",
          "Details:",
          data.get("details") || "",
          "",
          "Sent from KTWS AI Receptionist"
        ].join("\\n");

        window.location.href = "mailto:ktworldsolutionsllc@outlook.com?subject=" +
          encodeURIComponent(subject) + "&body=" + encodeURIComponent(mailBody);
      });

      body.appendChild(form);
    }

    toggle.addEventListener("click", () => {
      widget.classList.toggle("open");
      if (widget.classList.contains("open") && body.children.length === 0) showStart();
    });

    close.addEventListener("click", () => widget.classList.remove("open"));
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", createAiReceptionist);
  } else {
    createAiReceptionist();
  }

function restoreNowHiringButton() {
    const pageText = document.body ? document.body.innerText.toLowerCase() : "";
    if (!pageText.includes("now hiring")) return;

    const existingCareersLink = Array.from(document.querySelectorAll("a")).find((a) => {
      const text = (a.textContent || "").toLowerCase();
      const href = (a.getAttribute("href") || "").toLowerCase();
      return href.includes("careers") && (text.includes("career") || text.includes("hiring"));
    });

    if (existingCareersLink) return;

    const candidates = Array.from(document.querySelectorAll("section, .section, div")).filter((el) => {
      const text = (el.innerText || "").toLowerCase();
      return text.includes("now hiring") && text.length < 1200;
    });

    const target = candidates[0];
    if (!target) return;

    const link = document.createElement("a");
    link.href = "careers.html";
    link.className = "hiring-auto-cta";
    link.textContent = "View Careers →";

    target.appendChild(link);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", restoreNowHiringButton);
  } else {
    restoreNowHiringButton();
  }
})();
