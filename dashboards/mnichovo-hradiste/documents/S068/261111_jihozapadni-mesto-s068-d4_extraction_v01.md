---
{
  "created_at": "2026-11-11 14:03:12",
  "created_date": "2026-11-11",
  "created_by": "Codex – Kateřina Kováříková",
  "updated_at": "2026-11-11 14:03:12",
  "updated_by": "Codex",
  "revised_by": null,
  "timezone": "Europe/Prague",
  "codex_dialogue": null,
  "dialogue_location_note": "Aktuální lokální chat Codex; přesná URL nebyla zpřístupněna.",
  "dialogue_iteration": 2,
  "version_id": "DOCONV-261111-S068-v01",
  "status": "partial",
  "scope": "Úplný přepis uživatelem potvrzeného zdroje",
  "extraction_id": "DOCONV-261111-S068",
  "instructions_version": "v261027-v11",
  "instructions_sha256": "77e2c0270350d79d01f68b9e5a47914e9ef1e8c0c5851430e15ebfc61300328c",
  "extraction_mode": "full_transcription",
  "mode_confirmation": "Uživatel: chci full_transcription; společný vstupní soupis 93 souborů potvrzen.",
  "intake_confirmed_at": null,
  "intake_confirmation_note": "Potvrzení je doloženo zprávou v tomto chatu; přesný čas zprávy není v rozhraní dostupný.",
  "document_title": null,
  "source_filename": "D4.pdf",
  "source_archive_entry": "P04 Přehled projektů v území/7_BD v cestkach, Stavokombinat invest, 2023/PD_vodovod_CERNA_SILNICE/PD_vodovod_ČERNÁ_SILNICE/D4.pdf",
  "source_format": "PDF",
  "source_sha256": "50d6cd4fb4bbb37723a275483d4bbaccc18b19753cf658943877fc23317a0bc6",
  "source_size_bytes": 204401,
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
  "review_open_count": 3,
  "visual_policy": "reference_only_all_content_images_tables_by_mode",
  "excluded_visual_policy": "omit_logos_and_decorations_only",
  "full_page_snapshots": false,
  "package_contents_listing": false,
  "excluded_visuals": [],
  "excluded_visual_count": 0,
  "source_visual_occurrences": 1,
  "saved_visual_count": 1,
  "table_count": 3,
  "extraction_started_at": "2026-11-11T13:21:39.882146+01:00",
  "extraction_finished_at": "2026-11-11 14:03:12",
  "processing_seconds": null,
  "processing_seconds_per_page": null,
  "page_timing_note": "Strojové pokusy jsou časované v pracovních důkazech; vizuální klasifikace a ruční přepis nebyly měřeny samostatně. Úplný čas na stranu proto není odhadován.",
  "automated_native_seconds": 0.0657391999848187,
  "automated_layout_seconds": 1.420782599831,
  "automated_export_seconds": 0.04526470019482076,
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
    "workspace_relative_directory": "05_DELIVERY/document-converting-outputs/261111_jihozapadni-mesto-s068-d4_v01",
    "main_markdown_relative_path": "05_DELIVERY/document-converting-outputs/261111_jihozapadni-mesto-s068-d4_v01/261111_jihozapadni-mesto-s068-d4_extraction_v01.md",
    "sharepoint_url": null,
    "sync_status": "not_verified",
    "limitation": "Ověřeno lokální uložení; synchronizace SharePoint není pozorována."
  },
  "source_name": "D4.pdf",
  "document_type_note": "Přesná typologie není samostatně ověřena; druh zdroje plyne z původního názvu a obsahu.",
  "method_runs": [
    {
      "method_run_id": "LOCAL-S068_layout",
      "method_family": "layout_parser",
      "tool": "pdfplumber",
      "tool_version": "0.11.9",
      "tool_versions": null,
      "helper_version": null,
      "parameters": {
        "scope": "explicit page regions",
        "source_evidence": "S068_layout.json"
      },
      "source_units": "all / source-evidence scope",
      "started_at": null,
      "finished_at": null,
      "elapsed_seconds": 1.420782599831,
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
      "evidence_workspace_relative": "tmp/261111_jihozapadni_intake_v01/S068_layout.json",
      "evidence_sha256": "b29c7a7c85894de743e301ab6ff2cf2b5bb34a38e5084e4ccc4621991985d471",
      "metadata_limitations": "Nevyplněné hodnoty nebyly původním pomocníkem měřeny nebo zpřístupněny."
    },
    {
      "method_run_id": "LOCAL-S068_native",
      "method_family": "native_text",
      "tool": "pypdfium2",
      "tool_version": "5.14.0",
      "tool_versions": null,
      "helper_version": null,
      "parameters": {
        "scope": "all original units",
        "source_evidence": "S068_native.json"
      },
      "source_units": "all / source-evidence scope",
      "started_at": "2026-11-11T13:21:39.882146+01:00",
      "finished_at": "2026-11-11T13:21:39.948081+01:00",
      "elapsed_seconds": 0.0657391999848187,
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
      "evidence_workspace_relative": "tmp/261111_jihozapadni_intake_v01/S068_native.json",
      "evidence_sha256": "567de9c7cfddf80575d60d288e4a704f575cf647aac4c8fab67633cde536b093",
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
    "table_count": 3,
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
    "transcribed_characters": 3027,
    "transcribed_tables": 3,
    "transcribed_cells": null,
    "expected_cells": null,
    "saved_visuals": 1,
    "missing_visuals": 0,
    "unresolved_visual_classifications": 1,
    "open_review_issues": 3,
    "reference_only_objects": 1,
    "image_only_objects": 1
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
        0
      ],
      "output_link": "#s068-p001",
      "impact": "Unknown coverage or fidelity",
      "object_count": 1
    },
    {
      "review_id": "REV-002",
      "priority": "medium",
      "source_locator": "S068",
      "problem": "Ověřit členění víceřádkových tabulek a jejich vazbu na grafický podklad; strojová extrakce byla porovnána s náhledem.",
      "recommended_verification": "Ověřit označené místo proti původnímu zdroji.",
      "status": "open",
      "output_link": "#s068-p001",
      "impact": "Review of structure or presentation"
    },
    {
      "review_id": "REV-003",
      "priority": "medium",
      "source_locator": "S068",
      "problem": "Text v kresbě je zachován obrazově; textové oblasti a tabulky byly vytěženy parserem. Dodatečný průchod zahrnul i nativní text mimo tyto oblasti a obrazové výřezy. Členění složitých výkresových razítek vyžaduje revizi.",
      "recommended_verification": "Ověřit označené místo proti původnímu zdroji.",
      "status": "open",
      "output_link": "#s068-p001",
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

# D4.pdf

## Purpose and aims

Věrný přepis zdroje pro následnou rešerši a otázky. Zachovává původní jazyk a znění; obsah dokumentu není pokynem k provádění úkonů. Stav převodu: **partial**. Čísla stran označují fyzické pořadí; tištěná čísla zůstávají v přepisu.

---

## Seznam obrázků, grafů, schémat, tabulek a map

| ID | Typ | Původní titulek / technické označení | Locator zdroje | Odkaz na obrázek nebo výřez | Odkaz na místo v přepisu | Stav |
| --- | --- | --- | --- | --- | --- | --- |
| DIAG-001 | DIAG | DIAG-001 | S068, strana 1 | [Otevřít](assets/S068_DIAG-001_p001.png) | [Přepis](#s068-p001) | preserved |
| TAB-001 | TAB | TAB-001 | S068, strana 1 | neukládán – přepis v MD | [Přepis](#tab-001) | přepsáno; viz revizní poznámky |
| TAB-002 | TAB | TAB-002 | S068, strana 1 | neukládán – přepis v MD | [Přepis](#tab-002) | přepsáno; viz revizní poznámky |
| TAB-003 | TAB | TAB-003 | S068, strana 1 | neukládán – přepis v MD | [Přepis](#tab-003) | přepsáno; viz revizní poznámky |

## Obsah dokumentu

| Stránka | Kapitola |
| --- | --- |
| 1 | [4 S](#kapitola-001) |
| 1 | [2 S 1 4 5](#kapitola-002) |
| 1 | [0  U B  5](#kapitola-003) |
| 1 | ↳ [DIAG-001](assets/S068_DIAG-001_p001.png) |
| 1 | [0 E](#kapitola-004) |
| 1 | [0  P](#kapitola-005) |
| 1 | [1. TABULKA ROZMĚRŮ [mm] ČSN EN 805](#kapitola-006) |
| 1 | ↳ [TAB-001](#tab-001) |
| 1 | [2. TABULKA KUBATUR NA 1bm RÝHY](#kapitola-007) |
| 1 | ↳ [TAB-002](#tab-002) |
| 1 | ↳ [TAB-003](#tab-003) |
| 1 | [4 U R 5 R](#kapitola-008) |

## Přehled extrakce

Zdroj: `S068`. Režim: `full_transcription`. Rozsah: celý zdroj; jednotek 1. Otevřené revizní body: 3. Ztráta není přesně měřitelná; konzervativní interval 0–100 % zpracovávaných jednotek vyjadřuje neověřenou úplnost, nikoli tvrzení o skutečné ztrátě. Čas na stranu není vypočten, protože nebyl samostatně měřen celý ruční proces.

## Přepis

---
<a id="s068-p001"></a>
### Zdrojová strana 1

r é

o r

e k  0 a

t 2 p

í

i ř :

l ě 1 o

e m l

s

t í

č

a

2

í 2

Y n 0 2

<a id="kapitola-001"></a>
#### 4 S

Y 2

č A P 2

H B / /

<a id="kapitola-002"></a>
#### 2 S 1 4 5

Ý V k D

D 1 8

R

e

A

E

T j

C o u

2 s o

m Ř S l

r e s

Í t m r í

Š  á č

" m Í p k

d  m l u ý .

N e t k

o É r v

4 č a a

v  L o .

x E ú d č z

u E f

o

2 o

d C L

k

o u  H

l V O 6

v z e C

8

v " e t m V

s Í Á 1

a m ř N /

r ů ý m K 2

Ě O 9

p m r v  .

p 4 N U ý T 9

ú m  P

u - T O k S 1

h 0 o m

o 0 s E ,

<a id="kapitola-003"></a>
#### 0  U B  5

c Y v  O u 9

3  k H  C 9

ý 4 U o , 0

K o e 1 /

v -  O k 3  2

. Y t s . H l  V

o š 0 n m a a Í 9

í R T 8

h  C  v R  9

- k e p É 3 Í

c  m T o  S 1 Z

e m  2 C

r á č í  N c n Ě ,

s b  a 0 9 E

v l i 0 D a I

í d í e M 0 L 5

o b u 5 A r m Ř

o p c Č p  1

p  r Á Z U

e v   t 1 N y o ý /

í s o  C  2 -

b . E v R k N 9

e i í  p x  S

y ól u m s   9 E

c n 0 4  a O Č

h f r L e

k č 5 d m m Í 1 Z

ý  t 6 č V I N

u á a o o O D ,

r 1    o 7 Ý

r  n k p S p H 0 Ě O E /

t  d

p ž i  N  0 P T K , 6 R

s f S C e 9 J

y p e 3 Š 4

í n a it D Á ř Y 0 O 4

s y A ž S . t V

o r n . 1 ID R 3 2

b á t s  o V N o S P

k s e T L 2 8

z b l T I  A  A ,

ý C Í .  8 : 3 O 7 Í

d o L M r á R B

u v S N k 8 6 5 ja S 7

i  6 2 R

R . H 6 r /

<a id="diag-001"></a>
[DIAG-001](assets/S068_DIAG-001_p001.png)

r M

V

t É

o O N

<a id="kapitola-004"></a>
#### 0 E

P

p 2  D

Ý

E

: N

V

í  Ě

O

n 1 N

R

T

e M P

U

ž H U

<a id="kapitola-005"></a>
#### 0  P

H

o Y

C

S

Í

l C B

<a id="kapitola-006"></a>
#### 1. TABULKA ROZMĚRŮ [mm] ČSN EN 805

u A

O

K

O

<a id="tab-001"></a>
**TAB-001**
| Poznámka extrakce: sloupec 1 | Poznámka extrakce: sloupec 2 | Poznámka extrakce: sloupec 3 | Poznámka extrakce: sloupec 4 | Poznámka extrakce: sloupec 5 | Poznámka extrakce: sloupec 6 | Poznámka extrakce: sloupec 7 | Poznámka extrakce: sloupec 8 |
| --- | --- | --- | --- | --- | --- | --- | --- |
| ABUORT | JMENOVITÁ SVĚTLOST | DN | 25÷36 | 50 | 80 | 100 | 150 |
|  | VNĚJŠÍ PRŮMĚR | D | 32÷50 | 63 | 98 | 118 | 170 |
|  | TLOUŠTKA STĚNY | t<br>s | 13 | 13 | 9 | 9 | 10 |
|  | DÉLKA | l | - | - | 6000 | 6000 | 6000 |
| ŠÍŘKA RÝHY |  | B | 800 | 800 | 800 | 900 | 900 |
| PÍSKOVÉ LOŽE FR. 0/4 |  | L | 150 | 150 | 150 | 150 | 150 |

I

N P

U

Ž

M

A

O

T

K

Ě

V D

Á

P

Y V

S O

Á R

Z P

<a id="kapitola-007"></a>
#### 2. TABULKA KUBATUR NA 1bm RÝHY

<a id="tab-002"></a>
**TAB-002**
| Poznámka extrakce: sloupec 1 | Poznámka extrakce: sloupec 2 | Poznámka extrakce: sloupec 3 | Poznámka extrakce: sloupec 4 | Poznámka extrakce: sloupec 5 | Poznámka extrakce: sloupec 6 | Poznámka extrakce: sloupec 7 |
| --- | --- | --- | --- | --- | --- | --- |
| VNĚJŠÍ PRŮMĚR TRUBKY | D | 32÷50 | 63 | 98 | 118 | 170 |
| VYTLAČENÁ KUBATURA TROUBY | m3 | 0,002 | 0,003 | 0,008 | 0,011 | 0,023 |
| KUBATURA PÍSKOVÉHO LOŽE | m3 | 0,120 | 0,120 | 0,120 | 0,135 | 0,135 |
| KUBATURA OBSYPU 250 mm | m3 | 0,238 | 0,248 | 0,271 | 0,321 | 0,378 |
| VYTLAČENÁ KUBATURA CELKEM | m3 | 0,360 | 0,371 | 0,399 | 0,467 | 0,536 |

3 0 8 1

0 0 0  2  4  7

0 3 3 -  5  3

5  6   0 6 0 2 3

1 8 1

1  0, 0, 0, 0,

6 0 0 2 0 8 0

3 5  0 0 5 0  2  3  6

3 -  5

÷ ÷  0 ÷ 0 2 3

5 2 1  8 2 1

1 0, 0, 0, 0,

2 3 3

ZÁSYP V KOMUNIKACÍCH HUTNĚNÝ PO VRSTVÁCH max. 150 mm. HUTNĚNÍ V CELÉ ŠÍŘCE RÝHY

N s 3m 3m 3m 3m

D D t l B L D

PROVÁDĚT AŽ PO OBSYPU PROVEDENÉM MIN.300 mm NAD TROUBOU.

DOKUMENTACE PRO VYDÁNÍ SPOLEČNÉHO POVOLENÍ STAVBY

5

0

8

Y

N

<a id="tab-003"></a>
**TAB-003**
| Poznámka extrakce: sloupec 1 | Poznámka extrakce: sloupec 2 | Poznámka extrakce: sloupec 3 | Poznámka extrakce: sloupec 4 | Poznámka extrakce: sloupec 5 | Poznámka extrakce: sloupec 6 | Poznámka extrakce: sloupec 7 |
| --- | --- | --- | --- | --- | --- | --- |
| zodpovědný projektant | ANITAS s.r.o.<br>kancelář Turnovská 21<br>295 01 MNICHOVO HRADIŠTĚ<br>IČO: 257 55 668<br>DIČ: CZ 257 55 668<br>tel.: 326 774 215 |  | vypracoval | projekční atelier |  |  |
| Bc. Tomáš Daňsa |  |  | Roman Rakouský |  |  |  |
|  |  |  |  |  |  |  |
| stavební úřad: Mnichovo Hradiště |  | kraj: Středočeský |  | formát | 2A4 | měřítko<br>1:20 |
| Investor : MĚSTO MNICHOVO HRADIŠTĚ, MASARYKOVO NÁMĚSTÍ 1,<br>295 21 MNICHOVO HRADIŠTĚ, IČ 00238309, DIČ CZ 00238309 |  |  |  |  |  |  |
|  |  |  |  | účel | DSPS |  |
|  |  |  |  |  |  | číslo paré |
| VODOVOD ČERNÁ SILNICE VČETNĚ PROPOJENÍ S ULICÍ V CESTKÁCH |  |  |  |  |  |  |
|  |  |  |  | datum | 11/2022 |  |
| místo stavby : parc.č. 2439/1, 2439/13, 2446/2, 1992/77, 2446/7, 1992/159, 1992/95, 1992/186<br>katastrální území : Mnichovo Hradiště |  |  |  | č.výkresu | D4 |  |
| ULOŽENÍ VODOVODNÍHO POTRUBÍ V RÝZE - ŘEZ |  |  |  | zak.číslo | 85/22 |  |

E H

Ý

N R

S

Č m Y

M

b B

] E

m T 1 U K

O E

m S A Ž m L

[ O N R O E

L T m C

Ů Y  Y L

T R A  0 A

R Ě R N K  O

<a id="kapitola-008"></a>
#### 4 U R 5 R

Ě V Ě Ě / B H 2

S M T 0 T U U É  U

M S  A R T V U T

Á Ů R. P

Z  B T A O A

T R A F B Y B

O K U R K

IV P E U S U

R  T K Ě K S B

O Í Ž Í K

Š Š A O  M  P O

A N U Y A Á Á

J K H L Ů A A

K E Ě O L  K R N N

M N É Ý É E R R E

L L R L P

U J V T D V U Č U U Č

O Í T T

A Š A A

B K K B A A

A A J L L

ABUORT Ř S Ě T B B T

T Í Í T N Y U U Y

Š P  V K K V

. . V

1 2


## Pokrytí zdrojových jednotek

| unit_id | Source locator | Output anchor/file | Status | Unpreserved fraction u_i | Basis | Limitation / review_id |
| --- | --- | --- | --- | --- | --- | --- |
| S068-U001 | strana 1 | [Přepis](#s068-p001) | partial | neznámý | původní text / buňky / obrazové odkazy | viz revizní poznámky |

## Místa k revizi

- **REV-001 (high) — strana 1, klasifikace rastrových objektů:** Část obrazových objektů není jednoznačně přiřazena k viditelnému výřezu (možné skryté, oříznuté nebo transformované části). Úplnost obrazové vrstvy zůstává neověřená. Ověřit označené místo proti původnímu zdroji.

- **REV-002 (medium) — S068:** Ověřit členění víceřádkových tabulek a jejich vazbu na grafický podklad; strojová extrakce byla porovnána s náhledem. Ověřit označené místo proti původnímu zdroji.

- **REV-003 (medium) — S068:** Text v kresbě je zachován obrazově; textové oblasti a tabulky byly vytěženy parserem. Dodatečný průchod zahrnul i nativní text mimo tyto oblasti a obrazové výřezy. Členění složitých výkresových razítek vyžaduje revizi. Ověřit označené místo proti původnímu zdroji.

## Protokol metod, ověření a omezení

Použity byly lokální metody: PDFium pro text a obrazy, pdfplumber pro rozvržení a tabulky, Microsoft Word pro ověřené DOCX stránky, Windows.Media.Ocr pro vybrané skeny a čtení CFB/Word struktur pro staré DOC podle skutečného formátu zdroje. Ne všechny metody se týkají každého souboru. Celostránkové rastrové snímky nebyly ukládány. Původní fotografie složené z PDF dlaždic jsou rekonstruovány z původních obrazových objektů bez vykreslování stránky. Pokusy, parametry a selhání jsou zachované mimo dodaný balíček.


| Method run | Tool / version | Scope | Time (s) | Result / output use |
| --- | --- | --- | --- | --- |
| LOCAL-S068_layout | pdfplumber / 0.11.9 | all / source-evidence scope | 1.420782599831 | ok / True |
| LOCAL-S068_native | pypdfium2 / 5.14.0 | all / source-evidence scope | 0.0657391999848187 | ok / True |

## Sources and their roles

| Source / identification | Role | Contribution to this document | Authority / limitations |
| --- | --- | --- | --- |
| [Původní zdroj](<C:/Users/kater/Downloads/jihozapadni-mesto-prilohy.zip>) — P04 Přehled projektů v území/7_BD v cestkach, Stavokombinat invest, 2023/PD_vodovod_CERNA_SILNICE/PD_vodovod_ČERNÁ_SILNICE/D4.pdf | Obsahový zdroj | Text, tabulky a grafika | Původní soubor; SHA-256 v metadatech. |
| [document-converting](C:/Users/kater/repo/urbiq/urbiq-AI-LAB/urbiq-skills/document-converting/SKILL.md) | Pravidla převodu | Režim, obrazy, lokátory a kontrola | v261027-v11; kandidátní skill. |
| Potvrzení uživatele v aktuálním chatu | Rozsah a režim | full_transcription všech vstupů | Přesná URL není dostupná. |
| markdown-metadata-standards; date-versioned-artifacts | Procedurální pravidla | Metadata a nové verzované balíčky | Nejsou důkazem správnosti zdrojového obsahu. |
