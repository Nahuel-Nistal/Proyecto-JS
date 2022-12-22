/* Medio de comunicacion */

alert("Medio de comunicacion del Colegio JavaScripts");

let nombre = prompt("Escriba el cargo con el que se quiere comunicar: (si quiere finalizar ingrese salir) \n - Director \n - Profesor \n - Profesor Auxiliar");

class Persona {
    constructor(nombre, correo, telefono, cargo) {
        this.nombre = nombre;
        this.correo = correo;
        this.telefono = telefono;
        this.cargo = cargo;
    }
}

const mariano = new Persona("Mariano Mosegui", "mr.no@hotmail.com", "1165962324", "Director")
const pablo = new Persona("Pablo Arrazabal", "pablo526@hotmail.com", "1156842324", "Profesor")
const javier = new Persona("Javier Ortega", "javiortega@hotmail.com", "1194122324", "Profesor Auxiliar")


const directivos = [mariano, pablo, javier];


console.log("Los datos del cargo que busco son:")

const encontrado = directivos.find(persona => persona.cargo === nombre);
console.log(encontrado);

while (nombre != "salir") {
    nombre = prompt("Ingrese si quiere buscar otro cargo: (si quiere finalizar ingrese salir) \n - Director \n - Profesor \n - Profesor Auxiliar");

    console.log("Los datos del cargo que busco son:")

    const encontrado = directivos.find(persona => persona.cargo === nombre);
    console.log(encontrado);
}