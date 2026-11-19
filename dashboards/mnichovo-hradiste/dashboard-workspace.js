/* Local document controller. Map extension uses public tiles; document content stays local.
 * Document HTML is immutable build output, sanitized by build_workspace.py.
 * Native PDF frames point only to hash-verified local files in sources/.
 */
'use strict';
const DATA=JSON.parse(document.getElementById('corpus').textContent);
const DOCS=DATA.documents, byId=new Map(DOCS.map(d=>[d.id,d]));
const $=id=>document.getElementById(id);
const state={doc:ProjectConfig.value.project.defaultDocument.id,page:ProjectConfig.value.project.defaultDocument.page,view:'documents',documentMode:'table',image:null};
const statusLabels={complete:'Dokončeno',complete_with_review:'Dokončeno s revizí',partial:'Částečný přepis',failed:'Nepřevedeno',unprocessed:'MD nezpracován'};
const norm=s=>String(s||'').normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLowerCase();
const node=(tag,text,cls)=>{const e=document.createElement(tag);if(text!==undefined)e.textContent=text;if(cls)e.className=cls;return e;};
const button=(label,fn,cls)=>{const e=node('button',label,cls);e.addEventListener('click',fn);return e;};
const tell=text=>{$('liveStatus').textContent=text;};
const localURL=p=>(p||'').split('/').map(encodeURIComponent).join('/');
const safeLocal=p=>typeof p==='string'&&!p.includes('..')&&/^(sources|documents|assets|previews)\/[A-Za-z0-9_./ -]+$/.test(p);

