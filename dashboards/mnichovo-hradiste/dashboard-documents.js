/* Document workspace composition. Existing nodes are moved, retaining filter state and events. */
(()=>{'use strict';
const $=id=>document.getElementById(id),node=(tag,cls,text)=>{const e=document.createElement(tag);if(cls)e.className=cls;if(text)e.textContent=text;return e;};
const root=$('documents'),bar=$('documentFilters'),registry=root.querySelector('.registry');
const anchor=document.createComment('Document filters: header in folder/timeline mode, sidebar in PDF mode');
bar.before(anchor);
const row=node('div','document-filter-fields'),projects=bar.querySelector('details'),projectRow=node('div','document-project-row');
const category=$('documentCategory'),relevance=$('documentRelevance');
category.setAttribute('aria-label','Typologie dokumentu');relevance.setAttribute('aria-label','Relevance dokumentu');
bar.append(row);
row.append(category,relevance,$('catalogSearch'),$('catalogGroup'),$('catalogMapFilter'),$('statusFilter'),$('docSearch'),$('documentFiltersReset'));
$('catalogSearch').setAttribute('aria-label','Název, cesta, zpracovatel, rok nebo mapa');
$('docSearch').setAttribute('aria-label','Hledat v celém přepisu');$('docSearch').placeholder='Hledat v celém přepisu…';
$('catalogGroup').setAttribute('aria-label','Skupina podkladů');$('catalogMapFilter').setAttribute('aria-label','Mapový obsah dokumentů');$('statusFilter').setAttribute('aria-label','Stav převodu');
$('documentFiltersReset').textContent='Zrušit filtry';
projectRow.append(projects);const status=$('documentPreferenceStatus');status.className='document-filter-note';
bar.replaceChildren(row,projectRow,status);
// Legacy group control remains internal to the registry controller; the visible selector is shared.
$('groupFilter').hidden=true;registry.querySelectorAll(':scope > label').forEach(e=>e.remove());
root.querySelector('.catalog-toolbar').hidden=true;
const modes=root.querySelector('.mode-switch');
const labels={table:'Složky',reader:'Zobrazení v PDF',timeline:'Časová osa'};
modes.querySelectorAll('button').forEach(b=>b.textContent=labels[b.dataset.documentMode]);
const count=$('catalogCount');count.classList.add('document-heading-count');root.querySelector('.section-bar h2').after(count);
$('catalogAllMaps').textContent='Přehled map';
const actions=node('div','document-catalog-actions');
actions.append(root.querySelector('.document-tree-controls'),root.querySelector('.catalog-summary'));
$('documentCatalog').prepend(actions);
// Metadata remains the same sortable/filterable table, in a keyboard-accessible modal.
const modal=node('dialog','document-metadata-dialog');modal.id='documentMetadataDialog';modal.setAttribute('aria-labelledby','documentMetadataTitle');
const header=node('div','document-metadata-heading'),title=node('h2',null,'Metadata dokumentů');title.id='documentMetadataTitle';
const close=node('button','document-metadata-close','×');close.type='button';close.setAttribute('aria-label','Zavřít metadata');close.onclick=()=>modal.close();header.append(title,close);
const note=node('p','document-metadata-note','Tabulka respektuje aktuální výběr dokumentů. V záhlaví můžete filtrovat a řadit jednotlivé sloupce.');
const metadata=root.querySelector('.catalog-metadata-details');modal.append(header,note,metadata.querySelector('.catalog-table-wrap'));metadata.remove();document.body.append(modal);
const open=node('button','document-metadata-open');open.type='button';open.id='documentMetadataOpen';open.title='Metadata dokumentů · tabulka';open.setAttribute('aria-label','Metadata dokumentů');open.setAttribute('aria-haspopup','dialog');
open.innerHTML='<svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.6"><rect x="3" y="4" width="18" height="16" rx="2"/><path d="M3 10h18M9 4v16M15 10v10M3 15h18"/></svg>';
modes.after(open);open.onclick=()=>modal.showModal();modal.addEventListener('close',()=>open.focus({preventScroll:true}));
const norm=s=>String(s??'').normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLowerCase();
function matchesTextAndStatus(d){const src=byId.get(d.id),q=norm($('docSearch').value.trim()),status=$('statusFilter').value;return !!src&&(!status||(status==='review'?src.reviewCount>0:src.status===status))&&(!q||norm(src.title+' '+src.source+' '+src.markdown).includes(q));}
function refresh(){DocumentCatalogQA.render();renderRegistry();}
function layout(){const reader=root.dataset.documentMode==='reader';if(reader)registry.prepend(bar);else anchor.after(bar);$('toggleRegistry').textContent=root.querySelector('.document-layout').classList.contains('no-registry')?'Filtry a seznam':'Skrýt filtry a seznam';}
const previousMode=setDocumentMode;window.setDocumentMode=function(...args){previousMode(...args);layout();};
['catalogSearch','catalogGroup','catalogMapFilter','docSearch','statusFilter'].forEach(id=>$(id).addEventListener(id.includes('Search')?'input':'change',()=>{if(id==='catalogGroup')$('groupFilter').value='';refresh();}));
$('documentFiltersReset').addEventListener('click',refresh);
document.addEventListener('tablefilterchange',e=>{if(e.detail==='catalogTable')renderRegistry();});
window.addEventListener('workspaceview',()=>{if(root.classList.contains('active'))layout();});
window.DocumentWorkspaceUI={matchesTextAndStatus,refresh};
layout();refresh();
})();
