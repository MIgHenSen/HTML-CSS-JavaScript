function media(){ // Função media(), atribuida ao botão html
    var nota1 = parseFloat(document.getElementById("notaUm").value); // Variavel local, que recebe valor do input de id notaUm
    var nota2 = parseFloat(document.getElementById("notaDois").value); // Variavel local, que recebe valor do input de id notaDois
    var nota3 = parseFloat(document.getElementById("notaTres").value); // Variavel local, que recebe valor do input de id notaTres
    var media = (nota1 + nota2 + nota3)/3; // Variavel local, que calcula media
    document.getElementById("t1").innerHTML = "Media: " + media;} // Exibe resultado na div vazia de html, com id t1