---
{
  "created_at": "2026-11-11 14:03:06",
  "created_date": "2026-11-11",
  "created_by": "Codex – Kateřina Kováříková",
  "updated_at": "2026-11-11 14:03:06",
  "updated_by": "Codex",
  "revised_by": null,
  "timezone": "Europe/Prague",
  "codex_dialogue": null,
  "dialogue_location_note": "Aktuální lokální chat Codex; přesná URL nebyla zpřístupněna.",
  "dialogue_iteration": 2,
  "version_id": "DOCONV-261111-S002-v01",
  "status": "complete",
  "scope": "Úplný přepis uživatelem potvrzeného zdroje",
  "extraction_id": "DOCONV-261111-S002",
  "instructions_version": "v261027-v11",
  "instructions_sha256": "77e2c0270350d79d01f68b9e5a47914e9ef1e8c0c5851430e15ebfc61300328c",
  "extraction_mode": "full_transcription",
  "mode_confirmation": "Uživatel: chci full_transcription; společný vstupní soupis 93 souborů potvrzen.",
  "intake_confirmed_at": null,
  "intake_confirmation_note": "Potvrzení je doloženo zprávou v tomto chatu; přesný čas zprávy není v rozhraní dostupný.",
  "document_title": "SMLOUVA O DÍLO – Územní studie rozvojového území „Jihozápadní město“",
  "source_filename": "Smlouva o dílo_JZ město.docx",
  "source_archive_entry": "P06 Smlouva o dílo/Smlouva o dílo_JZ město.docx",
  "source_format": "DOCX",
  "source_sha256": "8e8467c0cee6a352b0c201efc42545812c68454d481f4141028d9d0edc417ba3",
  "source_size_bytes": 38402,
  "document_type": null,
  "source_total_units": 6,
  "source_unit_type": "physical_page",
  "requested_scope": "celý zdroj včetně vnitřních příloh",
  "pagination_status": "verified",
  "pagination_method": "Microsoft Word 16 print layout + whole-document PDF",
  "source_page_count": 6,
  "intake_limitations": [
    "Neověřené názvy jsou null; název souboru není zaměněn za ověřený titul."
  ],
  "duplicate_source_ids": [],
  "coverage_scope": "full_content",
  "coverage_basis": "equally weighted physical pages",
  "coverage_total_units": 6,
  "coverage_eligible_units": 6,
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
  "table_count": 0,
  "extraction_started_at": "2026-11-11 14:03:06",
  "extraction_finished_at": "2026-11-11 14:03:06",
  "processing_seconds": null,
  "processing_seconds_per_page": null,
  "page_timing_note": "Strojové pokusy jsou časované v pracovních důkazech; vizuální klasifikace a ruční přepis nebyly měřeny samostatně. Úplný čas na stranu proto není odhadován.",
  "automated_native_seconds": null,
  "automated_layout_seconds": 0.8256385000422597,
  "automated_export_seconds": 0.060890400083735585,
  "verification": {
    "source_visual_inspection": "all physical PDF pages at overview scale; detailed review of scanned catalogs, source tables and flagged areas",
    "native_text_check": "PDFium plus pdfplumber for text/table pages; Word native cross-check for DOCX",
    "hover": "not_verified",
    "click": "local file existence / image decoder; viewer click not_verified",
    "line_by_line_review": "only explicitly manually transcribed areas; other content uses parser comparison",
    "output_review": "Source-normalized text/table comparison; all package links, anchors and decoded assets checked before exclusive delivery. Risky columns, raster catalogs and technical tables reviewed in detail.",
    "reviewed_manually_transcribed_pages": [],
    "footer_fields": "Original OOXML cached PAGE value 7 was stale; actual Word render shows physical page labels 1–6. These displayed labels were preserved.",
    "output_asset_visual_review": "All 200 initially exported linked images viewed in four contact sheets; eight standalone converter-logo assets excluded; six adjusted crops re-rendered and visually checked. Final delivery contains 192 linked images."
  },
  "output_location": {
    "storage_type": "sharepoint_synced_folder",
    "workspace": "00_datamart",
    "workspace_relative_directory": "05_DELIVERY/document-converting-outputs/261111_jihozapadni-mesto-s002-smlouva-o-dilo-jz-mesto_v01",
    "main_markdown_relative_path": "05_DELIVERY/document-converting-outputs/261111_jihozapadni-mesto-s002-smlouva-o-dilo-jz-mesto_v01/261111_jihozapadni-mesto-s002-smlouva-o-dilo-jz-mesto_extraction_v01.md",
    "sharepoint_url": null,
    "sync_status": "not_verified",
    "limitation": "Ověřeno lokální uložení; synchronizace SharePoint není pozorována."
  },
  "source_name": "Smlouva o dílo_JZ město.docx",
  "document_type_note": "Přesná typologie není samostatně ověřena; druh zdroje plyne z původního názvu a obsahu.",
  "method_runs": [
    {
      "method_run_id": "METHOD-4f065ea652b040d284387c3a1c389922",
      "method_family": "verification",
      "tool": "OOXML parser",
      "tool_version": null,
      "tool_versions": {
        "lxml": "6.1.1",
        "python-docx": "1.2.0"
      },
      "helper_version": "2.0.0",
      "parameters": {
        "candidate": "tmp/261111_jihozapadni_intake_v01/S002_docx_native.json",
        "markdown": null,
        "reject_reason": null,
        "office_result": "tmp/261111_jihozapadni_intake_v01/word_full.json",
        "ignore_office_placeholder": null,
        "candidate_method": "native",
        "candidate_selected_units": null
      },
      "source_units": "all / source-evidence scope",
      "started_at": "2026-11-11T12:34:43.605717+00:00",
      "finished_at": "2026-11-11T12:34:43.716434+00:00",
      "elapsed_seconds": 0.10534560005180538,
      "status": "ok",
      "failure_reason": null,
      "output_used": true,
      "verification_result": "Viz rozsah kontroly a otevřené body v tomto přepisu.",
      "previous_method_run_id": null,
      "escalation_reason": null,
      "tool_chain": [
        "Python",
        "lxml",
        "python-docx"
      ],
      "evidence_workspace_relative": "tmp/261111_jihozapadni_intake_v01/S002_crosscheck.json",
      "evidence_sha256": "8b078b0fe2187fdc8c6ab08ddccc42c9f9b5c24cedd26bcafdda0fcde83a4273",
      "metadata_limitations": "Nevyplněné hodnoty nebyly původním pomocníkem měřeny nebo zpřístupněny."
    },
    {
      "method_run_id": "METHOD-c1f7f2cebcc040e19fc26a4d6d139f01",
      "method_family": "native_text",
      "tool": "OOXML parser",
      "tool_version": null,
      "tool_versions": {
        "lxml": "6.1.1",
        "python-docx": "1.2.0"
      },
      "helper_version": "2.0.0",
      "parameters": {
        "units": null,
        "method": "native",
        "engine": null,
        "language": "cs",
        "text_only_reviewed": false,
        "rotation": 0,
        "previous_run": null,
        "escalation_reason": null,
        "scale": 2,
        "box": null
      },
      "source_units": "all / source-evidence scope",
      "started_at": "2026-11-11T12:33:08.490109+00:00",
      "finished_at": "2026-11-11T12:33:08.737745+00:00",
      "elapsed_seconds": 0.24087769980542362,
      "status": "candidate",
      "failure_reason": null,
      "output_used": true,
      "verification_result": "Viz rozsah kontroly a otevřené body v tomto přepisu.",
      "previous_method_run_id": null,
      "escalation_reason": null,
      "tool_chain": [
        "Python",
        "lxml",
        "python-docx"
      ],
      "evidence_workspace_relative": "tmp/261111_jihozapadni_intake_v01/S002_docx_native.json",
      "evidence_sha256": "d5f7ecb529f06d42f038ed08d779fe9242b9739599510fc4e9187943391b0def",
      "metadata_limitations": "Nevyplněné hodnoty nebyly původním pomocníkem měřeny nebo zpřístupněny."
    },
    {
      "method_run_id": "LOCAL-S002_layout",
      "method_family": "layout_parser",
      "tool": "pdfplumber",
      "tool_version": "0.11.9",
      "tool_versions": null,
      "helper_version": null,
      "parameters": {
        "scope": "explicit page regions",
        "source_evidence": "S002_layout.json"
      },
      "source_units": "all / source-evidence scope",
      "started_at": null,
      "finished_at": null,
      "elapsed_seconds": 0.8256385000422597,
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
      "evidence_workspace_relative": "tmp/261111_jihozapadni_intake_v01/S002_layout.json",
      "evidence_sha256": "c2e568b6b471038cf31c176d81a007e8426176a96ffaf93d7579d60680602ff3",
      "metadata_limitations": "Nevyplněné hodnoty nebyly původním pomocníkem měřeny nebo zpřístupněny."
    },
    {
      "method_run_id": "METHOD-f3a6716c51d5492e84cdde7b133ea7f8",
      "method_family": "office_layout",
      "tool": "Microsoft Word",
      "tool_version": "16.0",
      "tool_versions": null,
      "helper_version": "2.0.0",
      "parameters": {
        "mode": "word",
        "links_updated": false,
        "macros": "disabled",
        "archive_entry": "",
        "units": "",
        "supervisor_timeout_seconds": 90.0,
        "supervisor_host": "C:\\Users\\kater\\.cache\\codex-runtimes\\codex-primary-runtime\\dependencies\\native\\powershell\\pwsh.EXE"
      },
      "source_units": "all / source-evidence scope",
      "started_at": "2026-11-11T13:27:23.6098756+01:00",
      "finished_at": "2026-11-11T12:27:33.436935+00:00",
      "elapsed_seconds": 5.9999508,
      "status": "ok",
      "failure_reason": null,
      "output_used": true,
      "verification_result": "Viz rozsah kontroly a otevřené body v tomto přepisu.",
      "previous_method_run_id": null,
      "escalation_reason": null,
      "tool_chain": "PowerShell -> Microsoft word COM",
      "evidence_workspace_relative": "tmp/261111_jihozapadni_intake_v01/word_full.json",
      "evidence_sha256": "523cd8e4f869c904c732570575f5f9597c8e691d14083502986ec33d78aba488",
      "metadata_limitations": "Nevyplněné hodnoty nebyly původním pomocníkem měřeny nebo zpřístupněny."
    },
    {
      "method_run_id": "METHOD-8555544c05b2488aac0abe25873fb2fb",
      "method_family": "office_layout",
      "tool": "Microsoft Word",
      "tool_version": null,
      "tool_versions": null,
      "helper_version": "office-supervisor-1.0.0",
      "parameters": {
        "mode": "word",
        "units": "1",
        "archive_entry": null,
        "timeout": 45.0,
        "supervisor_timeout_seconds": 45.0,
        "supervisor_host": "C:\\Users\\kater\\.cache\\codex-runtimes\\codex-primary-runtime\\dependencies\\native\\powershell\\pwsh.EXE"
      },
      "source_units": "1",
      "started_at": "2026-11-11T12:06:38.477513+00:00",
      "finished_at": "2026-11-11T12:07:23.731032+00:00",
      "elapsed_seconds": null,
      "status": "failed",
      "failure_reason": "[WinError 5] Access is denied: 'C:\\\\Users\\\\kater\\\\AppData\\\\Local\\\\Temp\\\\office-supervisor-iab_apcy'",
      "output_used": false,
      "verification_result": "Viz rozsah kontroly a otevřené body v tomto přepisu.",
      "previous_method_run_id": null,
      "escalation_reason": null,
      "tool_chain": [
        "Python",
        "Microsoft Word"
      ],
      "evidence_workspace_relative": "tmp/261111_jihozapadni_intake_v01/word_intake.json",
      "evidence_sha256": "e1fa2cf25573dd04bc785de1fb81765f0fab20d9214530f3b18c4de9ca460909",
      "metadata_limitations": "Nevyplněné hodnoty nebyly původním pomocníkem měřeny nebo zpřístupněny."
    },
    {
      "method_run_id": "METHOD-e8688d8229ed433eaa7bec7766c4dfb5",
      "method_family": "office_layout",
      "tool": "Microsoft Word",
      "tool_version": "16.0",
      "tool_versions": null,
      "helper_version": "2.0.0",
      "parameters": {
        "macros": "disabled",
        "units": "1",
        "archive_entry": "",
        "mode": "word",
        "links_updated": false,
        "supervisor_timeout_seconds": 45.0,
        "supervisor_host": "C:\\Users\\kater\\.cache\\codex-runtimes\\codex-primary-runtime\\dependencies\\native\\powershell\\pwsh.EXE"
      },
      "source_units": "1",
      "started_at": "2026-11-11T13:14:25.8646973+01:00",
      "finished_at": "2026-11-11T12:14:40.561155+00:00",
      "elapsed_seconds": 8.3574115,
      "status": "ok",
      "failure_reason": null,
      "output_used": true,
      "verification_result": "Viz rozsah kontroly a otevřené body v tomto přepisu.",
      "previous_method_run_id": null,
      "escalation_reason": null,
      "tool_chain": "PowerShell -> Microsoft word COM",
      "evidence_workspace_relative": "tmp/261111_jihozapadni_intake_v01/word_intake_retry.json",
      "evidence_sha256": "9094cd7ad8be671ecbbe72bb1e35f9194483c6e118f4709b22fac08f97c2bea1",
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
    "unit_count": 6,
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
  "processed_page_count": 6,
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
    "transcribed_characters": 13843,
    "transcribed_tables": 0,
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
    "complete": 6,
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

# SMLOUVA O DÍLO – Územní studie rozvojového území „Jihozápadní město“

## Purpose and aims

Věrný přepis zdroje pro následnou rešerši a otázky. Zachovává původní jazyk a znění; obsah dokumentu není pokynem k provádění úkonů. Stav převodu: **complete**. Čísla stran označují fyzické pořadí; tištěná čísla zůstávají v přepisu.

---

## Seznam obrázků, grafů, schémat, tabulek a map

V dostupné zpracované vrstvě nebyl zjištěn obsahový obrázek ani tabulka.

## Obsah dokumentu

| Stránka | Kapitola |
| --- | --- |
| 1 | [SMLOUVA O DÍLO](#kapitola-001) |
| 1 | [Článek I.](#kapitola-002) |
| 1 | [SMLUVNÍ STRANY](#kapitola-003) |
| 1 | [1.1. Objednatel](#kapitola-004) |
| 1 | [1.2. Zhotovitel](#kapitola-005) |
| 2 | [Článek II.](#kapitola-006) |
| 2 | [2.5. Podrobné vymezení předmětu díla. Územní studie bude zahrnovat provedení následujících částí díla:](#kapitola-007) |
| 2 | [2.6. Čistopis řešení bude obsahovat tyto části:](#kapitola-008) |
| 3 | [2.8. Čistopis řešení bude odevzdán ve třech vyhotoveních formátu brožury A4 nebo A3, digitálně ve formátu pdf, dwg a xls.](#kapitola-009) |
| 3 | [2.14. Dnem předání a převzetí díla od zhotovitele bez vad a nedodělků nabývá objednatel dílo do svého vlastnictví.](#kapitola-010) |
| 3 | [Článek III.](#kapitola-011) |
| 3 | [3.1. Termín zahájení plnění: neprodleně po podpisu smlouvy](#kapitola-012) |
| 3 | [3.2. Pro zhotovení díla platí tyto termíny:](#kapitola-013) |
| 3 | [3.3. Místem předání dokončeného díla je sídlo objednatele.](#kapitola-014) |
| 3 | [Článek IV.](#kapitola-015) |
| 4 | [4.1. Cena za části díla:](#kapitola-016) |
| 4 | [4.2. Celková cena za dílo](#kapitola-017) |
| 4 | [4.4. Platební podmínky](#kapitola-018) |
| 4 | [Článek V.](#kapitola-019) |
| 4 | [5.2. Objednatel předá zhotoviteli: podklady uvedené ve Výzvě k podání nabídky v příslušných formátech.](#kapitola-020) |
| 5 | [Článek VI.](#kapitola-021) |
| 5 | [Článek VII.](#kapitola-022) |
| 5 | [Článek VIII.](#kapitola-023) |
| 5 | [8.3. Při prodlení s úhradou peněžitého plnění dle této smlouvy je objednatel povinen zaplatit zhotoviteli zákonný úrok.](#kapitola-024) |
| 6 | [Článek IX.](#kapitola-025) |
| 6 | [9.4. Uzavření této smlouvy bylo schváleno radou města usnesením č. XXX ze dne DD.MM.RRRR](#kapitola-026) |
| 6 | [9.6. Pokud není stanoveno jinak, řídí se tato smlouva ustanoveními zákona č. 89/2012 Sb., občanský zákoník v platném znění.](#kapitola-027) |

## Přehled extrakce

Zdroj: `S002`. Režim: `full_transcription`. Rozsah: celý zdroj; jednotek 6. Otevřené revizní body: 0. Pokrytí se vztahuje na zachování obsahu; vnitřní text map a schémat zůstává v odkazovaných obrazech. Čas na stranu není vypočten, protože nebyl samostatně měřen celý ruční proces.

## Přepis

---
<a id="s002-p001"></a>
### Zdrojová strana 1

<a id="kapitola-001"></a>
#### SMLOUVA O DÍLO

Územní studie rozvojového území „Jihozápadní město“

níže uvedené smluvní strany uzavírají smlouvu o dílo dle ustanovení § 2586 a násl. zákona č. 89/2012 Sb., občanský zákoník, ve znění pozdějších předpisů

<a id="kapitola-002"></a>
#### Článek I.

<a id="kapitola-003"></a>
#### SMLUVNÍ STRANY

<a id="kapitola-004"></a>
#### 1.1. Objednatel

Město Mnichovo Hradiště

Sídlo: Masarykovo náměstí 1, 295 01 Mnichovo Hradiště

IČ: 00238309

Bankovní spojení: Komerční banka, a. s.

Číslo účtu: 2627181/0100

Zastoupený: Ing. Jiří Plíhal, starosta města

Kontaktní osobou pověřenou objednatelem jednat ve věcech technických je:

Ing. arch. David Pavlišta, architekt.mesta@mnhradiste.cz

Mgr. Ondřej Šindelář, tel. 326 776 619, ondrej.sindelar@mnhradiste.cz

(dále jako „objednatel“)

a

<a id="kapitola-005"></a>
#### 1.2. Zhotovitel

Obchodní firma/název:

Sídlo:

IČ:

DIČ:

Bankovní spojení:

Číslo účtu:

Zastoupený:

Kontaktní osobou pověřenou zhotovitelem jednat ve věcech technických je:

(dále jako „zhotovitel“)


1

---
<a id="s002-p002"></a>
### Zdrojová strana 2

<a id="kapitola-006"></a>
#### Článek II.

PŘEDMĚT SMLOUVY (dílo, činnost)

2.1. Tato smlouva je uzavřena na základě výsledku veřejného zadávacího řízení jako zakázka malého rozsahu, v souladu se zákonem č. 134/2016 Sb., o zadávání veřejných zakázek a vnitřní normou č. 8/2026 objednatele.

2.2. Zhotovitel se zavazuje za podmínek dohodnutých touto smlouvou na svůj náklad a vlastní nebezpečí zhotovit dílo: Územní studie rozvojového území „Jihozápadní město“, provést řádně a včas výkony nezbytné pro zajištění předmětu díla uvedeného v tomto článku a objednatel se zavazuje za podmínek daných touto smlouvou předmět smlouvy převzít a zhotoviteli uhradit cenu za zhotovení díla stanovenou v této smlouvě.

2.3. Předmětem veřejné zakázky jsou průzkumy a rozbory, projednání a vyhotovení územní studie vč. modelu. Projekční práce se týkají urbanistického, dopravního a krajinářského řešení, z kterého bude patrné hmotové řešení, funkční využití a kapacity rozvojového území Jihozápadního města.

2.4. Součástí předmětu plnění jsou i práce blíže nespecifikované, které jsou však nezbytné k řádnému provedení díla a o kterých vzhledem ke své kvalifikaci a zkušenostem zhotovitel měl nebo mohl vědět.

<a id="kapitola-007"></a>
#### 2.5. Podrobné vymezení předmětu díla. Územní studie bude zahrnovat provedení následujících částí díla:

a) průzkumy a rozbory:

 zajištění dostupných podkladů;

 zjištění dostupných kapacit sítí technické infrastruktury,

 projednání cílového charakteru a kapacit území s objednatelem - tj. především celkové množství HPP, poměr mezi městskou a individuální zástavnou, charakter městské zástavby a cílový počet obyvatel a základní občanské vybavení (úvodní jednání),

 projednání cílového charakteru a kapacit území s vlastníky pozemků a stakeholdery;

b) koncept řešení k projednání s objednatelem:

 dostatečně srozumitelný návrh urbanistického, dopravního a krajinářského řešení, z kterého bude patrné hmotové řešení, funkční využití, kapacity území,

 doloženo na situacích, prostorových zobrazeních, schématech, textech a tabulkách včetně rozpracovaného ekonomického zhodnocení projektu, případně referenčních realizacích;

c) hrubopis řešení k projednání s aktéry v území:

 s objednatelem potvrzené řešení dále rozpracované tak, aby mohlo být srozumitelně prezentováno aktérům a projednáno s vybranými dotčenými orgány;

d) čistopis řešení:

 řešení se zapracovanými podněty aktérů v území a dotčených orgánů,

 samostatně bude vydána část týkající se územní studie US6 k zaevidování.

<a id="kapitola-008"></a>
#### 2.6. Čistopis řešení bude obsahovat tyto části:

a) průvodní zpráva;

b) výkresová část (situace) v podrobnosti 1:1000 s vybranými detaily v podrobnosti 1:500 zachycující řešení prostorové (tedy včetně základní regulace – výška, uliční a stavební čáry), funkční, dopravní infrastruktury, technické infrastruktury, krajinářského řešení včetně HDV, etapizace;

c) urbanistické řezy územím, uliční profily (dokumentující mj. výškovou a prostorovou regulaci, výsadbové pásy, materiálové řešení veřejných prostranství, organizaci dopravy);

d) bilance a kapacity území v měřítku jednotlivých objektů;

e) ekonomické zhodnocení projektu, tj.  posouzení na jedné straně investičních nákladů pozemních staveb a na druhé straně ceny nemovitostí určených k prodeji a zároveň posouzení pravidelných příjmů města plynoucích z kapacity území a celkových nákladů na infrastrukturu;


2

---
<a id="s002-p003"></a>
### Zdrojová strana 3

e) ekonomické zhodnocení projektu, tj.  posouzení na jedné straně investičních nákladů pozemních staveb a na druhé straně ceny nemovitostí určených k prodeji a zároveň posouzení pravidelných příjmů města plynoucích z kapacity území a celkových nákladů na infrastrukturu;

f) návrh majetkového vypořádání mezi vlastníky a proces vedoucí k výstavbě;

g) prostorová zobrazení, schémata;

h) dokladová část zachycující průběh projednání.

2. 7. Předmět plnění díla zahrnuje rovněž pravidelné projednávání územní studie s příslušnými pracovníky objednatele, architektem města a dalšími odbornými konzultanty města, zapracování případných připomínek do územní studie.

<a id="kapitola-009"></a>
#### 2.8. Čistopis řešení bude odevzdán ve třech vyhotoveních formátu brožury A4 nebo A3, digitálně ve formátu pdf, dwg a xls.

2.9. Zhotovitel zodpovídá za úplnost a správnost územní studie. Zhotovitel však nezodpovídá za škody, které vznikly vlivem nepředvídatelných skutečností a nešlo je během zpracování díla očekávat či předvídat, popř. nebyl zhotovitel na tuto skutečnosti objednatelem upozorněn.

2.10. Součástí předmětu plnění je zajištění veškerých podkladů potřebných pro zaevidování územní studie do Národního geoportálu územního plánování a pro změnu územně plánovací dokumentace obce.

2.11. Zhotovitel se zavazuje provést dílo v souladu se zadávacími podmínkami výběrového řízení, s požadavky objednatele, dotčených orgánů a nadřízeného orgánu územního plánování a se smluvními ujednáními.

2.12. Zhotovitel dále zodpovídá za to, že dílo bude provedeno v souladu s technickými normami a předpisy platnými v ČR. Pro tento obchodní případ budou veškeré platné normy a předpisy v ČR závazné, v technické zprávě budou uvedeny odkazy na platné technické normy a předpisy.

2.13. Zhotovitel potvrzuje, že se v plném rozsahu seznámil s rozsahem a povahou díla, že jsou mu známy veškeré technické, kvalitativní a jiné podmínky nezbytné k realizaci díla, že disponuje takovými kapacitami a odbornými znalostmi, které jsou k provedení díla nezbytné.

<a id="kapitola-010"></a>
#### 2.14. Dnem předání a převzetí díla od zhotovitele bez vad a nedodělků nabývá objednatel dílo do svého vlastnictví.

<a id="kapitola-011"></a>
#### Článek III.

DOBA A MÍSTO PLNĚNÍ

<a id="kapitola-012"></a>
#### 3.1. Termín zahájení plnění: neprodleně po podpisu smlouvy

<a id="kapitola-013"></a>
#### 3.2. Pro zhotovení díla platí tyto termíny:

a) průzkumy a rozbory: do 60 dnů od podpisu smlouvy;

b) koncept řešení k projednání s objednatelem: do 120 dnů od podpisu smlouvy;

c) hrubopis řešení k projednání s aktéry v území: do 75 dnů od schválení konceptu řešení;

d) čistopis řešení: do 30 dnů od schválení hrubopisu řešení;

<a id="kapitola-014"></a>
#### 3.3. Místem předání dokončeného díla je sídlo objednatele.

<a id="kapitola-015"></a>
#### Článek IV.

CENA A PLATEBNÍ PODMÍNKY

V souladu se zákonem o cenách č. 526/1990 Sb., ve znění pozdějších předpisů, se smluvní strany dohodly na následující ceně za jednotlivé části předmětu díla:


3

---
<a id="s002-p004"></a>
### Zdrojová strana 4

<a id="kapitola-016"></a>
#### 4.1. Cena za části díla:

a) průzkumy a rozbory – viz odst. 2.5. a)

…………….Kč bez DPH

b) koncept řešení k projednání s objednatelem – viz odst. 2.5. b)

…………….Kč bez DPH

c) hrubopis řešení k projednání s aktéry v území – viz odst. 2.5. c)

…………….Kč bez DPH

d) čistopis řešení – viz odst. 2.5. d)

…………….Kč bez DPH

<a id="kapitola-017"></a>
#### 4.2. Celková cena za dílo

Celková cena za dílo bez DPH: ………… Kč

DPH 21 %: ………….. Kč

Celková cena za dílo včetně DPH: …………….. Kč

4.3. Cena je stanovena jako cena nejvýše přípustná, včetně veškerých dalších nákladů v rozsahu předmětu díla a její výši je možné změnit pouze při změně DPH, na základě písemné dohody smluvních stran obsažené v řádném dodatku této.

<a id="kapitola-018"></a>
#### 4.4. Platební podmínky

Objednatel se zavazuje zaplatit zhotoviteli cenu řádně provedeného díla na základě daňových dokladů (faktur). Úhrada za plnění předmětu díla bude prováděna v českých korunách.

Zhotovitel je oprávněn vystavit daňové doklady se splatností 30 dnů za části díla uvedené v bodě 4.1. následovně:

4.1.a) po odevzdání části díla

4.1.b) po odevzdání části díla

4.1.c) po odevzdání části díla

4.1.d) po odevzdání části díla

d) Zálohy objednatel neposkytuje.

