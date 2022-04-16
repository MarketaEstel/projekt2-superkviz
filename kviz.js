
const poleOtazek = [
    {
    poradi: 1,
    otazka: "Co je ikonická hračka z 80. let?", 
    foto: "obrazky/moncicak.jpg", 
    jmeno: "mončičák",
    odpovedi: 
    ["Kočičák",
    "Mončičák",
    "Opičák"],
    },
    
    {
    poradi: 2,
    otazka: "Jaké je Matějovo nejoblíbenější ovoce?", 
    foto: "obrazky/ovoce.jpg", 
    jmeno: "ovoce", 
    odpovedi: 
    ["Kokos", 
    "Melounek", 
    "Jahoda", 
    "Ani jedna z možností"],
    },
    
    {
    poradi: 3,
    otazka: "Pro úspěšné absolvování kurzu je potřeba...", 
    foto: "obrazky/pivo.jpg", 
    jmeno: "pivo",
    odpovedi: 
    ["Umět JavaScript",
    "Chodit po kurzu do hospody"],
    }
];

//for cyklus v kterém je napsán kvíz  

        let vybranaOdpoved = [] //do vybrané odpovedi se bude ukládat to, na co kliknou
        
        let kviz = document.querySelector("div");
        let odpovediOdstavec = document.querySelector("ul")
        let odpoved = document.createElement("li")
        let poradi = document.querySelector("p");
        let otazka = document.querySelector("h2")

        let foto = document.querySelector("div");
            
        let img = document.createElement("img");
        img.id = "obrazek"
        img.src = poleOtazek[0].foto
        img.alt = poleOtazek.jmeno

        foto.appendChild(img)
             
        for (let i = 0; i < poleOtazek.length; i++) {
            vybranaOdpoved.push(i)
            poradi.textContent = "Pořadí" + " " + poleOtazek[i].poradi + "/" + poleOtazek.length
        }
           
        for (let i = 0; i < 1; i++) {   
            otazka.textContent = poleOtazek[i].otazka
            console.log(otazka)
        }
                   
        for (let a = 0; a < poleOtazek[0].odpovedi.length; a++) {
            odpoved.textContent = poleOtazek[a].odpovedi
            odpoved.addEventListener("click", function() {
           
        })
        }

        odpovediOdstavec.appendChild(odpoved)
        
      
function nacteniStranky() {
    zobrazOtazku()
}

function zobrazOtazku() {
    //sem si musím napsat, že se mi na začátku má zobrazit pořadí otázky, jedna otázka a její odpovědi. Při kliknutí na odpověd by se měl uživatel posunout na další stránku a tuto funkci volám znovu
}
 

// Nejdříve si vytvoř objekt, který bude držet tvoje super otázky :-) 
// Dále budeš potřebovat další proměnné - jaké?
// Tato funkce se postará o vygenerování otázky
// Zavoláme ji jednou na začátku a poté vždy po odpovězení
function priKliknuti() { 

} 

// Funkce se postará o obsluhu kliknutí na odpověď
// Musíme ji navázat na kokrétní odpovědi každé otázky (to uděláme v rámci funkce zobrazOtazku())
function klikNaOdpoved() { 
    //next page
}

// Když už mám odpovězeno na vše (řídí se velikosí objektu otazky na řádku 3), tak mohu zobrazi výsledky
// Vypočítám skóre a nageneruje nové elementy do HTML
// Touto funkcí končí můj program (budu se rozhodovat, zda ji zavolat v rámci klikNaOdpoved())
function zobrazVyhodnoceni() { }


// seznam otázek a odpovědí v nějaké struktuře (nejlépe objekt), pro správnou odpověď je lepší použít index, pokud by se nám odpovědi zobrazovali náhodně, musíme napsat do spravna: textovou odpověď
//krok 2, vytvoříme si proměnné pro jednotlivé html elementy, které budeme upravovat

// vytvořit proměnou, kam budeme ukládat odpovědi, v té budeme mít uložené andswer id a question id

//kvíz musíme nějak odstartovat function start kvizu let currentQuestion[index]
//loadquestioncontent (question, indexquestion) - funkce, která načte obsah - vem element podle id otázka

