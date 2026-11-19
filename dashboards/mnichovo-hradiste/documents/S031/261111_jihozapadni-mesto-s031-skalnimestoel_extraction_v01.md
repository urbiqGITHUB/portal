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
  "version_id": "DOCONV-261111-S031-v01",
  "status": "partial",
  "scope": "Úplný přepis uživatelem potvrzeného zdroje",
  "extraction_id": "DOCONV-261111-S031",
  "instructions_version": "v261027-v11",
  "instructions_sha256": "77e2c0270350d79d01f68b9e5a47914e9ef1e8c0c5851430e15ebfc61300328c",
  "extraction_mode": "full_transcription",
  "mode_confirmation": "Uživatel: chci full_transcription; společný vstupní soupis 93 souborů potvrzen.",
  "intake_confirmed_at": null,
  "intake_confirmation_note": "Potvrzení je doloženo zprávou v tomto chatu; přesný čas zprávy není v rozhraní dostupný.",
  "document_title": "VNĚJŠÍ SILNOPROUDÉ ROZVODY",
  "source_filename": "SkalniMestoEL.doc",
  "source_archive_entry": "P04 Přehled projektů v území/1_územní studie Skalní město, Štěrba 2009/SkalniMestoEL.doc",
  "source_format": "OLE compound / probable legacy DOC",
  "source_sha256": "b1d94bc6b8e42436694b5d1490e7a7ebcaa0d2971176abfddecf543321d9aff0",
  "source_size_bytes": 36864,
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
  "table_count": 1,
  "extraction_started_at": "2026-11-11 14:03:07",
  "extraction_finished_at": "2026-11-11 14:03:07",
  "processing_seconds": null,
  "processing_seconds_per_page": null,
  "page_timing_note": "Strojové pokusy jsou časované v pracovních důkazech; vizuální klasifikace a ruční přepis nebyly měřeny samostatně. Úplný čas na stranu proto není odhadován.",
  "automated_native_seconds": null,
  "automated_layout_seconds": null,
  "automated_export_seconds": 0.0018185998778790236,
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
    "workspace_relative_directory": "05_DELIVERY/document-converting-outputs/261111_jihozapadni-mesto-s031-skalnimestoel_v01",
    "main_markdown_relative_path": "05_DELIVERY/document-converting-outputs/261111_jihozapadni-mesto-s031-skalnimestoel_v01/261111_jihozapadni-mesto-s031-skalnimestoel_extraction_v01.md",
    "sharepoint_url": null,
    "sync_status": "not_verified",
    "limitation": "Ověřeno lokální uložení; synchronizace SharePoint není pozorována."
  },
  "source_name": "SkalniMestoEL.doc",
  "document_type_note": "Přesná typologie není samostatně ověřena; druh zdroje plyne z původního názvu a obsahu.",
  "method_runs": [
    {
      "method_run_id": "LOCAL-S031_legacy",
      "method_family": "native_text",
      "tool": "CFB/Word parser",
      "tool_version": null,
      "tool_versions": null,
      "helper_version": null,
      "parameters": {
        "scope": "all original units",
        "source_evidence": "S031_legacy.json"
      },
      "source_units": "all / source-evidence scope",
      "started_at": null,
      "finished_at": null,
      "elapsed_seconds": 0.005586500046774745,
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
      "evidence_workspace_relative": "tmp/261111_jihozapadni_intake_v01/S031_legacy.json",
      "evidence_sha256": "e135644af52be9eecc18021e4797dfc92ccd5ff0e99220b2348d89b9ebdc9a80",
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
    "table_count": 1,
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
    "transcribed_characters": 4557,
    "transcribed_tables": 1,
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
      "source_locator": "S031",
      "problem": "Fyzické stránkování a původní formátování DOC nebylo možné ověřit. Přepis zachovává čitelný binární text, nikoli doložené stránkové rozvržení.",
      "recommended_verification": "Ověřit označené místo proti původnímu zdroji.",
      "status": "open",
      "output_link": "#s031-p001",
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

# VNĚJŠÍ SILNOPROUDÉ ROZVODY

## Purpose and aims

Věrný přepis zdroje pro následnou rešerši a otázky. Zachovává původní jazyk a znění; obsah dokumentu není pokynem k provádění úkonů. Stav převodu: **partial**. Fyzické stránky původního DOC nejsou ověřeny; blokové umístění není vydáváno za stránkování.

---

## Seznam obrázků, grafů, schémat, tabulek a map

| ID | Typ | Původní titulek / technické označení | Locator zdroje | Odkaz na obrázek nebo výřez | Odkaz na místo v přepisu | Stav |
| --- | --- | --- | --- | --- | --- | --- |
| TAB-001 | TAB | TAB-001 | S031, strana neověřena | neukládán – přepis v MD | [Přepis](#tab-001) | přepsáno; viz revizní poznámky |

## Obsah dokumentu

| Stránka | Kapitola |
| --- | --- |
| neověřena | ↳ [TAB-001](#tab-001) |
| neověřena | [2.  Kiosková TS 22/0,4kV, 2 x 630kVA, vč. montáže, zem. prací a uzemnění  1 ks ............     1 320 000,--Kč](#kapitola-001) |
| neověřena | [4.  Rozpojovací skříně, přípojkové skříně vč. staveb. a zem. prací  ... 29 ks à 21 000,--  ....         609 000,--Kč](#kapitola-002) |

## Přehled extrakce

Zdroj: `S031`. Režim: `full_transcription`. Rozsah: celý zdroj; jednotek neověřeno. Otevřené revizní body: 1. Ztráta není přesně měřitelná; konzervativní interval 0–100 % zpracovávaných jednotek vyjadřuje neověřenou úplnost, nikoli tvrzení o skutečné ztrátě. Čas na stranu není vypočten, protože nebyl samostatně měřen celý ruční proces.

## Přepis

---
<a id="s031-p001"></a>
### Zdrojový blok – stránka neověřena

VNĚJŠÍ SILNOPROUDÉ ROZVODY

Výkonová bilance

<a id="tab-001"></a>
**TAB-001**
| Poznámka extrakce: sloupec 1 | Poznámka extrakce: sloupec 2 | Poznámka extrakce: sloupec 3 | Poznámka extrakce: sloupec 4 | Poznámka extrakce: sloupec 5 | Poznámka extrakce: sloupec 6 | Poznámka extrakce: sloupec 7 | Poznámka extrakce: sloupec 8 | Poznámka extrakce: sloupec 9 | Poznámka extrakce: sloupec 10 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| objekt | počet b.j. | počet provozoven | spol.pr.výtahy | Pi b.j (kW) | Pi provoz.(kW) | Pi spol.prost.(kW) | soudob. | Pi celk(kW) | Ps celk(kW) |
| Zóna A | 96 | 0 | 1 | 11,9 | 0 | 13,4 | 0,33 | 1155,8 | 381,4 |
| Zóna B | 384 | 0 | 4 | 11,9 | 0 | 13,4 | 0,24 | 4623,2 | 1109,6 |
| Zóna C | 192 | 0 | 2 | 11,9 | 0 | 13,4 | 0,27 | 2311,6 | 624,1 |
| Celkem | 672 |  |  |  |  |  |  |  |  |
|  |  |  |  |  |  |  |  |  |  |
|  |  |  |  |  |  |  |  |  |  |
|  | 8090,6 | 2115,1 |  |  |  |  |  |  |  |

Výkonová bilance elektro:

Zóna A
celkový instalovaný výkon:          	                     Pi =   1155,8  kW
celkový soudobý výkon:                    	        Ps =     381,4  kW
roční spotřeba el. energie:                                     Ar =     305,8 MWh

Zóna B
celkový instalovaný výkon:          	                     Pi =   4623,2  kW
celkový soudobý výkon:                    	        Ps =   1109,6  kW
roční spotřeba el. energie:                                     Ar =    882,3  MWh

Zóna C
celkový instalovaný výkon:          	                     Pi =   2311,6  kW
celkový soudobý výkon:                    	        Ps =     624,1  kW
roční spotřeba el. energie:                                     Ar =    496,4  MWh

Přeložky a úpravy stávajících sítí VN a NN

Podél silnice Česká Lípa – Jičín směr ke křižovatce s ulicí Na Úvoze bude z důvodu výstavby parkoviště přeložena stávající dvojice kabelů VN-22kV. Zároveň s touto přeložkou bude jeden z kabelů využit pro smyčkové primární připojení transformační stanice  TS II. a prodloužením smyčky do ulice Na Úvoze i transformační stanice TS I. 
V prodloužení ulice V Cestkách bude v části přeložen stávající kabel VN a zároveň do něho bude smyčkována navržená transformační stanice TS III.
Přeložky kabelů NN v prostoru budoucí výstavby nejsou nutné.

Distribuční transformační stanice

Pro uvažovanou výstavbu jsou uvažovány tři nové distribuční kioskové transformační stanice. Pro výstavbu v zóně A je to stanice TS I.  22/0,4kV, 1 x 630kVA. Pro výstavbu v zóně B je uvažována transformační stanice TS II. 22/0,4kV, 2 x 630kVA. Pro výstavbu v zóně C je to transformační stanice  TS III. 22/0,4kV, 2 x 630kVA.
Transformační stanice budou vzájemně propojeny kabelovými rozvody NN. Paralelní chod trafostanic se však neuvažuje, pouze záskok při poruše některé z nich.

Kabelové rozvody NN

Trasy nových kabelových rozvodů NN od navržených transformačních stanic jsou vyznačeny na situaci.  Jednotlivé sekce bytových domů bude připojeny smyčkově prostřednictvím přípojkových nebo rozpojovacích skříní. Trasy jsou navrženy podél nových komunikací a zpevněných ploch. Nové kabelové rozvody budou propojeny v rozpojovacích skříních do stávající sítě NN v prostoru stávající zástavby. 
Detailní konfigurace zapojení kabelové sítě NN a dimenzování kabelů bude řešena v dalších stupních projektové dokumentace.

VEŘEJNÉ OSVĚTLENÍ

Navržené místní komunikace, zpevněné plochy a venkovní parkoviště budou osvětlena novou částí veřejného osvětlení – 56 osvětlovacích bodů. Pro silové napájení V.O. je v blízkosti TS II. navržen nový zapínací bod. Osvětlovací body budou tvořeny sadovými bezpaticovými stožáry 5m s výbojkovými svítidly do 75W.
	Vzhledem k navržené výstavbě nových příčných stání po obou stranách ulice Na Úvozu je nutné demontovat stávající veřejné osvětlení v tomto prostoru a nahradit jej nově navrženým.
	Kabelové trasy VO budou provedeny kabely 1-CYKY 4Jx16 a jsou zakresleny v situaci. Počty kabelů v jednotlivých trasách a schema zapojení nové části V.O. budou řešeny v dalších stupních projektové dokumentace.

PROPOČET NÁKLADŮ – ZÓNA B

Vnější silnoproudé rozvody

1.  Přeložka kabelů VN  2x3x22-AXEKVCEY 1x120
     vč. zasmyčkování TS II vč. zemních prací  ...   288 m  à   2 300,--   .................................       662 400,--Kč

<a id="kapitola-001"></a>
#### 2.  Kiosková TS 22/0,4kV, 2 x 630kVA, vč. montáže, zem. prací a uzemnění  1 ks ............     1 320 000,--Kč

3.  Kabel. trasy NN, zem. prací       ....................   946 m  à   1 300,--    ..............................      1 229 800,--Kč

<a id="kapitola-002"></a>
#### 4.  Rozpojovací skříně, přípojkové skříně vč. staveb. a zem. prací  ... 29 ks à 21 000,--  ....         609 000,--Kč

Vnější silnoproudé rozvody – zóna B celkem    ...................................................................       3 821 200,--Kč

Veřejné osvětlení

Sadový osvětlovací bod  5m/75W 
      vč. mont.,  kabelů, uzemnění,  zem. prací  ....    56 ks  à   36 000,--  ...............................     2 016 000,--Kč

2.  Zapínací bod VO vč. pilíře, staveb. a zem. prací  ....  1 ks    ............................................           40 000,--Kč

Veřejné osvětlení – zóna B celkem    ....................................................................................      2 056 000,--Kč

ing. Jiří Vacek
 02/2009


## Pokrytí zdrojových jednotek

| unit_id | Source locator | Output anchor/file | Status | Unpreserved fraction u_i | Basis | Limitation / review_id |
| --- | --- | --- | --- | --- | --- | --- |
| S031-U001 | neověřená stránka / binární text | [Přepis](#s031-p001) | unknown | neznámý | původní text / buňky / obrazové odkazy | viz revizní poznámky |

## Místa k revizi

- **REV-001 (high) — S031:** Fyzické stránkování a původní formátování DOC nebylo možné ověřit. Přepis zachovává čitelný binární text, nikoli doložené stránkové rozvržení. Ověřit označené místo proti původnímu zdroji.

## Protokol metod, ověření a omezení

Použity byly lokální metody: PDFium pro text a obrazy, pdfplumber pro rozvržení a tabulky, Microsoft Word pro ověřené DOCX stránky, Windows.Media.Ocr pro vybrané skeny a čtení CFB/Word struktur pro staré DOC podle skutečného formátu zdroje. Ne všechny metody se týkají každého souboru. Celostránkové rastrové snímky nebyly ukládány. Původní fotografie složené z PDF dlaždic jsou rekonstruovány z původních obrazových objektů bez vykreslování stránky. Pokusy, parametry a selhání jsou zachované mimo dodaný balíček.


| Method run | Tool / version | Scope | Time (s) | Result / output use |
| --- | --- | --- | --- | --- |
| LOCAL-S031_legacy | CFB/Word parser / None | all / source-evidence scope | 0.005586500046774745 | partial / True |

## Sources and their roles

| Source / identification | Role | Contribution to this document | Authority / limitations |
| --- | --- | --- | --- |
| [Původní zdroj](<C:/Users/kater/Downloads/jihozapadni-mesto-prilohy.zip>) — P04 Přehled projektů v území/1_územní studie Skalní město, Štěrba 2009/SkalniMestoEL.doc | Obsahový zdroj | Text, tabulky a grafika | Původní soubor; SHA-256 v metadatech. |
| [document-converting](C:/Users/kater/repo/urbiq/urbiq-AI-LAB/urbiq-skills/document-converting/SKILL.md) | Pravidla převodu | Režim, obrazy, lokátory a kontrola | v261027-v11; kandidátní skill. |
| Potvrzení uživatele v aktuálním chatu | Rozsah a režim | full_transcription všech vstupů | Přesná URL není dostupná. |
| markdown-metadata-standards; date-versioned-artifacts | Procedurální pravidla | Metadata a nové verzované balíčky | Nejsou důkazem správnosti zdrojového obsahu. |