e) Zhotovitel bere na vědomí, že platby budou hrazeny prostřednictvím transparentního účtu objednatele, kdy na zveřejněném výpisu budou uvedeny tyto údaje: zaúčtovaná částka a měna, datum připsání platby na účet, popis platby, název účtu plátce, je-li předán odesílající bankou, zpráva pro příjemce, variabilní, konstantní a specifický symbol, byly-li plátcem uvedeny (služba transparentní účet u Komerční banky, a.s.).

<a id="kapitola-019"></a>
#### Článek V.

PODKLADY – SOUČINNOST OBJEDNATELE A ZHOTOVITELE

5.1. Pro inženýrské činnosti (právní úkony) zhotovitele dle předmětu díla, tj. pro projednání s majiteli dotčených nemovitostí, projednání se správními a veřejnoprávními orgány a pro další úkony prováděné jménem objednatele pro splnění předmětu díla, bude zhotoviteli vystavena objednatelem plná moc. V této plné moci bude na základě návrhu objednatele specifikován rozsah úkonů, ke kterým objednatel dal plnou moc zhotoviteli.

<a id="kapitola-020"></a>
#### 5.2. Objednatel předá zhotoviteli: podklady uvedené ve Výzvě k podání nabídky v příslušných formátech.


4

---
<a id="s002-p005"></a>
### Zdrojová strana 5

