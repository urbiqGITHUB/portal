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
  "version_id": "DOCONV-261111-S057-v01",
  "status": "complete",
  "scope": "Úplný přepis uživatelem potvrzeného zdroje",
  "extraction_id": "DOCONV-261111-S057",
  "instructions_version": "v261027-v11",
  "instructions_sha256": "77e2c0270350d79d01f68b9e5a47914e9ef1e8c0c5851430e15ebfc61300328c",
  "extraction_mode": "full_transcription",
  "mode_confirmation": "Uživatel: chci full_transcription; společný vstupní soupis 93 souborů potvrzen.",
  "intake_confirmed_at": null,
  "intake_confirmation_note": "Potvrzení je doloženo zprávou v tomto chatu; přesný čas zprávy není v rozhraní dostupný.",
  "document_title": "ÚZEMNÍ STUDIE ÚS 7 – MNICHOVO HRADIŠTĚ",
  "source_filename": "00015099_text.pdf",
  "source_archive_entry": "P04 Přehled projektů v území/6_uzemni studie_US7, GLP, 2025/00015099_text.pdf",
  "source_format": "PDF",
  "source_sha256": "14d73e7a759e5dba94ad9338714d94e94e04faef1a84b21628c05f6bcf3d71a5",
  "source_size_bytes": 12587670,
  "document_type": null,
  "source_total_units": 25,
  "source_unit_type": "physical_page",
  "requested_scope": "celý zdroj včetně vnitřních příloh",
  "pagination_status": "verified",
  "pagination_method": "PDF physical pages via PDFium",
  "source_page_count": 25,
  "intake_limitations": [
    "Neověřené názvy jsou null; název souboru není zaměněn za ověřený titul."
  ],
  "duplicate_source_ids": [],
  "coverage_scope": "full_content",
  "coverage_basis": "equally weighted physical pages",
  "coverage_total_units": 25,
  "coverage_eligible_units": 25,
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
  "source_visual_occurrences": 37,
  "saved_visual_count": 16,
  "table_count": 1,
  "extraction_started_at": "2026-11-11T13:21:38.997898+01:00",
  "extraction_finished_at": "2026-11-11 14:03:11",
  "processing_seconds": null,
  "processing_seconds_per_page": null,
  "page_timing_note": "Strojové pokusy jsou časované v pracovních důkazech; vizuální klasifikace a ruční přepis nebyly měřeny samostatně. Úplný čas na stranu proto není odhadován.",
  "automated_native_seconds": 0.060196499805897474,
  "automated_layout_seconds": 1.7609809001442045,
  "automated_export_seconds": 0.24265020014718175,
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
    "workspace_relative_directory": "05_DELIVERY/document-converting-outputs/261111_jihozapadni-mesto-s057-00015099-text_v01",
    "main_markdown_relative_path": "05_DELIVERY/document-converting-outputs/261111_jihozapadni-mesto-s057-00015099-text_v01/261111_jihozapadni-mesto-s057-00015099-text_extraction_v01.md",
    "sharepoint_url": null,
    "sync_status": "not_verified",
    "limitation": "Ověřeno lokální uložení; synchronizace SharePoint není pozorována."
  },
  "source_name": "00015099_text.pdf",
  "document_type_note": "Přesná typologie není samostatně ověřena; druh zdroje plyne z původního názvu a obsahu.",
  "method_runs": [
    {
      "method_run_id": "LOCAL-S057_layout",
      "method_family": "layout_parser",
      "tool": "pdfplumber",
      "tool_version": "0.11.9",
      "tool_versions": null,
      "helper_version": null,
      "parameters": {
        "scope": "explicit page regions",
        "source_evidence": "S057_layout.json"
      },
      "source_units": "all / source-evidence scope",
      "started_at": null,
      "finished_at": null,
      "elapsed_seconds": 1.7609809001442045,
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
      "evidence_workspace_relative": "tmp/261111_jihozapadni_intake_v01/S057_layout.json",
      "evidence_sha256": "79bfe24fb1203a00a7aca662459c7ddfac812c6934bbcdf71956643b2a7a6154",
      "metadata_limitations": "Nevyplněné hodnoty nebyly původním pomocníkem měřeny nebo zpřístupněny."
    },
    {
      "method_run_id": "LOCAL-S057_native",
      "method_family": "native_text",
      "tool": "pypdfium2",
      "tool_version": "5.14.0",
      "tool_versions": null,
      "helper_version": null,
      "parameters": {
        "scope": "all original units",
        "source_evidence": "S057_native.json"
      },
      "source_units": "all / source-evidence scope",
      "started_at": "2026-11-11T13:21:38.997898+01:00",
      "finished_at": "2026-11-11T13:21:39.058884+01:00",
      "elapsed_seconds": 0.060196499805897474,
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
      "evidence_workspace_relative": "tmp/261111_jihozapadni_intake_v01/S057_native.json",
      "evidence_sha256": "e4861f96572be436216eaea5d0959bfbdfdd949f90f96893e53660c06d57408c",
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
    "unit_count": 25,
    "layout_features": [
      "see original page structure and located review issues"
    ],
    "table_count": 1,
    "visual_count": 16,
    "excluded_visual_count": 0,
    "scan_quality": "Unmeasured; raster text checked in indicated areas."
  },
  "elapsed_seconds": null,
  "verification_seconds": null,
  "processed_page_count": 25,
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
    "transcribed_characters": 31354,
    "transcribed_tables": 1,
    "transcribed_cells": null,
    "expected_cells": null,
    "saved_visuals": 16,
    "missing_visuals": 0,
    "unresolved_visual_classifications": 0,
    "open_review_issues": 0,
    "reference_only_objects": 16,
    "image_only_objects": 16
  },
  "coverage_unit_counts": {
    "complete": 25,
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

# ÚZEMNÍ STUDIE ÚS 7 – MNICHOVO HRADIŠTĚ

## Purpose and aims

Věrný přepis zdroje pro následnou rešerši a otázky. Zachovává původní jazyk a znění; obsah dokumentu není pokynem k provádění úkonů. Stav převodu: **complete**. Čísla stran označují fyzické pořadí; tištěná čísla zůstávají v přepisu.

---

## Seznam obrázků, grafů, schémat, tabulek a map

| ID | Typ | Původní titulek / technické označení | Locator zdroje | Odkaz na obrázek nebo výřez | Odkaz na místo v přepisu | Stav |
| --- | --- | --- | --- | --- | --- | --- |
| PHOTO-001 | PHOTO | PHOTO-001 | S057, strana 4 | [Otevřít](assets/S057_PHOTO-001_p004.png) | [Přepis](#s057-p004) | preserved |
| PHOTO-002 | PHOTO | PHOTO-002 | S057, strana 7 | [Otevřít](assets/S057_PHOTO-002_p007.png) | [Přepis](#s057-p007) | preserved |
| PHOTO-003 | PHOTO | PHOTO-003 | S057, strana 8 | [Otevřít](assets/S057_PHOTO-003_p008.png) | [Přepis](#s057-p008) | preserved |
| PHOTO-004 | PHOTO | PHOTO-004 | S057, strana 8 | [Otevřít](assets/S057_PHOTO-004_p008.png) | [Přepis](#s057-p008) | preserved |
| PHOTO-005 | PHOTO | PHOTO-005 | S057, strana 8 | [Otevřít](assets/S057_PHOTO-005_p008.png) | [Přepis](#s057-p008) | preserved |
| PHOTO-006 | PHOTO | PHOTO-006 | S057, strana 9 | [Otevřít](assets/S057_PHOTO-006_p009.png) | [Přepis](#s057-p009) | preserved |
| IMG-001 | IMG | IMG-001 | S057, strana 10 | [Otevřít](assets/S057_IMG-001_p010.png) | [Přepis](#s057-p010) | preserved |
| IMG-002 | IMG | IMG-002 | S057, strana 12 | [Otevřít](assets/S057_IMG-002_p012.png) | [Přepis](#s057-p012) | preserved |
| TAB-001 | TAB | TAB-001 | S057, strana 13 | neukládán – přepis v MD | [Přepis](#tab-001) | přepsáno; viz revizní poznámky |
| IMG-004 | IMG | IMG-004 | S057, strana 14 | [Otevřít](assets/S057_IMG-004_p014.png) | [Přepis](#s057-p014) | preserved |
| IMG-003 | IMG | IMG-003 | S057, strana 14 | [Otevřít](assets/S057_IMG-003_p014.png) | [Přepis](#s057-p014) | preserved |
| IMG-005 | IMG | IMG-005 | S057, strana 15 | [Otevřít](assets/S057_IMG-005_p015.png) | [Přepis](#s057-p015) | preserved |
| IMG-006 | IMG | IMG-006 | S057, strana 17 | [Otevřít](assets/S057_IMG-006_p017.png) | [Přepis](#s057-p017) | preserved |
| IMG-007 | IMG | IMG-007 | S057, strana 19 | [Otevřít](assets/S057_IMG-007_p019.png) | [Přepis](#s057-p019) | preserved |
| IMG-008 | IMG | IMG-008 | S057, strana 19 | [Otevřít](assets/S057_IMG-008_p019.png) | [Přepis](#s057-p019) | preserved |
| IMG-009 | IMG | IMG-009 | S057, strana 23 | [Otevřít](assets/S057_IMG-009_p023.png) | [Přepis](#s057-p023) | preserved |
| PHOTO-007 | PHOTO | PHOTO-007 | S057, strana 25 | [Otevřít](assets/S057_PHOTO-007_p025.png) | [Přepis](#s057-p025) | preserved |

## Obsah dokumentu

| Stránka | Kapitola |
| --- | --- |
| 1 | [ZÁKLADNÍ ÚDAJE O ÚZEMNÍ STUDII](#kapitola-001) |
| 1 | [NÁZEV](#kapitola-002) |
| 1 | [ŘEŠENÉ ÚZEMÍ](#kapitola-003) |
| 1 | [POŘIZOVATEL](#kapitola-004) |
| 1 | [OBJEDNATEL](#kapitola-005) |
| 1 | [ZHOTOVITELÉ / PROJEKTOVÝ TÝM](#kapitola-006) |
| 1 | [Technická infrastruktura, koordinace projektu](#kapitola-007) |
| 2 | [Urbanisticko-architektonické řešení](#kapitola-008) |
| 2 | [Dopravní řešení](#kapitola-009) |
| 2 | [Sadové úpravy](#kapitola-010) |
| 3 | [OBSAH DOKUMENTACE](#kapitola-011) |
| 3 | [ZÁKLADNÍ ÚDAJE O ÚZEMNÍ STUDII](#kapitola-012) |
| 3 | [TEXTOVÁ ČÁST:](#kapitola-013) |
| 3 | [1. DŮVODY ZPRACOVÁNÍ ÚZEMNÍ STUDIE](#kapitola-014) |
| 3 | [1.1 ZADÁNÍ A PODKLADY](#kapitola-015) |
| 3 | [2. VYMEZENÍ ŘEŠENÉHO ÚZEMÍ A JEHO CHARAKTERISTIKA](#kapitola-016) |
| 3 | [3. ZÁKLADNÍ ZÁSADY KONCEPCE ŘEŠENÉHO ÚZEMÍ](#kapitola-017) |
| 3 | [4. NÁVRH ŘEŠENÍ](#kapitola-018) |
| 3 | [5. ZELEŇ](#kapitola-019) |
| 3 | [6. DOPRAVA](#kapitola-020) |
| 3 | [7. ŘEŠENÍ INŽENÝRSKÝCH SÍTÍ](#kapitola-021) |
| 3 | [GRAFICKÁ ČÁST:](#kapitola-022) |
| 3 | [01 ŠIRŠÍ VZTAHY  1 : 5 000](#kapitola-023) |
| 3 | [02 VÝŘEZ ÚZEMNÍHO PLÁNU OBCE  1 : 2 500](#kapitola-024) |
| 3 | [03  VÝTAH PODMÍNEK ÚZEMNÍHO PLÁNU OBCE   -](#kapitola-025) |
| 3 | [04 HLAVNÍ VÝKRES  1 : 1 000](#kapitola-026) |
| 3 | [05  KOORDINAČNÍ VÝKRES  1 : 1 000](#kapitola-027) |
| 3 | [06  ULIČNÍ PROFILY  1 : 200](#kapitola-028) |
| 3 | [07  VÝKRES DOPRAVNÍ INFRASTRUKTURY  1 : 1 000](#kapitola-029) |
| 3 | [08  VÝKRES TECHNICKÉ INFRASTRUKTURY  1 : 1 000](#kapitola-030) |
| 3 | [09  PERSPEKTIVNÍ NADHLEDY   -](#kapitola-031) |
| 3 | [10  PERSPEKTIVNÍ POHLED 01   -](#kapitola-032) |
| 3 | [11  PERSPEKTIVNÍ POHLED 02   -](#kapitola-033) |
| 3 | [12  PERSPEKTIVNÍ POHLED 03   -](#kapitola-034) |
| 3 | [13  PERSPEKTIVNÍ POHLED 04   -](#kapitola-035) |
| 3 | [14 PERSPEKTIVNÍ POHLED 05   -](#kapitola-036) |
| 3 | [15 VEŘEJNĚ PŘÍSTUPNÉ A NEPŘÍSTUPNÉ PLOCHY  1:1000](#kapitola-037) |
| 3 | [16  VÝKRES OPLOCENÍ  1 : 200](#kapitola-038) |
| 4 | ↳ [PHOTO-001](assets/S057_PHOTO-001_p004.png) |
| 4 | [ÚZEMNÍ STUDIE](#kapitola-039) |
| 4 | [MNICHOVO HRADIŠTĚ](#kapitola-040) |
| 4 | [TEXTOVÁ ČÁST](#kapitola-041) |
| 5 | [1.  DŮVODY ZPRACOVÁNÍ ÚZEMNÍ STUDIE](#kapitola-042) |
| 5 | [1.1. ZADÁNÍ A PODKLADY](#kapitola-043) |
| 7 | [2.  VYMEZENÍ ŘEŠENÉHO ÚZEMÍ A JEHO CHARAKTERISTIKA](#kapitola-044) |
| 7 | ↳ [PHOTO-002](assets/S057_PHOTO-002_p007.png) |
| 8 | ↳ [PHOTO-003](assets/S057_PHOTO-003_p008.png) |
| 8 | ↳ [PHOTO-004](assets/S057_PHOTO-004_p008.png) |
| 8 | ↳ [PHOTO-005](assets/S057_PHOTO-005_p008.png) |
| 9 | ↳ [PHOTO-006](assets/S057_PHOTO-006_p009.png) |
| 10 | [3.  ZÁKLADNÍ ZÁSADY KONCEPCE ŘEŠENÉHO ÚZEMÍ](#kapitola-045) |
| 10 | ↳ [IMG-001](assets/S057_IMG-001_p010.png) |
| 11 | [4.  NÁVRH ŘEŠENÍ](#kapitola-046) |
| 12 | ↳ [IMG-002](assets/S057_IMG-002_p012.png) |
| 13 | [PŘEHLED NÁVRHOVÝCH PLOCH A REGULACÍ](#kapitola-047) |
| 13 | ↳ [TAB-001](#tab-001) |
| 13 | [KOEFICIENTY ZELENĚ](#kapitola-048) |
| 13 | [NÁVRH OPLOCENÍ](#kapitola-049) |
| 13 | [STŘECHY BUDOV](#kapitola-050) |
| 14 | [5.  ZELEŇ](#kapitola-051) |
| 14 | ↳ [IMG-004](assets/S057_IMG-004_p014.png) |
| 14 | [KONCEPCE SADOVÝCH ÚPRAV](#kapitola-052) |
| 14 | ↳ [IMG-003](assets/S057_IMG-003_p014.png) |
| 15 | [VEGETAČNÍ PRVKY AREÁLOVÉ ZELENĚ](#kapitola-053) |
| 15 | ↳ [IMG-005](assets/S057_IMG-005_p015.png) |
| 16 | [KRITÉRIA PRO VÝBĚR DŘEVIN](#kapitola-054) |
| 17 | [SORTIMENT DŘEVIN](#kapitola-055) |
| 17 | ↳ [IMG-006](assets/S057_IMG-006_p017.png) |
| 18 | [ODPOČINKOVÉ ZÓNY](#kapitola-056) |
| 18 | [TRAVNATÉ PLOCHY](#kapitola-057) |
| 19 | [VÝSADBA STROMŮ](#kapitola-058) |
| 19 | ↳ [IMG-007](assets/S057_IMG-007_p019.png) |
| 19 | [POVÝSADBOVÁ PÉČE](#kapitola-059) |
| 19 | ↳ [IMG-008](assets/S057_IMG-008_p019.png) |
| 20 | [6.  DOPRAVA](#kapitola-060) |
| 20 | [DOPRAVNÍ NAPOJENÍ AREÁLU](#kapitola-061) |
| 20 | [DOPRAVNÍ ŘEŠENÍ AREÁLU](#kapitola-062) |
| 21 | [PĚŠÍ A CYKLISTICKÉ TRASY](#kapitola-063) |
| 21 | [7.  ŘEŠENÍ INŽENÝRSKÝCH SÍTÍ](#kapitola-064) |
| 21 | [ELEKTRICKÁ ENERGIE:](#kapitola-065) |
| 21 | [VEŘEJNÉ OSVĚTLENÍ:](#kapitola-066) |
| 21 | [PLYN:](#kapitola-067) |
| 22 | [VODOVOD:](#kapitola-068) |
| 22 | [PITNÁ VODA:](#kapitola-069) |
| 22 | [Bilance potřeby vody:](#kapitola-070) |
| 22 | [SPLAŠKOVÁ KANALIZACE:](#kapitola-071) |
| 22 | [DEŠŤOVÉ VODY:](#kapitola-072) |
| 23 | ↳ [IMG-009](assets/S057_IMG-009_p023.png) |
| 23 | [Bilance dešťových vod:](#kapitola-073) |
| 23 | [1. Množství dešťových vod](#kapitola-074) |
| 24 | [2. Návrh retenčního objemu](#kapitola-075) |
| 24 | [Dešťové vody budou vypouštěny z navržené retenční nádrže regulovaně v množství](#kapitola-076) |
| 24 | [32,00 l/s.](#kapitola-077) |
| 24 | [3. Vyústní objekt je mezi stávajícím objektem č.p. 386 a jezem. Předpoklad – místo vyústního](#kapitola-078) |
| 25 | ↳ [PHOTO-007](assets/S057_PHOTO-007_p025.png) |
| 25 | [ÚZEMNÍ STUDIE](#kapitola-079) |
| 25 | [MNICHOVO HRADIŠTĚ](#kapitola-080) |
| 25 | [GRAFICKÁ ČÁST](#kapitola-081) |

## Přehled extrakce

Zdroj: `S057`. Režim: `full_transcription`. Rozsah: celý zdroj; jednotek 25. Otevřené revizní body: 0. Pokrytí se vztahuje na zachování obsahu; vnitřní text map a schémat zůstává v odkazovaných obrazech. Čas na stranu není vypočten, protože nebyl samostatně měřen celý ruční proces.

## Přepis

---
<a id="s057-p001"></a>
### Zdrojová strana 1

<a id="kapitola-001"></a>
#### ZÁKLADNÍ ÚDAJE O ÚZEMNÍ STUDII

<a id="kapitola-002"></a>
#### NÁZEV

Územní studie ÚS 7 (dále jen „ÚS“)

<a id="kapitola-003"></a>
#### ŘEŠENÉ ÚZEMÍ

Mnichovo Hradiště, zastavitelná plocha VL82a, VL82b,

VD79c, RZ118, vnitřní síť komunikací, vč. obslužných

komunikací DSo79 s napojením na DSK2 a DSo82 s

napojením na DSK1, ZO

<a id="kapitola-004"></a>
#### POŘIZOVATEL

Název : Městský úřad Mnichovo Hradiště,

Odbor výstavby a územního plánování

Sídlo : Masarykovo nám. 1, 295 21 Mnichovo Hradiště

Zastoupený: Mgr. Šárkou Steblovou

e-mail : sarka.steblova@mnhradiste.cz

<a id="kapitola-005"></a>
#### OBJEDNATEL

Název : GLP SpacePlus (Czech Republic), s.r.o.

Sídlo : Hybernská 1034/5, Nové Město

110 00 Praha 1

Zastoupený : Ing. Alešem Růžičkou

e-mail : ales.ruzicka@glp.com

IČO : 087 96 963

<a id="kapitola-006"></a>
#### ZHOTOVITELÉ / PROJEKTOVÝ TÝM

Vedoucí projektu: Ing. Tomáš Rakouský

Ing. arch. Richard Černý

<a id="kapitola-007"></a>
#### Technická infrastruktura, koordinace projektu

Zpracovatel : ANITAS s.r.o.

Sídlo : Turnovská 21, 295 01 Mnichovo Hradiště

e-mail : anitas@anitas.cz

IČO : 257 55 668

Vypracovali : Ing. Martina Maděrová,

Ing. Roman Rakouský

1

---
<a id="s057-p002"></a>
### Zdrojová strana 2

<a id="kapitola-008"></a>
#### Urbanisticko-architektonické řešení

Zpracoval : SIADESIGN LIBEREC s.r.o.

Sídlo : Fügnerova 667/7, 460 01, Liberec IV

e-mail : sia@siadesign.cz

IČO : 273 14 731

Vypracovali : Ing. arch. Pavel Novák,

Ing. arch. Kateřina Cyhelská

<a id="kapitola-009"></a>
#### Dopravní řešení

Zpracoval : European Transportation Consultancy,s.r.o.

Zastoupený: Ing. Kateřina Henleyová

e-mail : khenleyova@etc-transport.com

IČO : 267 15 384

Vypracovali : Ing. Tomáš Míča,

Ing. Jiří Souček

<a id="kapitola-010"></a>
#### Sadové úpravy

Zpracoval : V Zahradní s krajinná tvorba

Zastoupený: Ing. Antonín Vondra, KC Praha

e-mail : antoninvondra@gmail.com

IČO : 873 39 609

2

---
<a id="s057-p003"></a>
### Zdrojová strana 3

<a id="kapitola-011"></a>
#### OBSAH DOKUMENTACE

<a id="kapitola-012"></a>
#### ZÁKLADNÍ ÚDAJE O ÚZEMNÍ STUDII

(1 LIST)

<a id="kapitola-013"></a>
#### TEXTOVÁ ČÁST:

(21 LISTŮ)

<a id="kapitola-014"></a>
#### 1. DŮVODY ZPRACOVÁNÍ ÚZEMNÍ STUDIE

<a id="kapitola-015"></a>
#### 1.1 ZADÁNÍ A PODKLADY

<a id="kapitola-016"></a>
#### 2. VYMEZENÍ ŘEŠENÉHO ÚZEMÍ A JEHO CHARAKTERISTIKA

<a id="kapitola-017"></a>
#### 3. ZÁKLADNÍ ZÁSADY KONCEPCE ŘEŠENÉHO ÚZEMÍ

<a id="kapitola-018"></a>
#### 4. NÁVRH ŘEŠENÍ

<a id="kapitola-019"></a>
#### 5. ZELEŇ

<a id="kapitola-020"></a>
#### 6. DOPRAVA

<a id="kapitola-021"></a>
#### 7. ŘEŠENÍ INŽENÝRSKÝCH SÍTÍ

<a id="kapitola-022"></a>
#### GRAFICKÁ ČÁST:

(16 VÝKRESŮ)

<a id="kapitola-023"></a>
#### 01 ŠIRŠÍ VZTAHY  1 : 5 000

<a id="kapitola-024"></a>
#### 02 VÝŘEZ ÚZEMNÍHO PLÁNU OBCE  1 : 2 500

<a id="kapitola-025"></a>
#### 03  VÝTAH PODMÍNEK ÚZEMNÍHO PLÁNU OBCE   -

<a id="kapitola-026"></a>
#### 04 HLAVNÍ VÝKRES  1 : 1 000

<a id="kapitola-027"></a>
#### 05  KOORDINAČNÍ VÝKRES  1 : 1 000

<a id="kapitola-028"></a>
#### 06  ULIČNÍ PROFILY  1 : 200

<a id="kapitola-029"></a>
#### 07  VÝKRES DOPRAVNÍ INFRASTRUKTURY  1 : 1 000

<a id="kapitola-030"></a>
#### 08  VÝKRES TECHNICKÉ INFRASTRUKTURY  1 : 1 000

<a id="kapitola-031"></a>
#### 09  PERSPEKTIVNÍ NADHLEDY   -

<a id="kapitola-032"></a>
#### 10  PERSPEKTIVNÍ POHLED 01   -

<a id="kapitola-033"></a>
#### 11  PERSPEKTIVNÍ POHLED 02   -

<a id="kapitola-034"></a>
#### 12  PERSPEKTIVNÍ POHLED 03   -

<a id="kapitola-035"></a>
#### 13  PERSPEKTIVNÍ POHLED 04   -

<a id="kapitola-036"></a>
#### 14 PERSPEKTIVNÍ POHLED 05   -

<a id="kapitola-037"></a>
#### 15 VEŘEJNĚ PŘÍSTUPNÉ A NEPŘÍSTUPNÉ PLOCHY  1:1000

<a id="kapitola-038"></a>
#### 16  VÝKRES OPLOCENÍ  1 : 200

3

---
<a id="s057-p004"></a>
### Zdrojová strana 4

<a id="photo-001"></a>
[PHOTO-001](assets/S057_PHOTO-001_p004.png)

<a id="kapitola-039"></a>
#### ÚZEMNÍ STUDIE

ÚS 7

<a id="kapitola-040"></a>
#### MNICHOVO HRADIŠTĚ

<a id="kapitola-041"></a>
#### TEXTOVÁ ČÁST

06 / 2025

4

---
<a id="s057-p005"></a>
### Zdrojová strana 5

<a id="kapitola-042"></a>
#### 1.  DŮVODY ZPRACOVÁNÍ ÚZEMNÍ STUDIE

Řešené území navazuje na stávající průmyslovou zónu vzniklou na místě bývalé osady

Haškov. Tyto plochy logicky doplňují celý kompaktní průmyslový celek mezi komunikací II/268

a obcí Veselá. Protože se jedná o rozsáhlé území, které stávající plochy významně rozšíří,

bylo toto území podmíněno vypracováním územní studie „ÚS7“, která by měla upřesnit

základní koncepční zásady pro její budoucí zastavění.

Úkolem územní studie je naplnit podmínky a cíle města Mnichovo Hradiště sledující zajištění

udržitelného rozvoje, jehož hlavním cílem patří zachování životního prostředí dalším

generacím a dále stanovit podmínky dalšího rozvoje území v souladu s ekonomickými

parametry developera, umožňující realizaci všech souvisejících staveb pro celkový pozitivní

rozvoj lokality Haškov.

Lokalita bude sloužit rozvojovým potřebám stávajících výrobních společností ve městě (pro

jejich udržení a rozšíření). Současně město získá moderní infrastrukturu (otevřený zelený

areál), která dokáže přilákat činnosti s vyšší přidanou hodnotou vč. vědy a výzkumu a snížit

tak závislost na automobilovém průmyslu. Development lokality dá také impuls k rozvoji

sousedních ploch tak, aby vzniklo komplexní polyfunkční území řešící více potřeb obyvatel a

navázané na plánovaný rozvoj města a sousedních obcí (minimální dojezdové vzdálenosti do

zaměstnání, obchodu a propojení cyklostezkou). Zóna má i podstatnou rekreační funkci

prostřednictvím zahrad a zeleně.

S ohledem na existenci konkrétního developera celého řešeného území GLP SpacePlus

(Czech Republic), s.r.o., vzniklo „Memorandum o spolupráci na prověření možností rozvoje

lokalit Haškov“. Toto Memorandum se odkazuje na vypracování této ÚS 7, která se stane

podkladem pro další smluvní vypořádání jednotlivých subjektů.

<a id="kapitola-043"></a>
#### 1.1. ZADÁNÍ A PODKLADY

Základní podmínky pro vypracování územní studie byly specifikovány územním plánem města

Mnichovo Hradiště. Vlastní zadání územní studie bylo pořizovatelem vydáno dne 14. 11. 2023.

ÚS byla zpracována v souladu s tímto zadáním a dále v souladu s vyhláškou č. 157/2024 Sb.

o územně analytických podkladech, územně plánovací dokumentaci a jednotném standardu.

Hlavními úkoly jsou:

- Dělení pozemků/parcelace a umístění staveb,

- Koncepce hmotového umístění staveb,

- Koncepce prostorového uspořádání staveb,

5

---
<a id="s057-p006"></a>
### Zdrojová strana 6

- Nezastavitelné části zastavitelných ploch,

- Koeficient zastavění pozemků,

- Využití pozemků v souladu s podmínkami využití ploch,

- Řešení koncepce technické a dopravní infrastruktury,

Během projektové a inženýrské činnosti spojené s přípravou podkladů pro vypracování ÚS

vznikla pracovní skupina tvořená zástupci města Mnichovo Hradiště, developera, majoritním

vlastníkem pozemků řešeného území a projektového týmu, která se postupně doplňovala o

další subjekty, kterých se dané území dotýká v širších souvislostech. Byly to zejména

vlastníci, či zástupci navazujících areálů jako Finapra a.s, Truck Arena, ČOV ve správě VaK

Mladá Boleslav, a dále přítomnost orgánů státní správy, především zástupce dopravního

inspektorátu s ohledem na problematiku dopravního řešení, jako jedné ze zásadních

problémů lokality k řešení a pak několik formulovaných požadavků města prostřednictvím Ing.

arch. Jana Světlíka jako městského architekta.

Vznik této pracovní skupiny bylo logickým vyústěním snahy řešit dané území nejen komplexně

se všemi souvisejícími návaznostmi na okolní zástavbu, ale především ověřit a předjednat

proveditelnost navržených koncepčních zásad s konkrétními vlastníky a zástupci dotčených

navazujících areálů.

Na základě pravidelných pracovních schůzek této pracovní skupiny vznikl podnět, který

upřesnil rozsah zpracování ÚS 7, respektive dané území doporučil prověřit ve dvou variantách

možného urbanistického řešení. Následně se vedlo několik jednání se zástupci města a s jí

jmenovanou komisí. Po opakovaných jednáních byla nakonec vybrána pouze jedna výsledná

odsouhlasená varianta, která je vydána jako tato revize.

V průběhu zpracování ÚS byly také provedeny konzultace se správci místních inženýrských

sítí pro dořešení koncepce napojení lokality na inženýrské sítě.

Během této diskuze vyplynuly zásadní podmínky pro vlastní řešení, zejména:

- Řešené území bude z dopravního hlediska napojeno ze silnice II/268

- Z dopravního hlediska je nežádoucí další vjezd do řešeného území z ulice Víta

Nejedlého, případné další napojení dořešit pouze v rámci stávajících vjezdů a výjezdů,

- Bude dořešena možnost dopravního přístupu k ČOV Mnichova Hradiště přes řešené

území

- Při sjezdu z II/268 je bohužel historicky povolen dům s bytovými jednotkami, bude se

muset umístit protihlukové opatření

6

---
<a id="s057-p007"></a>
### Zdrojová strana 7

- Koncepce dopravy bude počítat s územní rezervou na možné napojení areálu Finapra

a.s. zajišťující případné odvedení dopravní zátěže z ulice Víta Nejedlého.

- Koncepční dořešení komunikačního napojení Truck Arény.

<a id="kapitola-044"></a>
#### 2.  VYMEZENÍ ŘEŠENÉHO ÚZEMÍ A JEHO CHARAKTERISTIKA

Území navržené k řešení je součástí katastrálního území Mnichovo Hradiště (536326).

Základní vymezení řešeného území je dáno v zadání a je specifikováno plochami VL82a,

VL82b, VD79c, RZ118, vnitřní síť komunikací, včetně obslužných komunikací DSo79

s napojením na DSK1, ZO.

S ohledem na umístění řešené lokality, která je obklopena stávajícími průmyslovými areály,

je řešené území rozšířeno o tyto navazující průmyslové areály a celky (viz grafická část).

Specifikem dané lokality Haškov je její začlenění do organismu města. Je jakýmsi

přechodovým územím mezi městem Mnichovo Hradiště a obcí Veselá. Nejedná se tak o

klasickou novodobou průmyslovou zónu umístěnou jako samostatný urbanistický celek, jehož

charakter určuje především jeho utilitární funkce, ale je součástí městských prostor, konkrétně

prostoru ulice Víta Nejedlého. Tato část města je determinována průmyslovými areály,

tvořícími její charakter. Tomu pak odpovídá současná podoba prostředí, které je bylo

podřízeno především zájmům vlastních výrobních závodů.

Současná podoba průmyslové lokality Haškov:

<a id="photo-002"></a>
[PHOTO-002](assets/S057_PHOTO-002_p007.png)

7

---
<a id="s057-p008"></a>
### Zdrojová strana 8

<a id="photo-003"></a>
[PHOTO-003](assets/S057_PHOTO-003_p008.png)

<a id="photo-004"></a>
[PHOTO-004](assets/S057_PHOTO-004_p008.png)

<a id="photo-005"></a>
[PHOTO-005](assets/S057_PHOTO-005_p008.png)

8

---
<a id="s057-p009"></a>
### Zdrojová strana 9

<a id="photo-006"></a>
[PHOTO-006](assets/S057_PHOTO-006_p009.png)

Na výše doložené fotodokumentaci je zřejmý nepřívětivý charakter prostředí ulice Víta

Nejedlého. Ten v současnosti nese prvky periferie a plní spíše funkci vnitroareálové

komunikace mezi výrobními a skladovými halami.

Hranici řešeného území podél prostoru ulice Víta Nejedlého je lemována jednostrannou alejí,

které toto území polidšťuje a zároveň tvoří významný urbanistický prostorový prvek.

9

---
<a id="s057-p010"></a>
### Zdrojová strana 10

<a id="kapitola-045"></a>
#### 3.  ZÁKLADNÍ ZÁSADY KONCEPCE ŘEŠENÉHO ÚZEMÍ

Charakter řešené lokality Haškov, vyplývající z polohy a funkce v organismu města, byl

zhodnocen v průběhu zpracování územního plánu města Mnichovo Hradiště. Vymezení

řešené lokality k zástavbě a stanovení podmínek využití jsou odrazem specifičnosti a snahy o

udržitelný rozvoj celého území. V územním plánu již byly formulovány zásady, které zaručují

významný posun v práci s veřejným prostorem v tomto industriálním prostředí. Do stávající

průmyslové zóny bude včleněna struktura, která dané území doplní o podstatné plochy

veřejné zeleně. Zeleň v daném území bude určujícím prvkem při ulici Víta Nejedlého,

respektive vlastní zástavbu dané lokality vhodně odstíní a izoluje. Tato izolační zeleň je

příjemným městským prvkem, které dané

<a id="img-001"></a>
[IMG-001](assets/S057_IMG-001_p010.png)

místo zobytní a stane se z pohledu chodce

určujícím charakterem tohoto území.

Vlastní plochy určené k zástavbě

průmyslových hal jsou díky tomuto

koncepčnímu řešení skryty od hlavního

městského prostoru a nijak svojí povahou

neovlivní městské prostředí ulice Víta

Nejedlého.

Územní studie řeší definici

nezastavitelných ploch v území, které

budou určeny pro veřejnou dopravu,

obsluhující jednotlivé plochy v areálu. I

v těchto veřejných prostorech je kladen důraz na jejich charakter, a v rámci návrhu jsou

navrženy prvky vysoké zeleně, dokumentovaných na dílčích profilech jednotlivých uličních

prostor.

Základním regulačním prvkem je tedy vymezená hranice jednotlivých funkčních bloků, ze

kterých se stanovují základní parametry zastavění, respektive % zastavění, zeleně a výška

budoucí zástavby. Jako další regulační prvek byla dále definována hranice zastavitelné plochy

funkčních bloků. Ta je jednoznačně definovaná určenou hranicí, pouze v případě bloku B2 je

vymezena plocha, kterou lze zastavět pouze za podmínek, že tato vymezená část bude

funkčně sloužit jako doplňková funkce k funkci hlavní, tedy část budovy určená pro umístění

administrativní části, šaten, denních místností apod. Tato hranice vymezuje maximální

velikost plochy bloku, ve které je možné umisťovat stavby. Mimo tuto hranici nelze ani v rámci

vymezeného území funkčních bloků stavět.

Zásadním parametrem určujícím budoucí strukturu zastavění celého území je její dopravní

napojení. To navazuje na navržené řešení v územním plánu, kde se navrhuje nová okružní

10

---
<a id="s057-p011"></a>
### Zdrojová strana 11

křižovatka na II/268, ze které je nově napojena hlavní přístupová komunikace do řešeného

území. Tato páteřní komunikace je navržena tak, že obtéká funkční plochy B2 a C.

Tato hlavní dopravní páteř řešeného území počítá s připojením na dopravní síť sousedního

areálu Finapra a.s., která umožní v budoucnu odlehčit kamionové dopravě přes ulici Víta

Nejedlého, přičemž by se zachoval i možný stávající vjezd pro příjezd ke komerčním plochám

navržených v rámci bloku VL79c.

Na základě požadavků trhu na velikost hal, byla snaha developerovi umožnit co největší

ucelené plochy pro vlastní zastavění. Ty byly vyhodnoceny jako možné, protože se bude

jednat již čistě o prostředí vlastní průmyslové zóny, která by měla naplňovat především

utilitární požadavky těchto funkčních ploch určených prioritně pro haly drobné, lehké výroby.

Jako určujícím kritériem pro koncepci řešení je tedy spíše definice veřejného prostoru, který

by měl klást důraz na přívětivé prostředí tvořeného přítomností vysoké zeleně a chodníků pro

chodce, zajišťující logické pěší propojení v území. Tuto zásadu naplňují navržené pěší a

cyklistické stezky v pásech izolační zeleně, propojující prostory hlavní ulice Víta Nejedlého

s relaxačními plochami podél řeky Jizera. Ve vlastní zóně je v rámci veřejné komunikační sítě

navrženo i možné pěší propojení pro budoucí bytovou zástavbu při severní hraně komunikace

II/268, s možností využití relaxačních a pobytových ploch veřejné zeleně umístěné v rámci

izolační zeleně kolem řešeného území.

V dalším stupni PD by měl být kladen důraz na architektonické řešení budovy v ploše VD79c,

která bude svým charakterem ovlivňovat prostor veřejné plochy izolační zeleně v sousedství

ulice Víta Nejedlého.

<a id="kapitola-046"></a>
#### 4.  NÁVRH ŘEŠENÍ

Návrh řešení sleduje naplnění hlavních stanovených podmínek:

- Napojení území z nově vybudované kruhové křižovatky na II/268,

- Návrh protihlukového opatření před bytovým domem na pozemku č.p. 2678,

- Dopravní napojení k nově umístěným zahrádkám v rámci plochy RZ118 a areálu Truck

Arény,

- Vymezení územních rezerv pro možné dopravní napojení ČOV Mnichovo Hradiště, a

areálu společnosti Finapra a.s. s budoucím možným přímým napojením na ulici Víta

Nejedlého,

- Návrh umístění cyklostezky a retenčních vodních ploch v plochách izolační zeleně.

- Urbanistické řešení vychází z platného územního plánu a v něm naznačeného

dopravního napojení a respektují hranice jeho funkčních ploch

11

---
<a id="s057-p012"></a>
### Zdrojová strana 12

Řešené území je komunikačně rozděleno na jednotlivé funkční bloky A, B1, B2, C. Každý blok

má vlastní upřesňující parametry zastavění, výškové limity a požadované koeficienty zeleně,

které počítají se započtením procentuálního poměru do šíře 25 m z izolační zeleně, přičemž

musí být splněn minimální parametr koeficientu 40 % v řešeném území.

Výsledný hlavní výkres tedy formuluje nezastavitelné plochy určené pro veřejný prostor, který

je dále limitem jeho minimálního rozměru. Další limity a regulace jsou stanoveny pro jednotlivé

zastavitelné bloky.

Tyto limity byly dány na základě návrhu ideálního layoutu developera, přičemž pro účely

ověření funkčnosti a dopadu takové zástavby se pro tento případ zvolila maximální možná

přípustná zástavba, naplňující základní limity v území dané územním plánem. Tyto podrobné

návrhy jsou zdokumentovány ve výkresu urbanistické koncepce, včetně hmotového řešení.

Haly jsou navržené jako univerzální pro výrobu a skladování tak, aby bylo možné je vnitřně

flexibilně přizpůsobovat aktuálním požadavkům uživatelů během jejich doby životnosti.

Skladování a logistika bez vazby na výrobní činnost je přípustná v souladu s územním plánem

pouze v rozsahu 30 % ze zastavitelné části bloků A, B1 a B2. Developer předpokládá, že

spolupráce s městem při obsazování hal uživateli bude řešena v plánovací smlouvě.

Hala v bloku C ve funkční ploše VD (Výroba a skladování – drobná a řemeslná výroba) bude

využita minimálně třemi uživateli tak, aby plocha žádného z uživatelů nepřesáhla 5 tis. m2.

<a id="img-002"></a>
[IMG-002](assets/S057_IMG-002_p012.png)

12

---
<a id="s057-p013"></a>
### Zdrojová strana 13

<a id="kapitola-047"></a>
#### PŘEHLED NÁVRHOVÝCH PLOCH A REGULACÍ

<a id="tab-001"></a>
**TAB-001**
| Poznámka extrakce: sloupec 1 | Poznámka extrakce: sloupec 2 | Poznámka extrakce: sloupec 3 | Poznámka extrakce: sloupec 4 | Poznámka extrakce: sloupec 5 | Poznámka extrakce: sloupec 6 | Poznámka extrakce: sloupec 7 | Poznámka extrakce: sloupec 8 | Poznámka extrakce: sloupec 9 | Poznámka extrakce: sloupec 10 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Označení bloku |  | Velikost bloku |  |  | Maximální výška |  |  | Koeficient |  |
|  |  | m2 |  |  | zástavby |  |  | zastavění |  |
| BLOK A | 24 158 |  |  | 10 m |  |  | 50% |  |  |
| BLOK B1 | 41 352 |  |  | 12,5 m |  |  | 60% |  |  |
| BLOK B2 | 34 498 |  |  | 12,5 m |  |  | 60% |  |  |
| BLOK C | 17 602 |  |  | 9,5 m |  |  | 65% |  |  |

Poznámka: Koeficienty zastavění odpovídají jednotlivým navrženým plochám bloků a parametr

zastavění je počítán pouze pro zastavění nadzemními budovami. Poměr zpevněných ploch tak určí

rozdíl mezi požadovaným % zastavění a % podílem zeleně, viz následující kapitola.

<a id="kapitola-048"></a>
#### KOEFICIENTY ZELENĚ

Zeleň je vyhodnocena dle funkčních ploch vymezených územním plánem. Tedy % podíl

zeleně v celém řešeném území funkčních ploch VL82a a VL82b bude minimálně 40 %, a ve

funkční ploše VD79c pak minimálně 10 %. Pro dosažení požadovaného koeficientu lze

započítat pás o šíři 25 m z funkční plochy ZO. Tato celková výměra pro započtení je v rozsahu

25 464 m2. Toto je maximálně přípustná velikost zeleně, kterou lze započítat pro výpočet

celkové % podílu zeleně v řešeném území funkčních ploch VL82a, VL82b a VD79c.

<a id="kapitola-049"></a>
#### NÁVRH OPLOCENÍ

V rámci jednotlivých bloků není stanovena podmínka oplocení, respektive se upřednostňuje

ponechání jednotlivých bloků bez oplocení. Návrh nicméně respektuje případné potřeby

oplocení z provozních důvodů. Oplocení může být v případě potřeby umístěno v rámci veřejně

nepřístupných zpevněných ploch. Oplocení nebude zasahovat do veřejně přístupných ploch.

Oplocení bude ve všech funkčních blocích výroby a skladování sjednoceno. Bude mít stejnou

výšku 2 m, barevnost a vzhled. Návrh typu oplocení je součástí grafické části.

<a id="kapitola-050"></a>
#### STŘECHY BUDOV

Na společných jednáních byla diskutována problematika požadavků na řešení povrchů střech

a snižování tepelného záření. Preferovanou variantou je řešení s extenzivní zelení alespoň

v rozsahu 20 % celkové plochy střech. V případě potřeb provozu výrobních hal (výrobní haly

s požadavkem na zelenou energii) a jejich požadavků na instalaci FVE s ohledem na

certifikáty BREEM apod. se tato možnost připouští.

13

---
<a id="s057-p014"></a>
### Zdrojová strana 14

<a id="kapitola-051"></a>
#### 5.  ZELEŇ

<a id="img-004"></a>
[IMG-004](assets/S057_IMG-004_p014.png)

Návrh zeleně v maximální možné míře respektuje a

zachovává v řešeném území stávající zeleň, tj. aleje

stromů při silnici Víta Nejedlého. Navazující plochy

izolační zeleně pak navrhuje doplnit o další

stromovou alej, která by jasně vymezila prostor

veřejného parku, který by měl stát zelenou „oázou“

dané industriální zástavby, viz referenční obrázek.

Velký důraz je kladen na přítomnost zeleně i ve

veřejných koridorech obslužných komunikací, kde je

uvažováno vždy alespoň s jednostrannou alejí

stromů a doplňkovou zelení. Tyto zásady uspořádání

jsou zdokumentovány ve výkresové části i v rámci

návrhu uličních profilů.

<a id="kapitola-052"></a>
#### KONCEPCE SADOVÝCH ÚPRAV



smyslem návrhu bude vytvořit parkovou úpravu, která logistický areál začlení do okolní

průmyslové zástavby a zároveň naváže na plochu krajinné zeleně v okolí řeky Jizery



kostrou zeleně budou liniové výsadby alejí, které zjemní hmotu budov a odcloní areál od

průhledů do volné krajiny na západní straně pozemku



základní kostru liniové zeleně doplní skupiny stromů a solitéry ve volných travnatých

plochách

<a id="img-003"></a>
[IMG-003](assets/S057_IMG-003_p014.png)



prostor k posezení a

odpočinku zaměstnanců a

návštěvníků areálu

poskytnou parkově

upravené odpočinkové zóny



velké travnaté plochy budou

tvořeny lučními porosty

založené výsevem travino-

bylinných směsí

14

---
<a id="s057-p015"></a>
### Zdrojová strana 15

<a id="kapitola-053"></a>
#### VEGETAČNÍ PRVKY AREÁLOVÉ ZELENĚ

ALEJE



aleje budou vysázeny z domácích dřevin ve sponu 10-14 m (dle vysazovaného druhu)



v případě prostorových omezení v užších uličních profilech bude využito kultivarů

domácích druhů dřevin se štíhlou korunou



stromy budou vysázeny mimo ochranná pásma stávajících nebo navržených inženýrských

sítí



stromy nebudou větvemi bránit v rozhledu do komunikací, zakrývat dopravní značky nebo

veřejné osvětlení

SKUPINY STROMŮ A SOLITERY



volné skupiny rychle rostoucích a ovocných stromů a dlouhověkých solitér budou

vysázeny ve větších travnatých plochách (sever areálu a plochy u retenčních nádrží)

KEŘOVÉ VÝSADBY



liniové výsadby keřů vymezí prostor pro volný pohyb návštěvníků tak, aby nedocházelo k

nežádoucím kolizím u cyklostezek či ke vstupu do komunikací okolo hal



solitérní skupiny domácích druhů keřů budou vysázeny ve větších travnatých plochách



keřové výsadby budou využity k odclonění rušných míst v blízkosti klidových zón

<a id="img-005"></a>
[IMG-005](assets/S057_IMG-005_p015.png)

POPÍNAVÉ ROSTLINY



zelená fasáda – treláž s popínavými dřevinami bude

realizována na západní fasádě haly A

SMÍŠENÉ ZÁHONY



záhony trvalek, okrasných trav a cibulovin

LUČNÍ TRÁVNÍKY



travnaté plochy v areálu

15

---
<a id="s057-p016"></a>
### Zdrojová strana 16

<a id="kapitola-054"></a>
#### KRITÉRIA PRO VÝBĚR DŘEVIN



sortiment použitého vegetačního materiálu bude odpovídat středoevropskému regionu

(domácí druhy rostlin) resp. požadavkům certifikace BREEAM (vyjma popínavé rostliny)



upřednostněny budou dřeviny odolnější suchu a dřeviny tolerantní k růstu ve zpevněných

plochách nebo v zelených ostrůvcích parkovacích stání



v místech, kde by opad plodů mohl být obtěžující, bude dána přednost sterilním kultivarům



vysazované druhy domácích dřevin se v celém areálu budou opakovat, což sjednotí

charakter řešeného území a druhově naváže na okolní krajinu

16

---
<a id="s057-p017"></a>
### Zdrojová strana 17

<a id="kapitola-055"></a>
#### SORTIMENT DŘEVIN

STROMY – druhové složení vysazovaných stromů a jejich velikost, do které dorůstají

Aleje

<a id="img-006"></a>
[IMG-006](assets/S057_IMG-006_p017.png)



stromy velkokorunné (průměr koruny nad 10 m):

o výška dřeviny přes 20 m – duby, habry, javory, lípy, topol

bílý (do skupin stromů),

o výška dřeviny 10 až 20 m: javor babyka,



stromy střední (průměr koruny 6 až 10 m):

o výška dřeviny přes 20 m: bříza bělokorá (do skupin

stromů),

o výška dřeviny 10 až 20 m: jeřáb muk (ptačí), třešeň ptačí

(vč. kultivarů),



stromy malokorunné (průměr koruny 3 až 6 m):

o výška dřeviny 6 až 10 m: kultivary jasanů a javorů,

ovocné druhy stromů – hrušeň obecná, jabloň apod.

Skupiny stromů



skupiny stromů budou tvořit rychle rostoucí (bříza bělokorá, topol bílý) a ovocné druhy

stromů (jabloně, třešně, hrušně)

Solitéry



jako solitéry se uplatní dlouhověké druhy dřevin (duby, lípy, javory)

KEŘE – druhové složení vysazovaných keřů (okrasné květem/kůrou, medonosné, jedlé)



vzrůstné druhy keřů – kaliny, ptačí zoby, svídy



nižší druhy pro volně rostoucí živé ploty – meruzalky, ptačí zoby (kultivary), tavolník

vrbolistý



netradiční ovocné druhy keřů – dřín obecný, muchovník vejčitý

POPÍNAVÉ ROSTLINY – pro zelenou fasádu



vysazeny budou nepůvodní druhy rostlin (již osvědčené v jiných areálech GLP)



druhy popínavých rostlin – jesenec okrouhlolistý (samčí rostliny), zimolez Henryův

17

---
<a id="s057-p018"></a>
### Zdrojová strana 18

<a id="kapitola-056"></a>
#### ODPOČINKOVÉ ZÓNY



k posezení zaměstnanců a návštěvníků areálu budou vytvořeny parkově upravené

odpočinkové zóny



lokace odpočinkových zón bude vycházet z polohy vchodů do jednotlivých hal a parkovišť

a dynamiky pohybu osob po areálu



zpevněné plochy budou tvořit mlatové povrchy, které působí přírodnějším dojmem a v

letním období se tolik nezahřívají



osazen bude elegantní jednotný designový mobiliář (lavičky, stoly, odpadkové koše aj.)



atraktivitu prostředí podtrhnou smíšené záhony z domácích druhů trvalek, okrasných



trav a cibulovin

<a id="kapitola-057"></a>
#### TRAVNATÉ PLOCHY



travnaté plochy budou tvořeny převážně suchu odolnými lučními porosty založené

výsevem travino-bylinných směsí (pozitivní vliv na příznivější průběh teplot, zadržování

vody a snížení prašnosti)



luční porosty se zároveň uplatní jako vhodná stanoviště pro hmyz a drobné živočichy



květnaté louky budou koseny budou přibližně 2 x za rok



bylinné trávníky vhodné pro nižší seč, které lze využít i jako pochozí (snáší četnější kosení

- 3-10 sečí/rok), najdou uplatnění zejména v plochách u parkovišť nebo odpočinkových

zón



pravidelně budou koseny pásy travnatých ploch kolem objektů, komunikací a smíšených

záhonů apod.

18

---
<a id="s057-p019"></a>
### Zdrojová strana 19

<a id="kapitola-058"></a>
#### VÝSADBA STROMŮ



sadové úpravy budou realizovány odbornou firmou, technologické postupy budou

odpovídat relevantním normám a standardům AOPK resp. ČSN



vysazován bude rostlinný materiál se zemním balem (přednostně z domácí produkce)



maximální výsadbová velikost stromů – ok 12/14

<a id="img-007"></a>
[IMG-007](assets/S057_IMG-007_p019.png)

(odpovídá certifikaci BREEAM)



alejové stromy budou vysokokmeny s kmenem min. 220

cm



stromy budou kotveny třemi kůly, ošetřeny ochranným

nátěrem proti korní spále



instalováno bude ochranné pletivo proti okusu zvěře



ze substrátu a mulče bude vytvořena závlahová mísa,

ke kmenům stromů budou instalovány zavlažovací vaky

(objem cca 75 litrů/vak)

<a id="kapitola-059"></a>
#### POVÝSADBOVÁ PÉČE

<a id="img-008"></a>
[IMG-008](assets/S057_IMG-008_p019.png)



bude realizován výchovný/zdravotní řez (mj. zajištění

průchozího a průjezdného profilu u komunikací)



pravidelně bude kontrolováno kotvení stromů spolu s

ochrannými nátěry proti korní spále



doplňován bude kůrový mulč do závlahových mís stromů



zálivka bude prováděna minimálně po dobu 3 (i více) let:

o v 1. roce po výsadbě 8-10 zálivek (60 litrů/závlahová

dávka)

o ve 2.-3. roce 3-6 zálivek během vegetačního období

přiměřeným množstvím zálivkové vody dle aktuálního

průběhu teplot a úhrnu srážek

19

---
<a id="s057-p020"></a>
### Zdrojová strana 20

<a id="kapitola-060"></a>
#### 6.  DOPRAVA

Nejhodnotnějším prvkem předkládaného řešení je nový koridor veřejné komunikace,

potenciálně umožňující napojení celého areálu bývalého LIAZu přímo na kruhový objezd na

obchvatu II/268 paralelně s ulicí Víta Nejedlého.

<a id="kapitola-061"></a>
#### DOPRAVNÍ NAPOJENÍ AREÁLU

Řešené území se nachází jižně od Mnichova Hradiště, západně od dálnice D10. Plánovaný

záměr přiléhá k západní straně silnice II/610 a k jižní straně silnice II/268.

Hlavní napojení areálu je plánováno do křižovatky silnic II/610 a II/268, která je v současnosti

řešena jako styková neřízená křižovatka s bypassy. V souvislosti s výstavbou záměru zde

vznikne okružní křižovatka, jejíž nové čtvrté (jižní) rameno bude sloužit pro napojení záměru.

Jako druhé (vedlejší) napojení areálu bude sloužit stávající sjezd k průmyslovému areálu

nacházejícímu se jižně od záměru. Zájmové území bude tedy dostupné jak ze silnice II/610

jižním vjezdem, tak i ze silnice II/268 severním vjezdem.

<a id="kapitola-062"></a>
#### DOPRAVNÍ ŘEŠENÍ AREÁLU

Navrhovaná areálová komunikační síť se skládá z páteřní severojižní komunikace, na kterou

se napojují vedlejší komunikace vedoucí k halám. Páteřní komunikace vychází na severu ze

čtvrtého ramene nové okružní křižovatky a pokračuje jižně, kde nejprve kříží stávající Černou

silnici a poté vstupuje do plánovaného areálu. Na začátku areálu je na komunikaci umístěna

okružní křižovatka o průměru 30 metrů, do které se ze západu a z východu napojují obslužné

komunikace. Páteřní komunikace pokračuje za okružní křižovatkou jižně mez halami, poté se

stočí východně a pak zase jižně, aby se na svém konci napojila na stávající sjezd ze

sousedního areálu a vyústila na silnici II/610. Páteřní komunikace bude realizována v šířce 7

m s rozšířením ve směrových obloucích

Z páteřní komunikace odbočují dvě obslužné komunikace o šířce 7 metrů vedoucí k

odlehlejším halám. Na západní straně je to komunikace vedoucí k blokům A a B, na východě

pak komunikace k bloku C.

Po obou stranách východní obslužné komunikace budou před blokem C umístěna kolmá

parkovací stání určená zejména pro zákazníky komerčních prostor v objektu C.

U vstupů do administrativních částí hal se předpokládá umístění parkovišť pro zaměstnance.

Kolem všech hal jsou komunikace navrženy tak, aby v případě zásahu vozidel IZS byly haly

přístupné ze všech stran.

Na západním konci areálu vznikne nová plocha pro zahrádky, jež bude obsluhována účelovou

komunikací o šířce 3,5 metru. Na komunikaci budou zřízeny výhybny a na slepém konci místo

pro otáčení.

20

---
<a id="s057-p021"></a>
### Zdrojová strana 21

Všechny komunikace určené k pojíždění kamiony byly prověřeny vlečnými křivkami nákladní

soupravy délky 12,5 m prostřednictvím programu autoTRACK.

<a id="kapitola-063"></a>
#### PĚŠÍ A CYKLISTICKÉ TRASY

Pěší a cyklistické trasy respektují rámcový návrh v souladu s řešením v územním plánu.

Cyklostezka je navržena v pásu izolační zeleně, která je vedena podél ulice Víta Nejedlého a

dále směrem na cyklostezku podél řeky Jizera. Tento základní rozsah daný územním plánem

je dále rozšířen o další cyklopruhy v rámci sdružených chodníků a cyklostezek procházející

řešeným areálem.

<a id="kapitola-064"></a>
#### 7.  ŘEŠENÍ INŽENÝRSKÝCH SÍTÍ

Jako podklad pro územní studii byla zajištěna vyjádření o existenci stávajících sítí technické

infrastruktury a se všemi správci technické infrastruktury, na kterou bude území napojeno,

proběhla úvodní jednání. Předpokládané kapacity odběrů jsou akceptovány a byly

stanoveny možnosti a způsoby napojení.

Výkres technické infrastruktury obsahuje dle projednání se správci sítí napojovací body.

Vedení sítí bude předmětem dalšího stupně projektové dokumentace

<a id="kapitola-065"></a>
#### ELEKTRICKÁ ENERGIE:

V lokalitě bude možné napojení na stávající distribuční soustavu společnosti ČEZ Distribuce

a.s. Napojení území na elektrickou energii bude ze stávající rozvodny 110 kV. V prostoru

komunikace bude navrženo nové kabelové vedení VN 22 kV a podle potřeb nájemců areálu

budou vybudovány nové trafostanice. S ohledem na stávající kapacitní stav využití distribuční

sítě elektrické energie na okrese, je možné převedení rezervovaného příkonu, který má

investor zasmluvněn v areálu Plazy.

<a id="kapitola-066"></a>
#### VEŘEJNÉ OSVĚTLENÍ:

Veřejné osvětlení bude provedeno na všech veřejně přístupných komunikacích. Rozvody

veřejného osvětlení budou navrženy v trasách shodných s vedením elektrické energie.

<a id="kapitola-067"></a>
#### PLYN:

Předpokládaná spotřeba plynu v areálu je max. 433 m3/hod tzn.:

QHOD = 128 m3

QHOD max = 430 m3

QROK = 9,966 MWh

21

---
<a id="s057-p022"></a>
### Zdrojová strana 22

<a id="kapitola-068"></a>
#### VODOVOD:

Předpokladem pro připojení lokality je napojení na stávající vodovodní potrubí v ulici Víta

Nejedlého či v kooperaci s městem napojení z nyní povolovaného vodovodu v Černé silnici

do centrální vodoměrné šachty.  Za touto šachtou již budou pokračovat vnitroareálové řady s

podružnými vodoměry pro jednotlivé objekty v území v majetku developera území.

<a id="kapitola-069"></a>
#### PITNÁ VODA:

<a id="kapitola-070"></a>
#### Bilance potřeby vody:

PROVOZOVNY MÍSTNÍHO VÝZNAMU, KDE SE VODY NEVYUŽÍVÁ K VÝROBĚ -

s možností sprchování teplou vodou - 30 m3/rok, 540-30 x 540 = 16 200 m3/rok

KANCELÁŘSKÉ BUDOVY - 16 m3/rok, 184 zaměstnanců – 16 x 184 = 2 944 m3/rok

Roční spotřeba vody QR = 16 200 + 2 944 = 19 144 m3/rok

Průměrná denní potřeba vody Q24 = Qr / 360 = 19 504 / 360 = 53,18 m3/den

Max. denní potřeba vody Qd = Q24 x 1,5 = 53,18 x 1,5 = 79,77 m3/den

Max. hodinová potřeba vody Qh = (Qd x 1,8) / 12 = (79,77 x 1,8) / 8 = 17,95 m3/h = 5,00 l

<a id="kapitola-071"></a>
#### SPLAŠKOVÁ KANALIZACE:

Napojení splaškové kanalizace se předpokládá na kanalizační stoku BE 750/850 ve správě

VaK a.s. v komunikaci Víta Nejedlého novou trasou z kameninových trub. Na hranici do areálu

v hlavní příjezdové trase by mohla být umístěna připojovací šachta pro celý areál zástavby.

Za touto připojovací šachtou budou pokračovat vnitroareálové řady pro připojení jednotlivých

objektů v území ve správě developera.

Splašková kanalizace – bilance - dle pitné vody

<a id="kapitola-072"></a>
#### DEŠŤOVÉ VODY:

Veškeré dešťové vody z objektů a všech druhů komunikací budou řešeny nezávisle na

splaškové kanalizaci, a to vsaky, terénními průlehy, retenčními nádržemi s následným

řízeným odtokem do Jizery v kapacitách a návaznostech dle podmínek Povodí Labe a.s. a

vycházející ze souvisejícího HDG průzkumu. Z retenční nádrže v areálu bude umožněno i

zřízení zásobování vodou pro zalévání v zahrádkářské kolonii.

22

---
<a id="s057-p023"></a>
### Zdrojová strana 23

<a id="img-009"></a>
[IMG-009](assets/S057_IMG-009_p023.png)

<a id="kapitola-073"></a>
#### Bilance dešťových vod:

<a id="kapitola-074"></a>
#### 1. Množství dešťových vod

- Četnost výskytu dešťových vod (periodicita)                            n = 0,20 (5. letý déšť)

- Intenzita 15 min. přívalového deště                                           i = 202 l/s/ha

- Odtok. koeficienty pro střechy                                                  ψ = 1,00

- Odtok. koeficienty pro povrch z asfaltu                                     ψ = 0,85

- Odtok. koeficienty pro povrch z dlažby                                     ψ = 0,80

23

---
<a id="s057-p024"></a>
### Zdrojová strana 24

Odtok z území

Navržené zastřešení o ploše 66 714 (66 401 + 313) m2:

Q1 = p . ψ  . i = (6,6714 x 1,00 x 202) = 1347,62 l/s

Zpevněná plocha komunikace, zásobovacího dvora 34 809 m2 (9 943+9 037+

2 787+13 042):

Q2 = p . ψ  . i = 3,4809 x 0,85 x 202 = 597,67 l/s

Zpevněná plocha z dlažby 5 085 m2:

Q3 = p . ψ  . i = 0,5085 x 0,80 x 202 = 82,17 l/s

Zpevněná plocha cyklostezky 8 580 m2:

Q4 = p . ψ  . i = 0,8580 x 0,80 x 202 = 138,65 l/s – plocha je zasakována

Celková odtok vypouštěných dešťových vod

Q = Q1 + Q2 + Q3 = 1347,62 + 597,67 + 82,17 = 2 207,46 l/s

<a id="kapitola-075"></a>
#### 2. Návrh retenčního objemu

Dle TNV 7509011 Hospodaření se srážkovými vodami, odstavec 5.2.2.8 Pro výpočet

přípustného odtoku srážkových vod se doporučuje hodnota specifického odtoku 3 l/(s.ha).

Povolené množství vypouštěných dešťových vod je 3,00 l/s/ha, ze zpevněných ploch

10,6608 ha = 31,98 l/s => 32,00 l/s.

Nejrizikovější je 120 minutový neredukovaný déšť, při n = 0,20 (5. letý déšť)

- Intenzita přívalového deště i = 44,50 l/s/ha

=>    3117,00 m3 – účinný akumulační prostor

Doba vyprazdňování retenční nádrže je 1:03:03 dnů:hod:min

<a id="kapitola-076"></a>
#### Dešťové vody budou vypouštěny z navržené retenční nádrže regulovaně v množství

<a id="kapitola-077"></a>
#### 32,00 l/s.

<a id="kapitola-078"></a>
#### 3. Vyústní objekt je mezi stávajícím objektem č.p. 386 a jezem. Předpoklad – místo vyústního

objektu bylo projednáno s Povodím Labe.

Poznámka: výkres technické a dopravní infrastruktury obsahuje dle projednání se správci sítí

napojovací body, vedení sítí bude předmětem dalšího stupně projektové dokumentace

24

---
<a id="s057-p025"></a>
### Zdrojová strana 25

<a id="photo-007"></a>
[PHOTO-007](assets/S057_PHOTO-007_p025.png)

<a id="kapitola-079"></a>
#### ÚZEMNÍ STUDIE

ÚS 7

<a id="kapitola-080"></a>
#### MNICHOVO HRADIŠTĚ

<a id="kapitola-081"></a>
#### GRAFICKÁ ČÁST

06 / 2025

25


## Pokrytí zdrojových jednotek

| unit_id | Source locator | Output anchor/file | Status | Unpreserved fraction u_i | Basis | Limitation / review_id |
| --- | --- | --- | --- | --- | --- | --- |
| S057-U001 | strana 1 | [Přepis](#s057-p001) | complete | 0 | původní text / buňky / obrazové odkazy | bez zjištěné mezery |
| S057-U002 | strana 2 | [Přepis](#s057-p002) | complete | 0 | původní text / buňky / obrazové odkazy | bez zjištěné mezery |
| S057-U003 | strana 3 | [Přepis](#s057-p003) | complete | 0 | původní text / buňky / obrazové odkazy | bez zjištěné mezery |
| S057-U004 | strana 4 | [Přepis](#s057-p004) | complete | 0 | původní text / buňky / obrazové odkazy | bez zjištěné mezery |
| S057-U005 | strana 5 | [Přepis](#s057-p005) | complete | 0 | původní text / buňky / obrazové odkazy | bez zjištěné mezery |
| S057-U006 | strana 6 | [Přepis](#s057-p006) | complete | 0 | původní text / buňky / obrazové odkazy | bez zjištěné mezery |
| S057-U007 | strana 7 | [Přepis](#s057-p007) | complete | 0 | původní text / buňky / obrazové odkazy | bez zjištěné mezery |
| S057-U008 | strana 8 | [Přepis](#s057-p008) | complete | 0 | původní text / buňky / obrazové odkazy | bez zjištěné mezery |
| S057-U009 | strana 9 | [Přepis](#s057-p009) | complete | 0 | původní text / buňky / obrazové odkazy | bez zjištěné mezery |
| S057-U010 | strana 10 | [Přepis](#s057-p010) | complete | 0 | původní text / buňky / obrazové odkazy | bez zjištěné mezery |
| S057-U011 | strana 11 | [Přepis](#s057-p011) | complete | 0 | původní text / buňky / obrazové odkazy | bez zjištěné mezery |
| S057-U012 | strana 12 | [Přepis](#s057-p012) | complete | 0 | původní text / buňky / obrazové odkazy | bez zjištěné mezery |
| S057-U013 | strana 13 | [Přepis](#s057-p013) | complete | 0 | původní text / buňky / obrazové odkazy | bez zjištěné mezery |
| S057-U014 | strana 14 | [Přepis](#s057-p014) | complete | 0 | původní text / buňky / obrazové odkazy | bez zjištěné mezery |
| S057-U015 | strana 15 | [Přepis](#s057-p015) | complete | 0 | původní text / buňky / obrazové odkazy | bez zjištěné mezery |
| S057-U016 | strana 16 | [Přepis](#s057-p016) | complete | 0 | původní text / buňky / obrazové odkazy | bez zjištěné mezery |
| S057-U017 | strana 17 | [Přepis](#s057-p017) | complete | 0 | původní text / buňky / obrazové odkazy | bez zjištěné mezery |
| S057-U018 | strana 18 | [Přepis](#s057-p018) | complete | 0 | původní text / buňky / obrazové odkazy | bez zjištěné mezery |
| S057-U019 | strana 19 | [Přepis](#s057-p019) | complete | 0 | původní text / buňky / obrazové odkazy | bez zjištěné mezery |
| S057-U020 | strana 20 | [Přepis](#s057-p020) | complete | 0 | původní text / buňky / obrazové odkazy | bez zjištěné mezery |
| S057-U021 | strana 21 | [Přepis](#s057-p021) | complete | 0 | původní text / buňky / obrazové odkazy | bez zjištěné mezery |
| S057-U022 | strana 22 | [Přepis](#s057-p022) | complete | 0 | původní text / buňky / obrazové odkazy | bez zjištěné mezery |
| S057-U023 | strana 23 | [Přepis](#s057-p023) | complete | 0 | původní text / buňky / obrazové odkazy | bez zjištěné mezery |
| S057-U024 | strana 24 | [Přepis](#s057-p024) | complete | 0 | původní text / buňky / obrazové odkazy | bez zjištěné mezery |
| S057-U025 | strana 25 | [Přepis](#s057-p025) | complete | 0 | původní text / buňky / obrazové odkazy | bez zjištěné mezery |

## Místa k revizi

V uvedeném rozsahu kontrol nebyla zjištěna otevřená chyba. Nejde o potvrzení lidské revize.

## Protokol metod, ověření a omezení

Použity byly lokální metody: PDFium pro text a obrazy, pdfplumber pro rozvržení a tabulky, Microsoft Word pro ověřené DOCX stránky, Windows.Media.Ocr pro vybrané skeny a čtení CFB/Word struktur pro staré DOC podle skutečného formátu zdroje. Ne všechny metody se týkají každého souboru. Celostránkové rastrové snímky nebyly ukládány. Původní fotografie složené z PDF dlaždic jsou rekonstruovány z původních obrazových objektů bez vykreslování stránky. Pokusy, parametry a selhání jsou zachované mimo dodaný balíček.


| Method run | Tool / version | Scope | Time (s) | Result / output use |
| --- | --- | --- | --- | --- |
| LOCAL-S057_layout | pdfplumber / 0.11.9 | all / source-evidence scope | 1.7609809001442045 | ok / True |
| LOCAL-S057_native | pypdfium2 / 5.14.0 | all / source-evidence scope | 0.060196499805897474 | ok / True |

## Sources and their roles

| Source / identification | Role | Contribution to this document | Authority / limitations |
| --- | --- | --- | --- |
| [Původní zdroj](<C:/Users/kater/Downloads/jihozapadni-mesto-prilohy.zip>) — P04 Přehled projektů v území/6_uzemni studie_US7, GLP, 2025/00015099_text.pdf | Obsahový zdroj | Text, tabulky a grafika | Původní soubor; SHA-256 v metadatech. |
| [document-converting](C:/Users/kater/repo/urbiq/urbiq-AI-LAB/urbiq-skills/document-converting/SKILL.md) | Pravidla převodu | Režim, obrazy, lokátory a kontrola | v261027-v11; kandidátní skill. |
| Potvrzení uživatele v aktuálním chatu | Rozsah a režim | full_transcription všech vstupů | Přesná URL není dostupná. |
| markdown-metadata-standards; date-versioned-artifacts | Procedurální pravidla | Metadata a nové verzované balíčky | Nejsou důkazem správnosti zdrojového obsahu. |
