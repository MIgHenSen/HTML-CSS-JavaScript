function somar(){ /* Função somar(), usada pelo botão html */
    let n1 = parseFloat(document.getElementById("n1").value); /* Váriavel local, que assume valor do input com id "n1" */
    let n2 = parseFloat(document.getElementById("n2").value); /* Variável local, que assume valor do input com id "n2" */
    let resultado = n1+n2; /* Varável local que assume o valor da operação */
    document.getElementById("t1").innerHTML = "Resultado: " + resultado; /* Exibe valores na div "t1" */
}

function subtrair(){ /* Função subtrair(), usada pelo botão html */
    let n1 = parseFloat(document.getElementById("n1").value); /* Váriavel local, que assume valor do input com id "n1" */
    let n2 = parseFloat(document.getElementById("n2").value); /* Variável local, que assume valor do input com id "n2" */
    let resultado = n1-n2; /* Varável local que assume o valor da operação */
    document.getElementById("t1").innerHTML = "Resultado: " + resultado; /* Exibe valores na div "t1" */
}

function dividir(){ /* Função dividir(), usada pelo botão html */
    let n1 = parseFloat(document.getElementById("n1").value); /* Váriavel local, que assume valor do input com id "n1" */
    let n2 = parseFloat(document.getElementById("n2").value); /* Variável local, que assume valor do input com id "n2" */
    /* Estrutura if else, que verifica se algum dos valores é zero */
    if (n2 == 0 || n1 == 0){
        document.getElementById("t1").innerHTML = "Não existem divisões com zero!";
    } else{
        let resultado = n1/n2; /* Varável local que assume o valor da operação */
        document.getElementById("t1").innerHTML = "Resultado: " + resultado; /* Exibe valores na div "t1" */
    }
}

function multiplicar(){ /* Função multiplicar(), usada pelo botão html */
    let n1 = parseFloat(document.getElementById("n1").value); /* Váriavel local, que assume valor do input com id "n1" */
    let n2 = parseFloat(document.getElementById("n2").value); /* Variável local, que assume valor do input com id "n2" */
    let resultado = n1*n2; /* Varável local que assume o valor da operação */
    document.getElementById("t1").innerHTML = "Resultado: " + resultado; /* Exibe valores na div "t1" */
}