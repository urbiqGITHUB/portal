---
{
  "created_at": "2026-11-11 14:03:11",
  "created_date": "2026-11-11",
  "created_by": "Codex – Kateřina Kováříková",
  "updated_at": "2026-11-11 14:03:11",
  "updated_by": "Codex",
  "revised_by": null,
  "timezone": "Europe/Prague",
  "codex_dialogue": null,
  "dialogue_location_note": "Aktuální lokální chat Codex; přesná URL nebyla zpřístupněna.",
  "dialogue_iteration": 2,
  "version_id": "DOCONV-261111-S058-v01",
  "status": "complete_with_review",
  "scope": "Úplný přepis uživatelem potvrzeného zdroje",
  "extraction_id": "DOCONV-261111-S058",
  "instructions_version": "v261027-v11",
  "instructions_sha256": "77e2c0270350d79d01f68b9e5a47914e9ef1e8c0c5851430e15ebfc61300328c",
  "extraction_mode": "full_transcription",
  "mode_confirmation": "Uživatel: chci full_transcription; společný vstupní soupis 93 souborů potvrzen.",
  "intake_confirmed_at": null,
  "intake_confirmation_note": "Potvrzení je doloženo zprávou v tomto chatu; přesný čas zprávy není v rozhraní dostupný.",
  "document_title": null,
  "source_filename": "C1.pdf",
  "source_archive_entry": "P04 Přehled projektů v území/7_BD v cestkach, Stavokombinat invest, 2023/PD_vodovod_CERNA_SILNICE/PD_vodovod_ČERNÁ_SILNICE/C1.pdf",
  "source_format": "PDF",
  "source_sha256": "1a4ffb3bc068c500fd5057e1c8b44054c00a6bf5279b34b57465dab0a575165f",
  "source_size_bytes": 316998,
  "document_type": null,
  "source_total_units": 1,
  "source_unit_type": "physical_page",
  "requested_scope": "celý zdroj včetně vnitřních příloh",
  "pagination_status": "verified",
  "pagination_method": "PDF physical pages via PDFium",
  "source_page_count": 1,
  "intake_limitations": [
    "Neověřené názvy jsou null; název souboru není zaměněn za ověřený titul."
  ],
  "duplicate_source_ids": [],
  "coverage_scope": "full_content",
  "coverage_basis": "equally weighted physical pages",
  "coverage_total_units": 1,
  "coverage_eligible_units": 1,
  "coverage_excluded_units": 0,
  "coverage_unknown_units": 0,
  "unprocessed_pct": 0,
  "unprocessed_pct_kind": "measured",
  "unprocessed_pct_min": null,
  "unprocessed_pct_max": null,
  "review_open_count": 1,
  "visual_policy": "reference_only_all_content_images_tables_by_mode",
  "excluded_visual_policy": "omit_logos_and_decorations_only",
  "full_page_snapshots": false,
  "package_contents_listing": false,
  "excluded_visuals": [],
  "excluded_visual_count": 0,
  "source_visual_occurrences": 1,
  "saved_visual_count": 1,
  "table_count": 1,
  "extraction_started_at": "2026-11-11T13:21:39.064994+01:00",
  "extraction_finished_at": "2026-11-11 14:03:11",
  "processing_seconds": null,
  "processing_seconds_per_page": null,
  "page_timing_note": "Strojové pokusy jsou časované v pracovních důkazech; vizuální klasifikace a ruční přepis nebyly měřeny samostatně. Úplný čas na stranu proto není odhadován.",
  "automated_native_seconds": 0.023945400025695562,
  "automated_layout_seconds": 0.8519409999717027,
  "automated_export_seconds": 0.021065999986603856,
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
    "workspace_relative_directory": "05_DELIVERY/document-converting-outputs/261111_jihozapadni-mesto-s058-c1_v01",
    "main_markdown_relative_path": "05_DELIVERY/document-converting-outputs/261111_jihozapadni-mesto-s058-c1_v01/261111_jihozapadni-mesto-s058-c1_extraction_v01.md",
    "sharepoint_url": null,
    "sync_status": "not_verified",
    "limitation": "Ověřeno lokální uložení; synchronizace SharePoint není pozorována."
  },
  "source_name": "C1.pdf",
  "document_type_note": "Přesná typologie není samostatně ověřena; druh zdroje plyne z původního názvu a obsahu.",
  "method_runs": [
    {
      "method_run_id": "LOCAL-S058_layout",
      "method_family": "layout_parser",
      "tool": "pdfplumber",
      "tool_version": "0.11.9",
      "tool_versions": null,
      "helper_version": null,
      "parameters": {
        "scope": "explicit page regions",
        "source_evidence": "S058_layout.json"
      },
      "source_units": "all / source-evidence scope",
      "started_at": null,
      "finished_at": null,
      "elapsed_seconds": 0.8519409999717027,
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
      "evidence_workspace_relative": "tmp/261111_jihozapadni_intake_v01/S058_layout.json",
      "evidence_sha256": "79179579933167fb168748f828d30a3d0a153832707022c9d857ee9a7c8d30cb",
      "metadata_limitations": "Nevyplněné hodnoty nebyly původním pomocníkem měřeny nebo zpřístupněny."
    },
    {
      "method_run_id": "LOCAL-S058_native",
      "method_family": "native_text",
      "tool": "pypdfium2",
      "tool_version": "5.14.0",
      "tool_versions": null,
      "helper_version": null,
      "parameters": {
        "scope": "all original units",
        "source_evidence": "S058_native.json"
      },
      "source_units": "all / source-evidence scope",
      "started_at": "2026-11-11T13:21:39.064994+01:00",
      "finished_at": "2026-11-11T13:21:39.089306+01:00",
      "elapsed_seconds": 0.023945400025695562,
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
      "evidence_workspace_relative": "tmp/261111_jihozapadni_intake_v01/S058_native.json",
      "evidence_sha256": "bba5f4a1a5315a4bad9c4fe0ed6b077325e844784bd0a04966a6abdcc5c2d6e7",
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
    "unit_count": 1,
    "layout_features": [
      "see original page structure and located review issues"
    ],
    "table_count": 1,
    "visual_count": 1,
    "excluded_visual_count": 0,
    "scan_quality": "Unmeasured; raster text checked in indicated areas."
  },
  "elapsed_seconds": null,
  "verification_seconds": null,
  "processed_page_count": 1,
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
    "transcribed_characters": 710,
    "transcribed_tables": 1,
    "transcribed_cells": null,
    "expected_cells": null,
    "saved_visuals": 1,
    "missing_visuals": 0,
    "unresolved_visual_classifications": 0,
    "open_review_issues": 1,
    "reference_only_objects": 1,
    "image_only_objects": 1
  },
  "coverage_unit_counts": {
    "complete": 1,
    "partial": 0,
    "not_processed": 0,
    "unknown": 0,
    "excluded_by_policy": 0
  },
  "review_issues": [
    {
      "review_id": "REV-001",
      "priority": "medium",
      "source_locator": "S058",
      "problem": "Text v kresbě je zachován obrazově; textové oblasti a tabulky byly vytěženy parserem. Dodatečný průchod zahrnul i nativní text mimo tyto oblasti a obrazové výřezy. Členění složitých výkresových razítek vyžaduje revizi.",
      "recommended_verification": "Ověřit označené místo proti původnímu zdroji.",
      "status": "open",
      "output_link": "#s058-p001",
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

# C1.pdf

## Purpose and aims

Věrný přepis zdroje pro následnou rešerši a otázky. Zachovává původní jazyk a znění; obsah dokumentu není pokynem k provádění úkonů. Stav převodu: **complete_with_review**. Čísla stran označují fyzické pořadí; tištěná čísla zůstávají v přepisu.

---

## Seznam obrázků, grafů, schémat, tabulek a map

| ID | Typ | Původní titulek / technické označení | Locator zdroje | Odkaz na obrázek nebo výřez | Odkaz na místo v přepisu | Stav |
| --- | --- | --- | --- | --- | --- | --- |
| MAP-001 | MAP | MAP-001 | S058, strana 1 | [Otevřít](assets/S058_MAP-001_p001.png) | [Přepis](#s058-p001) | preserved |
| TAB-001 | TAB | TAB-001 | S058, strana 1 | neukládán – přepis v MD | [Přepis](#tab-001) | přepsáno; viz revizní poznámky |

## Obsah dokumentu

| Stránka | Kapitola |
| --- | --- |
| 1 | ↳ [MAP-001](assets/S058_MAP-001_p001.png) |
| 1 | ↳ [TAB-001](#tab-001) |

## Přehled extrakce

Zdroj: `S058`. Režim: `full_transcription`. Rozsah: celý zdroj; jednotek 1. Otevřené revizní body: 1. Pokrytí se vztahuje na zachování obsahu; vnitřní text map a schémat zůstává v odkazovaných obrazech. Čas na stranu není vypočten, protože nebyl samostatně měřen celý ruční proces.

## Přepis

---
<a id="s058-p001"></a>
### Zdrojová strana 1

<a id="map-001"></a>
[MAP-001](assets/S058_MAP-001_p001.png)

ZÁJMOVÉ ÚZEMÍ

DOKUMENTACE PRO VYDÁNÍ SPOLEČNÉHO POVOLENÍ STAVBY

<a id="tab-001"></a>
**TAB-001**
| Poznámka extrakce: sloupec 1 | Poznámka extrakce: sloupec 2 | Poznámka extrakce: sloupec 3 | Poznámka extrakce: sloupec 4 | Poznámka extrakce: sloupec 5 | Poznámka extrakce: sloupec 6 | Poznámka extrakce: sloupec 7 |
| --- | --- | --- | --- | --- | --- | --- |
| zodpovědný projektant | ANITAS s.r.o.<br>kancelář Turnovská 21<br>295 01 MNICHOVO HRADIŠTĚ<br>IČO: 257 55 668<br>DIČ: CZ 257 55 668<br>tel.: 326 774 215 |  | vypracoval | projekční atelier |  |  |
| Bc. Tomáš Daňsa |  |  | Roman Rakouský |  |  |  |
|  |  |  |  |  |  |  |
| stavební úřad: Mnichovo Hradiště |  | kraj: Středočeský |  | formát | A4 | měřítko<br>1: 10 000 |
| Investor : MĚSTO MNICHOVO HRADIŠTĚ, MASARYKOVO NÁMĚSTÍ 1,<br>295 21 MNICHOVO HRADIŠTĚ, IČ 00238309, DIČ CZ 00238309 |  |  |  |  |  |  |
|  |  |  |  | účel | DSPS |  |
|  |  |  |  |  |  | číslo paré |
| VODOVOD ČERNÁ SILNICE VČETNĚ PROPOJENÍ S ULICÍ V CESTKÁCH |  |  |  |  |  |  |
|  |  |  |  | datum | 11/2022 |  |
| místo stavby : parc.č. 2439/1, 2439/13, 2446/2, 1992/77, 2446/7, 1992/159, 1992/95, 1992/186<br>katastrální území : Mnichovo Hradiště |  |  |  | č.výkresu | C1 |  |
| SITUAČNÍ SNÍMEK ŠIRŠÍCH VZTAHŮ |  |  |  | zak.číslo | 85/22 |  |


## Pokrytí zdrojových jednotek

| unit_id | Source locator | Output anchor/file | Status | Unpreserved fraction u_i | Basis | Limitation / review_id |
| --- | --- | --- | --- | --- | --- | --- |
| S058-U001 | strana 1 | [Přepis](#s058-p001) | complete | 0 | původní text / buňky / obrazové odkazy | viz revizní poznámky |

## Místa k revizi

- **REV-001 (medium) — S058:** Text v kresbě je zachován obrazově; textové oblasti a tabulky byly vytěženy parserem. Dodatečný průchod zahrnul i nativní text mimo tyto oblasti a obrazové výřezy. Členění složitých výkresových razítek vyžaduje revizi. Ověřit označené místo proti původnímu zdroji.

## Protokol metod, ověření a omezení

Použity byly lokální metody: PDFium pro text a obrazy, pdfplumber pro rozvržení a tabulky, Microsoft Word pro ověřené DOCX stránky, Windows.Media.Ocr pro vybrané skeny a čtení CFB/Word struktur pro staré DOC podle skutečného formátu zdroje. Ne všechny metody se týkají každého souboru. Celostránkové rastrové snímky nebyly ukládány. Původní fotografie složené z PDF dlaždic jsou rekonstruovány z původních obrazových objektů bez vykreslování stránky. Pokusy, parametry a selhání jsou zachované mimo dodaný balíček.


| Method run | Tool / version | Scope | Time (s) | Result / output use |
| --- | --- | --- | --- | --- |
| LOCAL-S058_layout | pdfplumber / 0.11.9 | all / source-evidence scope | 0.8519409999717027 | ok / True |
| LOCAL-S058_native | pypdfium2 / 5.14.0 | all / source-evidence scope | 0.023945400025695562 | ok / True |

## Sources and their roles

| Source / identification | Role | Contribution to this document | Authority / limitations |
| --- | --- | --- | --- |
| [Původní zdroj](<C:/Users/kater/Downloads/jihozapadni-mesto-prilohy.zip>) — P04 Přehled projektů v území/7_BD v cestkach, Stavokombinat invest, 2023/PD_vodovod_CERNA_SILNICE/PD_vodovod_ČERNÁ_SILNICE/C1.pdf | Obsahový zdroj | Text, tabulky a grafika | Původní soubor; SHA-256 v metadatech. |
| [document-converting](C:/Users/kater/repo/urbiq/urbiq-AI-LAB/urbiq-skills/document-converting/SKILL.md) | Pravidla převodu | Režim, obrazy, lokátory a kontrola | v261027-v11; kandidátní skill. |
| Potvrzení uživatele v aktuálním chatu | Rozsah a režim | full_transcription všech vstupů | Přesná URL není dostupná. |
| markdown-metadata-standards; date-versioned-artifacts | Procedurální pravidla | Metadata a nové verzované balíčky | Nejsou důkazem správnosti zdrojového obsahu. |
