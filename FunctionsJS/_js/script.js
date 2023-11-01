// Função somar()
function somar(){

    /* Lets, Variáveis locais que, nesse caso, recebem os valores de inputs
    e os convertem para float com o 'parseFloat' */
    let n1 = parseFloat(document.getElementById("n1").value);
    let n2 = parseFloat(document.getElementById("n2").value);

    // Varável que assume o valor da operação
    let resultado = n1+n2;

    // Exibe valores na div "t1"
    document.getElementById("t1").innerHTML = "Resultado: " + resultado;
}

/* Função subtrair() */
function subtrair(){

    /* Lets, Variáveis locais que, nesse caso, recebem os valores de inputs
    e os convertem para float com o 'parseFloat' */
    let n1 = parseFloat(document.getElementById("n1").value);
    let n2 = parseFloat(document.getElementById("n2").value);

    // Varável que assume o valor da operação
    let resultado = n1-n2;

    // Exibe valores na div "t1"
    document.getElementById("t1").innerHTML = "Resultado: " + resultado;
}

// Função dividir()
function dividir(){

    /* Lets, Variáveis locais que, nesse caso, recebem os valores de inputs
    e os convertem para float com o 'parseFloat' */
    let n1 = parseFloat(document.getElementById("n1").value);
    let n2 = parseFloat(document.getElementById("n2").value);

    /* Estrutura if else, que verifica se algum dos valores é zero, 
    usada como um um tratamento de exceção */ 
    if (n2 == 0 || n1 == 0){

        // Exibe valores na div "t1"
        document.getElementById("t1").innerHTML = "Não existem divisões com zero!";
    } else{

        // Lets, Variáveis locais que, nesse caso, recebe o valor de um input
        let resultado = n1/n2;

        /* Exibe valores na div "t1" */
        document.getElementById("t1").innerHTML = "Resultado: " + resultado;
    }
}

// Função multiplicar()
function multiplicar(){

    /* Lets, Variáveis locais que, nesse caso, recebem os valores de inputs
    e os convertem para float com o 'parseFloat' */
    let n1 = parseFloat(document.getElementById("n1").value);
    let n2 = parseFloat(document.getElementById("n2").value);

    // Varável local que assume o valor da operação
    let resultado = n1*n2;
    
    /* Exibe valores na div "t1" */
    document.getElementById("t1").innerHTML = "Resultado: " + resultado;
}