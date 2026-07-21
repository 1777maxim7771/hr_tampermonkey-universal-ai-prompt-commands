// ==UserScript==
// @name         Tampermonkey Universal AI Prompt Commands HR
// @namespace    local.tampermonkey.universal.ai.prompt.commands.hr
// @version      1.0.0
// @description  Zamjenjuje kratke naredbe HR1-HR10 gotovim AI promptovima u AI chatovima.
// @author       1777maxim7771
// @match        *://*/*
// @grant        none
// @run-at       document-idle
// ==/UserScript==

(function () {
    'use strict';

    // Hrvatska verzija. Zamjenjuje se samo točna naredba potpunim promptom.
    const COMMANDS = {
        'HR1': `Prevedi dostavljeni tekst na hrvatski jezik potpuno i točno. Sačuvaj smisao, redoslijed informacija, imena, datume, iznose, brojeve dokumenata, organizacije i važne formulacije. Ne dodaj vlastite zaključke i ne skraćuj sadržaj.`,
        'HR2': `Sažmi dostavljeni tekst na hrvatskom jeziku prema smislu i kontekstu. Objasni o čemu se radi, tko kome piše, koja je glavna tema i koji su zahtjevi, odluke, datumi, rokovi, iznosi ili važni detalji navedeni.`,
        'HR3': `Napravi na hrvatskom vrlo kratak tematski sažetak ovog pisma, strogo u jednom retku. Navedi pošiljatelja, temu, što se priopćava ili traži i koji su datumi, rokovi, iznosi, dokumenti ili koraci važni.`,
        'HR4': `Prevedi dostavljeni tekst na jednostavan i razumljiv njemački jezik, razina A2-B1. Formuliraj tekst pristojno, službeno i gramatički ispravno. Sačuvaj smisao, imena, datume, iznose, adrese, organizacije i važne detalje.`,
        'HR5': `Ispravi dostavljeni hrvatski tekst. Učini ga gramatički ispravnim, jasnim, logičnim i prirodnim, ali sačuvaj izvorni smisao. Ukloni pogreške, ponavljanja i neprikladne formulacije. Ne dodaj činjenice kojih nema u izvornom tekstu.`,
        'HR6': `Napiši kratak, pristojan i služben odgovor na ovo pismo na hrvatskom jeziku. Odgovori konkretno na sadržaj, bez nepotrebnih rečenica. Ako je potrebno, potvrdi primitak, zatraži pojašnjenje, navedi dokumente ili priopći tražene informacije.`,
        'HR7': `Objasni na hrvatskom jednostavnim riječima što ovaj tekst znači. Analiziraj kontekst, tko piše, kome, o kojoj temi, što se traži, što treba učiniti i koji su datumi, rokovi, iznosi, dokumenti ili uvjeti važni.`,
        'HR8': `Izvuci iz teksta sve važne činjenice i strukturiraj ih na hrvatskom jeziku. Posebno navedi osobe, organizacije, adrese, datume, rokove, iznose, brojeve dokumenata, zahtjeve, odluke, obveze, spomenute dokumente i sljedeće korake. Ne izmišljaj informacije.`,
        'HR9': `Sastavi na hrvatskom jasan popis potrebnih radnji na temelju ovog teksta. Navedi što treba učiniti, koje dokumente pripremiti, kome odgovoriti, kamo se obratiti, koje rokove poštovati i na što obratiti pozornost. Poredaj radnje po prioritetu.`,
        'HR10': `Na temelju dostavljenog teksta napiši pristojno službeno pismo na jednostavnom njemačkom jeziku, razina A2-B1. Sačuvaj imena, datume, iznose, adrese, organizacije, brojeve dokumenata i okolnosti. Strukturiraj pismo s pozdravom, kratkim objašnjenjem, glavnim zahtjevom i završetkom. Završi s: Mit freundlichen Grüßen`
    };

    const EDITABLE_SELECTORS = ['textarea', 'input[type="text"]', 'input[type="search"]', '[contenteditable="true"]', '[contenteditable="plaintext-only"]', '[role="textbox"]'];
    function isEditableElement(element) { if (!element || !element.matches) return false; if (element.disabled || element.readOnly) return false; const tagName = element.tagName ? element.tagName.toLowerCase() : ''; const inputType = (element.getAttribute('type') || '').toLowerCase(); if (tagName === 'input' && !['text', 'search'].includes(inputType)) return false; return EDITABLE_SELECTORS.some(selector => element.matches(selector)); }
    function findEditableElement(target) { if (!target) return null; if (isEditableElement(target)) return target; if (target.closest) { const element = target.closest(EDITABLE_SELECTORS.join(',')); if (isEditableElement(element)) return element; } return null; }
    function getText(element) { const tagName = element.tagName ? element.tagName.toLowerCase() : ''; return tagName === 'textarea' || tagName === 'input' ? element.value || '' : element.innerText || element.textContent || ''; }
    function normalizeCommand(text) { return String(text || '').trim().replace(/\s+/g, '').toUpperCase(); }
    function dispatchInputEvents(element, text) { try { element.dispatchEvent(new InputEvent('input', { bubbles: true, cancelable: true, inputType: 'insertReplacementText', data: text })); } catch (error) { element.dispatchEvent(new Event('input', { bubbles: true })); } element.dispatchEvent(new Event('change', { bubbles: true })); }
    function setCursorToEnd(element) { element.focus(); if ('selectionStart' in element) { const length = element.value.length; element.setSelectionRange(length, length); return; } const range = document.createRange(); const selection = window.getSelection(); range.selectNodeContents(element); range.collapse(false); selection.removeAllRanges(); selection.addRange(range); }
    function replaceText(element, newText) { const tagName = element.tagName ? element.tagName.toLowerCase() : ''; element.focus(); if (tagName === 'textarea' || tagName === 'input') { element.value = newText; } else { try { const range = document.createRange(); const selection = window.getSelection(); range.selectNodeContents(element); selection.removeAllRanges(); selection.addRange(range); document.execCommand('insertText', false, newText); } catch (error) { element.textContent = newText; } } setCursorToEnd(element); dispatchInputEvents(element, newText); }
    function showNotification(message) { const oldBox = document.getElementById('tm-ai-prompt-commands-notification'); if (oldBox) oldBox.remove(); const box = document.createElement('div'); box.id = 'tm-ai-prompt-commands-notification'; box.textContent = message; box.style.cssText = 'position:fixed;right:20px;bottom:20px;z-index:999999;background:#111;color:#fff;padding:12px 18px;border-radius:10px;font:14px Arial,sans-serif;box-shadow:0 4px 12px rgba(0,0,0,.35);max-width:420px;line-height:1.4'; document.body.appendChild(box); setTimeout(() => box.remove(), 2200); }
    function checkAndReplace(target) { const editable = findEditableElement(target); if (!editable) return; const command = normalizeCommand(getText(editable)); if (!Object.prototype.hasOwnProperty.call(COMMANDS, command)) return; replaceText(editable, COMMANDS[command]); showNotification(`Naredba ${command} zamijenjena je gotovim AI promptom`); }
    document.addEventListener('input', event => setTimeout(() => checkAndReplace(event.target), 20), true);
    document.addEventListener('keyup', event => setTimeout(() => checkAndReplace(event.target), 20), true);
    document.addEventListener('paste', event => setTimeout(() => checkAndReplace(event.target), 50), true);
})();