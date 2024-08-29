let inpIntitule = document.querySelector("#intitule");
let inpMontant = document.querySelector("#montant");
let btnAjouter = document.querySelector("#btn-ajouter");
let btnEffacer = document.querySelector("#btn-effacer");
let listeDepenses = document.querySelector("#liste-dep");
let spanTotal = document.querySelector("#total");

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
