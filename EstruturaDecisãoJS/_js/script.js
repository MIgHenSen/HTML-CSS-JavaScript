function numeros(){ /* Função numeros, atribuida ao botão html */
    let number = document.getElementById("number").value; /* Variável local que recebe o valor do input html */

    /* Estrutura de repetição if else, que exibe resultados para o usuário */
    if((number>0)){
        document.getElementById("t1").innerHTML = "Numero Positivo";
    }else if(number==0){
        document.getElementById("t1").innerHTML = "Zero é um numero nulo";
    }else{
        document.getElementById("t1").innerHTML = "Numero Negativo";
    }
}