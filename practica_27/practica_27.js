var peso = prompt ("ingrese el peso");
var opcion = prompt ("ingrese opcion");
var peso_tierra = 9.80;
var peso_marte = 3.71;
var peso_jupiter = 24.79;
var resultado;

switch (opcion) {
    case "1":
            resultado = peso * peso_marte / peso_tierra;
            alert("Tu peso em marte es  " + resultado);
        break;
    case "2":
            resultado = peso * peso_jupiter / peso_tierra;
            alert("Tu peso em jupiter es  " + resultado);
        break;

    default: 
            alert("no existe esta opcion");
        break;
}


if (opcion = "1") {
    resultado = peso * peso_marte / peso_tierra;
    alert("Tu peso em marte es  " + resultado);
    
} else if (opcion = "2"){
    resultado = peso * peso_jupiter / peso_tierra;
    alert("Tu peso em jupiter es  " + resultado);
}else{ alert("no existe esta opcion");}