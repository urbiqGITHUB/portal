/* S036 block-area diagnostics. Local evidence only; never a verified HPP claim. */
(()=>{'use strict';
const attach=StudyModels.attach,el=(tag,text)=>{const e=document.createElement(tag);if(text!==undefined)e.textContent=text;return e;},fmt=v=>Number(v).toLocaleString('cs-CZ',{maximumFractionDigits:1});
StudyModels.attach=function(s,card){attach(s,card);const p=JZM_STUDY_MODELS.scenarios[s.id];if(!p?.block_balances)return;
 const d=el('details');d.className='model-block-checks';d.append(el('summary','Kontrola ploch po blocích · rozdíly a meze modelu'));
 d.append(el('p','Celý model, včetně předpokladů. Plocha půdorysu × modelové NP není ověřená HPP. Zejména u skupin C2/C3 a C4/C5 je rozdíl významný: chybí skutečné půdorysy podlaží a výšky spojovacích částí. Geometrie nebyla upravena podle tabulkových součtů.'));
 d.append(el('p','Součet řádků PP: '+fmt(p.block_balances.sum_rows_PP_m2)+' m²; vytištěný součet: '+fmt(p.block_balances.source_total_PP_m2)+' m². Rozdíl 2 m² je zachován. V bloku F nebyla vymyšlena budova pouze podle údaje P 2+1.'));
 const t=el('table');t.id='blockChecks-'+s.id;const h=t.createTHead().insertRow();['Blok / skupina','Půdorys GIS m²','Půdorys × NP m² · odhad','PP m² · zdroj','Rozdíl m² · diagnostický','Zdroj'].forEach(x=>h.append(el('th',x)));const b=t.createTBody();
 for(const r of p.block_balances.comparison){const tr=b.insertRow();[r.block,r.footprint_m2,r.model_footprint_times_np_m2,r.source_PP_m2,r.delta_model_minus_PP_m2].forEach(v=>{const td=el('td',typeof v==='number'?fmt(v):v);if(typeof v==='number')td.dataset.sortValue=v;tr.append(td);});const td=el('td'),a=el('button','S036 / 6 ↗');a.className='doc-source-link';a.onclick=()=>DashboardUI.openSource('S036',6);td.append(a);tr.append(td);}
 d.append(t);card.append(d);TableHeaders.enhance(t);
};
})();
