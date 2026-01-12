window.addEventListener("DOMContentLoaded", () => {
    let todos = [
        "Rappeler l'école",
        "Faire les courses",
        "Récupérer le colis à la Poste",
        "Faire la litière du chat",
        "Ranger le bureau"
    ];
});


let corps = document.querySelector("body");
let todos = document.createElement("ul");

let item1 = document.createElement("li");
let item1Text = document.createTextNode("Rappeler l'école");
item1.appendChild(item1Text);

let item2 = document.createElement("li");
let item2Text = document.createTextNode("Faire les courses");
item2.appendChild(item2Text);

let item3 = document.createElement("li");
let item3Text = document.createTextNode("Récupérer le colis à la poste");
item3.appendChild(item3Text);

let item4 = document.createElement("li");
let item4Text = document.createTextNode("Faire la litière du chat");
item4.appendChild(item4Text);

let item5 = document.createElement("li");
let item5Text = document.createTextNode("Ranger le bureau");
item5.appendChild(item5Text);

todos.appendChild(item1);
todos.appendChild(item2);
todos.appendChild(item3);
todos.appendChild(item4);
todos.appendChild(item5);

corps.appendChild(todos);

let liste = document.querySelectorAll("li");
for (let i = 0; i < liste.length; i++) {
        liste[i].addEventListener("click", function() {
            if (this.style.textDecoration === "line-through") {
                this.style.textDecoration = "none";
            } else {
                this.style.textDecoration = "line-through";
            }
        });
    }