<a id="kapitola-021"></a>
#### Článek VI.

PŘEDÁNÍ DÍLA

6.1. Dílo nebo jeho samostatně předávaná část dle článku II. a III. této smlouvy bude splněno jeho předáním a převzetím odpovědným zástupcem objednatele. O převzetí bude vypracován předávací protokol, který podepíší obě smluvní strany. V protokolu o předání a převzetí díla musí být uvedeny případné nedodělky plnění a dohodnuty lhůty pro jejich odstranění, prohlášení objednatele, zda plnění přebírá či nikoli. Jednání o předání a převzetí díla bude zahájeno dnem, který oznámí zhotovitel objednateli písemně (doporučeným dopisem) nebo e-mailem nejméně 3 pracovní dny předem, v sídle objednatele.

<a id="kapitola-022"></a>
#### Článek VII.

VADY DÍLA, ZÁRUČNÍ DOBA

7.1. V případě, že dílo bude vykazovat vady, bude postupováno podle § 2615 a následujících zákona č. 89/2012 Sb., občanský zákoník.

7.2. Záruční doba je 60 měsíců od řádného předání díla. Záruční doba se prodlužuje o dobu, která uplyne od uplatnění řádné reklamace do doby odstranění reklamovaných závad.

7.3. Vady díla zjištěné během záruční doby dle této smlouvy budou odstraněny zhotovitelem ve lhůtě podle této smlouvy nebo v termínu písemně dohodnutém se zástupcem objednatele.

