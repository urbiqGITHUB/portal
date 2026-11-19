---
{
  "created_at": "2026-11-11 14:03:08",
  "created_date": "2026-11-11",
  "created_by": "Codex – Kateřina Kováříková",
  "updated_at": "2026-11-11 14:03:08",
  "updated_by": "Codex",
  "revised_by": null,
  "timezone": "Europe/Prague",
  "codex_dialogue": null,
  "dialogue_location_note": "Aktuální lokální chat Codex; přesná URL nebyla zpřístupněna.",
  "dialogue_iteration": 2,
  "version_id": "DOCONV-261111-S039-v01",
  "status": "partial",
  "scope": "Úplný přepis uživatelem potvrzeného zdroje",
  "extraction_id": "DOCONV-261111-S039",
  "instructions_version": "v261027-v11",
  "instructions_sha256": "77e2c0270350d79d01f68b9e5a47914e9ef1e8c0c5851430e15ebfc61300328c",
  "extraction_mode": "full_transcription",
  "mode_confirmation": "Uživatel: chci full_transcription; společný vstupní soupis 93 souborů potvrzen.",
  "intake_confirmed_at": null,
  "intake_confirmation_note": "Potvrzení je doloženo zprávou v tomto chatu; přesný čas zprávy není v rozhraní dostupný.",
  "document_title": "ÚZEMNÍ PLÁN MNICHOVO HRADIŠTĚ – DOPRAVNÍ STUDIE",
  "source_filename": "up dopravní studie.pdf",
  "source_archive_entry": "P04 Přehled projektů v území/3_dopravní studie k UP, CR Project, 2017/up dopravní studie.pdf",
  "source_format": "PDF",
  "source_sha256": "0ed633556ad7e374a9cc555fb7e43095f594931920c21468b4a46cbfd2eebb8e",
  "source_size_bytes": 5965186,
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
  "review_open_count": 1,
  "visual_policy": "reference_only_all_content_images_tables_by_mode",
  "excluded_visual_policy": "omit_logos_and_decorations_only",
  "full_page_snapshots": false,
  "package_contents_listing": false,
  "excluded_visuals": [],
  "excluded_visual_count": 0,
  "source_visual_occurrences": 9,
  "saved_visual_count": 7,
  "table_count": 0,
  "extraction_started_at": "2026-11-11T13:21:33.364977+01:00",
  "extraction_finished_at": "2026-11-11 14:03:08",
  "processing_seconds": null,
  "processing_seconds_per_page": null,
  "page_timing_note": "Strojové pokusy jsou časované v pracovních důkazech; vizuální klasifikace a ruční přepis nebyly měřeny samostatně. Úplný čas na stranu proto není odhadován.",
  "automated_native_seconds": 0.007328700041398406,
  "automated_layout_seconds": null,
  "automated_export_seconds": 0.015250700060278177,
  "verification": {
    "source_visual_inspection": "all physical PDF pages at overview scale; detailed review of scanned catalogs, source tables and flagged areas",
    "native_text_check": "PDFium plus pdfplumber for text/table pages; Word native cross-check for DOCX",
    "hover": "not_verified",
    "click": "local file existence / image decoder; viewer click not_verified",
    "line_by_line_review": "only explicitly manually transcribed areas; other content uses parser comparison",
    "output_review": "Source-normalized text/table comparison; all package links, anchors and decoded assets checked before exclusive delivery. Risky columns, raster catalogs and technical tables reviewed in detail.",
    "reviewed_manually_transcribed_pages": [
      "3",
      "1",
      "2"
    ],
    "ocr_replaced": "All OCR blocks on pages 1–3 replaced by manual transcription; no road identifiers silently inferred from OCR.",
    "output_asset_visual_review": "All 200 initially exported linked images viewed in four contact sheets; eight standalone converter-logo assets excluded; six adjusted crops re-rendered and visually checked. Final delivery contains 192 linked images."
  },
  "output_location": {
    "storage_type": "sharepoint_synced_folder",
    "workspace": "00_datamart",
    "workspace_relative_directory": "05_DELIVERY/document-converting-outputs/261111_jihozapadni-mesto-s039-up-dopravni-studie_v01",
    "main_markdown_relative_path": "05_DELIVERY/document-converting-outputs/261111_jihozapadni-mesto-s039-up-dopravni-studie_v01/261111_jihozapadni-mesto-s039-up-dopravni-studie_extraction_v01.md",
    "sharepoint_url": null,
    "sync_status": "not_verified",
    "limitation": "Ověřeno lokální uložení; synchronizace SharePoint není pozorována."
  },
  "source_name": "up dopravní studie.pdf",
  "document_type_note": "Přesná typologie není samostatně ověřena; druh zdroje plyne z původního názvu a obsahu.",
  "method_runs": [
    {
      "method_run_id": "LOCAL-S039_native",
      "method_family": "native_text",
      "tool": "pypdfium2",
      "tool_version": "5.14.0",
      "tool_versions": null,
      "helper_version": null,
      "parameters": {
        "scope": "all original units",
        "source_evidence": "S039_native.json"
      },
      "source_units": "all / source-evidence scope",
      "started_at": "2026-11-11T13:21:33.364977+01:00",
      "finished_at": "2026-11-11T13:21:33.377482+01:00",
      "elapsed_seconds": 0.007328700041398406,
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
      "evidence_workspace_relative": "tmp/261111_jihozapadni_intake_v01/S039_native.json",
      "evidence_sha256": "3ac1669137f3f9a8fc3cebb44d3a62d926e38a81e38478e31749ab51340df166",
      "metadata_limitations": "Chybějící časy/verze nebyly zpětně odhadnuty. První PDFium pokus měl chybu pomocné metody get_size u obrazového inventáře; text zůstal použitelný, inventář byl zopakován metodou get_px_size."
    },
    {
      "method_run_id": "METHOD-0c9ac6a784204c42869fb2e48d8c05cc",
      "method_family": "ocr",
      "tool": "Windows.Media.Ocr",
      "tool_version": null,
      "tool_versions": {
        "pypdf": "6.10.0",
        "pypdfium2": "5.14.0",
        "Pillow": "13.0.0"
      },
      "helper_version": "2.0.0",
      "parameters": {
        "units": "1",
        "method": "ocr",
        "engine": "windows",
        "language": "cs",
        "text_only_reviewed": false,
        "rotation": 0,
        "previous_run": null,
        "escalation_reason": null,
        "scale": 3.0,
        "box": [
          0.5,
          0.08,
          0.98,
          0.3
        ]
      },
      "source_units": "1",
      "started_at": "2026-11-11T12:31:31.324390+00:00",
      "finished_at": "2026-11-11T12:31:32.953048+00:00",
      "elapsed_seconds": 1.6145261998753995,
      "status": "candidate",
      "failure_reason": null,
      "output_used": true,
      "verification_result": "Viz rozsah kontroly a otevřené body v tomto přepisu.",
      "previous_method_run_id": null,
      "escalation_reason": null,
      "tool_chain": [
        "Python",
        "Pillow",
        "pypdf",
        "pypdfium2",
        "PowerShell",
        "Windows.Media.Ocr"
      ],
      "evidence_workspace_relative": "tmp/261111_jihozapadni_intake_v01/S039_p001_title_ocr.json",
      "evidence_sha256": "cd0670eeefffb39b79ee841b3105a9a68e36e0e05019db39e3198a5c4e9c505b",
      "metadata_limitations": "Nevyplněné hodnoty nebyly původním pomocníkem měřeny nebo zpřístupněny."
    },
    {
      "method_run_id": "METHOD-47786183c54742778f2074ea7f493cb5",
      "method_family": "ocr",
      "tool": "Windows.Media.Ocr",
      "tool_version": null,
      "tool_versions": {
        "Pillow": "13.0.0",
        "pypdf": "6.10.0",
        "pypdfium2": "5.14.0"
      },
      "helper_version": "2.0.0",
      "parameters": {
        "units": "2",
        "method": "ocr",
        "engine": "windows",
        "language": "cs",
        "text_only_reviewed": false,
        "rotation": 0,
        "previous_run": null,
        "escalation_reason": null,
        "scale": 3.0,
        "box": [
          0.07,
          0.1,
          0.6,
          0.47
        ]
      },
      "source_units": "2",
      "started_at": "2026-11-11T12:31:33.169649+00:00",
      "finished_at": "2026-11-11T12:31:34.882099+00:00",
      "elapsed_seconds": 1.7044933000579476,
      "status": "candidate",
      "failure_reason": null,
      "output_used": true,
      "verification_result": "Viz rozsah kontroly a otevřené body v tomto přepisu.",
      "previous_method_run_id": null,
      "escalation_reason": null,
      "tool_chain": [
        "Python",
        "Pillow",
        "pypdf",
        "pypdfium2",
        "PowerShell",
        "Windows.Media.Ocr"
      ],
      "evidence_workspace_relative": "tmp/261111_jihozapadni_intake_v01/S039_p002_contents_ocr.json",
      "evidence_sha256": "943e6a51f8fbef0a13e99d50203312131373e1c3eadbd60644e55e7ef30c0c9c",
      "metadata_limitations": "Nevyplněné hodnoty nebyly původním pomocníkem měřeny nebo zpřístupněny."
    },
    {
      "method_run_id": "METHOD-126e640293f348cd9929fd1a2bd59be0",
      "method_family": "ocr",
      "tool": "Windows.Media.Ocr",
      "tool_version": null,
      "tool_versions": {
        "pypdfium2": "5.14.0",
        "Pillow": "13.0.0",
        "pypdf": "6.10.0"
      },
      "helper_version": "2.0.0",
      "parameters": {
        "units": "3",
        "method": "ocr",
        "engine": "windows",
        "language": "cs",
        "text_only_reviewed": false,
        "rotation": 0,
        "previous_run": null,
        "escalation_reason": null,
        "scale": 3.0,
        "box": [
          0.02,
          0.03,
          0.51,
          0.93
        ]
      },
      "source_units": "3",
      "started_at": "2026-11-11T12:28:44.622258+00:00",
      "finished_at": "2026-11-11T12:28:47.398450+00:00",
      "elapsed_seconds": 2.76663690013811,
      "status": "candidate",
      "failure_reason": null,
      "output_used": false,
      "verification_result": "Manuální přepis podle originálu nahradil OCR.",
      "previous_method_run_id": null,
      "escalation_reason": null,
      "tool_chain": [
        "Python",
        "Pillow",
        "pypdf",
        "pypdfium2",
        "PowerShell",
        "Windows.Media.Ocr"
      ],
      "evidence_workspace_relative": "tmp/261111_jihozapadni_intake_v01/S039_p003_left_ocr.json",
      "evidence_sha256": "0daf75fe073198a048f98bc4d407189fead1fcf50f3ade09d6f45add8ac188ef",
      "metadata_limitations": "Nevyplněné hodnoty nebyly původním pomocníkem měřeny nebo zpřístupněny."
    },
    {
      "method_run_id": "METHOD-9c9269332cc44e66894bbae834da682d",
      "method_family": "ocr",
      "tool": "Windows.Media.Ocr",
      "tool_version": null,
      "tool_versions": {
        "pypdf": "6.10.0",
        "Pillow": "13.0.0",
        "pypdfium2": "5.14.0"
      },
      "helper_version": "2.0.0",
      "parameters": {
        "units": "3",
        "method": "ocr",
        "engine": "windows",
        "language": "cs",
        "text_only_reviewed": false,
        "rotation": 0,
        "previous_run": "METHOD-126e640293f348cd9929fd1a2bd59be0",
        "escalation_reason": "OCR errors in road identifiers and damaged text; slightly expanded region and adjusted top boundary",
        "scale": 3.0,
        "box": [
          0.025,
          0.08,
          0.515,
          0.93
        ]
      },
      "source_units": "3",
      "started_at": "2026-11-11T12:31:37.142862+00:00",
      "finished_at": "2026-11-11T12:31:39.182302+00:00",
      "elapsed_seconds": 2.037204199936241,
      "status": "candidate",
      "failure_reason": null,
      "output_used": false,
      "verification_result": "Manuální přepis podle originálu nahradil OCR.",
      "previous_method_run_id": "METHOD-126e640293f348cd9929fd1a2bd59be0",
      "escalation_reason": "OCR errors in road identifiers and damaged text; slightly expanded region and adjusted top boundary",
      "tool_chain": [
        "Python",
        "Pillow",
        "pypdf",
        "pypdfium2",
        "PowerShell",
        "Windows.Media.Ocr"
      ],
      "evidence_workspace_relative": "tmp/261111_jihozapadni_intake_v01/S039_p003_left_retry_ocr.json",
      "evidence_sha256": "55dc4cbd583f00f520389cda219d60371744b397fada7118b7b23c6ec10e9c29",
      "metadata_limitations": "Nevyplněné hodnoty nebyly původním pomocníkem měřeny nebo zpřístupněny."
    },
    {
      "method_run_id": "METHOD-6202f709af3a42d2b5af7fda4269132c",
      "method_family": "ocr",
      "tool": "Windows.Media.Ocr",
      "tool_version": null,
      "tool_versions": {
        "pypdf": "6.10.0",
        "pypdfium2": "5.14.0",
        "Pillow": "13.0.0"
      },
      "helper_version": "2.0.0",
      "parameters": {
        "units": "3",
        "method": "ocr",
        "engine": "windows",
        "language": "cs",
        "text_only_reviewed": false,
        "rotation": 0,
        "previous_run": null,
        "escalation_reason": null,
        "scale": 3.0,
        "box": [
          0.51,
          0.06,
          0.98,
          0.7
        ]
      },
      "source_units": "3",
      "started_at": "2026-11-11T12:31:35.113795+00:00",
      "finished_at": "2026-11-11T12:31:36.939822+00:00",
      "elapsed_seconds": 1.8182164998725057,
      "status": "candidate",
      "failure_reason": null,
      "output_used": false,
      "verification_result": "Manuální přepis podle originálu nahradil OCR.",
      "previous_method_run_id": null,
      "escalation_reason": null,
      "tool_chain": [
        "Python",
        "Pillow",
        "pypdf",
        "pypdfium2",
        "PowerShell",
        "Windows.Media.Ocr"
      ],
      "evidence_workspace_relative": "tmp/261111_jihozapadni_intake_v01/S039_p003_right_ocr.json",
      "evidence_sha256": "87656f476dc6e962956c47f823e7ff9abed32167ade99d8952d100691a040703",
      "metadata_limitations": "Nevyplněné hodnoty nebyly původním pomocníkem měřeny nebo zpřístupněny."
    },
    {
      "method_run_id": "LOCAL-S039-manual",
      "method_family": "manual_transcription",
      "tool": "Codex visual comparison",
      "tool_version": null,
      "model": null,
      "parameters": {
        "pages": [
          "3",
          "1",
          "2"
        ],
        "reference": "original in-memory page/crop previews",
        "script_sha256": "9e6da47053c839336e8fef9cd9014dd02fabe7fb01c61d3c90a3d23930c50c70"
      },
      "source_units": [
        "3",
        "1",
        "2"
      ],
      "started_at": null,
      "finished_at": null,
      "elapsed_seconds": null,
      "status": "ok",
      "failure_reason": null,
      "output_used": true,
      "verification_result": "Přepsané úseky porovnány se zobrazenými originály; případné nejasnosti zůstávají v revizních bodech.",
      "previous_method_run_id": null,
      "escalation_reason": "Raster tables or text required visual correction.",
      "tool_chain": [
        "PDFium / Pillow in-memory preview",
        "manual transcription"
      ]
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
    "visual_count": 7,
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
    "transcribed_characters": 7999,
    "transcribed_tables": 0,
    "transcribed_cells": null,
    "expected_cells": null,
    "saved_visuals": 7,
    "missing_visuals": 0,
    "unresolved_visual_classifications": 0,
    "open_review_issues": 1,
    "reference_only_objects": 7,
    "image_only_objects": 7
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
      "source_locator": "S039",
      "problem": "Ruční přepis stran 1–3; poškozený tisk na straně 3. Text razítek mimo grafické výřezy na stranách 4–9 nemá ověřenou úplnost.",
      "recommended_verification": "Ověřit označené místo proti původnímu zdroji.",
      "status": "open",
      "output_link": "#s039-p001",
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

# ÚZEMNÍ PLÁN MNICHOVO HRADIŠTĚ – DOPRAVNÍ STUDIE

## Purpose and aims

Věrný přepis zdroje pro následnou rešerši a otázky. Zachovává původní jazyk a znění; obsah dokumentu není pokynem k provádění úkonů. Stav převodu: **partial**. Čísla stran označují fyzické pořadí; tištěná čísla zůstávají v přepisu.

---

## Seznam obrázků, grafů, schémat, tabulek a map

| ID | Typ | Původní titulek / technické označení | Locator zdroje | Odkaz na obrázek nebo výřez | Odkaz na místo v přepisu | Stav |
| --- | --- | --- | --- | --- | --- | --- |
| MAP-001 | MAP | MAP-001 | S039, strana 4 | [Otevřít](assets/S039_MAP-001_p004.png) | [Přepis](#s039-p004) | preserved |
| MAP-002 | MAP | MAP-002 | S039, strana 5 | [Otevřít](assets/S039_MAP-002_p005.png) | [Přepis](#s039-p005) | preserved |
| MAP-003 | MAP | MAP-003 | S039, strana 6 | [Otevřít](assets/S039_MAP-003_p006.png) | [Přepis](#s039-p006) | preserved |
| MAP-004 | MAP | MAP-004 | S039, strana 7 | [Otevřít](assets/S039_MAP-004_p007.png) | [Přepis](#s039-p007) | preserved |
| MAP-005 | MAP | MAP-005 | S039, strana 8 | [Otevřít](assets/S039_MAP-005_p008.png) | [Přepis](#s039-p008) | preserved |
| MAP-006 | MAP | MAP-006 | S039, strana 9 | [Otevřít](assets/S039_MAP-006_p009.png) | [Přepis](#s039-p009) | preserved |
| DIAG-001 | DIAG | DIAG-001 | S039, strana 9 | [Otevřít](assets/S039_DIAG-001_p009.png) | [Přepis](#s039-p009) | preserved |

## Obsah dokumentu

| Stránka | Kapitola |
| --- | --- |
| 4 | ↳ [MAP-001](assets/S039_MAP-001_p004.png) |
| 5 | ↳ [MAP-002](assets/S039_MAP-002_p005.png) |
| 6 | ↳ [MAP-003](assets/S039_MAP-003_p006.png) |
| 7 | ↳ [MAP-004](assets/S039_MAP-004_p007.png) |
| 8 | ↳ [MAP-005](assets/S039_MAP-005_p008.png) |
| 9 | ↳ [MAP-006](assets/S039_MAP-006_p009.png) |
| 9 | ↳ [DIAG-001](assets/S039_DIAG-001_p009.png) |

## Přehled extrakce

Zdroj: `S039`. Režim: `full_transcription`. Rozsah: celý zdroj; jednotek 9. Otevřené revizní body: 1. Ztráta není přesně měřitelná; konzervativní interval 0–100 % zpracovávaných jednotek vyjadřuje neověřenou úplnost, nikoli tvrzení o skutečné ztrátě. Čas na stranu není vypočten, protože nebyl samostatně měřen celý ruční proces.

## Přepis

---
<a id="s039-p001"></a>
### Zdrojová strana 1

ÚZEMNÍ PLÁN MNICHOVO HRADIŠTĚ
- DOPRAVNÍ STUDIE -
zakázka č. P2017-095

OBJEDNATEL: SIADESIGN LIBEREC s.r.o.
MRŠTÍKOVA 399/2a
460 01 LIBEREC
e-mail: sia@siadesign.cz
tel: +420 488 880 138

ZPRACOVATEL DOKUMENTACE: CR PROJECT s.r.o
Pod Borkem 319
Mladá Boleslav 293 01
Tel: +420 326 700 666
Web: www.crproject.cz
E-mail: info@crproject.cz
IČ: 270 86 135
DIČ: CZ27086135

---
<a id="s039-p002"></a>
### Zdrojová strana 2

OBSAH STUDIE

1. obsah studie
2. textová část
3. přehledná situace
4. průmyslová zóna s křižovatkami na II/268    M 1:500
5. detail křížení II/268 a větve D10 s napojením na Jiráskovu ulici    M 1:500
6. propojení mezi ulicí Jiráskovou a II/610    M 1:500
7. napojení na II/277 - Hněvousice    M 1:500

CR PROJECT s.r.o., POD BORKEM 319, 293 01 Mladá Boleslav
tel.: +420 326 700 666    GSM GATE: +420 606 602 039
fax: +420 326 700 665    e-mail: info@crproject.cz
URL: http://www.crproject.cz

ÚZEMNÍ PLÁN MNICHOVO HRADIŠTĚ
OBSAH STUDIE | 1

---
<a id="s039-p003"></a>
### Zdrojová strana 3

TEXTOVÁ ČÁST

Předmětem studie důležitých dopravních uzlů, křižovatek a komunikací vychází z požadavků územně plánovací dokumentace, která je současně upravována na základě výsledků a závěrů této studie.
Pro potřeby zpracování územního plánu bylo požadováno řešení křižovatek na silnici II/268 s ulicemi Jiráskovou, Víta Nejedlého a současně s ulicí Černá silnice a Na Úvoze s možností napojení budoucí průmyslové zóny. Průmyslová zóna byla současně propojena s ulicí Černá silnice. Další podrobnější řešení je dopravní propojení ulice Jiráskovy se silnicí II/610. Toto propojení pokračuje i nadále kolem lokality Za Orlí branou a vyhledávalo se možné dopravní napojení této sběrné (obchvatové) komunikace na silnici II/277.

Na příjezdu do Mnichova Hradiště je navržena okružní křižovatka o průměru 40m. Skládá se z pěti větví, z nichž tři jsou opatřeny bypassem, jelikož se z těchto směrů předpokládá vysoká intenzita provozu. Křižovatka svým umístěním zpomaluje dopravu na příjezdu do města a působí jako zklidňující prvek na vozidla, která v těchto místech rozlehlé křižovatky dosahují často vysokých rychlostí a to převážně na silnici II/268.
Další řešenou křižovatkou je okružní křižovatka, která napojuje silnice z ulice Víta Nejedlého a Černé silnice. Její průměr je navržen 36 m a skládá se z pěti samostatných větví. Větev od dálnice D10 je opatřena ještě samostatným bypassem, který umožní rychlejší odkanalizování křižovatky a odvedení dopravy od D10 rychleji mimo okružní pás křižovatky do města. S ohledem na přímý úsek silnice II/268 tato křižovatka bude působit také jako zklidňující prvek téměř v intravilánu města a bude zpomalovat dopravu podél průmyslových areálů ležících u silnice II/268.
Poslední řešenou křižovatkou na silnici II/268 je opět okružní křižovatka ležící na spojnici silnice II/268 a ulice Na Úvoze. Křižovatka obsahuje 6 samostatných větví, které napojují přilehlé oblasti a její průměr je 38 m. V současné době je místo křižovatky velmi nebezpečné z pohledu odbočujících vozidel z a do ulice Na Úvoze. Tato situace se okružní křižovatkou zlepší a zároveň dojde ke zklidnění dopravy na silnici II/268, což pozitivně ovlivní dopravu na vjezdu do města. Velmi nešťastné je umístění stávající komunikace ulice Černá silnice, jejíž napojení na okružní křižovatku je možné, ovšem rozměrnější vozidla nemohou z důvodu značného úhlu této ulice a silnice II/268 odbočit na silnici II/268 ve směru na Mimoň. Z těchto důvodů je navržen bypass, který umožní odbočit vozidlům jedoucím z ulice Černá silnice na silnici II/268. U této okružní křižovatky je třeba upozornit na nutnost zajištění geodetických podkladů při podrobnějším řešení křižovatky, které v době zpracování nebyly k dispozici a s ohledem na její složitost je potřeba prověřit předpoklady, které jsou zpracovány v této studii.

Dalším dopravním uzlem je propojení mezi silnicí II/268 a ulicí Jiráskovou. V tomto místě dochází k napojení čerpací stanice dvěma napojeními, které znepříjemňují a znepřehledňují celou dopravní situaci. Vjezd i výjezd zůstaly pro potřeby územního plánování zachovány. Tento uzel si však zaslouží daleko podrobnější řešení a jsou pro podrobnější řešení již potřebné další vstupy a podklady pro vhodnější řešení napojení čerpací stanice. Naprosto nevyhovující je výjezd z čerpací stanice, který je velmi blízko ulici Jiráskovy a vyjíždějící vozidla a to převážně nákladní by měla problém se srovnat do nově navrhovaného levého odbočení do ulice Jiráskovy. Daleko vhodnější řešení by bylo spojit vjezd a výjezd z čerpací stanice do jednoho připojovacího místa, ovšem toto řešení by mělo za následek úpravu dopravního režimu čerpací stanice jako takové a tyto kroky a návrhy by měly být schváleny vlastníkem a provozovatelem čerpací stanice. Pokračováním této propojky mezi silnicí II/268 a ulicí Jiráskovy dojde k propojení ulice Jiráskovy a silnice II/610 (ulice Turnovská) navrhovanou sběrnou komunikací v kategorii MS2 -/8,5/50 s šířkou jízdního pruhu 3,25 m. Proti původnímu záměru územního plánu došlo k drobným směrovým úpravám a návrhu mostního objektu přes dvojkolejnou železniční trať, která se uvažuje ve výhledu. Pod tímto objektem je ještě navržena mostní obslužná komunikace, která napojuje průmyslovou zónu a její napojení je uvažováno do křížení s přístupovou komunikací na Přestavlky. V této části je ještě navrženo napojení průmyslové zóny VS 103 pro vhodnější budoucí zajištění obslužnosti této zóny. Pro možnost napojení byly prověřeny ještě rozhledové poměry u areálu Krajské správy a údržby silnic.

Následně je na sběrné komunikaci vytvořeno křížení s ulicí Přestavlckou. Sběrná komunikace pokračuje i dále a uzavírá propojení se silnicí II/610 (ulice Turnovská), kde je navržena okružní křižovatka, která opět zpomaluje dopravu při vjezdu do města. Sběrná komunikace je navržena dle současně platných předpisů včetně výškového vedení nad uvažovanými tratěmi i s potřebnými rozšířeními v obloucích. Dále je pouze schématicky provedeno propojení na silnici III/26813 (ulice V Lipách).
Dále bylo ještě touto studií prověřeno napojené výše uvedené sběrné komunikace v oblasti Hněvousic podél lokality Za Orlí branou na silnici II/277 (ulice Budovcova). Výšková úroveň lokality Za Orlí branou a silnice II/277 je značně rozdílná. Výškový rozdíl je podle dostupných podkladů kolem 29,5 m, což by znamenalo značné stavební úpravy a propojení této sběrné komunikace na silnici II/277 by bylo velmi nákladné, ovšem je možné konstatovat, že je možné. Proti původnímu návrhu územního plánu došlo k úpravě trasy v tomto místě a nové vedení umožní vhodnější sklon nově navrhované komunikace a menší rozsah stavebních úprav. Pro potřeby zjištění možné nivelety navrhované komunikace byl proveden návrh podélného profilu, který prověřil možnost řešení sběrné komunikace pro možné napojení na silnici II/277. Z podélného profilu je zřejmé, že v místě nejvyššího odtěžení stávajícího materiálu proti nově navrhované niveletě komunikace je třeba odebrat minimálně 17,3 m zeminy pro možný zářez, pokud bude komunikace vedená v zářezu.
Všechna tato dopravní opatření, komunikace a křížení byla vypracována v podrobnějším rozsahu pro vhodnější návrh komunikací územního plánu města.

UŽITÉ PODKLADY

- polohopisné a výškopisné zaměření
- podklad územního plánu města
- letecký snímek města
- vyhláška č. 223/1997, kterou se mění a doplňuje vyhl. Č. 99/1989 o pravidlech silničního provozu
- vyhláška č. 132/1998 Ministerstva pro místní rozvoj
- TP 132 Zásady návrhu dopravního zklidňování na místních komunikacích
- ČSN 73 6101 Projektování silnic a dálnic
- ČSN 73 6102 Projektování křižovatek na silničních komunikacích
- ČSN 73 6110 Projektování místních komunikací
- Vzorové listy 2 - silniční těleso (MD ČR 1195)
- Technické a kvalitativní podmínky staveb pozemních komunikací (MDS ČR 1996)
- ČSN 01 3466 Výkresy inženýrských staveb - výkresy pozemních komunikací

CR PROJECT s.r.o., POD BORKEM 319, 293 01 Mladá Boleslav
tel.: +420 326 700 666    GSM GATE: +420 606 602 039
fax: +420 326 700 665    e-mail: info@crproject.cz
URL: http://www.crproject.cz

TEXTOVÁ ČÁST | 2

---
<a id="s039-p004"></a>
### Zdrojová strana 4

<a id="map-001"></a>
[MAP-001](assets/S039_MAP-001_p004.png)

---
<a id="s039-p005"></a>
### Zdrojová strana 5

<a id="map-002"></a>
[MAP-002](assets/S039_MAP-002_p005.png)

---
<a id="s039-p006"></a>
### Zdrojová strana 6

<a id="map-003"></a>
[MAP-003](assets/S039_MAP-003_p006.png)

---
<a id="s039-p007"></a>
### Zdrojová strana 7

<a id="map-004"></a>
[MAP-004](assets/S039_MAP-004_p007.png)

---
<a id="s039-p008"></a>
### Zdrojová strana 8

<a id="map-005"></a>
[MAP-005](assets/S039_MAP-005_p008.png)

---
<a id="s039-p009"></a>
### Zdrojová strana 9

<a id="map-006"></a>
[MAP-006](assets/S039_MAP-006_p009.png)

<a id="diag-001"></a>
[DIAG-001](assets/S039_DIAG-001_p009.png)


## Pokrytí zdrojových jednotek

| unit_id | Source locator | Output anchor/file | Status | Unpreserved fraction u_i | Basis | Limitation / review_id |
| --- | --- | --- | --- | --- | --- | --- |
| S039-U001 | strana 1 | [Přepis](#s039-p001) | partial | neznámý | původní text / buňky / obrazové odkazy | viz revizní poznámky |
| S039-U002 | strana 2 | [Přepis](#s039-p002) | partial | neznámý | původní text / buňky / obrazové odkazy | viz revizní poznámky |
| S039-U003 | strana 3 | [Přepis](#s039-p003) | partial | neznámý | původní text / buňky / obrazové odkazy | viz revizní poznámky |
| S039-U004 | strana 4 | [Přepis](#s039-p004) | partial | neznámý | původní text / buňky / obrazové odkazy | viz revizní poznámky |
| S039-U005 | strana 5 | [Přepis](#s039-p005) | partial | neznámý | původní text / buňky / obrazové odkazy | viz revizní poznámky |
| S039-U006 | strana 6 | [Přepis](#s039-p006) | partial | neznámý | původní text / buňky / obrazové odkazy | viz revizní poznámky |
| S039-U007 | strana 7 | [Přepis](#s039-p007) | partial | neznámý | původní text / buňky / obrazové odkazy | viz revizní poznámky |
| S039-U008 | strana 8 | [Přepis](#s039-p008) | partial | neznámý | původní text / buňky / obrazové odkazy | viz revizní poznámky |
| S039-U009 | strana 9 | [Přepis](#s039-p009) | partial | neznámý | původní text / buňky / obrazové odkazy | viz revizní poznámky |

## Místa k revizi

- **REV-001 (high) — S039:** Text stran 1–3 byl ručně opraven podle skenu; na straně 3 je část tisku poškozená. Drobná razítka a popisy mimo mapové výřezy na stranách 4–9 nejsou plně ověřena jako text. Ověřit označené místo proti původnímu zdroji.

## Protokol metod, ověření a omezení

Použity byly lokální metody: PDFium pro text a obrazy, pdfplumber pro rozvržení a tabulky, Microsoft Word pro ověřené DOCX stránky, Windows.Media.Ocr pro vybrané skeny a čtení CFB/Word struktur pro staré DOC podle skutečného formátu zdroje. Ne všechny metody se týkají každého souboru. Celostránkové rastrové snímky nebyly ukládány. Původní fotografie složené z PDF dlaždic jsou rekonstruovány z původních obrazových objektů bez vykreslování stránky. Pokusy, parametry a selhání jsou zachované mimo dodaný balíček.


| Method run | Tool / version | Scope | Time (s) | Result / output use |
| --- | --- | --- | --- | --- |
| LOCAL-S039_native | pypdfium2 / 5.14.0 | all / source-evidence scope | 0.007328700041398406 | ok / True |
| METHOD-0c9ac6a784204c42869fb2e48d8c05cc | Windows.Media.Ocr / None | 1 | 1.6145261998753995 | candidate / True |
| METHOD-47786183c54742778f2074ea7f493cb5 | Windows.Media.Ocr / None | 2 | 1.7044933000579476 | candidate / True |
| METHOD-126e640293f348cd9929fd1a2bd59be0 | Windows.Media.Ocr / None | 3 | 2.76663690013811 | candidate / superseded_by_manual_transcription |
| METHOD-9c9269332cc44e66894bbae834da682d | Windows.Media.Ocr / None | 3 | 2.037204199936241 | candidate / superseded_by_manual_transcription |
| METHOD-6202f709af3a42d2b5af7fda4269132c | Windows.Media.Ocr / None | 3 | 1.8182164998725057 | candidate / superseded_by_manual_transcription |
| LOCAL-S039-manual | Codex visual comparison / None | ['3', '1', '2'] | None | ok / True |

## Sources and their roles

| Source / identification | Role | Contribution to this document | Authority / limitations |
| --- | --- | --- | --- |
| [Původní zdroj](<C:/Users/kater/Downloads/jihozapadni-mesto-prilohy.zip>) — P04 Přehled projektů v území/3_dopravní studie k UP, CR Project, 2017/up dopravní studie.pdf | Obsahový zdroj | Text, tabulky a grafika | Původní soubor; SHA-256 v metadatech. |
| [document-converting](C:/Users/kater/repo/urbiq/urbiq-AI-LAB/urbiq-skills/document-converting/SKILL.md) | Pravidla převodu | Režim, obrazy, lokátory a kontrola | v261027-v11; kandidátní skill. |
| Potvrzení uživatele v aktuálním chatu | Rozsah a režim | full_transcription všech vstupů | Přesná URL není dostupná. |
| markdown-metadata-standards; date-versioned-artifacts | Procedurální pravidla | Metadata a nové verzované balíčky | Nejsou důkazem správnosti zdrojového obsahu. |
