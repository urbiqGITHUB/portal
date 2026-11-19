---
{
  "created_at": "2026-11-11 14:03:12",
  "created_date": "2026-11-11",
  "created_by": "Codex – Kateřina Kováříková",
  "updated_at": "2026-11-11 14:03:12",
  "updated_by": "Codex",
  "revised_by": null,
  "timezone": "Europe/Prague",
  "codex_dialogue": null,
  "dialogue_location_note": "Aktuální lokální chat Codex; přesná URL nebyla zpřístupněna.",
  "dialogue_iteration": 2,
  "version_id": "DOCONV-261111-S072-v01",
  "status": "complete",
  "scope": "Úplný přepis uživatelem potvrzeného zdroje",
  "extraction_id": "DOCONV-261111-S072",
  "instructions_version": "v261027-v11",
  "instructions_sha256": "77e2c0270350d79d01f68b9e5a47914e9ef1e8c0c5851430e15ebfc61300328c",
  "extraction_mode": "full_transcription",
  "mode_confirmation": "Uživatel: chci full_transcription; společný vstupní soupis 93 souborů potvrzen.",
  "intake_confirmed_at": null,
  "intake_confirmation_note": "Potvrzení je doloženo zprávou v tomto chatu; přesný čas zprávy není v rozhraní dostupný.",
  "document_title": "VODOVOD ČERNÁ SILNICE VČETNĚ PROPOJENÍ V ULICI V CESTKÁCH – A. PRŮVODNÍ ZPRÁVA / B. SOUHRNNÁ TECHNICKÁ ZPRÁVA",
  "source_filename": "TZ A,B.pdf",
  "source_archive_entry": "P04 Přehled projektů v území/7_BD v cestkach, Stavokombinat invest, 2023/PD_vodovod_CERNA_SILNICE/PD_vodovod_ČERNÁ_SILNICE/TZ A,B.pdf",
  "source_format": "PDF",
  "source_sha256": "a9f38350b21714615ceeb222396667c4f691fee0378310a5be1c1ce4a4756b97",
  "source_size_bytes": 218088,
  "document_type": null,
  "source_total_units": 10,
  "source_unit_type": "physical_page",
  "requested_scope": "celý zdroj včetně vnitřních příloh",
  "pagination_status": "verified",
  "pagination_method": "PDF physical pages via PDFium",
  "source_page_count": 10,
  "intake_limitations": [
    "Neověřené názvy jsou null; název souboru není zaměněn za ověřený titul."
  ],
  "duplicate_source_ids": [],
  "coverage_scope": "full_content",
  "coverage_basis": "equally weighted physical pages",
  "coverage_total_units": 10,
  "coverage_eligible_units": 10,
  "coverage_excluded_units": 0,
  "coverage_unknown_units": 0,
  "unprocessed_pct": 0,
  "unprocessed_pct_kind": "measured",
  "unprocessed_pct_min": null,
  "unprocessed_pct_max": null,
  "review_open_count": 0,
  "visual_policy": "reference_only_all_content_images_tables_by_mode",
  "excluded_visual_policy": "omit_logos_and_decorations_only",
  "full_page_snapshots": false,
  "package_contents_listing": false,
  "excluded_visuals": [],
  "excluded_visual_count": 0,
  "source_visual_occurrences": 0,
  "saved_visual_count": 0,
  "table_count": 3,
  "extraction_started_at": "2026-11-11T13:21:40.366289+01:00",
  "extraction_finished_at": "2026-11-11 14:03:12",
  "processing_seconds": null,
  "processing_seconds_per_page": null,
  "page_timing_note": "Strojové pokusy jsou časované v pracovních důkazech; vizuální klasifikace a ruční přepis nebyly měřeny samostatně. Úplný čas na stranu proto není odhadován.",
  "automated_native_seconds": 0.06168249994516373,
  "automated_layout_seconds": 1.8690300001762807,
  "automated_export_seconds": 0.20697619998827577,
  "verification": {
    "source_visual_inspection": "all physical PDF pages at overview scale; detailed review of scanned catalogs, source tables and flagged areas",
    "native_text_check": "PDFium plus pdfplumber for text/table pages; Word native cross-check for DOCX",
    "hover": "not_verified",
    "click": "local file existence / image decoder; viewer click not_verified",
    "line_by_line_review": "only explicitly manually transcribed areas; other content uses parser comparison",
    "output_review": "Source-normalized text/table comparison; all package links, anchors and decoded assets checked before exclusive delivery. Risky columns, raster catalogs and technical tables reviewed in detail.",
    "reviewed_manually_transcribed_pages": [],
    "output_asset_visual_review": "All 200 initially exported linked images viewed in four contact sheets; eight standalone converter-logo assets excluded; six adjusted crops re-rendered and visually checked. Final delivery contains 192 linked images."
  },
  "output_location": {
    "storage_type": "sharepoint_synced_folder",
    "workspace": "00_datamart",
    "workspace_relative_directory": "05_DELIVERY/document-converting-outputs/261111_jihozapadni-mesto-s072-tz-a-b_v01",
    "main_markdown_relative_path": "05_DELIVERY/document-converting-outputs/261111_jihozapadni-mesto-s072-tz-a-b_v01/261111_jihozapadni-mesto-s072-tz-a-b_extraction_v01.md",
    "sharepoint_url": null,
    "sync_status": "not_verified",
    "limitation": "Ověřeno lokální uložení; synchronizace SharePoint není pozorována."
  },
  "source_name": "TZ A,B.pdf",
  "document_type_note": "Přesná typologie není samostatně ověřena; druh zdroje plyne z původního názvu a obsahu.",
  "method_runs": [
    {
      "method_run_id": "LOCAL-S072_layout",
      "method_family": "layout_parser",
      "tool": "pdfplumber",
      "tool_version": "0.11.9",
      "tool_versions": null,
      "helper_version": null,
      "parameters": {
        "scope": "explicit page regions",
        "source_evidence": "S072_layout.json"
      },
      "source_units": "all / source-evidence scope",
      "started_at": null,
      "finished_at": null,
      "elapsed_seconds": 1.8690300001762807,
      "status": "ok",
      "failure_reason": null,
      "output_used": true,
      "verification_result": "Viz rozsah kontroly a otevřené body v tomto přepisu.",
      "previous_method_run_id": null,
      "escalation_reason": null,
      "tool_chain": [
        "Python",
        "pdfplumber"
      ],
      "evidence_workspace_relative": "tmp/261111_jihozapadni_intake_v01/S072_layout.json",
      "evidence_sha256": "b3a69bda58ae8e3bb44620472aa8d9839cc9c10433e28a14b45dd551bfdb82a6",
      "metadata_limitations": "Nevyplněné hodnoty nebyly původním pomocníkem měřeny nebo zpřístupněny."
    },
    {
      "method_run_id": "LOCAL-S072_native",
      "method_family": "native_text",
      "tool": "pypdfium2",
      "tool_version": "5.14.0",
      "tool_versions": null,
      "helper_version": null,
      "parameters": {
        "scope": "all original units",
        "source_evidence": "S072_native.json"
      },
      "source_units": "all / source-evidence scope",
      "started_at": "2026-11-11T13:21:40.366289+01:00",
      "finished_at": "2026-11-11T13:21:40.427577+01:00",
      "elapsed_seconds": 0.06168249994516373,
      "status": "ok",
      "failure_reason": null,
      "output_used": true,
      "verification_result": "Viz rozsah kontroly a otevřené body v tomto přepisu.",
      "previous_method_run_id": null,
      "escalation_reason": null,
      "tool_chain": [
        "Python",
        "pypdfium2"
      ],
      "evidence_workspace_relative": "tmp/261111_jihozapadni_intake_v01/S072_native.json",
      "evidence_sha256": "4b1248302f2bfa2643ca4090f20a6e1eb06ff5182f2fdd60e5adfe48b427398c",
      "metadata_limitations": "Chybějící časy/verze nebyly zpětně odhadnuty. První PDFium pokus měl chybu pomocné metody get_size u obrazového inventáře; text zůstal použitelný, inventář byl zopakován metodou get_px_size."
    }
  ],
  "method_selection": {
    "selected_by": "processor",
    "selection_reason": "Nativní text pro digitální podklady; místní OCR a ruční přepis pouze pro skenované texty/tabulky; úplné grafické motivy jako odkazy.",
    "considered_methods": [
      {
        "method": "native_text",
        "decision": "used where available"
      },
      {
        "method": "local_ocr",
        "decision": "used only for selected raster text/table areas"
      },
      {
        "method": "DWG geometry conversion",
        "decision": "not applicable"
      },
      {
        "method": "legacy Office automation",
        "decision": "not applicable"
      }
    ]
  },
  "document_profile": {
    "content_mode": "digital",
    "languages": [
      "cs"
    ],
    "unit_count": 10,
    "layout_features": [
      "see original page structure and located review issues"
    ],
    "table_count": 3,
    "visual_count": 0,
    "excluded_visual_count": 0,
    "scan_quality": "Unmeasured; raster text checked in indicated areas."
  },
  "elapsed_seconds": null,
  "verification_seconds": null,
  "processed_page_count": 10,
  "environment": {
    "os": "Windows",
    "python": "3.12.14",
    "libraries": {
      "pypdfium2": "5.14.0",
      "pdfplumber": "0.11.9",
      "Pillow": "13.0.0",
      "pypdf": "6.10.0",
      "python-docx": "1.2.0",
      "lxml": "6.1.1"
    },
    "network_services_for_document_content": false
  },
  "result_metrics": {
    "transcribed_characters": 29600,
    "transcribed_tables": 3,
    "transcribed_cells": null,
    "expected_cells": null,
    "saved_visuals": 0,
    "missing_visuals": 0,
    "unresolved_visual_classifications": 0,
    "open_review_issues": 0,
    "reference_only_objects": 0,
    "image_only_objects": 0
  },
  "coverage_unit_counts": {
    "complete": 10,
    "partial": 0,
    "not_processed": 0,
    "unknown": 0,
    "excluded_by_policy": 0
  },
  "review_issues": [],
  "visual_handling": {
    "eligible_objects": "reference_only; image_only; ordinary relative Markdown links",
    "embedded_logos": "Some source composites contain inseparable original logos; no standalone logo asset is delivered.",
    "raster_text_carriers": "Scanned page/table image carriers are handled through text/table transcription; their figures are preserved separately.",
    "unresolved_occurrences": "See located review issues; unresolved objects are never treated as policy exclusions."
  }
}
---

