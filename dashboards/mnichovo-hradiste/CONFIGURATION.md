---
title: "Projektový dashboard – konfigurovaný balíček"
created_at: "2026-11-19 18:59:29 +01:00"
created_by: "Codex - Kateřina Kováříková"
updated_at: "2026-11-19 18:59:29 +01:00"
updated_by: "Codex"
revised_by: null
timezone: "Europe/Prague"
codex_dialogue: "https://chatgpt.com/codex"
dialogue_iteration: 1
version_id: "URBIQ-PROJECT-WORKSPACE-20261119-v01"
status: "local-tested-candidate"
---

# Projektový dashboard

## Účel a cíle

Oddělený migrovaný balíček zakázky Mnichovo Hradiště. Zachovává původní podklady, mapy, modely a ovládání. Jeden `project.json` řídí projektové údaje, výchozí ceny, harmonogram a obsah čtyř karet dodávky. Jeden sestavený `dashboard.css` nahrazuje 25 samostatných CSS odkazů a dva vložené komponentové styly.

Původní `261111_document_workspace_v03` se neměnil. Tento balíček nebyl publikován, nahrán do GitHubu ani archivován na SharePointu.

## Otevření a úpravy

Pro běžné prohlížení otevřete [dashboard.html](dashboard.html). Při dvojkliku se použije generovaná kopie konfigurace vložená v HTML. Celá složka musí zůstat pohromadě.

Pro průběžné ruční úpravy spusťte v terminálu v této složce:

```text
node start-local.cjs
```

Otevřete `http://127.0.0.1:8765/dashboard.html`. Po změně `project.json` obnovte stránku. HTTP verze JSON vždy načítá přímo, bez použití staré vložené kopie. Server je dostupný pouze na tomto počítači; ukončení Ctrl+C. Potřebuje Node.js, nepoužívá další balíčky.

Pro obnovení kopie konfigurace pro dvojklik a sestavení CSS:

```text
node rebuild_project.cjs --check
node rebuild_project.cjs
```

První příkaz pouze ověří konfiguraci a vstupy. Druhý obnoví `dashboard.css`, lokální kopii konfigurace v HTML a soupisy souborů. Nezmění `project.json` ani zdrojové moduly. Při neplatných částkách, termínech nebo chybějících vstupech skončí před zápisem výstupů. Po sestavení znovu otevřete HTML. Po ručních změnách už původní archivní manifest neplatí; před archivací je třeba obnovit kontroly a soupis hashů.

## Co upravovat v project.json

| Pole | Význam |
|---|---|
| `project.id` | Stabilní identifikátor zakázky; odděluje místní preference. |
| `project.title`, `municipality`, `headerContext`, `status`, `pageTitle` | Identita a záhlaví. |
| `project.overview` | Nadlabel, nadpis a úvodní popis Přehledu. |
| `project.defaultDocument` | Výchozí dokument a strana i hlavní tlačítko Přehledu. |
| `fee.actors` | Čtyři aktéři; ID propojují částky, názvy se zobrazují. |
| `fee.phases[].budgetCzk` | Pevný rozpočet fáze v celých Kč. |
| `fee.phases[].allocations` | Výchozí částky podle ID aktérů; jejich součet musí odpovídat rozpočtu. |
| `fee.stepCzk` | Krok hranic, nyní 10 000 Kč; částky a rozpočty musí být jeho násobky. |
| `fee.schedule.startMonth` | Začátek zakázky YYYY-MM. |
| `fee.phases[].deadlineMonth` | Milník odevzdání YYYY-MM. Další fáze naváže za předcházejícím koncem. |
| `fee.schedule.extensionMonths`, `defaultExtended` | Pracovní prodloužení první fáze a jeho výchozí zapnutí. |
| `fee.envelopeCzk`, `primaryActorId` | Kontrolovaný cenový rámec a aktér. |
| `fee.schedule.sources`, `conflict`, `interpretation` | Zdroje a význam termínů; změna plánu sama nemění historický doklad. |
| `fee.provenance` | Původ rozpočtů a status pracovního rozdělení. |
| `offer` | Partnerský kontext, texty ceny, délka hostingu a karty dodávky s odkazy. |
| `storage` | Technická kompatibilita; běžně neměnit. Historický hash umožňuje jen bezpečné převzetí původního uloženého rozdělení. |

