function somar(){
    let n1 = parseInt(document.getElementById("n1").value);
    let n2 = parseInt(document.getElementById("n2").value);
    let resultado = n1+n2;
    document.getElementById("t1").innerHTML = "Resultado: " + resultado;
}

function subtrair(){
    let n1 = parseInt(document.getElementById("n1").value);
    let n2 = parseInt(document.getElementById("n2").value);
    let resultado = n1-n2;
    document.getElementById("t1").innerHTML = "Resultado: " + resultado;
}

function dividir(){
    let n1 = parseInt(document.getElementById("n1").value);
    let n2 = parseInt(document.getElementById("n2").value);
    let resultado = n1/n2;
    document.getElementById("t1").innerHTML = "Resultado: " + resultado;
}

function multiplicar(){
    let n1 = parseInt(document.getElementById("n1").value);
    let n2 = parseInt(document.getElementById("n2").value);
    let resultado = n1*n2;
    document.getElementById("t1").innerHTML = "Resultado: " + resultado;
}