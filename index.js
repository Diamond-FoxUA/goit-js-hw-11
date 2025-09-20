import{a as p,S as h,i as y}from"./assets/vendor-BNibzuFn.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const o of t.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&l(o)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function l(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();function g(i){return p("https://pixabay.com/api/",{params:{key:"52353734-aa83943fc4859b94495f66918",q:i,image_type:"photo",orientation:"horizontal",safesearch:!0}}).then(r=>r.data).catch(r=>(console.log(r),[]))}let a;function L(i,r){const s=i.map(({webformatURL:l,largeImageURL:e,tags:t,likes:o,views:d,comments:m,downloads:f})=>`
    <li class="card">
      <a href="${e}" class="card-item-img">
        <img class="img" src="${l}" alt="${t}">
      </a>
      <div class="card-description">
        <ul class="desc-item">
          <li class="desk-item-name">Likes</li>
          <li class="desk-item-value">${o}</li>
        </ul>
        <ul class="desc-item">
          <li class="desk-item-name">Views</li>
          <li class="desk-item-value">${d}</li>
        </ul>
        <ul class="desc-item">
          <li class="desk-item-name">Comments</li>
          <li class="desk-item-value">${m}</li>
        </ul>
        <ul class="desc-item">
          <li class="desk-item-name">Downloads</li>
          <li class="desk-item-value">${f}</li>
        </ul>
      </div>
    </li>
  `).join("");r.insertAdjacentHTML("beforeend",s),a?a.refresh():a=new h(".gallery a",{captionsData:"alt",captionDelay:250,captionPosition:"bottom"})}function v(i){i.innerHTML=""}function b(){document.querySelector(".loader").classList.remove("hidden")}function n(){document.querySelector(".loader").classList.add("hidden")}const c=document.querySelector(".form"),S=c.querySelector("input"),u=document.querySelector(".gallery");c.addEventListener("submit",q);function q(i){i.preventDefault();const r=S.value.trim();r&&(v(u),b(),g(r.toLowerCase()).then(s=>{if(!s.hits||s.hits.length===0){n(),y.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}L(s.hits,u),n()}).catch(s=>{console.log(s)}),c.reset())}
//# sourceMappingURL=index.js.map
