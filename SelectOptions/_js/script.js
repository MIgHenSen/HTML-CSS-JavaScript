// Função numeroMes(), atribuida ao botão html
function numeroMes(){ 
    // Variável que recebe opções do select
    let meses = document.getElementById("mesesDoAno");
    // Variável que recebe opção do select escolhida pelo usuário
    let i = meses.selectedIndex;
    // Variável que recebe valor da opção escolhida pelo usuário
    let mesEscolhido = meses.options[i].value;
    // Exibe numero do mes ao usuário
    document.getElementById("t1").innerHTML = "Mês Selecionado: " + mesEscolhido; }