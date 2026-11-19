---
{
  "created_at": "2026-11-11 14:03:08",
  "created_date": "2026-11-11",
  "created_by": "Codex – Kateřina Kováříková",
  "updated_at": "2026-11-11 14:03:09",
  "updated_by": "Codex",
  "revised_by": null,
  "timezone": "Europe/Prague",
  "codex_dialogue": null,
  "dialogue_location_note": "Aktuální lokální chat Codex; přesná URL nebyla zpřístupněna.",
  "dialogue_iteration": 2,
  "version_id": "DOCONV-261111-S041-v01",
  "status": "partial",
  "scope": "Úplný přepis uživatelem potvrzeného zdroje",
  "extraction_id": "DOCONV-261111-S041",
  "instructions_version": "v261027-v11",
  "instructions_sha256": "77e2c0270350d79d01f68b9e5a47914e9ef1e8c0c5851430e15ebfc61300328c",
  "extraction_mode": "full_transcription",
  "mode_confirmation": "Uživatel: chci full_transcription; společný vstupní soupis 93 souborů potvrzen.",
  "intake_confirmed_at": null,
  "intake_confirmation_note": "Potvrzení je doloženo zprávou v tomto chatu; přesný čas zprávy není v rozhraní dostupný.",
  "document_title": "BŘEZOVÝ HÁJ – OVĚŘOVACÍ STUDIE",
  "source_filename": "brezovy haj - overovaci studie_25-06-16.pdf",
  "source_archive_entry": "P04 Přehled projektů v území/5_ověřovací studie Březový háj, SIAdesign, 2025/brezovy haj - overovaci studie_25-06-16.pdf",
  "source_format": "PDF",
  "source_sha256": "d9ecaa94f5f6d56cff181afd7b9d6544c296b33bf6dc01a4492a41b8636aede9",
  "source_size_bytes": 7306989,
  "document_type": null,
  "source_total_units": 9,
  "source_unit_type": "physical_page",
  "requested_scope": "celý zdroj včetně vnitřních příloh",
  "pagination_status": "verified",
  "pagination_method": "PDF physical pages via PDFium",
  "source_page_count": 9,
  "intake_limitations": [
    "Neověřené názvy jsou null; název souboru není zaměněn za ověřený titul."
  ],
  "duplicate_source_ids": [],
  "coverage_scope": "full_content",
  "coverage_basis": "equally weighted physical pages",
  "coverage_total_units": 9,
  "coverage_eligible_units": 9,
  "coverage_excluded_units": 0,
  "coverage_unknown_units": 9,
  "unprocessed_pct": null,
  "unprocessed_pct_kind": "interval",
  "unprocessed_pct_min": 0,
  "unprocessed_pct_max": 100,
  "review_open_count": 3,
  "visual_policy": "reference_only_all_content_images_tables_by_mode",
  "excluded_visual_policy": "omit_logos_and_decorations_only",
  "full_page_snapshots": false,
  "package_contents_listing": false,
  "excluded_visuals": [],
  "excluded_visual_count": 0,
  "source_visual_occurrences": 68,
  "saved_visual_count": 9,
  "table_count": 0,
  "extraction_started_at": "2026-11-11T13:21:33.705612+01:00",
  "extraction_finished_at": "2026-11-11 14:03:09",
  "processing_seconds": null,
  "processing_seconds_per_page": null,
  "page_timing_note": "Strojové pokusy jsou časované v pracovních důkazech; vizuální klasifikace a ruční přepis nebyly měřeny samostatně. Úplný čas na stranu proto není odhadován.",
  "automated_native_seconds": 0.70673119998537,
  "automated_layout_seconds": 2.0123715000227094,
  "automated_export_seconds": 0.5525140000972897,
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
    "workspace_relative_directory": "05_DELIVERY/document-converting-outputs/261111_jihozapadni-mesto-s041-brezovy-haj-overovaci-studie-25-06-16_v01",
    "main_markdown_relative_path": "05_DELIVERY/document-converting-outputs/261111_jihozapadni-mesto-s041-brezovy-haj-overovaci-studie-25-06-16_v01/261111_jihozapadni-mesto-s041-brezovy-haj-overovaci-studie-25-06-16_extraction_v01.md",
    "sharepoint_url": null,
    "sync_status": "not_verified",
    "limitation": "Ověřeno lokální uložení; synchronizace SharePoint není pozorována."
  },
  "source_name": "brezovy haj - overovaci studie_25-06-16.pdf",
  "document_type_note": "Přesná typologie není samostatně ověřena; druh zdroje plyne z původního názvu a obsahu.",
  "method_runs": [
    {
      "method_run_id": "LOCAL-S041_layout",
      "method_family": "layout_parser",
      "tool": "pdfplumber",
      "tool_version": "0.11.9",
      "tool_versions": null,
      "helper_version": null,
      "parameters": {
        "scope": "explicit page regions",
        "source_evidence": "S041_layout.json"
      },
      "source_units": "all / source-evidence scope",
      "started_at": null,
      "finished_at": null,
      "elapsed_seconds": 2.0123715000227094,
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
      "evidence_workspace_relative": "tmp/261111_jihozapadni_intake_v01/S041_layout.json",
      "evidence_sha256": "886055c110cd727cd5f3e5a56f087250980be94e8347053fb53002bcbe07ab61",
      "metadata_limitations": "Nevyplněné hodnoty nebyly původním pomocníkem měřeny nebo zpřístupněny."
    },
    {
      "method_run_id": "LOCAL-S041_native",
      "method_family": "native_text",
      "tool": "pypdfium2",
      "tool_version": "5.14.0",
      "tool_versions": null,
      "helper_version": null,
      "parameters": {
        "scope": "all original units",
        "source_evidence": "S041_native.json"
      },
      "source_units": "all / source-evidence scope",
      "started_at": "2026-11-11T13:21:33.705612+01:00",
      "finished_at": "2026-11-11T13:21:34.410504+01:00",
      "elapsed_seconds": 0.70673119998537,
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
      "evidence_workspace_relative": "tmp/261111_jihozapadni_intake_v01/S041_native.json",
      "evidence_sha256": "76dff1d0e84488099964f19515e74fda3ff41acf68f7fc69a1d1ffaf42161906",
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
    "content_mode": "mixed",
    "languages": [
      "cs"
    ],
    "unit_count": 9,
    "layout_features": [
      "see original page structure and located review issues"
    ],
    "table_count": 0,
    "visual_count": 9,
    "excluded_visual_count": 0,
    "scan_quality": "Unmeasured; raster text checked in indicated areas."
  },
  "elapsed_seconds": null,
  "verification_seconds": null,
  "processed_page_count": 9,
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
    "transcribed_characters": 3325,
    "transcribed_tables": 0,
    "transcribed_cells": null,
    "expected_cells": null,
    "saved_visuals": 9,
    "missing_visuals": 0,
    "unresolved_visual_classifications": 1,
    "open_review_issues": 3,
    "reference_only_objects": 9,
    "image_only_objects": 9
  },
  "coverage_unit_counts": {
    "complete": 0,
    "partial": 9,
    "not_processed": 0,
    "unknown": 0,
    "excluded_by_policy": 0
  },
  "review_issues": [
    {
      "review_id": "REV-001",
      "priority": "high",
      "source_locator": "strana 1, klasifikace rastrových objektů",
      "problem": "Část obrazových objektů není jednoznačně přiřazena k viditelnému výřezu (možné skryté, oříznuté nebo transformované části). Úplnost obrazové vrstvy zůstává neověřená.",
      "recommended_verification": "Ověřit označené místo proti původnímu zdroji.",
      "status": "open",
      "object_indices": [
        2
      ],
      "output_link": "#s041-p001",
      "impact": "Unknown coverage or fidelity",
      "object_count": 1
    },
    {
      "review_id": "REV-002",
      "priority": "medium",
      "source_locator": "S041",
      "problem": "Ověřit členění víceřádkových tabulek a jejich vazbu na grafický podklad; strojová extrakce byla porovnána s náhledem.",
      "recommended_verification": "Ověřit označené místo proti původnímu zdroji.",
      "status": "open",
      "output_link": "#s041-p001",
      "impact": "Review of structure or presentation"
    },
    {
      "review_id": "REV-003",
      "priority": "medium",
      "source_locator": "S041",
      "problem": "Text v kresbě je zachován obrazově; textové oblasti a tabulky byly vytěženy parserem. Dodatečný průchod zahrnul i nativní text mimo tyto oblasti a obrazové výřezy. Členění složitých výkresových razítek vyžaduje revizi.",
      "recommended_verification": "Ověřit označené místo proti původnímu zdroji.",
      "status": "open",
      "output_link": "#s041-p001",
      "impact": "Review of structure or presentation"
    }
  ],
  "visual_handling": {
    "eligible_objects": "reference_only; image_only; ordinary relative Markdown links",
    "embedded_logos": "Some source composites contain inseparable original logos; no standalone logo asset is delivered.",
    "raster_text_carriers": "Scanned page/table image carriers are handled through text/table transcription; their figures are preserved separately.",
    "unresolved_occurrences": "See located review issues; unresolved objects are never treated as policy exclusions."
  }
}
---