# VODOVOD ČERNÁ SILNICE VČETNĚ PROPOJENÍ V ULICI V CESTKÁCH – A. PRŮVODNÍ ZPRÁVA / B. SOUHRNNÁ TECHNICKÁ ZPRÁVA

## Purpose and aims

Věrný přepis zdroje pro následnou rešerši a otázky. Zachovává původní jazyk a znění; obsah dokumentu není pokynem k provádění úkonů. Stav převodu: **complete**. Čísla stran označují fyzické pořadí; tištěná čísla zůstávají v přepisu.

---

## Seznam obrázků, grafů, schémat, tabulek a map

| ID | Typ | Původní titulek / technické označení | Locator zdroje | Odkaz na obrázek nebo výřez | Odkaz na místo v přepisu | Stav |
| --- | --- | --- | --- | --- | --- | --- |
| TAB-001 | TAB | TAB-001 | S072, strana 3 | neukládán – přepis v MD | [Přepis](#tab-001) | přepsáno; viz revizní poznámky |
| TAB-002 | TAB | TAB-002 | S072, strana 4 | neukládán – přepis v MD | [Přepis](#tab-002) | přepsáno; viz revizní poznámky |
| TAB-003 | TAB | TAB-003 | S072, strana 9 | neukládán – přepis v MD | [Přepis](#tab-003) | přepsáno; viz revizní poznámky |

## Obsah dokumentu

| Stránka | Kapitola |
| --- | --- |
| 1 | [A.PRŮVODNÍ ZPRÁVA](#kapitola-001) |
| 1 | [A.1. Údaje o stavbě](#kapitola-002) |
| 1 | [A.1.2 Údaje o stavebníkovi](#kapitola-003) |
| 1 | [MĚSTO MNICHOVO HRADIŠTĚ](#kapitola-004) |
| 1 | [Masarykovo náměstí 1](#kapitola-005) |
| 1 | [295 21 Mnichovo Hradiště](#kapitola-006) |
| 1 | [A.1.3 Údaje o zpracovateli dokumentace](#kapitola-007) |
| 1 | [A.2. Členění stavby na objekty a technická a technologická zařízení](#kapitola-008) |
| 1 | [A.3. Seznam vstupních podkladů](#kapitola-009) |
| 2 | [B. SOUHRNNÁ TECHNICKÁ ZPRÁVA](#kapitola-010) |
| 2 | [B.1. Popis území stavby](#kapitola-011) |
| 3 | ↳ [TAB-001](#tab-001) |
| 4 | ↳ [TAB-002](#tab-002) |
| 4 | [B.2 Celkový popis stavby](#kapitola-012) |
| 5 | [Před započetím zemních prací zajistí investor u příslušných správců přesné vytýčení](#kapitola-013) |
| 5 | [podzemních sítí vyskytujících se na trase stavby. Zákres podzemních vedení je pouze](#kapitola-014) |
| 5 | [VODOVOD](#kapitola-015) |
| 6 | [B.3 Připojení na technickou infrastrukturu](#kapitola-016) |
| 6 | [B.4 Dopravní řešení](#kapitola-017) |
| 7 | [B.5 Řešení vegetace a souvisejích terénních úprav](#kapitola-018) |
| 7 | [B.6 Popis vlivů stavby na životní prostředí a jeho ochranu](#kapitola-019) |
| 7 | [B.7 Ochrana obyvatelstva](#kapitola-020) |
| 7 | [B.8 Zásady organizace výstavby](#kapitola-021) |
| 9 | ↳ [TAB-003](#tab-003) |
| 10 | [B.9 Celkové vodohospodářské řešení](#kapitola-022) |

## Přehled extrakce

Zdroj: `S072`. Režim: `full_transcription`. Rozsah: celý zdroj; jednotek 10. Otevřené revizní body: 0. Pokrytí se vztahuje na zachování obsahu; vnitřní text map a schémat zůstává v odkazovaných obrazech. Čas na stranu není vypočten, protože nebyl samostatně měřen celý ruční proces.

## Přepis

---
<a id="s072-p001"></a>
### Zdrojová strana 1

VODOVOD ČERNÁ SILNICE VČETNĚ PROPOJENÍ V ULICI V CESTKÁCH

<a id="kapitola-001"></a>
#### A.PRŮVODNÍ ZPRÁVA

<a id="kapitola-002"></a>
#### A.1. Údaje o stavbě

A.1.1. Identifikační údaje

Název stavby: VODOVOD ČERNÁ SILNICE VČETNĚ PROPOJENÍ V ULICI V CESTKÁCH

b)Místo stavby:  k.ú. Mnichovo Hradiště, parc.č. 2439/1, 2439/13, 2446/2, 1992/77, 2446/7,

1992/159, 1992/95, 1992/186

c) Předmět dokumentace : Výstavba vodovodu v obci Mnichovo Hradiště – zásobování pitnou vodou

v obci Mnichovo Hradiště – technická infrastruktura

<a id="kapitola-003"></a>
#### A.1.2 Údaje o stavebníkovi

a) jméno, příjmení, adresa trvalého pobytu :

<a id="kapitola-004"></a>
#### MĚSTO MNICHOVO HRADIŠTĚ

<a id="kapitola-005"></a>
#### Masarykovo náměstí 1

<a id="kapitola-006"></a>
#### 295 21 Mnichovo Hradiště

<a id="kapitola-007"></a>
#### A.1.3 Údaje o zpracovateli dokumentace

a) ANITAS s.r.o. , IČ: 257 55 668, kancelář Turnovská 21,295 01 Mnichovo Hradiště

Zodpovědný projektant: Bc. Tomáš Daňsa , Bc. Tomáš Daňsa, ČKAIT  0602512, autorizovaný

technik pro stavby vodního hospodářství a krajinného inženýrství, specializace stavby

zdravotnětechnické

<a id="kapitola-008"></a>
#### A.2. Členění stavby na objekty a technická a technologická zařízení

Stavba nebude členěna.

<a id="kapitola-009"></a>
#### A.3. Seznam vstupních podkladů

Pro zpracování dokumentace byly použity následující podklady:

- kopie katastrální mapy M 1:1000, informace o parcelách KN

- zaměření a obhlídka na místě stavby

- polohopisné a výškopisné zaměření Geodézie Hradiště s.r.o.

- požadavky investora

-  územní plán vč. jeho změn

-  polohopisné a výškopisné zaměření

-  vyjádření správců sítí k existenci zařízení v jejich správě

-  podklady od správců stávajících sítí k napojení

-  návrh stavby

-  soubor platných ČSN a směrnic pro projektování

data: dokumentace ke společnému povolení stavby strana: 1/16

Strana 1 (celkem 16)

---
<a id="s072-p002"></a>
### Zdrojová strana 2

VODOVOD ČERNÁ SILNICE VČETNĚ PROPOJENÍ V ULICI V CESTKÁCH

<a id="kapitola-010"></a>
#### B. SOUHRNNÁ TECHNICKÁ ZPRÁVA

<a id="kapitola-011"></a>
#### B.1. Popis území stavby

a) charakteristika území , stavebního pozemku a průběhu liniové trasy, zastavěné území a

nezastavěné území, soulad navrhované stavby s charakterem území, dosavadní využité a

zastavěnost území -  Území určené k výstavbě se nachází v jihozápadní části obce Mnichovo

Hradiště : napojení v krajské komunikaci II. tř. č.610 - parc.č. 2439/1 , ulice Víta Nejedlého,

místní komunikace – ulice Černá silnice, – povrch asfalt, – parc.č. 2439/13 a 2446/2, protlakem

povede vodovod pod krajskou komunikací II.tř.č.268  a povede rotlým terénem až k

armaturnímu vodovodnímu uzlu ulice V cestkách. Vodovod bude veden v asfaltové místní

komunikaci Černá silnice  a po lomu 90° a protlaku pod komunikací č.268 povede v rostlém

terénu a u BD v parkovacím pruhu komunikace.  Pro budoucí výstavbu zóny B dle ÚP Města

Mnichovo Hradiště budou provedeny 2 odbočky LT 150, které budou zaslepeny. Nový vodovod

bude ve správě VaK Mladá Boleslav a.s.

b) údaje o souladu s územně plánovací dokumentací, s cíli a úkoly územního plánování, včetně

informace o vydané územně plánovací dokumentaci – PD je v souladu s ÚPD.

Navrhované liniové stavby jsou  veřejně prospěšnou stavbou dle vyhlášky obce Mnichovo

Hradiště. Tímto jsou v souladu s ÚPD obce Mnichovo Hradiště. Odůvodnění souladu s cíli a

úkoly územního plánování:

Stavba IS a její umístění nekoliduje se Zásadami územního rozvoje Středočeského kraje, které

byly vyhlášeny opatřením obecné povahy ze dne 19.12.2011 č. Usnesení 4-20/2011/ZK s

nabytím účinnosti dne 22.2.2012.  Zásady územního rozvoje Středočeského kraje stanovují

základní požadavky na účelné a hospodárné uspořádání území, priority územního plánování

kraje pro zajištení udržitelného rozvoje území a zpřesňují nebo vymezují rozvojové oblasti a osy

a specifické oblasti republikového a nadmístního významu. Dále zpřesňují plochy a koridory

vymezené v Politice územního rozvoje a navrhují plochy a koridory nadmístního významu vč.

ploch a koridorů veřejné infrastruktury, územního systému ekologické stability a územních

rezerv a stanovují požadavky na jejich využití. ZÚR SCK rovněž definují plochy nebo koridory

pro  veřejně prospěšné  stavby a  na  území Středočeského  kraje  určují priority územního

plánování a úkoly pro podrobnejší územně plánovací dokumentaci. Zásady územního rozvoje

se pořizují pro celé území kraje. Součástí zásad územního rozvoje je i vyhodnocení vlivu na

udržitelný rozvoj území ve smyslu ustanovení § 36 odst. 1 stavebního zákona.  Informace   o

rozsahu a účelu ZÚR čerpal projektant z webových stránek Středočeského kraje a na základě

tohoto podkladu konstatuje, že záměr nekoliduje se Zásadami územního rozvoje Středočeského

kraje.

Cílem územního plánování je  vytvářet předpoklady pro výstavbu a pro udržitelný rozvoj území,

spočívající ve vyváženém vztahu podmínek pro příznivé životní prostředí, pro hospodářský

rozvoj a pro soudržnost společenství obyvatel území a  uspokojuje potřeby současné generace,

aniž by  ohrožoval podmínky  života  generací budoucích.  Úkoly  územního  plánování jsou

vyspecifikovány v § 19 zákona č. 183/2006 Sb. o územním plánování a stavebním řádu, ve

znění pozdějších předpisů.  O souladu záměru s cíli a úkoly územního plánování přísluší

rozhodovat pouze stavebnímu úřadu. Stavba prodloužení kanalizační stoky je navržena v

souladu s regulativy pro funkční využití dotčeného území a dále je v souladu s vydanými

stanovisky dotčených orgánů.  Stavba je dále v souladu s koncepcí rozvoje území (soulad s

ÚPSÚ) a se zásadami územního rozvoje. Tímto je prokázáno, že provedením stavby nedojde

ke kolizi s úkoly územního plánování. Záměr v sobě akceptuje vyvážený vztah podmínek pro

příznivé životní prostředí, pro soudržnost společenství obyvatel a uspokojuje potřeby současné

generace a neohrožuje podmínky života generací budoucích. Stavba vodovodu a kanalizace na

předmětných pozemcích tyto cíle územního plánování splňuje. ÚPI nebyla vyžadována.

c) informace o vydaných rozhodnutích o povolení vyjímky z obecných požadavků na využívaní

území - nejsou

d) informace o tom, zda a v jakých částech dokumentace jsou zohledněny podmínky závazných

data: dokumentace ke společnému povolení stavby strana: 2/16

Strana 2 (celkem 16)

---
<a id="s072-p003"></a>
### Zdrojová strana 3

VODOVOD ČERNÁ SILNICE VČETNĚ PROPOJENÍ V ULICI V CESTKÁCH

stanovisek dotčených orgánů – stanoviska VaK byla známa  a byla zapracována do PD.

e) výčet a závěry provedených průzkumů a rozborů – geologický průzkum, hydrogeologický

průzkum, stavebně historický průzkum, apod – byl proveden HG průzkum v jižní části stavby

vodovodu – RNDr. Romanem Vybíralem, v severní části výstavby bylo využito znalostí z

výstavby BD a kanalizace. Dále výškopisné zaměření na místě stavby Geodézie Hradiště s.r.o.

f) ochrana území podle jiných právních předpisů - stavba nespadá do uvedené kategorie

V území se nachází stávající inženýrské sítě s ochrannými pásmy , a to :

jednotná kanalizace – ochranné pásmo 1,5 m

vodovod – ochranné pásmo 1,5 m

STL plynovod – ochranné pásmo 1,0 m

kabelové vedení NN – ochranné pásmo 1,0 m

kabelové vedení VN – ochranné pásmo 1,0 m

g) poloha vzhledem k záplavovému území, poddolovaném u území apod – stavba nespadá do

uvedených území

h) vliv na okolní stavby a pozemky, ochrana okolí, vliv stavby na odtokové poměry v území -na

okolí a na pozemky nebude mít stavba podstatný vliv . Na staveništi se nebude pracovat

v brzkých nebo pozdních denních hodinách. Nedojde tedy  k rušení obyvatel a okolí v době

nočního klidu.

i) požadavky na asanace, demolice, kácení dřevin – nejsou

j) požadavky na maximální dočasné a trvalé zábory zemědělského půdního fondu nebo

pozemků určených k plnění funkce lesa – nejsou.

k) územně technické podmínky – zejména možnost napojení na stávající dopravní a technickou

infrastrukturu – stavba přeložky vodovodu začné demontáží stávající redukce 150/100 na

stávajícím vodovodu LT v ulici Víta Nejedlého a dopojení v ulici V Cestkách

l) věcné a časové vazby stavby, podmiňující, vyvolané, související investice – žádné nejsou

m) seznam pozemků podle katastrů nemovitostí, na kterých se stavba umísťuje a provádí,

seznam pozemků podle na kterých vznikne ochranné nebo bezpečnostní pásmo -

2439/1, 2439/13, 2446/2, 1992/77, 2446/7, 1992/159, 1992/95, 1992/186

<a id="tab-001"></a>
**TAB-001**
| Poznámka extrakce: sloupec 1 | Poznámka extrakce: sloupec 2 | Poznámka extrakce: sloupec 3 | Poznámka extrakce: sloupec 4 | Poznámka extrakce: sloupec 5 |
| --- | --- | --- | --- | --- |
| katastrální území | parc. č. | vlastník | druh pozemku | výměra |
| Mnichovo Hradiště | 2439/1 | Středočeský kraj, Zborovská 81/11, Smíchov,<br>15000 Praha 5 | Ostatní plocha | 17466 |
| Mnichovo Hradiště | 2439/13 | Město Mnichovo Hradiště, Masarykovo<br>náměstí 1, 295 01 Mnichovo Hradiště | Ostatní plocha | 70 |
| Mnichovo Hradiště | 2446/2 | Město Mnichovo Hradiště, Masarykovo<br>náměstí 1, 295 01 Mnichovo Hradiště | Ostatní plocha | 6754 |

data: dokumentace ke společnému povolení stavby strana: 3/16

Strana 3 (celkem 16)

---
<a id="s072-p004"></a>
### Zdrojová strana 4

VODOVOD ČERNÁ SILNICE VČETNĚ PROPOJENÍ V ULICI V CESTKÁCH

<a id="tab-002"></a>
**TAB-002**
| Poznámka extrakce: sloupec 1 | Poznámka extrakce: sloupec 2 | Poznámka extrakce: sloupec 3 | Poznámka extrakce: sloupec 4 | Poznámka extrakce: sloupec 5 |
| --- | --- | --- | --- | --- |
| Mnichovo Hradiště | 1992/77 | Česká republika - Státní pozemkový úřad,<br>Husinecká 1024/11a, Žižkov, 13000 Praha 3 | Orná půda | 204 |
| Mnichovo Hradiště | 2446/7 | Česká republika - Úřad pro zastupování státu<br>ve věcech majetkových, Rašínovo nábřeží<br>390/42, Nové Město, 12800 Praha 2 | Ostatní plocha | 3098 |
| Mnichovo Hradiště | 1992/159 | Město Mnichovo Hradiště, Masarykovo<br>náměstí 1, 295 01 Mnichovo Hradiště | Orná půda | 566 |
| Mnichovo Hradiště | 1992/95 | Město Mnichovo Hradiště, Masarykovo<br>náměstí 1, 295 01 Mnichovo Hradiště | Orná půda | 49218 |
| Mnichovo Hradiště | 1992/186 | Město Mnichovo Hradiště, Masarykovo<br>náměstí 1, 295 01 Mnichovo Hradiště | Orná půda | 1368 |

ochranná ani bezpečnostní pásma na ostatních pozemcích nevznikají

n) meteorologické a klimatické údaje -výstavba vodovodu a kanalizace bude prováděna v obci

Mnichovo Hradiště, v zastavěné jihozápadní části obce. Pozemek je mírně svažitý od severu k

jihozápadu, klimaticky je dle Atlasu podnebí ČSR (1958) území řazeno do mírně teplé oblasti B,

okrsek B3-mírně teplý, mírně vlhký, s mírnou zimou, pahorkatinový. Průměrná roční teplota je

8°C, úhrn srážek cca 550 mm/rok, výpar cca 470 mm/rok. Sněhová pokrývka leží v zájmové

oblasti obvykle od prosince do února, průměrně 45 dní v roce.

<a id="kapitola-012"></a>
#### B.2 Celkový popis stavby

B.2.1 Základní charakteristika stavby a jejího užívání

a) nová stavba nebo změna dokončené stavby, u změny stavby údaje o jejich současném

stavu, závěry stavebně technického, případně stavebně historického průzkumu a výsledky

statického posouzení nosných konstrukcí – jedná se o novostavbu, průzkumy nebyly prováděny

b) účel užívání stavby – zásobování pitnou vodou budoucí bytové domy – technická

infrastruktura

c) trvalá nebo dočasná stavba – jedná se o stavbu trvalou

d) informace o vydaných rozhodnutích o povolení vyjímky z technických požadavků na stavby z

technických požadavků zabezpečujících bezbariérové užívaní stavby – nebyly požadovány

e) informace o tom, zda a v jakých částech dokumentace jsou zohledněny podmínky závazných

stanovisek dotčených orgánů – nebyly požadovány

f) ochrana stavby podle jiných právních předpisů - stavba nespadá do uvedené kategorie

g) navrhované parametry stavby –

výstavba : vodovodní řad LT 150 : délka vodovodu – 777,3 + 11 m , délka přípojky LT 100 12 m

demolice : demontáž vodovodu PVC 110 – 52,8 m, demontáž vodoměrné šachty - stávající

uliční vodovod PVC D110, spolu s chráničkou bude zrušen s postupující výstavbou. Současná

vodoměrná šachta bude ubourána do úrovně hrubé podlahy (minus 2,0 m) a zasypána

data: dokumentace ke společnému povolení stavby strana: 4/16

Strana 4 (celkem 16)

---
<a id="s072-p005"></a>
### Zdrojová strana 5

VODOVOD ČERNÁ SILNICE VČETNĚ PROPOJENÍ V ULICI V CESTKÁCH

zhutnitelným štěrkovitým materiálem.

h) základní bilance stavby – potřeby a spotřeby médií a hmot, hospodaření s dešťovou vodou,

celkové produkované množství a druhy odpadů a emisí, třída energetické náročnosti budov

apod

Bilance zemních prací vodovod

výkopy rýh                                                    1350 m3

obsypy, zásypy                                             400 m3

Potřeba hmot

potřeba betonu pro opěrné bloky                  7,5 m3

Hospodaření s dešťovou vodou – dešťová voda bude lividována jako doposud zásakem v místě

stavby.

Stavba nevyžaduje potřebu energií

Produkované odpady – užíváním stavby nebudou produkovány odpady

i) základní předpoklady výstavby – časové údaje o realizaci stavby, členění na etapy – stavba

bude realizována po vyřízení všech potřebných povolení a dokončena do konce roku 2023.

j) orientační náklady stavby – vodovod    -  12.000.000 Kč (+ 50.000 demontáže potrubí)

