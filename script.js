function selectProduct(){
  const element = document.querySelector(".option");
  element.classList.toggle("option-border");
  const ion = document.querySelector("ion-icon");
  ion.classList.toggle("check");
}

