/*
var numero1 = 2;
 var numero2 = 3;
 var resulatado = numero1 + numero2;

 alert(resulatado);



 var mensaje = "Bienvenido a nuestro sitio web";
 var tex1 = "texto comillas dobles";
 var tex2 = 'comillas simples';

 alert(mensaje+tex1+tex2);



 var F = false;

 alert(F);


 var array = ['tijuana','tecate','ensenada','rosarito','mexicali'];
 alert(array[3]);
 
 
*/


 var num1 = prompt ("ingrese primer numero");
 var num2 = prompt ("ingrese segundo numero");
 var operacion = prompt ("ingrese simbolo de la operacion que desea realizar");



 if (operacion == "*") {

        var resulatado = parseInt(num1) * parseInt(num2);

    } else if (operacion == "/") {

        var resulatado = parseInt(num1) / parseInt(num2);

    } else if (operacion == "-") {

        var resulatado = parseInt(num1) - parseInt(num2);
        
    } else if (operacion == "+") {

       var  resulatado = parseInt(num1) + parseInt(num2);
    }
    
 alert(resulatado);





