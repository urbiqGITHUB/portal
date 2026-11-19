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
  "version_id": "DOCONV-261111-S084-v01",
  "status": "partial",
  "scope": "Úplný přepis uživatelem potvrzeného zdroje",
  "extraction_id": "DOCONV-261111-S084",
  "instructions_version": "v261027-v11",
  "instructions_sha256": "77e2c0270350d79d01f68b9e5a47914e9ef1e8c0c5851430e15ebfc61300328c",
  "extraction_mode": "full_transcription",
  "mode_confirmation": "Uživatel: chci full_transcription; společný vstupní soupis 93 souborů potvrzen.",
  "intake_confirmed_at": null,
  "intake_confirmation_note": "Potvrzení je doloženo zprávou v tomto chatu; přesný čas zprávy není v rozhraní dostupný.",
  "document_title": null,
  "source_filename": "SO_05-02-PODROBNÁ SITUACE_R2.pdf",
  "source_archive_entry": "P04 Přehled projektů v území/7_BD v cestkach, Stavokombinat invest, 2023/ZPEVNENE PLOCHY/ZPEVNĚNÉ PLOCHY/SO_05-02-PODROBNÁ SITUACE_R2.pdf",
  "source_format": "PDF",
  "source_sha256": "6ba2a37df7197e8d45d45a0f9b8bc558d17cfc7620ea9f939be6b4edb956f0ae",
  "source_size_bytes": 1237718,
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
  "coverage_unknown_units": 1,
  "unprocessed_pct": null,
  "unprocessed_pct_kind": "interval",
  "unprocessed_pct_min": 0,
  "unprocessed_pct_max": 100,
  "review_open_count": 2,
  "visual_policy": "reference_only_all_content_images_tables_by_mode",
  "excluded_visual_policy": "omit_logos_and_decorations_only",
  "full_page_snapshots": false,
  "package_contents_listing": false,
  "excluded_visuals": [],
  "excluded_visual_count": 0,
  "source_visual_occurrences": 14,
  "saved_visual_count": 2,
  "table_count": 2,
  "extraction_started_at": "2026-11-11T13:21:41.718081+01:00",
  "extraction_finished_at": "2026-11-11 14:03:14",
  "processing_seconds": null,
  "processing_seconds_per_page": null,
  "page_timing_note": "Strojové pokusy jsou časované v pracovních důkazech; vizuální klasifikace a ruční přepis nebyly měřeny samostatně. Úplný čas na stranu proto není odhadován.",
  "automated_native_seconds": 0.3134649000130594,
  "automated_layout_seconds": 14.154650899814442,
  "automated_export_seconds": 0.1969362001400441,
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
    "workspace_relative_directory": "05_DELIVERY/document-converting-outputs/261111_jihozapadni-mesto-s084-so-05-02-podrobna-situace-r2_v01",
    "main_markdown_relative_path": "05_DELIVERY/document-converting-outputs/261111_jihozapadni-mesto-s084-so-05-02-podrobna-situace-r2_v01/261111_jihozapadni-mesto-s084-so-05-02-podrobna-situace-r2_extraction_v01.md",
    "sharepoint_url": null,
    "sync_status": "not_verified",
    "limitation": "Ověřeno lokální uložení; synchronizace SharePoint není pozorována."
  },
  "source_name": "SO_05-02-PODROBNÁ SITUACE_R2.pdf",
  "document_type_note": "Přesná typologie není samostatně ověřena; druh zdroje plyne z původního názvu a obsahu.",
  "method_runs": [
    {
      "method_run_id": "LOCAL-S084_layout",
      "method_family": "layout_parser",
      "tool": "pdfplumber",
      "tool_version": "0.11.9",
      "tool_versions": null,
      "helper_version": null,
      "parameters": {
        "scope": "explicit page regions",
        "source_evidence": "S084_layout.json"
      },
      "source_units": "all / source-evidence scope",
      "started_at": null,
      "finished_at": null,
      "elapsed_seconds": 14.154650899814442,
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
      "evidence_workspace_relative": "tmp/261111_jihozapadni_intake_v01/S084_layout.json",
      "evidence_sha256": "2f6291dc4a8ebba76b6cdb79334b35b62662f11109141834c1755a6ee24f5322",
      "metadata_limitations": "Nevyplněné hodnoty nebyly původním pomocníkem měřeny nebo zpřístupněny."
    },
    {
      "method_run_id": "LOCAL-S084_native",
      "method_family": "native_text",
      "tool": "pypdfium2",
      "tool_version": "5.14.0",
      "tool_versions": null,
      "helper_version": null,
      "parameters": {
        "scope": "all original units",
        "source_evidence": "S084_native.json"
      },
      "source_units": "all / source-evidence scope",
      "started_at": "2026-11-11T13:21:41.718081+01:00",
      "finished_at": "2026-11-11T13:21:42.038018+01:00",
      "elapsed_seconds": 0.3134649000130594,
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
      "evidence_workspace_relative": "tmp/261111_jihozapadni_intake_v01/S084_native.json",
      "evidence_sha256": "6daa2b45bccb5608f9e9370b877e22debc203958859e0103c0765a8088cc0d08",
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
    "transcribed_characters": 5389,
    "transcribed_tables": 2,
    "transcribed_cells": null,
    "expected_cells": null,
    "saved_visuals": 2,
    "missing_visuals": 0,
    "unresolved_visual_classifications": 14,
    "open_review_issues": 2,
    "reference_only_objects": 2,
    "image_only_objects": 2
  },
  "coverage_unit_counts": {
    "complete": 0,
    "partial": 1,
    "not_processed": 0,
    "unknown": 0,
    "excluded_by_policy": 0
  },
  "review_issues": [
    {
      "review_id": "REV-001",
      "priority": "high",
      "source_locator": "strana 1, klasifikace rastrových objektů",
      "problem": "Část obrazových objektů není jednoznačně přiřazena k viditelnému výřezu (možné skryté, oříznuté nebo transformované části). Úplnost obrazové vrstvy zůstává neověřená.",
      "recommended_verification": "Ověřit označené místo proti původnímu zdroji.",
      "status": "open",
      "object_indices": [
        0,
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        8,
        9,
        10,
        11,
        12,
        13
      ],
      "output_link": "#s084-p001",
      "impact": "Unknown coverage or fidelity",
      "object_count": 14
    },
    {
      "review_id": "REV-002",
      "priority": "medium",
      "source_locator": "S084",
      "problem": "Text v kresbě je zachován obrazově; textové oblasti a tabulky byly vytěženy parserem. Dodatečný průchod zahrnul i nativní text mimo tyto oblasti a obrazové výřezy. Členění složitých výkresových razítek vyžaduje revizi.",
      "recommended_verification": "Ověřit označené místo proti původnímu zdroji.",
      "status": "open",
      "output_link": "#s084-p001",
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

# SO_05-02-PODROBNÁ SITUACE_R2.pdf

## Purpose and aims

Věrný přepis zdroje pro následnou rešerši a otázky. Zachovává původní jazyk a znění; obsah dokumentu není pokynem k provádění úkonů. Stav převodu: **partial**. Čísla stran označují fyzické pořadí; tištěná čísla zůstávají v přepisu.

---

## Seznam obrázků, grafů, schémat, tabulek a map

| ID | Typ | Původní titulek / technické označení | Locator zdroje | Odkaz na obrázek nebo výřez | Odkaz na místo v přepisu | Stav |
| --- | --- | --- | --- | --- | --- | --- |
| MAP-001 | MAP | MAP-001 | S084, strana 1 | [Otevřít](assets/S084_MAP-001_p001.png) | [Přepis](#s084-p001) | preserved |
| DIAG-001 | DIAG | DIAG-001 | S084, strana 1 | [Otevřít](assets/S084_DIAG-001_p001.png) | [Přepis](#s084-p001) | preserved |
| TAB-001 | TAB | TAB-001 | S084, strana 1 | neukládán – přepis v MD | [Přepis](#tab-001) | přepsáno; viz revizní poznámky |
| TAB-002 | TAB | TAB-002 | S084, strana 1 | neukládán – přepis v MD | [Přepis](#tab-002) | přepsáno; viz revizní poznámky |

## Obsah dokumentu

| Stránka | Kapitola |
| --- | --- |
| 1 | [8 K T ,](#kapitola-001) |
| 1 | [0 O 6, 0](#kapitola-002) |
| 1 | [3 U  P 4 ,](#kapitola-003) |
| 1 | [3 S N U ,](#kapitola-004) |
| 1 | [0 N A 7](#kapitola-005) |
| 1 | [8 O Ě  E Ý](#kapitola-006) |
| 1 | [4 Á](#kapitola-007) |
| 1 | [3 E](#kapitola-008) |
| 1 | [4. N](#kapitola-009) |
| 1 | [5 O](#kapitola-010) |
| 1 | [0 O T R d](#kapitola-011) |
| 1 | [3 R  ÍD  R](#kapitola-012) |
| 1 | [4 E O](#kapitola-013) |
| 1 | [2 V N r m 3 n á d n I 0](#kapitola-014) |
| 1 | [2  P  L g  K É](#kapitola-015) |
| 1 | [7 R 5 0 e  0 1](#kapitola-016) |
| 1 | [0 N0  5 N  V N  , c](#kapitola-017) |
| 1 | [4 Ú c c  S 0 9 6 0 e](#kapitola-018) |
| 1 | [2 R 7 7 5 p](#kapitola-019) |
| 1 | [4 U ŘV R Ě](#kapitola-020) |
| 1 | [0 S   T ,](#kapitola-021) |
| 1 | [0 K A Ž](#kapitola-022) |
| 1 | ↳ [MAP-001](assets/S084_MAP-001_p001.png) |
| 1 | ↳ [DIAG-001](assets/S084_DIAG-001_p001.png) |
| 1 | ↳ [TAB-001](#tab-001) |
| 1 | ↳ [TAB-002](#tab-002) |

## Přehled extrakce

Zdroj: `S084`. Režim: `full_transcription`. Rozsah: celý zdroj; jednotek 1. Otevřené revizní body: 2. Ztráta není přesně měřitelná; konzervativní interval 0–100 % zpracovávaných jednotek vyjadřuje neověřenou úplnost, nikoli tvrzení o skutečné ztrátě. Čas na stranu není vypočten, protože nebyl samostatně měřen celý ruční proces.

## Přepis

---
<a id="s084-p001"></a>
### Zdrojová strana 1

69.33

20.43

60.43

ci nliS ánreČ . l u

e

9 1 .43

2

3

4 z

. a 70.43

0 t

4 6 r

0 a 60.4

0 3

v

3 80.43 n

ě

n

á +0 60

%

p ,

24 7

l 2

o ,

c 0 3

h ,0 4

a 4.

6

0 3 3

33 33.4

1 69.

1

17.33 90.43

35.43

28.33

54.43

04.33 55.43

74.43

78.23

etsom 23.43

k

43 6

42. 0

4 ,0

4 64.43

0 , 0

3.43 0 s

8 eci nli

,0 0

,0 0 14.43

0

2

0

,0

0 3 24.43

,5

3.43 0 53.43

0

nlis 93.43

eci

3

, 62.43

5

43 0 45.33

52.

94.33

% 1 , 1

3 1 .43

19.33

8 1.43

3 3 3 3 3 3

7 1.4 4 3 4 3

3 3 3 3 4

3 . . . 4 0.

etsom 3 9. 9 9 0 . 2.

k 3 . 2 6 1 0 1 32.43

3 8 1 4 1

33 3 3 8. 8 78.33

10. 3 .

33 3 8 7

52. 3 8. 7

. 8

3 7

3 0

6.

27.33 3 6 p 2j rk

3  , a

elo 5

6. %

3 2

3 3

3 . 97.33

. 6 T

7 6 K

4

3

3 0

3 .

3 9 ,0

8. 5 5

4 5

p j rk K 9

a

elo T 4

3

3 0 R

9. ,0

3 3

3 6 T 2 =

. 7  1

<a id="kapitola-001"></a>
#### 8 K T ,

7 4 03970 0 TK

5  0

7 z 1 0 ,

, 0 00 08

<a id="kapitola-002"></a>
#### 0 O 6, 0

Z 1 1 2

5 , 2

Ú 1 4 0 S U B O K 1 P B

9 6 , 4 T V U 6

8 g D O R E

0 7 2 , m r A E D  +

3 4 S M M O T 2 0

,0 m V D E T O

<a id="kapitola-003"></a>
#### 3 U  P 4 ,

0 , 6 U E  R P N 6 R

<a id="kapitola-004"></a>
#### 3 S N U ,

0 4 m . N A O S O 7 0

LI KI 2 =

0 2. D N D T V %

<a id="kapitola-005"></a>
#### 0 N A 7

<a id="kapitola-006"></a>
#### 8 O Ě  E Ý

ČI N C D K 0

T

P N Í O  , 0

Í  . D R 38480 0 +

Ů Í K P Č

V  A N U 4 1 ,

P O O 0

O Ř S 8 B 0 ,5

M 0 0

D Í N N ,4 8

K U 0

N O  Í 1 %

p t O N D

r Í P I U

H K É

o a L

O A

f C K

d o Y

E

s

z t

a

e

n

m i

c

e

n

P

í

( R

1 v

s

2 e O

v t

x á

s d

2

a v e P

8

k a

, n O

2 o j

í i

x v  T

c V

0 a

í 0

Ř

, c ) N

3 í D 1

E

g  ,

m  d O

B 1

a

o

l U Č

e

r 3

A

i 5 S

e

S 3

T 4 3

4

k 3. .

A N 8 5

V  6

3

<a id="kapitola-007"></a>
#### 4 Á

. V

4

9

<a id="kapitola-008"></a>
#### 3 E

K

4

<a id="kapitola-009"></a>
#### 4. N

<a id="kapitola-010"></a>
#### 5 O

I

Š M

T

U

Ě

N

00,3

- I

K

V

A

Ýp

ř C

Se

E

Tl

o

A

ž

Vk

a

B

AN

N 00,02

4

a

BV

DN +

4 1

0 , R

5

,4 8 =

1 % 1

5

0

4252 1 ,0

+ 0

6 0

6 ,

, 0

8

,2 0 0

0 %

3

3 4

4 6.

5. 3

3 2

4

3 . R

4 5

. 2 T

5

8 =

2

3

R 4

T ,

5

=

2

3

4

, U

6

V

0

1

, 5, p

00 4 1 Ú 3

0 06657 K 0 06657 R

,  , V - - D r

- Z  D o

U 5 h R

v v Š A R E

% V 0 ř ÚE N d

9 ý ši d ý S N Á

0 0  2 ě T 2

8 4 m t ÁŽ l v

0 8 3 š ě t š ĚŽN , o

2, , s N N 00 04 o

, 0  Í

1 6 m 5 k k k D Í T u

<a id="kapitola-011"></a>
#### 0 O T R d

- , é R A %5,2 ž

R 4 a a U U T o

1 0 L B IV e v

ČI K O

n ± n ± N A n o

D

<a id="kapitola-012"></a>
#### 3 R  ÍD  R

R 3 1 a 0 1 a 0 V N D 3 í d

P  L ,

U 1 . 5 ř n

. d , B . d , B S 5 3

0 0 0 8 a í

60 00 N N T  M

I d ř

, t 0 t 0 U a

D D 5- V

P e P e 0 u

0 0 0 d

1

r   r   2 a

5, é é m L

0R 2 a = a = 3 5,

2 0  T

1 n n m 5 R z

,8 ž  ž

2 2 , a

5 e C  e A 4  D

5 3 5 3 0 1 s

m m N

R l

5 5 e 1

1 2 . .

N  N  p

, , 0

,6 c 4 c 4

2 e 0

6  0 P c  P c

5 5  n

a a

í

60,6 05 , 1 00 ,6  05,4 00, 2

HH

1 1

7 7 UU

PP

m  m

- - D p

Z  D R

A R E

ÚE N r

S N Á o 3

T ÁŽ p

d 4

ĚŽN .

N N Í 2 yl 9

1O 3 1E   T l 6

- D Í o

O T R ,6 3 n

R A 4 V

U U T 0 u o

L B I 9.

ÉVRESÉR V žŘ v

ČI K O 9

P N A D  o

2 1PI  e

ÍD  D 00,06 0

V N n d

P  L

U 1 . 1n

S 5 3 í

0 2

T  M ř  í n

I 3 ř

U 5 , , , a o

V %0 2 %5 2 %0,2 %0 2  a

0 0. d v k

8 37 ,5 1 7 d

á a

, , , u

00 5  08 4  05 0 S n

p

a T a

40 00

6 , 3  r l

7 z L o

5 zi

.

1 x a P

5 o a

s

p p E d c

l  Z R K M

r o e v e k

o D Á O O O

5- p a

d o  S Z M

d 2 N d Ž

0 e n T Š

U e 3 é d A U N

V j  2 9 e Í É

m n a V Ř N

n 5 3 l n

0 y , n 0 š B E KI B

7  d m 5 í ě l Y N

4 ť i A U

, é z . Í  D

5 n o  C

o 4  a O

<a id="kapitola-013"></a>
#### 4 E O

0 p í v B

R  c Y P U

v R ,0 a k á C

5 e T R

h 1 o Í

, ý r  s N O

%0 2 %5,2 %0,2  U  N

r m k m P t É

š V s A

o á p

0 o C 1 P V P

k í u v O

m s 2 v  M ,0 Ř

V C a l J

y t   E n j a

á O M E

a n L  N

- - D D  . I i í š

n í n V Vk D c Í

Z D R 9   k

Ě A R E 4 d K ÝaN í

Ú a k í Á

E N 7  R Š N o

S N Á 1 n o u Yc

T ÁŽ K O v

Ě 0 d TeA 2

T ŽN é m  B

N N Í 0, k U  á

Í T  O 5R

D  T R K t

O v v u o K B U

R A T e g O 0 K

E U U T c R B

ý ý n m M A

L B IV r a h U

ČI K  T

A O é š š i U B V

N D o k u Y

V Í D m r N

D k k a  D D

<a id="kapitola-014"></a>
#### 2 V N r m 3 n á d n I 0

<a id="kapitola-015"></a>
#### 2  P  L g  K É

U 1 . m 2 7 a a c A ,

5 1 6 e ž n i , 0 L N

S 0 5 0 6 6 4, e k 00 08 C C

T  ,   v

1R M 0 2 5 0 e ± ± í

I , m n n k  a E E 3 y

C U 0 0, 2 3

V 9   0 0 0 5

,6 1 a 1 a c u

0  1 .

<a id="kapitola-016"></a>
#### 7 R 5 0 e  0 1

O KTc0 02222 d , B d , 3 ž6

1 - . . B

=  , . 1 N 0 N 0 HH 5 i

z c N . t

0   - - D 2 5- a

R5 T t 0 t 0   3

a 0 - UU Z D R

P P e D 1 P e D A R E 0

m 0 0 0 ÚE N n k

r r PP  S N Á 0 o

4 2   0   T ÁŽ s a

5 m a é = a é = ĚŽN v t

R  3  N N Í á n

m   T ě

4 m  5 ž n  ž n  D Í

R g 2 3 O T R v a

, 2  2  R A j

3 e D m 3 e 5 B  T a

a   . U U a j l

5 0 3 5 33 L B IV i

5 m 5 m 3 I K z

r 0 g Č O k í

á 0 , N A D c

0 . 0 5 3 . 5  o a

0 ž a Í D  D í

<a id="kapitola-017"></a>
#### 0 N0  5 N  V N  , c

2 c , c , P  L d

, 0, 4 r 4 2P U 1 .

á V 5 4 + n e

<a id="kapitola-018"></a>
#### 4 Ú c c  S 0 9 6 0 e

P 3 P  T  e

, Z 5 5 ž 5 Š  I M 6 , š

0 a . a U 8 R s

4 ,2 ť n p

0 0 V 0

0 0o% í=

00,6 2

1 1 v v3 l

a

- á  0

<a id="kapitola-019"></a>
#### 2 R 7 7 5 p

1 44 19 1 ,0 + 0 š

5,   0

k 8r2 , k

% m  m   2 o 0

m a 9 ,5 o

3 v 0

n ,4 0 v

m 5 o 4 %

00,6 , a á

4 z

l

1 0 zi u

, B

5 3 a

0 % E

M 7 0 c

- - -  -  KI  5 0 e

R 0 0 D

O S 7 , 0

Z 1 1 S Š R0 0 N

A Č V V T T

T P ĚĚ O Ú 0,

ÍSI R V 4

ŽT U T P K

E S L B Ú 0

N CÍŤÁI P 0

N Z

Í ÍO ŠO 6

D K V Í R 0

<a id="kapitola-020"></a>
#### 4 U ŘV R Ě

ÝK Ý T

<a id="kapitola-021"></a>
#### 0 S   T ,

<a id="kapitola-022"></a>
#### 0 K A Ž

U 9 L = 2

S A 2 = s

0 2 T

M B 3 t

6P POTS  3

M D 5 á

L , 5

)  . 5 , v

p 6 6 5 E

í ne elsaz a uda p( ,0 R a

ř í nežuoldor  y R j

M 2 6 7

<a id="map-001"></a>
[MAP-001](assets/S084_MAP-001_p001.png)

)

ecaki n u

<a id="diag-001"></a>
[DIAG-001](assets/S084_DIAG-001_p001.png)

VODOROVNÉ DOPRAVNÍ ZNAČENÍ

NAVRŽENÉ ULIČNÍ VPUSTI S PŘÍPOJKAMI

UV 01

2

7

SOUŘADNICOVÝ SYSTÉM: S-JTSK

VÝŠKOVÝ SYSTÉM: BpV

!!!PŘED ZAPOČETÍM STAVEBNÍCH PRACÍ SI MUSÍ ZHOTOVITEL NECHAT VYTYČIT EXISTUJÍCÍ INŽENÝRSKÉ S

SPOLEČNÁ DOKUMENTACE PRO VYDÁNÍ SPOLEČNÉHO POVOLEN

<a id="tab-001"></a>
**TAB-001**
| Poznámka extrakce: sloupec 1 | Poznámka extrakce: sloupec 2 |
| --- | --- |
| ti PD CR Project s.r.o. zodpověd<br>Pod Borkem 319<br>Ing. Jan Ho<br>293 01 Mladá Boleslav<br>IČ: 270 86 135<br>tel.:+420 326 700 666 dokument<br>fax.: +420 326 700 665<br>info@crproject.cz Miroslav | ný projektant:<br>rák |
|  | aci vypracoval:<br>LOUPÝ |

Projektant čás

<a id="tab-002"></a>
**TAB-002**
| Poznámka extrakce: sloupec 1 | Poznámka extrakce: sloupec 2 | Poznámka extrakce: sloupec 3 | Poznámka extrakce: sloupec 4 |
| --- | --- | --- | --- |
| SO 05 -<br>PODRO<br>4 BYTO<br>eekkččnníí aatteelliieerr<br>MNICHO<br>MÍSTO ST | Zpevněné plochy<br>BNÁ SITUACE |  |  |
|  | VÉ DOMY V ULICI V CESTKÁCH<br>VO HRADIŠTĚ<br>AVBY: |  |  |
| s .r.o. Turnovská 21<br>68 295 01 Mnichovo Hradiště ul. V Cestkách,<br>55 668 tel./fax.: 326 774 215 STAVEBN | Mnichovo Hradiště<br>Í ÚŘAD: Mnichovo Hradišt | MĚŘÍTK | O 1:250 ZAK.ČÍS<br>120/2<br>12XA4<br>(2022-0 |
|  |  | FORMÁT<br>ě |  |
| projektant: KRAJ: Stř<br>RAKOUSKÝ INVESTOR<br>STAVOKOM<br>i vypracoval: Vesecká 97/<br>OUPÝ 460 06 Liber | edočeský<br>:<br>BINÁT INVEST s.r.o.<br>12<br>ec VI - Rochlice | ÚČEL<br>DATUM | DUSP<br>ČÍSLO P<br>II/22<br>02 |
|  |  | ČÁST<br>Č.VÝKR. |  |

pprroojj

ANITAS LO

IČO: 257 55 6 1

DIČ: CZ 257 05)

zodpovědný

ARÉ

Ing.Tomáš

dokumentac

Miroslav L

S

Í ÍT

Ě

!

!

!


## Pokrytí zdrojových jednotek

| unit_id | Source locator | Output anchor/file | Status | Unpreserved fraction u_i | Basis | Limitation / review_id |
| --- | --- | --- | --- | --- | --- | --- |
| S084-U001 | strana 1 | [Přepis](#s084-p001) | partial | neznámý | původní text / buňky / obrazové odkazy | viz revizní poznámky |

## Místa k revizi

- **REV-001 (high) — strana 1, klasifikace rastrových objektů:** Část obrazových objektů není jednoznačně přiřazena k viditelnému výřezu (možné skryté, oříznuté nebo transformované části). Úplnost obrazové vrstvy zůstává neověřená. Ověřit označené místo proti původnímu zdroji.

- **REV-002 (medium) — S084:** Text v kresbě je zachován obrazově; textové oblasti a tabulky byly vytěženy parserem. Dodatečný průchod zahrnul i nativní text mimo tyto oblasti a obrazové výřezy. Členění složitých výkresových razítek vyžaduje revizi. Ověřit označené místo proti původnímu zdroji.

## Protokol metod, ověření a omezení

Použity byly lokální metody: PDFium pro text a obrazy, pdfplumber pro rozvržení a tabulky, Microsoft Word pro ověřené DOCX stránky, Windows.Media.Ocr pro vybrané skeny a čtení CFB/Word struktur pro staré DOC podle skutečného formátu zdroje. Ne všechny metody se týkají každého souboru. Celostránkové rastrové snímky nebyly ukládány. Původní fotografie složené z PDF dlaždic jsou rekonstruovány z původních obrazových objektů bez vykreslování stránky. Pokusy, parametry a selhání jsou zachované mimo dodaný balíček.


| Method run | Tool / version | Scope | Time (s) | Result / output use |
| --- | --- | --- | --- | --- |
| LOCAL-S084_layout | pdfplumber / 0.11.9 | all / source-evidence scope | 14.154650899814442 | ok / True |
| LOCAL-S084_native | pypdfium2 / 5.14.0 | all / source-evidence scope | 0.3134649000130594 | ok / True |

## Sources and their roles

| Source / identification | Role | Contribution to this document | Authority / limitations |
| --- | --- | --- | --- |
| [Původní zdroj](<C:/Users/kater/Downloads/jihozapadni-mesto-prilohy.zip>) — P04 Přehled projektů v území/7_BD v cestkach, Stavokombinat invest, 2023/ZPEVNENE PLOCHY/ZPEVNĚNÉ PLOCHY/SO_05-02-PODROBNÁ SITUACE_R2.pdf | Obsahový zdroj | Text, tabulky a grafika | Původní soubor; SHA-256 v metadatech. |
| [document-converting](C:/Users/kater/repo/urbiq/urbiq-AI-LAB/urbiq-skills/document-converting/SKILL.md) | Pravidla převodu | Režim, obrazy, lokátory a kontrola | v261027-v11; kandidátní skill. |
| Potvrzení uživatele v aktuálním chatu | Rozsah a režim | full_transcription všech vstupů | Přesná URL není dostupná. |
| markdown-metadata-standards; date-versioned-artifacts | Procedurální pravidla | Metadata a nové verzované balíčky | Nejsou důkazem správnosti zdrojového obsahu. |