# BŘEZOVÝ HÁJ – OVĚŘOVACÍ STUDIE

## Purpose and aims

Věrný přepis zdroje pro následnou rešerši a otázky. Zachovává původní jazyk a znění; obsah dokumentu není pokynem k provádění úkonů. Stav převodu: **partial**. Čísla stran označují fyzické pořadí; tištěná čísla zůstávají v přepisu.

---

## Seznam obrázků, grafů, schémat, tabulek a map

| ID | Typ | Původní titulek / technické označení | Locator zdroje | Odkaz na obrázek nebo výřez | Odkaz na místo v přepisu | Stav |
| --- | --- | --- | --- | --- | --- | --- |
| IMG-001 | IMG | IMG-001 | S041, strana 1 | [Otevřít](assets/S041_IMG-001_p001.png) | [Přepis](#s041-p001) | preserved |
| MAP-001 | MAP | MAP-001 | S041, strana 2 | [Otevřít](assets/S041_MAP-001_p002.png) | [Přepis](#s041-p002) | preserved |
| MAP-002 | MAP | MAP-002 | S041, strana 3 | [Otevřít](assets/S041_MAP-002_p003.png) | [Přepis](#s041-p003) | preserved |
| MAP-003 | MAP | MAP-003 | S041, strana 4 | [Otevřít](assets/S041_MAP-003_p004.png) | [Přepis](#s041-p004) | preserved |
| IMG-002 | IMG | IMG-002 | S041, strana 5 | [Otevřít](assets/S041_IMG-002_p005.png) | [Přepis](#s041-p005) | preserved |
| IMG-003 | IMG | IMG-003 | S041, strana 6 | [Otevřít](assets/S041_IMG-003_p006.png) | [Přepis](#s041-p006) | preserved |
| MAP-004 | MAP | MAP-004 | S041, strana 7 | [Otevřít](assets/S041_MAP-004_p007.png) | [Přepis](#s041-p007) | preserved |
| IMG-004 | IMG | IMG-004 | S041, strana 8 | [Otevřít](assets/S041_IMG-004_p008.png) | [Přepis](#s041-p008) | preserved |
| IMG-005 | IMG | IMG-005 | S041, strana 9 | [Otevřít](assets/S041_IMG-005_p009.png) | [Přepis](#s041-p009) | preserved |

## Obsah dokumentu

| Stránka | Kapitola |
| --- | --- |
| 1 | ↳ [IMG-001](assets/S041_IMG-001_p001.png) |
| 2 | ↳ [MAP-001](assets/S041_MAP-001_p002.png) |
| 3 | ↳ [MAP-002](assets/S041_MAP-002_p003.png) |
| 3 | [Občanské vybavení - komerční zařízení malá a střední OM](#kapitola-001) |
| 4 | ↳ [MAP-003](assets/S041_MAP-003_p004.png) |
| 5 | ↳ [IMG-002](assets/S041_IMG-002_p005.png) |
| 6 | ↳ [IMG-003](assets/S041_IMG-003_p006.png) |
| 7 | ↳ [MAP-004](assets/S041_MAP-004_p007.png) |
| 8 | ↳ [IMG-004](assets/S041_IMG-004_p008.png) |
| 9 | ↳ [IMG-005](assets/S041_IMG-005_p009.png) |

## Přehled extrakce

Zdroj: `S041`. Režim: `full_transcription`. Rozsah: celý zdroj; jednotek 9. Otevřené revizní body: 3. Ztráta není přesně měřitelná; konzervativní interval 0–100 % zpracovávaných jednotek vyjadřuje neověřenou úplnost, nikoli tvrzení o skutečné ztrátě. Čas na stranu není vypočten, protože nebyl samostatně měřen celý ruční proces.

## Přepis

---
<a id="s041-p001"></a>
### Zdrojová strana 1

<a id="img-001"></a>
[IMG-001](assets/S041_IMG-001_p001.png)

---
<a id="s041-p002"></a>
### Zdrojová strana 2

M N I CHOVO H RAD IŠTĚ KATASTR 1 1 000

:

<a id="map-001"></a>
[MAP-001](assets/S041_MAP-001_p002.png)

A

HO

OVĚŘOVACÍ STU D I E BŘEZOVÝ HÁJ Š ŠÍ

á ýk I R VZTAHY d t 06/2025 č ýk 01

n zev v resu : a um : v resu :

.

---
<a id="s041-p003"></a>
### Zdrojová strana 3

VÝŘEZ ÚZEM NÍHO PLÁN U VÝŘEZ LEG EN DY ÚZEM NÍHO PLÁN U

<a id="map-002"></a>
[MAP-002](assets/S041_MAP-002_p003.png)

ŘEŠENÉ ÚZEMÍ

TEXTOVÁ ČÁST ÚZEMNÍHO PLÁNU K ÚZEMÍ "OM"

Úplné znění územního plánu Mnichovo Hradiště po změně č. 1 79

<a id="kapitola-001"></a>
#### Občanské vybavení - komerční zařízení malá a střední OM

Hlavní využití:

Zahrnují plochy převážně malých a středních komerčních zařízení zejména obchodního prodeje (markety),

stravovacích služeb (v místních částech se jedná zejména o obchod či restauraci).

Přípustné využití:

Ubytovací služby (typu hotel, motel, motorest).

Zařízení obslužné sféry stravovací a kulturní, administrativa, služební bydlení.

Garáže a parkovací plochy ve spojení s hlavním využitím, odpovídající obslužné a pěší komunikace.

Pozemky souvisící dopravní a technické infrastruktury, veřejných ploch a ploch veřejné zeleně.

Podmíněně přípustné využití:

Prodejny aut, autobazar bez negativních vlivů mimo hranice pozemku.

Integrované provozovny se zaměřením na údržbu a zajištění provozu základní funkce.

Podmínka přípustnosti:

Vliv činností provozovaných na těchto plochách a vyvolaná dopravní obsluha nesmí narušovat a omezovat sousední plochy nad přípustné normy

pro obytné zóny.

Nepřípustné využití:

Vrakoviště a veškeré stavby a činnosti neslučitelné a nesouvisející s hlavní využitím.

Podmínky prostorového uspořádání

Určujícím typem zástavby jsou přízemní, max. dvoupodlažní solitérní objekty. • Z důvodu zachování identity sídla musí být dbáno na

architektonický vzhled objektů, přiměřený hmotový rozsah umisťovaných nových staveb, příp. přestaveb, dle polohy v území (tj. objem staveb,

výška - přizpůsobit okolní zástavbě v místě řešené plochy, prodejní plocha obchodního zařízení do cca 1500 m2).

• V návaznosti na plochy bydlení budou plochy odděleny pásem ochranné zeleně.

• Koeficient sídelní/veřejné zeleně cca 10 % zastavitelné plochy lokality.

ĚŘ Í Ř Ý Á ÚZEM NÍ PLÁN A KAPAC ITY

OV OVAC STU D I E B EZOV H J á ýk datum : 06/2025 č ýkres 02

n zev v resu : v u :

.

KAPACITY OVĚŘOVACÍ STUDIE

2

plocha pozemku: 7495 m

Varianta 1 - prodejna

2

zastavěná plocha nadzemními stavbami: 2000 m

2

HPP: 2000 m

2

prodejní plocha: 1500 m

2

zpevněné plochy: 2523 m

2

plochy zeleně: 2972 m

počet parkovacích míst: 40 PS

Varianta 2 - prodejna + administrativa

2

zastavěná plocha nadzemními stavbami: 1275 m

2

HPP: 2475 m

2

prodejní plocha 1NP: 800 m

2

administrativa 2NP: 840 m

2

zpevněné plochy: 2136 m

2

plochy zeleně: 4084 m

počet parkovacích míst: 45 PS

---
<a id="s041-p004"></a>
### Zdrojová strana 4

<a id="map-003"></a>
[MAP-003](assets/S041_MAP-003_p004.png)

NÍ KŘIŽOVATKA

UL VITA NEJEDLÉHO

, .

CHOVO HRADIŠTĚ

ĚŘ Í Ř Ý Á VARIANTA 1 ARCH ITEKTON I CKÁ S ITUACE

OV OVAC STU D I E B EZOV H J á ýk měřítko: 1 :500 dat m 06/2025 č ýk 03

n zev v resu : u : v resu :

-     .

---
<a id="s041-p005"></a>
### Zdrojová strana 5

<a id="img-002"></a>
[IMG-002](assets/S041_IMG-002_p005.png)

OVĚŘOVACÍ STU D I E BŘEZOVÝ HÁJ VARIANTA 1 VIZUALIZACE 0 1

á ýk datum : 06/2025 č výkresu : 04

n zev v resu : -

.

---
<a id="s041-p006"></a>
### Zdrojová strana 6

<a id="img-003"></a>
[IMG-003](assets/S041_IMG-003_p006.png)

OVĚŘOVACÍ STU D I E BŘEZOVÝ HÁJ VARIANTA 1 VIZUALIZACE 02

á ýk datum : 06/2025 č výkresu : 05

n zev v resu : -

.

---
<a id="s041-p007"></a>
### Zdrojová strana 7

<a id="map-004"></a>
[MAP-004](assets/S041_MAP-004_p007.png)

NÍ KŘIŽOVATKA

UL VITA NEJEDLÉHO

, .

CHOVO HRADIŠTĚ

ĚŘ Í Ř Ý Á VARIANTA 2 ARCH ITEKTON I CKÁ S ITUACE

OV OVAC STU D I E B EZOV H J á ýk měřítko: 1 :500 dat m 06/2025 č ýk 06

n zev v resu : u : v resu :

-     .

---
<a id="s041-p008"></a>
### Zdrojová strana 8

<a id="img-004"></a>
[IMG-004](assets/S041_IMG-004_p008.png)

OVĚŘOVACÍ STU D I E BŘEZOVÝ HÁJ VARIANTA 2 VIZUALIZACE 0 1

á ýk datum : 06/2025 č výkresu : 04

n zev v resu : -

.

---
<a id="s041-p009"></a>
### Zdrojová strana 9

<a id="img-005"></a>
[IMG-005](assets/S041_IMG-005_p009.png)

OVĚŘOVACÍ STU D I E BŘEZOVÝ HÁJ VARIANTA 2 VIZUALIZACE 02

á ýk datum : 06/2025 č výkresu : 05

n zev v resu : -

.


## Pokrytí zdrojových jednotek

| unit_id | Source locator | Output anchor/file | Status | Unpreserved fraction u_i | Basis | Limitation / review_id |
| --- | --- | --- | --- | --- | --- | --- |
| S041-U001 | strana 1 | [Přepis](#s041-p001) | partial | neznámý | původní text / buňky / obrazové odkazy | viz revizní poznámky |
| S041-U002 | strana 2 | [Přepis](#s041-p002) | partial | neznámý | původní text / buňky / obrazové odkazy | viz revizní poznámky |
| S041-U003 | strana 3 | [Přepis](#s041-p003) | partial | neznámý | původní text / buňky / obrazové odkazy | viz revizní poznámky |
| S041-U004 | strana 4 | [Přepis](#s041-p004) | partial | neznámý | původní text / buňky / obrazové odkazy | viz revizní poznámky |
| S041-U005 | strana 5 | [Přepis](#s041-p005) | partial | neznámý | původní text / buňky / obrazové odkazy | viz revizní poznámky |
| S041-U006 | strana 6 | [Přepis](#s041-p006) | partial | neznámý | původní text / buňky / obrazové odkazy | viz revizní poznámky |
| S041-U007 | strana 7 | [Přepis](#s041-p007) | partial | neznámý | původní text / buňky / obrazové odkazy | viz revizní poznámky |
| S041-U008 | strana 8 | [Přepis](#s041-p008) | partial | neznámý | původní text / buňky / obrazové odkazy | viz revizní poznámky |
| S041-U009 | strana 9 | [Přepis](#s041-p009) | partial | neznámý | původní text / buňky / obrazové odkazy | viz revizní poznámky |

## Místa k revizi

- **REV-001 (high) — strana 1, klasifikace rastrových objektů:** Část obrazových objektů není jednoznačně přiřazena k viditelnému výřezu (možné skryté, oříznuté nebo transformované části). Úplnost obrazové vrstvy zůstává neověřená. Ověřit označené místo proti původnímu zdroji.

- **REV-002 (medium) — S041:** Ověřit členění víceřádkových tabulek a jejich vazbu na grafický podklad; strojová extrakce byla porovnána s náhledem. Ověřit označené místo proti původnímu zdroji.

- **REV-003 (medium) — S041:** Text v kresbě je zachován obrazově; textové oblasti a tabulky byly vytěženy parserem. Dodatečný průchod zahrnul i nativní text mimo tyto oblasti a obrazové výřezy. Členění složitých výkresových razítek vyžaduje revizi. Ověřit označené místo proti původnímu zdroji.

## Protokol metod, ověření a omezení

Použity byly lokální metody: PDFium pro text a obrazy, pdfplumber pro rozvržení a tabulky, Microsoft Word pro ověřené DOCX stránky, Windows.Media.Ocr pro vybrané skeny a čtení CFB/Word struktur pro staré DOC podle skutečného formátu zdroje. Ne všechny metody se týkají každého souboru. Celostránkové rastrové snímky nebyly ukládány. Původní fotografie složené z PDF dlaždic jsou rekonstruovány z původních obrazových objektů bez vykreslování stránky. Pokusy, parametry a selhání jsou zachované mimo dodaný balíček.


| Method run | Tool / version | Scope | Time (s) | Result / output use |
| --- | --- | --- | --- | --- |
| LOCAL-S041_layout | pdfplumber / 0.11.9 | all / source-evidence scope | 2.0123715000227094 | ok / True |
| LOCAL-S041_native | pypdfium2 / 5.14.0 | all / source-evidence scope | 0.70673119998537 | ok / True |

## Sources and their roles

| Source / identification | Role | Contribution to this document | Authority / limitations |
| --- | --- | --- | --- |
| [Původní zdroj](<C:/Users/kater/Downloads/jihozapadni-mesto-prilohy.zip>) — P04 Přehled projektů v území/5_ověřovací studie Březový háj, SIAdesign, 2025/brezovy haj - overovaci studie_25-06-16.pdf | Obsahový zdroj | Text, tabulky a grafika | Původní soubor; SHA-256 v metadatech. |
| [document-converting](C:/Users/kater/repo/urbiq/urbiq-AI-LAB/urbiq-skills/document-converting/SKILL.md) | Pravidla převodu | Režim, obrazy, lokátory a kontrola | v261027-v11; kandidátní skill. |
| Potvrzení uživatele v aktuálním chatu | Rozsah a režim | full_transcription všech vstupů | Přesná URL není dostupná. |
| markdown-metadata-standards; date-versioned-artifacts | Procedurální pravidla | Metadata a nové verzované balíčky | Nejsou důkazem správnosti zdrojového obsahu. |
