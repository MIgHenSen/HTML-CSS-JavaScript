function somar(){
    /* 'parseFloat' converte os valores recebidos em números decimais */
     /* 'getElementById' acessa os atributos de um elemento com um id */
    let n1 = parseFloat(document.getElementById("n1").value);
    let n2 = parseFloat(document.getElementById("n2").value);
    let resultado = n1+n2;
    document.getElementById("t1").innerHTML = "Resultado: " + resultado;
}

function subtrair(){
    let n1 = parseFloat(document.getElementById("n1").value);
    let n2 = parseFloat(document.getElementById("n2").value);
    let resultado = n1-n2;
    document.getElementById("t1").innerHTML = "Resultado: " + resultado;
}

function dividir(){
    let n1 = parseFloat(document.getElementById("n1").value);
    let n2 = parseFloat(document.getElementById("n2").value);
    if (n2 == 0 || n1 == 0){
        document.getElementById("t1").innerHTML = "Não existem divisões com zero!";
    } else{
        let resultado = n1/n2;
        document.getElementById("t1").innerHTML = "Resultado: " + resultado;
    }
}

function multiplicar(){
    /* 'parseFloat' converte os valores recebidos em números decimais */
    /* 'getElementById' acessa os atributos de um elemento com um id */
    let n1 = parseFloat(document.getElementById("n1").value);
    let n2 = parseFloat(document.getElementById("n2").value);
    let resultado = n1*n2;
    document.getElementById("t1").innerHTML = "Resultado: " + resultado;
}