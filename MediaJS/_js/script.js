// Função media()
function media(){

    /* Lets, Variáveis locais que, nesse caso, recebem os valores de inputs
    e os convertem para float com o 'parseFloat' */
    let nota1 = parseFloat(document.getElementById("notaUm").value);
    let nota2 = parseFloat(document.getElementById("notaDois").value); 
    let nota3 = parseFloat(document.getElementById("notaTres").value);

    /* Let, Variáveis local que recebe valor da operação */
    let media = (nota1 + nota2 + nota3)/3;

    // Exibe resultado na div t1
    document.getElementById("t1").innerHTML = "Média: " + media;
} 