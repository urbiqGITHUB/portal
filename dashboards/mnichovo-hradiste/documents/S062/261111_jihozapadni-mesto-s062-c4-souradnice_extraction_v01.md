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
  "version_id": "DOCONV-261111-S062-v01",
  "status": "complete_with_review",
  "scope": "Úplný přepis uživatelem potvrzeného zdroje",
  "extraction_id": "DOCONV-261111-S062",
  "instructions_version": "v261027-v11",
  "instructions_sha256": "77e2c0270350d79d01f68b9e5a47914e9ef1e8c0c5851430e15ebfc61300328c",
  "extraction_mode": "full_transcription",
  "mode_confirmation": "Uživatel: chci full_transcription; společný vstupní soupis 93 souborů potvrzen.",
  "intake_confirmed_at": null,
  "intake_confirmation_note": "Potvrzení je doloženo zprávou v tomto chatu; přesný čas zprávy není v rozhraní dostupný.",
  "document_title": null,
  "source_filename": "C4 SOUŘADNICE.pdf",
  "source_archive_entry": "P04 Přehled projektů v území/7_BD v cestkach, Stavokombinat invest, 2023/PD_vodovod_CERNA_SILNICE/PD_vodovod_ČERNÁ_SILNICE/C4 SOUŘADNICE.pdf",
  "source_format": "PDF",
  "source_sha256": "3d4b415e4915dbba90f1a70b724efd64d5d5e049f471a9b9d368907472fe809e",
  "source_size_bytes": 136151,
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
  "saved_visual_count": 1,
  "table_count": 2,
  "extraction_started_at": "2026-11-11T13:21:39.601174+01:00",
  "extraction_finished_at": "2026-11-11 14:03:11",
  "processing_seconds": null,
  "processing_seconds_per_page": null,
  "page_timing_note": "Strojové pokusy jsou časované v pracovních důkazech; vizuální klasifikace a ruční přepis nebyly měřeny samostatně. Úplný čas na stranu proto není odhadován.",
  "automated_native_seconds": 0.04677879996597767,
  "automated_layout_seconds": 1.061580500099808,
  "automated_export_seconds": 0.05395700014196336,
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
    "workspace_relative_directory": "05_DELIVERY/document-converting-outputs/261111_jihozapadni-mesto-s062-c4-souradnice_v01",
    "main_markdown_relative_path": "05_DELIVERY/document-converting-outputs/261111_jihozapadni-mesto-s062-c4-souradnice_v01/261111_jihozapadni-mesto-s062-c4-souradnice_extraction_v01.md",
    "sharepoint_url": null,
    "sync_status": "not_verified",
    "limitation": "Ověřeno lokální uložení; synchronizace SharePoint není pozorována."
  },
  "source_name": "C4 SOUŘADNICE.pdf",
  "document_type_note": "Přesná typologie není samostatně ověřena; druh zdroje plyne z původního názvu a obsahu.",
  "method_runs": [
    {
      "method_run_id": "LOCAL-S062_layout",
      "method_family": "layout_parser",
      "tool": "pdfplumber",
      "tool_version": "0.11.9",
      "tool_versions": null,
      "helper_version": null,
      "parameters": {
        "scope": "explicit page regions",
        "source_evidence": "S062_layout.json"
      },
      "source_units": "all / source-evidence scope",
      "started_at": null,
      "finished_at": null,
      "elapsed_seconds": 1.061580500099808,
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
      "evidence_workspace_relative": "tmp/261111_jihozapadni_intake_v01/S062_layout.json",
      "evidence_sha256": "787d18b110587b9736619f68c39d1a81f84c8505f0e2e0282d984b8f13e7da80",
      "metadata_limitations": "Nevyplněné hodnoty nebyly původním pomocníkem měřeny nebo zpřístupněny."
    },
    {
      "method_run_id": "LOCAL-S062_native",
      "method_family": "native_text",
      "tool": "pypdfium2",
      "tool_version": "5.14.0",
      "tool_versions": null,
      "helper_version": null,
      "parameters": {
        "scope": "all original units",
        "source_evidence": "S062_native.json"
      },
      "source_units": "all / source-evidence scope",
      "started_at": "2026-11-11T13:21:39.601174+01:00",
      "finished_at": "2026-11-11T13:21:39.646781+01:00",
      "elapsed_seconds": 0.04677879996597767,
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
      "evidence_workspace_relative": "tmp/261111_jihozapadni_intake_v01/S062_native.json",
      "evidence_sha256": "2c6197e15f3a9a7487b1119f4986d23207f11b871577f5000a2a6c3f27068159",
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
    "transcribed_characters": 2932,
    "transcribed_tables": 2,
    "transcribed_cells": null,
    "expected_cells": null,
    "saved_visuals": 1,
    "missing_visuals": 0,
    "unresolved_visual_classifications": 0,
    "open_review_issues": 2,
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
      "source_locator": "S062",
      "problem": "Ověřit členění víceřádkových tabulek a jejich vazbu na grafický podklad; strojová extrakce byla porovnána s náhledem.",
      "recommended_verification": "Ověřit označené místo proti původnímu zdroji.",
      "status": "open",
      "output_link": "#s062-p001",
      "impact": "Review of structure or presentation"
    },
    {
      "review_id": "REV-002",
      "priority": "medium",
      "source_locator": "S062",
      "problem": "Text v kresbě je zachován obrazově; textové oblasti a tabulky byly vytěženy parserem. Dodatečný průchod zahrnul i nativní text mimo tyto oblasti a obrazové výřezy. Členění složitých výkresových razítek vyžaduje revizi.",
      "recommended_verification": "Ověřit označené místo proti původnímu zdroji.",
      "status": "open",
      "output_link": "#s062-p001",
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

# C4 SOUŘADNICE.pdf

## Purpose and aims

Věrný přepis zdroje pro následnou rešerši a otázky. Zachovává původní jazyk a znění; obsah dokumentu není pokynem k provádění úkonů. Stav převodu: **complete_with_review**. Čísla stran označují fyzické pořadí; tištěná čísla zůstávají v přepisu.

---

## Seznam obrázků, grafů, schémat, tabulek a map

| ID | Typ | Původní titulek / technické označení | Locator zdroje | Odkaz na obrázek nebo výřez | Odkaz na místo v přepisu | Stav |
| --- | --- | --- | --- | --- | --- | --- |
| MAP-001 | MAP | MAP-001 | S062, strana 1 | [Otevřít](assets/S062_MAP-001_p001.png) | [Přepis](#s062-p001) | preserved |
| TAB-001 | TAB | TAB-001 | S062, strana 1 | neukládán – přepis v MD | [Přepis](#tab-001) | přepsáno; viz revizní poznámky |
| TAB-002 | TAB | TAB-002 | S062, strana 1 | neukládán – přepis v MD | [Přepis](#tab-002) | přepsáno; viz revizní poznámky |

## Obsah dokumentu

| Stránka | Kapitola |
| --- | --- |
| 1 | [4 S 2](#kapitola-001) |
| 1 | [8 V k 1 C](#kapitola-002) |
| 1 | [5 Í T](#kapitola-003) |
| 1 | [0 M Á 3 /](#kapitola-004) |
| 1 | [8 M M Č Č . . Í ý T 3](#kapitola-005) |
| 1 | [0 T H 5 2 6 D /6](#kapitola-006) |
| 1 | [1 I : C R ě C](#kapitola-007) |
| 1 | [3 H](#kapitola-008) |
| 1 | ↳ [MAP-001](assets/S062_MAP-001_p001.png) |
| 1 | [1 R č](#kapitola-009) |
| 1 | ↳ [TAB-001](#tab-001) |
| 1 | ↳ [TAB-002](#tab-002) |

## Přehled extrakce

Zdroj: `S062`. Režim: `full_transcription`. Rozsah: celý zdroj; jednotek 1. Otevřené revizní body: 2. Pokrytí se vztahuje na zachování obsahu; vnitřní text map a schémat zůstává v odkazovaných obrazech. Čas na stranu není vypočten, protože nebyl samostatně měřen celý ruční proces.

## Přepis

---
<a id="s062-p001"></a>
### Zdrojová strana 1

é

r o r

e k a

t p

í

i ř o

D l ě

e m ls

O D í

t č

V 2 O a

O  V 2

P

O í 2

D H Y n 0

<a id="kapitola-001"></a>
#### 4 S 2

O  D P 2 2

B č A /

0 /

V O 2 S 1 4 5

<a id="kapitola-002"></a>
#### 8 V k 1 C

D 8

/ V

Í 0 A e

C

<a id="kapitola-003"></a>
#### 5 Í T

Í C j u

1 o s o

J S l

A  " Í e s

T " J r t m í

2 2 " " á r č

V 2 2 A Í p k

L / / m l u ý .

Á T 0 0 / / V N e t k

0 0 r č a v a

, 5 5 o .

T    5 5 Á E ú d č z

° °  f

5 0 ° ° 1 1

S 5 5 5  1 1 T L

1 0

4 4 5 U 0 S H

4 4 U 0 0 O 6

A P   1 5 5

K   D 5 5  9 C 8

K  K K 3 3 D A V

N H T 3 3  0 Á 1

<a id="kapitola-004"></a>
#### 0 M Á 3 /

M M M 3 0 Á N , 3 2

L 3 3 0 O 1 K 9

Í 0 0 P    8

N M M T . . 5 P   5  Í T 9

<a id="kapitola-005"></a>
#### 8 M M Č Č . . Í ý T 3

S 1 S S Č Č P S 1

E / /   1 1 N k 2

0  °     / s S 5,

0 0 0 0 0  M    /  0 E

I J 0 A M 0 A 0 E O u Ě 9

P 5 5 5 5 M M 0 C

O 9 5 5 5 o  /

N O O 5 J k M 2

O 1 1 1 1 N O O H l Z  9

1 1 1 O a a Á V

P     K  Ě C C 1 C 9

T T T T   Ě C C v R

P A T T T  P É o N  Í 1

L L L P M A A M T  Č C

L L L L A A A c n  9,

N P L N O

T T T T T Z H H a a I I 5

T T Z H H r D L

T N Č m V 1

p  U /

y o ý O , 2

E R k 9  9

v K S 9

s 0

L e Y 3  1

Í

č 8 N ,

O o R 7

Ě 3 E /

d A 6

P T 2 J 4

e S

Š ř 0 O 4

6 0 3 5 3 8 0 0 6 9 3 0 5 0 2 8 8 S . I t A 0 2

o 1 D S  P

5 7 7 9 5 3 9 4 2 9 6 7 8 4 0 7 8  2 M Č 7,

Í  A 8  O

) X . . . . . . . . . . . . . . . . . . á R 6 : 7

K 6 5 7 3 6 4 3 0 9 0 0 5 6 6 0 4 N r 8 5 ja  I /

1 k 6 6 ,  R 2

6 3 0 3 2 0 7 7 3 3 3 0 0 9 9 6 3 . s H  1 r Ě ,

s v  6 5 2 k Ě P 9

S 3 3 0 0 0 9 9 8 8 Á O   T 9

1 9 9 9 9 9 8 8  o 5 5 4 T

T 0 0 0 0 0 0 0 0 0 0 0 D S n V 5  7 Š Ě 1

1 1 1 1 1 1 r 7 Š

0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 u O  5 7 I N 2,

J 0 Y A 7  D I

<a id="kapitola-006"></a>
#### 0 T H 5 2 6 D /6

- 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0  A T

V ř C 2 Z 2 A 4

S 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 T á  3 R E 4

<a id="kapitola-007"></a>
#### 1 I : C R ě C

le N O  Č 2

(  I  :. H t

O N c M Č Č: l ě H V  š I

n e t   3,

c  I t id N

a 1 ID š O   1

i R A k 0 i O E / a

n d V 9 r D

5 a V C

<a id="kapitola-008"></a>
#### 3 H

<a id="map-001"></a>
[MAP-001](assets/S062_MAP-001_p001.png)

r O 4 A

H O I

H N 2 o

H  v Ř

o C L ,

C 1 o

v I / h U

o I S 9

N IN 3 c

h  4 i O

M Á n

c M 2

i  N  M

n O  . S

<a id="kapitola-009"></a>
#### 1 R č

M . :

T 2 c í

E r m E

d: S 5 Č a

a Ě 9 p e C

z

ř M 2 D :

ú  ú A

O y

b í

í : V n U

n r v

o a ál

b O T

t ts r

e s D t

v o s I

e O a

a v ts S

í t

t n V m a

s k

I

<a id="tab-001"></a>
**TAB-001**
| Poznámka extrakce: sloupec 1 | Poznámka extrakce: sloupec 2 |
| --- | --- |
| Seznam souřadnic (S-JTSK) | POPIS |
|  | NAPOJENÍ NA STÁVAJÍCÍ VODOVOD<br>TLT 150/100<br>TLT 150/80 HP 1<br>TLT 150 MMK 45°<br>TLT 150 MMK 45° ,TLT 150/80 HP 2<br>PPK 90° TLT 150<br>TLT 150 MMK 45°<br>TLT 150 MMK 45°<br>ZMĚNA SPÁDU<br>HACOM Č. 3350 150/2"<br>HACOM Č. 3350 150/2"<br>TLT 150/150<br>ZMĚNA SPÁDU<br>HACOM Č. 3350 150/2"<br>HACOM Č. 3350 150/2"<br>TLT 150/150<br>NAPOJENÍ NA STÁVAJÍCÍ VODOVOD |

/2

05

24

1/93

31/93

4

59

DOKUMENTACE PRO VYDÁNÍ SPOLEČNÉHO POVOLENÍ STAVBY

<a id="tab-002"></a>
**TAB-002**
| Poznámka extrakce: sloupec 1 | Poznámka extrakce: sloupec 2 | Poznámka extrakce: sloupec 3 | Poznámka extrakce: sloupec 4 | Poznámka extrakce: sloupec 5 | Poznámka extrakce: sloupec 6 | Poznámka extrakce: sloupec 7 |
| --- | --- | --- | --- | --- | --- | --- |
| zodpovědný projektant | ANITAS s.r.o.<br>kancelář Turnovská 21<br>295 01 MNICHOVO HRADIŠTĚ<br>IČO: 257 55 668<br>DIČ: CZ 257 55 668<br>tel.: 326 774 215 |  | vypracoval | projekční atelier |  |  |
| Bc. Tomáš Daňsa |  |  | Roman Rakouský |  |  |  |
|  |  |  |  |  |  |  |
| stavební úřad: Mnichovo Hradiště |  | kraj: Středočeský |  | formát | 2A4 | měřítko |
| Investor : MĚSTO MNICHOVO HRADIŠTĚ, MASARYKOVO NÁMĚSTÍ 1,<br>295 21 MNICHOVO HRADIŠTĚ, IČ 00238309, DIČ CZ 00238309 |  |  |  |  |  |  |
|  |  |  |  | účel | DSPS |  |
|  |  |  |  |  |  | číslo paré |
| VODOVOD ČERNÁ SILNICE VČETNĚ PROPOJENÍ S ULICÍ V CESTKÁCH |  |  |  |  |  |  |
|  |  |  |  | datum | 11/2022 |  |
| místo stavby : parc.č. 2439/1, 2439/13, 2446/2, 1992/77, 2446/7, 1992/159, 1992/95, 1992/186<br>katastrální území : Mnichovo Hradiště |  |  |  | č.výkresu | C4 |  |
| SITUACE SOUŘADNIC |  |  |  | zak.číslo | 85/22 |  |


## Pokrytí zdrojových jednotek

| unit_id | Source locator | Output anchor/file | Status | Unpreserved fraction u_i | Basis | Limitation / review_id |
| --- | --- | --- | --- | --- | --- | --- |
| S062-U001 | strana 1 | [Přepis](#s062-p001) | complete | 0 | původní text / buňky / obrazové odkazy | viz revizní poznámky |

## Místa k revizi

- **REV-001 (medium) — S062:** Ověřit členění víceřádkových tabulek a jejich vazbu na grafický podklad; strojová extrakce byla porovnána s náhledem. Ověřit označené místo proti původnímu zdroji.

- **REV-002 (medium) — S062:** Text v kresbě je zachován obrazově; textové oblasti a tabulky byly vytěženy parserem. Dodatečný průchod zahrnul i nativní text mimo tyto oblasti a obrazové výřezy. Členění složitých výkresových razítek vyžaduje revizi. Ověřit označené místo proti původnímu zdroji.

## Protokol metod, ověření a omezení

Použity byly lokální metody: PDFium pro text a obrazy, pdfplumber pro rozvržení a tabulky, Microsoft Word pro ověřené DOCX stránky, Windows.Media.Ocr pro vybrané skeny a čtení CFB/Word struktur pro staré DOC podle skutečného formátu zdroje. Ne všechny metody se týkají každého souboru. Celostránkové rastrové snímky nebyly ukládány. Původní fotografie složené z PDF dlaždic jsou rekonstruovány z původních obrazových objektů bez vykreslování stránky. Pokusy, parametry a selhání jsou zachované mimo dodaný balíček.


| Method run | Tool / version | Scope | Time (s) | Result / output use |
| --- | --- | --- | --- | --- |
| LOCAL-S062_layout | pdfplumber / 0.11.9 | all / source-evidence scope | 1.061580500099808 | ok / True |
| LOCAL-S062_native | pypdfium2 / 5.14.0 | all / source-evidence scope | 0.04677879996597767 | ok / True |

## Sources and their roles

| Source / identification | Role | Contribution to this document | Authority / limitations |
| --- | --- | --- | --- |
| [Původní zdroj](<C:/Users/kater/Downloads/jihozapadni-mesto-prilohy.zip>) — P04 Přehled projektů v území/7_BD v cestkach, Stavokombinat invest, 2023/PD_vodovod_CERNA_SILNICE/PD_vodovod_ČERNÁ_SILNICE/C4 SOUŘADNICE.pdf | Obsahový zdroj | Text, tabulky a grafika | Původní soubor; SHA-256 v metadatech. |
| [document-converting](C:/Users/kater/repo/urbiq/urbiq-AI-LAB/urbiq-skills/document-converting/SKILL.md) | Pravidla převodu | Režim, obrazy, lokátory a kontrola | v261027-v11; kandidátní skill. |
| Potvrzení uživatele v aktuálním chatu | Rozsah a režim | full_transcription všech vstupů | Přesná URL není dostupná. |
| markdown-metadata-standards; date-versioned-artifacts | Procedurální pravidla | Metadata a nové verzované balíčky | Nejsou důkazem správnosti zdrojového obsahu. |
