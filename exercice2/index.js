let liste = document.querySelector("ol");
let item = document.createElement("li");
let itemText = document.createTextNode("Préchauffer le four");
item.appendChild(itemText);
let first = liste.firstElementChild;
liste.insertBefore(item, first);