function ready(f){if(document.readyState==="loading"){document.addEventListener("DOMContentLoaded",f)}else{f()}}
function once(apply){const mo=new MutationObserver(()=>apply(mo));apply(mo)}
function setSrc(el,u){if(el&&u){el.src=u;el.removeAttribute("srcset")}}
function setBg(el,u){if(el&&u){el.style.backgroundImage="url("+u+")"}}
function setText(el,t){if(el&&typeof t==="string"){el.textContent=t}}
function setHref(el,u){if(el&&u){el.setAttribute("href",u)}}
function matchText(el,txt){if(!el||!txt)return false;const s=(el.textContent||"").trim().toLowerCase();return s===txt.toLowerCase()||s.includes(txt.toLowerCase())}
function applyAll(mo){
  const cfg=window.__uiOverrides||{};
  if(cfg.images){
    const im=cfg.images;
    if(im.headerLogo){const logo=document.querySelector("header img, nav img, img[alt*='logo' i], img[class*='logo'], img[src*='logo']"); if(logo)setSrc(logo,im.headerLogo)}
    if(im.hero){const hero=document.querySelector("[class*='hero'], .hero, section[aria-label*='hero' i]"); if(hero){const i=hero.querySelector("img"); if(i)setSrc(i,im.hero); else setBg(hero,im.hero)}}
    if(Array.isArray(im.carousel)&&im.carousel.length){const imgs=document.querySelectorAll(".carousel img, [data-carousel] img, section img"); if(imgs.length){imgs.forEach((img,i)=>{if(im.carousel[i])setSrc(img,im.carousel[i])})}}
    if(im.bySelector){Object.entries(im.bySelector).forEach(([sel,url])=>{document.querySelectorAll(sel).forEach(el=>{if(el.tagName==="IMG")setSrc(el,url);else setBg(el,url)})})}
  }
  if(cfg.text){
    if(cfg.text.bySelector){Object.entries(cfg.text.bySelector).forEach(([sel,val])=>{document.querySelectorAll(sel).forEach(el=>setText(el,val))})}
    if(Array.isArray(cfg.text.replaceByContent)){cfg.text.replaceByContent.forEach(r=>{const nodes=document.querySelectorAll(r.scope||"button, a, .btn, .button");nodes.forEach(el=>{if(matchText(el,r.find))setText(el,r.replace)})})}
  }
  if(cfg.links&&cfg.links.bySelector){Object.entries(cfg.links.bySelector).forEach(([sel,url])=>{document.querySelectorAll(sel).forEach(el=>setHref(el,url))})}
  if(mo)mo.disconnect()
}
ready(()=>once(applyAll));