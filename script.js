let inpIntitule = document.querySelector("#intitule");
let inpMontant = document.querySelector("#montant");
let btnAjouter = document.querySelector("#btn-ajouter");
let btnEffacer = document.querySelector("#btn-effacer");
let listeDepenses = document.querySelector("#liste-dep");
let spanTotal = document.querySelector("#total");
let inpFilter = document.querySelector("#inpFilter");

let somme = 0;
btnAjouter.addEventListener("click", () => {
  console.log(inpIntitule.value, inpMontant.value);
  const newLi = document.createElement("li");
  newLi.textContent = `${inpIntitule.value} : ${inpMontant.value} €`;
  //newLi.className = "list-group-item";
  newLi.classList.add("list-group-item");
  listeDepenses.appendChild(newLi);

  somme += +inpMontant.value;
  spanTotal.textContent = `${somme} €`;

  effacer();
});

btnEffacer.addEventListener("click", effacer);

function effacer() {
  inpIntitule.value = "";
  inpMontant.value = "";
}

inpFilter.addEventListener("input", () => {
  let nb = Number(inpFilter.value);
  console.log(nb);
  for (const enfant of listeDepenses.children) {
    let tab = enfant.textContent.split(" ");
    console.log(tab[2]);
    // if (nb < Number(tab[2])) enfant.style.backgroundColor = "pink";
    // else enfant.style.backgroundColor = "white";
    if (nb < Number(tab[2])) enfant.classList.add("list-group-item-danger");
    else enfant.classList.remove("list-group-item-danger");
  }
});
