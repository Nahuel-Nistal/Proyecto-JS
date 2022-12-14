/* Promedio de notas */

alert("Promedio de Notas de los chicos del Colegio JavaScripts");

let nombre = prompt("Escriba el nombre del alumno: (si quiere finalizar ingrese salir)");

while (nombre != "salir") {

    let nota1 = parseInt(prompt("ingrese su primer nota:"));

    let nota2 = parseInt(prompt("ingrese su segunda nota:"));

    let nota3 = parseInt(prompt("ingrese su tercera nota:"));

    let promedio = (nota1 + nota2 + nota3) / 3;

    class persona {
        constructor(nombre, nota1, nota2, nota3) {
            this.nombre = nombre;
            this.nota1 = nota1;
            this.nota2 = nota2;
            this.nota3 = nota3;
        }
    }

    const alumno = new persona(nombre, nota1, nota2, nota3);
    console.log(alumno);

    if ((nota1 >= 1 && nota1 <= 10) && (nota2 >= 1 && nota2 <= 10) && (nota3 >= 1 && nota3 <= 10)) {
        let mensaje = ("Su promedio es " + promedio);
        console.log(mensaje);
        alert(mensaje);
    } else {
        alert("Alguna de sus notas esta mal escrita");
    }

    nombre = prompt("Escriba el nombre del alumno: (si quiere finalizar ingrese salir)");
}


