(function () {
  var STORAGE_KEY = 'atelier-bleu-lang';

  function detectDefaultLang() {
    var stored = null;
    try { stored = localStorage.getItem(STORAGE_KEY); } catch (e) {}
    return stored === 'en' ? 'en' : 'fr';
  }

  function setLang(lang) {
    document.querySelectorAll('[data-fr][data-en]').forEach(function (el) {
      el.textContent = lang === 'en' ? el.getAttribute('data-en') : el.getAttribute('data-fr');
    });

    document.documentElement.setAttribute('lang', lang);

    document.querySelectorAll('.lang-btn').forEach(function (btn) {
      var isActive = btn.getAttribute('data-set-lang') === lang;
      btn.classList.toggle('active', isActive);
      btn.setAttribute('aria-pressed', String(isActive));
    });

    try { localStorage.setItem(STORAGE_KEY, lang); } catch (e) {}
  }

  document.querySelectorAll('.lang-btn').forEach(function (btn) {
    btn.addEventListener('click', function () {
      setLang(btn.getAttribute('data-set-lang'));
    });
  });

  setLang(detectDefaultLang());
})();