B.2.2. Bezpečnost při užívání stavby - Bezpečnost při užívání stavby - Veškerá technická

zařízení  umístěná  v rámci  projektu musí  splňovat požadavky  platných  předpisů  a  norem  –

tato  zařízení  musí  být  schválena  pro užívání v ČR.  Veškerá technická zařízení musí být

zbudována resp. osazena odborně způsobilými osobami. Stavba kanalizace bude užívána na

základě kolaudačního souhlasu. Vlastník stavby bude bezpečnost užívání stavby zajišťovat

pravidelnými revizemi oprávněnými osobami - dle zvláštních právních předpisů –viz §119 SZ

č.183/2006 Sb. ve znění zák. č. 350/2012 Sb.

B.2.3. Základní charakteristika objektů

<a id="kapitola-013"></a>
#### Před započetím zemních prací zajistí investor u příslušných správců přesné vytýčení

<a id="kapitola-014"></a>
#### podzemních sítí vyskytujících se na trase stavby. Zákres podzemních vedení je pouze

informativní. Při výstavbě je nutno dodržet  min. vzdálenosti dle ČSN 73 6005. Výkopy je nutno

řádně zabezpečit proti vstupu nepovolaných osob a zajistit osvětlení překážek.

<a id="kapitola-015"></a>
#### VODOVOD

