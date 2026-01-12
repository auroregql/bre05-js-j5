let corps = document.querySelector("body");
let lien = document.createElement("a");
let lienText = document.createTextNode("l'article de Wikipédia sur le Lorem Ipsum");
lien.setAttribute("href", "https://fr.wikipedia.org/wiki/Lorem_ipsum");
lien.appendChild(lienText);
corps.appendChild(lien);