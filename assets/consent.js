/* TakeAny.AI — RODO / GDPR consent banner.
   Gates Google Analytics (Consent Mode v2) and HubSpot tracking. Loads on every page.
   HubSpot is injected only after analytics consent; revoked via _hsp on withdrawal.
   Storage: localStorage["takeany-consent-v1"] = {analytics:bool, ts:ISO}  */
(function () {
  if (window.__takeanyConsent) return;
  window.__takeanyConsent = 1;

  var KEY = 'takeany-consent-v1';
  var PL = (document.documentElement.lang || 'en').toLowerCase().indexOf('pl') === 0;

  var T = PL ? {
    badge: 'RODO',
    title: 'Szanujemy Twoją prywatność',
    body: 'Używamy niezbędnych plików cookies, aby serwis działał poprawnie. Za Twoją zgodą korzystamy też z analityki, żeby rozumieć, jak używasz strony. Nie stosujemy cookies reklamowych ani śledzących.',
    more: 'Polityka Cookies',
    moreHref: '/pl/dokumenty-prawne#cookies',
    reject: 'Odrzuć opcjonalne',
    accept: 'Akceptuję wszystkie',
    settings: 'Ustawienia szczegółowe',
    save: 'Zapisz wybór',
    back: 'Wróć',
    panelTitle: 'Ustawienia cookies',
    catNeed: 'Niezbędne',
    catNeedBody: 'Utrzymanie sesji, uwierzytelnienie i ochrona przed CSRF. Wymagane do działania serwisu — nie można ich wyłączyć.',
    catNeedState: 'Zawsze aktywne',
    catStats: 'Analityczne',
    catStatsBody: 'Google Analytics 4 — zbiorcze statystyki odwiedzin. HubSpot — analityka i CRM: odwiedziny stron i powiązanie z formularzem kontaktowym. Domyślnie wyłączone.'
  } : {
    badge: 'GDPR',
    title: 'We value your privacy',
    body: 'We use essential cookies to make the site work. With your consent we also use analytics to understand how the site is used. We run no advertising or tracking cookies.',
    more: 'Cookie Policy',
    moreHref: '/legal#cookies',
    reject: 'Reject optional',
    accept: 'Accept all',
    settings: 'Manage settings',
    save: 'Save choice',
    back: 'Back',
    panelTitle: 'Cookie settings',
    catNeed: 'Essential',
    catNeedBody: 'Session persistence, authentication and CSRF protection. Required for the site to work — these cannot be switched off.',
    catNeedState: 'Always on',
    catStats: 'Analytics',
    catStatsBody: 'Google Analytics 4 — aggregate visit statistics. HubSpot — analytics and CRM: page visits linked to contact form submissions. Off by default.'
  };

  function read() {
    try { return JSON.parse(localStorage.getItem(KEY)); } catch (e) { return null; }
  }
  function write(analytics) {
    try { localStorage.setItem(KEY, JSON.stringify({ analytics: !!analytics, ts: new Date().toISOString() })); } catch (e) {}
  }
  var HS_ID = 'hs-script-loader', HS_SRC = 'https://js-eu1.hs-scripts.com/148327949.js';
  function loadHubSpot() {
    if (document.getElementById(HS_ID)) return;
    var s = document.createElement('script');
    s.id = HS_ID; s.async = true; s.defer = true; s.src = HS_SRC;
    (document.head || document.documentElement).appendChild(s);
  }
  function revokeHubSpot() {
    if (!document.getElementById(HS_ID)) return;
    window._hsp = window._hsp || [];
    window._hsp.push(['revokeCookieConsent']);
  }
  function apply(analytics) {
    if (analytics) loadHubSpot(); else revokeHubSpot();
    if (typeof window.gtag === 'function') {
      window.gtag('consent', 'update', {
        analytics_storage: analytics ? 'granted' : 'denied',
        ad_storage: 'denied',
        ad_user_data: 'denied',
        ad_personalization: 'denied'
      });
    }
  }

  var CARD = 'position:fixed;left:16px;bottom:16px;z-index:9000;width:min(320px,calc(100vw - 32px));'
    + 'background:var(--paper,#FFFFFF);border:1px solid var(--line,#E4E2DA);border-radius:var(--radius,4px);'
    + 'box-shadow:0 10px 30px rgba(0,0,0,.13);padding:18px 18px 15px;'
    + "font-family:var(--font-sans,'Geist',system-ui,sans-serif);color:var(--ink,#0A0A0A);"
    + 'opacity:0;transform:translateY(10px);transition:opacity .28s ease,transform .28s cubic-bezier(.4,0,.2,1)';
  var BTN = 'font:inherit;font-size:12.5px;font-weight:500;padding:8px 13px;border-radius:var(--radius,4px);cursor:pointer;'
    + 'border:1px solid var(--line,#E4E2DA);background:transparent;color:var(--ink,#0A0A0A);transition:background .15s ease,border-color .15s ease';
  var BTN_P = 'font:inherit;font-size:12.5px;font-weight:500;padding:8px 14px;border-radius:var(--radius,4px);cursor:pointer;'
    + 'border:1px solid var(--ink,#0A0A0A);background:var(--ink,#0A0A0A);color:#FFFFFF;transition:opacity .15s ease';
  var EYEBROW = "font-family:var(--font-mono,'Geist Mono',ui-monospace,monospace);font-size:9px;font-weight:600;"
    + 'letter-spacing:1.6px;text-transform:uppercase;color:var(--muted,#6B6B66)';

  var root = document.createElement('div');
  root.setAttribute('role', 'dialog');
  root.setAttribute('aria-modal', 'false');
  root.setAttribute('aria-labelledby', 'takeany-cc-title');
  root.setAttribute('data-takeany-consent', '');
  root.style.cssText = CARD;

  function esc(s) { return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;'); }

  function viewMain() {
    root.innerHTML =
      '<div style="display:flex;align-items:flex-start;gap:10px;justify-content:space-between">'
      + '<h2 id="takeany-cc-title" style="margin:0;font-size:15.5px;font-weight:600;letter-spacing:-.01em;line-height:1.25">' + esc(T.title) + '</h2>'
      + '<span style="' + EYEBROW + ';white-space:nowrap;padding-top:3px">' + esc(T.badge) + '</span>'
      + '</div>'
      + '<p style="margin:8px 0 0;font-size:12.5px;line-height:1.55;color:#3C3C36;text-wrap:pretty">' + esc(T.body)
      + ' <a href="' + T.moreHref + '" style="color:var(--ink,#0A0A0A);text-decoration:underline;text-underline-offset:2px">' + esc(T.more) + '</a>.</p>'
      + '<div style="display:flex;flex-wrap:wrap;gap:7px;margin-top:14px;align-items:center">'
      + '<button type="button" data-cc="accept" style="' + BTN_P + '">' + esc(T.accept) + '</button>'
      + '<button type="button" data-cc="reject" style="' + BTN + '">' + esc(T.reject) + '</button>'
      + '<button type="button" data-cc="settings" style="' + BTN + ';border-color:transparent;padding-left:6px;padding-right:6px;color:var(--muted,#6B6B66);text-decoration:underline;text-underline-offset:2px">' + esc(T.settings) + '</button>'
      + '</div>';
  }

  function row(id, name, body, state, checked, disabled) {
    return '<div style="border-top:1px solid var(--line,#E4E2DA);padding:10px 0">'
      + '<div style="display:flex;align-items:center;justify-content:space-between;gap:10px">'
      + (disabled
        ? '<span style="font-size:12.5px;font-weight:600">' + esc(name) + '</span>'
          + '<span style="' + EYEBROW + '">' + esc(state) + '</span>'
        : '<label for="' + id + '" style="font-size:12.5px;font-weight:600;cursor:pointer">' + esc(name) + '</label>'
          + '<input type="checkbox" id="' + id + '"' + (checked ? ' checked' : '') + ' style="width:14px;height:14px;accent-color:#17A05C;cursor:pointer;flex:none">')
      + '</div>'
      + '<p style="margin:4px 0 0;font-size:11.5px;line-height:1.5;color:#4A4A44">' + esc(body) + '</p>'
      + '</div>';
  }

  function viewPanel() {
    var prev = read();
    root.innerHTML =
      '<div style="display:flex;align-items:center;justify-content:space-between;gap:10px">'
      + '<h2 id="takeany-cc-title" style="margin:0;font-size:14px;font-weight:600;letter-spacing:-.01em">' + esc(T.panelTitle) + '</h2>'
      + '<span style="' + EYEBROW + '">' + esc(T.badge) + '</span>'
      + '</div>'
      + '<div style="margin-top:10px">'
      + row('takeany-cc-need', T.catNeed, T.catNeedBody, T.catNeedState, true, true)
      + row('takeany-cc-stats', T.catStats, T.catStatsBody, '', prev ? !!prev.analytics : false, false)
      + '</div>'
      + '<div style="display:flex;flex-wrap:wrap;gap:7px;margin-top:13px;border-top:1px solid var(--line,#E4E2DA);padding-top:13px">'
      + '<button type="button" data-cc="save" style="' + BTN_P + '">' + esc(T.save) + '</button>'
      + '<button type="button" data-cc="back" style="' + BTN + '">' + esc(T.back) + '</button>'
      + '</div>';
  }

  function close() {
    root.style.opacity = '0';
    root.style.transform = 'translateY(12px)';
    setTimeout(function () { if (root.parentNode) root.parentNode.removeChild(root); }, 300);
  }

  function decide(analytics) {
    write(analytics);
    apply(analytics);
    close();
  }

  root.addEventListener('click', function (e) {
    var b = e.target.closest && e.target.closest('[data-cc]');
    if (!b) return;
    var a = b.getAttribute('data-cc');
    if (a === 'accept') decide(true);
    else if (a === 'reject') decide(false);
    else if (a === 'settings') viewPanel();
    else if (a === 'back') viewMain();
    else if (a === 'save') {
      var cb = root.querySelector('#takeany-cc-stats');
      decide(!!(cb && cb.checked));
    }
  });

  function show() {
    viewMain();
    document.body.appendChild(root);
    requestAnimationFrame(function () {
      root.style.opacity = '1';
      root.style.transform = 'translateY(0)';
    });
  }

  // reopen hook for a footer link: <a href="#" data-cookie-settings>
  document.addEventListener('click', function (e) {
    var t = e.target.closest && e.target.closest('[data-cookie-settings]');
    if (!t) return;
    e.preventDefault();
    if (!root.parentNode) { document.body.appendChild(root); root.style.opacity = '1'; root.style.transform = 'translateY(0)'; }
    viewPanel();
  });

  var saved = read();
  if (saved) { apply(!!saved.analytics); return; }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', show);
  else show();
})();

/* TakeAny.AI event map — GA4 events (HubSpot Starter has no custom events; HubSpot gets page views + form submissions).
   Sent via gtag, so Consent Mode applies: without analytics consent GA receives only cookieless pings.
   cta_click     primary buttons and links to the contact page   {link_text, link_url}
   intent_click  homepage rows 01–05 ("Jak chcesz wykorzystać AI?") {link_text, link_url}
   lang_switch   footer language switcher                         {language, link_url}
   form_start    first interaction with a form                    {form_id}
   generate_lead successful contact form submit (Get-started page logic) */
(function () {
  if (window.__takeanyEvents) return;
  window.__takeanyEvents = 1;
  function ev(name, p) { if (typeof window.gtag === 'function') window.gtag('event', name, p || {}); }
  function txt(el) { return (el.textContent || '').replace(/\s+/g, ' ').trim().slice(0, 100); }
  var CONTACT = /\/(get-started|pl\/zacznij)(\b|#|$)/;
  document.addEventListener('click', function (e) {
    var a = e.target.closest && e.target.closest('a');
    if (!a) return;
    var href = a.getAttribute('href') || '';
    if (a.hasAttribute('data-intent-row')) return ev('intent_click', { link_text: txt(a), link_url: href });
    if (a.hasAttribute('hreflang') && a.closest('footer')) return ev('lang_switch', { language: a.getAttribute('hreflang'), link_url: href });
    if (/\bbtn-primary\b/.test(a.className) || CONTACT.test(href)) return ev('cta_click', { link_text: txt(a), link_url: href });
  }, true);
  var started = {};
  document.addEventListener('focusin', function (e) {
    var f = e.target.closest && e.target.closest('form');
    if (!f) return;
    var id = f.id || f.getAttribute('name') || location.pathname;
    if (started[id]) return;
    started[id] = 1;
    ev('form_start', { form_id: id });
  });
})();
