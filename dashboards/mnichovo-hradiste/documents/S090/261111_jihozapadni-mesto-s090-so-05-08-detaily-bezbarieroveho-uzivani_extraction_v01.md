---
{
  "created_at": "2026-11-11 14:03:14",
  "created_date": "2026-11-11",
  "created_by": "Codex – Kateřina Kováříková",
  "updated_at": "2026-11-11 14:03:15",
  "updated_by": "Codex",
  "revised_by": null,
  "timezone": "Europe/Prague",
  "codex_dialogue": null,
  "dialogue_location_note": "Aktuální lokální chat Codex; přesná URL nebyla zpřístupněna.",
  "dialogue_iteration": 2,
  "version_id": "DOCONV-261111-S090-v01",
  "status": "complete_with_review",
  "scope": "Úplný přepis uživatelem potvrzeného zdroje",
  "extraction_id": "DOCONV-261111-S090",
  "instructions_version": "v261027-v11",
  "instructions_sha256": "77e2c0270350d79d01f68b9e5a47914e9ef1e8c0c5851430e15ebfc61300328c",
  "extraction_mode": "full_transcription",
  "mode_confirmation": "Uživatel: chci full_transcription; společný vstupní soupis 93 souborů potvrzen.",
  "intake_confirmed_at": null,
  "intake_confirmation_note": "Potvrzení je doloženo zprávou v tomto chatu; přesný čas zprávy není v rozhraní dostupný.",
  "document_title": null,
  "source_filename": "SO_05-08-Detaily bezbariérového užívání.pdf",
  "source_archive_entry": "P04 Přehled projektů v území/7_BD v cestkach, Stavokombinat invest, 2023/ZPEVNENE PLOCHY/ZPEVNĚNÉ PLOCHY/SO_05-08-Detaily bezbariérového užívání.pdf",
  "source_format": "PDF",
  "source_sha256": "1ca322be02711663d3ddfed14e3f7666a707aef3604ed7c843d8a622642e0a8b",
  "source_size_bytes": 1034921,
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
  "table_count": 0,
  "extraction_started_at": "2026-11-11T13:21:42.739826+01:00",
  "extraction_finished_at": "2026-11-11 14:03:15",
  "processing_seconds": null,
  "processing_seconds_per_page": null,
  "page_timing_note": "Strojové pokusy jsou časované v pracovních důkazech; vizuální klasifikace a ruční přepis nebyly měřeny samostatně. Úplný čas na stranu proto není odhadován.",
  "automated_native_seconds": 0.21977199986577034,
  "automated_layout_seconds": 14.65883080009371,
  "automated_export_seconds": 0.17063729977235198,
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
    "workspace_relative_directory": "05_DELIVERY/document-converting-outputs/261111_jihozapadni-mesto-s090-so-05-08-detaily-bezbarieroveho-uzivani_v01",
    "main_markdown_relative_path": "05_DELIVERY/document-converting-outputs/261111_jihozapadni-mesto-s090-so-05-08-detaily-bezbarieroveho-uzivani_v01/261111_jihozapadni-mesto-s090-so-05-08-detaily-bezbarieroveho-uzivani_extraction_v01.md",
    "sharepoint_url": null,
    "sync_status": "not_verified",
    "limitation": "Ověřeno lokální uložení; synchronizace SharePoint není pozorována."
  },
  "source_name": "SO_05-08-Detaily bezbariérového užívání.pdf",
  "document_type_note": "Přesná typologie není samostatně ověřena; druh zdroje plyne z původního názvu a obsahu.",
  "method_runs": [
    {
      "method_run_id": "LOCAL-S090_layout",
      "method_family": "layout_parser",
      "tool": "pdfplumber",
      "tool_version": "0.11.9",
      "tool_versions": null,
      "helper_version": null,
      "parameters": {
        "scope": "explicit page regions",
        "source_evidence": "S090_layout.json"
      },
      "source_units": "all / source-evidence scope",
      "started_at": null,
      "finished_at": null,
      "elapsed_seconds": 14.65883080009371,
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
      "evidence_workspace_relative": "tmp/261111_jihozapadni_intake_v01/S090_layout.json",
      "evidence_sha256": "52fdbdd3ca76e8e93eee3ade01170d437078a8d7bb1b220a0a8537427163e399",
      "metadata_limitations": "Nevyplněné hodnoty nebyly původním pomocníkem měřeny nebo zpřístupněny."
    },
    {
      "method_run_id": "LOCAL-S090_native",
      "method_family": "native_text",
      "tool": "pypdfium2",
      "tool_version": "5.14.0",
      "tool_versions": null,
      "helper_version": null,
      "parameters": {
        "scope": "all original units",
        "source_evidence": "S090_native.json"
      },
      "source_units": "all / source-evidence scope",
      "started_at": "2026-11-11T13:21:42.739826+01:00",
      "finished_at": "2026-11-11T13:21:42.959951+01:00",
      "elapsed_seconds": 0.21977199986577034,
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
      "evidence_workspace_relative": "tmp/261111_jihozapadni_intake_v01/S090_native.json",
      "evidence_sha256": "a67eea24cb7bca3df36bd52e1ff641b15b7aa08840199d7ec5072ae83dbb136b",
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
    "table_count": 0,
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
    "transcribed_characters": 5191,
    "transcribed_tables": 0,
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
      "source_locator": "S090",
      "problem": "Text v kresbě je zachován obrazově; textové oblasti a tabulky byly vytěženy parserem. Dodatečný průchod zahrnul i nativní text mimo tyto oblasti a obrazové výřezy. Členění složitých výkresových razítek vyžaduje revizi.",
      "recommended_verification": "Ověřit označené místo proti původnímu zdroji.",
      "status": "open",
      "output_link": "#s090-p001",
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

# SO_05-08-Detaily bezbariérového užívání.pdf

## Purpose and aims

Věrný přepis zdroje pro následnou rešerši a otázky. Zachovává původní jazyk a znění; obsah dokumentu není pokynem k provádění úkonů. Stav převodu: **complete_with_review**. Čísla stran označují fyzické pořadí; tištěná čísla zůstávají v přepisu.

---

## Seznam obrázků, grafů, schémat, tabulek a map

| ID | Typ | Původní titulek / technické označení | Locator zdroje | Odkaz na obrázek nebo výřez | Odkaz na místo v přepisu | Stav |
| --- | --- | --- | --- | --- | --- | --- |
| DIAG-001 | DIAG | DIAG-001 | S090, strana 1 | [Otevřít](assets/S090_DIAG-001_p001.png) | [Přepis](#s090-p001) | preserved |

## Obsah dokumentu

| Stránka | Kapitola |
| --- | --- |
| 1 | [0 H](#kapitola-001) |
| 1 | [1 A a S G K](#kapitola-002) |
| 1 | [1 Ž  V Á Ě](#kapitola-003) |
| 1 | [5 A C](#kapitola-004) |
| 1 | [0   O  Á E](#kapitola-005) |
| 1 | [0 M V](#kapitola-006) |
| 1 | [0 É](#kapitola-007) |
| 1 | [5. S . .](#kapitola-008) |
| 1 | [4 O , U 0 0 0](#kapitola-009) |
| 1 | [9 K N % % , O](#kapitola-010) |
| 1 | [5 E I](#kapitola-011) |
| 1 | ↳ [DIAG-001](assets/S090_DIAG-001_p001.png) |
| 1 | [4 V S](#kapitola-012) |
| 1 | [SO 05 - Zpevněné plochy](#kapitola-013) |
| 1 | [DETAIL BEZBARIÉROVÉHO UŽÍVÁNÍ](#kapitola-014) |
| 1 | [4 BYTOVÉ DOMY V ULICI V CESTKÁCH](#kapitola-015) |
| 1 | [2 O C C](#kapitola-016) |
| 1 | [0 O Ž : S E](#kapitola-017) |
| 1 | [5 E B](#kapitola-018) |

## Přehled extrakce

Zdroj: `S090`. Režim: `full_transcription`. Rozsah: celý zdroj; jednotek 1. Otevřené revizní body: 1. Pokrytí se vztahuje na zachování obsahu; vnitřní text map a schémat zůstává v odkazovaných obrazech. Čas na stranu není vypočten, protože nebyl samostatně měřen celý ruční proces.

## Přepis

---
<a id="s090-p001"></a>
### Zdrojová strana 1

L

IN L

IN

IE

IE

P

Ř P

E Ř

C E

H C

O H

D O

U D P Ř P

U

Ů E

Ř

D Z

O E

DLE NÁŠLAPU OBRUBY DLE NÁŠLAPU OBRUBY

R

ŠÍŘKA PŘECHODU (3 0 4 0 )    C

- m Y

,   ,  0

S ,

<a id="kapitola-001"></a>
#### 0 H

0 80 0 80 0

VOZOVKA 0 00 . VOZOVKA 0 00 . VO ZOVKA 0 00 -

± ± ± 0

, , , V O

, D   0

OBRUBA 0 02 2 A

OBRUBA + 0 10 0 15 + L OBRUBA + 0 10 0 15 R

, - ,   , E , - , O

D

V

N N

m Á 0 Ý

.  Š

a Š 4 P

x 0  Á S ÍŘ P

L m I

<a id="kapitola-002"></a>
#### 1 A a S G K

2 x š N

P . A R

5. .1  Á

Š U 2 0 L

%  ,4 N K

ÍŘ  .5

O  m Í O  O

( %  P

K V P B M

A Á

Ř R B S U

P Í

C M U E š N

V Ř T .

H S B P K U 0 I C

A Í Á . , K

O I P Y Z  Ř D K 8

R G A  Á m A

D Č M

M E E O  C H

O N D Á  -

N I K S  N M R E

V Á Ě S N V

ÍK  T O A Č I E

L 2 Z . V Ý N L P O

U N  0 H 3 2 I

N , A M Á Š E , , . É R

Ý 0 , 0 0 0

% L 9  U K N % % F O

Í I D ,9 N

P P O N 0 L J O Í  D

m A  Í M  P

Á Á M . E P Z

<a id="kapitola-003"></a>
#### 1 Ž  V Á Ě

S S E , B 0 Ý Á M Š

<a id="kapitola-004"></a>
#### 5 A C

N , S K Í

š š m 0  O

Í  8 R U V

. . )

<a id="kapitola-005"></a>
#### 0   O  Á E

<a id="kapitola-006"></a>
#### 0 M V

, 0 80 Z  D

4 ,8

.  D M L

m m A

Í Í Ž

S Á ÍCÍ O (O Í O Í O OC Í) OŘÍCÍ O ÍCÍ L S S Á ÍCÍ O B

- - T VAJ BJEKT BRUBN K P DEZD VKA PL EN TV V D LINII T VAJ BJEKTA

T

R R   , ,    U   D

E E  Ě

O ,

L L

I I B E

É É R

F F

U T

N N

B

Í Í Y  A

Z

Z

Á Á

M M I

K K L

O O

V V

B

Á Á

D D E

L L

A A

Z

Ž Ž

B B

A A B

A

R

DLE NÁŠLAPU OBRUBY

I

<a id="kapitola-007"></a>
#### 0 É

,0

0 80 0

- R

VOZOVKA 0 00 . VOZOVKA ± 0 00 0 S

± P Ř

, ,0 V

, D A O

OBRUBA 0 02 0 05 OBRUBA 0 10 0 15 Ů 5  E

+ m L + R J

, - , E , - , D O Z

V V

N O N E

m Á 0 Ý

.4  Š

a Š R P Z

V x 0  Á ÍŘ É

L m

A 1 A Y S K

2 a

R P x š A D H

<a id="kapitola-008"></a>
#### 5. S . .

Š U 1 0

O % 2 , K

Í  . 4

Ř V O 5  m O  O

%

K N B M N

A Ý R U

U N

C  A

P B P K U I Ř

H Á B K

E Y Ř D K

O S A

T M E E O

D  . C S E

š  Z S  M

N 2 IN 2 V N E

. Á A

Í  ,0 M ,0 Ý Č IN P Š

K 0 . 2 O

% K 0 % H 3 .

U , Š E , ,  R

<a id="kapitola-009"></a>
#### 4 O , U 0 0 0

<a id="kapitola-010"></a>
#### 9 K N % % , O

m V 0 9 E

Á J O Í  U

m E  M P

-  D V P Ě

Á N

R L 0 Ý Š S

A , S

E Ž 0  Í

L B 8 R U Í

I A  O  E

É M V

Z P

F

N D M D

Í Í Í R

L S VRATA

Z VRATA STÁVAJÍCÍ OBRUBA PODEZDÍVKA POPŘ OBJEK T

U T N

Á  , .

Ě  O

M O ,

Í

K B

O R

N Z

V U

Á B

E Á

Y

D

L M M

A

Ž

B O

K

A

V O

I V

T

O

O

U

S

T

D

L

A

P Ř M

Ž

Ů E

D Z Í

B

S

O

DLE NÁŠLAPU OBRUBY DLE NÁŠLAPU OBRUBY U

R T

ŠÍŘKA MÍSTA PRO PŘECHÁZENÍ (2 0 3 0 )

- m Y

,   ,  0 O

S ,

0

0 80 0 80 0

O O 0 00 O O 0 00 -

V Z VKA ± . VOZOVKA ± 0 00 . V Z VKA ± 0

, , , V P

, D   0

OBRUBA 0 02 2 A

OBRUBA + 0 10 0 15 + L OBRUBA + 0 10 0 15 R

, - ,   , E , - , O R

V

N N

Á 0 Ý O

m .  Š

Š 4 P

a 0  Á ÍŘ

0 x L m

. A a S K

3 1 x š

0 2 P . A P

Š  . ( .1 0

- 5 P U 2 S K

Í   ,4 I

Ř 0 % Ř O .5  G O

% m N  Ř

K .4 I B M

R Á

A 0  R L

E P B N U E

C K Ř U E Í N

V T P

H S O Í B P K U Á I

A M Y .  K C

O I N Z Ř D K S A

R G Á Á

D S M M E E O š C

O N  .

N T Č I K S  N M 0 E H

V Á N V ,

POZNÁMKY:

Í R Á O A I 8

K L 2 . Ý Č N m P

N U S  V H 3 2

U N , 0 Á Š E , .  - R Á

Ý 0 K T , ,0 0 0

%  9  D U K N % % R O

Í C ,9 E

P P 1 0 L J O

I , m A  Í M L P Z

<a id="kapitola-011"></a>
#### 5 E I

<a id="diag-001"></a>
[DIAG-001](assets/S090_DIAG-001_p001.png)

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

M d

o

i k

r

o u

s m

l e

a

v n

t

a

L

c

O i

v

U y

P p

Ý r

a

c

o

v

a

l

:

SOUŘADNICOVÝ SYSTÉM: S-JTSK

VÝŠKOVÝ SYSTÉM: BpV

!!!PŘED ZAPOČETÍM STAVEBNÍCH PRACÍ SI MUSÍ ZHOTOVITEL NECHAT VYTYČIT EXISTUJÍCÍ INŽENÝRS

SPOLEČNÁ DOKUMENTACE PRO VYDÁNÍ SPOLEČNÉHO POVOL

<a id="kapitola-012"></a>
#### 4 V S

6 e T

0 s A

Projektant části PD

e V

CR Project s.r.o.

0

zodpovědný projektant:

6 c

k O

á

L K

Pod Borkem 319

i  O

b 9

e 7 M

293 01 Mladá Boleslav

r /

e 1 B

c 2

IČ: 270 86 135

IN

V

tel.:+420 326 700 666

I

dokumentaci vypracoval:

- T

fax.: +420 326 700 665

R I

o N

info@crproject.cz Miroslav LOUPÝ

c V

h E

li S

c

e T

s

.r

<a id="kapitola-013"></a>
#### SO 05 - Zpevněné plochy

o.

.

<a id="kapitola-014"></a>
#### DETAIL BEZBARIÉROVÉHO UŽÍVÁNÍ

<a id="kapitola-015"></a>
#### 4 BYTOVÉ DOMY V ULICI V CESTKÁCH

Č Č

pprroojjeekkččnníí  aatteelliieerr

. Á

MNICHOVO HRADIŠTĚ

V

Ý S

T

K

R

ANITAS MÍSTO STAVBY: ZAK.ČÍSLO

s.r.o. Turnovská 21 MĚŘÍTKO 1:50

.

ul. V Cestkách, Mnichovo Hradiště 120/21

IČO: 257 55 668 295 01 Mnichovo Hradiště

FORMÁT 3XA4

tel./fax.: 326 774 215 (2022-005)

DIČ: CZ 257 55 668 STAVEBNÍ ÚŘAD: Mnichovo Hradiště

0

8

ÚČEL DUSP

zodpovědný projektant: KRAJ: Středočeský

ČÍSLO PARÉ

Ing.Tomáš RAKOUSKÝ INVESTOR: DATUM II/22

STAVOKOMBINÁT INVEST s.r.o.

<a id="kapitola-016"></a>
#### 2 O C C

O . T É L R M I  T

dokumentaci vypracoval: ČÁST

2 0 Č M I K H

Vesecká 97/12

Í É E U CI

- / O A P

P 0 2 Í P I M : .  B Ř K

S N  V D C

A 1  Y   I É

Miroslav LOUPÝ 460 06 Liberec VI - Rochlice

<a id="kapitola-017"></a>
#### 0 O Ž : S E

Č.VÝKR. 08

R L  -

<a id="kapitola-018"></a>
#### 5 E B

O V J

É )  N p T

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
| S090-U001 | strana 1 | [Přepis](#s090-p001) | complete | 0 | původní text / buňky / obrazové odkazy | viz revizní poznámky |

## Místa k revizi

- **REV-001 (medium) — S090:** Text v kresbě je zachován obrazově; textové oblasti a tabulky byly vytěženy parserem. Dodatečný průchod zahrnul i nativní text mimo tyto oblasti a obrazové výřezy. Členění složitých výkresových razítek vyžaduje revizi. Ověřit označené místo proti původnímu zdroji.

## Protokol metod, ověření a omezení

Použity byly lokální metody: PDFium pro text a obrazy, pdfplumber pro rozvržení a tabulky, Microsoft Word pro ověřené DOCX stránky, Windows.Media.Ocr pro vybrané skeny a čtení CFB/Word struktur pro staré DOC podle skutečného formátu zdroje. Ne všechny metody se týkají každého souboru. Celostránkové rastrové snímky nebyly ukládány. Původní fotografie složené z PDF dlaždic jsou rekonstruovány z původních obrazových objektů bez vykreslování stránky. Pokusy, parametry a selhání jsou zachované mimo dodaný balíček.


| Method run | Tool / version | Scope | Time (s) | Result / output use |
| --- | --- | --- | --- | --- |
| LOCAL-S090_layout | pdfplumber / 0.11.9 | all / source-evidence scope | 14.65883080009371 | ok / True |
| LOCAL-S090_native | pypdfium2 / 5.14.0 | all / source-evidence scope | 0.21977199986577034 | ok / True |

## Sources and their roles

| Source / identification | Role | Contribution to this document | Authority / limitations |
| --- | --- | --- | --- |
| [Původní zdroj](<C:/Users/kater/Downloads/jihozapadni-mesto-prilohy.zip>) — P04 Přehled projektů v území/7_BD v cestkach, Stavokombinat invest, 2023/ZPEVNENE PLOCHY/ZPEVNĚNÉ PLOCHY/SO_05-08-Detaily bezbariérového užívání.pdf | Obsahový zdroj | Text, tabulky a grafika | Původní soubor; SHA-256 v metadatech. |
| [document-converting](C:/Users/kater/repo/urbiq/urbiq-AI-LAB/urbiq-skills/document-converting/SKILL.md) | Pravidla převodu | Režim, obrazy, lokátory a kontrola | v261027-v11; kandidátní skill. |
| Potvrzení uživatele v aktuálním chatu | Rozsah a režim | full_transcription všech vstupů | Přesná URL není dostupná. |
| markdown-metadata-standards; date-versioned-artifacts | Procedurální pravidla | Metadata a nové verzované balíčky | Nejsou důkazem správnosti zdrojového obsahu. |
