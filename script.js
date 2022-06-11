

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
  const sectionConfirmOption = document.querySelector(".choice")
  const sectionConfirmPrice = document.querySelector(".price")
   
  const food = section1.querySelector(".option-border")
  const drink = section2.querySelector(".option-border")
  const dessert = section3.querySelector(".option-border")
  const p1 = sectionConfirmOption.querySelector("p:nth-child(1)")
  const p2 = sectionConfirmOption.querySelector("p:nth-child(2)")
  const p3 = sectionConfirmOption.querySelector("p:nth-child(3)")
  const span1 = sectionConfirmPrice.querySelector("span:nth-child(1)")
  const span2 = sectionConfirmPrice.querySelector("span:nth-child(2)")
  const span3 = sectionConfirmPrice.querySelector("span:nth-child(3)")
  const span4 = sectionConfirmPrice.querySelector("span:nth-child(4)")

  const option1 = food.querySelector("h4");
  const price1 = food.querySelector("span");
  const option2 = drink.querySelector("h4");
  const price2 = drink.querySelector("span");
  const option3 = dessert.querySelector("h4");
  const price3 = dessert.querySelector("span");
  const soma = Number(price1.innerHTML) + Number(price2.innerHTML) + Number(price3.innerHTML)
  
  if((food && drink && dessert) !== null){
    let opac = document.querySelector(".mobile");
    opac.classList.add("opacity");
    let confirm = document. querySelector(".hidden");
    confirm.classList.add("confirmation");
    p1.innerHTML = option1.innerHTML;
    p2.innerHTML = option2.innerHTML;
    p3.innerHTML = option3.innerHTML;
    span1.innerHTML = `R$ ${price1.innerHTML}`;
    span2.innerHTML = `R$ ${price2.innerHTML}`;
    span3.innerHTML = `R$ ${price3.innerHTML}`;
    span4.innerHTML = `R$ ${soma.toFixed(2)}`
  }
}



