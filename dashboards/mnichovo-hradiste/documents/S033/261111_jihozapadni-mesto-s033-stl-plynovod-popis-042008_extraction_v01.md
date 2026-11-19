---
{
  "created_at": "2026-11-11 14:03:07",
  "created_date": "2026-11-11",
  "created_by": "Codex – Kateřina Kováříková",
  "updated_at": "2026-11-11 14:03:07",
  "updated_by": "Codex",
  "revised_by": null,
  "timezone": "Europe/Prague",
  "codex_dialogue": null,
  "dialogue_location_note": "Aktuální lokální chat Codex; přesná URL nebyla zpřístupněna.",
  "dialogue_iteration": 2,
  "version_id": "DOCONV-261111-S033-v01",
  "status": "partial",
  "scope": "Úplný přepis uživatelem potvrzeného zdroje",
  "extraction_id": "DOCONV-261111-S033",
  "instructions_version": "v261027-v11",
  "instructions_sha256": "77e2c0270350d79d01f68b9e5a47914e9ef1e8c0c5851430e15ebfc61300328c",
  "extraction_mode": "full_transcription",
  "mode_confirmation": "Uživatel: chci full_transcription; společný vstupní soupis 93 souborů potvrzen.",
  "intake_confirmed_at": null,
  "intake_confirmation_note": "Potvrzení je doloženo zprávou v tomto chatu; přesný čas zprávy není v rozhraní dostupný.",
  "document_title": "Název objektu :",
  "source_filename": "STL_plynovod_popis_042008.DOC",
  "source_archive_entry": "P04 Přehled projektů v území/1_územní studie Skalní město, Štěrba 2009/STL_plynovod_popis_042008.DOC",
  "source_format": "OLE compound / probable legacy DOC",
  "source_sha256": "18aceb62c19634b21bdb41f24d7eb6642667b02c6caaa2669347163b075139ae",
  "source_size_bytes": 14336,
  "document_type": null,
  "source_total_units": null,
  "source_unit_type": "physical_page",
  "requested_scope": "celý zdroj včetně vnitřních příloh",
  "pagination_status": "unverified",
  "pagination_method": null,
  "source_page_count": null,
  "intake_limitations": [
    "Neověřené názvy jsou null; název souboru není zaměněn za ověřený titul.",
    "Stránkování DOC není ověřeno."
  ],
  "duplicate_source_ids": [],
  "coverage_scope": "full_content",
  "coverage_basis": "unknown physical pagination",
  "coverage_total_units": null,
  "coverage_eligible_units": null,
  "coverage_excluded_units": 0,
  "coverage_unknown_units": null,
  "unprocessed_pct": null,
  "unprocessed_pct_kind": "unknown",
  "unprocessed_pct_min": null,
  "unprocessed_pct_max": null,
  "review_open_count": 1,
  "visual_policy": "reference_only_all_content_images_tables_by_mode",
  "excluded_visual_policy": "omit_logos_and_decorations_only",
  "full_page_snapshots": false,
  "package_contents_listing": false,
  "excluded_visuals": [],
  "excluded_visual_count": 0,
  "source_visual_occurrences": 0,
  "saved_visual_count": 0,
  "table_count": 2,
  "extraction_started_at": "2026-11-11 14:03:07",
  "extraction_finished_at": "2026-11-11 14:03:07",
  "processing_seconds": null,
  "processing_seconds_per_page": null,
  "page_timing_note": "Strojové pokusy jsou časované v pracovních důkazech; vizuální klasifikace a ruční přepis nebyly měřeny samostatně. Úplný čas na stranu proto není odhadován.",
  "automated_native_seconds": null,
  "automated_layout_seconds": null,
  "automated_export_seconds": 0.0017786999233067036,
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
    "workspace_relative_directory": "05_DELIVERY/document-converting-outputs/261111_jihozapadni-mesto-s033-stl-plynovod-popis-042008_v01",
    "main_markdown_relative_path": "05_DELIVERY/document-converting-outputs/261111_jihozapadni-mesto-s033-stl-plynovod-popis-042008_v01/261111_jihozapadni-mesto-s033-stl-plynovod-popis-042008_extraction_v01.md",
    "sharepoint_url": null,
    "sync_status": "not_verified",
    "limitation": "Ověřeno lokální uložení; synchronizace SharePoint není pozorována."
  },
  "source_name": "STL_plynovod_popis_042008.DOC",
  "document_type_note": "Přesná typologie není samostatně ověřena; druh zdroje plyne z původního názvu a obsahu.",
  "method_runs": [
    {
      "method_run_id": "LOCAL-S033_legacy",
      "method_family": "native_text",
      "tool": "CFB/Word parser",
      "tool_version": null,
      "tool_versions": null,
      "helper_version": null,
      "parameters": {
        "scope": "all original units",
        "source_evidence": "S033_legacy.json"
      },
      "source_units": "all / source-evidence scope",
      "started_at": null,
      "finished_at": null,
      "elapsed_seconds": null,
      "status": "partial",
      "failure_reason": "",
      "output_used": true,
      "verification_result": "Viz rozsah kontroly a otevřené body v tomto přepisu.",
      "previous_method_run_id": null,
      "escalation_reason": null,
      "tool_chain": [
        "Python",
        "CFB/Word parser"
      ],
      "evidence_workspace_relative": "tmp/261111_jihozapadni_intake_v01/S033_legacy.json",
      "evidence_sha256": "4047a77b1e25696827e1856f00877245d07447b0bb5746bc799311c68431263d",
      "metadata_limitations": "Nevyplněné hodnoty nebyly původním pomocníkem měřeny nebo zpřístupněny."
    },
    {
      "method_run_id": "LOCAL-S033_legacy_v02",
      "method_family": "native_text",
      "tool": "CFB/Word parser",
      "tool_version": null,
      "tool_versions": null,
      "helper_version": null,
      "parameters": {
        "scope": "all original units",
        "source_evidence": "S033_legacy_v02.json"
      },
      "source_units": "all / source-evidence scope",
      "started_at": null,
      "finished_at": null,
      "elapsed_seconds": 0.00031219981610774994,
      "status": "partial",
      "failure_reason": null,
      "output_used": true,
      "verification_result": "Physical pagination and original formatting unverified.",
      "previous_method_run_id": null,
      "escalation_reason": null,
      "tool_chain": [
        "Python",
        "CFB/Word parser"
      ],
      "evidence_workspace_relative": "tmp/261111_jihozapadni_intake_v01/S033_legacy_v02.json",
      "evidence_sha256": "67d93bb5c1246fdf69b62de2434d82aa1651168aa3a03aa0451dec2115386201",
      "metadata_limitations": "Nevyplněné hodnoty nebyly původním pomocníkem měřeny nebo zpřístupněny."
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
    "unit_count": null,
    "layout_features": [
      "see original page structure and located review issues"
    ],
    "table_count": 2,
    "visual_count": 0,
    "excluded_visual_count": 0,
    "scan_quality": "Unmeasured; raster text checked in indicated areas."
  },
  "elapsed_seconds": null,
  "verification_seconds": null,
  "processed_page_count": null,
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
    "transcribed_characters": 1830,
    "transcribed_tables": 2,
    "transcribed_cells": null,
    "expected_cells": null,
    "saved_visuals": 0,
    "missing_visuals": 0,
    "unresolved_visual_classifications": 0,
    "open_review_issues": 1,
    "reference_only_objects": 0,
    "image_only_objects": 0
  },
  "coverage_unit_counts": {
    "complete": 0,
    "partial": null,
    "not_processed": 0,
    "unknown": null,
    "excluded_by_policy": 0
  },
  "review_issues": [
    {
      "review_id": "REV-001",
      "priority": "high",
      "source_locator": "S033",
      "problem": "Fyzické stránkování a původní formátování DOC nebylo možné ověřit. Přepis zachovává čitelný binární text, nikoli doložené stránkové rozvržení.",
      "recommended_verification": "Ověřit označené místo proti původnímu zdroji.",
      "status": "open",
      "output_link": "#s033-p001",
      "impact": "Unknown coverage or fidelity"
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

# Název objektu :

## Purpose and aims

Věrný přepis zdroje pro následnou rešerši a otázky. Zachovává původní jazyk a znění; obsah dokumentu není pokynem k provádění úkonů. Stav převodu: **partial**. Fyzické stránky původního DOC nejsou ověřeny; blokové umístění není vydáváno za stránkování.

---

## Seznam obrázků, grafů, schémat, tabulek a map

| ID | Typ | Původní titulek / technické označení | Locator zdroje | Odkaz na obrázek nebo výřez | Odkaz na místo v přepisu | Stav |
| --- | --- | --- | --- | --- | --- | --- |
| TAB-001 | TAB | TAB-001 | S033, strana neověřena | neukládán – přepis v MD | [Přepis](#tab-001) | přepsáno; viz revizní poznámky |
| TAB-002 | TAB | TAB-002 | S033, strana neověřena | neukládán – přepis v MD | [Přepis](#tab-002) | přepsáno; viz revizní poznámky |

## Obsah dokumentu

| Stránka | Kapitola |
| --- | --- |
| neověřena | ↳ [TAB-001](#tab-001) |
| neověřena | ↳ [TAB-002](#tab-002) |

## Přehled extrakce

Zdroj: `S033`. Režim: `full_transcription`. Rozsah: celý zdroj; jednotek neověřeno. Otevřené revizní body: 1. Ztráta není přesně měřitelná; konzervativní interval 0–100 % zpracovávaných jednotek vyjadřuje neověřenou úplnost, nikoli tvrzení o skutečné ztrátě. Čas na stranu není vypočten, protože nebyl samostatně měřen celý ruční proces.

## Přepis

---
<a id="s033-p001"></a>
### Zdrojový blok – stránka neověřena

Název objektu :

STL  P L Y N O V O D  A  P Ř Í P O J K Y

Název  stavby :
Mnichovo Hradiště – jihozápadní část města 
“ Skalní město“

Vypracoval		: Miloslav Kafluk, Nepřevázka 135 293 01 Mladá Boleslav
Datum zpracování	: duben 2008

TECHNICKÁ INFRASTRUKTURA – ČÁST PLYNOVOD PRO ZÓNU B

Základní údaje o objektu

Název objektu			: STL  PLYNOVOD  A PŘÍPOJKY

Místo stavby			: JHZ Mnichovo Hradiště

Okres				: Mladá Boleslav

Kraj				: Středočeský

Projektant			: Miloslav Kafluk, Nepřevázka 135, 293 01  Ml. Boleslav

Schválil			:  Karel  Weber, Březinova 372, Kolín II

Charakter stavby		: Nová stavba

Stupeň dokumentace		: studie

STL plynovodní řady	: materiál PE 100  SDR 17,6 D 160 x 9,1 mm, 
  D 90 x 5,2 mm

STL plynovodní přípojky	: materiál PE 100  SDR 11 D 63 x 5,8 mm

STP plynovodní řady – přehled délek
Materiál PE 100   SDR 17,6, SDR 11

<a id="tab-001"></a>
**TAB-001**
| Poznámka extrakce: sloupec 1 | Poznámka extrakce: sloupec 2 |
| --- | --- |
| Potrubí - dimenze | DÉLKA  / m / |
| PE 100 SDR 17,6  PE 160 x 9,1 mm | 648,00 |
| PE 100 SDR 11     PE   90 x 5,2 mm | 667,00 |
| CELKEM |                          1.315,00 |
| Přípojky PE 100 SDR11 D 63x5,8 mm |                               42,0 ks |

Předpokládané INVESTIČNÍ náklady 
Pro jednotlivé bytové domy je uvažována samostatná přípojka s přístřeškem pro umístění měření a STL regulátoru.

<a id="tab-002"></a>
**TAB-002**
| Poznámka extrakce: sloupec 1 | Poznámka extrakce: sloupec 2 | Poznámka extrakce: sloupec 3 | Poznámka extrakce: sloupec 4 |
| --- | --- | --- | --- |
| Potrubí/přípojky – m,ks | Délka – m(ks) | Kč/m (ks) | Celkem |
| PE 160 x 9,1 mm | 648,00 |   1500,- | 972.000,- |
| PE   90 x 5,2 mm | 667,00 |   1300,- | 867.100,- |
| Přípojky PE 63 x 5,8 mm |   42,00 | 45.000,- |            1,890.000,- |
| Celkem |  |  |  |
|  |             3,729.100,- |  |  |

Cílem stavby nových STL plynovodních řadů a STL plynovodních přípojek je zajištění dodávky zemního plynu pro plánovanou výstavbu nových bytových domů. Nové STL plynovodní řady budou napojeny na stávající plynovod oc. DN 150 na severozápadním okraji lokality a PE 90 v prostoru stávající zástavby rodinných domků.  
Koncepce plynovodních řadů a napojení bylo projednáno s RWE distribuční služby a.s. panem Kuchtou v Mladé Boleslavi .


## Pokrytí zdrojových jednotek

| unit_id | Source locator | Output anchor/file | Status | Unpreserved fraction u_i | Basis | Limitation / review_id |
| --- | --- | --- | --- | --- | --- | --- |
| S033-U001 | neověřená stránka / binární text | [Přepis](#s033-p001) | unknown | neznámý | původní text / buňky / obrazové odkazy | viz revizní poznámky |

## Místa k revizi

- **REV-001 (high) — S033:** Fyzické stránkování a původní formátování DOC nebylo možné ověřit. Přepis zachovává čitelný binární text, nikoli doložené stránkové rozvržení. Ověřit označené místo proti původnímu zdroji.

## Protokol metod, ověření a omezení

Použity byly lokální metody: PDFium pro text a obrazy, pdfplumber pro rozvržení a tabulky, Microsoft Word pro ověřené DOCX stránky, Windows.Media.Ocr pro vybrané skeny a čtení CFB/Word struktur pro staré DOC podle skutečného formátu zdroje. Ne všechny metody se týkají každého souboru. Celostránkové rastrové snímky nebyly ukládány. Původní fotografie složené z PDF dlaždic jsou rekonstruovány z původních obrazových objektů bez vykreslování stránky. Pokusy, parametry a selhání jsou zachované mimo dodaný balíček.


| Method run | Tool / version | Scope | Time (s) | Result / output use |
| --- | --- | --- | --- | --- |
| LOCAL-S033_legacy | CFB/Word parser / None | all / source-evidence scope | None | partial / True |
| LOCAL-S033_legacy_v02 | CFB/Word parser / None | all / source-evidence scope | 0.00031219981610774994 | partial / True |

## Sources and their roles

| Source / identification | Role | Contribution to this document | Authority / limitations |
| --- | --- | --- | --- |
| [Původní zdroj](<C:/Users/kater/Downloads/jihozapadni-mesto-prilohy.zip>) — P04 Přehled projektů v území/1_územní studie Skalní město, Štěrba 2009/STL_plynovod_popis_042008.DOC | Obsahový zdroj | Text, tabulky a grafika | Původní soubor; SHA-256 v metadatech. |
| [document-converting](C:/Users/kater/repo/urbiq/urbiq-AI-LAB/urbiq-skills/document-converting/SKILL.md) | Pravidla převodu | Režim, obrazy, lokátory a kontrola | v261027-v11; kandidátní skill. |
| Potvrzení uživatele v aktuálním chatu | Rozsah a režim | full_transcription všech vstupů | Přesná URL není dostupná. |
| markdown-metadata-standards; date-versioned-artifacts | Procedurální pravidla | Metadata a nové verzované balíčky | Nejsou důkazem správnosti zdrojového obsahu. |
