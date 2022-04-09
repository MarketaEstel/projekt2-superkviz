let kviz = document.createElement("div");
kviz.classList.add(".kviz")

let poleOdpoved = [
{odpoved: "Kočičák"},
{odpoved: "Mončičák"},
{odpoved: "Opičák"}
]

let poleOtazek = [
    {otazka: "Co je ikonická hračka z 80. let?", foto: "obrazky/moncicak.jpg", jmeno: "mončičák"},
    {otazka: "Jaké je Matějovo nejoblíbenější ovoce?", foto: "obrazky/ovoce.jpg", jmeno: "ovoce"},
    {otazka: "Pro úspěšné absolvování kurzu je potřeba...", foto: "obrazky/pivo.jpg", jmeno: "pivo"}
]
console.log(poleOtazek)

for (i=0; i < poleOtazek.length; i++) {
let otazka = document.createElement("h1");
otazka.textContent = poleOtazek.otazka;

let otazkaPoradi = document.createElement("h3")
otazkaPoradi.classList.add("#poradi")


let obrazekOtazka = document.createElement("img");
obrazekOtazka.classList.add("#obrazek");
obrazekOtazka.src = poleOtazek[i].foto;
obrazekOtazka.alt = poleOtazek[i].jmeno;

let odpoved = document.createElement("li");
odpoved.classList.add("#li");
odpoved.textContent = poleOdpoved;
console.log(odpoved)

let odpovedi = document.createElement("ul");
odpovedi.classList.add("#odpovedi");
console.log(otazka)

let vyber = document.createElement("div");
vyber.appendChild(obrazekOtazka)
vyber.appendChild(odpoved)

kviz.appendChild(vyber);

}




