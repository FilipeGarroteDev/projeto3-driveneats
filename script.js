

function selectFood(classOption, classItens){
  const element = document.querySelector(classItens);
  const icone = classOption.querySelector(".icon");
  const hiddenIcon = element.querySelector(".check");
  const optionSelected = element.querySelector(".option-border");
  
  if(optionSelected !== null){
    optionSelected.classList.remove("option-border");
    hiddenIcon.classList.remove("check");
  }

  classOption.classList.add("option-border");
  icone.classList.add("check")

  finalizarCompra();
}

function finalizarCompra(){
  const section1 = document.querySelector(".itens1")
  const section2 = document.querySelector(".itens2")
  const section3 = document.querySelector(".itens3")
   
  const food = section1.querySelector(".option-border")
  const drink = section2.querySelector(".option-border")
  const dessert = section3.querySelector(".option-border")
  
  if((food && drink && dessert) !== null){
    const hidden = document.querySelector(".footer > button");
    hidden.classList.remove("buttonInitial");
    hidden.classList.add("buttonFinal");
    hidden.innerHTML = "Fechar Pedido"
  }
}

function clickButton(){
  const section1 = document.querySelector(".itens1")
  const section2 = document.querySelector(".itens2")
  const section3 = document.querySelector(".itens3")
   
  const food = section1.querySelector(".option-border")
  const drink = section2.querySelector(".option-border")
  const dessert = section3.querySelector(".option-border")
  
  if((food && drink && dessert) !== null){
    let opac = document.querySelector(".mobile");
    opac.classList.add("opacity");
    let confirm = document. querySelector(".hidden")
    confirm.classList.add("confirmation")
  }
}

