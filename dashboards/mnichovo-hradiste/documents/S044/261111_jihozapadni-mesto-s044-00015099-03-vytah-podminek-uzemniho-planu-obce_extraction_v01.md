---
{
  "created_at": "2026-11-11 14:03:09",
  "created_date": "2026-11-11",
  "created_by": "Codex – Kateřina Kováříková",
  "updated_at": "2026-11-11 14:03:09",
  "updated_by": "Codex",
  "revised_by": null,
  "timezone": "Europe/Prague",
  "codex_dialogue": null,
  "dialogue_location_note": "Aktuální lokální chat Codex; přesná URL nebyla zpřístupněna.",
  "dialogue_iteration": 2,
  "version_id": "DOCONV-261111-S044-v01",
  "status": "complete",
  "scope": "Úplný přepis uživatelem potvrzeného zdroje",
  "extraction_id": "DOCONV-261111-S044",
  "instructions_version": "v261027-v11",
  "instructions_sha256": "77e2c0270350d79d01f68b9e5a47914e9ef1e8c0c5851430e15ebfc61300328c",
  "extraction_mode": "full_transcription",
  "mode_confirmation": "Uživatel: chci full_transcription; společný vstupní soupis 93 souborů potvrzen.",
  "intake_confirmed_at": null,
  "intake_confirmation_note": "Potvrzení je doloženo zprávou v tomto chatu; přesný čas zprávy není v rozhraní dostupný.",
  "document_title": null,
  "source_filename": "00015099_03_VYTAH_PODMINEK_UZEMNIHO_PLANU_OBCE.pdf",
  "source_archive_entry": "P04 Přehled projektů v území/6_uzemni studie_US7, GLP, 2025/00015099_03_VYTAH_PODMINEK_UZEMNIHO_PLANU_OBCE.pdf",
  "source_format": "PDF",
  "source_sha256": "a12c26c64a2459e2959afe118fc976ec7fd53543836c9005f007acae9d4a0221",
  "source_size_bytes": 176761,
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
  "review_open_count": 0,
  "visual_policy": "reference_only_all_content_images_tables_by_mode",
  "excluded_visual_policy": "omit_logos_and_decorations_only",
  "full_page_snapshots": false,
  "package_contents_listing": false,
  "excluded_visuals": [],
  "excluded_visual_count": 0,
  "source_visual_occurrences": 0,
  "saved_visual_count": 0,
  "table_count": 0,
  "extraction_started_at": "2026-11-11T13:21:34.635542+01:00",
  "extraction_finished_at": "2026-11-11 14:03:09",
  "processing_seconds": null,
  "processing_seconds_per_page": null,
  "page_timing_note": "Strojové pokusy jsou časované v pracovních důkazech; vizuální klasifikace a ruční přepis nebyly měřeny samostatně. Úplný čas na stranu proto není odhadován.",
  "automated_native_seconds": 0.022755800047889352,
  "automated_layout_seconds": 0.9407641000580043,
  "automated_export_seconds": 0.06825480004772544,
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
    "workspace_relative_directory": "05_DELIVERY/document-converting-outputs/261111_jihozapadni-mesto-s044-00015099-03-vytah-podminek-uzemniho-planu-obce_v01",
    "main_markdown_relative_path": "05_DELIVERY/document-converting-outputs/261111_jihozapadni-mesto-s044-00015099-03-vytah-podminek-uzemniho-planu-obce_v01/261111_jihozapadni-mesto-s044-00015099-03-vytah-podminek-uzemniho-planu-obce_extraction_v01.md",
    "sharepoint_url": null,
    "sync_status": "not_verified",
    "limitation": "Ověřeno lokální uložení; synchronizace SharePoint není pozorována."
  },
  "source_name": "00015099_03_VYTAH_PODMINEK_UZEMNIHO_PLANU_OBCE.pdf",
  "document_type_note": "Přesná typologie není samostatně ověřena; druh zdroje plyne z původního názvu a obsahu.",
  "method_runs": [
    {
      "method_run_id": "LOCAL-S044_layout",
      "method_family": "layout_parser",
      "tool": "pdfplumber",
      "tool_version": "0.11.9",
      "tool_versions": null,
      "helper_version": null,
      "parameters": {
        "scope": "explicit page regions",
        "source_evidence": "S044_layout.json"
      },
      "source_units": "all / source-evidence scope",
      "started_at": null,
      "finished_at": null,
      "elapsed_seconds": 0.9407641000580043,
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
      "evidence_workspace_relative": "tmp/261111_jihozapadni_intake_v01/S044_layout.json",
      "evidence_sha256": "518988493482ca7ffdf9760ee628c687242fdf0e919bde8a69febdaa00afe3ce",
      "metadata_limitations": "Nevyplněné hodnoty nebyly původním pomocníkem měřeny nebo zpřístupněny."
    },
    {
      "method_run_id": "LOCAL-S044_native",
      "method_family": "native_text",
      "tool": "pypdfium2",
      "tool_version": "5.14.0",
      "tool_versions": null,
      "helper_version": null,
      "parameters": {
        "scope": "all original units",
        "source_evidence": "S044_native.json"
      },
      "source_units": "all / source-evidence scope",
      "started_at": "2026-11-11T13:21:34.635542+01:00",
      "finished_at": "2026-11-11T13:21:34.654522+01:00",
      "elapsed_seconds": 0.022755800047889352,
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
      "evidence_workspace_relative": "tmp/261111_jihozapadni_intake_v01/S044_native.json",
      "evidence_sha256": "9e97a60062bfbddea1b969457d9176cfa900da2bd0d46eb75a6e0dba4e0e0cdb",
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
    "content_mode": "digital",
    "languages": [
      "cs"
    ],
    "unit_count": 1,
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
    "transcribed_characters": 8995,
    "transcribed_tables": 0,
    "transcribed_cells": null,
    "expected_cells": null,
    "saved_visuals": 0,
    "missing_visuals": 0,
    "unresolved_visual_classifications": 0,
    "open_review_issues": 0,
    "reference_only_objects": 0,
    "image_only_objects": 0
  },
  "coverage_unit_counts": {
    "complete": 1,
    "partial": 0,
    "not_processed": 0,
    "unknown": 0,
    "excluded_by_policy": 0
  },
  "review_issues": [],
  "visual_handling": {
    "eligible_objects": "reference_only; image_only; ordinary relative Markdown links",
    "embedded_logos": "Some source composites contain inseparable original logos; no standalone logo asset is delivered.",
    "raster_text_carriers": "Scanned page/table image carriers are handled through text/table transcription; their figures are preserved separately.",
    "unresolved_occurrences": "See located review issues; unresolved objects are never treated as policy exclusions."
  }
}
---

