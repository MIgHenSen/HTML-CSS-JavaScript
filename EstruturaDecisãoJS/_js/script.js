function numeros(){
    let number = document.getElementById("number").value;
    if((number>0)){
        document.getElementById("t1").innerHTML = "Numero Positivo";
    }else if(number==0){
        document.getElementById("t1").innerHTML = "Zero é um numero nulo";
    }else{
        document.getElementById("t1").innerHTML = "Numero Negativo";
    }
}
