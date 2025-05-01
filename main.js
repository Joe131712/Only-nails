const form = document.querySelector(".form");
const name = document.querySelector("#text");
const out = document.querySelector(".output");
const mail = document.querySelector("#email");
const commentaire = document.querySelector("#textarea");
const button = document.querySelector(".button");
const lien = document.querySelector(".a");
const prest = document.querySelector("#presta");

form.addEventListener("submit", (e) => {
  add();
  e.preventDefault();
});

lien.addEventListener("click", (e) => {
  send();
  e.preventDefault();
});

function add() {
  if (name.value === "") {
    alert("Merci de remplir les informations");
    name.style.border = "2px solid red";
    mail.style.border = "2px solid red";
    commentaire.style.border = "2px solid red";
  } else {
    const verif = document.createElement("p");
    verif.innerHTML = "✅️";
    verif.classList.add("verif");
    name.appendChild(verif);
    const h4 = document.createElement("h4");
    h4.innerHTML = `Merci </br>${name.value} </br>${mail.value}</br>${lien.innerHTML}`;
    h4.classList.add("output");
    prest.appendChild(h4);
    setTimeout(() => {
      h4.remove();
    }, 20000);
    name.style.border = "2px solid green";
    mail.style.border = "2px solid green";
    commentaire.style.border = "2px solid green";
  }
}

function send() {
  const creat = document.createElement("p");
  commentaire.value 
  creat.classList.add("new");
}

function del(creat) {
  creat.remove();
}
