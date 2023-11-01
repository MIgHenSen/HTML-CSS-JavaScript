/* Função numeros() */
function numeros(){

    /* Let é usada geralmente para variáveis locais, 
    neste caso, recebe o valor do input */
    let number = document.getElementById("number").value;

    /* Estrutura de repetição if else, que exibe resultados para o usuário, 
    escrevendo esses resultados na div "t1" */
    if((number>0)){
        document.getElementById("t1").innerHTML = "Numero Positivo";
    }else if(number==0){
        document.getElementById("t1").innerHTML = "Zero é um numero nulo";
    }else{
        document.getElementById("t1").innerHTML = "Numero Negativo";
    }
}