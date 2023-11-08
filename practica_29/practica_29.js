/*

for (let i = 1; i < 10; i++) {
    
    if (i == 4) {
        alert ("este es el el hola 4");
        
    }else if( i > 7) {
        alert ("Acabamos de saludar ");
    }else{
        alert("hola");

    }
    
}


*/

const meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre"];

for (let i in meses) {
    console.log(meses[i]);
}

meses.forEach(mes => {
    console.log(mes);
});

for (const mes of meses) {
    console.log(mes);
}