Částky jsou v Kč, ne v tisících. Příklad přesunu 10 000 Kč od Tečky k urbiq v první fázi:

```json
"allocations": {
  "urbiq": 180000,
  "tecka": 120000,
  "perspektiv": 110000,
  "specialists": 50000
}
```

Součet zůstává 460 000 Kč. Texty součtů i procentní podíly se generují automaticky; v JavaScriptu se už žádné souhrnné částky neopravují.

## Uložené volby

Pracovní budget má klíč odvozený od projektu a finanční konfigurace. Obnovení stránky zachová výběr fází i upravené hranice pouze pro stejnou konfiguraci. Změna výchozích cen nebo harmonogramu načte nové výchozí hodnoty; starší uložený stav nesmaže. „Vrátit výchozí návrh“ vrací právě načtené hodnoty JSON, všechny fáze a výchozí volbu prodloužení.

Kompatibilní rozdělení původního dashboardu se může jednou převzít z téže relace prohlížeče. Původní úložiště se pouze čte. Další preference jsou oddělené podle ID nového balíčku; případné starší uživatelské klasifikace se automaticky nekopírují. Zdrojové klasifikace a všechny podklady zůstávají zachované.

## CSS a soubory

- `dashboard.css` je jediný externí stylesheet aplikace. Ručně jej neupravovat.
- `styles/source/` obsahuje editovatelné moduly; `styles/order.json` určuje pořadí a základ cest obrázků. Kritické startovací styly zůstávají v HTML kvůli zobrazení chyby chybějící závislosti.
- Původní kaskáda je zachovaná. Sloučení načítání není hromadné odstranění duplicit či přeskupení pravidel; takové čištění by potřebovalo další porovnání komponent.
- `project-config.js` validuje a odvozuje údaje. `project-bootstrap.js` načítá konfiguraci před řídicími moduly; při HTTP chybě JSON ji nezamění za starou kopii.
- `dashboard-files.json` a `package-manifest.json` popisují runtime soubory, velikosti a hashe. `archive-manifest.json` zahrnuje také zdrojové styly, dokumentaci a kontroly; vlastní hash je v souboru `.sha256`.
- `verification/` obsahuje výsledky a snímky. Dokumenty a GIS/3D data byly převzaty bez změny obsahu.

## Rozsah přenositelnosti

Identita, nabídka, rozpočty a termíny již čerpají z konfigurace. Dokumenty, vrstvy, modely a jejich doklady dál náleží této konkrétní zakázce. Výměna JSON sama nepřevede jinou složku podkladů do GIS nebo 3D. Rozhraní nyní očekává čtyři aktéry a čtyři karty dodávky; nepodporovaný tvar konfigurace odmítne.

## Archivace

K archivaci patří celá tato složka, ne samotné HTML. Nejdříve ověřit verzi a kontrolní součty, pak případně vytvořit ZIP nebo archivovat strom na SharePoint. Archivaci v tomto kroku neprovádíme. Živé ortofoto a plné 3D používají původní veřejné služby ČÚZK a ArcGIS; pro výpadek zůstávají místní podklady a náhradní 3D. Archivní uložení souborů samo nezajišťuje běh aplikace v náhledu úložiště.

## Zdroje a jejich role

- Původní dashboard: výchozí vzhled, funkce, dokumenty a odvozená data.
- Předchozí audit architektury: pořadí CSS, duplicity cen a plán migrace.
- Požadavek Kateřiny Kováříkové: nová složka, jeden JSON, zachování původní verze a ověření před archivací.
- `verification/source-baseline.json`: kontrolní součty původních podkladů.
- `verification/checks.json`, `integrity-and-live.json`, podadresáře kontrol map a 3D: konkrétní výsledky; nejde o nové právní ověření vlastnictví či opakovanou validaci historických výkresů.
