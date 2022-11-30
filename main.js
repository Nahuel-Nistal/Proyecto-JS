/* Promedio de notas */

alert("Promedio de Notas de los chicos del Colegio JavaScripts");

let nombre = prompt("Escriba el nombre del alumno: (si quiere finalizar ingrese salir)")
console.log(nombre)

while (nombre != "salir") {
    let nota1 = parseInt(prompt("ingrese su primer nota:"));
    console.log(nota1)

    let nota2 = parseInt(prompt("ingrese su segunda nota:"));
    console.log(nota2)

    let nota3 = parseInt(prompt("ingrese su tercera nota:"));
    console.log(nota3)

    let promedio = (nota1 + nota2 + nota3) / 3;

    if ((nota1 >= 1 && nota1 <= 10) && (nota2 >= 1 && nota2 <= 10) && (nota3 >= 1 && nota3 <= 10)) {
        let mensaje = ("Su promedio es " + promedio)
        console.log(mensaje)
        alert(mensaje);
    } else {
        alert("Alguna de sus notas esta mal escrita");
    }

    nombre = prompt("Escriba el nombre del alumno: (si quiere finalizar ingrese salir)")
    console.log(nombre)
}
