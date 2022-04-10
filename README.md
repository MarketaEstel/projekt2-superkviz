# README

Czechitas Javascript 1 - Projekt zadaný na Lekci 7. Kvíz, ve kterém musíš odpovědět na sadu otázek.

SUPERKVÍZ - cílem je naprogramovat klasický kvíz. Tj. uživatelce se postupně ukazují otázky a u každé má na výběr z několika možných odpovědí. Když na jednu odpověď klikne, posune se na další otázku. Když odpoví na všechny otázky, ukáže se jí hodnocení úspěšnosti v procentech a pod tím seznam s výsledkem. V seznamu bude vždy otázka, její odpověď a správná odpověď.

Při vytváření HTML pro odpovědi dodrž následující strukturu:

<ul id="odpovedi">
    <li data-odpoved="0">Kočičák</li>
    <li data-odpoved="1">Mončičák</li>
    <li data-odpoved="2">Opičák</li>
</ul>

<ul id="odpovedi">
    <li data-odpoved="3">Kokos</li>
    <li data-odpoved="4">Melounek</li>
    <li data-odpoved="5">Jahoda</li>
    <li data-odpoved="6">Ani jedna z možností</li>
</ul>

<ul id="odpovedi">
    <li data-odpoved="7">Umět JavaScript</li>
    <li data-odpoved="8">Chodit po kurzu do hospody</li>
</ul>

Takto připravené HTML pak pokaždé vlož na stránce do <div id="moznosti">
Musíš nejprve smazat ten starý seznam, který už tam je.

Data pro kvíz jsou uložena v poli otazky. Každa otázka je objekt, který obsahuje otázku, obrázek k otázce, pole možných odpovědí a index správné odpovědi.
