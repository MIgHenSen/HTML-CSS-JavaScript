/* Função numeros, atribuida ao botão html */
function numeros(){
    /* Variável local que recebe o valor do input html */
    let number = document.getElementById("number").value;

    /* Estrutura de repetição if else, que exibe resultados para o usuário */
    if((number>0)){
        document.getElementById("t1").innerHTML = "Numero Positivo";
    }else if(number==0){
        document.getElementById("t1").innerHTML = "Zero é um numero nulo";
    }else{
        document.getElementById("t1").innerHTML = "Numero Negativo";
    }
}