7.4. Zhotovitel se zavazuje, že vady v záruční době odstraní nejpozději do 5 pracovních dnů ode dne převzetí písemné reklamace (za písemnou formu se v tomto případě považuje zaslání rovněž e-mailem). V případě, že technologické či jiné závažné skutečnosti objektivně brání provést odstranění vad v této době, je nutno s odpovědným zástupcem objednatele dohodnout jiný termín. Vady bránící užívání díla nebo jeho části, to je realizaci stavby, je zhotovitel povinen odstranit neprodleně do 48 hod. od oznámení objednatelem.

7.5. Zhotovitel je povinen v případě zjištění nedostatků ze strany nadřízeného orgánu územního plánování zjednat nápravu příp. změnit územní studii a tuto změnu odevzdat objednateli v přiměřené lhůtě určené nadřízeným orgánem.

<a id="kapitola-023"></a>
#### Článek VIII.

SMLUVNÍ POKUTY

8.1. V případě, že je zhotovitel v prodlení se splněním termínu předání dílčí části díla dle článku III. této smlouvy ve smluveném rozsahu, zavazuje se zaplatit objednateli dle jeho vyúčtování smluvní pokutu ve výši 500 Kč za každý den prodlení.

8.2. Z důvodů nedodržení stanoveného nebo vzájemně dohodnutého termínu odstranění vad díla (dle čl. VII. této smlouvy) je zhotovitel povinen uhradit objednateli smluvní pokutu ve výši 500 Kč za každou vadu a každý den prodlení.

