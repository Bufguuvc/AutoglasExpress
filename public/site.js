function ready(fn){if(document.readyState==="loading"){document.addEventListener("DOMContentLoaded",fn)}else{fn()}}
function swapSrc(el,url){if(!el||!url)return;el.src=url;el.removeAttribute("srcset")}
function swapBg(el,url){if(!el||!url)return;el.style.backgroundImage="url("+url+")"}
function observeOnce(apply){const mo=new MutationObserver(()=>apply(mo));apply(mo)}
function applyAll(mo){
  const cfg=window.__imageOverrides||{};
  if(cfg.headerLogo){
    const logo=document.querySelector("header img, nav img, img[alt*='logo' i], img[class*='logo'], img[src*='logo']");
    if(logo){swapSrc(logo,cfg.headerLogo)}
  }
  if(Array.isArray(cfg.carousel)&&cfg.carousel.length){
    const imgs=document.querySelectorAll(".carousel img, [data-carousel] img, section img");
    if(imgs.length){imgs.forEach((img,i)=>{if(cfg.carousel[i])swapSrc(img,cfg.carousel[i])})}
  }
  if(cfg.hero){
    const hero=document.querySelector("[class*='hero'], .hero, section[aria-label*='hero' i]");
    if(hero){
      const img=hero.querySelector("img");
      if(img){swapSrc(img,cfg.hero)}else{swapBg(hero,cfg.hero)}
    }
  }
  if(mo)mo.disconnect();
}
ready(()=>observeOnce(applyAll));