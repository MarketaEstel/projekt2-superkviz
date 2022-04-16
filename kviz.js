
const otazky = [
    {otazka: "Co je ikonická hračka z 80. let?", 
    foto: "obrazky/moncicak.jpg", 
    jmeno: "mončičák",
    odpovedi: ["Kočičák",
    "Mončičák",
    "Opičák"],
    spravna: 1,
    },
    
    {otazka: "Jaké je Matějovo nejoblíbenější ovoce?", 
    foto: "obrazky/ovoce.jpg", 
    jmeno: "ovoce", 
    odpovedi: ["Kokos", "Melounek", "Jahoda", "Ani jedna z možností"],
    spravna: 3, 
    },
    
    {otazka: "Pro úspěšné absolvování kurzu je potřeba...", 
    foto: "obrazky/pivo.jpg", 
    jmeno: "pivo",
    odpovedi: ["Umět JavaScript","Chodit po kurzu do hospody"],
    spravna: 0, 
    }
];
console.log(otazky);
//for cyklus v kterém je napsán kvíz  

        for (let i = 0; i < otazky.length; i++  ) {
            console.log(i)
        let kviz = document.querySelector("div");
        kviz.classList.add(".kviz");
        
        
            let poradi = document.querySelector("p");
            poradi.textContent = "Pořadí" + " " + "1/3"
            
            let nadpis = document.querySelector("h2");
            nadpis.textContent = otazky[0].otazka;
            
            let obsah = document.querySelector("div");
                
                    let foto = document.createElement("div");
                    foto.className = "foto"

                    let img = document.createElement("img");
                    img.id = "obrazek"
                    img.src = otazky[0].foto
                    img.alt = otazky.jmeno
                    
                    foto.appendChild(img)
                    obsah.appendChild(foto)
                
                    let moznosti = document.createElement("div")                
                    moznosti.id = "moznosti"

                    let odpovediOdstavec = document.createElement("ul")
                    odpovediOdstavec.id = "odpovedi"

                    moznosti.appendChild(odpovediOdstavec)
                    obsah.appendChild(moznosti)
           
    }

function nacteniStranky() {
    zobrazOtazku()
}

function zobrazOtazku() {
    //sem si musím napsat, že se mi na začátku má zobrazit pořadí otázky, jedna otázka a její odpovědi. Při kliknutí na odpověd by se měl uživatel posunout na další stránku a tuto funkci volám znovu
    let odpovedVyber = document.createElement("li")
    odpovedVyber.className = "li"
    odpovedVyber.innerHTML = otazky[i].odpovedi[i]
    odpovedVyber.onclick = klikNaOdpoved()
    console.log(odpovedVyber)
    odpovediOdstavec.appendChild(odpovedVyber)   
}
 

// Nejdříve si vytvoř objekt, který bude držet tvoje super otázky :-) 
// Dále budeš potřebovat další proměnné - jaké?
// Tato funkce se postará o vygenerování otázky
// Zavoláme ji jednou na začátku a poté vždy po odpovězení
function priKliknuti() { } 

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

