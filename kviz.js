let kviz = document.querySelector("div");
kviz.classList.add(".kviz")

let poleOdpovedi = [
{dataOdpoved: "Kočičák"},
{dataOdpoved: "Mončičák"},
{dataOdpoved: "Opičák"},
{dataOdpoved: "Kokos"},
{dataOdpoved: "Melounek"},
{dataOdpoved: "Jahoda"},
{dataOdpoved: "Ani jedna z možností"},
{dataOdpoved: "Umět JavaScript"},
{dataOdpoved: "Chodit po kurzu do hospody"}
]

const otazky = [
    {otazka: "Co je ikonická hračka z 80. let?", foto: "obrazky/moncicak.jpg", jmeno: "mončičák"},
    {otazka: "Jaké je Matějovo nejoblíbenější ovoce?", foto: "obrazky/ovoce.jpg", jmeno: "ovoce"},
    {otazka: "Pro úspěšné absolvování kurzu je potřeba...", foto: "obrazky/pivo.jpg", jmeno: "pivo"}
]
console.log(otazky)

//for cyklus v kterém je napsán kvíz :/
for (i=0; i < otazky.length; i++) {
let otazka = document.createElement("div")

let otazkaNadpis = document.createElement("h2");
otazkaNadpis.textContent = "Otázka" + " " + 1
otazkaNadpis.classList.add("#otazka")

//otázka
let otazkaPoradi = document.createElement("p")
otazkaPoradi.classList.add("#poradi")
otazkaPoradi.textContent = otazky[0].otazka

//div, který obsahuje div foto, obrázek a seznam odpovědí
let obsah = document.createElement("div");
obsah.classList.add(".obsah")

//obrázek k otázce
let obrazekOtazka = document.createElement("img");
obrazekOtazka.classList.add("#obrazek");
obrazekOtazka.src = otazky[0].foto;
obrazekOtazka.alt = otazky[0].jmeno;

//div, který obsahuje obrázek
let foto = document.createElement("div")
foto.classList.add(".foto")

//div, který obsahuje seznam odpovědí
let moznosti = document.createElement("div")
moznosti.classList.add("#moznosti")

//seznam, který obsahuje odpovědi
let odpovedi = document.createElement("ul")
odpovedi.textContent = poleOdpovedi.dataOdpoved
odpovedi.classList.add("#odpovedi")

//li vytvořené JS, které obsahuje jednotlivé položky odpovědí
let odpoved = document.createElement("li");
odpoved.classList.add("li");
odpoved.textContent = poleOdpovedi[i].dataOdpoved;
console.log(odpoved)
// odpoved.onclick = priKliknuti({
    
// })

odpovedi.appendChild(odpoved)
moznosti.appendChild(odpovedi)

foto.appendChild(obrazekOtazka)

obsah.appendChild(foto)
obsah.appendChild(moznosti)

otazka.appendChild(obsah)
otazka.appendChild(otazkaNadpis)
otazka.appendChild(otazkaPoradi)

kviz.appendChild(otazka);

}

// Nejdříve si vytvoř objekt, který bude držet voje super otázky :-)

// Dále budeš potřebovat další proměnné - jaké?


// Tato funkce se postará o vygenerování otázky
// Zavoláme ji jednou na začátku a poté vždy po odpovězení
function zobrazOtazku() {}

// Funkce se postará o obsluhu kliknutí na odpověď
// Musíme ji navázat na kokrétní odpovědi každé otázky (to uděláme v rámci funkce zobrazOtazku())
function klikNaOdpoved() {}

// Když už mám odpovězeno na vše (řídí se velikosí objektu otazky na řádku 3), tak mohu zobrazi výsledky
// Vypočítám skóre a nageneruje nové elementy do HTML
// Touto funkcí končí můj program (budu se rozhodovat, zda ji zavolat v rámci klikNaOdpoved())
function zobrazVyhodnoceni() {}