// Função somar(), usada pelo botão html 
function somar(){
    // Variáveis que recebem valores dos inputs
    let n1 = parseFloat(document.getElementById("n1").value);
    let n2 = parseFloat(document.getElementById("n2").value);
    // Varável que assume o valor da operação
    let resultado = n1+n2;
    // Exibe valores na div "t1"
    document.getElementById("t1").innerHTML = "Resultado: " + resultado;
}

/* Função subtrair(), usada pelo botão html */
function subtrair(){
    // Variáveis que recebem valores dos inputs
    let n1 = parseFloat(document.getElementById("n1").value);
    let n2 = parseFloat(document.getElementById("n2").value);
    // Varável que assume o valor da operação
    let resultado = n1-n2;
    // Exibe valores na div "t1"
    document.getElementById("t1").innerHTML = "Resultado: " + resultado;
}

// Função dividir(), usada pelo botão html
function dividir(){
    // Variáveis que recebem valores dos inputs
    let n1 = parseFloat(document.getElementById("n1").value);
    let n2 = parseFloat(document.getElementById("n2").value);

    // Estrutura if else, que verifica se algum dos valores é zero
    if (n2 == 0 || n1 == 0){
        document.getElementById("t1").innerHTML = "Não existem divisões com zero!";
    } else{
         // Varável local que assume o valor da operação
        let resultado = n1/n2;
        /* Exibe valores na div "t1" */
        document.getElementById("t1").innerHTML = "Resultado: " + resultado;
    }
}

// Função multiplicar(), usada pelo botão html
function multiplicar(){
    // Variáveis que recebem valores dos inputs
    let n1 = parseFloat(document.getElementById("n1").value);
    let n2 = parseFloat(document.getElementById("n2").value);
    // Varável local que assume o valor da operação
    let resultado = n1*n2; 
    /* Exibe valores na div "t1" */
    document.getElementById("t1").innerHTML = "Resultado: " + resultado;
}