Potrubí vodovodu z tvárné litimy bude tř. Class 64 pro TLT DN150/200 dle ČSN EN 545. Vnější

ochrana je navržená se zinkovo-hliníkovým povlakem s krycí vrstvou (Zinek-Plus), vnitřní

ochrana cementovou výstelkou. Betonové opřené bloky budou na všech lomových bodech trasy

– v místech vložených kolen a T- kusů. . Provedeny budou z prostého betonu C30/35

do pomocného bednění. Veškeré armatury a tvarovky budou provedeny uvnitř i vně těžkou

protikorozní povrchovou ochranou práškovým epoxidem dle směrnic GSK-RAL-GZ-662 min. tl.

250 ŋm v provedení v modrém odstínu. Budou provedeny v tlakové řadě PN16.

Pro ochranu potrubí při zemních pracích bude do výkopu uložena výstražná folie bílé barvy

podle ČSN EN12613 a ČSN736006.

Přípojky pro 4 BD budou provedeny celolitinovým navrtávacím pasem pro litinové potrubí 150/2“

s vnitřním závitem (HAWLE HACOM).

PODZEMNÍ INŽENÝRSKÉ SÍTĚ

V dostatečném časovém předstihu před prováděním stavebních prací na vodovodu je

bezpodmínečně nutné provést vytýčení veškerých stávajících podzemních inženýrských sítí

