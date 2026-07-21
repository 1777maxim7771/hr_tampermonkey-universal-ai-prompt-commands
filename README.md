# Tampermonkey Universal AI Prompt Commands HR

Hrvatska verzija Tampermonkey skripte za brži rad s chatovima umjetne inteligencije.

Skripta zamjenjuje univerzalne okidače `Q1–Q10` gotovim AI promptovima. Ti okidači nisu vezani uz jezik: korisnik može zamijeniti `Q1`, `Q2` i ostale vlastitim riječima, naredbama ili frazama.

## Čemu služi

Služi za brzo umetanje promptova u ChatGPT, Gemini, Claude, Copilot i druge AI chatove. Umjesto ponovnog pisanja duge upute dovoljno je napisati `Q1` i skripta će umetnuti cijeli prompt.

## Kako radi

Skripta prati aktivno tekstualno polje. Ako cijeli sadržaj polja točno odgovara jednom od okidača `Q1–Q10`, zamjenjuje se pripremljenim promptom.

```text
Q1
```

zamjenjuje se promptom za prijevod na hrvatski jezik.

```text
Q8
```

zamjenjuje se promptom za izdvajanje važnih činjenica.

Običan tekst se ne mijenja. Na primjer `Q1 drugi tekst` neće biti zamijenjen.

## Vlastiti okidači

Okidači se mogu promijeniti u kodu, u objektu `COMMANDS`.

```javascript
'Q1': `...`
```

može postati:

```javascript
'PREVEDI': `...`
```

`Q1–Q10` su samo zadani univerzalni okidači.

## Gdje koristiti

- ChatGPT
- Google Gemini
- Claude
- Microsoft Copilot
- druge stranice s tekstualnim poljem

Skripta sadrži:

```javascript
// @match        *://*/*
```

## Preduvjet prije instalacije

U pregledniku mora biti instalirano proširenje **Tampermonkey**. Skripta se instalira u Tampermonkey, ne u GitHub i ne u određenu web-stranicu. GitHub služi samo za pohranu datoteke `.user.js`.

## Brza instalacija

1. Instalirajte Tampermonkey.
2. Otvorite Raw poveznicu:

```text
https://raw.githubusercontent.com/1777maxim7771/hr_tampermonkey-universal-ai-prompt-commands/main/tampermonkey-universal-ai-prompt-commands.user.js
```

3. Potvrdite instalaciju u Tampermonkey.
4. Otvorite AI chat i upišite `Q1`.

## Instalacija preko GitHuba

Otvorite datoteku `tampermonkey-universal-ai-prompt-commands.user.js`, kliknite **Raw** i potvrdite instalaciju u Tampermonkey.

## Uvoz preko URL-a

U Tampermonkey otvorite **Dashboard → Utilities → Import from URL**, zalijepite Raw poveznicu i potvrdite.

## Ručna instalacija

Stvorite novu skriptu u Tampermonkey, zalijepite kod iz `.user.js` datoteke i spremite.

## Zašto Tampermonkey prepoznaje skriptu

Tampermonkey prepoznaje zaglavlje `// ==UserScript==` i nastavak datoteke `.user.js`.

## Zadane naredbe

- `Q1` — prijevod na hrvatski jezik.
- `Q2` — sažetak teksta.
- `Q3` — sažetak pisma u jednom retku.
- `Q4` — prijevod na jednostavan njemački A2-B1.
- `Q5` — ispravak hrvatskog teksta.
- `Q6` — kratak službeni odgovor.
- `Q7` — jednostavno objašnjenje teksta.
- `Q8` — izdvajanje važnih činjenica.
- `Q9` — popis potrebnih radnji.
- `Q10` — službeno pismo na njemačkom jeziku.

## Provjera

Upišite `Q1` u AI chat. Ako skripta radi, `Q1` će biti zamijenjen cijelim promptom.

## Mogući problemi

Provjerite je li skripta uključena, je li stranica ponovno učitana, je li `Q1` upisan bez dodatnog teksta, ima li Tampermonkey dopuštenje na stranici i nalazi li se kursor u polju za uređivanje.

## Cilj projekta

Ubrzati ponavljajući rad s AI chatovima: prijevod, sažimanje, analizu pisama, službene odgovore i obradu dokumenata.
