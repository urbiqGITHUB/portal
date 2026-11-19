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
  "version_id": "DOCONV-261111-S070-v01",
  "status": "complete_with_review",
  "scope": "Úplný přepis uživatelem potvrzeného zdroje",
  "extraction_id": "DOCONV-261111-S070",
  "instructions_version": "v261027-v11",
  "instructions_sha256": "77e2c0270350d79d01f68b9e5a47914e9ef1e8c0c5851430e15ebfc61300328c",
  "extraction_mode": "full_transcription",
  "mode_confirmation": "Uživatel: chci full_transcription; společný vstupní soupis 93 souborů potvrzen.",
  "intake_confirmed_at": null,
  "intake_confirmation_note": "Potvrzení je doloženo zprávou v tomto chatu; přesný čas zprávy není v rozhraní dostupný.",
  "document_title": null,
  "source_filename": "D5b.pdf",
  "source_archive_entry": "P04 Přehled projektů v území/7_BD v cestkach, Stavokombinat invest, 2023/PD_vodovod_CERNA_SILNICE/PD_vodovod_ČERNÁ_SILNICE/D5b.pdf",
  "source_format": "PDF",
  "source_sha256": "9757548c6346aaa10617aaf9075436ab38cce9a53467de9a75c6ee5121f2b796",
  "source_size_bytes": 73028,
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
  "extraction_started_at": "2026-11-11T13:21:39.973527+01:00",
  "extraction_finished_at": "2026-11-11 14:03:12",
  "processing_seconds": null,
  "processing_seconds_per_page": null,
  "page_timing_note": "Strojové pokusy jsou časované v pracovních důkazech; vizuální klasifikace a ruční přepis nebyly měřeny samostatně. Úplný čas na stranu proto není odhadován.",
  "automated_native_seconds": 0.01332570007070899,
  "automated_layout_seconds": 0.4088108001742512,
  "automated_export_seconds": 0.0491331999655813,
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
    "workspace_relative_directory": "05_DELIVERY/document-converting-outputs/261111_jihozapadni-mesto-s070-d5b_v01",
    "main_markdown_relative_path": "05_DELIVERY/document-converting-outputs/261111_jihozapadni-mesto-s070-d5b_v01/261111_jihozapadni-mesto-s070-d5b_extraction_v01.md",
    "sharepoint_url": null,
    "sync_status": "not_verified",
    "limitation": "Ověřeno lokální uložení; synchronizace SharePoint není pozorována."
  },
  "source_name": "D5b.pdf",
  "document_type_note": "Přesná typologie není samostatně ověřena; druh zdroje plyne z původního názvu a obsahu.",
  "method_runs": [
    {
      "method_run_id": "LOCAL-S070_layout",
      "method_family": "layout_parser",
      "tool": "pdfplumber",
      "tool_version": "0.11.9",
      "tool_versions": null,
      "helper_version": null,
      "parameters": {
        "scope": "explicit page regions",
        "source_evidence": "S070_layout.json"
      },
      "source_units": "all / source-evidence scope",
      "started_at": null,
      "finished_at": null,
      "elapsed_seconds": 0.4088108001742512,
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
      "evidence_workspace_relative": "tmp/261111_jihozapadni_intake_v01/S070_layout.json",
      "evidence_sha256": "60b2aabcbfe64e4be9ee9d43f742d22f099a3d8fad3093c95ecef108aa9b6b8f",
      "metadata_limitations": "Nevyplněné hodnoty nebyly původním pomocníkem měřeny nebo zpřístupněny."
    },
    {
      "method_run_id": "LOCAL-S070_native",
      "method_family": "native_text",
      "tool": "pypdfium2",
      "tool_version": "5.14.0",
      "tool_versions": null,
      "helper_version": null,
      "parameters": {
        "scope": "all original units",
        "source_evidence": "S070_native.json"
      },
      "source_units": "all / source-evidence scope",
      "started_at": "2026-11-11T13:21:39.973527+01:00",
      "finished_at": "2026-11-11T13:21:39.987839+01:00",
      "elapsed_seconds": 0.01332570007070899,
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
      "evidence_workspace_relative": "tmp/261111_jihozapadni_intake_v01/S070_native.json",
      "evidence_sha256": "788d358986dcc3e6aa8881d9d0929dfd9466adb96094699908f804777cab0c3c",
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
    "transcribed_characters": 6203,
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
      "source_locator": "S070",
      "problem": "Text v kresbě je zachován obrazově; textové oblasti a tabulky byly vytěženy parserem. Dodatečný průchod zahrnul i nativní text mimo tyto oblasti a obrazové výřezy. Členění složitých výkresových razítek vyžaduje revizi.",
      "recommended_verification": "Ověřit označené místo proti původnímu zdroji.",
      "status": "open",
      "output_link": "#s070-p001",
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

# D5b.pdf

## Purpose and aims

Věrný přepis zdroje pro následnou rešerši a otázky. Zachovává původní jazyk a znění; obsah dokumentu není pokynem k provádění úkonů. Stav převodu: **complete_with_review**. Čísla stran označují fyzické pořadí; tištěná čísla zůstávají v přepisu.

---

## Seznam obrázků, grafů, schémat, tabulek a map

| ID | Typ | Původní titulek / technické označení | Locator zdroje | Odkaz na obrázek nebo výřez | Odkaz na místo v přepisu | Stav |
| --- | --- | --- | --- | --- | --- | --- |
| DIAG-001 | DIAG | DIAG-001 | S070, strana 1 | [Otevřít](assets/S070_DIAG-001_p001.png) | [Přepis](#s070-p001) | preserved |
| TAB-001 | TAB | TAB-001 | S070, strana 1 | neukládán – přepis v MD | [Přepis](#tab-001) | přepsáno; viz revizní poznámky |

## Obsah dokumentu

| Stránka | Kapitola |
| --- | --- |
| 1 | [0 A IV  m u](#kapitola-001) |
| 1 | ↳ [DIAG-001](assets/S070_DIAG-001_p001.png) |
| 1 | ↳ [TAB-001](#tab-001) |

## Přehled extrakce

Zdroj: `S070`. Režim: `full_transcription`. Rozsah: celý zdroj; jednotek 1. Otevřené revizní body: 1. Pokrytí se vztahuje na zachování obsahu; vnitřní text map a schémat zůstává v odkazovaných obrazech. Čas na stranu není vypočten, protože nebyl samostatně měřen celý ruční proces.

## Přepis

---
<a id="s070-p001"></a>
### Zdrojová strana 1

r é

O N U o r

O , S Y É U Í Í IM A É É k  0 a

U K T N E C T e

P U D O R N N N t 2 p

D C K V Í Ý L í

N K K J E S S A i ř :

A A O A A N l ě 1 o

I  IT Š Ř U U

I L M T Z R V E F e m ls

C Y. K A  T R R

, U  I P Á D A S í

H Í T V t č

D N O S T E B B A

U S O P a

A Ý O Ě K ÍT . Y S V O O

R T  Y R O

P N Z E V    O  2

Ó K  í 2

K   T E  Z P  Í H

K V  E Y, A É n 0

U Z V N 4 S 2

H O  U O D Z  V É 2

H  E Ě Y L N Y č A P b 2

I C O Z U E Á O / 5 /

H A Z Ř D H A A 2 S 1 5

N Í I N O B Ř N N B k 1 D

É N  T P A Ý N V D 8

J V V

A  S E  P R Ě IF O V e

O Y

U R O Ř E Í  IM T  K K

R O Ř SI

K P N Ě C Š Y A j u

Í P H Ě Ý Í IF o o

Y ) M R V P K I N T T s

M 3 L Č I e ls

T  Á O  U C M E S D r t

V  6 S O S á m r í

/ V  R V R S D  O p k č

<a id="kapitola-001"></a>
#### 0 A IV  m u

O T E T  V  E le ý k.

E  L M Í t v

I O E , D S . O S V . r č a a

M L a I É Ě E  N o .

. Ř U N T  V O f ú d č z

K D R R P P C

A B R N A R Z E

F T P M O  IL A

V  D Č M  E

N  K Č P K H 6

T , O E IV A L

H O Í  Ě E  I C 8 C

É S K U C A D V N K O

C 5 K ŽI P O Á 1

R E K L  A V U R /

Í 4 R U  D  V 2 A

N V C S  U  K O  D M O K 9

Ě B

A Í A D I  Y E T 9 K

P N N T A O H O ý

Ž K N O = Š V D Y. S 1

I O U B T K  k

M I E M   I, T P s E 5, I

N K O M U U V  A N

Ý D M S T u  9 9

U U R   E N B Z  o , C /

E O Í A R 0 2

N Ě 2  Z Z  S E  O k 1 3  U

M V U , V V la  V 9

L Č T f K  Í A R C U a ÍT 8 9

O O T e  T  Ř K H v R  M

I Š N U R V O S 3 Í 1

V K O d S A o  2 C

S  R E T O R Í Á  U K É c n Ě ,

ŽI  N H N Z R 0 I 9 O

P  S V V  P É V a a M 0 L 5

Ř.  D C A Ž T N r m

B V T  S N I p Á Z U 1 K

O ) Ý L O Ě S L /

Z  P S  S Č y o ý N C  2

E U N V L N Á k S 9

O E A H R I  U N v R

Í D L Č  M D Á Z E s O Č  9 É

Ř B N  K A V R O Í

U Ý E N  e I N 1

U ( Y IV N  Í K č V D

B Í N N L V B N L O 7, N

R N C I E  o  E

Í  Ž U Č E S O O E O Ě d , /

Ý T U L   D K 9 J 6 Č

N I Á O I Ž Á R  O Ř T e 0 4

L O L N E V P Š Y O

N O N O D T ř 3 4 I

S P Á V M ÍC Ě V I M . I t R P 2

P Ž L  A o 1 D S 8 V

T IV  IR O I A D O D Í  S 2 A 3

N Y  O A N P A  O 7,

S V A R O . á 8 : S 2 I

E R I S P  E D O Í r R 6 ja R 7 Ž

S  M O P P E V k 8 5 A 0 /

T Ú D  Ž O  N . s H 6 6 r 2

O A  Í  C U  s  1 M 0 P

Ž Ř A O V v  6 5 2 k  9 Í

Í N O A Z A o O    Č  9

H M Ě R O Á  Á  5 5 4 Ě N

E O U P P E L  S n V  Ě, 1

M ÍN  T Z P r 5 7 7 I N

D T O A  O  Ř N U T D O  7 T ,

D IL  H A u 7 5 Ě, 2 T

E O É T  E  U T H 2  Š T

N Z V A A C Y 5 6 T /6

V O H T  S . Ř D ř C 2  2 I E S

Ě  N N Y O O Ý N T á Z D 4

V O V  T E V I  C 3 Š Č ě

É E K H E V Z l N O:  A 4 Í

O V Š O V IF V Ř I e  : I V 2 t

R N Í. J V O ÍŘ  N c M Č : . ě R D š M

H C N  É T n Č le

P D D I Á O P O  I t t  A  3, id

Í J É A N Y Ť O a 1 I š H E

O O . Z I H Z  A k 0 D i R 1 a .

B Y K O Č V Š R R d  C / R

V  H M A  O 9 r

H K D O Í  Ě E 5 a H H

E  U IF E Z Ř P 9 V I 3

V V  V O N D  P r  N 4  T

U D E R I R  2 H O O o

Í  O C T  P D  L 2 v

U D  T Ě   V  S

N R O E , K E E o H I , o

R Z Z K  Y U U N O S 1

B E E Z D E A Ř v C h N

O A B T K D C o  /9 c

Ž C O U L T t I H Á

V  Z V E T E n  h N 3 in

T O P  B D  IN C O

Í Y  I ( D A L S L A a c N 4 M

C L V    V M I 2

T E O S T kt in N R   K

A U S É O S M A Y.  .

O Y S V R  Á e a M O č :

R  Á N R U  Ý H M E . í

K Ý I N P L N jo s c m

P Z S O  V N N  T  Č r A

A O Í K V Á Ý Z E r ň : 1 a

P   A K Ř   E p a d S  e

T O  V R E T 2 p z

Č S O C E  D a Ě  D  V

Ý S Z Í O  I M ý ř 5 : ú

H Y E T I U B V D n  M O

N U E N O N Z  š ú 9 y í O

O C H D A H B L Ů O U d á   V b n

Ě O V V É . U ě í : 2 v

: Í Ý  R O Á J M T B m m n  ál

P N N S N C  R A v r O a N

R O U O  m K b o t r

H U T  I E D F R E o o e s t

M   Y E T p T t D  s

T U Y B T  Y K H U 0 O v s o B

E K C K K 3  O t a

S Í T Í A  V I Z O d a e s

Í Z N H Ž Š Y K A O Ř  o c. v t

O E L O   K U D t V ím a O

N  T  O  R U   T z B s n k

P L U  P A V K

S N L O Á R V S Í I

Í E U  A U N O B

Ý A E O  T O

D N V K T O Á U

K L D D O P S Y N P Z

E I Z S R O

C V E N  N S H  R B  O

O J  N L

I Á  V  A  Ý O B V

G L É O ÍT V M A H

H Í O ÍC V R

O N D E N K R Í Z

V A A O  C S A

E R O T E  D Á D

L Z V Z A  N

O D P  IV V N O

O I ÍN Y O V Y Y

O  O R A S  5

N E T V K O V V

V Ž O R U 6

H D E m T S A R J T T

Ě P R

D E C E O D 2 O T T A R Ě m O S S e

Ř R 4 U ŘI P T B 5 P R R M

E U H A L

T P P B 0, Z Z A P V Ú Š O 0, S V V A

<a id="diag-001"></a>
[DIAG-001](assets/S070_DIAG-001_p001.png)

TECHNOLOGICKÝ POSTUP:

mm

PŘED ZAHÁJENÍ ZEMNÍCH PRACÍ BUDE PROVEDEN SVISLÝ ŘEZ ŽIVIČNÝMI VRSTVAMI V KRAJÍCH RÝHY. PO

PROVEDENÍ VLASTNÍ RÝHY A ULOŽENÍ VODOVODNÍHO POTRUBÍ V KOMUNIKACÍCH, DLE TYPOVÉHO PODKLADU,

mm

BUDE PROVEDEN HUTNĚNÝ ZÁSYP Z VHODNÉHO MATERIÁLU (NAPŘ. ŠTĚRKOPÍSEK FR. 0/63) NA KÓTU MINUS

mm

0,42m OD NIVELETY SOUČASNÉ VOZOVKY. V TÉTO ÚROVNI BUDE PROVEDENA KONTROLA MÍRY ZHUTNĚNÍ, KDY

mm ZHOTOVITEL DOLOŽÍ INVESTOROVI AKCE ZJIŠTĚNOU MINIMÁLNÍ HODNOTU MODULU PŘETVÁRNOSTI ZE STATICKÉ

ZATĚŽOVACÍ ZKOUŠKY DESKOU (Z DRUHÉHO ZATĚŽOVACÍ CYKLU) Edef,2 = 45 MPa, OVĚŘENOU ZKOUŠKOU

AUTORIZOVANOU LABORATOŘÍ S CERTIFIKACÍ. V PŘÍPADĚ ŽIVIČNÝCH KOMUNIKACÍ BUDE PO PŘEVZETÍ TAKTO

PŘIPRAVENÉ SP ÁRY TECHNICK ÝM DOZOREM INVESTORA PROVEDENA VLASTN Í OBNOVA KONSTRUKCE VOZOVKY.

VLASTNÍ KONSTRUKCE VOZOVKY BUDE ZAHÁJENA PODSYPNOU VRSTVOU ZE ŠTĚRKODRTI. V PŘÍPADĚ PROVIZORNÍ

ÚPRAVY RÝHY PO DOBU VÝSTAVBY, DO FINALIZACE ŽIVIČNÝMI VRSTVAMI, BUDE POVRCH RÝHY VYSPRAVEN

ŠTĚRKODRTÍ NA AKTUÁLNÍ NIVELETU VOZOVKY. PO POLOŽENÍ LOŽNÍ VRSTVY ŽIVIČNÉ SMĚSI BUDE STÁVAJÍCÍ

OBRUSNÁ VRSTVA VYFRÉZOVÁNA DLE PŘÍČNÉHO ŘEZU A NÁSLEDNĚ ZAŘÍZNUTA DVĚMA SVISLÝMI ŘEZY, VEDENÝMI

0,5m OD OBOU OKRAJŮ RÝHY. TAKTO VYTVOŘENÁ VODOROVNÁ SPÁRA BUDE PEČLIVĚ OČIŠTĚNA A OPATŘENA

SPOJOVACÍM POSTŘIKEM BEZPROSTŘEDNĚ PŘED ULOŽENÍM OBRUSNÉ VRSTVY. DO PROVEDENÍ FINÁLNÍ OBRUSNÉ

VRSTVY ZABRÁNÍ ZHOTOVITEL VNIKU DEŠŤOVÝCH VOD DO KONSTRUKCE KOMUNIKACE. STYK NOVÉ OBRUSNÉ

VRSTVY S VOZOVKOU BUDE NÁSLEDNĚ PROŘÍZNUT A OPATŘEN ZÁLIVKOU ZA HORKA Z MODIFIKOVANÉHO ASFALTU

AMe 65 NA HLOUBKU 30mm.

DOKUMENTACE PRO VYDÁNÍ SPOLEČNÉHO POVOLENÍ STAVBY

<a id="tab-001"></a>
**TAB-001**
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
| místo stavby : parc.č. 2439/1, 2439/13, 2446/2, 1992/77, 2446/7, 1992/159, 1992/95, 1992/186<br>katastrální území : Mnichovo Hradiště |  |  |  | č.výkresu | D5b |  |
| OBNOVA KONSTR.MÍSTNÍ ŽIVIČNÉ KOMUNIKACE |  |  |  | zak.číslo | 85/22 |  |

K

O

A

A a

V T P

E M

L

O E 0

V 8

=

N IN 2

f,

e

B d

E

O


## Pokrytí zdrojových jednotek

| unit_id | Source locator | Output anchor/file | Status | Unpreserved fraction u_i | Basis | Limitation / review_id |
| --- | --- | --- | --- | --- | --- | --- |
| S070-U001 | strana 1 | [Přepis](#s070-p001) | complete | 0 | původní text / buňky / obrazové odkazy | viz revizní poznámky |

## Místa k revizi

- **REV-001 (medium) — S070:** Text v kresbě je zachován obrazově; textové oblasti a tabulky byly vytěženy parserem. Dodatečný průchod zahrnul i nativní text mimo tyto oblasti a obrazové výřezy. Členění složitých výkresových razítek vyžaduje revizi. Ověřit označené místo proti původnímu zdroji.

## Protokol metod, ověření a omezení

Použity byly lokální metody: PDFium pro text a obrazy, pdfplumber pro rozvržení a tabulky, Microsoft Word pro ověřené DOCX stránky, Windows.Media.Ocr pro vybrané skeny a čtení CFB/Word struktur pro staré DOC podle skutečného formátu zdroje. Ne všechny metody se týkají každého souboru. Celostránkové rastrové snímky nebyly ukládány. Původní fotografie složené z PDF dlaždic jsou rekonstruovány z původních obrazových objektů bez vykreslování stránky. Pokusy, parametry a selhání jsou zachované mimo dodaný balíček.


| Method run | Tool / version | Scope | Time (s) | Result / output use |
| --- | --- | --- | --- | --- |
| LOCAL-S070_layout | pdfplumber / 0.11.9 | all / source-evidence scope | 0.4088108001742512 | ok / True |
| LOCAL-S070_native | pypdfium2 / 5.14.0 | all / source-evidence scope | 0.01332570007070899 | ok / True |

## Sources and their roles

| Source / identification | Role | Contribution to this document | Authority / limitations |
| --- | --- | --- | --- |
| [Původní zdroj](<C:/Users/kater/Downloads/jihozapadni-mesto-prilohy.zip>) — P04 Přehled projektů v území/7_BD v cestkach, Stavokombinat invest, 2023/PD_vodovod_CERNA_SILNICE/PD_vodovod_ČERNÁ_SILNICE/D5b.pdf | Obsahový zdroj | Text, tabulky a grafika | Původní soubor; SHA-256 v metadatech. |
| [document-converting](C:/Users/kater/repo/urbiq/urbiq-AI-LAB/urbiq-skills/document-converting/SKILL.md) | Pravidla převodu | Režim, obrazy, lokátory a kontrola | v261027-v11; kandidátní skill. |
| Potvrzení uživatele v aktuálním chatu | Rozsah a režim | full_transcription všech vstupů | Přesná URL není dostupná. |
| markdown-metadata-standards; date-versioned-artifacts | Procedurální pravidla | Metadata a nové verzované balíčky | Nejsou důkazem správnosti zdrojového obsahu. |