// Every citation targets a physical source page present in the conversion.
const CLAIMS=[
 {id:'R01',title:'Výchozí rozsah a způsob výběru',fact:'Výzva uvádí přibližně 19 ha, strop celé zakázky 2,7 mil. Kč bez DPH a váhu 70 % pro kvalitu týmu, přístup a návrh ekonomického modelu; 30 % pro cenu.',quote:'Kvalita zpracovatelského týmu, profesní přístup a návrh ekonomického modelu – 70 %',refs:[['S001',1],['S001',2]],meaning:'Ekonomické posouzení má doložené místo v hodnocení. Samotná aplikace ale není automaticky samostatně objednanou službou.',output:'Přehledný návrh mechanismu a metodiky; cena urbiq až podle sjednaného rozsahu.'},
 {id:'R02',title:'Zóna B jako iniciační etapa',fact:'Zadání popisuje město jako 100% vlastníka pozemků Zóny B a očekává 3–6 investičních celků připravených do podoby zadání pro developery.',quote:'očekává identifikaci 3-6 investičních celků, které budou připraveny do podoby zadání pro developery.',refs:[['S003',11]],meaning:'Dává smysl rozdělit kapacity, infrastrukturu a ekonomické vstupy po investičních celcích. Vlastnictví je tvrzení zadání, nikoli nová kontrola katastru.',output:'Karty investičních celků: kapacita, náklady, vazby, časování a potřebné dohody.'},
 {id:'R03',title:'Objektové bilance a ekonomika',fact:'Smlouva požaduje bilance a kapacity po jednotlivých objektech a ekonomické zhodnocení stavebních nákladů, prodejních cen, pravidelných příjmů města a infrastruktury.',quote:'bilance a kapacity území v měřítku jednotlivých objektů;',refs:[['S002',2],['S002',3]],meaning:'Prostorový návrh a ekonomika potřebují společné identifikátory objektů. Konkrétní sazby se musí získat a doložit samostatně.',output:'Objektový registr, prostorové bilance a ekonomický model s evidovanými vstupy.'},
 {id:'R04',title:'Etapy a podmíněné investice',fact:'Zadání požaduje logické majetkové a investiční celky, jejich časovou prioritizaci a vazbu na veřejná prostranství i infrastrukturu.',quote:'Investice by se měly vzájemně co nejméně podmiňovat.',refs:[['S003',12]],meaning:'Jednorázová výsledná bilance nezachytí předfinancování sítí ani závislosti mezi celky.',output:'Etapové cash flow a přehled podmiňujících investic; parametry jako evidované předpoklady.'},
 {id:'R05',title:'Městské bydlení a veřejné plnění',fact:'Zadání uvádí orientační podíl městského bydlení 6–10 %, který má zadavatel upřesnit v diskusi se zpracovatelem.',quote:'požadovaný podíl městského bydlení (orientačně 6–10 %)',refs:[['S003',12]],meaning:'Jde o orientační požadavek k upřesnění, ne o dohodnutý výsledný podíl nebo hotovou smluvní povinnost investora.',output:'Porovnání variant veřejného plnění a dopadu na ekonomiku i majetkovou dohodu.'},
 {id:'R06',title:'Vodovod je pojmenovaný limit',fact:'Zadání upozorňuje na napojení vodovodu z ulice K Vořechu a jako alternativu zmiňuje trasu kolem Lidlu.',quote:'Zásadní limitou území je napojení vodovodu z ulice „K Vořechu“.',refs:[['S003',12],['S002',2]],meaning:'Bez potvrzených kapacit a variant od příslušných odborníků nelze náklady ani časování považovat za jisté.',output:'Registr infrastrukturních omezení; položky modelu navázané na variantu, zdroj a stav ověření.'},
 {id:'R07',title:'Historické kapacity nejsou nový návrh',fact:'Zadání na straně 7 uvádí historickou kapacitu téměř 130 000 m² HPP. Na straně 8 zmiňuje referenční studii s přibližně 100 000 m² HPP; na straně 11 ji označuje za úplné maximum pro návrh.',quote:'nicméně tuto studii lze považovat za základní referenční rámec pro kapacitu území.',refs:[['S003',7],['S003',8],['S003',11]],meaning:'Tyto hodnoty nelze použít jako ověřenou současnou povolenou kapacitu ani automaticky jako výnosovou plochu.',output:'Srovnávací registr historických studií a nových návrhů s oddělenými jednotkami a stavem platnosti.'},
 {id:'R08',title:'Ekonomický mechanismus do prezentace',fact:'P01 požaduje představit mechanismus developerské rozvahy, nikoliv konkrétní výpočty. Maximální délka prezentace je 30 minut.',quote:'návrh ekonomického modelu – mechanismus developerské rozvahy, nikoli konkrétní',refs:[['S003',14]],meaning:'Výběrová prezentace může srozumitelně ukázat vztahy a scénářové změny. Ukázkové hodnoty musí zůstat označené jako ilustrace.',output:'Schéma vstup → objekt → etapa → aktér → výsledek a průchod ukázkou změny parametrů.'},
 {id:'R09',title:'Harmonogramy se liší',fact:'Výzva uvádí analytickou část v únoru 2027; P01 v březnu 2027. Smlouva stanoví průzkumy a rozbory do 60 dnů od podpisu.',quote:'03/2027 - odevzdání analytické části',refs:[['S001',1],['S003',15],['S002',3]],meaning:'Z dodaných dokumentů nelze bez vysvětlení zadavatele určit jeden sjednocený kalendář. Pracovní termín nesmí rozpor skrývat.',output:'Dotaz k harmonogramu a plán kapacit s explicitně označenou rozhodnou variantou.'},
 {id:'R10',title:'P09 je zmíněna, ale není dodána',fact:'P01 odkazuje na ekonomickou analýzu P09. V evidovaných 92 položkách archivu P01–P06 ani v samostatné výzvě takový zdroj není.',quote:'udržitelné minimum je odhadnuto v ekonomické analýze (P 09)',refs:[['S003',11]],meaning:'Chybí vstup pro srovnání ekonomických předpokladů města. Absence v balíčku neznamená, že dokument neexistuje jinde.',output:'Vyžádání P09 a následné porovnání metod, vstupů a citlivostí.'},
 {id:'R11',title:'Předání a průběžné projednání',fact:'Smlouva předpokládá pravidelné projednávání a předání čistopisu ve třech vyhotoveních, digitálně ve formátech PDF, DWG a XLS.',quote:'digitálně ve formátu pdf, dwg a xls.',refs:[['S002',3],['S003',14]],meaning:'Editovatelná bilanční data odpovídají doloženému požadavku. Hosting a dlouhodobý provoz aplikace je nutné sjednat samostatně.',output:'XLS bilance, dokumentovaná metodika, zdrojový registr a ekonomické podklady pro projednání.'}
];
const OFFERS=ProjectConfig.value.offer.cards.map(c=>({...c,bounds:ProjectConfig.template(c.bounds)}));

