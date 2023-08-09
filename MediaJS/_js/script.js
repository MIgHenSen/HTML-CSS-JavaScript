function media(){
    var nota1 = parseFloat(document.getElementById("notaUm").value);
    var nota2 = parseFloat(document.getElementById("notaDois").value);
    var nota3 = parseFloat(document.getElementById("notaTres").value);
    var media = (nota1 + nota2 + nota3)/3;
    document.getElementById("t1").innerHTML = "Media: " + media;}