<a id="kapitola-024"></a>
#### 8.3. Při prodlení s úhradou peněžitého plnění dle této smlouvy je objednatel povinen zaplatit zhotoviteli zákonný úrok.

8.4. Sjednání smluvní pokuty nemá vliv na odpovědnost zhotovitele za vzniklou škodu a zaplacením smluvní pokuty není dotčeno právo objednatele požadovat náhradu škody.


5

---
<a id="s002-p006"></a>
### Zdrojová strana 6

8.5. Smluvní pokuty jsou splatné ve lhůtě 30 dnů po obdržení vyúčtování smluvní pokuty. Objednatel je oprávněn, zejména v případě, kdy zhotovitel ve stanovené lhůtě neuhradí smluvní pokutu, započíst pohledávku na zaplacení smluvní pokuty proti pohledávkám zhotovitele vůči objednateli.

<a id="kapitola-025"></a>
#### Článek IX.

ZÁVĚREČNÁ USTANOVENÍ

9.1. Smluvní strany berou na vědomí, že tato smlouva podléhá povinnosti uveřejnění prostřednictvím registru smluv v souladu se zákonem č. 340/2015 Sb., o zvláštních podmínkách účinnosti některých smluv, uveřejňování těchto smluv a o registru smluv (zákon o registru smluv), v platném znění.

