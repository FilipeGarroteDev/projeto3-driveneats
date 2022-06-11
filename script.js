function selectFood (classOption){
  const icone = document.querySelector(".icon");
  const selecao = document.querySelector(".itens1 > .option-border");
    if (selecao !== null && icone !== null){
      selecao.classList.remove("option-border");
      icone.classList.remove("check");
    }
  classOption.classList.add("option-border");
  icone.classList.add("check");
}

function selectDrink (classOption){
  const selecao = document.querySelector(".itens2 > .option-border")
    if (selecao !== null){
      selecao.classList.remove("option-border");
    }
  classOption.classList.add("option-border");
}

function selectDessert (classOption){
  const selecao = document.querySelector(".itens3 > .option-border")
    if (selecao !== null){
      selecao.classList.remove("option-border");
    }
  classOption.classList.add("option-border");
}



/*function selectProduct(){
  const element = document.querySelector(".option");
  element.classList.toggle("option-border");
  const ion = document.querySelector("ion-icon");
  ion.classList.toggle("check");
}*/

