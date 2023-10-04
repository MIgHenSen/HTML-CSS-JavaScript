// Função media(), atribuida ao botão html
function media(){ 
    // VAriáveis que recebem valores dos inputs
    var nota1 = parseFloat(document.getElementById("notaUm").value);
    var nota2 = parseFloat(document.getElementById("notaDois").value); 
    var nota3 = parseFloat(document.getElementById("notaTres").value);
    // Variavel que calcula media
    var media = (nota1 + nota2 + nota3)/3; 
    // Exibe resultado na div vazia de html, com id t1
    document.getElementById("t1").innerHTML = "Media: " + media;} 