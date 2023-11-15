function numeros(){
    /* 'getElementById' acessa os atributos de um elemento com um id */
    let number = document.getElementById("number").value;
    if((number>0)){
        document.getElementById("t1").innerHTML = "Numero Positivo";
    }else if(number==0){
        document.getElementById("t1").innerHTML = "Zero é um numero nulo";
    }else{
        document.getElementById("t1").innerHTML = "Numero Negativo";
    }
}