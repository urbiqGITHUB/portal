---
title: "Mnichovo Hradiště – aktualizace Macaly a GitHub"
created_at: "2026-11-19T22:03:53+01:00"
created_by: "Codex - Kateřina Kováříková"
updated_at: "2026-11-19T22:03:53+01:00"
updated_by: "Codex"
revised_by: null
timezone: "Europe/Prague"
codex_dialogue: "https://chatgpt.com/codex"
dialogue_iteration: 1
version_id: "URBIQ-PORTAL-20261119-v02"
status: "prepared-locally"
---

# Účel a cíl

Aktualizovat dashboard v existujícím portálu bez změny routy a bez nahrávání velkého ZIPu. HTML a data musí pocházet ze stejného vydání. Obsahuje migraci na project.json a společné CSS, řazení vlastnických bilancí, opravené osy budgetu a větší názvy partnerů.

## Nahrání do Macaly

1. Nahrajte `macaly/dashboard.html` z předávací složky jako nové HTML stávajícího dashboardu. Podklady a kód jsou v projektové složce repozitáře; samotné HTML není offline balíček.
2. Datový zdroj GitHub ponechte `https://github.com/urbiqGITHUB/portal`, větev `main`, složku `dashboards/mnichovo-hradiste`. Přímá URL složky: https://github.com/urbiqGITHUB/portal/tree/main/dashboards/mnichovo-hradiste.
3. Až je nový commit dostupný na GitHubu, použijte „Ověřit připojení“, zkontrolujte navrženou revizi a „Použít aktualizaci dat“. Nahrajte nové HTML i aktualizujte data, aby se nemíchaly verze.
4. V náhledu ověřte Dokumenty, Mapu s řazením vlastnických bilancí a Nabídku → Rozdělení budgetu. Úchyty musí zůstat na ose i při rozdělení Čistopisu 190 / 40 / 90 / 60 tisíc Kč.

## Požadavky hostitele

Host musí relativní adresy řešit proti zvolené projektové složce, včetně `project.json`, `dashboard.css`, `project-config.js`, `project-bootstrap.js`, dynamicky načítaných skriptů z atributu `data-src`, obrázků, PDF a přepisů. JavaScript a CSS musí dostat správný MIME typ; pouhé přesměrování PDF a fetch bez načítání skriptů nestačí. Konfigurace se přes HTTP načítá přímo, při chybě aplikace zobrazí chybu. Živé služby ČÚZK a ArcGIS potřebují síť; místní podklady a náhradní 3D jsou zachovány.

Toto vydání nemění implementaci Macaly. Provedený lokální test nasazení není potvrzením funkčnosti skutečné Macaly proxy, její CSP nebo publikované stránky. Zveřejněný GitHub datový zdroj má stejný veřejný rozsah jako dosavadní projekt; přihlášení do portálu veřejné soubory repozitáře nechrání.

## Ruční úpravy a Git

Projektové údaje, výchozí částky a harmonogram upravujte v `project.json`. Potom v projektové složce spusťte `node rebuild_project.cjs`, commitněte změněné soubory a aktualizujte HTML i datovou revizi v portálu. CSS upravujte ve `styles/source/`, pořadí je ve `styles/order.json`; sestavení vytvoří jeden `dashboard.css`. Podrobnosti: `CONFIGURATION.md`.

Uživatelské částky z relace se nepřenášejí mezi prohlížeči. Výchozí rozdělení urbiq zůstává podle project.json celkem 620 000 Kč; hodnota 700 000 Kč v kontrolním snímku je pouze pracovní test změny sliderů.

## Zdroje a role

- `261119_project_workspace_v01`: současný lokální master a ověřená zdrojová data.
- Požadavek Kateřiny Kováříkové: aktualizovat HTML pro Macaly a data v existujícím GitHub repozitáři, poté uložit do Gitu.
- Stávající nastavení „Datový zdroj GitHub“: oddělené HTML, projektová složka a připnutá revize dat.
- Manifest vydání a ověření v předávací složce: soubory, SHA-256 a lokální kontrola HTTP; stav vzdáleného přenosu je uveden samostatně.
