// ==UserScript==
// @name         Tampermonkey Universal AI Prompt Commands HR
// @namespace    local.tampermonkey.universal.ai.prompt.commands.hr
// @version      1.1.0
// @description  Hrvatska verzija: zamjenjuje univerzalne okidače Q1-Q10 gotovim AI promptovima za brzi unos u AI chatovima
// @author       1777maxim7771
// @match        *://*/*
// @grant        none
// @run-at       document-idle
// ==/UserScript==

(function(){'use strict';
/* Svrha: brži rad s ChatGPT, Gemini, Claude, Copilot i drugim AI chatovima. Q1-Q10 su univerzalni okidači i mogu se promijeniti u vlastite riječi ili fraze. */
const COMMANDS={
'Q1':`Prevedi zadani tekst potpuno i točno na hrvatski jezik.
Sačuvaj značenje, redoslijed informacija, imena, datume, iznose, brojeve dokumenata, nazive organizacija i važne formulacije.
Ne dodaj vlastite zaključke, ne skraćuj tekst i ne mijenjaj sadržaj.`,
'Q2':`Sažmi zadani tekst na hrvatskom jeziku prema značenju i kontekstu.
Objasni o čemu je tekst, tko kome piše, koja je glavna tema i koji se zahtjevi, molbe, odluke, datumi, rokovi, iznosi ili važni detalji spominju.`,
'Q3':`Napravi kratak tematski sažetak pisma na hrvatskom jeziku strogo u jednom retku.
Navedi pošiljatelja, temu, što se priopćava ili traži i koji su datumi, rokovi, iznosi, dokumenti ili radnje važni.`,
'Q4':`Prevedi zadani tekst na jednostavan i razumljiv njemački jezik razine A2-B1.
Tekst mora biti pristojan, služben i gramatički ispravan.
Sačuvaj izvorno značenje, datume, imena, iznose, adrese, organizacije i važne detalje.`,
'Q5':`Ispravi zadani hrvatski tekst.
Učini ga gramatički ispravnim, jasnim i logičnim, ali sačuvaj izvorno značenje.
Ukloni pogreške, ponavljanja, neprikladne formulacije i previše razgovorne dijelove.
Ne dodaj činjenice koje nisu u izvornom tekstu.`,
'Q6':`Napiši kratak, pristojan i službeni odgovor na ovo pismo na hrvatskom jeziku.
Odgovor mora biti jasan i konkretan, bez nepotrebnih rečenica.
Ako treba potvrditi primitak, razjasniti dokumente, zatražiti objašnjenje ili priopćiti informaciju, formuliraj to ispravno.`,
'Q7':`Objasni na hrvatskom jednostavnim riječima što ovaj tekst znači.
Analiziraj kontekst: tko piše, o kojem pitanju, što se traži, što treba učiniti i koji su rokovi, datumi, iznosi, dokumenti ili uvjeti važni.`,
'Q8':`Izdvoji sve važne činjenice iz zadanog teksta i strukturiraj ih na hrvatskom jeziku.
Navedi odvojeno: osobe, organizacije, adrese, datume, rokove, iznose, brojeve dokumenata, zahtjeve, odluke, obveze, spomenute dokumente i sljedeće korake.
Ne izmišljaj informacije. Ako nešto nedostaje, napiši: nije navedeno.`,
'Q9':`Izradi na hrvatskom jasan popis radnji koje treba izvršiti na temelju ovog teksta.
Odredi što treba učiniti, koje dokumente pripremiti, kome odgovoriti, kome se obratiti, koje rokove poštovati i na što obratiti pažnju.
Podijeli radnje po prioritetu: hitno, važno, može kasnije.`,
'Q10':`Sastavi pristojno službeno pismo na njemačkom jeziku na temelju zadanog teksta.
Pismo mora biti jednostavno, jasno i ispravno, razina A2-B1.
Sačuvaj sve važne činjenice: imena, datume, iznose, adrese, organizacije, brojeve dokumenata i okolnosti.
Završi s: Mit freundlichen Grüßen`};
const S=['textarea','input[type="text"]','input[type="search"]','[contenteditable="true"]','[contenteditable="plaintext-only"]','[role="textbox"]'];
function ie(e){if(!e||!e.matches)return false;if(e.disabled||e.readOnly)return false;const t=e.tagName?e.tagName.toLowerCase():'';const y=(e.getAttribute('type')||'').toLowerCase();if(t==='input'&&!['text','search'].includes(y))return false;return S.some(s=>e.matches(s));}
function fe(t){if(!t)return null;if(ie(t))return t;if(t.closest){const e=t.closest(S.join(','));if(ie(e))return e;}return null;}
function gt(e){const t=e.tagName?e.tagName.toLowerCase():'';return(t==='textarea'||t==='input')?(e.value||''):(e.innerText||e.textContent||'');}
function nc(x){return String(x||'').trim().replace(/\s+/g,'').toUpperCase();}
function end(e){e.focus();const t=e.tagName?e.tagName.toLowerCase():'';if(t==='textarea'||t==='input'){const l=e.value.length;e.setSelectionRange(l,l);return;}const r=document.createRange(),s=window.getSelection();r.selectNodeContents(e);r.collapse(false);s.removeAllRanges();s.addRange(r);}
function ev(e,text){try{e.dispatchEvent(new InputEvent('input',{bubbles:true,cancelable:true,inputType:'insertReplacementText',data:text}));}catch(_){e.dispatchEvent(new Event('input',{bubbles:true}));}e.dispatchEvent(new Event('change',{bubbles:true}));}
function rt(e,text){const t=e.tagName?e.tagName.toLowerCase():'';e.focus();if(t==='textarea'||t==='input'){e.value=text;end(e);ev(e,text);return;}try{const r=document.createRange(),s=window.getSelection();r.selectNodeContents(e);s.removeAllRanges();s.addRange(r);document.execCommand('insertText',false,text);}catch(_){e.textContent=text;}end(e);ev(e,text);}
function note(m){const o=document.getElementById('tampermonkey-universal-ai-prompt-commands-notification');if(o)o.remove();const b=document.createElement('div');b.id='tampermonkey-universal-ai-prompt-commands-notification';b.textContent=m;b.style.cssText='position:fixed;right:20px;bottom:20px;z-index:999999;background:#111;color:#fff;padding:12px 18px;border-radius:10px;font:14px Arial,sans-serif;box-shadow:0 4px 12px rgba(0,0,0,.35)';document.body.appendChild(b);setTimeout(()=>b.remove(),2200);}
function cr(t){const e=fe(t);if(!e)return;const c=nc(gt(e));if(!Object.prototype.hasOwnProperty.call(COMMANDS,c))return;rt(e,COMMANDS[c]);note(`Okidač ${c} zamijenjen je gotovim AI promptom`);}
document.addEventListener('input',e=>setTimeout(()=>cr(e.target),20),true);document.addEventListener('keyup',e=>setTimeout(()=>cr(e.target),20),true);document.addEventListener('paste',e=>setTimeout(()=>cr(e.target),50),true);
})();