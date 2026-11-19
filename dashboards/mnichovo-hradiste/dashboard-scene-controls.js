/* Presentational composition of existing 3D settings. No data or source changes. */
(()=>{'use strict';
const settings=document.getElementById('sceneSettings'),el=(tag,cls)=>{const e=document.createElement(tag);if(cls)e.className=cls;return e;};
const head=el('header','scene-settings-head'),title=settings.querySelector('h2'),close=settings.querySelector('.dialog-close'),body=el('div','scene-settings-body');
title.id='sceneSettingsTitle';settings.setAttribute('aria-labelledby',title.id);head.append(title,close);
const toolbar=settings.querySelector('.compare-toolbar'),projects=toolbar.querySelector('details'),checks=el('div','scene-setting-checks'),numbers=el('div','scene-setting-numbers');
for(const label of [...toolbar.querySelectorAll(':scope > label')]){(label.querySelector('input[type=checkbox]')?checks:numbers).append(label);}
const exportButton=document.getElementById('compareExport');toolbar.replaceChildren(checks,numbers,exportButton);projects.classList.add('scene-project-filter');
const context=settings.querySelector('fieldset'),contextOptions=el('div','scene-setting-checks');for(const label of [...context.querySelectorAll(':scope > label')]){if(label.querySelector('input[type=checkbox]'))contextOptions.append(label);else label.classList.add('scene-context-opacity');}context.querySelector('legend').after(contextOptions);context.classList.add('scene-context-settings');
const fallback=document.getElementById('contextFallback').parentElement;fallback.lastChild.textContent=' Doplnit neověřené výšky · 6 m';fallback.title='Volitelný schematický předpoklad 6 m pro budovy bez doložené výšky';context.querySelector('p').append(document.createTextNode(' Volitelné doplnění 6 m je pouze schematický předpoklad.'));
const note=document.querySelector('#scene > .comparison-note'),method=el('section','scene-method-note'),h=el('h3');h.textContent='Jak číst model a bilance';method.append(h);if(note)method.append(note);const help=el('p');help.textContent='Otáčení je výchozí zapnuté. Ikonou šipek vpravo nahoře jej uzamknete; na mobilu pak můžete tahem posouvat seznam scén. Sousední ikona zobrazí celé území. Krytí mění pouze zobrazení, nikoli bilance jednotlivých návrhů.';method.append(help);
body.append(projects,toolbar,context,document.getElementById('sceneAdvanced'),method);settings.replaceChildren(head,body);
const heading=document.querySelector('#scene > .section-bar');heading.classList.add('scene-heading');const gear=heading.querySelector('button[aria-label="Nastavení 3D modelu"]');if(gear){gear.classList.add('scene-settings-trigger');heading.append(gear);}
})();
