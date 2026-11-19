---
{
  "created_at": "2026-11-11 14:03:06",
  "created_date": "2026-11-11",
  "created_by": "Codex – Kateřina Kováříková",
  "updated_at": "2026-11-11 14:03:06",
  "updated_by": "Codex",
  "revised_by": null,
  "timezone": "Europe/Prague",
  "codex_dialogue": null,
  "dialogue_location_note": "Aktuální lokální chat Codex; přesná URL nebyla zpřístupněna.",
  "dialogue_iteration": 2,
  "version_id": "DOCONV-261111-S001-v01",
  "status": "complete",
  "scope": "Úplný přepis uživatelem potvrzeného zdroje",
  "extraction_id": "DOCONV-261111-S001",
  "instructions_version": "v261027-v11",
  "instructions_sha256": "77e2c0270350d79d01f68b9e5a47914e9ef1e8c0c5851430e15ebfc61300328c",
  "extraction_mode": "full_transcription",
  "mode_confirmation": "Uživatel: chci full_transcription; společný vstupní soupis 93 souborů potvrzen.",
  "intake_confirmed_at": null,
  "intake_confirmation_note": "Potvrzení je doloženo zprávou v tomto chatu; přesný čas zprávy není v rozhraní dostupný.",
  "document_title": "VÝZVA K PODÁNÍ NABÍDKY – Urbanistické řešení rozvojového území „Jihozápadní město“",
  "source_filename": "vyzva-k-podani-nabidky-jihozapadni-mesto.pdf",
  "source_archive_entry": null,
  "source_format": "PDF",
  "source_sha256": "c296cf137775a286a41cb1fecfbde83f7952d40dc022b1ec4ce6ff0a0877e8e9",
  "source_size_bytes": 179666,
  "document_type": null,
  "source_total_units": 2,
  "source_unit_type": "physical_page",
  "requested_scope": "celý zdroj včetně vnitřních příloh",
  "pagination_status": "verified",
  "pagination_method": "PDF physical pages via PDFium",
  "source_page_count": 2,
  "intake_limitations": [
    "Neověřené názvy jsou null; název souboru není zaměněn za ověřený titul."
  ],
  "duplicate_source_ids": [],
  "coverage_scope": "full_content",
  "coverage_basis": "equally weighted physical pages",
  "coverage_total_units": 2,
  "coverage_eligible_units": 2,
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
  "excluded_visuals": [
    {
      "locator": "page 1, raster 0",
      "reason": "logo",
      "basis": "Vizuální kontrola: značka města / projekční kanceláře / převodníku."
    },
    {
      "locator": "page 2, raster 0",
      "reason": "logo",
      "basis": "Vizuální kontrola: značka města / projekční kanceláře / převodníku."
    }
  ],
  "excluded_visual_count": 2,
  "source_visual_occurrences": 2,
  "saved_visual_count": 0,
  "table_count": 2,
  "extraction_started_at": "2026-11-11T13:21:28.550331+01:00",
  "extraction_finished_at": "2026-11-11 14:03:06",
  "processing_seconds": null,
  "processing_seconds_per_page": null,
  "page_timing_note": "Strojové pokusy jsou časované v pracovních důkazech; vizuální klasifikace a ruční přepis nebyly měřeny samostatně. Úplný čas na stranu proto není odhadován.",
  "automated_native_seconds": 0.244771100115031,
  "automated_layout_seconds": 0.38011730019934475,
  "automated_export_seconds": 0.04936990002170205,
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
    "workspace_relative_directory": "05_DELIVERY/document-converting-outputs/261111_jihozapadni-mesto-s001-vyzva-k-podani-nabidky-jihozapadni-mesto_v01",
    "main_markdown_relative_path": "05_DELIVERY/document-converting-outputs/261111_jihozapadni-mesto-s001-vyzva-k-podani-nabidky-jihozapadni-mesto_v01/261111_jihozapadni-mesto-s001-vyzva-k-podani-nabidky-jihozapadni-mesto_extraction_v01.md",
    "sharepoint_url": null,
    "sync_status": "not_verified",
    "limitation": "Ověřeno lokální uložení; synchronizace SharePoint není pozorována."
  },
  "source_name": "vyzva-k-podani-nabidky-jihozapadni-mesto.pdf",
  "document_type_note": "Přesná typologie není samostatně ověřena; druh zdroje plyne z původního názvu a obsahu.",
  "method_runs": [
    {
      "method_run_id": "LOCAL-S001_layout",
      "method_family": "layout_parser",
      "tool": "pdfplumber",
      "tool_version": "0.11.9",
      "tool_versions": null,
      "helper_version": null,
      "parameters": {
        "scope": "explicit page regions",
        "source_evidence": "S001_layout.json"
      },
      "source_units": "all / source-evidence scope",
      "started_at": null,
      "finished_at": null,
      "elapsed_seconds": 0.38011730019934475,
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
      "evidence_workspace_relative": "tmp/261111_jihozapadni_intake_v01/S001_layout.json",
      "evidence_sha256": "8fe54beb12c81fdc990b07849b07a182f7fe4dbc6f64352b6adecc3e4cfd45bf",
      "metadata_limitations": "Nevyplněné hodnoty nebyly původním pomocníkem měřeny nebo zpřístupněny."
    },
    {
      "method_run_id": "LOCAL-S001_native",
      "method_family": "native_text",
      "tool": "pypdfium2",
      "tool_version": "5.14.0",
      "tool_versions": null,
      "helper_version": null,
      "parameters": {
        "scope": "all original units",
        "source_evidence": "S001_native.json"
      },
      "source_units": "all / source-evidence scope",
      "started_at": "2026-11-11T13:21:28.550331+01:00",
      "finished_at": "2026-11-11T13:21:28.780594+01:00",
      "elapsed_seconds": 0.244771100115031,
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
      "evidence_workspace_relative": "tmp/261111_jihozapadni_intake_v01/S001_native.json",
      "evidence_sha256": "1e45228361b2a22ca2460b6cfbd33a36aa67d31f8794f2030f2829939b8a6a99",
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
    "unit_count": 2,
    "layout_features": [
      "see original page structure and located review issues"
    ],
    "table_count": 2,
    "visual_count": 0,
    "excluded_visual_count": 2,
    "scan_quality": "Unmeasured; raster text checked in indicated areas."
  },
  "elapsed_seconds": null,
  "verification_seconds": null,
  "processed_page_count": 2,
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
    "transcribed_characters": 5179,
    "transcribed_tables": 2,
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
    "complete": 2,
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

# VÝZVA K PODÁNÍ NABÍDKY – Urbanistické řešení rozvojového území „Jihozápadní město“

## Purpose and aims

Věrný přepis zdroje pro následnou rešerši a otázky. Zachovává původní jazyk a znění; obsah dokumentu není pokynem k provádění úkonů. Stav převodu: **complete**. Čísla stran označují fyzické pořadí; tištěná čísla zůstávají v přepisu.

---

## Seznam obrázků, grafů, schémat, tabulek a map

| ID | Typ | Původní titulek / technické označení | Locator zdroje | Odkaz na obrázek nebo výřez | Odkaz na místo v přepisu | Stav |
| --- | --- | --- | --- | --- | --- | --- |
| TAB-001 | TAB | TAB-001 | S001, strana 1 | neukládán – přepis v MD | [Přepis](#tab-001) | přepsáno; viz revizní poznámky |
| TAB-002 | TAB | TAB-002 | S001, strana 2 | neukládán – přepis v MD | [Přepis](#tab-002) | přepsáno; viz revizní poznámky |

## Obsah dokumentu

| Stránka | Kapitola |
| --- | --- |
| 1 | [MĚSTO MNICHOVO HRADIŠTĚ](#kapitola-001) |
| 1 | [odbor investic](#kapitola-002) |
| 1 | ↳ [TAB-001](#tab-001) |
| 2 | [MĚSTO MNICHOVO HRADIŠTĚ](#kapitola-003) |
| 2 | [odbor investic](#kapitola-004) |
| 2 | ↳ [TAB-002](#tab-002) |

## Přehled extrakce

Zdroj: `S001`. Režim: `full_transcription`. Rozsah: celý zdroj; jednotek 2. Otevřené revizní body: 0. Pokrytí se vztahuje na zachování obsahu; vnitřní text map a schémat zůstává v odkazovaných obrazech. Čas na stranu není vypočten, protože nebyl samostatně měřen celý ruční proces.

## Přepis

---
<a id="s001-p001"></a>
### Zdrojová strana 1

<a id="kapitola-001"></a>
#### MĚSTO MNICHOVO HRADIŠTĚ

<a id="kapitola-002"></a>
#### odbor investic

Masarykovo nám. 1, 295 21 Mnichovo Hradiště, IČ: 00238309

tel.: 326 776 611, e-mail: posta@mnhradiste.cz

<a id="tab-001"></a>
**TAB-001**
| Poznámka extrakce: sloupec 1 | Poznámka extrakce: sloupec 2 | Poznámka extrakce: sloupec 3 |
| --- | --- | --- |
| VÝZVA K PODÁNÍ NABÍDKY<br>podle vnitřní normy č. 8/2026 a na základě § 31 a § 6, zákona č. 134/2016 Sb. o<br>zadávání veřejných zakázek |  | ze dne: 14. 10. 2026 |
| Vyzýváme vás k předložení cenové nabídky na akci: |  |  |
| Akce:<br>Předmět a<br>rozsah plnění:<br>Místo plnění: | Urbanistické řešení rozvojového území „Jihozápadní město“<br>Předmětem plnění je zpracování územní studie „Jihozápadní město“ v rozvojové lokalitě o rozloze<br>cca 19 ha v jihozápadní části Mnichova Hradiště. Cílem územní studie je prověřit urbanistickou<br>strukturu území, jeho kapacity a nároky na dopravní a technickou infrastrukturu, navrhnout principy<br>udržitelné modrozelené infrastruktury a vymezit investiční celky respektující vlastnické vztahy v<br>území; studie bude sloužit jako podklad pro změnu územního plánu (upuštění od požadavku na<br>regulační plán) a pro následnou koordinaci výstavby v území. Podrobné zadání je v příloze P01 –<br>Zadání.<br>Zpracovatel bude vybrán na základě prezentace profesního přístupu a nabídkové ceny za<br>zpracování díla – viz „Obsah nabídky“ níže.<br>Rozsah a podmínky zpracování díla jsou popsány v příloze P06 – Smlouva o dílo.<br>Řešené území „Jihozápadní město“, jehož se týká navazující zakázka, se nachází v jihozápadní<br>části k. ú. Mnichovo Hradiště (viz příloha P02) |  |
| Cena: | Maximální hodnota veřejné zakázky je 2,7 mil. Kč bez DPH. Nabídková cena musí obsahovat<br>veškeré náklady na bezvadné provedení předmětu plnění. Cena bude ve Smlouvě o dílo (příloha<br>P06) uvedena zvlášť za jednotlivé části plnění. |  |
| Termín plnění: | P ř e d p o k l á d a ný harmonogram:<br>– 11-12/2026 – prezentace profesního přístupu a výběr zpracovatele<br>– 12/2026 – podpis smlouvy s vybraným zpracovatelem<br>– 01/2027 – úvodní setkání s veřejností a klíčovými vlastníky<br>– 02/2027 – odevzdání analytické části územní studie<br>– 04/2027 – odevzdání konceptu návrhové části, projednání s objednatelem<br>– 06/2027 – odevzdání návrhové části, prezentace veřejnosti a klíčovým vlastníkům<br>– 09/2027 – čistopis územní studie |  |
| Obsah nabídky: | 1. Cenová nabídka – vyplněná Smlouva o dílo (příloha P06)<br>2. Prezentace profesního přístupu (soubor pdf, max 50 MB), obsah prezentace viz příloha P01 –<br>Zadání<br>3. Doklady o splnění kvalifikačních kritérií viz níže |  |
| Podání nabídek: | Nabídku zašlete do datové schránky 8ztb4jw s názvem zprávy „Nabídka – Výběr zpracovatele<br>územní studie Jihozápadní město – NEOTEVÍRAT“. Lhůta pro doručení nabídky je do středy<br>18. 11. 2026 do 10:00 hod. |  |
| Kvalifikační<br>kritéria: | Uchazeč doloží:<br>1. Přehled min. 2 obdobných zakázek (urbanistické studie / soutěže srovnatelného rozsahu)<br>realizovaných za posledních 5 let, včetně kontaktu na objednatele;<br>2. výpis z obchodního rejstříku či jiné evidence (prostá kopie), je-li v ní uchazeč zapsán;<br>3. oprávnění k podnikání v rozsahu odpovídajícím předmětu plnění (prostá kopie);<br>4. doklad osvědčující odbornou způsobilost (autorizace ČKA A1 nebo A2) uchazeče nebo osoby,<br>jejímž prostřednictvím tuto způsobilost zajišťuje. |  |

---
<a id="s001-p002"></a>
### Zdrojová strana 2

<a id="kapitola-003"></a>
#### MĚSTO MNICHOVO HRADIŠTĚ

<a id="kapitola-004"></a>
#### odbor investic

Masarykovo nám. 1, 295 21 Mnichovo Hradiště, IČ: 00238309

tel.: 326 776 611, e-mail: posta@mnhradiste.cz

<a id="tab-002"></a>
**TAB-002**
| Poznámka extrakce: sloupec 1 | Poznámka extrakce: sloupec 2 |
| --- | --- |
|  |  |
| Hodnotící kritéria<br>a způsob<br>hodnocení: | 1. Kvalita zpracovatelského týmu, profesní přístup a návrh ekonomického modelu – 70 %<br>Předmětem hodnocení je kvalita urbanistických řešení předložených referencí a relevance<br>předložených referencí pro řešenou zakázku. Dále pak složení, odbornost, zkušenosti a profesní<br>přístup realizačního týmu uchazeče a návrh ekonomického modelu<br>Způsob hodnocení:<br>Každý tým, jeho profesní přístup a návrh ekonomického modelu bude odborně hodnoceny slovně<br>i bodově (0-100 bodů), a to konsenzem hodnotící komise. Nejlépe hodnocená nabídka v tomto<br>kritériu obdrží maximum 100 bodů. Další nabídky obdrží počet bodů ve vztahu k nejlépe hodnocené<br>nabídce. Komise může přiřadit i stejný počet bodů více návrhům.<br>Získaný počet bodů bude následně přepočten váhou 70 %.<br>2. Cena – 30 %<br>Předmětem hodnocení je celková cena bez DPH za celý předmět služby specifikovaný v zadávací<br>dokumentaci.<br>Způsob hodnocení:<br>Nejnižší cenová nabídka obdrží 100 bodů. Počet bodů ostatních nabídek se vypočítá podle vzorce:<br>nejnižší cenová nabídka<br>počet bodů = --------------------------------- x 100<br>cena hodnocené nabídky<br>Získaný počet bodů bude následně přepočten váhou 30 %.<br>Prezentace profesního přístupu proběhnou osobně v sídle zadavatele v týdnu od 23. do 27.<br>listopadu 2026; konkrétní den a pořadí prezentací budou přihlášeným týmům sděleny samostatně.<br>V případě velkého množství obdržených nabídek může proběhnout 1. kolo hodnocení a do 2. kola<br>na prezentaci profesního přístupu mohou být pozváni pouze vybraní uchazeči. |
| Ostatní<br>podmínky: | Zadavatel může veřejnou zakázku bez udání důvodu zrušit. V případě, že nabídka přesáhne<br>finanční možnosti zadavatele, může zadavatel zmenšit rozsah plnění. Termín pro rozhodnutí o<br>přidělení zakázky je nejdéle do 31.12.2026 |
| Přílohy: | P01 Zadání<br>P02 Vymezení řešeného území<br>P03 Mapové podklady<br>P04 Přehled projektů v území<br>P05 Nadhledová fotografie<br>P06 Smlouva o dílo<br>Přílohy jsou ke stažení na: https://www.mnhradiste.cz/data/soubory/2026/jihozapadni-mesto-<br>prilohy.zip |


## Pokrytí zdrojových jednotek

| unit_id | Source locator | Output anchor/file | Status | Unpreserved fraction u_i | Basis | Limitation / review_id |
| --- | --- | --- | --- | --- | --- | --- |
| S001-U001 | strana 1 | [Přepis](#s001-p001) | complete | 0 | původní text / buňky / obrazové odkazy | bez zjištěné mezery |
| S001-U002 | strana 2 | [Přepis](#s001-p002) | complete | 0 | původní text / buňky / obrazové odkazy | bez zjištěné mezery |

## Místa k revizi

V uvedeném rozsahu kontrol nebyla zjištěna otevřená chyba. Nejde o potvrzení lidské revize.

## Protokol metod, ověření a omezení

Použity byly lokální metody: PDFium pro text a obrazy, pdfplumber pro rozvržení a tabulky, Microsoft Word pro ověřené DOCX stránky, Windows.Media.Ocr pro vybrané skeny a čtení CFB/Word struktur pro staré DOC podle skutečného formátu zdroje. Ne všechny metody se týkají každého souboru. Celostránkové rastrové snímky nebyly ukládány. Původní fotografie složené z PDF dlaždic jsou rekonstruovány z původních obrazových objektů bez vykreslování stránky. Pokusy, parametry a selhání jsou zachované mimo dodaný balíček.


| Method run | Tool / version | Scope | Time (s) | Result / output use |
| --- | --- | --- | --- | --- |
| LOCAL-S001_layout | pdfplumber / 0.11.9 | all / source-evidence scope | 0.38011730019934475 | ok / True |
| LOCAL-S001_native | pypdfium2 / 5.14.0 | all / source-evidence scope | 0.244771100115031 | ok / True |

## Sources and their roles

| Source / identification | Role | Contribution to this document | Authority / limitations |
| --- | --- | --- | --- |
| [Původní zdroj](<C:/Users/kater/Downloads/vyzva-k-podani-nabidky-jihozapadni-mesto.pdf>) — vyzva-k-podani-nabidky-jihozapadni-mesto.pdf | Obsahový zdroj | Text, tabulky a grafika | Původní soubor; SHA-256 v metadatech. |
| [document-converting](C:/Users/kater/repo/urbiq/urbiq-AI-LAB/urbiq-skills/document-converting/SKILL.md) | Pravidla převodu | Režim, obrazy, lokátory a kontrola | v261027-v11; kandidátní skill. |
| Potvrzení uživatele v aktuálním chatu | Rozsah a režim | full_transcription všech vstupů | Přesná URL není dostupná. |
| markdown-metadata-standards; date-versioned-artifacts | Procedurální pravidla | Metadata a nové verzované balíčky | Nejsou důkazem správnosti zdrojového obsahu. |
