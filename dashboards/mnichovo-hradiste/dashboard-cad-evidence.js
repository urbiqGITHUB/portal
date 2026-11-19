/* Local source review and grouped map controls. No uploads or persistent storage.
 * UI color/opacity never changes source attributes or exported geometry. */
(()=>{'use strict';
const $=id=>document.getElementById(id),make=(tag,text,cls)=>{const e=document.createElement(tag);if(text!==undefined)e.textContent=text;if(cls)e.className=cls;return e;},norm=s=>String(s??'').normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLowerCase();
const D=JZM_MAP_DATA,S=JZM_S006_SEMANTICS,review=new Map(S.layers.map(l=>[l.id,l])),proof=new Map(S.evidence.map(e=>[e.id,e]));
const groups=[],leaves=new Map(),groupOpacity=new Map(),leafOpacity=new Map(),colors=new Map();
const link=(label,href)=>{const a=make('a',label);a.href=href;a.target='_blank';a.rel='noopener';return a;};
function evidencePanel(r){const box=make('section',undefined,'semantic-evidence');box.append(make('h3','Co víme a co zbývá ověřit'),make('p',r.semantic_basis),make('strong','Provozní stav: neověřen.'));
 const ul=make('ul');r.verification_needed.forEach(x=>ul.append(make('li',x)));box.append(ul,make('h3','Související doklady'));
 for(const id of r.evidence_ids){const e=proof.get(id),a=make('article');a.append(make('strong',e.source_id+' · '+e.locator),make('p',e.finding));if(!e.external){const b=make('button','Otevřít '+e.source_id+' v pracovně');b.addEventListener('click',()=>{document.querySelectorAll('dialog[open]').forEach(d=>d.close());openDoc(e.source_id,e.page||1);});a.append(b);}a.append(link('Původní dokument ↗',e.original+(e.page?'#page='+e.page:'')));if(e.md)a.append(link('Přepis MD ↗',e.md));if(e.public_url)a.append(link('Veřejný zdroj ↗',e.public_url));if(e.image){const details=make('details');details.append(make('summary','Zobrazit výřez dokladu'));const img=make('img');img.src=e.image;img.alt=e.locator;img.loading='lazy';details.append(img);a.append(details);}box.append(a);}return box;
}
const originalInfo=LayerWorkspace.info;LayerWorkspace.info=l=>{originalInfo(l);const r=review.get(l.id);if(r)$('layerInfoBody').append(evidencePanel(r));};
function popup(f){const p=f.properties,d=make('div'),r=review.get(p.layer_id)||S.layers.find(l=>l.cad_layer===p.cad_layer);
 d.append(make('h3',r?.label||p.name),make('p',p.source_id+' · CAD '+(p.cad_handle||p.cad_handles?.join(', '))),make('small',p.cad_layer||'a_hranice_řešeného_území'));
 if(r){d.append(make('p','Výklad názvu · stav sítě neověřen'),make('p',r.verification_needed.find(x=>x.includes('přípony')||x.includes('segmentu')||x.includes('legendou'))||r.verification_needed[0]));const b=make('button','Doklady a otevřené otázky');b.addEventListener('click',()=>LayerWorkspace.info(D.layers.find(l=>l.id===r.id)));d.append(b);}else d.append(make('p',p.note));
 if(p.derived_area_m2!=null)d.append(make('p','Plocha GIS: '+Math.round(p.derived_area_m2).toLocaleString('cs-CZ')+' m²'));
 if(p.derived_length_m!=null)d.append(make('p','Délka kresby GIS: '+p.derived_length_m.toLocaleString('cs-CZ',{maximumFractionDigits:1})+' m'));
 const source=make('button','Otevřít '+p.source_id+' · náhled DWG');source.onclick=()=>DashboardUI.openSource(p.source_id,1);d.append(source);d.append(link('Původní DWG ↓','sources/'+p.source_id+'.dwg'),make('br'),link('Převedený DXF ↓','cad_data/261117_v01/'+p.source_id+'/dxf/'+p.source_id+'.dxf'));return d;
}window.CADPilot={popup};
})();
