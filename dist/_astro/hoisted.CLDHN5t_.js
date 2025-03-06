import{v as b}from"./ViewToggle.astro_astro_type_script_index_0_lang.DzGYtyPK.js";import"./hoisted.gUROTMol.js";function $(e){const o=document.getElementById("articleContainer");o&&(e==="grid"?o.className="grid-layout grid grid-cols-1 md:grid-cols-3 gap-6":o.className="list-layout flex flex-col gap-6")}b.subscribe($);window.addEventListener("viewModeChanged",e=>{e.detail&&$(e.detail)});const h=document.getElementById("showCategoriesBtn"),w=document.getElementById("closeCategoriesBtn"),x=document.getElementById("applyCategoriesBtn"),m=document.getElementById("categoriesModal"),g=document.getElementById("categoriesContent");h&&m&&g&&h.addEventListener("click",()=>{m.classList.remove("hidden"),setTimeout(()=>{g.classList.remove("translate-y-full")},10)});w&&m&&g&&w.addEventListener("click",()=>{g.classList.add("translate-y-full"),setTimeout(()=>{m.classList.add("hidden")},300)});x&&m&&g&&x.addEventListener("click",()=>{g.classList.add("translate-y-full"),setTimeout(()=>{m.classList.add("hidden")},300)});let v=1,p=!1,f=!0;const L=document.getElementById("articleContainer"),c=document.getElementById("loadingIndicator"),y=document.getElementById("noMoreContent");function k(e,o){const t=document.createElement("div"),r=o==="grid";r?t.className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow duration-300":t.className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow duration-300 flex";const l=(e.article_categories||[]).map(s=>s?.categories).filter(Boolean),n=s=>{try{const u=new Date(s),i=Math.floor((new Date-u)/1e3);if(i<60)return"hace unos segundos";if(i<3600){const a=Math.floor(i/60);return`hace ${a} ${a===1?"minuto":"minutos"}`}else if(i<86400){const a=Math.floor(i/3600);return`hace ${a} ${a===1?"hora":"horas"}`}else if(i<604800){const a=Math.floor(i/86400);return`hace ${a} ${a===1?"día":"días"}`}else return new Date(s).toLocaleDateString("es-ES",{year:"numeric",month:"long",day:"numeric"})}catch(u){return console.error("Error formatting relative time:",u),"Recientemente"}};return r?t.innerHTML=`
        <div class="relative">
          <a href="/articulo/${e.slug}">
            <img 
              src="${e.imagen_principal||`https://picsum.photos/seed/${e.id||"default"}/800/450`}" 
              alt="${e.titulo}"
              class="w-full h-48 object-cover"
              loading="lazy"
            />
          </a>
          
          <div class="absolute top-3 right-3 flex gap-1">
            ${e.destacado?`
              <span class="bg-yellow-100 text-yellow-800 text-xs font-medium px-2 py-1 rounded flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-3 h-3 mr-1">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                </svg>
                Destacado
              </span>
            `:""}
            ${e.trending?`
              <span class="bg-blue-100 text-blue-800 text-xs font-medium px-2 py-1 rounded flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-3 h-3 mr-1">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
                </svg>
                Tendencia
              </span>
            `:""}
            ${e.viral?`
              <span class="bg-green-100 text-green-800 text-xs font-medium px-2 py-1 rounded flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-3 h-3 mr-1">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
                </svg>
                Viral
              </span>
            `:""}
          </div>
        </div>
        
        <div class="p-4">
          <div class="flex flex-wrap gap-1 mb-2">
            ${l.slice(0,2).map(s=>`
              <a 
                href="/categoria/${s.slug}"
                class="text-xs text-primary-700 bg-primary-50 hover:bg-primary-100 rounded-full px-2 py-0.5"
              >
                ${s.nombre}
              </a>
            `).join("")}
          </div>
          
          <h2 class="text-lg font-bold mb-2 line-clamp-2">
            <a href="/articulo/${e.slug}" class="text-gray-900 hover:text-primary-600">
              ${e.titulo}
            </a>
          </h2>
          
          <p class="text-gray-600 text-sm mb-3 line-clamp-2">${e.extracto}</p>
          
          <div class="flex justify-between items-center text-xs text-gray-500 mt-auto">
            <time datetime="${e.created_at}">${n(e.created_at)}</time>
            <a href="/articulo/${e.slug}" class="text-primary-600 hover:text-primary-800 font-medium text-sm">
              Leer más
            </a>
          </div>
        </div>
      `:t.innerHTML=`
        <a href="/articulo/${e.slug}" class="flex-shrink-0 w-1/3">
          <img 
            src="${e.imagen_principal||`https://picsum.photos/seed/${e.id||"default"}/400/400`}" 
            alt="${e.titulo}"
            class="w-full h-full object-cover min-h-[120px]"
            loading="lazy"
          />
        </a>
        <div class="p-4 flex-grow flex flex-col">
          <div class="flex flex-wrap gap-1 mb-2">
            ${l.slice(0,2).map(s=>`
              <a 
                href="/categoria/${s.slug}"
                class="text-xs text-primary-700 bg-primary-50 hover:bg-primary-100 rounded-full px-2 py-0.5"
              >
                ${s.nombre}
              </a>
            `).join("")}
          </div>
          
          <h2 class="text-lg font-bold mb-2">
            <a href="/articulo/${e.slug}" class="text-gray-900 hover:text-primary-600">
              ${e.titulo}
            </a>
          </h2>
          
          <p class="text-gray-600 text-sm mb-3 flex-grow">${e.extracto}</p>
          
          <div class="flex justify-between items-center mt-2">
            <div class="flex gap-1">
              ${e.destacado?`
                <span class="bg-yellow-100 text-yellow-800 text-xs font-medium px-2 py-0.5 rounded flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-3 h-3 mr-1">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                  </svg>
                  <span class="hidden sm:inline">Destacado</span>
                </span>
              `:""}
              ${e.trending?`
                <span class="bg-blue-100 text-blue-800 text-xs font-medium px-2 py-0.5 rounded flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-3 h-3 mr-1">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
                  </svg>
                  <span class="hidden sm:inline">Tendencia</span>
                </span>
              `:""}
              ${e.viral?`
                <span class="bg-green-100 text-green-800 text-xs font-medium px-2 py-0.5 rounded flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-3 h-3 mr-1">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
                  </svg>
                  <span class="hidden sm:inline">Viral</span>
                </span>
              `:""}
            </div>
            <div class="flex items-center">
              <time datetime="${e.created_at}" class="text-xs text-gray-500 mr-3">${n(e.created_at)}</time>
              <a href="/articulo/${e.slug}" class="text-primary-600 hover:text-primary-800 font-medium text-sm">
                Leer más
              </a>
            </div>
          </div>
        </div>
      `,t}async function C(){if(!(p||!f))try{p=!0,c&&c.classList.remove("hidden"),v++;const e=v*6,o=await fetch(`/api/articles?limit=6&offset=${e}`);if(!o.ok)throw new Error("Error fetching more articles");const t=await o.json();if(c&&c.classList.add("hidden"),!t.articles||t.articles.length===0){f=!1,y&&y.classList.remove("hidden");return}const r=document.querySelector(".grid-layout")?"grid":"list";t.articles.forEach(l=>{const n=k(l,r);L.appendChild(n)})}catch(e){console.error("Error fetching more articles:",e)}finally{p=!1,c&&c.classList.add("hidden")}}function M(){if(p||!f)return;const e=window.innerHeight+window.scrollY,o=document.body.offsetHeight;e>=o*.8&&C()}window.addEventListener("scroll",M);const E=window.fetch;window.fetch=function(e,o){return e.startsWith("/api/articles")?new Promise(t=>{const r=new URL(e,window.location.origin),l=parseInt(r.searchParams.get("limit")||"6"),n=parseInt(r.searchParams.get("offset")||"0");setTimeout(()=>{if(n>18){t(new Response(JSON.stringify({articles:[]}),{status:200,headers:{"Content-Type":"application/json"}}));return}const s=Array.from({length:l},(u,d)=>({id:`mock-${n+d}`,titulo:`Artículo de ejemplo #${n+d+1}`,slug:`articulo-ejemplo-${n+d+1}`,extracto:"Este es un extracto de ejemplo generado para simular la carga infinita de artículos en la página principal.",imagen_principal:`https://picsum.photos/seed/${n+d}/800/450`,created_at:new Date(Date.now()-(n+d)*36e5).toISOString(),destacado:Math.random()>.8,trending:Math.random()>.7,viral:Math.random()>.8,article_categories:[{categories:{id:"cat-1",nombre:"Tecnología",slug:"tecnologia"}},{categories:{id:"cat-2",nombre:"Economía",slug:"economia"}}]}));t(new Response(JSON.stringify({articles:s}),{status:200,headers:{"Content-Type":"application/json"}}))},800)}):E.apply(this,arguments)};
