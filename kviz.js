let kviz = document.createElement("div");
kviz.classList.add(".kviz")

let poleOdpoved = [
{odpoved: "Kočičák"},
{odpoved: "Mončičák"},
{odpoved: "Opičák"}
]

const otazky = [
    {otazka: "Co je ikonická hračka z 80. let?", foto: "obrazky/moncicak.jpg", jmeno: "mončičák"},
    {otazka: "Jaké je Matějovo nejoblíbenější ovoce?", foto: "obrazky/ovoce.jpg", jmeno: "ovoce"},
    {otazka: "Pro úspěšné absolvování kurzu je potřeba...", foto: "obrazky/pivo.jpg", jmeno: "pivo"}
]
console.log(otazky)

for (i=0; i < otazky.length; i++) {
let otazka = document.createElement("h1");
otazka.textContent = otazky.otazka;

let otazkaPoradi = document.createElement("h3")
otazkaPoradi.classList.add("#poradi")


let obrazekOtazka = document.createElement("img");
obrazekOtazka.classList.add("#obrazek");
obrazekOtazka.src = otazky[i].foto;
obrazekOtazka.alt = otazky[i].jmeno;

let odpoved = document.createElement("li");
odpoved.classList.add("#li");
odpoved.textContent = poleOdpoved;
console.log(odpoved)

let odpovedi = document.createElement("ul");
odpovedi.classList.add("#odpovedi");
console.log(otazka)

let vyber = document.createElement("div");

// vyber.appendChild(otazky)
// vyber.appendChild(odpoved)

// kviz.appendChild(vyber);

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