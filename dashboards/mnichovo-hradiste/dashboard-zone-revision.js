/* Versioned working partition replaces only the derived parcel-zone layer. Sources remain unchanged. */
(()=>{'use strict';const r=JZM_ZONE_REVISION,l=JZM_NEW_LAYERS.find(l=>l.id==='parcel_zones');l.geojson=r.geojson;l.feature_count=r.geojson.features.length;l.description='S003 / 6 × parcely ČÚZK × S005 · úplná pracovní bilance včetně komunikací';window.JZM_ZONE_CHECK=r.check;})();
