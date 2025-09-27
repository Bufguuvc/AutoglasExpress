(function () {
  function parseJSONFromScript(id) {
    const el = document.getElementById(id);
    if (!el) return null;
    try { return JSON.parse(el.textContent.trim()); } catch { return null; }
  }

  function setFavicon(href) {
    if (!href) return;
    const rels = ['icon','shortcut icon','apple-touch-icon'];
    rels.forEach(rel => {
      let link = document.querySelector(`link[rel="${rel}"]`);
      if (!link) { link = document.createElement('link'); link.rel = rel; document.head.appendChild(link); }
      link.href = href;
    });
  }

  function containsAny(s, arr) {
    const t = (s || '').toLowerCase();
    return arr.some(n => t.includes(n.toLowerCase()));
  }

  function findInsuranceCarouselContainer() {
    let el = document.querySelector('[data-insurance-carousel],[data-carousel="insurance"]');
    if (el) return el;
    const hints = ['tryg','topdanmark','alm brand','alm. brand','if','gjensidige','codan','lb','lb forsikring','saxo','sønderjysk','sydbank','nemid','almbrand'];
    const candidates = new Map();
    document.querySelectorAll('img').forEach(img => {
      const text = `${img.alt} ${img.title} ${img.src}`;
      if (containsAny(text, hints)) {
        const cluster = img.closest('section, div, ul, .swiper, .splide, .slick-slider') || img.parentElement;
        if (cluster) candidates.set(cluster, (candidates.get(cluster) || 0) + 1);
      }
    });
    let best = null, bestCount = 0;
    candidates.forEach((count, node) => { if (count > bestCount) { best = node; bestCount = count; }});
    if (best) return best;
    return document.querySelector('.swiper,.splide,.slick-slider,[class*="carousel"],[class*="slider"]');
  }

  function getCarouselImages(container) {
    if (!container) return [];
    const imgs = container.querySelectorAll('img');
    return Array.from(new Set(Array.from(imgs)));
  }

  function patchInsuranceCarousel() {
    const list = parseJSONFromScript('insurance-images');
    if (!Array.isArray(list) || !list.length) return false;
    const container = findInsuranceCarouselContainer();
    if (!container) return false;
    const imgs = getCarouselImages(container);
    if (!imgs.length) return false;

    const count = Math.min(imgs.length, list.length);
    for (let i = 0; i < count; i++) {
      const img = imgs[i], src = list[i];
      if (!img) continue;
      img.src = src;
      const name = src.split('/').pop()?.replace(/\.[a-z0-9]+$/i,'') || `insurance-${i+1}`;
      if (!img.alt || !img.alt.trim()) img.alt = `Insurance logo ${name}`;
      if (img.srcset) img.removeAttribute('srcset');
      if (img.sizes) img.removeAttribute('sizes');
    }

    if (list.length > imgs.length) {
      const ul = container.querySelector('ul,.slides,.swiper-wrapper,.splide__list') || container;
      for (let i = imgs.length; i < list.length; i++) {
        const li = document.createElement('li');
        const img = document.createElement('img');
        img.src = list[i];
        img.alt = `Insurance logo ${i+1}`;
        li.appendChild(img);
        ul.appendChild(li);
      }
    }
    return true;
  }

  function applyGlobalImageRewrites() {
    const map = parseJSONFromScript('image-rewrites');
    if (!map || typeof map !== 'object') return;
    const entries = Object.entries(map);

    const filenamePairs = entries.filter(([k]) => /\.[a-z0-9]+$/i.test(k));
    if (filenamePairs.length) {
      document.querySelectorAll('img').forEach(img => {
        const file = (img.src || '').split('/').pop();
        filenamePairs.forEach(([from,to]) => {
          if (file && file.toLowerCase() === from.toLowerCase()) {
            img.src = to;
            if (img.srcset) img.removeAttribute('srcset');
            if (img.sizes) img.removeAttribute('sizes');
          }
        });
      });
      document.querySelectorAll('[style*="background"]').forEach(el => {
        const m = (el.style.backgroundImage || '').match(/url\(["']?([^"')]+)["']?\)/i);
        if (!m) return;
        const file = m[1].split('/').pop();
        filenamePairs.forEach(([from,to]) => {
          if (file && file.toLowerCase() === from.toLowerCase()) {
            el.style.backgroundImage = `url(${to})`;
          }
        });
      });
    }

    const hintPairs = entries.filter(([k]) => !/\.[a-z0-9]+$/i.test(k));
    hintPairs.forEach(([hint,to]) => {
      const selector = [`img#${CSS.escape(hint)}`,`img.${CSS.escape(hint)}`,`img[alt*="${hint}"]`,`img[title*="${hint}"]`].join(',');
      document.querySelectorAll(selector).forEach(img => {
        img.src = to;
        if (img.srcset) img.removeAttribute('srcset');
        if (img.sizes) img.removeAttribute('sizes');
      });
      const bgTargets = Array.from(document.querySelectorAll(`[class*="${hint}"],[id*="${hint}"]`));
      bgTargets.forEach(el => {
        const bg = getComputedStyle(el).backgroundImage;
        if (bg && bg !== 'none') el.style.backgroundImage = `url(${to})`;
      });
    });
  }

  function applyAll() {
    setFavicon('/public/favicon_autoglasexpress.jpg');
    const ok = patchInsuranceCarousel();
    applyGlobalImageRewrites();
    return ok;
  }

  function start() {
    let tries = 0, max = 30;
    const h = setInterval(() => { if (applyAll() || ++tries >= max) clearInterval(h); }, 100);
    const mo = new MutationObserver(() => { patchInsuranceCarousel(); });
    mo.observe(document.body, { childList: true, subtree: true });
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', start);
  else start();
})();