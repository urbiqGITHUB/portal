/* Counts are read from the same local catalogs as the destination panels.
 * No persistence, uploads, external dependencies or additional source content. */
(()=>{'use strict';
const target=document.getElementById('overviewDocCount');if(target&&typeof DOCS!=='undefined')target.textContent=String(DOCS.length);
const root=document.getElementById('overview'),guide=root.querySelector('.overview-guide');if(guide)root.querySelector('.overview-intro').append(guide);
const next=root.querySelector('.overview-next');if(next){const note=document.createElement('p');note.textContent='K ověření zůstává P09, kapacity sítí a rozpory podkladů; podrobnosti uvádí Rešerše a vazby.';root.querySelector('.overview-evidence article:last-child').append(note);next.remove();}
})();
