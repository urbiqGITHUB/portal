---
title: "Mnichovo Hradiště – podklady projektového dashboardu"
created_at: "2026-11-19 15:38:55"
created_by: "Codex - Kateřina Kováříková"
updated_at: "2026-11-19 15:38:55"
updated_by: "Codex"
timezone: "Europe/Prague"
dialogue: "https://chatgpt.com/codex"
dialogue_iteration: 1
version_id: "JZM-GITHUB-DATA-20261119-v01"
status: "prepared-for-portal-integration"
revised_by: null
---

# Účel a cíl

Datová složka pro projektový dashboard připojovaný v platform.urbiq.eu/portal. Uživatelka požaduje uložení celého projektu včetně podpůrných složek do veřejného repozitáře. Jde o zdroj dat; samotný GitHub repozitář nevykonává HTML aplikaci.

## Připojení v Macaly

- URL repozitáře: https://github.com/urbiqGITHUB/portal
- Větev: main (po úspěšném přenosu).
- Cesta datové složky: `dashboards/mnichovo-hradiste`
- HTML pro vložení do portálu: `dashboard.html` uvnitř této složky.
- Zvolit celou projektovou složku, nikoli jen `sources/` nebo `documents/`.
- Zachovat všechny názvy a relativní cesty. Přibalené PDF jsou v `sources/`, přepisy a vytěžené obrázky v `documents/`, náhledy v `previews/`. Mapová/3D data a ovládání mají vlastní složky a soubory uvedené v `dashboard-files.json`.

Host musí kromě relativního fetch/XHR a PDF načítat i lokální CSS, JavaScript, obrázky a další zdroje z této složky. GitHub raw URL pro JavaScript může mít nevhodný MIME typ; host má zdroje poskytovat správným typem ze své domény nebo ověřeného proxy. Pouhé přepsání fetch nestačí k vykreslení tohoto dashboardu. Přímý odkaz na PDF může být stažením; výchozí dokumentová prohlížečka používá rovněž přibalené obrazové náhledy.

## Rozsah a ověření

Zachováno 1368 ověřených souborů aplikace a podkladů, bez velkého ZIPu a bez historie lokálního vývoje. Největší soubor je pod limitem 100 MiB GitHubu pro Git přenos. Balíček prošel 17 lokálními HTTP kontrolami včetně dostupnosti všech souborů, dokumentu S003 / strany 8, mapy, rozpočtu a fallbacku 3D. Skutečné napojení Macaly a jeho proxy dosud ověřeno nebylo.

Živé podklady ČÚZK a plné 3D využívají externí služby. Uživatelské hodnocení je v localStorage, pracovní rozpočet v sessionStorage; nejedná se o sdílenou databázi. Veřejný repozitář zpřístupňuje podklady i mimo přihlášení do portálu. Neobsahuje soukromé účty ani komentáře uživatelů portálu; zveřejněné projektové podklady zahrnují dokumenty zadání a pracovní nabídku.

## Zdroje a role

- Požadavek Kateřiny Kováříkové a snímek nastavení „Datový zdroj GitHub“: veřejná projektová složka, HTML vložené samostatně, ruční aktualizace a připnutí revize.
- Lokální ověřený balíček `261119_portal_macaly_v01`: přesná kopie aplikace a podpůrných souborů.
- `dashboard-files.json`: soupis podkladů a jejich SHA-256.
- https://docs.github.com/en/repositories/working-with-files/managing-files/adding-a-file-to-a-repository: limit 25 MiB pro webový formulář a 100 MiB pro Git.
- Přesný odkaz na chat není dostupný; hlavička obsahuje obecný odkaz Codex.
