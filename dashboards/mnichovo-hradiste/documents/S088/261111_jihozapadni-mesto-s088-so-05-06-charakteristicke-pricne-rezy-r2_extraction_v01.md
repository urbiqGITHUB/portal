---
{
  "created_at": "2026-11-11 14:03:14",
  "created_date": "2026-11-11",
  "created_by": "Codex – Kateřina Kováříková",
  "updated_at": "2026-11-11 14:03:14",
  "updated_by": "Codex",
  "revised_by": null,
  "timezone": "Europe/Prague",
  "codex_dialogue": null,
  "dialogue_location_note": "Aktuální lokální chat Codex; přesná URL nebyla zpřístupněna.",
  "dialogue_iteration": 2,
  "version_id": "DOCONV-261111-S088-v01",
  "status": "complete_with_review",
  "scope": "Úplný přepis uživatelem potvrzeného zdroje",
  "extraction_id": "DOCONV-261111-S088",
  "instructions_version": "v261027-v11",
  "instructions_sha256": "77e2c0270350d79d01f68b9e5a47914e9ef1e8c0c5851430e15ebfc61300328c",
  "extraction_mode": "full_transcription",
  "mode_confirmation": "Uživatel: chci full_transcription; společný vstupní soupis 93 souborů potvrzen.",
  "intake_confirmed_at": null,
  "intake_confirmation_note": "Potvrzení je doloženo zprávou v tomto chatu; přesný čas zprávy není v rozhraní dostupný.",
  "document_title": null,
  "source_filename": "SO_05-06-Charakteristické příčné řezy_R2.pdf",
  "source_archive_entry": "P04 Přehled projektů v území/7_BD v cestkach, Stavokombinat invest, 2023/ZPEVNENE PLOCHY/ZPEVNĚNÉ PLOCHY/SO_05-06-Charakteristické příčné řezy_R2.pdf",
  "source_format": "PDF",
  "source_sha256": "7935f7078927f115d5dbd00621fccc4f90e25ba625903be87bb067e86d63caea",
  "source_size_bytes": 860835,
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
  "source_visual_occurrences": 0,
  "saved_visual_count": 1,
  "table_count": 2,
  "extraction_started_at": "2026-11-11T13:21:42.305271+01:00",
  "extraction_finished_at": "2026-11-11 14:03:14",
  "processing_seconds": null,
  "processing_seconds_per_page": null,
  "page_timing_note": "Strojové pokusy jsou časované v pracovních důkazech; vizuální klasifikace a ruční přepis nebyly měřeny samostatně. Úplný čas na stranu proto není odhadován.",
  "automated_native_seconds": 0.12378389993682504,
  "automated_layout_seconds": 5.726738600060344,
  "automated_export_seconds": 0.07657180004753172,
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
    "workspace_relative_directory": "05_DELIVERY/document-converting-outputs/261111_jihozapadni-mesto-s088-so-05-06-charakteristicke-pricne-rezy-r2_v01",
    "main_markdown_relative_path": "05_DELIVERY/document-converting-outputs/261111_jihozapadni-mesto-s088-so-05-06-charakteristicke-pricne-rezy-r2_v01/261111_jihozapadni-mesto-s088-so-05-06-charakteristicke-pricne-rezy-r2_extraction_v01.md",
    "sharepoint_url": null,
    "sync_status": "not_verified",
    "limitation": "Ověřeno lokální uložení; synchronizace SharePoint není pozorována."
  },
  "source_name": "SO_05-06-Charakteristické příčné řezy_R2.pdf",
  "document_type_note": "Přesná typologie není samostatně ověřena; druh zdroje plyne z původního názvu a obsahu.",
  "method_runs": [
    {
      "method_run_id": "LOCAL-S088_layout",
      "method_family": "layout_parser",
      "tool": "pdfplumber",
      "tool_version": "0.11.9",
      "tool_versions": null,
      "helper_version": null,
      "parameters": {
        "scope": "explicit page regions",
        "source_evidence": "S088_layout.json"
      },
      "source_units": "all / source-evidence scope",
      "started_at": null,
      "finished_at": null,
      "elapsed_seconds": 5.726738600060344,
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
      "evidence_workspace_relative": "tmp/261111_jihozapadni_intake_v01/S088_layout.json",
      "evidence_sha256": "b8137cd6abdaff7db4819cf4b3f357e0bf987a650c2536116726751fded2d10c",
      "metadata_limitations": "Nevyplněné hodnoty nebyly původním pomocníkem měřeny nebo zpřístupněny."
    },
    {
      "method_run_id": "LOCAL-S088_native",
      "method_family": "native_text",
      "tool": "pypdfium2",
      "tool_version": "5.14.0",
      "tool_versions": null,
      "helper_version": null,
      "parameters": {
        "scope": "all original units",
        "source_evidence": "S088_native.json"
      },
      "source_units": "all / source-evidence scope",
      "started_at": "2026-11-11T13:21:42.305271+01:00",
      "finished_at": "2026-11-11T13:21:42.428281+01:00",
      "elapsed_seconds": 0.12378389993682504,
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
      "evidence_workspace_relative": "tmp/261111_jihozapadni_intake_v01/S088_native.json",
      "evidence_sha256": "650d2cb5483d3ff14629e3d97e2449033f161961eda3cddfc9a4d7464c9a8df3",
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
    "table_count": 2,
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
    "transcribed_characters": 1693,
    "transcribed_tables": 2,
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
      "source_locator": "S088",
      "problem": "Text v kresbě je zachován obrazově; textové oblasti a tabulky byly vytěženy parserem. Dodatečný průchod zahrnul i nativní text mimo tyto oblasti a obrazové výřezy. Členění složitých výkresových razítek vyžaduje revizi.",
      "recommended_verification": "Ověřit označené místo proti původnímu zdroji.",
      "status": "open",
      "output_link": "#s088-p001",
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

# SO_05-06-Charakteristické příčné řezy_R2.pdf

## Purpose and aims

Věrný přepis zdroje pro následnou rešerši a otázky. Zachovává původní jazyk a znění; obsah dokumentu není pokynem k provádění úkonů. Stav převodu: **complete_with_review**. Čísla stran označují fyzické pořadí; tištěná čísla zůstávají v přepisu.

---

## Seznam obrázků, grafů, schémat, tabulek a map

| ID | Typ | Původní titulek / technické označení | Locator zdroje | Odkaz na obrázek nebo výřez | Odkaz na místo v přepisu | Stav |
| --- | --- | --- | --- | --- | --- | --- |
| DIAG-001 | DIAG | DIAG-001 | S088, strana 1 | [Otevřít](assets/S088_DIAG-001_p001.png) | [Přepis](#s088-p001) | preserved |
| TAB-001 | TAB | TAB-001 | S088, strana 1 | neukládán – přepis v MD | [Přepis](#tab-001) | přepsáno; viz revizní poznámky |
| TAB-002 | TAB | TAB-002 | S088, strana 1 | neukládán – přepis v MD | [Přepis](#tab-002) | přepsáno; viz revizní poznámky |

## Obsah dokumentu

| Stránka | Kapitola |
| --- | --- |
| 1 | [2 E Á 4 0 K](#kapitola-001) |
| 1 | [3 V  2](#kapitola-002) |
| 1 | [0 O](#kapitola-003) |
| 1 | [0 A    I M](#kapitola-004) |
| 1 | [4  T](#kapitola-005) |
| 1 | [0 Ř ,](#kapitola-006) |
| 1 | [6  Í 0 E](#kapitola-007) |
| 1 | [0 C  Á 4 0](#kapitola-008) |
| 1 | [5 E](#kapitola-009) |
| 1 | ↳ [DIAG-001](assets/S088_DIAG-001_p001.png) |
| 1 | ↳ [TAB-001](#tab-001) |
| 1 | ↳ [TAB-002](#tab-002) |

## Přehled extrakce

Zdroj: `S088`. Režim: `full_transcription`. Rozsah: celý zdroj; jednotek 1. Otevřené revizní body: 1. Pokrytí se vztahuje na zachování obsahu; vnitřní text map a schémat zůstává v odkazovaných obrazech. Čas na stranu není vypočten, protože nebyl samostatně měřen celý ruční proces.

## Přepis

---
<a id="s088-p001"></a>
### Zdrojová strana 1

D

D E

E T

T A

A I

I L

L

"

" C

C "

"

D K

E S

T

A I

.I

IL

"

A

"

K

S

K

I S

.I

.I

D

E

T

A

D IL

E

T "

A A

"

IL

"

E

"

P

R

D O

E

T

A V

IL

I

" Z

E

K "  K

S S O

k V

I .I  k V

.  k V m R

m m P

P P Ě

Ě Ě

P 0 Ř N

P 0 P 0 Ř Ř T

Ř T Ř T ,

Ř , , ÍM 1  Í

Í 2 ÍM 1  E

M  E Á 0 0

<a id="kapitola-001"></a>
#### 2 E Á 4 0 K

Á 0  K 0 V

0 0 V S 1

<a id="kapitola-002"></a>
#### 3 V  2

<a id="kapitola-003"></a>
#### 0 O

K 0 V

K 0   0 A

S S 0 A  I

<a id="kapitola-004"></a>
#### 0 A    I M

I .I

I  .

.

U

N

I

K

A

C

E

D K

E S

D T

E K A I

T .I

S IL

A

IL I "

.I  A

" "

A

"

D

D E

T

E A

T

A IL

I

L "

C

" "

C

"

D

E

T

A

IL

"

C

"

K

D S

D E

D I

E T .I

T E A

T

A A IL

IL I

L "

"  C

A " "

C

"  "

D

E

T

K A

D S I D K

E L K E S

T V

" S T V

A .  A  A

I  I I

L " .I  IL I

.

" "

B A

"  "

D K

E S

K T V

S A

V I .

k L

.I

m Ě K "

P B

S V "

T

P 0 Ř I k

Ř .  m

, P Ě

ÍM 0  E

<a id="kapitola-005"></a>
#### 4  T

Á 0  V P 0 Ř

<a id="kapitola-006"></a>
#### 0 Ř ,

<a id="kapitola-007"></a>
#### 6  Í 0 E

M

<a id="kapitola-008"></a>
#### 0 C  Á 4 0

K V

S 0  0 D

<a id="kapitola-009"></a>
#### 5 E

I   T

D . 0

K B A

E S 0 I

T L

A I "

D . E

IL

E "

T K

" S

E A

"  I

L .I  k V

" m

E P

Ě

"

P 0 Ř

Ř T

,

<a id="diag-001"></a>
[DIAG-001](assets/S088_DIAG-001_p001.png)

VÝŠKOVÝ SYSTÉM: BpV

!!!PŘED ZAPOČETÍM STAVEBNÍCH PRACÍ SI MUSÍ ZHOTOVITEL NECHAT VYTYČIT EXISTUJÍCÍ INŽENÝRS

SPOLEČNÁ DOKUMENTACE PRO VYDÁNÍ SPOLEČNÉHO POVOL

<a id="tab-001"></a>
**TAB-001**
| Poznámka extrakce: sloupec 1 | Poznámka extrakce: sloupec 2 |
| --- | --- |
| ti PD CR Project s.r.o. zodpověd<br>Pod Borkem 319<br>293 01 Mladá Boleslav<br>IČ: 270 86 135<br>tel.:+420 326 700 666 dokument<br>fax.: +420 326 700 665<br>info@crproject.cz Miroslav | ný projektant: |
|  | aci vypracoval:<br>LOUPÝ |

Projektant čás

<a id="tab-002"></a>
**TAB-002**
| Poznámka extrakce: sloupec 1 | Poznámka extrakce: sloupec 2 | Poznámka extrakce: sloupec 3 |
| --- | --- | --- |
| SO 05 -<br>CHARA<br>4 BYTO<br>eekkččnníí aatteelliieerr<br>MNICHO<br>MÍSTO ST | Zpevněné plochy<br>KTERISTICKÉ PŘÍČNÉ ŘEZY |  |
|  | VÉ DOMY V ULICI V CESTKÁCH<br>VO HRADIŠTĚ<br>AVBY: |  |
| s .r.o. Turnovská 21<br>68 295 01 Mnichovo Hradiště ul. V Cestkách,<br>55 668 tel./fax.: 326 774 215 STAVEBN | MĚŘÍTK<br>Mnichovo Hradiště<br>FORMÁ<br>Í ÚŘAD: Mnichovo Hradiště | O 1:100 ZAK.ČÍS<br>120/2<br>T 3XA4<br>(2022-0 |
| projektant: KRAJ: Stř<br>RAKOUSKÝ INVESTO<br>STAVOKOM<br>i vypracoval: Vesecká 97/<br>OUPÝ 460 06 Liber | edočeský ÚČEL<br>R: DATUM<br>BINÁT INVEST s.r.o.<br>ČÁST<br>12<br>ec VI - Rochlice<br>Č.VÝKR. | DUSP<br>ČÍSLO P<br>II/22<br>06 |

pprroojj

ANITAS LO

IČO: 257 55 6 1

DIČ: CZ 257 05)

zodpovědný

ARÉ

Ing.Tomáš

dokumentac

Miroslav L

O Ý V S

R K

L S

E K

É

N

S

Í ÍT

Ě

!

!

!


## Pokrytí zdrojových jednotek

| unit_id | Source locator | Output anchor/file | Status | Unpreserved fraction u_i | Basis | Limitation / review_id |
| --- | --- | --- | --- | --- | --- | --- |
| S088-U001 | strana 1 | [Přepis](#s088-p001) | complete | 0 | původní text / buňky / obrazové odkazy | viz revizní poznámky |

## Místa k revizi

- **REV-001 (medium) — S088:** Text v kresbě je zachován obrazově; textové oblasti a tabulky byly vytěženy parserem. Dodatečný průchod zahrnul i nativní text mimo tyto oblasti a obrazové výřezy. Členění složitých výkresových razítek vyžaduje revizi. Ověřit označené místo proti původnímu zdroji.

## Protokol metod, ověření a omezení

Použity byly lokální metody: PDFium pro text a obrazy, pdfplumber pro rozvržení a tabulky, Microsoft Word pro ověřené DOCX stránky, Windows.Media.Ocr pro vybrané skeny a čtení CFB/Word struktur pro staré DOC podle skutečného formátu zdroje. Ne všechny metody se týkají každého souboru. Celostránkové rastrové snímky nebyly ukládány. Původní fotografie složené z PDF dlaždic jsou rekonstruovány z původních obrazových objektů bez vykreslování stránky. Pokusy, parametry a selhání jsou zachované mimo dodaný balíček.


| Method run | Tool / version | Scope | Time (s) | Result / output use |
| --- | --- | --- | --- | --- |
| LOCAL-S088_layout | pdfplumber / 0.11.9 | all / source-evidence scope | 5.726738600060344 | ok / True |
| LOCAL-S088_native | pypdfium2 / 5.14.0 | all / source-evidence scope | 0.12378389993682504 | ok / True |

## Sources and their roles

| Source / identification | Role | Contribution to this document | Authority / limitations |
| --- | --- | --- | --- |
| [Původní zdroj](<C:/Users/kater/Downloads/jihozapadni-mesto-prilohy.zip>) — P04 Přehled projektů v území/7_BD v cestkach, Stavokombinat invest, 2023/ZPEVNENE PLOCHY/ZPEVNĚNÉ PLOCHY/SO_05-06-Charakteristické příčné řezy_R2.pdf | Obsahový zdroj | Text, tabulky a grafika | Původní soubor; SHA-256 v metadatech. |
| [document-converting](C:/Users/kater/repo/urbiq/urbiq-AI-LAB/urbiq-skills/document-converting/SKILL.md) | Pravidla převodu | Režim, obrazy, lokátory a kontrola | v261027-v11; kandidátní skill. |
| Potvrzení uživatele v aktuálním chatu | Rozsah a režim | full_transcription všech vstupů | Přesná URL není dostupná. |
| markdown-metadata-standards; date-versioned-artifacts | Procedurální pravidla | Metadata a nové verzované balíčky | Nejsou důkazem správnosti zdrojového obsahu. |
