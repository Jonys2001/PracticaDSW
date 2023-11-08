function imprimir(){
    var nombre1 = parseInt(document.getElementById('num1').value);
    var nombre2 = parseInt(document.getElementById('num2').value);
    var nombre3 = parseInt(document.getElementById('num3').value);
    var nombre4 = parseInt(document.getElementById('num4').value);
    var nombre5 = parseInt(document.getElementById('num5').value);
    var nombre6 = parseInt(document.getElementById('num6').value);
    var nombre7 = parseInt(document.getElementById('num7').value);
    var nombre8 = parseInt(document.getElementById('num8').value);   
    var prom = ( nombre1+ nombre2+ nombre3+ nombre4+ nombre5+ nombre6+ nombre7+ nombre8)/8;

alert("La calificacion de la materia de " + "Web" +" es de              "+nombre1+"\n"+
      "La calificacion de la materia de " + "Python" +" es de           "+nombre2+"\n"+
      "La calificacion de la materia de " + "AFI" +" es de              "+nombre3+"\n"+
      "La calificacion de la materia de " + "Admin Proyecxtos" +" es de "+nombre4+"\n"+
      "La calificacion de la materia de " + "Ingles" +" es de           "+nombre5+"\n"+
      "La calificacion de la materia de " + "Implementacio" +" es de    "+nombre6+"\n"+
      "La calificacion de la materia de " + "Implementacio" +" es de    "+nombre7+"\n"+
      "La calificacion de la materia de " + "Web 2" +" es de            "+nombre8);
alert("el promedio es "+ prom)

if (prom >= 86) {

    alert("El alumno excento ordinario ")
    
}else if(prom <= 85) {
    alert("El alumno NO excento ordinario")
}  

    


}