jejich příslušnými správci.

BEZPEČNOST PRÁCE

data: dokumentace ke společnému povolení stavby strana: 5/16

Strana 5 (celkem 16)

---
<a id="s072-p006"></a>
### Zdrojová strana 6

VODOVOD ČERNÁ SILNICE VČETNĚ PROPOJENÍ V ULICI V CESTKÁCH

Při provádění stavebních a montážních prací je nutno dodržovat veškerá opatření pro dodržení

bezpečnosti práce a ochrany zdraví na stavbě ( Zákon č. 362/2005 Sb. a Zákon č. 309/2006

Sb.  a Nařízení vlády 591/2006 Sb. o bližších minimálních požadavcích na bezpečnost a

ochranu zdraví při práci na staveništích). Při výstavbě je nutné dodržovat všechny platné právní

předpisy (vyhlášky, nařízení, závazné normy apod.) v oblasti bezpečnosti práce, technických

zařízení a v oblasti ochrany zdraví.

Veškeré stavební a montážní práce  budou provedeny oprávněnou právnickou nebo fyzickou

osobou dle platných ČSN a po provedení doloženy revizní zprávou, příp. atesty výrobků na

stavbě použitých.

B.2.4. Základní charakteristika technických a technologických zařízení, zásady řešení zařízení,

potřeby a spotřeby rozhodujích médií – na stavbě se nevyskytují

B.2.5. Zásady požárně bezpečnostního řešení – Stavba vodního díla nevyžaduje požadavky

PBŘ.

B.2.6. Hygienické požadavky na stavby, požadavky na pracovní a komunální prostředí

Zásady řešení parametrů stavby, zásady řešení vlivu stavby na okolí -vibrace, hluk, prašnost

apod.

Požadavky na ochranu zdraví, zdravých životních podmínek a životního prostředí jsou obecně

stanoveny v § 10 vyhl.č. 268/2009 Sb. ve znění pozdějších předpisů. Projektovaná splašková

kanalizace je s těmito požadavky v souladu; ve stavbě nejsou použity materiály, které by

uvolňovaly látky nebezpečné pro zdraví a životy osob a zvířat a pro rostliny; dále emise

nebezpečných záření, zejména ionizujících; nepříznivých účinků elektromagnetického záření.

Stavba bude  provedena tak, aby neohrožovala životní prostředí nad limity obsažené v jiných

právních předpisech zejména následkem přítomnosti nebezpečných částic v ovzduší; znečištění

vzduchu,  povrchových  nebo  podzemních  vod  a  půdy;  nedostatečného  zneškodňování

