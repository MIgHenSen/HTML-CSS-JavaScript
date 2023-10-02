function numeroMes(){ // Função atribuida ao botão html
    let meses = document.getElementById("mesesDoAno"); // variavel local, que recebe valores do select com id mesesDoAno
    let i = meses.selectedIndex; // Variaveel local, que recebe opção do select escolhida pelo usuário
    let mesEscolhido = meses.options[i].value; //Variavel local, que recebe valor da opção escolhida pelo usuário
    document.getElementById("t1").innerHTML = "Mês Selecionado: " + mesEscolhido; } // Exibe numero do mes ao usuário