function populateUFs (){
    const ufSelect = document.querySelector("select[name=uf]");
  
    fetch("https://servicodados.ibge.gov.br/api/v1/localidades/estados")
    .then(res => res.json())
    .then(states => {
      
      for(const state of states){
          ufSelect.innerHTML += `<option value="${state.id}">${state.nome}</option>`;  
      }
    })
  }
  populateUFs();
  
  function getCities (e) {
    const stateInput = document.querySelector("[name=state]")
    const citySelect = document.querySelector("[name=city]");
    const indexOfSelectedState = e.target.selectedIndex;
    
    stateInput.value = e.target.options[indexOfSelectedState].text;
    
    citySelect.innerHTML = "<option value=''>Selecione a Cidade</option>";
    citySelect.disabled = true;
    fetch(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${e.target.value}/municipios`).then(res => res.json())
    .then(cities => {
        for (const city of cities){
          citySelect.innerHTML += `<option value="${city.nome}">${city.nome}</option>`;
        }
      citySelect.disabled = false;
    })
  }
  
  document
    .querySelector("select[name=uf]")
    .addEventListener("change", getCities);
  
  // ITENS DE COLETA
  
  const itemsToCollect = document.querySelectorAll('.items-grid li')
  
  for (const item of itemsToCollect){
    item.addEventListener("click", handleSelectedItem);
  }
  
  
  let selectedItems = [];
  
  const collectedItems = document.querySelector("input[name=items]")
  
  function handleSelectedItem(e){
    const itemLi = e.target;
  
    itemLi.classList.toggle("selected");
    
    const itemId = itemLi.dataset.id;
  
  
    const alreadySelected = selectedItems.findIndex(item => item == itemId)
  
    if(alreadySelected >=0){
      const filteredItems = selectedItems.filter(item => item != itemId);   
      selectedItems = filteredItems;
    }else {
      selectedItems.push(itemId);
    }
    collectedItems.value = selectedItems;
  }