odpadních vod a kouře; nevhodného nakládání s odpady; výskytu vlhkosti ve stavebních

konstrukcích nebo na povrchu stavebních konstrukcí uvnitř staveb; nedostatečných tepelně

izolačních a zvukoizolačních  vlastností podle charakteru užívaných místností; nevhodných

světelně technických vlastností.  Stavba nebude prováděna v brzkých ranních  a pozdních

odpoledních hodinách. Při provádění stavby dojde ke zvýšení míry hluku i prašnosti. Vhodnou

volbou zhotovitele stavby lze tyto negativní vlivy minimalizovat (volba strojů, termínu provádění,

kropení, atd.) Kanalizace slouží ke zlepšení podmínek životního prostředí. Během výstavby

dojde dočasně ke zhoršení životního prostředí. Tento vliv nelze vyloučit, protože pro zhotovení

stavby je nutné provést  zemní práce otevřeným výkopem. Vhodný výběr zhotovitele, časovým

harmonogramem provádění a vhodnou volbou mechanizačních prostředků lze tyto nepříznivé

vlivy částečně eliminovat.

B.2.7. Zásady ochrany stavby před negativními účinky vnějšího prostředí

a) protipovodňová opatření – nebudou prováděny

b) ostatní účinky – vliv poddolování, výskyt metanu apod – území se nenachází v uvedených

lokalitách

<a id="kapitola-016"></a>
#### B.3 Připojení na technickou infrastrukturu

a)  napojovací místa  na  stávající technickou  infrastrukturu,  přeložky,  křížení  se  stavbami

technické a dopravní infrastruktury a souběhy s nimi v případě, kde je stavba umístěna v

ochranném pásmu stavby technické nebo dopravní infrastruktury – stavba vodovodu bude

napojena na stávající vodovod – viz situace C3

b) připojovací parametry, výkonové kapacity a délky – celková délka vodovodu 777,3 m + 11m

odbočky zóna B , délka přípojky LT 100 12 m.

<a id="kapitola-017"></a>
#### B.4 Dopravní řešení

a) popis dopravního řešení, včetně bezbariérového opatření pro přístupnost  a užívání stavby

osobami se sníženou schpností pohybu nebo orientace - Stavba bude přístupná z místních

komunikací v obci.

data: dokumentace ke společnému povolení stavby strana: 6/16

Strana 6 (celkem 16)

---
<a id="s072-p007"></a>
### Zdrojová strana 7

VODOVOD ČERNÁ SILNICE VČETNĚ PROPOJENÍ V ULICI V CESTKÁCH

b) napojení území na stávající dopravní infrastrukturu – území bude napojeno na krajskou

komunikaci II. tř. č. 610 a II. tř.č.268 a na místní komunikace IV. třídy.

<a id="kapitola-018"></a>
#### B.5 Řešení vegetace a souvisejích terénních úprav

V této PD nejsou řešeny.

<a id="kapitola-019"></a>
#### B.6 Popis vlivů stavby na životní prostředí a jeho ochranu

a) vliv na životní prostředí – ovzduší, hluk, voda, odpady, půda – Výstavba neklade žádné

mimořádné nároky na ochranu životního prostředí. Stavba bude prováděna šetrně s ohledem

na ochranu životního prostředí. Odpady vzniklé při realizaci výše uvedené akce musí být využity

nebo zneškodněny v souladu se zákonem. Při stavební činnosti je nutné dodržovat příslušné

právní normy na ochranu životního prostředí, související vyhlášky  a hygienické předpisy.

Jednotlivé negativní vlivy výstavby je nutné v maximální možné míře eliminovat. Pokud se jedná

o hluk při provádění stavebních prací, je nutno dodržovat nařízení vlády České republiky č.

88/2004 Sb. O ochraně zdraví před nepříznivými účinky hluku, kde jsou stanoveny nejvyšší

přípustné ekvivalentní hladiny hluku. Zhotovitel stavebních prací je povinen používat především

stroje a mechanismy v dobrém technickém stavu a jejichž hlučnost nepřekračuje hodnoty

stanovené v technickém osvědčení. Prašnost na staveništi a na výjezdu ze staveniště je nutné

omezit zkrápěním.  Pro ochranu vod před znečištěním ropnými látkami je nutno při realizaci

prací vhodným způsobem zabezpečit, aby nemohlo  dojít  ke  znečištěni podzemních  vod.

Případné úkapy ropných látek ze strojů musí být ihned zlikvidovány sorbčními materiály (např.

piliny, Fibriol, Vapex apod.) a dále pak je třeba provést likvidaci těchto materiálů (spálením ve

spalovně nebo uložením na příslušné skládce).

b) vliv na přírodu a krajinu – ochrana dřevin, ochrana památných stromů, ochrana rostlin a

živočichů, zachování ekologických  funkcí a vazeb v krajině  apod –  v lokalitě  stavby se

nenachází památné stromy, stavba proběhne v místní komunikaci.

c) vliv na soustavy chráněných území Natura 2000 – v lokalitě se taková území nenacházejí

d) způsob zohlednění podmínek závazného stanoviska posouzení vlivu záměru na životní

prostředí, je-li podkladem – není podkladem

e) v případě záměrů spadajích do režimu zákona o integrované prevenci základní parametry

způsobu naplnění závěrů o nejlepších dostupových technikách nebo integegrované povolení,

bylo-li vydáno – stavba nespadá do režimu zákona o integrované prevenci

f) navrhovaná ochranná a bezpečnostní pásma, rozsah omezení a podmínky ochrany podle

jiných právních předpisů – ochranná pásma IS budou na parcele stavby (1,5 m od líce potrubí –

VaK Mladá Boleslav)

V případě, že je dokumentace podkladem pro společné územní a stavební řízení s posouzením

vlivů na životní prostředí, neuvádí se informace k bodům a), b), d) a e), neboť jsou součástí

dokumentace vlivů záměru na životní prostředí

<a id="kapitola-020"></a>
#### B.7 Ochrana obyvatelstva

Splnění  základních  požadavků  z  hlediska  plnění  úkolů  ochrany  obyvatelstva  -Stavba

nevyžaduje vybudovat ochranná zařízení a speciální úpravy pro ochranu obyvatelstva.

<a id="kapitola-021"></a>
#### B.8 Zásady organizace výstavby

a) potřeby a spotřeby rozhodujích médií a hmot, jejich zajištění

Pro podsypy a zásypy štěrkopísek frakce 0-4, 0-20 a 0-30 - místní dodavatel , beton –

betonárna Mnichovo Hradiště, potrubí  – dodavatel prováděcí firmy.

b) odvodnění staveniště - výstavba IS proběhne v době sucha, kdy staveniště nebude nutné

odvodňovat.

data: dokumentace ke společnému povolení stavby strana: 7/16

Strana 7 (celkem 16)

---
<a id="s072-p008"></a>
### Zdrojová strana 8

VODOVOD ČERNÁ SILNICE VČETNĚ PROPOJENÍ V ULICI V CESTKÁCH

c) napojení staveniště na stávající dopravní a technickou infrastrukturu

Stavba bude napojena na místní komunikace v obci Mnichovo Hradiště. Prováděcí firma

vypracuje DIO.

d) vliv provádění stavby na okolní stavby a pozemky  -  na okolí a na pozemky nebude mít

