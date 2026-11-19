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
  "version_id": "DOCONV-261111-S025-v01",
  "status": "partial",
  "scope": "Úplný přepis uživatelem potvrzeného zdroje",
  "extraction_id": "DOCONV-261111-S025",
  "instructions_version": "v261027-v11",
  "instructions_sha256": "77e2c0270350d79d01f68b9e5a47914e9ef1e8c0c5851430e15ebfc61300328c",
  "extraction_mode": "full_transcription",
  "mode_confirmation": "Uživatel: chci full_transcription; společný vstupní soupis 93 souborů potvrzen.",
  "intake_confirmed_at": null,
  "intake_confirmation_note": "Potvrzení je doloženo zprávou v tomto chatu; přesný čas zprávy není v rozhraní dostupný.",
  "document_title": "SKALNÍ MĚSTO - ZÓNA B",
  "source_filename": "BD_Hradiste.doc",
  "source_archive_entry": "P04 Přehled projektů v území/1_územní studie Skalní město, Štěrba 2009/BD_Hradiste.doc",
  "source_format": "OLE compound / probable legacy DOC",
  "source_sha256": "910487a954a9fac1c33d74c82ead196ae93eb95a50e2f1ace3c18df4798594c9",
  "source_size_bytes": 52224,
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
  "automated_export_seconds": 0.0018456000834703445,
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
    "workspace_relative_directory": "05_DELIVERY/document-converting-outputs/261111_jihozapadni-mesto-s025-bd-hradiste_v01",
    "main_markdown_relative_path": "05_DELIVERY/document-converting-outputs/261111_jihozapadni-mesto-s025-bd-hradiste_v01/261111_jihozapadni-mesto-s025-bd-hradiste_extraction_v01.md",
    "sharepoint_url": null,
    "sync_status": "not_verified",
    "limitation": "Ověřeno lokální uložení; synchronizace SharePoint není pozorována."
  },
  "source_name": "BD_Hradiste.doc",
  "document_type_note": "Přesná typologie není samostatně ověřena; druh zdroje plyne z původního názvu a obsahu.",
  "method_runs": [
    {
      "method_run_id": "LOCAL-S025_legacy",
      "method_family": "native_text",
      "tool": "CFB/Word parser",
      "tool_version": null,
      "tool_versions": null,
      "helper_version": null,
      "parameters": {
        "scope": "all original units",
        "source_evidence": "S025_legacy.json"
      },
      "source_units": "all / source-evidence scope",
      "started_at": null,
      "finished_at": null,
      "elapsed_seconds": 0.0006244000978767872,
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
      "evidence_workspace_relative": "tmp/261111_jihozapadni_intake_v01/S025_legacy.json",
      "evidence_sha256": "8ebc93aea6389a54c20850bc203f4cd4f69c0d6887ae28189f11d5be29342492",
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
    "transcribed_characters": 7074,
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
      "source_locator": "S025",
      "problem": "Fyzické stránkování a původní formátování DOC nebylo možné ověřit. Přepis zachovává čitelný binární text, nikoli doložené stránkové rozvržení.",
      "recommended_verification": "Ověřit označené místo proti původnímu zdroji.",
      "status": "open",
      "output_link": "#s025-p001",
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

# SKALNÍ MĚSTO - ZÓNA B

## Purpose and aims

Věrný přepis zdroje pro následnou rešerši a otázky. Zachovává původní jazyk a znění; obsah dokumentu není pokynem k provádění úkonů. Stav převodu: **partial**. Fyzické stránky původního DOC nejsou ověřeny; blokové umístění není vydáváno za stránkování.

---

## Seznam obrázků, grafů, schémat, tabulek a map

V dostupné zpracované vrstvě nebyl zjištěn obsahový obrázek ani tabulka.

## Obsah dokumentu

| Stránka | Kapitola |
| --- | --- |
| neověřena | [Poznámka extrakce: prvky mimo doložené kapitoly](#s025-p001) |

## Přehled extrakce

Zdroj: `S025`. Režim: `full_transcription`. Rozsah: celý zdroj; jednotek neověřeno. Otevřené revizní body: 1. Ztráta není přesně měřitelná; konzervativní interval 0–100 % zpracovávaných jednotek vyjadřuje neověřenou úplnost, nikoli tvrzení o skutečné ztrátě. Čas na stranu není vypočten, protože nebyl samostatně měřen celý ruční proces.

## Přepis

---
<a id="s025-p001"></a>
### Zdrojový blok – stránka neověřena

SKALNÍ MĚSTO - ZÓNA B

Soupis vegetačních a technických prvků :

listnaté stromy a jehličnaté či stále zelené dřeviny

živé ploty (středně vysoké, ze stále zelených keřů, volně rostoucí)

trávníky (typ : parkový trávník)

dětské hřiště s pískovištěm (menší, městského typu, bez oplocení, 3 herní prvky : houpačka, pérovka a kolotoč a dále malé pískoviště 2x2 m, dopadové plochy pískové)

městský mobiliář (ocelové lavičky s dřevěnými sedáky a opěráky, odpadkové koše a koše na psí exkrementy na tyči k instalaci zabetonováním)

konstrukce pro popínavé rostliny (lehká, kovová, s povrchovou úpravou pozinkováním)

počty vegetačních prvků dle etap (listnaté stromy a jehličnaté dřeviny)

B1e		80 listnatých stromů, z toho 20 jehličnatých dřevin

B2e		40 listnatých stromů, z toho 10 jehličnatých dřevin

B3e		40 listnatých stromů, z toho 10 jehličnatých dřevin

B4e		40 listnatých stromů, z toho 10 jehličnatých dřevin

REZ OV 	26 listnatých stromů, z toho   8 jehličnatých dřevin

ORIENTAČNÍ PROPOČET NÁKLADŮ

celkem		226 listnatých stromů, z toho 58 jehličnatých dřevin

strom typ A (dub)	3.200,- SM 	+ dovoz a práce 900,-    4.100,- x 136	 557.600,-

strom typ B (sakura)1.980,- SM			      900,-    2.880,- x 90      259.200,-

dřevina (douglaska) 2.500,- SM 			      900,-    3.400,- x 58	 197.000,-

mezisoučet									        1.014.000,-

cena za založení živého plotu, včetně výsadby keřů 	980,- 	200m 	             19.600,-

součet 	za vegetační prvky 				              1.033.600,-Kč

cena za založení parkového trávníku á 45,- Kč za 1 m2                            45,- x  55 713 m2

2 507 085,-Kč

počty technických prvků

dětské hřiště s pískovištěm    4 soubory 		230.000,- Kč	         920.000,-

lavička 			           24 ks			3.800,- Kč		91.200,-

odpadkový koš			24ks 			1.100,- Kč		26.400,-

koš na psí exkrementy		16 ks 			1.150,- Kč		18.400,-

součet	za technické prvky 					   1 056 000,- Kč

konstrukce pro popínavky nad 1 parkovacím stání v kruhovém prostoru  28.000,- Kč

konstrukce pro popínavky na 40 x 4 parkovacích stání zóny B	   4 480 000,- Kč

CELKOVÝ PROPOČET NÁKLADŮ ZÓNY B                                 9 076 600,- Kč

specifikace sadovnického materiálu :

pro stromy : obvod rovného průběžného kmene nejméně 14/16 cm, plně zapěstovaná koruna nasazená nejníže ve výšce 220 cm, se zemním balem. Všechny stromy a dřeviny po skupinách (jednotlivá stromořadí, jednotlivé plochy, ….) budou tvarově a výškově shodné. Stromořadí budou založena ze vzrostlých kvalitních alejových stromů, stromy v „hnízdech“ budov budou kategorie kvalitní solitérní stromy. Pro stromy v parkovišti a v blízkosti komunikací budou přijmuta taková technická opatření, aby nedocházelo k poškozování kmenů při parkování vozidel (například kovové zábrany proti najíždění, zvýšený obrubník, …).

pro dřeviny :

plně zapěstované dřeviny vysoké nejméně 200 cm se zemním balem

Technologie ozelenění

Při přípravných pracích je nutné dodržet platnou normu ČSN 83 9061 (dříve ČSN DIN 18 920)  Ochrana stromů, porostů a ploch pro vegetaci při stavebních činnostech. Přípravu půdy vč. složení, rozprostření a upravení předepisuje ČSN DIN 18 915.  Při zakládání trávníkových ploch bude dodržena ČSN DIN 18 917, kde je specifikováno druhové složení osiva, realizace jemných terénních úprav, výsev (termín, množství a způsob zapravení osiva) a popis dokončovací péče o trávník až do stavu převzetí.

Při výsadbě dřevin bude dodržena ČSN DIN 18 916, která definuje požadavky na rostlinný i doplňkový materiál a nároky, způsob, rozsah a termín činností při výsadbě a při dokončovací péči. Při provádění výsadbových a udržovacích prací je nutno dodržovat ochranná pásma sítí technické infrastruktury. Při výsadbě stromů bude dále dodržena norma ČSN DIN 18 918 Technicko – biologická zabezpečovací opatření.

Technologie založení vegetačních úprav

a) Výsadba vzrostlých stromů

Mezi prvořadé podmínky úspěšného ozelenění prostoru patří připravené půdní prostředí, kvalitní rostlinný materiál, pečlivá výsadba se zálivkou, zabezpečení výsadeb proti poškození a především pravidelná a odborná následná péče. Nejvhodnější doba pro výsadbu stromů s kořenovým balem je podzim po opadu listů stromu (expedice od září do zamrznutí půdy) a pak v předjaří (od rozmrznutí půdy do začátku rašení).

Výsadba - postup prací :

Na dno výsadbové jámy se dá vrstva zeminy, která se dobře zhutní. Do středu výsadbové jámy se uloží bal a do dna jámy se zatlučou kůly. Bal se zasype substrátem, který se opět zhutní. Jáma se prolije dostatečným množstvím vody. V případě sesednutí povrchu se doplní substrát. Strom se obalí jutovou bandáží a upevní se ke kůlům pomocí úvazku.

Výsadbová jáma :

Pro zlepšení růstu vysazeného stromku je třeba vykopat jámu, kde budou půdní poměry uměle vylepšeny. Čím je rozměr této jámy větší, tím lepší je růst stromu. Jako minimální rozměr se udává 1m3. Povrch jámy po výsadbě je vhodné zakrýt vhodným mulčem (viz níže).

Půdní substrát :

Jáma se vyplní lehce prokořenitelným vzdušným substrátem s dostatečnou zásobou živin, který je odolný vůči nadměrnému zhutnění. Proto se používají zahradnické substráty s obsahem dobře rozloženého kompostu smíchané s pískem. Ke každému stromu bude přidáno tabletové hnojivo Silvamix (3 ks tablet/1 strom).

Kůly:

Statické zajištění vysazovaného stromu je důležité jako ochrana před větrem, vandaly a před poškozením v důsledku okolního provozu. Používají se dřevěné kůly o průměru 5 - 7 cm minimálně 3 ks k jednomu  listnatému stromu. Při výsadbě musí být kmen stromu ke kůlům připevněn pomocí vazby z popruhu. Vazba musí fixovat strom proti pohybům do stran, ale nesmí bránit pohybu směrem dolů (možné sesedání substrátu). Kůl se zatlouká do dna jámy, nad zemí by měl sahat min. do výšky 1,5 m. Proto se jako dostačující délka kůlu počítá 2,5 m. Kůly se na vrcholech spojí půlkulatými dřevěnými trámky, čímž se zajistí stabilita konstrukce.

Jutová bandáž :

Aby se snížil výpar a zároveň se ochránil kmen stromu proti mechanickému  i mrazovému poškozování v prvních letech po výsadbě, je vhodné použít na kmen jutovou bandáž, která má životnost min. 2 roky.

Kořenové sondy:

Kořenová sonda se zavádí ke kořenovému systému při výsadbě stromu. Sonda má za účel zajistit přístup vzduchu do okolí nově se vytvářejících kořenů a umožnit efektivní závlahu ke kořenům. Nevýhodou je ale možnost vysychání kořenového prostoru při zanedbání pravidelné zálivky. Na kořenové sondy se používají flexibilní perforované trubice o průměru 5-8cm s uzávěrem. Zavádějí se po obvodu kořenového balu a vývod se připevní ke kotevnímu kůlu. Funkčnost sondy je omezená na dobu cca 1 roku. Většinou se ucpe zeminou a její nadzemní část je možné odstranit.

Stromy vysazované do trávníku budou mulčovány borkou tl. 7-10 cm. Vzrostlý strom  musí splňovat následující kritéria : musí být minimálně 2 x ve školce přesazován, kořenový bal musí být dostatečně prokořeněn a musí odpovídat velikosti stromu, strom musí mít zapěstovanou korunku, hustou, rovnoměrně zavětvenou, její tvar by měl odpovídat habitu daného taxonu, obvod rovného kmene bez poškození ve výšce 100 cm – viz osazovací tabulka, u alejových stromů musí být výška nasazení koruny musí být min. 2,5 m.


## Pokrytí zdrojových jednotek

| unit_id | Source locator | Output anchor/file | Status | Unpreserved fraction u_i | Basis | Limitation / review_id |
| --- | --- | --- | --- | --- | --- | --- |
| S025-U001 | neověřená stránka / binární text | [Přepis](#s025-p001) | unknown | neznámý | původní text / buňky / obrazové odkazy | viz revizní poznámky |

## Místa k revizi

- **REV-001 (high) — S025:** Fyzické stránkování a původní formátování DOC nebylo možné ověřit. Přepis zachovává čitelný binární text, nikoli doložené stránkové rozvržení. Ověřit označené místo proti původnímu zdroji.

## Protokol metod, ověření a omezení

Použity byly lokální metody: PDFium pro text a obrazy, pdfplumber pro rozvržení a tabulky, Microsoft Word pro ověřené DOCX stránky, Windows.Media.Ocr pro vybrané skeny a čtení CFB/Word struktur pro staré DOC podle skutečného formátu zdroje. Ne všechny metody se týkají každého souboru. Celostránkové rastrové snímky nebyly ukládány. Původní fotografie složené z PDF dlaždic jsou rekonstruovány z původních obrazových objektů bez vykreslování stránky. Pokusy, parametry a selhání jsou zachované mimo dodaný balíček.


| Method run | Tool / version | Scope | Time (s) | Result / output use |
| --- | --- | --- | --- | --- |
| LOCAL-S025_legacy | CFB/Word parser / None | all / source-evidence scope | 0.0006244000978767872 | partial / True |

## Sources and their roles

| Source / identification | Role | Contribution to this document | Authority / limitations |
| --- | --- | --- | --- |
| [Původní zdroj](<C:/Users/kater/Downloads/jihozapadni-mesto-prilohy.zip>) — P04 Přehled projektů v území/1_územní studie Skalní město, Štěrba 2009/BD_Hradiste.doc | Obsahový zdroj | Text, tabulky a grafika | Původní soubor; SHA-256 v metadatech. |
| [document-converting](C:/Users/kater/repo/urbiq/urbiq-AI-LAB/urbiq-skills/document-converting/SKILL.md) | Pravidla převodu | Režim, obrazy, lokátory a kontrola | v261027-v11; kandidátní skill. |
| Potvrzení uživatele v aktuálním chatu | Rozsah a režim | full_transcription všech vstupů | Přesná URL není dostupná. |
| markdown-metadata-standards; date-versioned-artifacts | Procedurální pravidla | Metadata a nové verzované balíčky | Nejsou důkazem správnosti zdrojového obsahu. |
