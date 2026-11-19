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
  "version_id": "DOCONV-261111-S089-v01",
  "status": "complete_with_review",
  "scope": "Úplný přepis uživatelem potvrzeného zdroje",
  "extraction_id": "DOCONV-261111-S089",
  "instructions_version": "v261027-v11",
  "instructions_sha256": "77e2c0270350d79d01f68b9e5a47914e9ef1e8c0c5851430e15ebfc61300328c",
  "extraction_mode": "full_transcription",
  "mode_confirmation": "Uživatel: chci full_transcription; společný vstupní soupis 93 souborů potvrzen.",
  "intake_confirmed_at": null,
  "intake_confirmation_note": "Potvrzení je doloženo zprávou v tomto chatu; přesný čas zprávy není v rozhraní dostupný.",
  "document_title": null,
  "source_filename": "SO_05-07-Vzorový příčný řez_R2.pdf",
  "source_archive_entry": "P04 Přehled projektů v území/7_BD v cestkach, Stavokombinat invest, 2023/ZPEVNENE PLOCHY/ZPEVNĚNÉ PLOCHY/SO_05-07-Vzorový příčný řez_R2.pdf",
  "source_format": "PDF",
  "source_sha256": "49fe09cdd0cbd8253b50b6d19b6ff757af6eb7d69350e3a637ee83de1d255413",
  "source_size_bytes": 1347521,
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
  "table_count": 1,
  "extraction_started_at": "2026-11-11T13:21:42.438815+01:00",
  "extraction_finished_at": "2026-11-11 14:03:14",
  "processing_seconds": null,
  "processing_seconds_per_page": null,
  "page_timing_note": "Strojové pokusy jsou časované v pracovních důkazech; vizuální klasifikace a ruční přepis nebyly měřeny samostatně. Úplný čas na stranu proto není odhadován.",
  "automated_native_seconds": 0.29237969988025725,
  "automated_layout_seconds": 14.516303300159052,
  "automated_export_seconds": 0.17023140005767345,
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
    "workspace_relative_directory": "05_DELIVERY/document-converting-outputs/261111_jihozapadni-mesto-s089-so-05-07-vzorovy-pricny-rez-r2_v01",
    "main_markdown_relative_path": "05_DELIVERY/document-converting-outputs/261111_jihozapadni-mesto-s089-so-05-07-vzorovy-pricny-rez-r2_v01/261111_jihozapadni-mesto-s089-so-05-07-vzorovy-pricny-rez-r2_extraction_v01.md",
    "sharepoint_url": null,
    "sync_status": "not_verified",
    "limitation": "Ověřeno lokální uložení; synchronizace SharePoint není pozorována."
  },
  "source_name": "SO_05-07-Vzorový příčný řez_R2.pdf",
  "document_type_note": "Přesná typologie není samostatně ověřena; druh zdroje plyne z původního názvu a obsahu.",
  "method_runs": [
    {
      "method_run_id": "LOCAL-S089_layout",
      "method_family": "layout_parser",
      "tool": "pdfplumber",
      "tool_version": "0.11.9",
      "tool_versions": null,
      "helper_version": null,
      "parameters": {
        "scope": "explicit page regions",
        "source_evidence": "S089_layout.json"
      },
      "source_units": "all / source-evidence scope",
      "started_at": null,
      "finished_at": null,
      "elapsed_seconds": 14.516303300159052,
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
      "evidence_workspace_relative": "tmp/261111_jihozapadni_intake_v01/S089_layout.json",
      "evidence_sha256": "a6c91ac9eb2e34bfd649fd48a78874837279e6eafeb976a6e6584900a95607da",
      "metadata_limitations": "Nevyplněné hodnoty nebyly původním pomocníkem měřeny nebo zpřístupněny."
    },
    {
      "method_run_id": "LOCAL-S089_native",
      "method_family": "native_text",
      "tool": "pypdfium2",
      "tool_version": "5.14.0",
      "tool_versions": null,
      "helper_version": null,
      "parameters": {
        "scope": "all original units",
        "source_evidence": "S089_native.json"
      },
      "source_units": "all / source-evidence scope",
      "started_at": "2026-11-11T13:21:42.438815+01:00",
      "finished_at": "2026-11-11T13:21:42.731419+01:00",
      "elapsed_seconds": 0.29237969988025725,
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
      "evidence_workspace_relative": "tmp/261111_jihozapadni_intake_v01/S089_native.json",
      "evidence_sha256": "09c690ef13efaf8031733775efe9bd46460cf16a0f8ca2bb0ebe413d125120ae",
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
    "transcribed_characters": 3464,
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
      "source_locator": "S089",
      "problem": "Text v kresbě je zachován obrazově; textové oblasti a tabulky byly vytěženy parserem. Dodatečný průchod zahrnul i nativní text mimo tyto oblasti a obrazové výřezy. Členění složitých výkresových razítek vyžaduje revizi.",
      "recommended_verification": "Ověřit označené místo proti původnímu zdroji.",
      "status": "open",
      "output_link": "#s089-p001",
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

# SO_05-07-Vzorový příčný řez_R2.pdf

## Purpose and aims

Věrný přepis zdroje pro následnou rešerši a otázky. Zachovává původní jazyk a znění; obsah dokumentu není pokynem k provádění úkonů. Stav převodu: **complete_with_review**. Čísla stran označují fyzické pořadí; tištěná čísla zůstávají v přepisu.

---

## Seznam obrázků, grafů, schémat, tabulek a map

| ID | Typ | Původní titulek / technické označení | Locator zdroje | Odkaz na obrázek nebo výřez | Odkaz na místo v přepisu | Stav |
| --- | --- | --- | --- | --- | --- | --- |
| TAB-001 | TAB | TAB-001 | S089, strana 1 | neukládán – přepis v MD | [Přepis](#tab-001) | přepsáno; viz revizní poznámky |
| DIAG-001 | DIAG | DIAG-001 | S089, strana 1 | [Otevřít](assets/S089_DIAG-001_p001.png) | [Přepis](#s089-p001) | preserved |

## Obsah dokumentu

| Stránka | Kapitola |
| --- | --- |
| 1 | [7 O](#kapitola-001) |
| 1 | [1 J](#kapitola-002) |
| 1 | [0 O M](#kapitola-003) |
| 1 | [0 D](#kapitola-004) |
| 1 | [0 S](#kapitola-005) |
| 1 | [3 D](#kapitola-006) |
| 1 | [4 O 0](#kapitola-007) |
| 1 | [0 D 5](#kapitola-008) |
| 1 | [0 V](#kapitola-009) |
| 1 | [4 V ÉE](#kapitola-010) |
| 1 | [9 S "](#kapitola-011) |
| 1 | [3 T F](#kapitola-012) |
| 1 | [0  H O](#kapitola-013) |
| 1 | [1 R S](#kapitola-014) |
| 1 | [0 B M T G](#kapitola-015) |
| 1 | [0 E](#kapitola-016) |
| 1 | [2  T A](#kapitola-017) |
| 1 | [0 O](#kapitola-018) |
| 1 | [0 V](#kapitola-019) |
| 1 | [2 O H](#kapitola-020) |
| 1 | [0  I Š](#kapitola-021) |
| 1 | [2 E O Ě "](#kapitola-022) |
| 1 | [5  V R](#kapitola-023) |
| 1 | ↳ [TAB-001](#tab-001) |
| 1 | ↳ [DIAG-001](assets/S089_DIAG-001_p001.png) |
| 1 | [SO 05 - Zpevněné plochy](#kapitola-024) |
| 1 | [VZOROVÝ PŘÍČNÝ ŘEZ](#kapitola-025) |
| 1 | [4 BYTOVÉ DOMY V ULICI V CESTKÁCH](#kapitola-026) |

## Přehled extrakce

Zdroj: `S089`. Režim: `full_transcription`. Rozsah: celý zdroj; jednotek 1. Otevřené revizní body: 1. Pokrytí se vztahuje na zachování obsahu; vnitřní text map a schémat zůstává v odkazovaných obrazech. Čas na stranu není vypočten, protože nebyl samostatně měřen celý ruční proces.

## Přepis

---
<a id="s089-p001"></a>
### Zdrojová strana 1

K

K

S

K S

S  I

I .

I

.

I

I

I

.

K

K K K

S

S S S

I

V V V V

I .

I .

.

I

.

K

S

V

I

I

I

.

K

S

I

I

.

K

S

V

I

I

.

K

S

V

.

K

S

I

.

k

m

V

P 0 Ř

Ř

,

Í 1

M

Á 6 0

0

1

0

K

S 0

I

.

D

Z V Ú

D E Á P

E M P R

O

N E A

P N V

T Í

O F O A

R R -

A C P

U É O

Z E

Č O M D

E I U E L

L O

N  N

D Ž

Á T Í

L O

E P

K "  V O

Č

O E S É D

N H

N O K

<a id="kapitola-001"></a>
#### 7 O

S "

T 3 P M

O

R 6 U

<a id="kapitola-002"></a>
#### 1 J

U 3 IV N

K 3 A IK

C V  A

(

E  2 C

T -

L 3 Í

P O  P

% Ř

O U

) I

D Š A D

Ť Á

É C

P N

L E R

N  Í

<a id="kapitola-003"></a>
#### 0 O M

É ,4 M

D M SÍ

R E

E N

Í

N M

Á

Ž

E

V P

Ř

T E K

L D

. P S

C O

C I

K I

A L .

A

<a id="kapitola-004"></a>
#### 0 D

,3

<a id="kapitola-005"></a>
#### 0 S

E

M J

M

U

T

Í

O

R

N

IC

E

D

P O A

R B C

O R O E

U

Z B K T

A N E

T ÍR A

ÍK B

ŽO D

I

E V R

L

N ÉA

ÍH I

N

D O "

<a id="kapitola-006"></a>
#### 3 D

<a id="kapitola-007"></a>
#### 4 O 0

<a id="kapitola-008"></a>
#### 0 D 5

"

<a id="kapitola-009"></a>
#### 0 V

O

k

N D

N

Ě

N

Í

D

E

O D C

B O E

L T

A G R P

C U A U O K

C LC O A

E LO  B R

S Y  V

S  N U

ÍČÁ I

K E  L

O N S

<a id="kapitola-010"></a>
#### 4 V ÉE

<a id="kapitola-011"></a>
#### 9 S "

ÉH

<a id="kapitola-012"></a>
#### 3 T F

<a id="kapitola-013"></a>
#### 0  H O

O  A

Ž "

V

O L A

D A

V B V

O U

D P

S D U

A N

E S

D Ě

O T

N I

V T Í

Ý

A

O

B

R I

U L

B

N

ÍK "

C

5

0

/2

"

0

0

/

1

0

0

0

m

m

D D

B S D

E I E

L E T E

T N A

O I

Č T IL T

N N

O U

Í A A

K L

V I

R Č

É

A I N I

D D

L J L Í L

O N - O  V

Ž Í  P P

K O E

E  " U "

<a id="kapitola-014"></a>
#### 1 R S

<a id="kapitola-015"></a>
#### 0 B M T G

Z B U T

<a id="kapitola-016"></a>
#### 0 E

B / IK Č I

<a id="kapitola-017"></a>
#### 2  T A

E 5 " R E "

O N

T 0 O

/ N Á

O 1 Š I

<a id="kapitola-018"></a>
#### 0 O

N T M L

<a id="kapitola-019"></a>
#### 0 V

U 0 Ě IK

É

m R R "

C

m L B O

<a id="kapitola-020"></a>
#### 2 O H

<a id="kapitola-021"></a>
#### 0  I Š

Ž N T

/

<a id="kapitola-022"></a>
#### 2 E O Ě "

<a id="kapitola-023"></a>
#### 5  V R

<a id="tab-001"></a>
**TAB-001**
| Poznámka extrakce: sloupec 1 | Poznámka extrakce: sloupec 2 |
| --- | --- |
| KS IV.<br>KS I.<br>KS V.<br>KS II.<br>KS VI.<br>KS III.<br>KS VII.<br>KS VIII. |  |
|  | KS IV.<br>KS I.<br>KS V.<br>KS II.<br>KS VI.<br>KS III.<br>KS VII.<br>KS VIII. |

<a id="diag-001"></a>
[DIAG-001](assets/S089_DIAG-001_p001.png)

POZNÁMKY:

POZNÁMKA PRO PŘÍJEMCE JEDNOTLIVÝCH KONSTRUKČNÍCH VRSTEV:

U PŘÍČNÉHO ŘEZU KONSTRUKČNÍ MSOUVRSTVÍM JSOU VYZNAČENY MINIMÁLN ÍHODNOTY MODULŮ PŘETVÁRNOST IZ DRUHÉ ZATĚŽOVAC ÍVĚTVE STATICKÉ

ZATĚŽOVAC ÍZKOUŠKY DLE ČSN 72 1006. PRO PŘEDPOKLÁDANO UŽIVOTNOST KONSTRUKC EVOZOVKY DOPORUČUJEM ETRVAT NA UVEDENÝCH HODNOTÁCH PŘI

KONTROLNÍCH PROCESECH VÝSTAVBY.

ULOŽENÍ SÍTÍ V KOMUNIKACI BUDE PROVEDENO V SOULADU S ČSN 73 6005 - PROSTOROVÉ USPOŘÁDÁNÍ SÍTÍ TECHNICKÉHO VYBAVENÍ.

POZNÁMKA K ROZHRANÍ JEDNOTLIVÝCH PLOCH

KOMUNIKAC ES ASFALTOBETONOVÝ PMOVRCHEM JE LEMOVÁNA SILNIČN ÍBETONOVOU OBRUBOU 15/25/100 CM. VÝŠKA SILNIČN ÍOBRUBY OD POVRCHU KOMUNIKACE

JE 10,0 CM. V MÍSTECH PŘECHODŮ PRO CHODCE ,MÍST PRO PŘECHÁZEN AÍ  VJEZDŮ NA SOUKROMÉ PARCELY BUDE SILNIČN ÍOBRUBA SNÍŽENA NA VÝŠKU 2,0 CM OD

ASFALTOVÉHO KRYTU .PRO ODDĚLEN PÍ OJÍŽDĚNÉ ZÁMKOVÉ DLAŽBY VJEZDŮ OD PLOCH ZELENĚ SE OSAD ÍBETONOVÁ SILNIČN ÍOBRUBA 10/25/100 CM. VÝŠKA OBRUBY

JE MIN. 6,0 CM OD ZÁMKOVÉ DLAŽBY. OBRUBA TVOŘÍ VODÍCÍ LINII PRO NEVIDOMÉ A SLABOZRAKÉ.

VŠECHNY OBRUBY A PALISÁDY BUDOU OSAZENÉ DO LOŽE S BOČNÍ OPĚROU Z PROSTÉHO BETONU C 20/25 n XF3.

POZNÁMKA K DETAILU STYKU FASÁDY/OPLOCENÍ A PŘILEHLÝCH UPRAVOVANÝCH PLOCH:

V MÍSTECH KDE NOVÁ ÚPRAVA UL. PROSTORU PŘILÉHÁ K BUDOVÁM RESP .K OPLOCEN ÍJE TŘEBA BUDOVU/OPLOCE NCÍHRÁNIT VLOŽENÍM NOPOVANÉ FÓLIE .V

PŘÍPADĚ KDE DOJDE KE SNIŽOVÁNÍ ÚROVNĚ TERÉNU, JE TŘEBA DOPLNIT CHYBĚJÍCÍ ÚPRAVU FASÁDY (POPŘ I PODEZDÍVKY) AŽ K NOVÉ ÚROVNI.

SOUŘADNICOVÝ SYSTÉM: S-JTSK

VÝŠKOVÝ SYSTÉM: BpV

!!!PŘED ZAPOČETÍM STAVEBNÍCH PRACÍ SI MUSÍ ZHOTOVITEL NECHAT VYTYČIT EXISTUJÍCÍ INŽENÝRS

SPOLEČNÁ DOKUMENTACE PRO VYDÁNÍ SPOLEČNÉHO POVOL

Projektant části PD

CR Project s.r.o.

zodpovědný projektant:

Pod Borkem 319

293 01 Mladá Boleslav

IČ: 270 86 135

tel.:+420 326 700 666

dokumentaci vypracoval:

fax.: +420 326 700 665

info@crproject.cz Miroslav LOUPÝ

<a id="kapitola-024"></a>
#### SO 05 - Zpevněné plochy

<a id="kapitola-025"></a>
#### VZOROVÝ PŘÍČNÝ ŘEZ

<a id="kapitola-026"></a>
#### 4 BYTOVÉ DOMY V ULICI V CESTKÁCH

pprroojjeekkččnníí  aatteelliieerr

MNICHOVO HRADIŠTĚ

ANITAS MÍSTO STAVBY: ZAK.ČÍSLO

s.r.o. Turnovská 21 MĚŘÍTKO 1:50

ul. V Cestkách, Mnichovo Hradiště 120/21

IČO: 257 55 668 295 01 Mnichovo Hradiště

FORMÁT 6XA4

tel./fax.: 326 774 215 (2022-005)

DIČ: CZ 257 55 668 STAVEBNÍ ÚŘAD: Mnichovo Hradiště

ÚČEL DUSP

zodpovědný projektant: KRAJ: Středočeský

ČÍSLO PARÉ

Ing.Tomáš RAKOUSKÝ INVESTOR: DATUM II/22

STAVOKOMBINÁT INVEST s.r.o.

dokumentaci vypracoval: ČÁST

Vesecká 97/12

Miroslav LOUPÝ 460 06 Liberec VI - Rochlice

Č.VÝKR. 07

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
| S089-U001 | strana 1 | [Přepis](#s089-p001) | complete | 0 | původní text / buňky / obrazové odkazy | viz revizní poznámky |

## Místa k revizi

- **REV-001 (medium) — S089:** Text v kresbě je zachován obrazově; textové oblasti a tabulky byly vytěženy parserem. Dodatečný průchod zahrnul i nativní text mimo tyto oblasti a obrazové výřezy. Členění složitých výkresových razítek vyžaduje revizi. Ověřit označené místo proti původnímu zdroji.

## Protokol metod, ověření a omezení

Použity byly lokální metody: PDFium pro text a obrazy, pdfplumber pro rozvržení a tabulky, Microsoft Word pro ověřené DOCX stránky, Windows.Media.Ocr pro vybrané skeny a čtení CFB/Word struktur pro staré DOC podle skutečného formátu zdroje. Ne všechny metody se týkají každého souboru. Celostránkové rastrové snímky nebyly ukládány. Původní fotografie složené z PDF dlaždic jsou rekonstruovány z původních obrazových objektů bez vykreslování stránky. Pokusy, parametry a selhání jsou zachované mimo dodaný balíček.


| Method run | Tool / version | Scope | Time (s) | Result / output use |
| --- | --- | --- | --- | --- |
| LOCAL-S089_layout | pdfplumber / 0.11.9 | all / source-evidence scope | 14.516303300159052 | ok / True |
| LOCAL-S089_native | pypdfium2 / 5.14.0 | all / source-evidence scope | 0.29237969988025725 | ok / True |

## Sources and their roles

| Source / identification | Role | Contribution to this document | Authority / limitations |
| --- | --- | --- | --- |
| [Původní zdroj](<C:/Users/kater/Downloads/jihozapadni-mesto-prilohy.zip>) — P04 Přehled projektů v území/7_BD v cestkach, Stavokombinat invest, 2023/ZPEVNENE PLOCHY/ZPEVNĚNÉ PLOCHY/SO_05-07-Vzorový příčný řez_R2.pdf | Obsahový zdroj | Text, tabulky a grafika | Původní soubor; SHA-256 v metadatech. |
| [document-converting](C:/Users/kater/repo/urbiq/urbiq-AI-LAB/urbiq-skills/document-converting/SKILL.md) | Pravidla převodu | Režim, obrazy, lokátory a kontrola | v261027-v11; kandidátní skill. |
| Potvrzení uživatele v aktuálním chatu | Rozsah a režim | full_transcription všech vstupů | Přesná URL není dostupná. |
| markdown-metadata-standards; date-versioned-artifacts | Procedurální pravidla | Metadata a nové verzované balíčky | Nejsou důkazem správnosti zdrojového obsahu. |