function sourceButton(id,page){return button(`${id} · strana ${page} ↗`,()=>openDoc(id,page));}
function showView(view,updateHash=true){
 if(view==='about')view='overview';
 if(!['overview','documents','gallery','map','scene','research','offer','about'].includes(view))return;
 state.view=view;
 document.querySelectorAll('.view').forEach(e=>e.classList.toggle('active',e.id===view));
 document.querySelectorAll('.nav button').forEach(e=>e.dataset.view===view?e.setAttribute('aria-current','page'):e.removeAttribute('aria-current'));
 if(view==='gallery'&&!$('galleryGrid').childElementCount)renderGallery();
 if(updateHash)writeHash();
 window.dispatchEvent(new CustomEvent('workspaceview',{detail:view}));
}
function setDocumentMode(mode){
 state.documentMode=['reader','timeline'].includes(mode)?mode:'table';
 $('documents').dataset.documentMode=state.documentMode;
 document.querySelectorAll('button[data-document-mode]').forEach(b=>b.setAttribute('aria-pressed',String(b.dataset.documentMode===state.documentMode)));
}
function writeHash(){const hash=state.view==='documents'&&state.documentMode==='reader'?`#doc=${state.doc}&page=${state.page}`:`#view=${state.view}${state.view==='documents'?'&mode='+state.documentMode:''}`;if(location.hash!==hash)history.replaceState(null,'',hash);}
function loadHash(){const p=new URLSearchParams(location.hash.slice(1));if(p.has('doc')){openDoc(p.get('doc'),Number(p.get('page'))||1,false);}else {setDocumentMode(p.get('mode')||'table');showView(p.get('view')||'overview',false);}}
function openDoc(id,page=1,hash=true){
 const d=byId.get(id);if(!d){tell('Tento zdroj není v balíčku.');return;}
 state.doc=id;state.page=d.pages.some(p=>p.number===page)?page:(d.pages[0]?.number||1);
 setDocumentMode('reader');showView('documents',false);$('textMode').value='read';$('originalMode').value='preview';
 renderDoc();renderRegistry();if(hash)writeHash();
 if(innerWidth<=760){document.querySelector('.document-layout').classList.add('no-registry');$('toggleRegistry').textContent='Zobrazit seznam';$('toggleRegistry').setAttribute('aria-expanded','false');}
}
function renderRegistry(){
 const q=norm($('docSearch').value.trim()),group=$('groupFilter').value,filter=$('statusFilter').value;
 const catalogIds=window.DocumentCatalogQA?new Set(DocumentCatalogQA.getState().filtered):null;
 const found=DOCS.filter(d=>(!catalogIds||catalogIds.has(d.id))&&(!window.DocumentExplorer||DocumentExplorer.matches(d))&&(!group||d.group===group)&&(!filter||(filter==='review'?d.reviewCount>0:d.status===filter))&&(!q||norm(d.title+' '+d.source+' '+d.markdown).includes(q)));
 $('docCount').textContent=`${found.length} z ${DOCS.length} zdrojů`;
 const fragment=document.createDocumentFragment();
 found.forEach(d=>{const b=button('',()=>openDoc(d.id,d.pages[0]?.number||1),'doc-item');b.setAttribute('aria-current',String(d.id===state.doc));b.append(node('span',d.id+' · '+d.group),node('strong',d.filename),node('span',`${statusLabels[d.status]} · ${d.reviewCount} bodů k revizi`));
  if(q){const plain=d.markdown.replace(/<[^>]*>/g,' ').replace(/\s+/g,' '),at=norm(plain).indexOf(q);if(at>=0)b.append(node('span','…'+plain.slice(Math.max(0,at-35),at+100)+'…'));}
  fragment.append(b);});
 if(!found.length)fragment.append(node('p','Žádný dokument neodpovídá filtrům. Změňte hledání nebo stav.','empty-state'));
 if(window.DocumentExplorer)DocumentExplorer.folders(found.map(d=>JZM_CATALOG.records.find(r=>r.id===d.id)),$('docList'),true);else $('docList').replaceChildren(fragment);
}
function renderDoc(){
 const d=byId.get(state.doc);$('docCode').textContent=d.id+' / '+d.group;$('docTitle').textContent=d.title;
 $('docStatus').textContent=`${statusLabels[d.status]} · ${d.reviewCount} otevřených bodů · ${d.pageCount?d.pageCount+' stran':'stránkování neurčeno'} · ${d.format}`;
 $('downloadOriginal').href=localURL(d.original);$('downloadMD').href=localURL(d.mdPath);
 $('pageSelect').replaceChildren();
 if(d.pages.length)d.pages.forEach(p=>{const o=node('option',`${p.number} / ${d.pageCount||d.pages.length}`);o.value=p.number;$('pageSelect').append(o);});
 else{const o=node('option','Bez stran');o.value=1;$('pageSelect').append(o);}
 $('pageSelect').value=String(state.page);$('pageSelect').disabled=!d.pages.length;
 $('openPDF').hidden=!d.pdf;if(d.pdf)$('openPDF').href=localURL(d.pdf)+`#page=${state.page}`;
 renderInfo(d);renderPage();
}
function renderInfo(d){
 const box=$('docInfo');box.replaceChildren(node('h4','Původ a kontrola převodu'));
 const items=[['Zdroj',d.source],['SHA-256 originálu',d.sourceHash],['SHA-256 Markdown',d.markdownHash],['PDF náhled',d.pdf?d.pdfLabel:'Není dostupný'],['Stav',statusLabels[d.status]],['Otevřené revizní body',String(d.reviewCount)],['Lidská revize',d.metadata.revised_by||'Nepotvrzena']];
 items.forEach(([label,value])=>{const p=node('p');p.append(node('b',label+': '),document.createTextNode(value));box.append(p);});
 const review=d.markdown.split('## Místa k revizi')[1]?.split('\n## ')[0];if(review){box.append(node('h4','Revizní poznámky původního převodu'),node('pre',review.trim()));}
 const details=node('details'),summary=node('summary','Úplná metadata převodu');details.append(summary,node('pre',JSON.stringify(d.metadata,null,2)));box.append(details);
}
function setPage(number){const d=byId.get(state.doc);if(!d.pages.some(p=>p.number===number))return;state.page=number;$('pageSelect').value=String(number);renderPage();writeHash();}
function renderPage(){
 const d=byId.get(state.doc),page=d.pages.find(p=>p.number===state.page),i=d.pages.indexOf(page);
 $('prevPage').disabled=i<=0;$('nextPage').disabled=i<0||i>=d.pages.length-1;
 $('textLocator').textContent=d.pages.length?`${d.id} · s. ${state.page}`:d.id;
 if(d.pdf)$('openPDF').href=localURL(d.pdf)+`#page=${state.page}`;
 renderOriginal(d);renderText(d,page);
}
function renderOriginal(d){
 const content=$('originalContent');content.replaceChildren();content.className='pane-content';
 if($('originalMode').value==='images'){
  content.classList.add('document-images');
  const pageImages=d.images.filter(im=>!im.page||im.page===state.page);
  if(!pageImages.length){const note=node('div',undefined,'empty-state');note.append(node('p',`Na této straně nejsou samostatné obrazové výřezy. Dokument obsahuje ${d.images.length} obrázků.`),button('Zobrazit všechny obrázky dokumentu',()=>{$('galleryFilter').value=d.id;renderGallery();showView('gallery');}));content.append(note);}
  else pageImages.forEach(im=>content.append(imageCard(d,im)));
 }else if(d.pdf&&$('originalMode').value==='preview'){
  content.classList.add('pdf-preview');
  const path=`previews/${d.id}/p${String(state.page).padStart(3,'0')}.jpg`;
  const b=button('',()=>openImage(d,{path,name:`${d.pdfLabel} · strana ${state.page}`,page:state.page}),'pdf-page-button');
  b.setAttribute('aria-label',`Zvětšit náhled PDF ${d.id}, strana ${state.page}`);
  const im=node('img');im.src=path;im.alt=`${d.pdfLabel} · ${d.id} · strana ${state.page}`;
  im.addEventListener('error',()=>{b.replaceChildren(node('p','Náhled není dostupný. Použijte Otevřít PDF zvlášť.'));});
  b.append(im);content.append(node('div','Náhled původní PDF strany · kliknutím zvětšíte','preview-caption'),b);
 }else if(d.pdf){
  const tip=node('div',undefined,'preview-caption');tip.append(document.createTextNode('Prázdný náhled? '),button('Zobrazit vykreslenou stranu',()=>{$('originalMode').value='preview';renderOriginal(d);}));content.append(tip);
  const frame=node('iframe');frame.title=`${d.id} – ${d.pdfLabel}, strana ${state.page}`;
  frame.src=localURL(d.pdf)+`#page=${state.page}&view=FitH`;
  frame.setAttribute('referrerpolicy','no-referrer');
  // Native PDF viewers require a document frame; no arbitrary HTML or remote src.
  content.append(frame);
 }else if(d.format==='JPEG'){
  const im=node('img');im.src=localURL(d.original);im.alt=d.title;im.className='original-photo';im.tabIndex=0;
  const show=()=>openImage(d,{path:d.original,name:d.filename,page:null});im.addEventListener('click',show);im.addEventListener('keydown',e=>{if(e.key==='Enter')show();});content.append(im);
 }else{
  const block=node('div',undefined,'empty-state');block.append(node('h4','PDF náhled není k dispozici'),node('p',d.format.startsWith('DWG')?'Tento DWG nebyl v převodu obsahově zpracován. Dostupná je evidence a původní soubor.':'Starý soubor DOC má částečný přepis bez spolehlivého stránkování. Obsah zkontrolujte v původním dokumentu.'));
  const a=node('a','Stáhnout původní soubor ↓','primary');a.href=localURL(d.original);a.download='';block.append(a);content.append(block);
 }
}
function renderText(d,page){
 const box=$('textContent'),mode=$('textMode').value;box.replaceChildren();box.scrollTop=0;
 if(mode==='raw'){box.append(node('pre',page?page.markdown:d.rawMarkdown,'raw'));return;}
 const markup=mode==='full'?d.html:(page?.html||d.html);
 // Parse only build-sanitized, fixed data. Defense in depth: no scripts, handlers,
 // external URLs or executable markup admitted even if the bundle is modified.
 const parsed=new DOMParser().parseFromString(markup,'text/html');
 const allowed=new Set(['P','H2','H3','H4','H5','H6','STRONG','EM','B','I','A','BR','HR','UL','OL','LI','BLOCKQUOTE','TABLE','THEAD','TBODY','TR','TH','TD','PRE','CODE','DEL','IMG']);
 [...parsed.body.querySelectorAll('*')].forEach(el=>{
  if(!allowed.has(el.tagName)){el.remove();return;}
  [...el.attributes].forEach(a=>{if(!['id','href','src','alt','loading','data-image'].includes(a.name))el.removeAttribute(a.name);});
  ['href','src','data-image'].forEach(attr=>{const p=el.getAttribute(attr);if(p&&!(p.startsWith('#')||safeLocal(p)))el.removeAttribute(attr);});
 });
 box.replaceChildren(...parsed.body.childNodes);
 box.querySelectorAll('a').forEach(a=>a.addEventListener('click',e=>{
  const image=a.getAttribute('data-image');if(image){e.preventDefault();const im=d.images.find(x=>x.path===image);if(im)openImage(d,im);return;}
  const href=a.getAttribute('href');if(href?.startsWith('#')){e.preventDefault();const id=href.slice(1);const targetPage=d.pages.find(p=>p.markdown.includes(`id="${id}"`));if(targetPage)setPage(targetPage.number);const target=[...box.querySelectorAll('[id]')].find(el=>el.id===id);if(target)box.scrollTop+=target.getBoundingClientRect().top-box.getBoundingClientRect().top;}
 }));
}
function imageCard(d,im){
 const fig=node('figure',undefined,'image-card');const b=button('',()=>openImage(d,im));b.setAttribute('aria-label',`Zvětšit ${d.id} ${im.name}`);
 const pic=node('img');pic.src=localURL(im.path);pic.alt=`${d.id} · ${im.name}${im.page?' · strana '+im.page:''}`;pic.loading='lazy';pic.addEventListener('error',()=>{b.replaceChildren(node('span','Obrázek se nepodařilo načíst. Otevřete původní soubor.','image-failed'));});b.append(pic);
 const cap=node('figcaption');cap.append(node('strong',`${d.id} · ${im.page?'strana '+im.page:'fotografie'}`),node('span',d.filename),node('div',im.name));
 cap.append(button('Zdroj a přepis ↗',()=>openDoc(d.id,im.page||1),'source-jump'));fig.append(b,cap);return fig;
}
function renderGallery(){const id=$('galleryFilter').value,docs=id?[byId.get(id)]:DOCS;const fragment=document.createDocumentFragment();let count=0;docs.filter(Boolean).forEach(d=>d.images.forEach(im=>{fragment.append(imageCard(d,im));count++;}));$('galleryGrid').replaceChildren(fragment);$('galleryCount').textContent=`${count} obrázků`;}
function openImage(d,im){state.image={d,im};$('imageTitle').textContent=im.name;$('imageCaption').textContent=`${d.id} · ${d.filename}${im.page?' · strana '+im.page:''}`;$('largeImage').src=localURL(im.path);$('largeImage').alt=$('imageCaption').textContent;$('imageOriginal').href=localURL(im.path);$('imageZoom').value='100';$('largeImage').style.width='100%';$('imageDialog').showModal();}
function renderClaims(){
 const fragment=document.createDocumentFragment();CLAIMS.forEach(c=>{const article=node('article',undefined,'claim');article.append(node('div',c.id+' / PODLOŽENO DODANÝMI DOKUMENTY','eyebrow'),node('h3',c.title),node('p',c.fact),node('blockquote',c.quote));
  const meaning=node('div',undefined,'meaning');meaning.append(node('span','INTERPRETACE URBIQ','claim-label'),node('p',c.meaning));
  const output=node('div');output.append(node('span','NAVRHOVANÝ VÝSTUP / DALŠÍ KROK','claim-label'),node('p',c.output));const refs=node('div',undefined,'source-buttons');c.refs.forEach(([id,p])=>refs.append(sourceButton(id,p)));article.append(meaning,output,refs);fragment.append(article);});$('claimCards').replaceChildren(fragment);
}
function renderOffers(){OFFERS.forEach((o,i)=>{const a=node('article',undefined,'offer-card');a.append(node('div',String(i+1).padStart(2,'0'),'num'),node('h3',o.title));[['Dodáme',o.output],['Opora v podkladech',o.need],['Podmínky rozsahu',o.bounds]].forEach(([t,s])=>{const p=node('p');p.append(node('strong',t),document.createTextNode(s));a.append(p);});const refs=node('div',undefined,'source-buttons');o.refs.forEach(([id,p])=>refs.append(sourceButton(id,p)));a.append(refs);$('offerCards').append(a);});}
function downloadJSON(name,value){const blob=new Blob([JSON.stringify(value,null,2)],{type:'application/json'}),url=URL.createObjectURL(blob),a=node('a');a.href=url;a.download=name;document.body.append(a);a.click();a.remove();setTimeout(()=>URL.revokeObjectURL(url),1500);}