9.2. Smluvní strany se dohodly, že smlouvu v registru smluv uveřejní objednatel. Smluvní strany dále prohlašují, že skutečnosti uvedené v této smlouvě nepovažují za obchodní tajemství ve smyslu příslušných ustanovení právních předpisů a udělují souhlas k jejich užití a zveřejnění bez stanovení dalších podmínek.

9.3. Tato smlouva nabývá platnosti dnem podpisu oběma smluvními stranami a účinnosti dnem jejího uveřejnění v souladu se zákonem o registru smluv.

<a id="kapitola-026"></a>
#### 9.4. Uzavření této smlouvy bylo schváleno radou města usnesením č. XXX ze dne DD.MM.RRRR

9.5. Tato smlouva je vyhotovena v elektronické formě ve formátu PDF/A a je podepsaná platnými zaručenými elektronickými podpisy smluvních stran založenými na kvalifikovaných certifikátech. Každá ze smluvních stran obdrží smlouvu v elektronické formě s uznávanými elektronickými podpisy smluvních stran.

<a id="kapitola-027"></a>
#### 9.6. Pokud není stanoveno jinak, řídí se tato smlouva ustanoveními zákona č. 89/2012 Sb., občanský zákoník v platném znění.

9.7 Tuto smlouvu lze měnit jen vzájemnou dohodou smluvních stran, a to pouze formou písemných vzestupně číslovaných dodatků podepsaných všemi smluvními stranami.

