
const otazky = [
    { otazka: "Co je ikonická hračka z 80. let?", foto: "obrazky/moncicak.jpg", jmeno: "mončičák" },
    { otazka: "Jaké je Matějovo nejoblíbenější ovoce?", foto: "obrazky/ovoce.jpg", jmeno: "ovoce" },
    { otazka: "Pro úspěšné absolvování kurzu je potřeba...", foto: "obrazky/pivo.jpg", jmeno: "pivo" }
];
console.log(otazky);
//for cyklus v kterém je napsán kvíz  



    for (i = 0; i < otazky.length; i = i + 1) {

    let kviz = document.querySelector("div");
    kviz.classList.add(".kviz");

        let poradi = document.querySelector("p");
        poradi.textContent = "Pořadí" + " " + "1/3"

        let nadpis = document.querySelector("h2");
        nadpis.textContent = otazky[i].otazka;

            let obsah = document.querySelector("div");
            
                let foto = document.createElement("div");
                foto.className = "foto"

                let img = document.createElement("img");
                img.id = "obrazek"
                img.src = otazky[i].foto;
                
                foto.appendChild(img)
                obsah.appendChild(foto)
                kviz.appendChild(obsah) 

                let odpoved = document.querySelector("li").dataset.dataOdpoved
                console.log(odpoved)
            
    }

function zobrazOtazku() {}
 

// Nejdříve si vytvoř objekt, který bude držet tvoje super otázky :-) 
// Dále budeš potřebovat další proměnné - jaké?
// Tato funkce se postará o vygenerování otázky
// Zavoláme ji jednou na začátku a poté vždy po odpovězení
function priKliknuti() { } 

// Funkce se postará o obsluhu kliknutí na odpověď
// Musíme ji navázat na kokrétní odpovědi každé otázky (to uděláme v rámci funkce zobrazOtazku())
function klikNaOdpoved() { }

// Když už mám odpovězeno na vše (řídí se velikosí objektu otazky na řádku 3), tak mohu zobrazi výsledky
// Vypočítám skóre a nageneruje nové elementy do HTML
// Touto funkcí končí můj program (budu se rozhodovat, zda ji zavolat v rámci klikNaOdpoved())
function zobrazVyhodnoceni() { }