stavba podstatný vliv .  Na staveništi se nebude pracovat v brzkých nebo pozdních denních

hodinách. Nedojde tedy  k rušení obyvatel a okolí v době nočního klidu. V průběhu stavby dojde

k dočasnému narušení faktoru pohody. Na staveništi se nepředpokládá s pracemi v brzkých

nebo pozdních denních hodinách. Nemělo by tedy dojít k rušení obyvatel obce v době nočního

klidu. Materiály potřebné pro výstavbu se budou dovážet přímo od dodavatelů nebo ze skladu

dodavatele nebo investora dle potřeby a průběhu výstavby ( nebudou dlouhodobě skladovány

na staveništi ). Výjezd ze staveniště bude pravidelně čištěn. Dopravní trasy v době výstavby

povedou z míst zdrojů materiálů a hmot veřejnými komunikacemi. Dopravní trasy pro dopravu

materiálů a hmot na staveniště z míst zdrojů dodavatele a na skládky lze stanovit po výběru

zhotovitele stavby a určení míst zdrojů  a skládek.  Zhotovitel stavebních prací je povinen

používat především stroje a mechanismy  v dobrém technickém stavu a jejichž hlučnost

nepřekračuje  hodnoty stanovené  v technickém  osvědčení. Při provozu  hlučných  strojů  v

místech, kde vzdálenost umístěného zdroje od okolní zástavby nesnižuje hluk na hodnoty

stanovené hygienickými předpisy, je nutno zabezpečit ochranu pasivní ( kryty, akustické zástěny

apod.). Investor bude  povinen zabezpečit provoz dopravních  prostředků produkujících  ve

výfukových plynech škodliviny v množství odpovídajícím platným vyhláškám a předpisům o

podmínkách provozu vozidel na pozemních komunikacích. Nasazování stavebních strojů se

spalovacími motory omezovat na nejmenší možnou míru.

e) ochrana okolí staveniště a požadavky na související asanace, demolice, kácení dřevin

Žádné z uvedených činností nebudou prováděny. Při provádění stavebních prací bude dbáno

zejména na:

1.) ochranu proti hluku a vibracím.

Veškeré výkopové práce budou v místě napojení ručně –  jinak pomocí mechanizace. Výkopy

hlubší než 1,2 m budou paženy.

2.) ochranu proti znečišťováni komunikací a nadměrné prašnosti

Vozidla vyjíždějící ze staveniště budou řádně očištěna, aby nedocházelo ke znečišťování ploch

a komunikací. Případné znečištění komunikace bude okamžitě odstraňováno.

3.) ochranu proti znečištění podzemních vod a povrchových vod a kanalizace

Po dobu výstavby je nutno při provádění stavebních a montážních prací a provozu zařízení

staveniště vhodným způsobem zabezpečit, aby nemohlo dojít ke znečištění podzemních a

povrchových vod. Jedná se zejména o vhodný způsob odvádění vod ze stavební činnosti,

provozních, a skladovacích ploch staveniště.

f) maximální dočasné a trvalé zábory pro staveniště

Vytěžená zemina bude uložena podél rýhy, po dokončení hutněných zásypů budou přebytečné

výkopky odvezeny na trvalou deponii.

g) požadavky na bezbariérové obchozí trasy – nejsou

h) maximální produkovaná množství  a druhy odpadů  a emisí při výstavbě, jejich likvidace

Povinností je zajištění přednostního využití odpadů před jejich odstraněním, přičemž recyklace

má přednost před jiným využitím odpadů. Bude dodržena hierarchie způsobů nakládání

s odpady dle § 3 zákona č. 541/2020 Sb., v platném znění.

Předně je třeba zajistit dokonalou separaci. Tím se myslí oddělení jednotlivých materiálových

složek. Nejprve skla, plastů, kovových konstrukcí, dřeva a dalších. Ty je možné zpracovávat

podle druhu. Následně pak beton, cihly, asfalt a další. Dále je třeba dbát na to, aby ve

zpracovávaných odpadech nebyly příměsi nebezpečných látek. A ty odpadní složky, které jsou

označeny jako nebezpečné odpady, je nutno likvidovat separátně a v souladu s předpisy.

Odpady vzniklé při realizaci uvedené akce musí být využity nebo zneškodněny v souladu se

data: dokumentace ke společnému povolení stavby strana: 8/16

Strana 8 (celkem 16)

---
<a id="s072-p009"></a>
### Zdrojová strana 9

VODOVOD ČERNÁ SILNICE VČETNĚ PROPOJENÍ V ULICI V CESTKÁCH

zákonem č. 541/2020 Sb., v platném znění, doklady budou předloženy ke kolaudaci. Odpady

vznikající při stavbě budou zařazeny podle postupu uvedeného ve vyhlášce č. 8/2021 Sb.,

Katalog odpadů. Likvidace odpadu musí být v souladu s platnou legislativou.

<a id="tab-003"></a>
**TAB-003**
| Poznámka extrakce: sloupec 1 | Poznámka extrakce: sloupec 2 | Poznámka extrakce: sloupec 3 | Poznámka extrakce: sloupec 4 |
| --- | --- | --- | --- |
| Kód odpadu | Název | Kategorie | Způsob likvidace |
| 15 01 06 | Směsné obaly | O | Recyklace |
| 15 01 01 | Papírové a lepenkové obaly | O | Recyklace |
| 15 01 04 | Kovové obaly | O | Recyklace, odvoz – sběrný dvůr |
| 15 01 06 | Směsné obaly | O | Recyklace |
| 17 05 04 | Zemina vytěžená s kameny | O | Deponie |
| 17 09 04 | Směsný stavební odpad a<br>demoliční odpady<br>neuvedené pro čísly<br>170901, 170902, 170903 | O | Recyklace, odvoz na skládku k tomu<br>určenou |
| 17 06 04 | Izolační materiály netoxické<br>– neuvedené pod čísly 17 06<br>01 a 17 06 03 | O | Recyklace, odvoz na skládku k tomu<br>určenou |
| 17 02 01 | Dřevo | O | Odvoz na skládku k tomu určenou |
| 15 01 02 | Plastové obaly | O | recyklace |
| 08 01 21,<br>08 01 99 | Zbytky barev a ředidel | O | Likvidace specializovanou firmou |

i) bilance zemních prací, požadavky na přísun nebo deponie zemin

Bilance zemních prací vodovod

výkopy rýh                                                    1350 m3

obsypy, zásypy                                             400 m3

Potřeba hmot

potřeba betonu pro opěrné bloky                  7,5 m3

Výkopek bude uložen podél rýh a zpětně použit v zásypu potrubí, přebytečný výkopek bude

odvezen na trvalou deponii v obci.

j) Výstavba neklade žádné mimořádné nároky na ochranu životního prostředí. Stavba bude

prováděna šetrně s ohledem na ochranu životního prostředí. Odpady vzniklé při realizaci výše

uvedené akce musí být využity nebo zneškodněny v souladu se zákonem. Při stavební činnosti

je nutné dodržovat příslušné právní normy na ochranu životního prostředí, související vyhlášky

a hygienické předpisy. Jednotlivé negativní vlivy výstavby je nutné v maximální možné míře

eliminovat. Pokud se jedná o hluk při provádění stavebních prací, je nutno dodržovat nařízení

