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
  "version_id": "DOCONV-261111-S069-v01",
  "status": "complete_with_review",
  "scope": "Úplný přepis uživatelem potvrzeného zdroje",
  "extraction_id": "DOCONV-261111-S069",
  "instructions_version": "v261027-v11",
  "instructions_sha256": "77e2c0270350d79d01f68b9e5a47914e9ef1e8c0c5851430e15ebfc61300328c",
  "extraction_mode": "full_transcription",
  "mode_confirmation": "Uživatel: chci full_transcription; společný vstupní soupis 93 souborů potvrzen.",
  "intake_confirmed_at": null,
  "intake_confirmation_note": "Potvrzení je doloženo zprávou v tomto chatu; přesný čas zprávy není v rozhraní dostupný.",
  "document_title": null,
  "source_filename": "D5a.pdf",
  "source_archive_entry": "P04 Přehled projektů v území/7_BD v cestkach, Stavokombinat invest, 2023/PD_vodovod_CERNA_SILNICE/PD_vodovod_ČERNÁ_SILNICE/D5a.pdf",
  "source_format": "PDF",
  "source_sha256": "93c133124e5cdbc75fa1922456fd9e55110567a2d1a3b1623246a0f17fe6a91f",
  "source_size_bytes": 72023,
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
  "extraction_started_at": "2026-11-11T13:21:39.957649+01:00",
  "extraction_finished_at": "2026-11-11 14:03:12",
  "processing_seconds": null,
  "processing_seconds_per_page": null,
  "page_timing_note": "Strojové pokusy jsou časované v pracovních důkazech; vizuální klasifikace a ruční přepis nebyly měřeny samostatně. Úplný čas na stranu proto není odhadován.",
  "automated_native_seconds": 0.014059399953112006,
  "automated_layout_seconds": 0.2674107998609543,
  "automated_export_seconds": 0.0514718999620527,
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
    "workspace_relative_directory": "05_DELIVERY/document-converting-outputs/261111_jihozapadni-mesto-s069-d5a_v01",
    "main_markdown_relative_path": "05_DELIVERY/document-converting-outputs/261111_jihozapadni-mesto-s069-d5a_v01/261111_jihozapadni-mesto-s069-d5a_extraction_v01.md",
    "sharepoint_url": null,
    "sync_status": "not_verified",
    "limitation": "Ověřeno lokální uložení; synchronizace SharePoint není pozorována."
  },
  "source_name": "D5a.pdf",
  "document_type_note": "Přesná typologie není samostatně ověřena; druh zdroje plyne z původního názvu a obsahu.",
  "method_runs": [
    {
      "method_run_id": "LOCAL-S069_layout",
      "method_family": "layout_parser",
      "tool": "pdfplumber",
      "tool_version": "0.11.9",
      "tool_versions": null,
      "helper_version": null,
      "parameters": {
        "scope": "explicit page regions",
        "source_evidence": "S069_layout.json"
      },
      "source_units": "all / source-evidence scope",
      "started_at": null,
      "finished_at": null,
      "elapsed_seconds": 0.2674107998609543,
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
      "evidence_workspace_relative": "tmp/261111_jihozapadni_intake_v01/S069_layout.json",
      "evidence_sha256": "8d8d5bb0b6c73edfc4c77186545e914849a46f1b98a5fd6271ff7a1fda16d2d2",
      "metadata_limitations": "Nevyplněné hodnoty nebyly původním pomocníkem měřeny nebo zpřístupněny."
    },
    {
      "method_run_id": "LOCAL-S069_native",
      "method_family": "native_text",
      "tool": "pypdfium2",
      "tool_version": "5.14.0",
      "tool_versions": null,
      "helper_version": null,
      "parameters": {
        "scope": "all original units",
        "source_evidence": "S069_native.json"
      },
      "source_units": "all / source-evidence scope",
      "started_at": "2026-11-11T13:21:39.957649+01:00",
      "finished_at": "2026-11-11T13:21:39.972476+01:00",
      "elapsed_seconds": 0.014059399953112006,
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
      "evidence_workspace_relative": "tmp/261111_jihozapadni_intake_v01/S069_native.json",
      "evidence_sha256": "9ba697c3588345de9aba8fc552b214613992c3cdcb5c0055bbd2d6f7d76c40f0",
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
    "transcribed_characters": 6406,
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
      "source_locator": "S069",
      "problem": "Text v kresbě je zachován obrazově; textové oblasti a tabulky byly vytěženy parserem. Dodatečný průchod zahrnul i nativní text mimo tyto oblasti a obrazové výřezy. Členění složitých výkresových razítek vyžaduje revizi.",
      "recommended_verification": "Ověřit označené místo proti původnímu zdroji.",
      "status": "open",
      "output_link": "#s069-p001",
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

# D5a.pdf

## Purpose and aims

Věrný přepis zdroje pro následnou rešerši a otázky. Zachovává původní jazyk a znění; obsah dokumentu není pokynem k provádění úkonů. Stav převodu: **complete_with_review**. Čísla stran označují fyzické pořadí; tištěná čísla zůstávají v přepisu.

---

## Seznam obrázků, grafů, schémat, tabulek a map

| ID | Typ | Původní titulek / technické označení | Locator zdroje | Odkaz na obrázek nebo výřez | Odkaz na místo v přepisu | Stav |
| --- | --- | --- | --- | --- | --- | --- |
| DIAG-001 | DIAG | DIAG-001 | S069, strana 1 | [Otevřít](assets/S069_DIAG-001_p001.png) | [Přepis](#s069-p001) | preserved |
| TAB-001 | TAB | TAB-001 | S069, strana 1 | neukládán – přepis v MD | [Přepis](#tab-001) | přepsáno; viz revizní poznámky |

## Obsah dokumentu

| Stránka | Kapitola |
| --- | --- |
| 1 | [Y. K A U O I E Y R O e m l](#kapitola-001) |
| 1 | [3 R K e R D P o o](#kapitola-002) |
| 1 | [0 A E R R R   V   á r í](#kapitola-003) |
| 1 | [0 K O = Í O V E P ý](#kapitola-004) |
| 1 | [1 U R   Á E O  Ě O](#kapitola-005) |
| 1 | [6 Č M V U f, K O A A N U H 1  2](#kapitola-006) |
| 1 | ↳ [DIAG-001](assets/S069_DIAG-001_p001.png) |
| 1 | ↳ [TAB-001](#tab-001) |

## Přehled extrakce

Zdroj: `S069`. Režim: `full_transcription`. Rozsah: celý zdroj; jednotek 1. Otevřené revizní body: 1. Pokrytí se vztahuje na zachování obsahu; vnitřní text map a schémat zůstává v odkazovaných obrazech. Čas na stranu není vypočten, protože nebyl samostatně měřen celý ruční proces.

## Přepis

---
<a id="s069-p001"></a>
### Zdrojová strana 1

O , S Y É U O Y V H I I Ě O E A é

U S M r o r

P U D K O T R  C V D C Z k  0

D K Ě Ý e a

N K C K Í R I  K  t 2 p

A A M . M L L í

I  IT Š a V S Č U U i ř :

L M T  P S . l ě 1 o

<a id="kapitola-001"></a>
#### Y. K A U O I E Y R O e m l

Í,  M  V s

H D N T O M P P V T K í

U S  É S  T t č

Ý O Ě K ÍT . Í  S V a

R T Y N N S N I

P N Z E K E E A R L

Ó  Z 0 Č E O Á  2

T E V Ř 1 D  M D V í 2

K Z  V IV K Z

H O U U O Ě 1 U Ě  Y n 0 2

E  I U   4 S

C H O Z V B Ž V 2 2

H A Z Ř B B č A P / a

Í I O O   D  É N 5 /

J É N  T N P = O k 2 S 1 5

V V   , Y  N E V D 1 D 8

A  Y S E I D Ř

O O Ř  M V A A S e

R R E S R  T A

P O 2 A T T U

K Í N Ě C  S A T

Y ) M V P  f, V U Á R j u

<a id="kapitola-002"></a>
#### 3 R K e R D P o o

T  Á O  , T N P B S s

V 6 U I d V O O e ls

/ V  T E S Z S O r t m

<a id="kapitola-003"></a>
#### 0 A E R R R   V   á r í

E T  ÍŘ  Í p k č

L D T V  A N m l u ý .

I L O E a, D A Í A e k

M U S O  N Á  r č ta v a

D R. R Ř P T Z N M E o .

A B N K Ž H T f ú d č z

F T P M O I O  V Í

V   O R M N C U L

T  N  N L Ě O E N

H, K Ě Ý Ý 6

S K O U Í  D  N R Ž V Z O

C 5 C A T N U 8

R E K L A Š O Č Í D O O O Í V 1

Í 4 V N Ř H /

V C S  U  K  H I E D L Ť 2

Í A D O V E L O O C

A P I  O U Š 9

N O N N E ŽI Ž S  R E 9

<a id="kapitola-004"></a>
#### 0 K O = Í O V E P ý

IM E  U B Z N  Á D P Ř 1

I K M O    k

Ý N D M L L N D   s O 5,

<a id="kapitola-005"></a>
#### 1 U R   Á E O  Ě O

E 2 O Í U C Á E u  9 V 9

N Ě  M P Ř N o , 0 /

<a id="kapitola-006"></a>
#### 6 Č M V U f, K O A A N U H 1  2

T T e   P D l k  3 K 9

I O Š O  N V IN Z E K a a Í 8

/ V O d Ř  E É v T  9

K  R T T I I O U I R 3 Í 1

I  E H M L O N L o S 2 C  .

I Ž P N  S S A P Z N c  , Ř

I  . C R  V Ě V S n Ě 0 I 9

V Ř  D A N  E a a L 5

O Ý V T N  Á r M 0 T

P ) L Á I Ř Č p m  U 1

I Z E U N V  F Y. Y D N Á Z /

C E A H N  V E y o ý  2 .

Í D  L Č   K E L  v R k N C S I

Ř B N K A A O  E 9

U I U O V Ř E s    9 I

U ( Y V N S H T L e O Č Í

I  B Í O O O T D N 1 E

R  N C I E P D É I O č V I

N Ý L Ž N  Z T S V U D E 7,

T U   D E N O Ě o O C

L O I Á P D O K O B . P d  J /

L N E , Č m T K 9, O 6

L S Á V M ÍC Ě Y E Y V A R T  Š e 4 I

P V Í O m S ř Y 0

IV  IR O A D S Ř B  Ř T P U . I t P 4 N

IN O V 0 o 1 D S R 3 2

I S V A D P  Z H O  2 8 O

E R I R P A U E 3 Í  A  A , L

S  T M O P O   Z K  N . á 8 : 3 R 7

Ú P T T . B  U r R 8 6 5 ja S 2 7

O A  Ž Í P E E Y V k 6 A P I

N  Ř   S  K Á . s H 6 1 r 0 / S

H M Ě A L L H O s v  6  2 k M 0  2

E O U P -  Ý Í B O  5  Ě 9

V ÍN  T R E D Ý N Z D  o 5 5 4  9

D T O A  A V M U S n V   Č E

D O .  V  R Á O r 5 7 7 Ě, N 1

E O É N Z N A  E O Y u O  7 I

O V T IN A R V A 7 5  T  T , C

V H T Ě  E  U K L T H 5 2 6 Ě, 2

Í V   S  N B  V  C  Š E /

O É T J A B Ů ŘI H T ř 2 Z 2 T 6 K

B O O E Á Á A S á I  C 3 I Č 4

R N V Š . V H O Í J T   l N O:  D Š ě

H ÍC H N V A Z  A I e  : V 4 t

P D D I O D O S Y O N c M ČČ: l. ě A I 2 š U

U J É A N A L R  N n  e t  D

O O Y. Z L  Á O V a I I t š R E , id

H K I Z Z K  R A 1 D A 3 R

V H K  M  ÍŘ U É P Y T 5, k 0 i H C 1 a

R E U I O O  d R / r

V V F E T R  V S 6 P 5 a  I 9 H T

D E R P P   9 O H N 3

O C IT R E K F T R e 2 r

U Í D D    H V  L 4 o S

T N K R O A Y M S V M E O 2

B Z Z  U  O I v

E  O A E Z U Y  V ÍC R  A o V S , o N

Ž B 6  O V É C v H 1

O V  C O H A A  O  / h

O P Z  0 Ý A B  U t o C Á 9 c O

Í Y  I (  D 0 N V N A n  H 3

C L V  R V O S T h I N 4 in

S  Y 1  T O L a c N C K

P A U É O S M 2   É U T t R 2 M

Á N U K S J A k i M I

R R  Ý V 7 ÍT N R e n N č.

Z S O  Y R D O F N a M  E . :

P A O  O R S B S jo s O M c í A

A K ÍŘ K V V O P Č r m

O  T N A D U O A E r ň  T  a

Ý Č S O C Z   S p a d: 1  p e V

Y S O S R O  R  O  S 2 D

H N U E T IN Á M ý D a  : z

C H E A V Č P K B É H  ř Ě 5 O  ú O

H Ě O V D N A n š ú M 9 y

: Í Ý R H   Ú R m O V É U d b í

P N N S N  C S N á í  2 V v n N

R O E  Ě 0  O  ě m n : a

Í U M T  I Y E U E K v  O ál

E L T 5 N b r ts r B

N T U Y K B T C Í R , Ř N o o e o D  t

E A D N Š 0 Í  A p T t o s

S ÍN H T Í Š  K  B T N O v s t

Z Ž L Y  R  K V d  a e O s a O

D O  T  E O R U O A L o c. í t

L U  Í O N Á Y O D t v V m a

P S N L O Á R N  I P z B s n k

Í E Z E M O N T K I

Ý N A E O K U  T Ě V Í S

O V O IV C Ý  I I

K E L D D Z P S N A F  F

V IN S O ÍJ N

C J E   N N T R  I

V Á    O R A E A E. D

I V L A É U P D

G ÍC V K P V  C O

H ÍN O D E N H S Á E ÍN

O O A R O T A O E  Z  Y A M

E T V A E

L Z P  I V Z V  Ě V K

O O D V Í S  N D Z

O I A N D   Ě IN

D N E O R T O E A

V Ž R A , T V U K

H H D E m T Ě O S H Y E Y

O D O P P D Š O M R

C E 5 T T A Í H Z

Ř R 4 U ŘI J ÍŘ Ý E ČI R O O

U H A L U

<a id="diag-001"></a>
[DIAG-001](assets/S069_DIAG-001_p001.png)

TECHNOLOGICKÝ POSTUP:

PŘED ZAHÁJENÍ ZEMNÍCH PRACÍ BUDE PROVEDEN SVISLÝ ŘEZ ŽIVIČNÝMI VRSTVAMI V KRAJÍCH RÝHY. PO

PROVEDENÍ VLASTNÍ RÝHY A ULOŽENÍ VODOVODNÍHO POTRUBÍ V KOMUNIKACÍCH, DLE TYPOVÉHO PODKLADU,

BUDE PROVEDEN HUTNĚNÝ ZÁSYP Z VHODNÉHO MATERIÁLU (NAPŘ. ŠTĚRKOPÍSEK FR. 0/63) NA KÓTU MINUS

0,45m OD NIVELETY SOUČASNÉ VOZOVKY. V TÉTO ÚROVNI BUDE PROVEDENA KONTROLA MÍRY ZHUTNĚNÍ, KDY

ZHOTOVITEL DOLOŽÍ INVESTOROVI AKCE ZJIŠTĚNOU MINIMÁLNÍ HODNOTU MODULU PŘETVÁRNOSTI ZE STATICKÉ

ZATĚŽOVACÍ ZKOUŠKY DESKOU (Z DRUHÉHO ZATĚŽOVACÍ CYKLU) Edef,2 = 45 MPa, OVĚŘENOU ZKOUŠKOU

AUTORIZOVANOU LABORATOŘÍ S CERTIFIKACÍ. V PŘÍPADĚ ŽIVIČNÝCH KOMUNIKACÍ BUDE PO PŘEVZETÍ TAKTO

PŘIPRAVENÉ SP ÁRY TECHNICK ÝM DOZOREM INVESTORA PROVEDENA VLASTN Í OBNOVA KONSTRUKCE VOZOVKY.

VLASTNÍ KONSTRUKCE VOZOVKY BUDE ZAHÁJENA PODSYPNOU VRSTVOU ZE ŠTĚRKODRTI, S OVĚŘENÍM MÍRY

JEJÍHO ZHUTNĚNÍ DLE ČSN 721006 PŘÍLOHA A. - PŘEDEPSANÁ MINIMÁLNÍ HODNOTA Edef,2 = 110 MPa. V

PŘÍPADĚ PROVIZORNÍ ÚPRAVY RÝHY PO DOBU VÝSTAVBY, DO FINALIZACE ŽIVIČNÝMI VRSTVAMI, BUDE POVRCH

RÝHY VYSPRAVEN ŠTĚRKODRTÍ NA AKTUÁLNÍ NIVELETU VOZOVKY. PO POLOŽENÍ LOŽNÍ VRSTVY ŽIVIČNÉ SMĚSI

BUDE STÁVAJÍCÍ OBRUSNÁ VRSTVA VYFRÉZOVÁNA DLE PŘÍČNÉHO ŘEZU A NÁSLEDNĚ ZAŘÍZNUTA DVĚMA SVISLÝMI

ŘEZY, VEDENÝMI 0,50m OD OBOU OKRAJŮ RÝHY. TAKTO VYTVOŘENÁ VODOROVNÁ SPÁRA BUDE PEČLIVĚ

OČIŠTĚNA A OPATŘENA SPOJOVACÍM POSTŘIKEM BEZPROSTŘEDNĚ PŘED ULOŽENÍM OBRUSNÉ VRSTVY. DO

PROVEDENÍ FINÁLNÍ OBRUSNÉ VRSTVY ZABRÁNÍ ZHOTOVITEL VNIKU DEŠŤOVÝCH VOD DO KONSTRUKCE

KOMUNIKACE. STYK NOVÉ OBRUSNÉ VRSTVY S VOZOVKOU BUDE NÁSLEDNĚ PROŘÍZNUT A OPATŘEN ZÁLIVKOU ZA

HORKA Z MODIFIKOVAN ÉHO ASFALTU AMe 65, NA HLOUBKU 30mm.

DOKUMENTACE PRO VYDÁNÍ SPOLEČNÉHO POVOLENÍ STAVBY

<a id="tab-001"></a>
**TAB-001**
| Poznámka extrakce: sloupec 1 | Poznámka extrakce: sloupec 2 | Poznámka extrakce: sloupec 3 | Poznámka extrakce: sloupec 4 | Poznámka extrakce: sloupec 5 | Poznámka extrakce: sloupec 6 | Poznámka extrakce: sloupec 7 |
| --- | --- | --- | --- | --- | --- | --- |
| zodpovědný projektant<br>Bc. Tomáš Daňsa | ANITAS s.r.o.<br>kancelář Turnovská 21<br>295 01 MNICHOVO HRADIŠTĚ<br>IČO: 257 55 668<br>DIČ: CZ 257 55 668<br>tel.: 326 774 215 |  | vypracoval<br>Roman Rakouský | projekční atelier |  |  |
|  |  |  |  |  |  |  |
| stavební úřad: Mnichovo Hradiště |  | kraj: Středočeský |  | formát | 2A4 | měřítko<br>1:20 |
| Investor : MĚSTO MNICHOVO HRADIŠTĚ, MASARYKOVO NÁMĚSTÍ 1,<br>295 21 MNICHOVO HRADIŠTĚ, IČ 00238309, DIČ CZ 00238309 |  |  |  |  |  |  |
|  |  |  |  | účel | DSPS |  |
|  |  |  |  |  |  | číslo paré |
| VODOVOD ČERNÁ SILNICE VČETNĚ PROPOJENÍ S ULICÍ K VOŘECHU |  |  |  |  |  |  |
|  |  |  |  | datum | 11/2022 |  |
| místo stavby : parc.č. 2439/1, 2439/13, 2446/2, 1992/77, 2446/7, 1992/159, 1992/95, 1992/186<br>katastrální území : Mnichovo Hradiště |  |  |  | č.výkresu | D5a |  |
| OBNOVA KONSTRUKCE SILNICE II.TŘ. |  |  |  | zak.číslo | 85/22 |  |

f

e

d

E


## Pokrytí zdrojových jednotek

| unit_id | Source locator | Output anchor/file | Status | Unpreserved fraction u_i | Basis | Limitation / review_id |
| --- | --- | --- | --- | --- | --- | --- |
| S069-U001 | strana 1 | [Přepis](#s069-p001) | complete | 0 | původní text / buňky / obrazové odkazy | viz revizní poznámky |

## Místa k revizi

- **REV-001 (medium) — S069:** Text v kresbě je zachován obrazově; textové oblasti a tabulky byly vytěženy parserem. Dodatečný průchod zahrnul i nativní text mimo tyto oblasti a obrazové výřezy. Členění složitých výkresových razítek vyžaduje revizi. Ověřit označené místo proti původnímu zdroji.

## Protokol metod, ověření a omezení

Použity byly lokální metody: PDFium pro text a obrazy, pdfplumber pro rozvržení a tabulky, Microsoft Word pro ověřené DOCX stránky, Windows.Media.Ocr pro vybrané skeny a čtení CFB/Word struktur pro staré DOC podle skutečného formátu zdroje. Ne všechny metody se týkají každého souboru. Celostránkové rastrové snímky nebyly ukládány. Původní fotografie složené z PDF dlaždic jsou rekonstruovány z původních obrazových objektů bez vykreslování stránky. Pokusy, parametry a selhání jsou zachované mimo dodaný balíček.


| Method run | Tool / version | Scope | Time (s) | Result / output use |
| --- | --- | --- | --- | --- |
| LOCAL-S069_layout | pdfplumber / 0.11.9 | all / source-evidence scope | 0.2674107998609543 | ok / True |
| LOCAL-S069_native | pypdfium2 / 5.14.0 | all / source-evidence scope | 0.014059399953112006 | ok / True |

## Sources and their roles

| Source / identification | Role | Contribution to this document | Authority / limitations |
| --- | --- | --- | --- |
| [Původní zdroj](<C:/Users/kater/Downloads/jihozapadni-mesto-prilohy.zip>) — P04 Přehled projektů v území/7_BD v cestkach, Stavokombinat invest, 2023/PD_vodovod_CERNA_SILNICE/PD_vodovod_ČERNÁ_SILNICE/D5a.pdf | Obsahový zdroj | Text, tabulky a grafika | Původní soubor; SHA-256 v metadatech. |
| [document-converting](C:/Users/kater/repo/urbiq/urbiq-AI-LAB/urbiq-skills/document-converting/SKILL.md) | Pravidla převodu | Režim, obrazy, lokátory a kontrola | v261027-v11; kandidátní skill. |
| Potvrzení uživatele v aktuálním chatu | Rozsah a režim | full_transcription všech vstupů | Přesná URL není dostupná. |
| markdown-metadata-standards; date-versioned-artifacts | Procedurální pravidla | Metadata a nové verzované balíčky | Nejsou důkazem správnosti zdrojového obsahu. |
