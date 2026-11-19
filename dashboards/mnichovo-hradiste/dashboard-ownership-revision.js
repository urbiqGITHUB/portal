/* Canonical category IDs and scoped geometry are shared by map, registry and balances. */
(()=>{'use strict';const r=JZM_OWNERSHIP_REVISION,l=JZM_MAP_DATA.layers.find(l=>l.id==='parcel_ownership');
l.geojson=r.geojson;l.feature_count=r.geojson.features.length;l.categories=r.categories;l.description='S003 / 10 × parcely ČÚZK × hranice S005 · historická interpretace';
JZM_LAYER_WORKSPACE.layer=l;window.JZM_WORKING_PARCELS=r.geojson.features;
JZM_ZONE_REVISION.balances.parcel_ownership=r.balances;
JZM_LAYER_WORKSPACE.provenance.parcel_ownership={short:l.description,steps:[
 'Původní legenda S003 / 10 má 13 kategorií; všechny jsou zachovány i bez dostatečného parcelního přiřazení.',
 'Nativní parcely ČÚZK ze snímku 16. 11. 2026 jsou oříznuty nezměněnou hranicí S005. Mapa, soupis i bilance používají stejné části parcel.',
 'Barvy se znovu vzorkují ve vnitřku oříznuté parcely (odstup 2 m). Přiřazení vyžaduje alespoň 90 % dominantní barvy, 60 % barevného pokrytí a kontrolu posunem o jeden pixel.',
 'Kandidáti jsou uvedeni samostatným stavem a přerušovaným obrysem. Jejich bilancovaná plocha je pracovní možnost, nikoli potvrzené vlastnictví.',
 'LV 115: parcela 1993/1, dominance 96,27 %, barevné pokrytí 56,24 %; ponecháno k revizi. LV 623 zůstává k revizi kvůli smíšeným barvám a citlivosti umístění.',
 'Česká republika je zachována v legendě. Žádnou parcelu nelze podle stávajících barevných dokladů dostatečně přiřadit této kategorii. Drobný státní pás vyžaduje ověření; není vykázán jako nulové skutečné vlastnictví.'
],limits:'Jde o interpretaci historického zadání. Současní vlastníci ani současné LV nejsou ověřeni. Výměra KN patří celé parcele; bilance používá výhradně GIS výměru části v S005. Neznámé části zůstávají nezařazené.',links:[]};
})();