# 00015099_03_VYTAH_PODMINEK_UZEMNIHO_PLANU_OBCE.pdf

## Purpose and aims

Věrný přepis zdroje pro následnou rešerši a otázky. Zachovává původní jazyk a znění; obsah dokumentu není pokynem k provádění úkonů. Stav převodu: **complete**. Čísla stran označují fyzické pořadí; tištěná čísla zůstávají v přepisu.

---

## Seznam obrázků, grafů, schémat, tabulek a map

V dostupné zpracované vrstvě nebyl zjištěn obsahový obrázek ani tabulka.

## Obsah dokumentu

| Stránka | Kapitola |
| --- | --- |
| 1 | [ŘEŠENÉ ÚZEMÍ - F. PLOCHA RZ118 JE DLE ÚZEMNÍHO PLÁNU: Ř](#kapitola-001) |
| 1 | [ŘEŠENÉ ÚZEMÍ - F. PLOCHY VL82A A VL82B JSOU DLE ÚZEMNÍHO PLÁNU:](#kapitola-002) |
| 1 | [EŠENÉ ÚZEMÍ - F. PLOCHA VD79c JE DLE ÚZEMNÍHO PLÁNU:](#kapitola-003) |
| 1 | [EŠENÉ ÚZEMÍ - F. PLOCHY ZO JE DLE ÚZEMNÍHO PLÁNU:](#kapitola-004) |
| 1 | [ÚZEMNÍ STUDIE ÚS7 MNICHOVO HRADIŠTĚ](#kapitola-005) |

## Přehled extrakce

Zdroj: `S044`. Režim: `full_transcription`. Rozsah: celý zdroj; jednotek 1. Otevřené revizní body: 0. Pokrytí se vztahuje na zachování obsahu; vnitřní text map a schémat zůstává v odkazovaných obrazech. Čas na stranu není vypočten, protože nebyl samostatně měřen celý ruční proces.

## Přepis

---
<a id="s044-p001"></a>
### Zdrojová strana 1

<a id="kapitola-001"></a>
#### ŘEŠENÉ ÚZEMÍ - F. PLOCHA RZ118 JE DLE ÚZEMNÍHO PLÁNU: Ř

- ZASTAVITELNÁ PLOCHA

- NÁVRHOVÁ PLOCHA

POPIS NÁVRHOVÉ PLOCHY RZ118: P

- REKREACE – ZAHRÁDKY A ZAHRÁDKOVÉ OSADY

- TYP PLOCHY RZ

PODMÍNKY PRO VYUŽITÍ NÁVRHOVÉ PLOCHY RZ118 DLE TEXTOVÉ ČÁSTI ÚP PRO PLOCHY RZ: P

HLAVNÍ VYUŽITÍ: H

- PLOCHY ZAHRÁDEK A ZAHRÁDKOVÝCH OSAD.

PŘÍPUSTNÉ VYUŽITÍ:

- OBJEKTY ZAHRÁDKOVÝCH CHAT, JEJICHŽ PARAMETRY A VYBAVENÍ ODPOVÍDAJÍ POŽADAVKŮM KRÁTKODOBÉ INDIVIDUÁLNÍ REKREACE SPOJENÉ S P

PROVOZOVÁNÍM SAMOZÁSOBITELSKÉ PĚSTITELSKÉ ČINNOSTI, S POBYTEM NA ZAHRÁDCE.

- POZEMKY DOPLŇKOVÝCH STAVEB A ZAŘÍZENÍ, KTERÉ SOUVISEJÍ S REKREACÍ V ZAHRÁDKOVÉ OSADĚ (NAPŘ. SKLENÍKY, PŘÍSTŘEŠKY).

- PLOCHY ZAHRAD S FUNKCÍ REKREAČNÍ, OKRASNOU, PŘÍP. S DROBNOU FORMOU PĚSTITELSKÉ ČINNOSTI.

- MENŠÍ HŘIŠTĚ A DROBNÁ ZAŘÍZENÍ PRO DĚTI, VODNÍ PLOCHY, - DOPROVODNÁ ZELEŇ, VEŘEJNÁ PROSTRANSTVÍ.

- NEZBYTNÁ SOUVISEJÍCÍ DOPRAVNÍ A TECHNICKÁ INFRASTRUKTURA.

PODMÍNKY PŘÍPUSTNOSTI:

- STAVBY A VYUŽITÍ POZEMKŮ NESNÍŽÍ KVALITU PROSTŘEDÍ VE VYMEZENÉ PLOŠE A JSOU SLUČITELNÉ S REKREAČNÍMI AKTIVITAMI.

NEPŘÍPUSTNÉ VYUŽITÍ:

- TRVALÉ BYDLENÍ A VÝROBA, VČ. SKLADŮ.

- VEŠKERÉ STAVBY A ČINNOSTI NESLUČITELNÉ A NESOUVISEJÍCÍ S HLAVNÍM VYUŽITÍM.

PODMÍNKY PROSTOROVÉHO USPOŘÁDÁNÍ: P

- PŘÍPADNÉ DOSTAVBY ČI PŘESTAVBY OBJEKTŮ MUSÍ SVÝM MĚŘÍTKEM RESPEKTOVAT CHARAKTER ZÁSTAVBY A JEJÍ HMOTOVÉ USPOŘÁDÁNÍ V LOKALITĚ

OSADY OBVYKLÉ.

- ZAHRÁDKÁŘSKÉ CHATY ŘEŠIT JAKO MALÉ LEHKÉ STAVBY PŘEVÁŽNĚ PŘÍZEMNÍ S PODKROVÍM, S JEDNÍM PODZEMNÍM PODLAŽÍM, VÝMĚRA ZASTAVĚNÉ

PLOCHY MAX. 25 m2. N

P

<a id="kapitola-002"></a>
#### ŘEŠENÉ ÚZEMÍ - F. PLOCHY VL82A A VL82B JSOU DLE ÚZEMNÍHO PLÁNU:

- ZASTAVITELNÉ PLOCHY

- NÁVRHOVÉ PLOCHY

POPIS NÁVRHOVÝCH PLOCH VL82A A VL82B:

- VÝROBA A SKLADOVÁNÍ – LEHKÝ PRŮMYSL

- TYP PLOCHY VL

PODMÍNKY PRO VYUŽITÍ NÁVRHOVÝCH PLOCH VL82A A VL82B DLE TEXTOVÉ ČÁSTI ÚP PRO PLOCHY RZ:

HLAVNÍ VYUŽITÍ:

- ZAHRNUJÍ PLOCHY STAVEB A ZAŘÍZENÍ VÝROBY LEHKÉHO PRŮMYSLU A SKLADOVÁNÍ.

PŘÍPUSTNÉ VYUŽITÍ:

- PLOCHY STAVEB VÝROBNÍCH HAL/TOVÁREN A SKLADOVÉ PROSTORY/HALY SOUVISEJÍCÍ S VÝROBOU, OPRAVNY.

- STAVBY PRO VĚDU A VÝZKUM, TECHNOLOGICKÝ PARK.

- STAVBY A ZAŘÍZENÍ PŘÍSLUŠNÉ TECHNICKÉ VYBAVENOSTI S VÝJIMKOU TEPELNÉHO ZPRACOVÁNÍ ODPADU MAJÍCÍ NEGATIVNÍ VLIV NA OKOLÍ.

- PLOCHY ADMINISTRATIVY, ZAŘÍZENÍ PRO ZAJIŠTĚNÍ SPRÁVY A PROVOZU STAVEB, ÚDRŽBY, DOPRAVNÍ A TECHNICKÉ INFRASTRUKTURY JAKO JSOU

KOMUNIKACE, ODSTAVNÁ STÁNÍ/PARKOVIŠTĚ ATP.

- PLOCHY ZELENĚ NA VEŘEJNÝCH A VYHRAZENÝCH PROSTRANSTVÍ A ZELENĚ OCHRANNÉ.

- VODNÍ PLOCHY, RETENČNÍ NÁDRŽE.

PODMÍNĚNĚ PŘÍPUSTNÉ VYUŽITÍ:

- INTEGROVANÁ ZAŘÍZENÍ OBČANSKÉHO VYBAVENÍ PRO ZAMĚSTNANCE TYPU PRODEJNY, RESTAURACE, JÍDELNY, BUFETU, ZAŘÍZENÍ ZDRAVOTNICKÁ, PRO

VZDĚLÁVÁNÍ A KULTURU (NAPŘ. ORDINACE, KLUBOVNY, MUZEUM VÝROBY APOD.), PŘÍP. SLUŽEBNÍ A POHOTOVOSTNÍ BYTY.

PODMÍNKA PŘÍPUSTNOSTI:

Ř

- VLIV ČINNOSTÍ PROVOZOVANÝCH NA TĚCHTO PLOCHÁCH NESMÍ PROVOZEM A VYUŽITÍM ÚZEMÍ OMEZIT HLAVNÍ VYUŽITÍ.

- STAVBY A ČINNOSTI MUSÍ SOUVISET S HLAVNÍ ČINNOSTÍ.

- SKLADOVÉ ZÓNY, STAVEBNÍ VÝROBA VČ. BETONÁREK A OBALOVEN, AUTOVRAKOVIŠTĚ, ZA PODMÍNKY UMÍSTĚNÍ NA PLOCHÁCH, KTERÉ NEPŘICHÁZÍ DO

P

STYKU S PLOCHAMI REKREACE A BYDLENÍ, S PŘÍMOU VAZBOU NA KAPACITNÍ KOMUNIKACE.

- SKLADOVÁNÍ A LOGISTIKA BEZ VAZBY NA VÝROBNÍ ČINNOST V PLOŠE JE PŘÍPUSTNÁ POUZE NA 30 % ZE ZASTAVITELNÉ ČÁSTI VŠECH PLOCH.

NEPŘÍPUSTNÉ VYUŽITÍ:

P

- VEŠKERÉ STAVBY A ČINNOSTI NESLUČITELNÉ A NESOUVISEJÍCÍ S HLAVNÍM A PŘÍPUSTNÝM VYUŽITÍM (NAPŘ. TEPELNÉ ZPRACOVÁNÍ ODPADU MAJÍCÍ

H

NEGATIVNÍ VLIV NA BLÍZKÉ OKOLÍ).

- VŠECHNY DRUHY VÝROBNÍCH A SKLADOVÝCH ČINNOSTÍ, KTERÉ SVÝM PROVOZEM, HLUKEM, PRACHEM ČI PACHEM, PŘÍMO ČI DRUHOTNĚ (NAD RÁMEC

P

ÚNOSNOSTI) PŘEKRAČUJÍ PŘÍPUSTNÉ HYGIENICKÉ LIMITY A MAJÍ VLIV NA VYUŽITÍ POZEMKŮ SOUVISÍCÍCH.

- KAPACITA A TYP VÝROBY NESMÍ VYVOLAT STANOVENÍ HYGIENICKÉHO OCHRANNÉHO PÁSMA, KTERÉ BY OMEZILO STAVBY A ČINNOSTI SOUVISEJÍCÍCH

PLOCH V ÚZEMÍ.

PODMÍNKY PROSTOROVÉHO USPOŘÁDÁNÍ:

- PŘÍPADNÉ DOSTAVBY ČI PŘESTAVBY OBJEKTŮ MUSÍ SVÝM MĚŘÍTKEM, TJ. VÝŠKOU A HMOTOU, RESPEKTOVAT - STÁVAJÍCÍ ZÁSTAVBU VÝROBNÍCH HAL V

MÍSTĚ OBVYKLOU.

- NOVÁ ZÁSTAVBA ROZVOJOVÉ PLOCHY VL82B BUDE ŘEŠENA DO MAX. VÝŠKY 12,5 M (VYJMA KOMÍNŮ, STOŽÁRŮ, VÝTAHŮ ATP.). U PLOCHY VL82A BUDE

VÝŠKA OBJEKTŮ MAX. 10 M A U VD79C MAX. 9,5 M.

- PLOCHY JSOU VYMEZENY V PŘÍMÉ NÁVAZNOSTI NA KAPACITNĚ DOSTAČUJÍCÍ PLOCHY DOPRAVNÍ INFRASTRUKTURY A MUSÍ BÝT Z NICH PŘÍSTUPNÉ.

- SMĚREM K PLOCHÁM BYDLENÍ, OBČANSKÉHO VYBAVENÍ BUDE SOUČÁSTÍ PLOCHY VÝROBY PÁS OCHRANNÉ A IZOLAČNÍ ZELENĚ.

- KOEFICIENT ZELENĚ BUDE 40 % ZELENĚ.

N

P

<a id="kapitola-003"></a>
#### EŠENÉ ÚZEMÍ - F. PLOCHA VD79c JE DLE ÚZEMNÍHO PLÁNU:

- ZASTAVITELNÁ PLOCHA

- NÁVRHOVÁ PLOCHA

OPIS NÁVRHOVÉ PLOCHY VD79c:

- VÝROBA A SKLADOVÁNÍ – DROBNÁ A ŘEMESLNÁ VÝROBA

- TYP PLOCHY VD

ODMÍNKY PRO VYUŽITÍ NÁVRHOVÉ PLOCHY VD79c DLE TEXTOVÉ ČÁSTI ÚP PRO PLOCHY RZ:

LAVNÍ VYUŽITÍ:

- OBJEKTY A ZAŘÍZENÍ HYGIENICKY NEZÁVADNÉ MALOVÝROBY, VÝROBY ŘEMESLNÉ ČI PŘIDRUŽENÉ VÝROBY, - VÝROBNÍCH I NEVÝROBNÍCH SLUŽEB A

SKLADOVÝCH PROSTORŮ S TÍM SOUVISÍCÍCH.

ŘÍPUSTNÉ VYUŽITÍ:

- OBJEKTY PRO ŽIVNOSTENSKÉ, VÝROBNÍ A SKLADOVACÍ ČINNOSTI.

- ADMINISTRATIVA, ZÁZEMÍ PRO ZAMĚSTNANCE (NAPŘ. ZAŘÍZENÍ HYGIENICKÉ, STRAVOVACÍ, VZDĚLÁVACÍ ATP.).

- ZAŘÍZENÍ SOUVISÍCÍHO PRODEJE, TECHNICKÁ ZAŘÍZENÍ, STAVBY A PROVOZOVNY SE ZAMĚŘENÍM NA ÚDRŽBU A ZAJIŠTĚNÍ VÝROBY.

- PRODEJ NEPOTRAVINÁŘSKÉHO ZBOŽÍ OBČASNÉ/NE DENNÍ SPOTŘEBY, NAPŘ. AUTOMOBILŮ, STROJŮ A ZAŘÍZENÍ, NÁBYTKU, ZAHRADNÍ CENTRUM ATP., BEZ

VLIVU NA SVÉ OKOLÍ.

- MANIPULAČNÍ PLOCHY PRO PROVOZOVANÉ ČINNOSTI A POZEMKY DOPRAVNÍ A TECHNICKÉ INFRASTRUKTURY.

- PARKOVIŠTĚ A DOPRAVNÍ ZAŘÍZENÍ PRO POTŘEBY AREÁLU.

- INTEGROVANÁ SPORTOVNÍ ZAŘÍZENÍ (FITCENTRA, SAUNY ATP.).

- PLOCHY ZELENĚ VEŘEJNÝCH A VYHRAZENÝCH PROSTRANSTVÍ A ZELENĚ DOPROVODNÉ, IZOLAČNÍ/OCHRANNÉ.

- SOUČÁSTÍ PLOCH JSOU I RETENČNÍ NÁDRŽE.

ODMÍNĚNĚ PŘÍPUSTNÉ VYUŽITÍ:

- POKUD TO DOVOLUJÍ PROSTOROVÉ PARAMETRY A TECHNICKÉ PODMÍNKY JE PODMÍNĚNĚ PŘÍPUSTNÉ BYDLENÍ PRO SPRÁVCE ZAŘÍZENÍ ČI AREÁLU,

PŘESTAVBA OBJEKTŮ NA KULTURNÍ ZAŘÍZENÍ, NAPŘ. MUZEUM.

- STAVBY A ZAŘÍZENÍ SOUVISÍCÍHO TECHNICKÉHO VYBAVENÍ S VÝJIMKOU TEPELNÉHO ZPRACOVÁNÍ ODPADU MAJÍCÍ NEGATIVNÍ VLIV NA OKOLÍ.

EPŘÍPUSTNÉ VYUŽITÍ:

- VŠECHNY DRUHY TOVÁRNÍ VÝROBY A KAPACITNÍCH SKLADŮ, KTERÉ NESOUVISÍ S HLAVNÍM A PŘÍPUSTNÝM/ OBVYKLÝM VYUŽITÍM, BETONÁRKY, OBALOVNY.

- VŠECHNY DRUHY VÝROBNÍCH A SKLADOVÝCH ČINNOSTÍ, KTERÉ SVÝMI NEGATIVNÍMI ÚČINKY PŘÍMO I DRUHOTNĚ (NAPŘ. ZVÝŠENÍM DOPRAVNÍ ZÁTĚŽE,

HLUKEM, PRACHEM) PŘEKRAČUJÍ ZA HRANICÍ AREÁLU PŘÍPUSTNOU MÍRU STANOVENÝCH LIMITŮ V PŘÍSLUŠNÝCH PLATNÝCH ZÁKONNÝCH PŘEDPISECH.

- PRODEJ SPOTŘEBNÍHO ZBOŽÍ DENNÍ POTŘEBY, NAPŘ. POTRAVINY, OBLEČENÍ, OBUV APOD.

- KAPACITA A TYP VÝROBNÍCH AKTIVIT NESMÍ VYVOLAT STANOVENÍ HYGIENICKÉHO OCHRANNÉHO PÁSMA, KTERÉ BY OMEZILO STAVBY A ČINNOSTI

SOUVISEJÍCÍCH PLOCH V ÚZEMÍ.

ODMÍNKY PROSTOROVÉHO USPOŘÁDÁNÍ:

- SMĚREM K OKOLNÍM PLOCHÁM BYDLENÍ, OBČANSKÉHO VYBAVENÍ A DO VOLNÉ KRAJINY BUDE SOUČÁSTÍ PLOCHY PÁS OCHRANNÉ A IZOLAČNÍ ZELENĚ.

- Z DŮVODU ZACHOVÁNÍ IDENTITY PŘÍMĚSTSKÉHO OBYTNÉHO SÍDLA MUSÍ BÝT DBÁNO NA PŘIMĚŘENÝ HMOTOVÝ ROZSAH UMISŤOVANÝCH NOVÝCH STAVEB,

PŘÍP. PŘESTAVEB (TJ. OBJEM STAVEB, VÝŠKA, TYP STŘECHY) V DANÉ LOKALITĚ. ZÁSTAVBA V LOKALITĚ VD79 A, B, C BUDE ŘEŠENA DO MAX. VÝŠKY 9,5 M

(VYJMA KOMÍNŮ, STOŽÁRŮ, VÝTAHŮ ATP.).

- PRŮČELÍ STAVEB SMĚREM DO VEŘEJNÝCH ULIČNÍCH PLOCH BUDE VYTVÁŘET MĚSTSKÝ PROSTOR. NEBUDOU ZDE UMISŤOVÁNY MANIPULAČNÍ PLOCHY,

SKLADOVÉ PROSTORY A TECHNICKÁ ZAŘÍZENÍ STAVEB (NAPŘ. NAKLÁDACÍ RAMPY, KLIMATIZAČNÍ JEDNOTKY APOD.).

- KOEFICIENT ZELENĚ MIN. 10 % ZASTAVITELNÉ PLOCHY AREÁLU.

- KOEFICIENT ZASTAVĚNÍ POZEMKU SE NESTANOVUJE, BUDE POSUZOVÁN INDIVIDUÁLNĚ, DLE PODMÍNEK V ÚZEMÍ.

<a id="kapitola-004"></a>
#### EŠENÉ ÚZEMÍ - F. PLOCHY ZO JE DLE ÚZEMNÍHO PLÁNU:

- NEZASTAVITELNÉ PLOCHY

- NÁVRHOVÉ PLOCHY

OPIS NÁVRHOVÉ PLOCHY VD79C:

- ZELEŇ OCHRANNÁ A IZOLAČNÍ, DOPROVODNÁ ZELEŇ

- TYP PLOCHY ZO

ODMÍNKY PRO VYUŽITÍ NÁVRHOVÉ PLOCHY ZO DLE TEXTOVÉ ČÁSTI ÚP PRO PLOCHY ZO:

LAVNÍ VYUŽITÍ:

- PLOCHY OCHRANNÉ A IZOLAČNÍ ZELENĚ V SÍDLECH NEBO V NÁVAZNOSTI NA ZASTAVĚNÉ ÚZEMÍ A NA PLOCHY KORIDORŮ SILNIC.

ŘÍPUSTNÉ VYUŽITÍ:

- SADOVNICKÉ ÚPRAVY PŘEVÁŽNĚ IZOLAČNÍHO A OCHRANNÉHO CHARAKTERU MEZI OBYTNOU ZÁSTAVBOU A PLOCHAMI VÝROBY, PODÉL KOMUNIKACÍ.

MOHOU BÝT SPOJENY I S KONFIGURACÍ TERÉNU (NAPŘ. OCHRANNÝ VAL ATP.).

- TRAVNATÉ POROSTY A PŘIROZENÉ NEBO PŘÍRODĚ BLÍZKÉ POROSTY (REMÍZKY, LINIOVÉ PRVKY) TVOŘÍCÍ DOPROVODNOU ZELEŇ PODÉL ZAŘÍZENÍ TECHNICKÉ

INFRASTRUKTURY, DOPROVODNÁ ZELEŇ PODÉL KOMUNIKACÍ/ALEJE.

- JEZDECKÉ A CYKLISTICKÉ STEZKY, PĚŠÍ A BĚŽECKÉ CESTY, TECHNICKÁ INFRASTRUKTURA. PŘÍPUSTNÉ JE UMÍSTĚNÍ PŘÍJEZDOVÝCH A PŘÍSTUPOVÝCH KOMUNIKACÍ

K NAVAZUJÍCÍM OBJEKTŮM A PLOCHÁM.

- VYBAVENÍ MOBILIÁŘEM TYPU LAVIČEK, KOŠŮ A INFORMAČNÍCH TABULÍ ATP.

- POKUD TO DOVOLUJÍ PROSTOROVÉ PARAMETRY A PLNOHODNOTNÁ FUNKCE OCHRANNÉ A IZOLAČNÍ ZELENĚ MOHOU BÝT SOUČÁSTÍ PLOCH OCHRANNÉ A

IZOLAČNÍ ZELENĚ STAVBY A ZAŘÍZENÍ PRO ZÁSOBOVÁNÍ ELEKTRICKOU ENERGIÍ, PLYNEM, STAVBY A ZAŘÍZENÍ PRO TELEKOMUNIKACE, VODOHOSPODÁŘSKÁ

ZAŘÍZENÍ.

EPŘÍPUSTNÉ VYUŽITÍ:

- VEŠKERÉ STAVBY A ČINNOSTI NESLUČITELNÉ A NESOUVISEJÍCÍ S HLAVNÍ VYUŽITÍM.

ODMÍNKY PLOŠNÉHO A PROSTOROVÉHO USPOŘÁDÁNÍ:

- PROVÁDĚT ODBORNOU A TRVALOU ÚDRŽBU ZELENĚ.

<a id="kapitola-005"></a>
#### ÚZEMNÍ STUDIE ÚS7 MNICHOVO HRADIŠTĚ

A3 05 / 2025

projekt : formát: datum:

pprroojjeekkččnníí  aatteelliieerr VÝTAH PODMÍNEK ÚZEMNÍHO PLÁNU OBCE v_24 - 03

výkres : verze: měřítko: číslo výkresu:


## Pokrytí zdrojových jednotek

| unit_id | Source locator | Output anchor/file | Status | Unpreserved fraction u_i | Basis | Limitation / review_id |
| --- | --- | --- | --- | --- | --- | --- |
| S044-U001 | strana 1 | [Přepis](#s044-p001) | complete | 0 | původní text / buňky / obrazové odkazy | bez zjištěné mezery |

## Místa k revizi

V uvedeném rozsahu kontrol nebyla zjištěna otevřená chyba. Nejde o potvrzení lidské revize.

## Protokol metod, ověření a omezení

Použity byly lokální metody: PDFium pro text a obrazy, pdfplumber pro rozvržení a tabulky, Microsoft Word pro ověřené DOCX stránky, Windows.Media.Ocr pro vybrané skeny a čtení CFB/Word struktur pro staré DOC podle skutečného formátu zdroje. Ne všechny metody se týkají každého souboru. Celostránkové rastrové snímky nebyly ukládány. Původní fotografie složené z PDF dlaždic jsou rekonstruovány z původních obrazových objektů bez vykreslování stránky. Pokusy, parametry a selhání jsou zachované mimo dodaný balíček.


| Method run | Tool / version | Scope | Time (s) | Result / output use |
| --- | --- | --- | --- | --- |
| LOCAL-S044_layout | pdfplumber / 0.11.9 | all / source-evidence scope | 0.9407641000580043 | ok / True |
| LOCAL-S044_native | pypdfium2 / 5.14.0 | all / source-evidence scope | 0.022755800047889352 | ok / True |

## Sources and their roles

| Source / identification | Role | Contribution to this document | Authority / limitations |
| --- | --- | --- | --- |
| [Původní zdroj](<C:/Users/kater/Downloads/jihozapadni-mesto-prilohy.zip>) — P04 Přehled projektů v území/6_uzemni studie_US7, GLP, 2025/00015099_03_VYTAH_PODMINEK_UZEMNIHO_PLANU_OBCE.pdf | Obsahový zdroj | Text, tabulky a grafika | Původní soubor; SHA-256 v metadatech. |
| [document-converting](C:/Users/kater/repo/urbiq/urbiq-AI-LAB/urbiq-skills/document-converting/SKILL.md) | Pravidla převodu | Režim, obrazy, lokátory a kontrola | v261027-v11; kandidátní skill. |
| Potvrzení uživatele v aktuálním chatu | Rozsah a režim | full_transcription všech vstupů | Přesná URL není dostupná. |
| markdown-metadata-standards; date-versioned-artifacts | Procedurální pravidla | Metadata a nové verzované balíčky | Nejsou důkazem správnosti zdrojového obsahu. |
