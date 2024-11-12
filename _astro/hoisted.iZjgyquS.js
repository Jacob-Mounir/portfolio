import"https://cdnjs.cloudflare.com/ajax/libs/vanilla-tilt/1.8.0/vanilla-tilt.min.js";setInterval(()=>{const a=new Date().getHours(),s=a>=8&&a<=19,o=document.querySelector('span[class*="rounded-full"]'),t=o?.querySelector("span"),n=o?.lastChild;o&&t&&n&&(s?(o.className="flex items-center gap-1 px-2 py-0.5 text-xs font-medium rounded-full bg-green-500/10 text-green-500",t.className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse",n.textContent="Online"):(o.className="flex items-center gap-1 px-2 py-0.5 text-xs font-medium rounded-full bg-gray-500/10 text-gray-500",t.className="w-1.5 h-1.5 rounded-full bg-gray-500",n.textContent="Offline"))},6e4);const r=document.querySelector("[data-news-container]");async function b(){try{const s=(await(await fetch("https://hacker-news.firebaseio.com/v0/topstories.json")).json()).slice(0,6);r&&(r.innerHTML="",(await Promise.all(s.map(async t=>(await fetch(`https://hacker-news.firebaseio.com/v0/item/${t}.json`)).json()))).forEach(t=>{const n=document.createElement("div");n.className="news-item p-3 bg-white dark:bg-tertiary rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200";const h=L(t.time*1e3);n.innerHTML=`
            <a href="${t.url||`https://news.ycombinator.com/item?id=${t.id}`}"
               target="_blank"
               rel="noopener noreferrer"
               class="block">
              <h3 class="text-sm font-medium text-primary dark:text-white mb-1 line-clamp-2">
                ${t.title}
              </h3>
              <div class="flex justify-between items-center text-xs text-gray-500 dark:text-gray-400">
                <span>${h}</span>
                <span>${t.score} points</span>
              </div>
            </a>
          `,r.appendChild(n)}))}catch(e){console.error("Error fetching news:",e),r&&(r.innerHTML=`
          <div class="text-sm text-gray-500 dark:text-gray-400 text-center p-4">
            Unable to load news at the moment
          </div>
        `)}}function L(e){const a=Math.floor((Date.now()-e)/1e3),s={year:31536e3,month:2592e3,week:604800,day:86400,hour:3600,minute:60};for(const[o,t]of Object.entries(s)){const n=Math.floor(a/t);if(n>=1)return`${n} ${o}${n===1?"":"s"} ago`}return"Just now"}b();const w=setInterval(b,3e5);document.addEventListener("astro:before-swap",()=>{w&&clearInterval(w)});function u(e){return!e||isNaN(e)?"Loading...":new Intl.NumberFormat("en-US",{style:"currency",currency:"USD",minimumFractionDigits:2,maximumFractionDigits:2}).format(e)}function m(e){return!e||isNaN(e)?"--":`${e>=0?"▲":"▼"} ${Math.abs(e).toFixed(2)}%`}async function x(e){try{return(await(await fetch(`https://api.coingecko.com/api/v3/simple/price?ids=${e}&vs_currencies=usd&include_24h_change=true`)).json())[e]}catch{const t=await(await fetch(`https://api.binance.com/api/v3/ticker/24hr?symbol=${e==="bitcoin"?"BTCUSDT":"ETHUSDT"}`)).json();return{usd:parseFloat(t.lastPrice),usd_24h_change:parseFloat(t.priceChangePercent)}}}async function C(){try{const e=await x("bitcoin"),a=document.querySelector("[data-btc-price]"),s=document.querySelector("[data-btc-change]");a&&s&&e&&(a.classList.add("fade-out"),setTimeout(()=>{a.textContent=u(e.usd),a.classList.remove("fade-out")},150),s.classList.add("fade-out"),setTimeout(()=>{s.textContent=m(e.usd_24h_change),s.className=e.usd_24h_change>=0?"text-green-500":"text-red-500",s.classList.remove("fade-out")},150));const o=await x("ethereum"),t=document.querySelector("[data-eth-price]"),n=document.querySelector("[data-eth-change]");t&&n&&o&&(t.classList.add("fade-out"),setTimeout(()=>{t.textContent=u(o.usd),t.classList.remove("fade-out")},150),n.classList.add("fade-out"),setTimeout(()=>{n.textContent=m(o.usd_24h_change),n.className=o.usd_24h_change>=0?"text-green-500":"text-red-500",n.classList.remove("fade-out")},150));const i=await(await fetch("https://www.goldapi.io/api/XAU/USD",{headers:{"x-access-token":"goldapi-f20pyjatkuagctl9-io","Content-Type":"application/json"}})).json(),f=document.querySelector("[data-gold-price]"),l=document.querySelector("[data-gold-change]");if(f&&l){f.textContent=u(i.price);const y=(i.price-i.prev_close_price)/i.prev_close_price*100;l.textContent=m(y),l.className=y>=0?"text-green-500":"text-red-500"}}catch(e){console.error("Error fetching data:",e)}}C();const v=setInterval(C,5e3);document.addEventListener("astro:before-swap",()=>{v&&clearInterval(v)});const k=document.getElementById("color1"),I=document.getElementById("color2"),S=document.getElementById("direction"),T=document.querySelector(".gradient-preview"),E=document.getElementById("gradientCode"),p=document.getElementById("copyButton"),g=document.getElementById("applyButton");function c(){const e=`linear-gradient(${S.value}, ${k.value}, ${I.value})`;return T.style.background=e,E.value=`background: ${e};`,e}k.addEventListener("input",c);I.addEventListener("input",c);S.addEventListener("change",c);p.addEventListener("click",async()=>{try{await navigator.clipboard.writeText(E.value),p.textContent="Copied!",setTimeout(()=>{p.textContent="Copy CSS"},2e3)}catch(e){console.error("Failed to copy text: ",e)}});g.addEventListener("click",()=>{const e=c();document.body.style.background=e,g.textContent="Applied!",setTimeout(()=>{g.textContent="Apply to Page"},2e3)});c();const d=document.getElementById("darkmode-toggle");d&&(d.addEventListener("change",()=>{d.checked?(document.documentElement.classList.add("dark"),localStorage.setItem("theme","dark")):(document.documentElement.classList.remove("dark"),localStorage.setItem("theme","light"))}),(localStorage.getItem("theme")==="dark"||!localStorage.getItem("theme")&&window.matchMedia("(prefers-color-scheme: dark)").matches)&&(d.checked=!0,document.documentElement.classList.add("dark")));