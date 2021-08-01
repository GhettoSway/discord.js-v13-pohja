# Discord.js v13 Botti pohja

Tämä pohja on tehty vapaaseen käyttöön kenelle tahansa. ( [MIT-lisenssi](https://fi.wikipedia.org/wiki/MIT-lisenssi) )

Mikäli sinulla on ongelmia asentamisessa tai missä tahansa asiassa, voit pyytää apua joko laittamalla minulle yksityiestiä discordissa (fobba#9999 ( 376058510150074369 )) tai liittymällä [Suomi Scripting discord kanavalle](https://discord.gg/t34QP4dZzW)

Mitä ominaisuuksia?

- ECMAScript 6 modulet ( ESM )
- Handler slash komennoille
  - Tukee sekä globaaleja-, että guild slash komentoja
- Event handler

#

# Käyttöönotto

Käyttääksesi tätä pohjaa tarvitset [Node.js](https://nodejs.org/en/), joka tulee olla vähintään versio 14.x

1. Avaa komentokehte ja siirry bottisi kansioon.

2. Aja komento `git clone <linkki>` ja siirry kansioon

3. Asenna tarvittavat npm paketit

4. Luo `.env` tiedosto ja täytä se `.envExample.txt` mukaisesti

5. Kopio application id ja käytä tätä linkkiä kutsuaksesi bottisi palvelimelle: https://discord.com/api/oauth2/authorize?client_id=APPLICATION-ID&permissions=8&scope=bot%20applications.commands
   ( Korvaa APPLICATION-ID bottisi id:llä )

6. Käynnistä botti ajamalla komento: `node index.js`

#

# Komennon lisääminen

Voit lisätä komennon luomalla uuden `.js` -tiedoston `/commands/<dir>/` -kansioon kopioimalla tämän pohjan:

```javascript
export async function command(client, interaction, args) {
	// Komennon koodi
}

export const config = {
	name: '',
	description: '',
	global: Boolean,
	options: [],
};
```

#

# Slash komennoista

Slash komentoja on 2 eri tyyppiä: global komennot ja guild komennot. Ero näiden välillä on se, että global komennot ovat käytettävissä jokaisella palvelimella missä botti on ja guild komennot vain tietyllä palvelimella. Global komentojen aktivoitumisessa voi mennä jopa 1 tunti riippuen discordista. Guild komennot latautuvat heti ja siksi ne ovatkin parempi tapa lähestyä kehitysvaiheessa tai siinä tapauksessa, mikäli botti on ja tulee olemaan vain yhdellä palvelimella. Voit itse määritellä mitkä komennoistasi haluat olevan globaaleja ja mitkä vain yhdellä palvelimella simppelisti. Tehdäksesi komennoista globaaleja kirjoittamalla komennon configiin `global: true` ( Kaikki komennot ovat defaulttina ei globaaleja )

#

# Event handleristä

Voit lisätä eventtejä luomalla `.js` -tiedoston `/events/<dir>/` -kansioon kopioimalla tämän pohjan:

```javascript
export async function event(client) {
	// eventin koodi
}
```

**Huomaa**, että saatat joutua lisäämään enemmän parametrejä event funktioon event kohtaisesti, muista kuitenkin, että client tulee olla jokaisessa event funktiossa ensimmäinen parametri

Eventin nimi määritellään tiedoston nimessä, nimeä siis tiedostot niin, että ensiksi on eventin nimi ja sitten `.js` -tiedostomuoto perässä, esimerkiksi: `interactionCreate.js` ( eventin nimi on interactionCreate )

**Huomaa** myös, että `ready` eventti on löytyy `./handler.js` -tiedostosta, eikä sitä tarvitse erikseen luoda.

#
