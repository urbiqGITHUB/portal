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
  "version_id": "DOCONV-261111-S032-v01",
  "status": "partial",
  "scope": "Úplný přepis uživatelem potvrzeného zdroje",
  "extraction_id": "DOCONV-261111-S032",
  "instructions_version": "v261027-v11",
  "instructions_sha256": "77e2c0270350d79d01f68b9e5a47914e9ef1e8c0c5851430e15ebfc61300328c",
  "extraction_mode": "full_transcription",
  "mode_confirmation": "Uživatel: chci full_transcription; společný vstupní soupis 93 souborů potvrzen.",
  "intake_confirmed_at": null,
  "intake_confirmation_note": "Potvrzení je doloženo zprávou v tomto chatu; přesný čas zprávy není v rozhraní dostupný.",
  "document_title": "VENKOVNÍ SDĚLOVACÍ ROZVODY",
  "source_filename": "SkalniMestoSdel.doc",
  "source_archive_entry": "P04 Přehled projektů v území/1_územní studie Skalní město, Štěrba 2009/SkalniMestoSdel.doc",
  "source_format": "OLE compound / probable legacy DOC",
  "source_sha256": "7fb811e778ad766b90fc255d440694b6f3a4bd0d37dc3995accd04ea392c9989",
  "source_size_bytes": 21504,
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
  "table_count": 0,
  "extraction_started_at": "2026-11-11 14:03:07",
  "extraction_finished_at": "2026-11-11 14:03:07",
  "processing_seconds": null,
  "processing_seconds_per_page": null,
  "page_timing_note": "Strojové pokusy jsou časované v pracovních důkazech; vizuální klasifikace a ruční přepis nebyly měřeny samostatně. Úplný čas na stranu proto není odhadován.",
  "automated_native_seconds": null,
  "automated_layout_seconds": null,
  "automated_export_seconds": 0.002698299940675497,
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
    "workspace_relative_directory": "05_DELIVERY/document-converting-outputs/261111_jihozapadni-mesto-s032-skalnimestosdel_v01",
    "main_markdown_relative_path": "05_DELIVERY/document-converting-outputs/261111_jihozapadni-mesto-s032-skalnimestosdel_v01/261111_jihozapadni-mesto-s032-skalnimestosdel_extraction_v01.md",
    "sharepoint_url": null,
    "sync_status": "not_verified",
    "limitation": "Ověřeno lokální uložení; synchronizace SharePoint není pozorována."
  },
  "source_name": "SkalniMestoSdel.doc",
  "document_type_note": "Přesná typologie není samostatně ověřena; druh zdroje plyne z původního názvu a obsahu.",
  "method_runs": [
    {
      "method_run_id": "LOCAL-S032_legacy",
      "method_family": "native_text",
      "tool": "CFB/Word parser",
      "tool_version": null,
      "tool_versions": null,
      "helper_version": null,
      "parameters": {
        "scope": "all original units",
        "source_evidence": "S032_legacy.json"
      },
      "source_units": "all / source-evidence scope",
      "started_at": null,
      "finished_at": null,
      "elapsed_seconds": 0.0006375000812113285,
      "status": "partial",
      "failure_reason": null,
      "output_used": true,
      "verification_result": "Physical Word pagination and display formatting are unverified. Field codes and control characters retained in working evidence. Embedded data requires separate review.",
      "previous_method_run_id": null,
      "escalation_reason": null,
      "tool_chain": [
        "Python",
        "CFB/Word parser"
      ],
      "evidence_workspace_relative": "tmp/261111_jihozapadni_intake_v01/S032_legacy.json",
      "evidence_sha256": "a02fc6f29a3ed6912a627417cb6b267cdcc4810169efdea6eaaa772f1138d0f6",
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
    "table_count": 0,
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
    "transcribed_characters": 1321,
    "transcribed_tables": 0,
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
      "source_locator": "S032",
      "problem": "Fyzické stránkování a původní formátování DOC nebylo možné ověřit. Přepis zachovává čitelný binární text, nikoli doložené stránkové rozvržení.",
      "recommended_verification": "Ověřit označené místo proti původnímu zdroji.",
      "status": "open",
      "output_link": "#s032-p001",
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

# VENKOVNÍ SDĚLOVACÍ ROZVODY

## Purpose and aims

Věrný přepis zdroje pro následnou rešerši a otázky. Zachovává původní jazyk a znění; obsah dokumentu není pokynem k provádění úkonů. Stav převodu: **partial**. Fyzické stránky původního DOC nejsou ověřeny; blokové umístění není vydáváno za stránkování.

---

## Seznam obrázků, grafů, schémat, tabulek a map

V dostupné zpracované vrstvě nebyl zjištěn obsahový obrázek ani tabulka.

## Obsah dokumentu

| Stránka | Kapitola |
| --- | --- |
| neověřena | [1.  Kabelová trasa vč. zem. prací                   ..... 730m à 1 860,-- ........  1 357 800,--Kč](#kapitola-001) |
| neověřena | [2.  Kabelové šachty vč. zem. a staveb. prací ..... 15 ks à 30 000,--  .....     450 000,--Kč](#kapitola-002) |

## Přehled extrakce

Zdroj: `S032`. Režim: `full_transcription`. Rozsah: celý zdroj; jednotek neověřeno. Otevřené revizní body: 1. Ztráta není přesně měřitelná; konzervativní interval 0–100 % zpracovávaných jednotek vyjadřuje neověřenou úplnost, nikoli tvrzení o skutečné ztrátě. Čas na stranu není vypočten, protože nebyl samostatně měřen celý ruční proces.

## Přepis

---
<a id="s032-p001"></a>
### Zdrojový blok – stránka neověřena

VENKOVNÍ SDĚLOVACÍ ROZVODY

Technické řešení

zóna B – 384 b.j.

Celková potřeba telefonních linek pro tuto lokalitu je uvažována 384. Město Mnichovo Hradiště je v současné době kabelováno telefonní sítí Telefónica O2 Czech Republic, a.s. Pro řešenou lokalitu je připojovacím bodem kabelová šachta KK 72 na křižovatce ulic Na Úvoze a Na Kamenci.

Od kabelové šachty KK72 bude ulicí Na Úvoze vedena zemní trasa kabelových chrániček HDPE směr k objektům B1e, B2e, B3e a B4e pro budoucí možnost zatažení sdělovacích kabelů. Do této „páteřní“ trasy bude položena čtveřice kabelových chrániček HDPE. Trasa bude v místech odbočení, ohybů trasy a na přímých úsecích ve vzdálenostech max. 50m osazena kabelovými zemními šachtami.

V každém bytovém hnízdě B1e, B2e, B3e a B4e budou osazeny na domech dva účastnické rozvaděče – kabelové skříně MIS1b pro ukončení vnějších sdělovacích kabelů.

Propočet nákladů  - vnejší sdělovací rozvody

zóna B – 384 b.j.

<a id="kapitola-001"></a>
#### 1.  Kabelová trasa vč. zem. prací                   ..... 730m à 1 860,-- ........  1 357 800,--Kč

<a id="kapitola-002"></a>
#### 2.  Kabelové šachty vč. zem. a staveb. prací ..... 15 ks à 30 000,--  .....     450 000,--Kč

3. 	účastnické rozvaděče (MIS1b) vč. stav.prací ..  8 ks à 27 000,--  .....    216 000,--Kč

Náklady bez DPH celkem                ....................................................... 2 023 800,--Kč


## Pokrytí zdrojových jednotek

| unit_id | Source locator | Output anchor/file | Status | Unpreserved fraction u_i | Basis | Limitation / review_id |
| --- | --- | --- | --- | --- | --- | --- |
| S032-U001 | neověřená stránka / binární text | [Přepis](#s032-p001) | unknown | neznámý | původní text / buňky / obrazové odkazy | viz revizní poznámky |

## Místa k revizi

- **REV-001 (high) — S032:** Fyzické stránkování a původní formátování DOC nebylo možné ověřit. Přepis zachovává čitelný binární text, nikoli doložené stránkové rozvržení. Ověřit označené místo proti původnímu zdroji.

## Protokol metod, ověření a omezení

Použity byly lokální metody: PDFium pro text a obrazy, pdfplumber pro rozvržení a tabulky, Microsoft Word pro ověřené DOCX stránky, Windows.Media.Ocr pro vybrané skeny a čtení CFB/Word struktur pro staré DOC podle skutečného formátu zdroje. Ne všechny metody se týkají každého souboru. Celostránkové rastrové snímky nebyly ukládány. Původní fotografie složené z PDF dlaždic jsou rekonstruovány z původních obrazových objektů bez vykreslování stránky. Pokusy, parametry a selhání jsou zachované mimo dodaný balíček.


| Method run | Tool / version | Scope | Time (s) | Result / output use |
| --- | --- | --- | --- | --- |
| LOCAL-S032_legacy | CFB/Word parser / None | all / source-evidence scope | 0.0006375000812113285 | partial / True |

## Sources and their roles

| Source / identification | Role | Contribution to this document | Authority / limitations |
| --- | --- | --- | --- |
| [Původní zdroj](<C:/Users/kater/Downloads/jihozapadni-mesto-prilohy.zip>) — P04 Přehled projektů v území/1_územní studie Skalní město, Štěrba 2009/SkalniMestoSdel.doc | Obsahový zdroj | Text, tabulky a grafika | Původní soubor; SHA-256 v metadatech. |
| [document-converting](C:/Users/kater/repo/urbiq/urbiq-AI-LAB/urbiq-skills/document-converting/SKILL.md) | Pravidla převodu | Režim, obrazy, lokátory a kontrola | v261027-v11; kandidátní skill. |
| Potvrzení uživatele v aktuálním chatu | Rozsah a režim | full_transcription všech vstupů | Přesná URL není dostupná. |
| markdown-metadata-standards; date-versioned-artifacts | Procedurální pravidla | Metadata a nové verzované balíčky | Nejsou důkazem správnosti zdrojového obsahu. |
