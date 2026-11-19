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
  "version_id": "DOCONV-261111-S063-v01",
  "status": "complete_with_review",
  "scope": "Úplný přepis uživatelem potvrzeného zdroje",
  "extraction_id": "DOCONV-261111-S063",
  "instructions_version": "v261027-v11",
  "instructions_sha256": "77e2c0270350d79d01f68b9e5a47914e9ef1e8c0c5851430e15ebfc61300328c",
  "extraction_mode": "full_transcription",
  "mode_confirmation": "Uživatel: chci full_transcription; společný vstupní soupis 93 souborů potvrzen.",
  "intake_confirmed_at": null,
  "intake_confirmation_note": "Potvrzení je doloženo zprávou v tomto chatu; přesný čas zprávy není v rozhraní dostupný.",
  "document_title": null,
  "source_filename": "D1 11.4.23.pdf",
  "source_archive_entry": "P04 Přehled projektů v území/7_BD v cestkach, Stavokombinat invest, 2023/PD_vodovod_CERNA_SILNICE/PD_vodovod_ČERNÁ_SILNICE/D1 11.4.23.pdf",
  "source_format": "PDF",
  "source_sha256": "384e8ece52a8888422db15f61c202211728ec1a7619c3d1e427881af926415e3",
  "source_size_bytes": 75328,
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
  "extraction_started_at": "2026-11-11T13:21:39.649939+01:00",
  "extraction_finished_at": "2026-11-11 14:03:11",
  "processing_seconds": null,
  "processing_seconds_per_page": null,
  "page_timing_note": "Strojové pokusy jsou časované v pracovních důkazech; vizuální klasifikace a ruční přepis nebyly měřeny samostatně. Úplný čas na stranu proto není odhadován.",
  "automated_native_seconds": 0.014072800055146217,
  "automated_layout_seconds": 0.2736444999463856,
  "automated_export_seconds": 0.05136249982751906,
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
    "workspace_relative_directory": "05_DELIVERY/document-converting-outputs/261111_jihozapadni-mesto-s063-d1-11-4-23_v01",
    "main_markdown_relative_path": "05_DELIVERY/document-converting-outputs/261111_jihozapadni-mesto-s063-d1-11-4-23_v01/261111_jihozapadni-mesto-s063-d1-11-4-23_extraction_v01.md",
    "sharepoint_url": null,
    "sync_status": "not_verified",
    "limitation": "Ověřeno lokální uložení; synchronizace SharePoint není pozorována."
  },
  "source_name": "D1 11.4.23.pdf",
  "document_type_note": "Přesná typologie není samostatně ověřena; druh zdroje plyne z původního názvu a obsahu.",
  "method_runs": [
    {
      "method_run_id": "LOCAL-S063_layout",
      "method_family": "layout_parser",
      "tool": "pdfplumber",
      "tool_version": "0.11.9",
      "tool_versions": null,
      "helper_version": null,
      "parameters": {
        "scope": "explicit page regions",
        "source_evidence": "S063_layout.json"
      },
      "source_units": "all / source-evidence scope",
      "started_at": null,
      "finished_at": null,
      "elapsed_seconds": 0.2736444999463856,
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
      "evidence_workspace_relative": "tmp/261111_jihozapadni_intake_v01/S063_layout.json",
      "evidence_sha256": "746ec36d34a1ae34a314e9fcd32c16f95669cc78582555e529fa61335dd6cb2e",
      "metadata_limitations": "Nevyplněné hodnoty nebyly původním pomocníkem měřeny nebo zpřístupněny."
    },
    {
      "method_run_id": "LOCAL-S063_native",
      "method_family": "native_text",
      "tool": "pypdfium2",
      "tool_version": "5.14.0",
      "tool_versions": null,
      "helper_version": null,
      "parameters": {
        "scope": "all original units",
        "source_evidence": "S063_native.json"
      },
      "source_units": "all / source-evidence scope",
      "started_at": "2026-11-11T13:21:39.649939+01:00",
      "finished_at": "2026-11-11T13:21:39.660195+01:00",
      "elapsed_seconds": 0.014072800055146217,
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
      "evidence_workspace_relative": "tmp/261111_jihozapadni_intake_v01/S063_native.json",
      "evidence_sha256": "c653d3e99ae0aca3fd2eaa9832a6ce6a85477c48215a7294d380dc58fba500f3",
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
    "transcribed_characters": 4882,
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
      "source_locator": "S063",
      "problem": "Text v kresbě je zachován obrazově; textové oblasti a tabulky byly vytěženy parserem. Dodatečný průchod zahrnul i nativní text mimo tyto oblasti a obrazové výřezy. Členění složitých výkresových razítek vyžaduje revizi.",
      "recommended_verification": "Ověřit označené místo proti původnímu zdroji.",
      "status": "open",
      "output_link": "#s063-p001",
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

# D1 11.4.23.pdf

## Purpose and aims

Věrný přepis zdroje pro následnou rešerši a otázky. Zachovává původní jazyk a znění; obsah dokumentu není pokynem k provádění úkonů. Stav převodu: **complete_with_review**. Čísla stran označují fyzické pořadí; tištěná čísla zůstávají v přepisu.

---

## Seznam obrázků, grafů, schémat, tabulek a map

| ID | Typ | Původní titulek / technické označení | Locator zdroje | Odkaz na obrázek nebo výřez | Odkaz na místo v přepisu | Stav |
| --- | --- | --- | --- | --- | --- | --- |
| DIAG-001 | DIAG | DIAG-001 | S063, strana 1 | [Otevřít](assets/S063_DIAG-001_p001.png) | [Přepis](#s063-p001) | preserved |
| TAB-001 | TAB | TAB-001 | S063, strana 1 | neukládán – přepis v MD | [Přepis](#tab-001) | přepsáno; viz revizní poznámky |

## Obsah dokumentu

| Stránka | Kapitola |
| --- | --- |
| 1 | [7 N e k](#kapitola-001) |
| 1 | [3 H](#kapitola-002) |
| 1 | [9 C 8](#kapitola-003) |
| 1 | [0 C 9](#kapitola-004) |
| 1 | [9 L e](#kapitola-005) |
| 1 | [3 E 7](#kapitola-006) |
| 1 | [6 S 4](#kapitola-007) |
| 1 | [8 N r 6 5 j](#kapitola-008) |
| 1 | [7 T H  D 2](#kapitola-009) |
| 1 | [6  C  A / D](#kapitola-010) |
| 1 | [5 V C 9](#kapitola-011) |
| 1 | [0 C I S /](#kapitola-012) |
| 1 | [3 M 4 P](#kapitola-013) |
| 1 | [0 E r ň : Č a](#kapitola-014) |
| 1 | [6 U d  : b n](#kapitola-015) |
| 1 | [6 I](#kapitola-016) |
| 1 | ↳ [DIAG-001](assets/S063_DIAG-001_p001.png) |
| 1 | ↳ [TAB-001](#tab-001) |
| 1 | [9 N](#kapitola-017) |
| 1 | [0 D](#kapitola-018) |
| 1 | [9 E](#kapitola-019) |
| 1 | [4 V](#kapitola-020) |
| 1 | [0 T](#kapitola-021) |
| 1 | [7 K O r 1 d](#kapitola-022) |

## Přehled extrakce

Zdroj: `S063`. Režim: `full_transcription`. Rozsah: celý zdroj; jednotek 1. Otevřené revizní body: 1. Pokrytí se vztahuje na zachování obsahu; vnitřní text map a schémat zůstává v odkazovaných obrazech. Čas na stranu není vypočten, protože nebyl samostatně měřen celý ruční proces.

## Přepis

---
<a id="s063-p001"></a>
### Zdrojová strana 1

05 1 ND TLT .VÁTS , , 35 ,732 ,

0 28 1 68 532 0 777

7

,

1 7 , 05 ,477

, 08 ,532 92 732

B 7 46 1

V 7 2ZV 3P H é

=

r o 0 r

e k 0 0 a

t 0 0 p

í

i ř 1

ě 1 o

l : :

e m 1 1 l

s

í

t č

a

2

í 2

Y n S 0

4 2

2

č A P 2

B /

S /

4 1 1 5

V k D

D 1 8

e

A

T j

u

o o

3 s

6 7 S l

r e s

, t m

1 1 . á r í

B 4 2  p k č

Í m

V 9 l u ý .

<a id="kapitola-001"></a>
#### 7 N e k

t v

r č a a

- o .

E ú d č z

0 f

. L

<a id="kapitola-002"></a>
#### 3 H

O 6

2

<a id="kapitola-003"></a>
#### 9 C 8

V 0

Á 1

/

, 3 2

A O 1 K

8 9

B Í 3 T 9

P ý T

k 2 S 1

Ž S

s 0 E ,

5

A O u Ě

<a id="kapitola-004"></a>
#### 0 C 9

o /

L M  2

H l k Z

D a V 9

a Á C

v R  9

É

o N  Í 1

Á  C

Č

N c n  ,

V O I 9

a a I

D L 5

O Č r m V

p  U 1

ý /

4 y o O , 2

K E R k 9

5 ,  v S 9

2 s K 0

M 1   9

<a id="kapitola-005"></a>
#### 9 L e

B Y 3 Í

6 č N 1

Á V O R 8

9 o ,

<a id="kapitola-006"></a>
#### 3 E 7

Z , Ě d A

/

4 1 P T 2 J 6

9 e

Š S 4

1 ř 0 O

<a id="kapitola-007"></a>
#### 6 S 4

B . I t A 0

3 3 o 1 D S P 2

V 2 M

, , , , ,  A

1 4 56  1 76  332 7 1  532 03 486 Í  8 Č O ,

B . á R : 7

<a id="kapitola-008"></a>
#### 8 N r 6 5 j

k 8 a I R 7

V H 6 ,

6 . s 6 1 r Ě , /

Á s v  6  2 k Ě P 2

O 5 T 9

o   T

5 5 4  9

2 8 D n V Š Ě

S 5  7 Š

,  r O 7 1

1 8  7 I  U

B Y u 5 D I N

A 7 ,

<a id="kapitola-009"></a>
#### 7 T H  D 2

V 5 2 6 T

<a id="kapitola-010"></a>
#### 6  C  A / D

V ř 2 2 A 6

T á Z E

I  3 R 4

l N : C R ě A

e O  Č 4

I M  : H t

O c Č : . ě H 2 š

N Č le V Ř

n  t    i

I t š  3, d

a 1 ID O O

R A k 0 E a

0 i 1

d V / r L

<a id="kapitola-011"></a>
#### 5 V C 9

. P a H

2 9 O 3

r O I  I

5 2 H N 4 o F

H H

E 2 v

-  L

o C C o O

,

v I 1 h

<a id="kapitola-012"></a>
#### 0 C I S /

o N I 9 c R

. t N

7 n  Á 3 i

A h M n

<a id="kapitola-013"></a>
#### 3 M 4 P

1 a c M

N 2

, T t i

1 4 k n O

B 1 R . :

4 e č  Ý

N a M T 2 í

V 6 E c.

jo s  m

S 5 r N

<a id="kapitola-014"></a>
#### 0 E r ň : Č a

d e

1 8 p a Ě 9 p

z L

B , M  D a D

3 ý M 2 : ú

V ř

4 n  ú O y  É

š  í

<a id="kapitola-015"></a>
#### 6 U d  : b n

á í  V

ě r v l D

m n á

K o O a

v b r

, , , t t O

28  1 50 ,332 27  432 03 236 o o e s t

s D  s

9 3 O p T o

v e a

B  d  O t P

, . a v s t

2 o c

V D t n V í a

3 z B s m

k

<a id="kapitola-016"></a>
#### 6 I

0

7

.

4

4

-

N 0

.

É

1

R 2

E

T

Ý 6

8 ,

L B 7

T V 8

5 , , , 0 , 85

57  1 53 232 09  332 2 7

S

O , , , ,

17  1 43 232 09 332 02 585

R 7 1

B ,

4

V 8

5

72, 132 ond 008 ND

= =

, , 09 , 332 ,

ecazilanak 47  1 13 232 08 965

04,465

.zdop NV lebak

95 , , 27 , 332 0 , 65

1 03 232 7 2

K

, 02,065

T 03 232

A

L

L 0

A

T 4

F ME NOTEB MÝK DÍŘ TAVOZIL I BATS I CAZILANAK

O .

S 6

ÍCAZILANAK UO NEŠUR S U HĚB UOS V

R 7

A

3 ,6x3 ,604 CO AKČ I NÁR HC

P -

6 , 3

MÍNÁTRV MÝNEZÍŘ ONEDEVORP 2 2 2 , 6

06 345

6 , 78 ,332

7  1 , 9

62 232 0 ,345

, , , , ,

6 67  1 62 232 78  332 06 045

1

N 6 ,

0

B 4

É

V 5

R

E

09 ,825

T

ecazilanak ánešurz

Ý

L

T

S

O

R

2 1K 2P H 8 , , 29 ,332 0 , 5

7 1 02  232 2 1 1

=

5 ,

1

B

1

V 5

09 , , 79 , 332 06 ,305

1 22 232

6

4 ,

3

B 0

V 5

<a id="diag-001"></a>
[DIAG-001](assets/S063_DIAG-001_p001.png)

8

3

-

6 09 . 1 5 1 . 1 32 09 .232 06 .6

2

8 m

2

1 .

/ 5

DOKUMENTACE PRO VYDÁNÍ SPOLEČNÉHO POVOLENÍ STAVBY

2 7

9 7

9 7

0

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

1 ,

6 -

, 3

5 0

- 58 . 1 60 . 1 32 67 .232 07 .98

9 9 5

/ ,

2 8 1

4

<a id="kapitola-017"></a>
#### 9 N

-

9 5

<a id="kapitola-018"></a>
#### 0 D

1 ,

0 2

- 5

, 6 .

9 3 4

5 ,

7 3 5

-

1 5

/ - N

Í 2 ,

N 5 2

<a id="kapitola-019"></a>
#### 9 E

-

T 5 8

9

S , 77. 132 tk . N

4 = 4

1

Í  3 S

M , - .zdop í nedev. lěds

7 5 Č

/ ,

6 0 00 1 TL YKJOPÍŘP Í NE JOPEŘP

u 4

E 4 -

5 28 . 1 09 .032 75 .232 05 .65 6

d C 4

, 62. 132 ond 08 ND

1 = =

A 2 s

o  1 y p s

LTS n l 77 . 1 88 .032 15 .232 05 . 1 5

K , - 0

7 7 a

v 2 4  65. 132 tk

I 7 , B  = l

N 4 , c

o / 2 .vso ohí nčil u lebak

<a id="kapitola-020"></a>
#### 4 V

2 5 .

U ř

-

9 5 ÉNELŮP YTEŽNAM ;m2/sk2 M/m m63 ICAR YNOPS .TSI D t

d M -

9 , u

3 ,MEPOKÝV .ŽOLU ,m4,5 m m7 ,8 1x5 1 3 EPD H AKČ I NÁR HC

o O - o

1 -

9 66 . 1 48 .032 53 .232 04.83 k m

Ě K 5 3

v , 7 . 1 2 tk

2 , = 0 l

T 2 e m

/ p 5

7 .zdo  í nedev. lěds

Š , 6 t 0

. - . s

l Ř 4 6 0

2 75. 132 tk ý

i I = 27 . 1 97 .032 63 .232 07 .22 3

f D T 4 , 5

p v k

o 1 .zdo  í nedev. lěds

A  2  e

1 27 . 1 97 .032 63 .232 03 . 1 2 -

.   u s

r R I 1 75. 132 tk í

, = 9 o p

I 3 -

67 . 1 67 .032 73 .232 00 .2 1

p H E 6 1 v p

1 .vso ohí nčil u lebak

, . o y

C / 8 67 . 1 67 .032 73 .232 3

9 07 . 1 1 s

O t b

ý 4 08.922 ond 058 ND n

A 3 = = o

V 3 77 . 1 57 .032 73 .232 07 .0 1

4 e

n K - ,

ecazilanak m m

O 2 0

I 77 . 1 57 .032 73 .232 05 .0 1 m

l N  ,

H 8 16. 132 tk e

é , =

U 3 c 0

1 77 . 1 57 .032 73 .232 09 .9

C 0

/ - p

d M 9 0 Vk83 3.0 .dev. le . s 1

-

I

N 3 4  k

o O T e

, 05 1 ND TLT .VÁTS

4 3 38 . 1 37 .032 14.232 06 s

M 1 .2 L

P K í

2 1 B  p

<a id="kapitola-021"></a>
#### 0 T

V 58 . 1 27 .032 24.232

,

0

) m M T E ! M

ů 6 Í

I C B

m , P Ř E

7 2 A m

/ D U P

o 1 s Ě

Z R

l  k E V O

R I

h   L T K a

c D 2 y O u n 0 m

A O í k

ý - t Ý b

S e  p é ,

v M U N P V 9 l

o ( ž u r  é

/ O A   o

r m n Y e v

<a id="kapitola-022"></a>
#### 7 K O r 1 d

ě a D k

, T t t 2

m 3 m m  N ý o í

N Í E   n

s 2  C E o -

O L v p a

x 6 é Í e

a D  h

0 3 n J E  n

S A a a č

ů 0  e V E í m

A  n i m

í t 4 l U V V k n v i

k S ů I n

m  Á N O d m

e E p O b d o

I  a

e j D T R o r

b P N M u  t

z í o S  a

m o P a v s l

ú D A Í o í i

ls   N k f

e t t c

í í H P U l ó ů o

n z č s E h a l

O K p é

l ú  o N A Č k r

á í v p

n n K B  d

r h É K Ý

t l e E U a á

s c e R Č T

ál C Í t

a r c N O n - -

v r E I Y ó

t d A N v

a o a z D L V k

T K

k p p v Á H o % l

OÍ  á í

Ý I B R D r n

N V s  i

L U H E r e

U O n e

T R C Ř

ž

S M D o t

T P a o

O O O O lk

m l

R K V P s u


## Pokrytí zdrojových jednotek

| unit_id | Source locator | Output anchor/file | Status | Unpreserved fraction u_i | Basis | Limitation / review_id |
| --- | --- | --- | --- | --- | --- | --- |
| S063-U001 | strana 1 | [Přepis](#s063-p001) | complete | 0 | původní text / buňky / obrazové odkazy | viz revizní poznámky |

## Místa k revizi

- **REV-001 (medium) — S063:** Text v kresbě je zachován obrazově; textové oblasti a tabulky byly vytěženy parserem. Dodatečný průchod zahrnul i nativní text mimo tyto oblasti a obrazové výřezy. Členění složitých výkresových razítek vyžaduje revizi. Ověřit označené místo proti původnímu zdroji.

## Protokol metod, ověření a omezení

Použity byly lokální metody: PDFium pro text a obrazy, pdfplumber pro rozvržení a tabulky, Microsoft Word pro ověřené DOCX stránky, Windows.Media.Ocr pro vybrané skeny a čtení CFB/Word struktur pro staré DOC podle skutečného formátu zdroje. Ne všechny metody se týkají každého souboru. Celostránkové rastrové snímky nebyly ukládány. Původní fotografie složené z PDF dlaždic jsou rekonstruovány z původních obrazových objektů bez vykreslování stránky. Pokusy, parametry a selhání jsou zachované mimo dodaný balíček.


| Method run | Tool / version | Scope | Time (s) | Result / output use |
| --- | --- | --- | --- | --- |
| LOCAL-S063_layout | pdfplumber / 0.11.9 | all / source-evidence scope | 0.2736444999463856 | ok / True |
| LOCAL-S063_native | pypdfium2 / 5.14.0 | all / source-evidence scope | 0.014072800055146217 | ok / True |

## Sources and their roles

| Source / identification | Role | Contribution to this document | Authority / limitations |
| --- | --- | --- | --- |
| [Původní zdroj](<C:/Users/kater/Downloads/jihozapadni-mesto-prilohy.zip>) — P04 Přehled projektů v území/7_BD v cestkach, Stavokombinat invest, 2023/PD_vodovod_CERNA_SILNICE/PD_vodovod_ČERNÁ_SILNICE/D1 11.4.23.pdf | Obsahový zdroj | Text, tabulky a grafika | Původní soubor; SHA-256 v metadatech. |
| [document-converting](C:/Users/kater/repo/urbiq/urbiq-AI-LAB/urbiq-skills/document-converting/SKILL.md) | Pravidla převodu | Režim, obrazy, lokátory a kontrola | v261027-v11; kandidátní skill. |
| Potvrzení uživatele v aktuálním chatu | Rozsah a režim | full_transcription všech vstupů | Přesná URL není dostupná. |
| markdown-metadata-standards; date-versioned-artifacts | Procedurální pravidla | Metadata a nové verzované balíčky | Nejsou důkazem správnosti zdrojového obsahu. |
