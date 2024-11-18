var valores=""

function addVal(i) {
    valores += i;
    document.getElementById("resultados").value = valores;
}

function operation(i){
    if(i=="C"){
            valores="";
    }else{
         valores += i;
    }
    document.getElementById("resultados").value=valores;
    }

    function calculate() {
        valores=eval(valores);
        document.getElementById("resultados").value=valores;
    }
    
    