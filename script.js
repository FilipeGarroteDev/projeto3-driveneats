function selectFood(classOption, classItens){
  const element = document.querySelector(classItens);
  const icone = classOption.querySelector(".icon");
  const hiddenIcon = element.querySelector(".check");
  const food = element.querySelector(".option-border");
  
  if(food !== null){
    food.classList.remove("option-border");
    hiddenIcon.classList.remove("check");
  }

  classOption.classList.add("option-border");
  icone.classList.add("check")
}






/*function selectFood(classOption){
  const icone = classOption.querySelector(".icon");
  const hiddenIcon = document.querySelector(".check");
  const food = document.querySelector(".itens1 > .option-border");
  
  if(food !== null){
    food.classList.remove("option-border");
    hiddenIcon.classList.remove("check");
  }

  classOption.classList.add("option-border");
  icone.classList.add("check")
}

function selectDrink(classOption){
  const icone = classOption.querySelector(".icon");
  const hiddenIcon = document.querySelector(".check");
  const food = document.querySelector(".itens2 > .option-border");
  
  if(food !== null){
    food.classList.remove("option-border");
    hiddenIcon.classList.remove("check");
  }

  classOption.classList.add("option-border");
  icone.classList.add("check")
}

function selectDessert(classOption){
  const icone = classOption.querySelector(".icon");
  const hiddenIcon = document.querySelector(".check");
  const food = document.querySelector(".itens3 > .option-border");
  
  if(food !== null){
    food.classList.remove("option-border");
    hiddenIcon.classList.remove("check");
  }

  classOption.classList.add("option-border");
  icone.classList.add("check")
}/*

/*

function finalizarCompra(){
  let food = document.querySelector(".itens1 > .option-border");
  let drink = document.querySelector(".itens2 > .option-border");
  let dessert = document.querySelector(".itens3 > .option-border");
  if(food !== null && drink !== null && dessert !== null){
    const hidden = document.querySelector(".footer > button");
    hidden.classList.remove("buttonInitial");
    hidden.classList.add("buttonFinal");
    hidden.innerHTML = "Finalizar Pedido"
  }
}*/

