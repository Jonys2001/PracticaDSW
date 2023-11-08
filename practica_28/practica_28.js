/* 

const diasSemana = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];

alert("Días de la semana:");
for (let i = 0; i < diasSemana.length; i++) {
    alert(diasSemana[i]);
}

const nuevoDia = "NuevoDía";
diasSemana.push(nuevoDia);
alert("Días de la semana después de agregar un nuevo día:");
alert(diasSemana);

diasSemana.pop();
alert("Días de la semana después de eliminar el último día:");
alert(diasSemana);

const diaAEliminar = "Martes";
const index = diasSemana.indexOf(diaAEliminar);
if (index !== -1) {
    diasSemana.splice(index, 1);
}
alert("Días de la semana después de eliminar Martes:");
alert(diasSemana); 




let suma = 0;
let contador = 1;


while (contador <= 5) {
    suma += contador; 
    contador++; 
}

alert("La suma de los números del 1 al 5 es: " + suma);
*/




let numero = 5;
let factorial = 1;

do {
    factorial *= numero;
    numero--; 
} while (numero > 0);

alert("El factorial de 5 es: " + factorial);
