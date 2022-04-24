function operacion(objOperador){

    var n1 = document.getElementById("num1").value;
    var n2 = document.getElementById("num2").value;
    var result = 0;

 
    if(n1 == ""){
        alert("Ingrese un número por favor");
        return false;
    }

    if(n2 == ""){
        alert("Ingrese un número por favor");
        return false;
    }


    if(objOperador == "suma"){
        result = parseInt(n1) + parseInt(n2);
    }
    
    if(objOperador == "resta"){
        result = parseInt(n1) - parseInt(n2);
    }
    
    if(objOperador == "multiplica"){
        result = parseInt(n1) * parseInt(n2);
    }
    
    if(objOperador == "divide"){
        result = parseInt(n1) / parseInt(n2);
    }

    alert("El resultado es: " + result);
}