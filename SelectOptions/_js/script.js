function numeroMes(){ 
    let meses = document.getElementById("mesesDoAno");
    let i = meses.selectedIndex;
    let mesEscolhido = meses.options[i].value;
    document.getElementById("t1").innerHTML = "Mês Selecionado: " + mesEscolhido;
}