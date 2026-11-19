---
{
  "created_at": "2026-11-11 14:03:07",
  "created_date": "2026-11-11",
  "created_by": "Codex – Kateřina Kováříková",
  "updated_at": "2026-11-11 14:03:07",
  "updated_by": "Codex",
  "revised_by": null,
  "timezone": "Europe/Prague",
  "codex_dialogue": null,
  "dialogue_location_note": "Aktuální lokální chat Codex; přesná URL nebyla zpřístupněna.",
  "dialogue_iteration": 2,
  "version_id": "DOCONV-261111-S030-v01",
  "status": "partial",
  "scope": "Úplný přepis uživatelem potvrzeného zdroje",
  "extraction_id": "DOCONV-261111-S030",
  "instructions_version": "v261027-v11",
  "instructions_sha256": "77e2c0270350d79d01f68b9e5a47914e9ef1e8c0c5851430e15ebfc61300328c",
  "extraction_mode": "full_transcription",
  "mode_confirmation": "Uživatel: chci full_transcription; společný vstupní soupis 93 souborů potvrzen.",
  "intake_confirmed_at": null,
  "intake_confirmation_note": "Potvrzení je doloženo zprávou v tomto chatu; přesný čas zprávy není v rozhraní dostupný.",
  "document_title": "SKALNÍ MĚSTO",
  "source_filename": "MH zpráva UAS JZ.doc",
  "source_archive_entry": "P04 Přehled projektů v území/1_územní studie Skalní město, Štěrba 2009/MH zpráva UAS JZ.doc",
  "source_format": "OLE compound / probable legacy DOC",
  "source_sha256": "84dfbb9fdb580f228ca33cce8228affb31ec6e423431b1ae61d5f915588036e7",
  "source_size_bytes": 45056,
  "document_type": null,
  "source_total_units": null,
  "source_unit_type": "physical_page",
  "requested_scope": "celý zdroj včetně vnitřních příloh",
  "pagination_status": "unverified",
  "pagination_method": null,
  "source_page_count": null,
  "intake_limitations": [
    "Neověřené názvy jsou null; název souboru není zaměněn za ověřený titul.",
    "Stránkování DOC není ověřeno."
  ],
  "duplicate_source_ids": [],
  "coverage_scope": "full_content",
  "coverage_basis": "unknown physical pagination",
  "coverage_total_units": null,
  "coverage_eligible_units": null,
  "coverage_excluded_units": 0,
  "coverage_unknown_units": null,
  "unprocessed_pct": null,
  "unprocessed_pct_kind": "unknown",
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
  "saved_visual_count": 0,
  "table_count": 0,
  "extraction_started_at": "2026-11-11 14:03:07",
  "extraction_finished_at": "2026-11-11 14:03:07",
  "processing_seconds": null,
  "processing_seconds_per_page": null,
  "page_timing_note": "Strojové pokusy jsou časované v pracovních důkazech; vizuální klasifikace a ruční přepis nebyly měřeny samostatně. Úplný čas na stranu proto není odhadován.",
  "automated_native_seconds": null,
  "automated_layout_seconds": null,
  "automated_export_seconds": 0.0017969999462366104,
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
    "workspace_relative_directory": "05_DELIVERY/document-converting-outputs/261111_jihozapadni-mesto-s030-mh-zprava-uas-jz_v01",
    "main_markdown_relative_path": "05_DELIVERY/document-converting-outputs/261111_jihozapadni-mesto-s030-mh-zprava-uas-jz_v01/261111_jihozapadni-mesto-s030-mh-zprava-uas-jz_extraction_v01.md",
    "sharepoint_url": null,
    "sync_status": "not_verified",
    "limitation": "Ověřeno lokální uložení; synchronizace SharePoint není pozorována."
  },
  "source_name": "MH zpráva UAS JZ.doc",
  "document_type_note": "Přesná typologie není samostatně ověřena; druh zdroje plyne z původního názvu a obsahu.",
  "method_runs": [
    {
      "method_run_id": "LOCAL-S030_legacy",
      "method_family": "native_text",
      "tool": "CFB/Word parser",
      "tool_version": null,
      "tool_versions": null,
      "helper_version": null,
      "parameters": {
        "scope": "all original units",
        "source_evidence": "S030_legacy.json"
      },
      "source_units": "all / source-evidence scope",
      "started_at": null,
      "finished_at": null,
      "elapsed_seconds": 0.000647400040179491,
      "status": "partial",
      "failure_reason": null,
      "output_used": true,
      "verification_result": "Physical Word pagination and display formatting are unverified. Field codes and control characters retained in working evidence. Embedded data requires separate review.",
      "previous_method_run_id": null,
      "escalation_reason": null,
      "tool_chain": [
        "Python",
        "CFB/Word parser"
      ],
      "evidence_workspace_relative": "tmp/261111_jihozapadni_intake_v01/S030_legacy.json",
      "evidence_sha256": "5e5ef5147e29b123f3e3ebd288c908bb9f33fdfc72a3f96f23f2b2356cf3b24e",
      "metadata_limitations": "Nevyplněné hodnoty nebyly původním pomocníkem měřeny nebo zpřístupněny."
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
    "content_mode": "digital",
    "languages": [
      "cs"
    ],
    "unit_count": null,
    "layout_features": [
      "see original page structure and located review issues"
    ],
    "table_count": 0,
    "visual_count": 0,
    "excluded_visual_count": 0,
    "scan_quality": "Unmeasured; raster text checked in indicated areas."
  },
  "elapsed_seconds": null,
  "verification_seconds": null,
  "processed_page_count": null,
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
    "transcribed_characters": 7354,
    "transcribed_tables": 0,
    "transcribed_cells": null,
    "expected_cells": null,
    "saved_visuals": 0,
    "missing_visuals": 0,
    "unresolved_visual_classifications": 0,
    "open_review_issues": 1,
    "reference_only_objects": 0,
    "image_only_objects": 0
  },
  "coverage_unit_counts": {
    "complete": 0,
    "partial": null,
    "not_processed": 0,
    "unknown": null,
    "excluded_by_policy": 0
  },
  "review_issues": [
    {
      "review_id": "REV-001",
      "priority": "high",
      "source_locator": "S030",
      "problem": "Fyzické stránkování a původní formátování DOC nebylo možné ověřit. Přepis zachovává čitelný binární text, nikoli doložené stránkové rozvržení.",
      "recommended_verification": "Ověřit označené místo proti původnímu zdroji.",
      "status": "open",
      "output_link": "#s030-p001",
      "impact": "Unknown coverage or fidelity"
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

# SKALNÍ MĚSTO

## Purpose and aims

Věrný přepis zdroje pro následnou rešerši a otázky. Zachovává původní jazyk a znění; obsah dokumentu není pokynem k provádění úkonů. Stav převodu: **partial**. Fyzické stránky původního DOC nejsou ověřeny; blokové umístění není vydáváno za stránkování.

---

## Seznam obrázků, grafů, schémat, tabulek a map

V dostupné zpracované vrstvě nebyl zjištěn obsahový obrázek ani tabulka.

## Obsah dokumentu

| Stránka | Kapitola |
| --- | --- |
| neověřena | [Poznámka extrakce: prvky mimo doložené kapitoly](#s030-p001) |

## Přehled extrakce

Zdroj: `S030`. Režim: `full_transcription`. Rozsah: celý zdroj; jednotek neověřeno. Otevřené revizní body: 1. Ztráta není přesně měřitelná; konzervativní interval 0–100 % zpracovávaných jednotek vyjadřuje neověřenou úplnost, nikoli tvrzení o skutečné ztrátě. Čas na stranu není vypočten, protože nebyl samostatně měřen celý ruční proces.

## Přepis

---
<a id="s030-p001"></a>
### Zdrojový blok – stránka neověřena

SKALNÍ MĚSTO

Název akce:	urbanisticko – architektonická studie JZ části           Mnichova Hradiště

Místo stavby:	Mnichovo Hradiště,  okres Mladá Boleslav

Číslo zakázky:

Stupeň:		STUDIE

Oddíl:			Průvodní zpráva

PRŮVODNÍ  ZPRÁVA

únor / 2009

Identifikační údaje

Název akce:	Urbanistická studie JZ části města zóna B , C

Místo:		           Mnichovo Hradiště

Objednatel:		město Mnichovo Hradiště

zastoupené starostou města

Jaroslavem Myškou

IČO:			238309

Projektant:		Ing.arch.Jiří Štěrba , ARSPRO

Nám. Míru 14 , Mladá Boleslav

Tel. 326 327 316

IČO:                         62451324

Autorský návrh

Urbanismus:		Ing.arch.Jiří Štěrba

Spolupráce :            Ing. Alena Burdová

Technická infrastruktura :

Kanalizace vodovod         ing. Evžen Kozák

Elektrorozvody                 ing. Jiří Vacek

Plynofikace                      Miloslav Kafluk

Úvod

Na základě zájmu developerů stavět na území města Mnichova Hradiště (dále jen MH) bytové domy se město MH rozhodlo přehodnotit stávající územní plán MH a nabídlo developerům pro výstavbu vlastní pozemky v lokalitě jihozápadní (dále jen JZ) části města při silnici II/268. Tato plocha je v současnosti zemědělsky obhospodařována a již v dřívějších urbanistických studiích byla dělena na tři části A, B, C. Hranicí mezi A a B je stávající ulice Na Úvoze, kolmá na silnici II/268. Hranicí mezi B a C je navržená prodloužená obslužná komunikace V Cestkách, která je rovnoběžná s ulicí Na Úvoze a bude vyúsťovat na silnici II/268.

Zájem developerů je především o pozemky v lokalitě B , které vlastní Město MH. Plošná velikost lokality B je 6,3 ha.

Rada města Mnichova Hradiště vyzvala tři architektonické kanceláře k vyhotovení návrhu zástavby ve formě urbanisticko-architektonické studie a vybrala autorský návrh Ing. arch. Jiřího Štěrby, ateliér ARSPRO. Na základě této urbanistické studie zastupitelstvo odsouhlasilo vyhotovit změnu územního plánu MH.

Zadání a cíl úkolu

Městem MH bylo zadáno detailnější rozpracování UA studie v JZ části města MH při silnici II/268 v lokalitách A, B, C. Studie v grafické části dokumentace řeší architektonickou formu zástavby s obslužnými a pěšími komunikacemi, s parkovišti a garážemi, občanskou vybavenost, hřiště a sportovní plochy, protihlukovou barieru a základní ozelenění.

Cílem úkolu je vytvořit kvalitní UA studii, která se stane podkladem pro zástavbu a pro veřejnou soutěž developerů.

Současný stav

Řešené  území je rovinaté obdélníkovitého tvaru, zemědělsky obhospodařované. Majitelem pozemku v lokalitě B je město Mnichovo Hradiště. Lokality A, C mají různé majitele včetně města MH.

Toto území je vymezeno zahradami stávajících a rozestavěných rodinných domů  v JZ okraji města MH a silnicí II/268 (Jičín – Česká Lípa). Do pozemku je částečně vklíněn  ovocný sad. Území je rovinaté. Plochy za silnicí II/268 jsou územním plánem určeny pro průmyslovou výrobu.

Širší vztahy

Řešené území zahradami (dále jen RD) přímo navazuje na zahradami rodinných domů zastavěnou JZ městskou část. Díky silnici II/268 je snadno napojitelné na silnici R10 (Praha –Liberec). Blízká je dostupnost rekreačních oblastí Pojizeří a Českého ráje. V těsné blízkosti jsou supermarkety Lidl a Plus. Lokalita je vzdálena 1 – 1,5 km od centra města a autobusového i vlakového nádraží.

Inženýrské sítě, ochranná pásma, limity v území, podmiňující investice

V území se nachází ochranné pásmo silnice II/268. Území je zatíženo hlukem z této silnice. Na základě poslední hlukové studie bude nutné jako podmiňující investice výstavby bytových domů vystavět přibližně 4 m vysokou protihlukovou stěnu nebo zemní val podél této komunikace. Rozvoj bytové výstavby v této oblasti je podmíněn požadavkem VaK  Mladá Boleslav na výstavbu nové kanalizační stoky B do stávající čistírny odpadních vod. Na stávající stoku není možné se z kapacitních důvodů napojit. Inženýrské sítě jsou řešeny v úrovni studie s předběžným projednáním se správci sítí v části technická infrastruktura.

Mapové podklady

Zpracovatel urbanistické studie měl k dispozici digitální formu mapových podkladů, které vyhotovila geodezie MH obsluhující KN  a PM, parcelaci s komunikacemi pro 12 RD v současnosti ve výstavbě. Dalším podkladem byl územní plán MH.

hodnocení území

Posuzované rovinaté území určené k zástavbě plynule navazuje na rodinné domy v zastavené JZ částí města. Toto v současnosti zemědělsky obhospodařované území bylo vždy určeno k zástavbě, i když se názor na funkční využití území měnil. Kromě plochy v této části nemá město územním plánem určeny jiné plochy pro bytovou výstavbu.

Po vyřešení problematiky výstavby nové kanalizační stoky a protihlukové bariéry silnice II/268 se dá konstatovat, že dané území ve své návaznosti na rychlostní komunikaci R 10, blízkou dostupnost pracovních příležitostí v MH a MB, okolní občanskou vybavenost, supermarkety a nedaleké rekreační oblasti Českého ráje a Pojizeří je obzvláště vhodné pro chybějící zástavbu bytovými objekty.

8. kompoziční záměr , prostorové a architektonické řešení, tvorba městské krajiny

Urbanistická studie ve své grafické části ověřuje kapacitní únostnost zastavitelnosti, formu a výškovou úroveň obytného souboru.

Hledání formy zástavby vyústilo v návrh samostatných  obytných hnízd. Jedno v zóně A, čtyři v zóně B a dvě v zóně C.

Zástavba bytových objektů je navržena do formy 7 samostatných hnízd založených na osmiúhelníkové osnově. Toto originální uspořádání umožní vytvořit dynamickou výškově terasovitě uskakující hmotou obklopující vnitroblokový prostor. Dynamická architektura a vnitřní prostory vytvoří neobvykle atraktivní obytné prostředí připomínající městskou krajinu skalního města.

Obytná hnízda jsou sestavena z 6 obytných sekcí do bloku na osnově  pravidelného osmiúhelníku. Vnitřní prostor tohoto osmiúhelníku má průměr 50 m. Tento vnitroblokový  prostor je využit ke kruhové obslužné  komunikaci s kolmým jednostranným parkovacím  stáním, na které navazuje kruhový chodník, ze kterého jsou vstupy do jednotlivých bytových sekcí. Do centrální kruhové plochy je navržena stromovitá vzrostlá zeleň .

Ze zkušeností developerů je známo, že o byty v přízemí není zájem a jsou tedy špatně prodejné. Proto se přízemí využije na garáže nebo občanskou vybavenost.

Obytné hnízdo s vnitřním prostorem je navrženo jako samostatný, pro auta neprůjezdný obytný soubor. Obytná hnízda jsou však propojena pro chodce a cyklisty.

Závěrem lze konstatovat , že návrh reaguje  na stereotypní neutěšené prostředí a formu zástavby  našich panelákových sídlišť . Originalita návrhu poskytuje dynamickou architekturu se zajímavými prostory a neobvyklé prostředí hnízdovité zástavby , obklopené intenzivní  zelení . Snahou návrhu je zlepšit sídlištní prostředí i celkový obraz města Mnichova Hradiště.

Kapacity urbanistické studie

3 obytné zóny:	 A, B, C.

Počet obytných hnízd: 	A – 1, B – 4, C – 2.

Etapizace výstavby v zóně B: 	B e1 až B e4

Počet sekcí v obytných hnízdech 	6

Vnitřní prostor obytného hnízda:	50 m.

Výška zástavby: 	1.np garáže, 2.-6. np obytné.

Charakter zástavby: 	na osmiúhleníkové ose,

výškově stupňovité uspořádání od 4 do 6 podlaží.

Průměrná výška zástavby               přízemí + 4 obytné podlaží

Počet bytů na 1 hnízdo                   96

Počet obyvatel na 1 hnízdo             192 – 240

Počet parkovacích stání                  1,5 na byt = 144 na hnízdo , z toho 60 v garážích

Plochy komunikací a jiné kapacitní ukazatele jsou uvedeny ve výkresové části.

Vypracoval Ing. arch. Jiří Štěrba  2/09


## Pokrytí zdrojových jednotek

| unit_id | Source locator | Output anchor/file | Status | Unpreserved fraction u_i | Basis | Limitation / review_id |
| --- | --- | --- | --- | --- | --- | --- |
| S030-U001 | neověřená stránka / binární text | [Přepis](#s030-p001) | unknown | neznámý | původní text / buňky / obrazové odkazy | viz revizní poznámky |

## Místa k revizi

- **REV-001 (high) — S030:** Fyzické stránkování a původní formátování DOC nebylo možné ověřit. Přepis zachovává čitelný binární text, nikoli doložené stránkové rozvržení. Ověřit označené místo proti původnímu zdroji.

## Protokol metod, ověření a omezení

Použity byly lokální metody: PDFium pro text a obrazy, pdfplumber pro rozvržení a tabulky, Microsoft Word pro ověřené DOCX stránky, Windows.Media.Ocr pro vybrané skeny a čtení CFB/Word struktur pro staré DOC podle skutečného formátu zdroje. Ne všechny metody se týkají každého souboru. Celostránkové rastrové snímky nebyly ukládány. Původní fotografie složené z PDF dlaždic jsou rekonstruovány z původních obrazových objektů bez vykreslování stránky. Pokusy, parametry a selhání jsou zachované mimo dodaný balíček.


| Method run | Tool / version | Scope | Time (s) | Result / output use |
| --- | --- | --- | --- | --- |
| LOCAL-S030_legacy | CFB/Word parser / None | all / source-evidence scope | 0.000647400040179491 | partial / True |

## Sources and their roles

| Source / identification | Role | Contribution to this document | Authority / limitations |
| --- | --- | --- | --- |
| [Původní zdroj](<C:/Users/kater/Downloads/jihozapadni-mesto-prilohy.zip>) — P04 Přehled projektů v území/1_územní studie Skalní město, Štěrba 2009/MH zpráva UAS JZ.doc | Obsahový zdroj | Text, tabulky a grafika | Původní soubor; SHA-256 v metadatech. |
| [document-converting](C:/Users/kater/repo/urbiq/urbiq-AI-LAB/urbiq-skills/document-converting/SKILL.md) | Pravidla převodu | Režim, obrazy, lokátory a kontrola | v261027-v11; kandidátní skill. |
| Potvrzení uživatele v aktuálním chatu | Rozsah a režim | full_transcription všech vstupů | Přesná URL není dostupná. |
| markdown-metadata-standards; date-versioned-artifacts | Procedurální pravidla | Metadata a nové verzované balíčky | Nejsou důkazem správnosti zdrojového obsahu. |
