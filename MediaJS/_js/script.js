function media(){
    let nota1 = parseFloat(document.getElementById("notaUm").value);
    let nota2 = parseFloat(document.getElementById("notaDois").value); 
    let nota3 = parseFloat(document.getElementById("notaTres").value);

    let media = (nota1 + nota2 + nota3)/3;

    document.getElementById("t1").innerHTML = "Média: " + media;
} 