vlády České republiky č. 272/2011 Sb. O ochraně zdraví před nepříznivými účinky hluku, kde

jsou stanoveny nejvyšší přípustné ekvivalentní hladiny hluku. Zhotovitel stavebních prací je

povinen používat především stroje a mechanismy v dobrém technickém stavu a jejichž hlučnost

nepřekračuje hodnoty stanovené v technickém osvědčení. Prašnost na staveništi a na výjezdu

ze staveniště je nutné omezit zkrápěním. Pro ochranu vod před znečištěním ropnými látkami je

nutno při realizaci prací vhodným způsobem zabezpečit, aby nemohlo dojít ke znečištění

podzemních vod. Případné úkapy ropných látek ze strojů musí být ihned zlikvidovány sorbčními

materiály (např. piliny, Fibriol, Vapex apod.) a dále pak je třeba provést likvidaci těchto materiálů

data: dokumentace ke společnému povolení stavby strana: 9/16

Strana 9 (celkem 16)

---
<a id="s072-p010"></a>
### Zdrojová strana 10

VODOVOD ČERNÁ SILNICE VČETNĚ PROPOJENÍ V ULICI V CESTKÁCH

(spálením ve spalovně nebo uložením na příslušné skládce).

k) zásady bezpečnosti a ochrany zdraví při práci na staveništi, posouzení potřeby koordinátora

bezpečnosti a ochrany zdraví při práci podle jiných právních předpisů

Stavební práce budou prováděny v souladu s ustanoveními příslušné legislativy jako např.

nařízení vlády č. 591/2006 Sb. o bližších minimálních požadavcích na bezpečnost a ochranu

zdraví při práci na staveništích a nařízení vlády č. 362/2005 Sb. o bližších požadavcích na

bezpečnost a ochranu zdraví při práci na pracovištích s nebezpečím pádu z výšky nebo do

hloubky. Každý pracovník zúčastněný na výstavbě musí být průkazně seznámen a proškolen s

bezpečnostními předpisy.

Výkopy hlubší než 1,2 m budou paženy, dále budou ohrazeny nebo zakryty.

l) úpravy pro bezbariérové užívání výstavbou dotčených staveb

Uvedená stavba nespadá do této kategorie staveb.

m) zásady pro dopravně inženýrské opatření - Dopravní inženýrská opatření nejsou

navrhována, DIO bude řešeno prováděcí firmou stavby.

n) stanovení speciálních podmínek pro provádění stavby (provádění stavby za provozu,

opatření proti účinkům vnějšího prostředí při výstavbě apod). - Uvedená stavba žádné spec.

podmínky nevyžaduje.

o) postup výstavby, rozhodující dílčí termíny

Vytýčení stávajících inřenýrských sítí, vytýčení trasy stavby, provedení výkopových rýh,

podsypy,  pokládka potrubí, dále zásypy  a hutnění, uvedení povrchů do původního stavu.

Stavba bude realizována do konce roku 2024.

<a id="kapitola-022"></a>
#### B.9 Celkové vodohospodářské řešení

Dešťové vody jsou likvidovány vsakem v místě stavby jako doposud.

data: dokumentace ke společnému povolení stavby strana: 10/16

Strana 10 (celkem 16)


## Pokrytí zdrojových jednotek

| unit_id | Source locator | Output anchor/file | Status | Unpreserved fraction u_i | Basis | Limitation / review_id |
| --- | --- | --- | --- | --- | --- | --- |
| S072-U001 | strana 1 | [Přepis](#s072-p001) | complete | 0 | původní text / buňky / obrazové odkazy | bez zjištěné mezery |
| S072-U002 | strana 2 | [Přepis](#s072-p002) | complete | 0 | původní text / buňky / obrazové odkazy | bez zjištěné mezery |
| S072-U003 | strana 3 | [Přepis](#s072-p003) | complete | 0 | původní text / buňky / obrazové odkazy | bez zjištěné mezery |
| S072-U004 | strana 4 | [Přepis](#s072-p004) | complete | 0 | původní text / buňky / obrazové odkazy | bez zjištěné mezery |
| S072-U005 | strana 5 | [Přepis](#s072-p005) | complete | 0 | původní text / buňky / obrazové odkazy | bez zjištěné mezery |
| S072-U006 | strana 6 | [Přepis](#s072-p006) | complete | 0 | původní text / buňky / obrazové odkazy | bez zjištěné mezery |
| S072-U007 | strana 7 | [Přepis](#s072-p007) | complete | 0 | původní text / buňky / obrazové odkazy | bez zjištěné mezery |
| S072-U008 | strana 8 | [Přepis](#s072-p008) | complete | 0 | původní text / buňky / obrazové odkazy | bez zjištěné mezery |
| S072-U009 | strana 9 | [Přepis](#s072-p009) | complete | 0 | původní text / buňky / obrazové odkazy | bez zjištěné mezery |
| S072-U010 | strana 10 | [Přepis](#s072-p010) | complete | 0 | původní text / buňky / obrazové odkazy | bez zjištěné mezery |

## Místa k revizi

V uvedeném rozsahu kontrol nebyla zjištěna otevřená chyba. Nejde o potvrzení lidské revize.

## Protokol metod, ověření a omezení

Použity byly lokální metody: PDFium pro text a obrazy, pdfplumber pro rozvržení a tabulky, Microsoft Word pro ověřené DOCX stránky, Windows.Media.Ocr pro vybrané skeny a čtení CFB/Word struktur pro staré DOC podle skutečného formátu zdroje. Ne všechny metody se týkají každého souboru. Celostránkové rastrové snímky nebyly ukládány. Původní fotografie složené z PDF dlaždic jsou rekonstruovány z původních obrazových objektů bez vykreslování stránky. Pokusy, parametry a selhání jsou zachované mimo dodaný balíček.


| Method run | Tool / version | Scope | Time (s) | Result / output use |
| --- | --- | --- | --- | --- |
| LOCAL-S072_layout | pdfplumber / 0.11.9 | all / source-evidence scope | 1.8690300001762807 | ok / True |
| LOCAL-S072_native | pypdfium2 / 5.14.0 | all / source-evidence scope | 0.06168249994516373 | ok / True |

## Sources and their roles

| Source / identification | Role | Contribution to this document | Authority / limitations |
| --- | --- | --- | --- |
| [Původní zdroj](<C:/Users/kater/Downloads/jihozapadni-mesto-prilohy.zip>) — P04 Přehled projektů v území/7_BD v cestkach, Stavokombinat invest, 2023/PD_vodovod_CERNA_SILNICE/PD_vodovod_ČERNÁ_SILNICE/TZ A,B.pdf | Obsahový zdroj | Text, tabulky a grafika | Původní soubor; SHA-256 v metadatech. |
| [document-converting](C:/Users/kater/repo/urbiq/urbiq-AI-LAB/urbiq-skills/document-converting/SKILL.md) | Pravidla převodu | Režim, obrazy, lokátory a kontrola | v261027-v11; kandidátní skill. |
| Potvrzení uživatele v aktuálním chatu | Rozsah a režim | full_transcription všech vstupů | Přesná URL není dostupná. |
| markdown-metadata-standards; date-versioned-artifacts | Procedurální pravidla | Metadata a nové verzované balíčky | Nejsou důkazem správnosti zdrojového obsahu. |
