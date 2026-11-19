/* Map extension. Local geometry is trusted build output; all labels use textContent.
 * Only remote requests: public ČÚZK ortho tiles, lazily when the map is visited.
 * No geolocation, analytics, storage or transmission of source documents.
 * Map data: window.JZM_MAP_DATA; evidence in map-job.json; original files in corpus.
 */
(()=>{'use strict';
const D=window.JZM_MAP_DATA,el=id=>document.getElementById(id),make=(tag,text,cls)=>{const e=document.createElement(tag);if(text!==undefined)e.textContent=text;if(cls)e.className=cls;return e;};
const base=D.packagePath;let map,live,fallback,sourceOverlay;const vectors=new Map(),featureLayers=new Map(),selected=new Set(['study_boundary','parcel_ownership']);let loaded=0,failed=0,activeSource=null,initialized=false;
const labels={cad_exported:'CAD převeden',not_georeferenced:'Zatím neumístěno',partial:'Vybraná strana',selected_map_exported:'Vybraný list převeden',cad_unprocessed:'DWG nezpracován',not_suitable:'Šikmá fotografie',registration_unresolved:'Umístění neověřeno'};
function source(sid,page){if(innerWidth<1100)toggleSidebar(false);openDoc(sid,page);}
function popup(f){if(['S005','S006'].includes(f.properties.source_id))return CADPilot.popup(f);if(f.properties.native_parcel_id)return LayerWorkspace.parcelPopup(f);const p=f.properties,c=make('div',undefined,'map-popup');c.append(make('h3',p.name),make('span',p.evidence_status==='PROPOSED'?'SCHEMATICKÝ OBRYS':p.evidence_status==='EXPLICIT'?'SOUŘADNICE ZE ZDROJE':'ODVOZENÁ GEOMETRIE','tag'));
 const list=make('dl');function row(k,v){list.append(make('dt',k),make('dd',String(v)));}
 if(p.source_area_ha!==undefined){row('Plocha v zadání',p.source_area_ha.toLocaleString('cs-CZ')+' ha');row('Podíl města ve zdroji',p.source_city_share_percent+' %');}
 if(p.point_number){row('Bod',p.point_number);row('S-JTSK Y',p.source_Y.toLocaleString('cs-CZ',{minimumFractionDigits:2}));row('S-JTSK X',p.source_X.toLocaleString('cs-CZ',{minimumFractionDigits:2}));}
 if(p.source_floor_count!==undefined)row(p.source_floor_count!=null&&p.model_floor_basis==='PROPOSED'?'NP · interpretace':'NP ve zdroji',p.source_floor_count??'Nedoloženo')+(p.assumed_floor_count?row('NP model · předpoklad',p.assumed_floor_count):'');
 if(p.class_id)row('Kategorie',p.source_legend_label||p.class_id);
 if(p.source_revision)row('Revize zdroje',p.source_revision);
 c.append(list,make('p',p.note),make('div',p.source_id+' · strana '+p.source_page,'source-id'));
 const b=make('button','PDF a přepis zdroje ↗');b.addEventListener('click',()=>source(p.source_id,p.source_page));c.append(b);return c;
}

const appearances=new Map();
function appearanceStyle(l,f){
 const p=f.properties,point=f.geometry.type==='Point';
 const base=l.id==='parcel_ownership'?LayerWorkspace.ownershipStyle(f):point?{color:'#163c59',weight:1.5,fillColor:l.color,fillOpacity:1}:{color:p.color||l.color,fillColor:p.color||l.color,weight:['study_boundary','water_route'].includes(l.id)?3:2,fillOpacity:l.id.startsWith('cad_s006_')?.16:l.id==='brief_parts'?.16:['source_ownership','proposal_massing','proposal_2021','proposal_brezovy_v1','proposal_brezovy_v2','proposal_skalni_v1','proposal_skalni_v2','proposal_cestky_2023','proposal_cerny_2010'].includes(l.id)?.4:0,dashArray:l.id==='brief_parts'?'6 4':null};
 const a=appearances.get(l.id)||{opacity:l.default_opacity??1,color:null};
 const category=String(p.class_id??p.category??p.function??p.source_category_id??(l.id==='parcel_ownership'?'unverified':''));if(a.hiddenCategories?.includes(category)||(l.id==='parcel_ownership'&&!OwnershipSelection.matches(f)))return {...base,opacity:0,fillOpacity:0};if(l.id.startsWith('up_')||l.id==='parcel_zones')base.fillOpacity=1;const categoryColor=a.categoryColors?.[category];if(categoryColor){base.color=categoryColor;base.fillColor=categoryColor;}
 if(base.fillOpacity>0)base.fillOpacity=1;
 return {...base,hatch:l.up_status==='navrhova'?'grid':l.up_status==='uzemni_rezerva'?'diagonal':null,opacity:a.opacity,fillOpacity:(base.fillOpacity??0)*a.opacity,...(!categoryColor&&a.color?{color:a.color,fillColor:a.color}:{})};
}
window.MapLayers={
 setLayers(ids,on){for(const id of ids)if(D.layers.some(l=>l.id===id)){on?selected.add(id):selected.delete(id);}refresh();},
 setAppearance(id,a){const l=D.layers.find(l=>l.id===id);if(!l)return;const previous=appearances.get(id)||{opacity:1,color:null};const next={...previous};if(a.opacity!==undefined)next.opacity=Math.max(0,Math.min(1,Number(a.opacity)));if(a.color===null||/^#[0-9a-f]{6}$/i.test(a.color||''))next.color=a.color;if(a.categoryColors)next.categoryColors={...a.categoryColors};if(a.hiddenCategories)next.hiddenCategories=[...a.hiddenCategories];appearances.set(id,next);vectors.get(id)?.setStyle(f=>appearanceStyle(l,f));window.dispatchEvent(new Event('mapappearancechange'));},
 inspect(id){const l=D.layers.find(l=>l.id===id);return {selected:selected.has(id),appearance:appearances.get(id)||{opacity:1,color:null},actual:vectors.get(id)?.getLayers()[0]?.options,expected:l?appearanceStyle(l,l.geojson.features[0]):null};}
};

function updateStatus(){if(!initialized)return;const enabled=el('mapLive').checked;const current=enabled?[...map.getPane('tilePane').querySelectorAll('.leaflet-tile')]:[];const ok=current.filter(x=>x.complete&&x.naturalWidth>0).length;const bad=current.filter(x=>x.complete&&x.naturalWidth===0).length;
 const text=!enabled?'Místní ortofoto · bez živých požadavků':bad?'Některé živé dlaždice chybí · pod nimi je místní ortofoto':ok?'Živé ortofoto ČÚZK · načteno '+ok+' dlaždic':failed?'Živý podklad nedostupný · zobrazeno místní ortofoto':'Načítání živého podkladu · zatím místní ortofoto';
 el('mapTileStatus').textContent=text;el('mapTileStatus').parentElement.dataset.error=String(enabled&&(bad>0||(!ok&&failed>0)));
}
function updateSelectionCount(){const count=D.layers.reduce((sum,l)=>{if(!selected.has(l.id))return sum;const hidden=appearances.get(l.id)?.hiddenCategories||[];return sum+l.geojson.features.filter(f=>!hidden.includes(String(f.properties.class_id??f.properties.category??f.properties.function??f.properties.source_category_id??''))&&(l.id!=='parcel_ownership'||OwnershipSelection.matches(f))).length;},0);
 el('mapFeatureCount').textContent=count+' / '+D.layers.reduce((n,l)=>n+l.feature_count,0)+' prvků zapnuto';el('mapEmpty').hidden=count!==0||!!el('mapCadastre')?.checked||!!activeSource;el('mapExport').disabled=count===0;
}
window.addEventListener('mapappearancechange',updateSelectionCount);
function refresh(){D.layers.forEach(l=>{const v=vectors.get(l.id);if(selected.has(l.id)){if(map&&!map.hasLayer(v))v.addTo(map);}else if(map&&map.hasLayer(v))map.removeLayer(v);});updateSelectionCount();
 document.querySelectorAll('[data-map-layer]').forEach(e=>e.checked=selected.has(e.dataset.mapLayer));
 if(map)map.closePopup();window.dispatchEvent(new Event('maplayerschange'));
}
let sidebarResize;
function toggleSidebar(show){document.querySelector('.map-workspace').classList.toggle('panel-hidden',!show);el('mapTogglePanel').setAttribute('aria-expanded',String(show));if(map){const center=map.getCenter(),zoom=map.getZoom();clearTimeout(sidebarResize);sidebarResize=setTimeout(()=>{map.invalidateSize({pan:false});map.setView(center,zoom,{animate:false});},180);}}
function fit(){if(map){map.stop();map.closePopup();map.invalidateSize({pan:false});map.fitBounds(JZM_CADASTRE.focus_bounds,{padding:[12,12],animate:false});}}
// A hidden/booting workspace has no usable viewport: fitting it would select
// maximum zoom. Wait for the first visible layout, then keep the user's camera.
const firstLayoutObserver=new ResizeObserver(()=>{if(!initialized)requestAnimationFrame(init);});
firstLayoutObserver.observe(el('projectMap'));
const bootObserver=new MutationObserver(()=>{if(!initialized)requestAnimationFrame(init);});
bootObserver.observe(document.documentElement,{attributes:true,attributeFilter:['class']});
function init(){if(initialized){map.invalidateSize();updateStatus();return;}
 if(!el('map').classList.contains('active')||document.documentElement.classList.contains('workspace-booting')||!el('projectMap').clientWidth||!el('projectMap').clientHeight)return;
 if(!window.L){el('projectMap').append(make('p','Mapová knihovna se nenačetla. Zachovejte složku vendor/leaflet-1.9.4 vedle HTML.','map-lib-error'));el('mapTileStatus').textContent='Mapa není dostupná; GeoJSON a zdroje zůstávají v balíčku.';return;}
 const PatternCanvas=L.Canvas.extend({_fillStroke(ctx,layer){const o=layer.options;if(!o.hatch||!o.fill)return L.Canvas.prototype._fillStroke.call(this,ctx,layer);this._patterns??=new Map();const key=o.hatch+o.fillColor;let pattern=this._patterns.get(key);if(!pattern){const tile=document.createElement('canvas');tile.width=tile.height=12;const p=tile.getContext('2d');p.strokeStyle=o.fillColor;p.lineWidth=1.5;p.beginPath();if(o.hatch==='grid'){p.moveTo(0,.75);p.lineTo(12,.75);p.moveTo(.75,0);p.lineTo(.75,12);}else{p.moveTo(-3,3);p.lineTo(3,-3);p.moveTo(0,12);p.lineTo(12,0);p.moveTo(9,15);p.lineTo(15,9);}p.stroke();pattern=ctx.createPattern(tile,'repeat');this._patterns.set(key,pattern);}ctx.globalAlpha=o.fillOpacity;ctx.fillStyle=pattern;ctx.fill(o.fillRule||'evenodd');o.fill=false;L.Canvas.prototype._fillStroke.call(this,ctx,layer);o.fill=true;}});const patternRenderer=new PatternCanvas({padding:.3});
 map=L.map('projectMap' ,{preferCanvas:true,renderer:patternRenderer,zoomControl:true,minZoom:6,maxZoom:22,attributionControl:true});map.fitBounds(JZM_CADASTRE.focus_bounds,{padding:[12,12],animate:false});initialized=true;firstLayoutObserver.disconnect();bootObserver.disconnect();
 map.createPane('fallbackRaster');map.getPane('fallbackRaster').style.zIndex=150;
 map.createPane('cadDrawing');map.getPane('cadDrawing').style.zIndex=460;map.createPane('sourceRaster');map.getPane('sourceRaster').style.zIndex=350;
 fallback=L.imageOverlay(base+D.fallback.path,D.fallback.bounds,{pane:'fallbackRaster',opacity:1,interactive:false,attribution:'Referenční ortofoto © ČÚZK · místní kopie 12. 11. 2026'}).addTo(map);
 live=L.tileLayer('https://ags.cuzk.cz/arcgis1/rest/services/ORTOFOTO_WM/MapServer/tile/{z}/{y}/{x}',{maxZoom:22,maxNativeZoom:20,opacity:1,attribution:'Živé ortofoto © <a href="https://ags.cuzk.gov.cz/opendata/" target="_blank" rel="noopener">ČÚZK</a>',referrerPolicy:'no-referrer'});
 live.on('tileload',()=>{loaded++;updateStatus();}).on('tileerror',()=>{failed++;updateStatus();}).on('load',updateStatus);
 if(el('mapLive').checked)live.addTo(map);
 D.layers.forEach(l=>{const v=L.geoJSON(l.geojson,{pane:(['study_boundary','study_boundary_parcel'].includes(l.id)||l.id.startsWith('cad_s006_'))?'cadDrawing':'overlayPane',style:f=>appearanceStyle(l,f),pointToLayer:(f,latlng)=>L.circleMarker(latlng,{radius:5,color:'#163c59',weight:1.5,fillColor:l.color,fillOpacity:1}),onEachFeature:(f,layer)=>{layer.on('click',e=>window.DashboardUI?.identify(e.latlng));if(f.properties.part)layer.bindTooltip(f.properties.part,{permanent:true,direction:'center',className:'map-part-label'});else if(f.geometry.type==='Point')layer.bindTooltip('Bod '+f.properties.point_number);featureLayers.set(l.id+'::'+f.id,{layer,group:l.id});}});vectors.set(l.id,v);});
 L.control.scale({imperial:false,position:'bottomleft',maxWidth:150}).addTo(map);refresh();fit();map.on('moveend zoomend',updateStatus);map.on('click',e=>window.DashboardUI?.identify(e.latlng));setTimeout(()=>{if(el('mapLive').checked&&!loaded){el('mapTileStatus').textContent='Živý podklad zatím nedostupný · místní ortofoto zůstává zobrazené';el('mapTileStatus').parentElement.dataset.error='true';}},12000);
}
D.layers.forEach(l=>{const label=make('div',undefined,'map-layer'),input=make('input');input.type='checkbox';input.checked=selected.has(l.id);input.dataset.mapLayer=l.id;input.setAttribute('aria-label',l.label);input.addEventListener('change',()=>{input.checked?selected.add(l.id):selected.delete(l.id);refresh();});const text=make('span');text.append(make('b',l.label),make('small',JZM_LAYER_WORKSPACE.provenance[l.id]?.short||l.description));const sw=make('span',undefined,'map-swatch'+(l.id==='water_points'?' point':l.id==='water_route'?' line':''));sw.style.borderColor=l.color;if(l.id==='water_points')sw.style.background=l.color;sw.setAttribute('aria-hidden','true');label.append(input,text,sw);const info=make('button','i','layer-info-button');info.type='button';info.setAttribute('aria-label','Informace o vrstvě '+l.label);info.dataset.layerInfo=l.id;info.addEventListener('click',()=>LayerWorkspace.info(l));label.append(info);if(l.id==='parcel_ownership'){const table=make('button','Tabulka parcel','layer-table-button');table.id='parcelTableOpen';table.addEventListener('click',()=>LayerWorkspace.openTable());label.append(table);}el('mapLayerList').append(label);
 l.geojson.features.forEach(f=>{const o=make('option',f.properties.name);o.value=l.id+'::'+f.id;el('mapFeatureSelect').append(o);});});
D.rasters.forEach(r=>{const o=make('option',r.label);o.value=r.id;el('mapSource').append(o);});
el('mapFeatureSelect').addEventListener('change',e=>{const item=featureLayers.get(e.target.value);if(!item)return;selected.add(item.group);refresh();if(item.layer.getBounds)map.fitBounds(item.layer.getBounds().pad(.3),{maxZoom:18});else map.setView(item.layer.getLatLng(),19);if(innerWidth<1100)toggleSidebar(false);window.DashboardUI?.showFeature(item.group,item.layer.feature);});
el('mapFit').addEventListener('click',()=>{fit();if(innerWidth<1100)toggleSidebar(false);});
el('mapTogglePanel').addEventListener('click',()=>toggleSidebar(el('mapTogglePanel').getAttribute('aria-expanded')!=='true'));
el('mapAll').addEventListener('click',()=>{D.layers.forEach(l=>selected.add(l.id));refresh();});el('mapNone').addEventListener('click',()=>{selected.clear();refresh();});
el('mapExport').addEventListener('click',()=>{const features=D.layers.filter(l=>selected.has(l.id)).flatMap(l=>l.geojson.features);const data={type:'FeatureCollection',name:'Jihozápadní město · vybrané zdrojové vrstvy',features};const url=URL.createObjectURL(new Blob([JSON.stringify(data,null,2)+'\n'],{type:'application/geo+json'}));const a=make('a');a.href=url;a.download='261113_jihozapadni_mesto_vybrane_vrstvy.geojson';a.click();setTimeout(()=>URL.revokeObjectURL(url),1000);});
el('mapLive').addEventListener('change',e=>{if(!map)return;e.target.checked?live.addTo(map):map.removeLayer(live);updateStatus();});
el('mapBasemapOpacity').addEventListener('input',e=>{const n=Number(e.target.value);el('mapBasemapOutput').textContent=n+' %';if(map){fallback.setOpacity(n/100);live.setOpacity(n/100);}});
el('mapSource').addEventListener('change',e=>{if(!map)return;if(sourceOverlay)map.removeLayer(sourceOverlay);activeSource=D.rasters.find(r=>r.id===e.target.value)||null;sourceOverlay=null;if(activeSource){const raster=activeSource.id==='S003_p10_source'&&el('mapOwnershipColors').checked?window.JZM_CADASTRE.colors:activeSource;sourceOverlay=L.imageOverlay(base+raster.path,raster.bounds,{pane:'sourceRaster',opacity:Number(el('mapSourceOpacity').value)/100,interactive:false}).addTo(map);}el('mapOpenSource').disabled=!activeSource;});
el('mapSourceOpacity').addEventListener('input',e=>{const n=Number(e.target.value);el('mapSourceOutput').textContent=n+' %';if(sourceOverlay)sourceOverlay.setOpacity(n/100);});
el('mapOpenSource').addEventListener('click',()=>{if(activeSource)source(activeSource.source_id,activeSource.page);});
document.querySelectorAll('[data-map-panel]').forEach(b=>b.addEventListener('click',()=>{document.querySelectorAll('[data-map-panel]').forEach(x=>x.setAttribute('aria-pressed',String(x===b)));document.querySelectorAll('.map-panel').forEach(x=>x.hidden=x.id!=='mapPanel-'+b.dataset.mapPanel);}));
document.querySelectorAll('[data-map-source]').forEach(b=>b.addEventListener('click',()=>source(b.dataset.mapSource,Number(b.dataset.page))));
function coverage(){const q=el('mapCoverageSearch').value.normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLowerCase();const rows=D.coverage.filter(d=>[d.source_id,d.title,d.filename,labels[d.status]].join(' ').normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLowerCase().includes(q));const body=el('mapCoverageBody');body.replaceChildren();rows.forEach(d=>{const tr=make('tr'),td=make('td'),b=make('button',d.source_id+' ↗');b.addEventListener('click',()=>{el('mapCoverageDialog').close();source(d.source_id,d.processed_pages[0]||1);});td.append(b,make('small',d.filename));const status=make('td',labels[d.status]);const note=make('td');note.append(make('div',d.processed_pages.length?'Převedené strany: '+d.processed_pages.join(', '):'Bez exportované geografické geometrie'),make('small',d.note));tr.append(td,status,note);body.append(tr);});el('mapCoverageCount').textContent=rows.length+' / 93';}
el('mapCoverageOpen').addEventListener('click',()=>{coverage();el('mapCoverageDialog').showModal();});el('mapCoverageClose').addEventListener('click',()=>el('mapCoverageDialog').close());el('mapCoverageSearch').addEventListener('input',coverage);
el('mapCoverageDialog').addEventListener('keydown',e=>{if(e.key==='Escape'){e.preventDefault();e.stopPropagation();el('mapCoverageDialog').close();}});
window.addEventListener('workspaceview',e=>{if(e.detail==='map')requestAnimationFrame(init);});if(document.getElementById('map').classList.contains('active'))requestAnimationFrame(init);
if(innerWidth<1100)toggleSidebar(false);
// Navigation from the document inventory opens the exact registered source panel.
window.ProjectMapOpenSource=(sourceId,page)=>{
 showView('map');
 requestAnimationFrame(()=>{
  init();if(!initialized)return;
  D.layers.filter(l=>l.source_id===sourceId&&l.page===page).forEach(l=>selected.add(l.id));if(page===8){selected.delete('source_ownership');selected.delete('proposal_2021');}if(sourceId==='S040'){selected.delete('proposal_massing');selected.delete('source_ownership');}if(sourceId==='S003'&&page===10){selected.delete('parcel_ownership');selected.delete('proposal_massing');selected.delete('source_ownership');el('mapCadastre').checked=true;el('mapCadastre').dispatchEvent(new Event('change'));}refresh();
  const raster=D.rasters.find(r=>r.source_id===sourceId&&r.page===page);
  if(!raster)return;
  el('mapSource').value=raster.id;el('mapSource').dispatchEvent(new Event('change'));
  document.querySelector('[data-map-panel="background"]').click();
  map.fitBounds(raster.bounds,{padding:[20,20],animate:false});
 });
};
el('map3DOpen').addEventListener('click',()=>showView('scene'));
window.ProjectMapQA={getMap:()=>map,getPopup:popup,getVectors:()=>vectors,setLayer:(id,on)=>{on?selected.add(id):selected.delete(id);refresh();},focusFeature:id=>{const item=featureLayers.get(id)||[...featureLayers.values()].find(x=>x.layer.feature.id===id);if(!item)return;selected.add(item.group);refresh();if(item.layer.getBounds)map.fitBounds(item.layer.getBounds(),{maxZoom:19});else map.setView(item.layer.getLatLng(),19);window.DashboardUI?.showFeature(item.group,item.layer.feature);},inspect:()=>({initialized,selected:[...selected],featureCount:D.layers.filter(l=>selected.has(l.id)).reduce((n,l)=>n+l.feature_count,0),loaded,failed,source:activeSource?.id||null,center:map?map.getCenter():null,zoom:map?map.getZoom():null,vectorFeatures:featureLayers.size,basemapOpacity:fallback?.options.opacity,sourceOpacity:sourceOverlay?.options.opacity,sourceImageLoaded:!!sourceOverlay?.getElement()?.naturalWidth,fallbackLoaded:!!fallback?.getElement()?.naturalWidth})};
})();
