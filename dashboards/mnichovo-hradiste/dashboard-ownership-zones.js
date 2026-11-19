/* Audited local intersections; UI selection does not modify historical source claims.
 * No network requests. Zone selection persists only in this tab's session. */
(()=>{'use strict';
const data=JZM_OWNERSHIP_ZONE_VIEW,layer=JZM_MAP_DATA.layers.find(l=>l.id==='parcel_ownership');
layer.geojson=data.geojson;layer.categories=data.categories;layer.feature_count=data.geojson.features.length;
JZM_LAYER_WORKSPACE.layer=layer;window.JZM_WORKING_PARCELS=data.geojson.features;
JZM_ZONE_REVISION.balances.parcel_ownership=data.balances;
const provenance=JZM_LAYER_WORKSPACE.provenance.parcel_ownership;
provenance.steps=provenance.steps.filter(s=>!s.startsWith('Česká republika'));
provenance.steps.push('Česká republika a LV 2460 jsou sjednoceny podle upřesnění Kateřiny Kováříkové z 19. 11. 2026. Nejde o nově ověřený údaj ČÚZK. Původní legenda i původní přiřazení jsou uchována.',
 '156 částí parcel bylo geometricky protnuto s pracovními Zónami v EPSG:5514. Každá část leží právě v jedné pracovní Zóně; hranice parcel ani S005 se nemění. Filtr ovlivňuje mapu, soupis a bilance vlastnictví.',
 'Kontrola ČÚZK: parcela 2446/16 má LV 2478, ale leží mimo aktuální S005, proto není doplněna do mapy ani bilancí. Další kontrolu parcely 1992/365 zastavila CAPTCHA. Zbývajících 114 nezařazených částí nemá ověřené LV; přímé odkazy jsou v detailu a soupisu parcel.');
const zoneNames={A:'Zóna A',B:'Zóna B',C:'Zóna C',D:'Zóna D',roads:'Nezařazeno – komunikace'},key=ProjectConfig.storageKey("urbiq-mh-ownership-zones-v1");
let selected=new Set(Object.keys(zoneNames));try{const v=JSON.parse(sessionStorage.getItem(key));if(Array.isArray(v))selected=new Set(v.filter(k=>k in zoneNames));}catch{}
function matches(f){return selected.has(f.properties.working_zone_id);}
function visible(f){return matches(f)&&!window.MapLayers?.inspect(layer.id).appearance.hiddenCategories?.includes(f.properties.class_id);}
function setZones(ids){selected=new Set(ids.filter(k=>k in zoneNames));try{sessionStorage.setItem(key,JSON.stringify([...selected]));}catch{}window.MapLayers?.setAppearance(layer.id,{});window.dispatchEvent(new Event('ownershipfilterchange'));}
function metrics(){const categories={};for(const f of data.geojson.features){if(!matches(f))continue;const p=f.properties,c=categories[p.class_id]||(categories[p.class_id]={area_m2:0,count:0,length_m:0,candidate_area_m2:0});c.area_m2+=p.derived_area_m2;c.count++;if(p.display_candidate)c.candidate_area_m2+=p.derived_area_m2;}return {categories,category_overlap_m2:0};}
const label=p=>p.display_category||layer.categories.find(c=>c.id===p.class_id)?.label||'Nezařazeno / neověřeno';
const status=p=>p.current_legal_lv?'LV ověřeno v ČÚZK':p.display_candidate?'Kandidát k revizi':p.assignment_status==='assigned'?'Přiřazeno z rastru':'Neověřeno';
window.OwnershipSelection={matches,visible,setZones,metrics,label,status,zoneNames,inspect:()=>({zones:[...selected],count:data.geojson.features.filter(visible).length})};
})();
