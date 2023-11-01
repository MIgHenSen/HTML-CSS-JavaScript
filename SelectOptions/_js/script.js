// Função numeroMes()
function numeroMes(){ 

    /* Let, Variável local que, nesse caso, recebe os valores do select */
    let meses = document.getElementById("mesesDoAno");

    /* Variável local que, nesse caso, recebe os valores das opções do 
    select */
    let i = meses.selectedIndex;

    /* Variável local que recebe valor da opção escolhida pelo usuário */
    let mesEscolhido = meses.options[i].value;

    // Exibe numero do mes ao usuário
    document.getElementById("t1").innerHTML = "Mês Selecionado: " + mesEscolhido;
}