document.querySelectorAll('[data-view]').forEach(b=>b.addEventListener('click',()=>showView(b.dataset.view)));
document.querySelectorAll('[data-open-doc]').forEach(b=>b.addEventListener('click',()=>openDoc(b.dataset.openDoc,Number(b.dataset.page)||1)));
[...new Set(DOCS.map(d=>d.group))].sort().forEach(g=>{const o=node('option',g);o.value=g;$('groupFilter').append(o);});
DOCS.filter(d=>d.images.length).forEach(d=>{const o=node('option',`${d.id} · ${d.filename} (${d.images.length})`);o.value=d.id;$('galleryFilter').append(o);});
$('docSearch').addEventListener('input',renderRegistry);$('groupFilter').addEventListener('change',renderRegistry);$('statusFilter').addEventListener('change',renderRegistry);
// Library extension binds document filtering after initialization.
$('pageSelect').addEventListener('change',e=>setPage(Number(e.target.value)));
$('prevPage').addEventListener('click',()=>{const d=byId.get(state.doc),i=d.pages.findIndex(p=>p.number===state.page);if(i>0)setPage(d.pages[i-1].number);});
$('nextPage').addEventListener('click',()=>{const d=byId.get(state.doc),i=d.pages.findIndex(p=>p.number===state.page);if(i<d.pages.length-1)setPage(d.pages[i+1].number);});
$('layoutSelect').addEventListener('change',e=>document.querySelector('.reading-panes').dataset.layout=e.target.value);
$('originalMode').addEventListener('change',()=>renderOriginal(byId.get(state.doc)));
$('textMode').addEventListener('change',()=>{const d=byId.get(state.doc);renderText(d,d.pages.find(p=>p.number===state.page));});
$('toggleRegistry').addEventListener('click',()=>{const hidden=document.querySelector('.document-layout').classList.toggle('no-registry');$('toggleRegistry').textContent=hidden?'Zobrazit seznam':'Skrýt seznam';$('toggleRegistry').setAttribute('aria-expanded',String(!hidden));});
$('showDocInfo').addEventListener('click',()=>{$('docInfo').hidden=!$('docInfo').hidden;$('showDocInfo').setAttribute('aria-expanded',String(!$('docInfo').hidden));});
$('closeImage').addEventListener('click',()=>$('imageDialog').close());
$('imageZoom').addEventListener('input',e=>$('largeImage').style.width=e.target.value+'%');
$('imageSource').addEventListener('click',()=>{const {d,im}=state.image;$('imageDialog').close();openDoc(d.id,im.page||1);});
$('copyLink').addEventListener('click',async()=>{writeHash();try{await navigator.clipboard.writeText(location.href);tell('Odkaz na dokument a stranu zkopírován.');}catch{window.prompt('Zkopírujte odkaz na dokument a stranu:',location.href);}});
window.addEventListener('hashchange',loadHash);
const hero=byId.get('S003').images.find(im=>im.page===6);if(hero)$('heroImage').src=localURL(hero.path);
renderRegistry();renderDoc();renderClaims();renderOffers();loadHash();
// Read-only inspection surface used by the local QA harness.
window.WorkspaceQA={summary:DATA.summary,claims:CLAIMS,offers:OFFERS,getState:()=>({...state,image:state.image?.im?.name||null})};
