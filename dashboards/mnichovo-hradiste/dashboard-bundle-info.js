/* Inline inventory remains readable even when companion JavaScript fails. */
(()=>{'use strict';const original=document.getElementById('workspaceBundleFiles');if(!original)return;
const dialog=document.createElement('dialog');dialog.id='dashboardFilesDialog';dialog.setAttribute('aria-labelledby','dashboardFilesTitle');
const close=document.createElement('button');close.type='button';close.textContent='×';close.className='dialog-close';close.setAttribute('aria-label','Zavřít soupis souborů');close.onclick=()=>dialog.close();
const title=document.createElement('h2');title.id='dashboardFilesTitle';title.textContent='Partnerská příprava · soubory dashboardu';
const copy=original.cloneNode(true);copy.removeAttribute('id');copy.open=true;dialog.append(close,title,copy);document.body.append(dialog);
const button=document.createElement('button');button.type='button';button.textContent='Soubory dashboardu';button.className='doc-source-link';button.onclick=()=>dialog.showModal();document.querySelector('#overview .overview-evidence article').append(button);dialog.addEventListener('close',()=>button.focus({preventScroll:true}));
})();
