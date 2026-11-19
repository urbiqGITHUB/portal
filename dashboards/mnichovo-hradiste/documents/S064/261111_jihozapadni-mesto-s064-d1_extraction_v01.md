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
  "version_id": "DOCONV-261111-S064-v01",
  "status": "complete_with_review",
  "scope": "Úplný přepis uživatelem potvrzeného zdroje",
  "extraction_id": "DOCONV-261111-S064",
  "instructions_version": "v261027-v11",
  "instructions_sha256": "77e2c0270350d79d01f68b9e5a47914e9ef1e8c0c5851430e15ebfc61300328c",
  "extraction_mode": "full_transcription",
  "mode_confirmation": "Uživatel: chci full_transcription; společný vstupní soupis 93 souborů potvrzen.",
  "intake_confirmed_at": null,
  "intake_confirmation_note": "Potvrzení je doloženo zprávou v tomto chatu; přesný čas zprávy není v rozhraní dostupný.",
  "document_title": null,
  "source_filename": "D1.pdf",
  "source_archive_entry": "P04 Přehled projektů v území/7_BD v cestkach, Stavokombinat invest, 2023/PD_vodovod_CERNA_SILNICE/PD_vodovod_ČERNÁ_SILNICE/D1.pdf",
  "source_format": "PDF",
  "source_sha256": "3497feaed30f8ac8d4371770d66a8f39bb0d0ce728bfc8e5abb11a3ac4512995",
  "source_size_bytes": 83053,
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
  "extraction_started_at": "2026-11-11T13:21:39.665992+01:00",
  "extraction_finished_at": "2026-11-11 14:03:11",
  "processing_seconds": null,
  "processing_seconds_per_page": null,
  "page_timing_note": "Strojové pokusy jsou časované v pracovních důkazech; vizuální klasifikace a ruční přepis nebyly měřeny samostatně. Úplný čas na stranu proto není odhadován.",
  "automated_native_seconds": 0.019666299922391772,
  "automated_layout_seconds": 0.45637329993769526,
  "automated_export_seconds": 0.05273200012743473,
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
    "workspace_relative_directory": "05_DELIVERY/document-converting-outputs/261111_jihozapadni-mesto-s064-d1_v01",
    "main_markdown_relative_path": "05_DELIVERY/document-converting-outputs/261111_jihozapadni-mesto-s064-d1_v01/261111_jihozapadni-mesto-s064-d1_extraction_v01.md",
    "sharepoint_url": null,
    "sync_status": "not_verified",
    "limitation": "Ověřeno lokální uložení; synchronizace SharePoint není pozorována."
  },
  "source_name": "D1.pdf",
  "document_type_note": "Přesná typologie není samostatně ověřena; druh zdroje plyne z původního názvu a obsahu.",
  "method_runs": [
    {
      "method_run_id": "LOCAL-S064_layout",
      "method_family": "layout_parser",
      "tool": "pdfplumber",
      "tool_version": "0.11.9",
      "tool_versions": null,
      "helper_version": null,
      "parameters": {
        "scope": "explicit page regions",
        "source_evidence": "S064_layout.json"
      },
      "source_units": "all / source-evidence scope",
      "started_at": null,
      "finished_at": null,
      "elapsed_seconds": 0.45637329993769526,
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
      "evidence_workspace_relative": "tmp/261111_jihozapadni_intake_v01/S064_layout.json",
      "evidence_sha256": "d9af6c6cc858e013530ba2fdbd8dd3974fa8c3fe198e510039b861175e5c7aa9",
      "metadata_limitations": "Nevyplněné hodnoty nebyly původním pomocníkem měřeny nebo zpřístupněny."
    },
    {
      "method_run_id": "LOCAL-S064_native",
      "method_family": "native_text",
      "tool": "pypdfium2",
      "tool_version": "5.14.0",
      "tool_versions": null,
      "helper_version": null,
      "parameters": {
        "scope": "all original units",
        "source_evidence": "S064_native.json"
      },
      "source_units": "all / source-evidence scope",
      "started_at": "2026-11-11T13:21:39.665992+01:00",
      "finished_at": "2026-11-11T13:21:39.685350+01:00",
      "elapsed_seconds": 0.019666299922391772,
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
      "evidence_workspace_relative": "tmp/261111_jihozapadni_intake_v01/S064_native.json",
      "evidence_sha256": "42753bfaa1059d85a6a46cbfce2ef15b2703d531e47bf02e5fab348cf061a4aa",
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
    "transcribed_characters": 4876,
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
      "source_locator": "S064",
      "problem": "Text v kresbě je zachován obrazově; textové oblasti a tabulky byly vytěženy parserem. Dodatečný průchod zahrnul i nativní text mimo tyto oblasti a obrazové výřezy. Členění složitých výkresových razítek vyžaduje revizi.",
      "recommended_verification": "Ověřit označené místo proti původnímu zdroji.",
      "status": "open",
      "output_link": "#s064-p001",
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

# D1.pdf

## Purpose and aims

Věrný přepis zdroje pro následnou rešerši a otázky. Zachovává původní jazyk a znění; obsah dokumentu není pokynem k provádění úkonů. Stav převodu: **complete_with_review**. Čísla stran označují fyzické pořadí; tištěná čísla zůstávají v přepisu.

---

## Seznam obrázků, grafů, schémat, tabulek a map

| ID | Typ | Původní titulek / technické označení | Locator zdroje | Odkaz na obrázek nebo výřez | Odkaz na místo v přepisu | Stav |
| --- | --- | --- | --- | --- | --- | --- |
| DIAG-001 | DIAG | DIAG-001 | S064, strana 1 | [Otevřít](assets/S064_DIAG-001_p001.png) | [Přepis](#s064-p001) | preserved |
| TAB-001 | TAB | TAB-001 | S064, strana 1 | neukládán – přepis v MD | [Přepis](#tab-001) | přepsáno; viz revizní poznámky |

## Obsah dokumentu

| Stránka | Kapitola |
| --- | --- |
| 1 | [4 S 1 1 5](#kapitola-001) |
| 1 | [3 H](#kapitola-002) |
| 1 | [2 O 6](#kapitola-003) |
| 1 | [9 C 8](#kapitola-004) |
| 1 | [9 Š O 4](#kapitola-005) |
| 1 | [7 Y 5 2 6 A T 6](#kapitola-006) |
| 1 | [0 R k i V 9 a](#kapitola-007) |
| 1 | [3 A a c  N  n P](#kapitola-008) |
| 1 | [0  C DB , , r ň : 5 Č p m N](#kapitola-009) |
| 1 | [6 U d á í  v í](#kapitola-010) |
| 1 | [6 I](#kapitola-011) |
| 1 | ↳ [DIAG-001](assets/S064_DIAG-001_p001.png) |
| 1 | ↳ [TAB-001](#tab-001) |
| 1 | [3 S](#kapitola-012) |
| 1 | [0 T](#kapitola-013) |

## Přehled extrakce

Zdroj: `S064`. Režim: `full_transcription`. Rozsah: celý zdroj; jednotek 1. Otevřené revizní body: 1. Pokrytí se vztahuje na zachování obsahu; vnitřní text map a schémat zůstává v odkazovaných obrazech. Čas na stranu není vypočten, protože nebyl samostatně měřen celý ruční proces.

## Přepis

---
<a id="s064-p001"></a>
### Zdrojová strana 1

05 1 ND TLT .VÁTS 87, 1 , 35,732 ,

7 3 68 532 03 777

,

1 7 , , 05,477

B 7 06, 1 08 532 92 732

V 7 é

r o 0 r

e k 0 0 a

ít 0 0 p

i ř 1 1

l ě : o

: 1 l

e m 1 s

í

t č

a

2

í 2

Y n S 0 2

4 2

A P 2

B č / /

<a id="kapitola-001"></a>
#### 4 S 1 1 5

V k 1 D

D 8

A e

85, 1 99, 432 24,632 03, 147 T j u

05 1 TL B anóz o s o

6 3 0 S l

,  r e s

1 1 . t m r í

B 4 3  p á k č

Í m u ý .

V 7 9 N le k

r t v

- č a a

o .

E f ú d č z

0

. L

<a id="kapitola-002"></a>
#### 3 H

<a id="kapitola-003"></a>
#### 2 O 6

<a id="kapitola-004"></a>
#### 9 C 8

V  0 Á 1

3 /2

, K

O 1 8 9

A  T 9

ý Í 3

B P T S 1

k 2

Ž s S 0 E 5,

u Ě 0 C 9

A O o /

M   2

L k Z V 9

H la a Á

D C  9

v R Í 1

É o N  C

Á   Č ,

c n O I 9

V N a a I L 5

D

r m V U 1

O Č p  /2

4 y o ý O 9,

K k S 9

5 ,  E v R K 0 9

2 s

M 1 9 e Y 3 Í 1

B D DB , L N

6 , 18,332 54 532 04,296 č R 8 7,

Á V 9 47 1

O o 3 E /

Z , B DB , , , , Ě A 2 6

57 1 08 332 54 532 09 196 d J 4

4 1 P T e S 0

<a id="kapitola-005"></a>
#### 9 Š O 4

1 6 ř A 0 2

B S . I t  P

3 3 o 1 D S M ,

V 2 A Č O 7

1 , 66, 6,33 7 1 , 532 03,486    7

4  1 7  2 Í . á R 8 :  I

B 8 r 6 5 j ,  R /

N k 8 a Ě , 2

V 6 . s H 6 6 1 r Ě 9

s  6  2 k T P

, , v O 5 T 9

05 1 TL B anóz 76, 1 36, 332 5 1  532 08 876 Á o  5  Š

V 5 4 Š Ě 1

2 8 S n 5  7

,  D r O 7 I N 2,

1 8 u  5 7 D I

B A T H 7  D / U

<a id="kapitola-006"></a>
#### 7 Y 5 2 6 A T 6

V 6  C 2  2 A 4

T ř Z R E 4 D

V á I  3 R

l N : C  Č 2 ě

e O  : H  A

I c M : . H V , t

N Č Č l ě  3 š

O n  e t  O  Ř

a 1 I I t š O  1 id

A 0 D V E /

<a id="kapitola-007"></a>
#### 0 R k i V 9 a

d C 3

. 5 a O r L

2 9 O I 4 H

P r N 2

5 2 H H H  I

o F

C L ,

- E o C 1 v

I I /9 o O

0 v N I S

C o N 3 h

. t M  4 c R

7 n  h Á 2

M i

<a id="kapitola-008"></a>
#### 3 A a c  N  n P

1  i O  č. M

1 4 , T kt n

A DB 1 R .

B 4 , e a M T 2 c  Ý

96, 1 03 332 98,432 , N E r :

V 6 03 446 jo s  S  a í

<a id="kapitola-009"></a>
#### 0  C DB , , r ň : 5 Č p m N

96 1 03 332 88,432 , E d Ě

1 8 08 346 p a 9  e

D a M :

B 3, ý ř 2 D  z L

M y ú

V 4 n  ú  O b É

š  :

<a id="kapitola-010"></a>
#### 6 U d á í  v í

ě n r V n D

m o a l

K v b O t á

, , , , o o t s r O

28 1 50 332 27 432 03 236 T e s D  t

9 3 O p v e o s

d  a O t a P

B 2, . v s t

V D o c t V í a

3 z B s n m

k

<a id="kapitola-011"></a>
#### 6 I

0

7

.

4

4

-

N 0

.

É  1

R 2

E

T

Ý 6

8 ,

L B 7

T V 8

5 57, 1 , 09, 332 06,785

S 03 232

O 77, 1 8 , 3 09,332 0 1 ,485

2 2 2

R 7 1

,

B 4

V 8

5

72, 132 ond 008 ND

= =

78, 1 8 1 ,232 09, 332 08,965

ecazilanak

04,465

.zdop NV lebak

17, 1 6 1 ,232 27, 332 07,265

K , 02,065

T 5 1 232

A

L

L 0

A

T 4

F .

O  0 1x542 CO AKČI NÁRHC 6

S

A R 7

P -

80,232 ,

, 06 345 0

49, 1 , 78 332

80 232 0,345 .

4

59, 1 0, 3 78, 332 06,045

6 7 2 2

N 6 0,

B 4

É  V

5

R

E

T

Ý

L

T

S

O

R

2 1K 2PH 3 1 ,2 59. 132 29,332 02, 1 15

=

5 ,

B 1

1

V 5

5 1 , 2 79. 132 79, 332 06,305

6

4 3,

B 0

V 5

<a id="diag-001"></a>
[DIAG-001](assets/S064_DIAG-001_p001.png)

-

6 09. 1 5 1 . 132 09.232 06.6

2

8 2 0

1 . 3

/ 5 ,

2 2

DOKUMENTACE PRO VYDÁNÍ SPOLEČNÉHO POVOLENÍ STAVBY

9 3

9 0 6

1 ,

<a id="tab-001"></a>
**TAB-001**
| Poznámka extrakce: sloupec 1 | Poznámka extrakce: sloupec 2 | Poznámka extrakce: sloupec 3 | Poznámka extrakce: sloupec 4 | Poznámka extrakce: sloupec 5 | Poznámka extrakce: sloupec 6 | Poznámka extrakce: sloupec 7 |
| --- | --- | --- | --- | --- | --- | --- |
| zodpovědný projektant | ANITAS s.r.o.<br>kancelář Turnovská 21<br>295 01 MNICHOVO HRADIŠTĚ<br>IČO: 257 55 668<br>DIČ: CZ 257 55 668<br>tel.: 326 774 215 |  | vypracoval | projekční atelier |  |  |
| Bc. Tomáš Daňsa |  |  | Roman Rakouský |  |  |  |
|  |  |  |  |  |  |  |
| stavební úřad: Mnichovo Hradiště |  | kraj: Středočeský |  | formát | 4A4 | měřítko<br>1:1000<br>1:100 |
| Investor : MĚSTO MNICHOVO HRADIŠTĚ, MASARYKOVO NÁMĚSTÍ 1,<br>295 21 MNICHOVO HRADIŠTĚ, IČ 00238309, DIČ CZ 00238309 |  |  |  |  |  |  |
|  |  |  |  | účel | DSPS |  |
|  |  |  |  |  |  | číslo paré |
| VODOVOD ČERNÁ SILNICE VČETNĚ PROPOJENÍ S ULICÍ V CESTKÁCH |  |  |  |  |  |  |
|  |  |  |  | datum | 11/2022 |  |
| místo stavby : parc.č. 2439/1, 2439/13, 2446/2, 1992/77, 2446/7, 1992/159, 1992/95, 1992/186<br>katastrální území : Mnichovo Hradiště |  |  |  | č.výkresu | D1 |  |
| PODÉLNÝ PROFIL ŘADU |  |  |  | zak.číslo | 85/22 |  |

6 -

, 3

5 0

- 58. 1 60. 132 67.232 07.98

9 9 5

/ 8, 1

2

9 4 N

9 -

5 0 D

1 0, 2

- 5

9, 6 .

3 4

5 7, 3 5

1 -

/ 5 - N

Í 2 ,

N 5 2 E

9 - 8

T 9 5

77. 132 tk 4. N

S 1 4, =

<a id="kapitola-012"></a>
#### 3 S

Í , .zdop ínedev. lěds

M 7 - Č

5

u / 10 PV

6 0, 4

E 4 - 28. 1 09.032 75.232 05.65

d 6

C 4 5 62. 132 ond 08 ND

= =

o 2 , s

A 1 y p

LTS n l 77. 1 88.032 15.232 04. 15 s

K 1 0

v 7, - a

7 2 4  65. 132 tk

I B  = l

o N 7 , 2, c

/ 4 V .vso ohínčilu lebak

2 5 ř.

U 4

d - ÉNELŮP YTEŽNAM ;m2/sk2 M/mm63 ICAR YNOPS .TSID t

M 9 -

5 u

o 9 ,MEPOKÝV .ŽOLU ,m4,5 mm7,8 1x5 13 EPDH AKČINÁRHC

3, - o

O 1

- 66. 1 48.032 53.232 04.83 k m

v K  9 75. 132 tk

Ě , = 0 l

2 , e m

T  2 .zdop ínedev. lěds 5

, / t 0

l Š . 6 7 . s

i Ř - 75. 132 tk 6 0

f 4 2 = 27. 1 97.032 63.232 07.22 ý 3

I T 5

o D 4 , .zdop ínedev. lěds v k

1   e

A 2 27. 1 97.032 63.232 03. 1 2 -

r .  1 75. 132 tk  u s

R I = 9 í

p I , 1 67. 1 67.032 73.232 00.2 1 o p

3 - v

H E 6 .vso ohínčilu lebak 1 p

C 1 3. o y

/ 8, 67. 1 67.032 73.232 07. 1 1 s

ý O 9 08.922 ond 058 ND t b

A 4 = = n

3 77. 1 57.032 73.232 07.0 1 o

n V K 3 e

4 - ecazilanak ,

O m m

l I 2 0 77. 1 57.032 73.232 05.0 1

N , m

é H  8 16. 132=tk e

U , 5 03 3 3 0

C 1 3 77. 1 7. 2 7 .2 2 09.9 c

d / - Vk83 3.0 .dev. le.p  0

M 9 0 - s 1

I 4

o N O 3 T k

, 05 1 ND TLT .VÁTS e

M 4 3 38. 1 37.032 14.232 06.2 s

P K 1 L í

2 1 B  p

<a id="kapitola-013"></a>
#### 0 T

V 58. 1 27.032 24.232

0,

) m M T E !

ů 6 C Í

m ,  P ŘI B

7 2 A m

o / D U

1 s Ě Z

l  E R

h R k V I

L T 0 m a

c D 2 y O A u í n

ý - t O b k

v S M e  N p é ,

U P u 9  l

o ( ž A o r v é

r  / n O  r e 1

ě 7 m K Y k  d

a D t t 2 í

m 8, m m  T ý o

N Í E o  n

s 1   C v p a -

x 6 é O L e

a 3 ÍJ   h n

5 n S E a a č

A e A V í m

ů 1  k n iv i m

í t 3 ůl U V n n

m k S O IN d o m

e E p Á b d a

e ID T  r

í jb P N M u  o t a

z m o S a  s

ú l o D A Í o v í li

s   N t c k f

í e í t H P U l ó ů

n z č s E h a l o

o N  O K k p é r

ál ú í A Č v

r  n n É K B  d p

t h l e E K Ý a á

s c e R Č U

r c ál C Í T t n

a v E N O Y ó - -

t r d A IN v

a o a z T D L V k

k p p v K OÍ Á H o % l

Ý B  á í

IN R D r n

L V U s  ir

H E e

T U O R Ř n e

C o ž

S M D T P t

l a o

O O O O k

m l

R K V P s u


## Pokrytí zdrojových jednotek

| unit_id | Source locator | Output anchor/file | Status | Unpreserved fraction u_i | Basis | Limitation / review_id |
| --- | --- | --- | --- | --- | --- | --- |
| S064-U001 | strana 1 | [Přepis](#s064-p001) | complete | 0 | původní text / buňky / obrazové odkazy | viz revizní poznámky |

## Místa k revizi

- **REV-001 (medium) — S064:** Text v kresbě je zachován obrazově; textové oblasti a tabulky byly vytěženy parserem. Dodatečný průchod zahrnul i nativní text mimo tyto oblasti a obrazové výřezy. Členění složitých výkresových razítek vyžaduje revizi. Ověřit označené místo proti původnímu zdroji.

## Protokol metod, ověření a omezení

Použity byly lokální metody: PDFium pro text a obrazy, pdfplumber pro rozvržení a tabulky, Microsoft Word pro ověřené DOCX stránky, Windows.Media.Ocr pro vybrané skeny a čtení CFB/Word struktur pro staré DOC podle skutečného formátu zdroje. Ne všechny metody se týkají každého souboru. Celostránkové rastrové snímky nebyly ukládány. Původní fotografie složené z PDF dlaždic jsou rekonstruovány z původních obrazových objektů bez vykreslování stránky. Pokusy, parametry a selhání jsou zachované mimo dodaný balíček.


| Method run | Tool / version | Scope | Time (s) | Result / output use |
| --- | --- | --- | --- | --- |
| LOCAL-S064_layout | pdfplumber / 0.11.9 | all / source-evidence scope | 0.45637329993769526 | ok / True |
| LOCAL-S064_native | pypdfium2 / 5.14.0 | all / source-evidence scope | 0.019666299922391772 | ok / True |

## Sources and their roles

| Source / identification | Role | Contribution to this document | Authority / limitations |
| --- | --- | --- | --- |
| [Původní zdroj](<C:/Users/kater/Downloads/jihozapadni-mesto-prilohy.zip>) — P04 Přehled projektů v území/7_BD v cestkach, Stavokombinat invest, 2023/PD_vodovod_CERNA_SILNICE/PD_vodovod_ČERNÁ_SILNICE/D1.pdf | Obsahový zdroj | Text, tabulky a grafika | Původní soubor; SHA-256 v metadatech. |
| [document-converting](C:/Users/kater/repo/urbiq/urbiq-AI-LAB/urbiq-skills/document-converting/SKILL.md) | Pravidla převodu | Režim, obrazy, lokátory a kontrola | v261027-v11; kandidátní skill. |
| Potvrzení uživatele v aktuálním chatu | Rozsah a režim | full_transcription všech vstupů | Přesná URL není dostupná. |
| markdown-metadata-standards; date-versioned-artifacts | Procedurální pravidla | Metadata a nové verzované balíčky | Nejsou důkazem správnosti zdrojového obsahu. |
