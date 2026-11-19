---
{
  "created_at": "2026-11-11 14:03:13",
  "created_date": "2026-11-11",
  "created_by": "Codex – Kateřina Kováříková",
  "updated_at": "2026-11-11 14:03:13",
  "updated_by": "Codex",
  "revised_by": null,
  "timezone": "Europe/Prague",
  "codex_dialogue": null,
  "dialogue_location_note": "Aktuální lokální chat Codex; přesná URL nebyla zpřístupněna.",
  "dialogue_iteration": 2,
  "version_id": "DOCONV-261111-S075-v01",
  "status": "complete_with_review",
  "scope": "Úplný přepis uživatelem potvrzeného zdroje",
  "extraction_id": "DOCONV-261111-S075",
  "instructions_version": "v261027-v11",
  "instructions_sha256": "77e2c0270350d79d01f68b9e5a47914e9ef1e8c0c5851430e15ebfc61300328c",
  "extraction_mode": "full_transcription",
  "mode_confirmation": "Uživatel: chci full_transcription; společný vstupní soupis 93 souborů potvrzen.",
  "intake_confirmed_at": null,
  "intake_confirmation_note": "Potvrzení je doloženo zprávou v tomto chatu; přesný čas zprávy není v rozhraní dostupný.",
  "document_title": null,
  "source_filename": "Z 1.NP sesazene_85.pdf",
  "source_archive_entry": "P04 Přehled projektů v území/7_BD v cestkach, Stavokombinat invest, 2023/Z 1.NP sesazene_85.pdf",
  "source_format": "PDF",
  "source_sha256": "1316294753c529189bb3810091a8f283bbc3b84b6ed8ff3693486c11868d2b94",
  "source_size_bytes": 2276254,
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
  "review_open_count": 2,
  "visual_policy": "reference_only_all_content_images_tables_by_mode",
  "excluded_visual_policy": "omit_logos_and_decorations_only",
  "full_page_snapshots": false,
  "package_contents_listing": false,
  "excluded_visuals": [],
  "excluded_visual_count": 0,
  "source_visual_occurrences": 0,
  "saved_visual_count": 2,
  "table_count": 1,
  "extraction_started_at": "2026-11-11T13:21:40.560433+01:00",
  "extraction_finished_at": "2026-11-11 14:03:13",
  "processing_seconds": null,
  "processing_seconds_per_page": null,
  "page_timing_note": "Strojové pokusy jsou časované v pracovních důkazech; vizuální klasifikace a ruční přepis nebyly měřeny samostatně. Úplný čas na stranu proto není odhadován.",
  "automated_native_seconds": 0.24458239995874465,
  "automated_layout_seconds": 15.958295800024644,
  "automated_export_seconds": 0.26181959989480674,
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
    "workspace_relative_directory": "05_DELIVERY/document-converting-outputs/261111_jihozapadni-mesto-s075-z-1-np-sesazene-85_v01",
    "main_markdown_relative_path": "05_DELIVERY/document-converting-outputs/261111_jihozapadni-mesto-s075-z-1-np-sesazene-85_v01/261111_jihozapadni-mesto-s075-z-1-np-sesazene-85_extraction_v01.md",
    "sharepoint_url": null,
    "sync_status": "not_verified",
    "limitation": "Ověřeno lokální uložení; synchronizace SharePoint není pozorována."
  },
  "source_name": "Z 1.NP sesazene_85.pdf",
  "document_type_note": "Přesná typologie není samostatně ověřena; druh zdroje plyne z původního názvu a obsahu.",
  "method_runs": [
    {
      "method_run_id": "LOCAL-S075_layout",
      "method_family": "layout_parser",
      "tool": "pdfplumber",
      "tool_version": "0.11.9",
      "tool_versions": null,
      "helper_version": null,
      "parameters": {
        "scope": "explicit page regions",
        "source_evidence": "S075_layout.json"
      },
      "source_units": "all / source-evidence scope",
      "started_at": null,
      "finished_at": null,
      "elapsed_seconds": 15.958295800024644,
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
      "evidence_workspace_relative": "tmp/261111_jihozapadni_intake_v01/S075_layout.json",
      "evidence_sha256": "7235f3205ba6a892b928d262d2c26d9dee5ef04f968e099817f35c393cea6e89",
      "metadata_limitations": "Nevyplněné hodnoty nebyly původním pomocníkem měřeny nebo zpřístupněny."
    },
    {
      "method_run_id": "LOCAL-S075_native",
      "method_family": "native_text",
      "tool": "pypdfium2",
      "tool_version": "5.14.0",
      "tool_versions": null,
      "helper_version": null,
      "parameters": {
        "scope": "all original units",
        "source_evidence": "S075_native.json"
      },
      "source_units": "all / source-evidence scope",
      "started_at": "2026-11-11T13:21:40.560433+01:00",
      "finished_at": "2026-11-11T13:21:40.803449+01:00",
      "elapsed_seconds": 0.24458239995874465,
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
      "evidence_workspace_relative": "tmp/261111_jihozapadni_intake_v01/S075_native.json",
      "evidence_sha256": "cdfe26dbad9b8fdabe5f7205ef0e7703c67321caf32d471a4e2eaa953f01ac7a",
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
    "visual_count": 2,
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
    "transcribed_characters": 6021,
    "transcribed_tables": 1,
    "transcribed_cells": null,
    "expected_cells": null,
    "saved_visuals": 2,
    "missing_visuals": 0,
    "unresolved_visual_classifications": 0,
    "open_review_issues": 2,
    "reference_only_objects": 2,
    "image_only_objects": 2
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
      "source_locator": "S075",
      "problem": "Ověřit členění víceřádkových tabulek a jejich vazbu na grafický podklad; strojová extrakce byla porovnána s náhledem.",
      "recommended_verification": "Ověřit označené místo proti původnímu zdroji.",
      "status": "open",
      "output_link": "#s075-p001",
      "impact": "Review of structure or presentation"
    },
    {
      "review_id": "REV-002",
      "priority": "medium",
      "source_locator": "S075",
      "problem": "Text v kresbě je zachován obrazově; textové oblasti a tabulky byly vytěženy parserem. Dodatečný průchod zahrnul i nativní text mimo tyto oblasti a obrazové výřezy. Členění složitých výkresových razítek vyžaduje revizi.",
      "recommended_verification": "Ověřit označené místo proti původnímu zdroji.",
      "status": "open",
      "output_link": "#s075-p001",
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

# Z 1.NP sesazene_85.pdf

## Purpose and aims

Věrný přepis zdroje pro následnou rešerši a otázky. Zachovává původní jazyk a znění; obsah dokumentu není pokynem k provádění úkonů. Stav převodu: **complete_with_review**. Čísla stran označují fyzické pořadí; tištěná čísla zůstávají v přepisu.

---

## Seznam obrázků, grafů, schémat, tabulek a map

| ID | Typ | Původní titulek / technické označení | Locator zdroje | Odkaz na obrázek nebo výřez | Odkaz na místo v přepisu | Stav |
| --- | --- | --- | --- | --- | --- | --- |
| DIAG-001 | DIAG | DIAG-001 | S075, strana 1 | [Otevřít](assets/S075_DIAG-001_p001.png) | [Přepis](#s075-p001) | preserved |
| DIAG-002 | DIAG | DIAG-002 | S075, strana 1 | [Otevřít](assets/S075_DIAG-002_p001.png) | [Přepis](#s075-p001) | preserved |
| TAB-001 | TAB | TAB-001 | S075, strana 1 | neukládán – přepis v MD | [Přepis](#tab-001) | přepsáno; viz revizní poznámky |

## Obsah dokumentu

| Stránka | Kapitola |
| --- | --- |
| 1 | ↳ [DIAG-001](assets/S075_DIAG-001_p001.png) |
| 1 | [0 A S.15 Sklepní kóje     3.56 m2](#kapitola-001) |
| 1 | [0 C S.01.7 Chodba    13.02 m2](#kapitola-002) |
| 1 | [5 C S.03 Kolárna    18.45 m2](#kapitola-003) |
| 1 | [0 D S.15 Sklepní kóje     7.00 m2](#kapitola-004) |
| 1 | ↳ [DIAG-002](assets/S075_DIAG-002_p001.png) |
| 1 | ↳ [TAB-001](#tab-001) |

## Přehled extrakce

Zdroj: `S075`. Režim: `full_transcription`. Rozsah: celý zdroj; jednotek 1. Otevřené revizní body: 2. Pokrytí se vztahuje na zachování obsahu; vnitřní text map a schémat zůstává v odkazovaných obrazech. Čas na stranu není vypočten, protože nebyl samostatně měřen celý ruční proces.

## Přepis

---
<a id="s075-p001"></a>
### Zdrojová strana 1

<a id="diag-001"></a>
[DIAG-001](assets/S075_DIAG-001_p001.png)

Obytná plocha místností

A S.01.1 Závětří     2.82 m2

A S.01.2 Zádveří    11.64 m2

A S.01.3 Chodba    10.72 m2

A S.01.4 Schodišťový pros    11.90 m2

A S.01.5 Výtahová šachta     3.15 m2

A S.01.6 Sklepní chodba    10.15 m2

A S.03 Sklad    16.43 m2

A S.04 Sklad    13.95 m2

A S.05 Sklad    22.31 m2

A S.06 Kolárna    23.22 m2

A S.07 2-garáž    35.09 m2

A S.08 1-garáž    28.56 m2

A S.09 Sklad    15.13 m2

A S.10 Sklepní chodba     6.38 m2

A S.11 Sklepní kóje     3.56 m2

B

A S.12 Sklepní kóje     2.97 m2

A S.13 Sklepní kóje     2.97 m2

t

k A S.14 Sklepní kóje     3.56 m2

0

<a id="kapitola-001"></a>
#### 0 A S.15 Sklepní kóje     3.56 m2

8 e

2

1

A S.16 Sklepní kóje     2.97 m2

j

b A S.17 Sklepní kóje     2.97 m2

A S.18 Sklepní kóje     3.56 m2

o

A+B P.01 2-garáž    33.34 m2

A+B P.02 1-garáž    25.37 m2

A+B P.03 2-garáž    33.33 m2

A+B P.04 1-garáž    22.66 m2

A+B P.05 1-garáž    22.66 m2

A+B P.06 2-garáž    40.80 m2

A+B P.07 1-garáž    28.56 m2

A+B P.08 2-garáž    40.80 m2

A+B P.09 1-garáž    22.66 m2

A+B P.10 1-garáž    22.66 m2

A+B S.01 sklepní kóje    11.12 m2

A+B S.02 sklepní kóje    11.12 m2

A+B S.03 sklepní kóje    11.12 m2

A+B S.04 sklepní kóje    11.12 m2

B S.01.1 Závětří     2.82 m2

B S.01.2 Zádveří    11.64 m2

B S.01.3 Chodba    10.72 m2

B S.01.4 Schodišťový pros    11.90 m2

B S.01.5 Výtahová šachta     3.15 m2

B S.01.6 Sklepní chodba    14.80 m2

B S.03 Sklad    16.43 m2

B S.04 Sklad    13.95 m2

B S.05 Sklad    22.31 m2

B S.06 Kolárna    23.22 m2

B S.07 2-garáž    35.09 m2

B S.08 1-garáž    25.29 m2

B S.09 Sklepní chodba     9.47 m2

B S.10 Sklepní kóje     5.93 m2

B S.11 Sklepní kóje     7.13 m2

B S.12 Sklepní kóje     3.27 m2

B S.13 Sklepní kóje     3.27 m2

B S.14 Sklepní kóje     3.56 m2

B S.15 Sklepní kóje     3.56 m2

B S.16 Sklepní kóje     2.97 m2

B S.17 Sklepní kóje     2.97 m2

B S.18 Sklepní kóje     3.56 m2

C S.01.1 Závětří     2.82 m2

C S.01.2 Zádveří    12.85 m2

C S.01.3 Mezichodba    10.69 m2

C S.01.4 Chodba    10.72 m2

C S.01.5 Schodišťový pros    11.90 m2

C S.01.6 Výtahová šachta     3.15 m2

<a id="kapitola-002"></a>
#### 0 C S.01.7 Chodba    13.02 m2

0

1

<a id="kapitola-003"></a>
#### 5 C S.03 Kolárna    18.45 m2

1

C S.04 Spol. prostor    23.82 m2

C S.05 Sklad    11.25 m2

C S.06 Sklad    11.63 m2

C S.07 1-garáž    28.56 m2

C S.08 2-garáž    35.09 m2

C S.09 Sklepní chodba    21.20 m2

C S.10 Sklepní kóje     5.97 m2

C S.11 Sklepní kóje     5.78 m2

C S.12 Sklepní kóje     5.78 m2

C S.13 Sklepní kóje     5.78 m2

C S.14 Sklepní chodba    11.62 m2

C S.15 Sklepní kóje     7.00 m2

C S.16 Sklepní kóje     7.00 m2

C S.17 Sklepní kóje     7.00 m2

C S.18 Sklepní kóje     7.00 m2

C S.19 Sklepní kóje     5.67 m2

C S.20 Sklepní kóje     5.67 m2

C S.21 Sklepní kóje     5.67 m2

C+D-P.02 2-garáž    29.93 m2

C+D-P.03 1-garáž    15.23 m2

C+D-P.04 2-garáž    29.14 m2

C+D-P.05 2-garáž    28.88 m2

C+D-P.06 2-garáž    29.14 m2

C+D-P.07 2-garáž    29.13 m2

C+D-P.08 2-garáž    30.98 m2

C+D-P.09 2-garáž    30.98 m2

C+D-P.10 Průjezd garáže   261.87 m2

D S.01.1 Závětří     2.82 m2

D S.01.2 Zádveří    11.64 m2

D S.01.3 Chodba    10.72 m2

D S.01.4 Schodišťový pros    11.90 m2

D S.01.5 Výtahová šachta     3.15 m2

D S.01.6 Chodba    13.61 m2

D S.03 Kolárna    17.76 m2

D S.04 Sklad    12.62 m2

D S.05 Spol. prostor    35.09 m2

D S.06 Sklad    14.46 m2

D S.07 1-garáž    25.29 m2

D S.08 2-garáž    35.09 m2

D S.09 Sklepní chodba    21.19 m2

D S.10 Sklepní kóje     5.97 m2

D D S.11 Sklepní kóje     5.78 m2

D S.12 Sklepní kóje     5.78 m2

D S.13 Sklepní kóje     5.78 m2

t

k D S.14 Sklepní chodba    11.62 m2

0

<a id="kapitola-004"></a>
#### 0 D S.15 Sklepní kóje     7.00 m2

8 e

2

1

D S.16 Sklepní kóje     7.00 m2

j

b D S.17 Sklepní kóje     7.00 m2

D S.18 Sklepní kóje     7.00 m2

o

D S.19 Sklepní kóje     5.67 m2

D S.20 Sklepní kóje     5.67 m2

D S.21 Sklepní kóje     5.67 m2

Komerční prostor    97.55 m2  1985.10 m2

Komerční prostor    97.55 m2  1985.10 m2

LEGENDA KONSTRUKCÍ

PŘÍČKY PŘÍZEMÍ 1.NP - VÁPENOPÍSKOVÉ BLOKY PRO RUČNÍ ZDĚNÍ ZDIVA Š. 100mm, POVRCH- SÁDROVÁ OMÍTKA

POŽÁRNÍ ODOLNOST EI 120 DP1,TŘÍDA REAKCE NA OHEŇ A1

VÁŽENÁ LABORATORNÍ NEPRŮZVUČNOST Rw= 44dB

KONTAKTNÍ FASÁDNÍ ZATEPLOVACÍ SYSTÉM ETICS- ŠEDÝ POLYSTYREN

TL. 150mm (2.NP-5.NP), TL. 100mm (1.NP)

SOUČINITEL TEPELNÉ VODIVOSTI = 0,032 W/mK, TŘÍDA REAKCE NA OHEŇ E

POVRCH- TENKOVRSTVÁ OMÍTKA + PERLINKA (NADZEMNÍ BYTOVÁ PODLAŽÍ), MARMOLITOVÁ DEKORAČNÍ OMÍTKA (PŘÍZEMÍ)

POLOPŘÍČKY SKLEPNÍCH KÓJÍ PŘÍZEMÍ- VÁPENOPÍSKOVÉ BLOKY PRO RUČNÍ ZDĚNÍ ZDIVA Š. 70mm, POVRCH- MALÍŘSKÝ NÁTĚR

POŽÁRNÍ ODOLNOST EI 120 DP1, TŘÍDA REAKCE NA OHEŇ A1, VÝŠKA POLOPŘÍČKY 2,0m

ŽB NOSNÉ PREFABRIKOVANÉ STĚNY / PANELY PŘÍZEMÍ TL. 200mm; POVRCH- TENKOVRSTVÁ OMÍTKA, STĚRKA

POŽADOVANÁ POŽÁRNÍ ODOLNOST MIN. REI 60 DP1

VNITŘNÍ ZATEPLENÍ STĚN A SPODNÍ STRANY STROPU 1.NP

NEHOŘLAVÁ IZOLACE Z KAMENNÉ VLNY ROCKWOOL ROCKTON PREMIUM

TL. 200mm (STROP); TL. 100mm (STĚNY)

SOUČINITEL TEPELNÉ VODIVOSTI = 0,033 W/mK ; TŘÍDA REAKCE NA OHEŇ A1

POVRCH- TENKOVRSTVÁ OMÍTKA + PERLINKA

KERAMICKÉ NOSNÉ GARAŽOVÉ STĚNY TL. 250mm NA MALTU PRO TENKÉ SPÁRY, POVRCH- JÁDROVÁ OMÍTKA

SOUČINITEL TEPELNÉ VODIVOSTI = 0,370 W/mK

POŽÁRNÍ ODOLNOST REI 60 DP1, TŘÍDA REAKCE NA OHEŇ A1

ŽB NOSNÉ GARAŽOVÉ STĚNY TL. 200, 300mm Z TVÁRNIC PRO ZTRACENÉ BEDNĚNÍ, POVRCH- JÁDROVÁ OMÍTKA

POŽADOVANÁ POŽÁRNÍ ODOLNOST MIN. REI 60 DP1

STŘEŠNÍ VNITŘNÍ SVOD HROMADNÝCH GARÁŽÍ DN125

S

ČERVENĚ VYZNAČENY ZMĚNY OPROTI DOKUMENTACI PRO STAVEBNÍ POVOLENÍ

<a id="diag-002"></a>
[DIAG-002](assets/S075_DIAG-002_p001.png)

S

červen 2023

±0,00 = 235,45 m.n.m.

<a id="tab-001"></a>
**TAB-001**
| Poznámka extrakce: sloupec 1 | Poznámka extrakce: sloupec 2 |
| --- | --- |
| Investor:<br>STAVOKOMBINÁT INVEST spol. s r.o.<br>Vesecká 97/12, 460 06 Liberec 6<br>IČO: 482 90 645 |  |
| Projektant: ANITAS s.r.o., IČO: 257 55 668<br>Turnovská 21<br>295 01 MNICHOVO HRADIŠTĚ<br>tel.: 326 774 215<br>e-mail: anitas@anitas.cz<br>projekční atelier |  |
| Místo stavby: KÚ Mnichovo Hradiště<br>p.č.1992/200, 1992/201, 1992/203,<br>1992/204, 1992/205 a 1992/207 |  |
| Kraj: Středočeský |  |
| Stupeň: Dokumentace změny stavby před dokončením |  |
| HIP: Ing. Tomáš Rakouský |  |
| HAP: Ing. arch. Richard Černý |  |
| Odpovědný projektant: Ing. Tomáš Rakouský |  |
| Vypracoval: Ing. Jan Hanšpach |  |
| Název stavby:<br>4 BYTOVÉ DOMY V ULICI<br>V CESTKÁCH, MN. HRADIŠTĚ<br>Stavební objekt: SO 01 až SO 04 (objekt A až D)<br>Část dokumentace: D.1.1. ARCHITEKTONICKO<br>STAVEBNÍ ČÁST |  |
| Název dokumentu: PŮDORYS 1.NP<br>(objekt A+B+C+D) |  |
| Číslo zak.: 63/23<br>Formát: 1680x1200<br>Datum: 06.2023<br>Měřítko: 1:50<br>Číslo výkresu: Objekt č.:<br>SO 01<br>D.1.1.01 SO 02<br>SO 03<br>SO 04 | Číslo paré: |
| Číslo výkresu:<br>D.1.1.01 |  |


## Pokrytí zdrojových jednotek

| unit_id | Source locator | Output anchor/file | Status | Unpreserved fraction u_i | Basis | Limitation / review_id |
| --- | --- | --- | --- | --- | --- | --- |
| S075-U001 | strana 1 | [Přepis](#s075-p001) | complete | 0 | původní text / buňky / obrazové odkazy | viz revizní poznámky |

## Místa k revizi

- **REV-001 (medium) — S075:** Ověřit členění víceřádkových tabulek a jejich vazbu na grafický podklad; strojová extrakce byla porovnána s náhledem. Ověřit označené místo proti původnímu zdroji.

- **REV-002 (medium) — S075:** Text v kresbě je zachován obrazově; textové oblasti a tabulky byly vytěženy parserem. Dodatečný průchod zahrnul i nativní text mimo tyto oblasti a obrazové výřezy. Členění složitých výkresových razítek vyžaduje revizi. Ověřit označené místo proti původnímu zdroji.

## Protokol metod, ověření a omezení

Použity byly lokální metody: PDFium pro text a obrazy, pdfplumber pro rozvržení a tabulky, Microsoft Word pro ověřené DOCX stránky, Windows.Media.Ocr pro vybrané skeny a čtení CFB/Word struktur pro staré DOC podle skutečného formátu zdroje. Ne všechny metody se týkají každého souboru. Celostránkové rastrové snímky nebyly ukládány. Původní fotografie složené z PDF dlaždic jsou rekonstruovány z původních obrazových objektů bez vykreslování stránky. Pokusy, parametry a selhání jsou zachované mimo dodaný balíček.


| Method run | Tool / version | Scope | Time (s) | Result / output use |
| --- | --- | --- | --- | --- |
| LOCAL-S075_layout | pdfplumber / 0.11.9 | all / source-evidence scope | 15.958295800024644 | ok / True |
| LOCAL-S075_native | pypdfium2 / 5.14.0 | all / source-evidence scope | 0.24458239995874465 | ok / True |

## Sources and their roles

| Source / identification | Role | Contribution to this document | Authority / limitations |
| --- | --- | --- | --- |
| [Původní zdroj](<C:/Users/kater/Downloads/jihozapadni-mesto-prilohy.zip>) — P04 Přehled projektů v území/7_BD v cestkach, Stavokombinat invest, 2023/Z 1.NP sesazene_85.pdf | Obsahový zdroj | Text, tabulky a grafika | Původní soubor; SHA-256 v metadatech. |
| [document-converting](C:/Users/kater/repo/urbiq/urbiq-AI-LAB/urbiq-skills/document-converting/SKILL.md) | Pravidla převodu | Režim, obrazy, lokátory a kontrola | v261027-v11; kandidátní skill. |
| Potvrzení uživatele v aktuálním chatu | Rozsah a režim | full_transcription všech vstupů | Přesná URL není dostupná. |
| markdown-metadata-standards; date-versioned-artifacts | Procedurální pravidla | Metadata a nové verzované balíčky | Nejsou důkazem správnosti zdrojového obsahu. |