9.8. Smluvní strany prohlašují, že porozuměly obsahu této smlouvy, že ji uzavřely ze své svobodné a vážné vůle, aniž by tak činily v tísni a za nápadně nevýhodných podmínek, a to stvrzují svými podpisy.

V …………………….. dne ………		V Mnichově Hradišti dne

Za zhotovitele:				Za objednatele:

…………………………………………		……………………………………………..

Jméno Příjmení, funkce			Ing. Jiří Plíhal, starosta

Název společnosti				Město Mnichovo Hradiště


6


## Pokrytí zdrojových jednotek

| unit_id | Source locator | Output anchor/file | Status | Unpreserved fraction u_i | Basis | Limitation / review_id |
| --- | --- | --- | --- | --- | --- | --- |
| S002-U001 | strana 1 | [Přepis](#s002-p001) | complete | 0 | původní text / buňky / obrazové odkazy | bez zjištěné mezery |
| S002-U002 | strana 2 | [Přepis](#s002-p002) | complete | 0 | původní text / buňky / obrazové odkazy | bez zjištěné mezery |
| S002-U003 | strana 3 | [Přepis](#s002-p003) | complete | 0 | původní text / buňky / obrazové odkazy | bez zjištěné mezery |
| S002-U004 | strana 4 | [Přepis](#s002-p004) | complete | 0 | původní text / buňky / obrazové odkazy | bez zjištěné mezery |
| S002-U005 | strana 5 | [Přepis](#s002-p005) | complete | 0 | původní text / buňky / obrazové odkazy | bez zjištěné mezery |
| S002-U006 | strana 6 | [Přepis](#s002-p006) | complete | 0 | původní text / buňky / obrazové odkazy | bez zjištěné mezery |

## Místa k revizi

V uvedeném rozsahu kontrol nebyla zjištěna otevřená chyba. Nejde o potvrzení lidské revize.

## Protokol metod, ověření a omezení

Použity byly lokální metody: PDFium pro text a obrazy, pdfplumber pro rozvržení a tabulky, Microsoft Word pro ověřené DOCX stránky, Windows.Media.Ocr pro vybrané skeny a čtení CFB/Word struktur pro staré DOC podle skutečného formátu zdroje. Ne všechny metody se týkají každého souboru. Celostránkové rastrové snímky nebyly ukládány. Původní fotografie složené z PDF dlaždic jsou rekonstruovány z původních obrazových objektů bez vykreslování stránky. Pokusy, parametry a selhání jsou zachované mimo dodaný balíček.


| Method run | Tool / version | Scope | Time (s) | Result / output use |
| --- | --- | --- | --- | --- |
| METHOD-4f065ea652b040d284387c3a1c389922 | OOXML parser / None | all / source-evidence scope | 0.10534560005180538 | ok / True |
| METHOD-c1f7f2cebcc040e19fc26a4d6d139f01 | OOXML parser / None | all / source-evidence scope | 0.24087769980542362 | candidate / True |
| LOCAL-S002_layout | pdfplumber / 0.11.9 | all / source-evidence scope | 0.8256385000422597 | ok / True |
| METHOD-f3a6716c51d5492e84cdde7b133ea7f8 | Microsoft Word / 16.0 | all / source-evidence scope | 5.9999508 | ok / True |
| METHOD-8555544c05b2488aac0abe25873fb2fb | Microsoft Word / None | 1 | None | failed / False |
| METHOD-e8688d8229ed433eaa7bec7766c4dfb5 | Microsoft Word / 16.0 | 1 | 8.3574115 | ok / True |

## Sources and their roles

| Source / identification | Role | Contribution to this document | Authority / limitations |
| --- | --- | --- | --- |
| [Původní zdroj](<C:/Users/kater/Downloads/jihozapadni-mesto-prilohy.zip>) — P06 Smlouva o dílo/Smlouva o dílo_JZ město.docx | Obsahový zdroj | Text, tabulky a grafika | Původní soubor; SHA-256 v metadatech. |
| [document-converting](C:/Users/kater/repo/urbiq/urbiq-AI-LAB/urbiq-skills/document-converting/SKILL.md) | Pravidla převodu | Režim, obrazy, lokátory a kontrola | v261027-v11; kandidátní skill. |
| Potvrzení uživatele v aktuálním chatu | Rozsah a režim | full_transcription všech vstupů | Přesná URL není dostupná. |
| markdown-metadata-standards; date-versioned-artifacts | Procedurální pravidla | Metadata a nové verzované balíčky | Nejsou důkazem správnosti zdrojového obsahu. |
