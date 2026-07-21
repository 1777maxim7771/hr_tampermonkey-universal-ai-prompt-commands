# Tampermonkey Universal AI Prompt Commands HR

**Tampermonkey Universal AI Prompt Commands HR** je userscript za proširenje **Tampermonkey**. Pomaže brže raditi s AI chatovima kao što su ChatGPT, Gemini, Claude, Copilot i druge stranice s tekstnim poljem.

Skripta zamjenjuje kratke naredbe poput `HR1`, `HR3` ili `HR10` dugim unaprijed pripremljenim AI promptovima.

---

## Čemu služi

Služi za brzo umetanje promptova za prijevod, sažimanje, analizu pisama, izvlačenje činjenica, službene odgovore i pripremu tekstova.

---

## Kako radi

Ako polje sadrži točnu poznatu naredbu, na primjer:

```text
HR1
```

ona se zamjenjuje potpunim promptom. Običan tekst se ne mijenja.

---

## Primjeri

- `HR1` — točan prijevod na hrvatski.
- `HR3` — sažetak pisma u jednom retku.
- `HR8` — izvlačenje datuma, iznosa, osoba, organizacija i dokumenata.
- `HR10` — službeno pismo na jednostavnom njemačkom A2-B1.

---

## Gdje koristiti

ChatGPT, Google Gemini, Claude, Microsoft Copilot i druge stranice s tekstnim poljem.

```javascript
// @match        *://*/*
```

Skripta radi na različitim stranicama, ali zamjenjuje samo točne naredbe.

---

## Prije instalacije

Najprije instalirajte proširenje **Tampermonkey**. Ono omogućuje instalaciju i pokretanje `.user.js` datoteka.

---

## Brza instalacija preko Raw

1. Instalirajte Tampermonkey.
2. Otvorite ovaj Raw link:

```text
https://raw.githubusercontent.com/1777maxim7771/hr_tampermonkey-universal-ai-prompt-commands/main/tampermonkey-universal-ai-prompt-commands.user.js
```

3. Potvrdite instalaciju u Tampermonkeyju.
4. Testirajte `HR1` u AI chatu.

---

## Instalacija s GitHuba

Otvorite `tampermonkey-universal-ai-prompt-commands.user.js`, kliknite **Raw** i potvrdite u Tampermonkeyju.

---

## Uvoz preko URL-a

Tampermonkey → Dashboard → Utilities → Import from URL → zalijepite Raw link.

---

## Ručna instalacija

Tampermonkey → Create a new script → obrišite predložak → zalijepite sadržaj `.user.js` → spremite s **Ctrl + S**.

---

## Zašto Tampermonkey prepoznaje skriptu

Zbog zaglavlja `// ==UserScript==` i nastavka `.user.js`. Skripta se instalira u **Tampermonkey**, ne u GitHub i ne na određenu stranicu.

---

## Naredbe

- `HR1` — prijevod na hrvatski.
- `HR2` — sažetak na hrvatskom.
- `HR3` — sažetak pisma u jednom retku.
- `HR4` — prijevod na njemački A2-B1.
- `HR5` — ispravak hrvatskog teksta.
- `HR6` — kratak službeni odgovor.
- `HR7` — jednostavno objašnjenje.
- `HR8` — izvlačenje važnih činjenica.
- `HR9` — popis potrebnih radnji.
- `HR10` — službeno pismo na njemačkom.

---

## Provjera

Upišite `HR1`. Ako se zamijeni potpunim promptom, skripta radi.

---

## Mogući problemi

Provjerite jesu li Tampermonkey i skripta uključeni, je li stranica osvježena i je li naredba napisana samostalno.

---

## Datoteka skripte

```text
tampermonkey-universal-ai-prompt-commands.user.js
```

---

## Cilj projekta

Ubrzati ponavljajući rad s AI chatovima pomoću kratkih naredbi koje umeću potpune promptove.