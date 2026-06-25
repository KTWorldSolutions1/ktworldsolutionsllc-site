
document.addEventListener('DOMContentLoaded', () => {
  const btn = document.querySelector('.menu-toggle');

  if (btn) {
    btn.addEventListener('click', () => {
      document.body.classList.toggle('menu-open');
    });
  }

  // Add Careers link to the main navigation on every page.
  const navLinks = document.querySelector('.nav-links');
  if (navLinks && !navLinks.querySelector('a[href="careers.html"]')) {
    const careersLink = document.createElement('a');
    careersLink.href = 'careers.html';
    careersLink.textContent = 'Careers';

    const contactLink = navLinks.querySelector('a[href="contact.html"]');
    if (contactLink) {
      navLinks.insertBefore(careersLink, contactLink);
    } else {
      navLinks.appendChild(careersLink);
    }
  }

  // Add Careers link to the footer division list if it is not already present.
  const footerLinks = document.querySelector('.footer');
  if (footerLinks && !footerLinks.querySelector('a[href="careers.html"]')) {
    const divisionsColumn = Array.from(footerLinks.querySelectorAll('div')).find((div) =>
      div.textContent.includes('Divisions')
    );

    if (divisionsColumn) {
      const p = document.createElement('p');
      const a = document.createElement('a');
      a.href = 'careers.html';
      a.textContent = 'Careers';
      p.appendChild(a);
      divisionsColumn.appendChild(p);
    }
  }

  // Add a clean Now Hiring ribbon on the homepage only.
  const isHome =
    window.location.pathname.endsWith('/') ||
    window.location.pathname.endsWith('/index.html') ||
    window.location.pathname === '';

  if (isHome && !document.querySelector('.hiring-ribbon')) {
    const hero = document.querySelector('.home-hero');
    if (hero && hero.parentNode) {
      const ribbon = document.createElement('section');
      ribbon.className = 'hiring-ribbon';
      ribbon.innerHTML = `
        <div class="container hiring-ribbon-inner">
          <strong>Now Hiring</strong>
          <span>Join the KT World Solutions team across transportation, courier services, administration, logistics, and care development.</span>
          <a href="careers.html">View Careers →</a>
        </div>
      `;

      hero.insertAdjacentElement('afterend', ribbon);

      const style = document.createElement('style');
      style.textContent = `
        .hiring-ribbon {
          background: #0d131b;
          color: #ffffff;
          border-top: 1px solid rgba(240,189,47,.3);
          border-bottom: 1px solid rgba(240,189,47,.3);
        }

        .hiring-ribbon-inner {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 18px;
          padding-top: 18px;
          padding-bottom: 18px;
        }

        .hiring-ribbon strong {
          color: var(--gold, #f0bd2f);
          font-size: 13px;
          font-weight: 900;
          text-transform: uppercase;
          letter-spacing: .14em;
          white-space: nowrap;
        }

        .hiring-ribbon span {
          color: #e5e9ef;
          font-size: 15px;
          line-height: 1.45;
        }

        .hiring-ribbon a {
          background: var(--gold, #f0bd2f);
          color: #050607;
          border-radius: 7px;
          padding: 12px 15px;
          font-size: 12px;
          font-weight: 900;
          text-transform: uppercase;
          letter-spacing: .04em;
          white-space: nowrap;
          text-decoration: none;
        }

        @media (max-width: 760px) {
          .hiring-ribbon-inner {
            flex-direction: column;
            align-items: flex-start;
          }

          .hiring-ribbon a {
            width: 100%;
            justify-content: center;
            text-align: center;
          }
        }
      `;
      document.head.appendChild(style);
    }
  }
});
