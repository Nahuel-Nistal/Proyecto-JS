/* Formulario de contacto */

alert("Registro de los chicos del Colegio JavaScripts");

let nombre = prompt("Escriba nombre y apellido del alumno: (si quiere finalizar ingrese salir)");

while (nombre != "salir") {

    let correo = prompt("ingrese correo electronico:");

    let usuario = prompt("ingrese nombre de usuario:");

    let contraseña = prompt("ingrese contraseña:");

    const array = ["Nombre: " + nombre, "Correo electronico: " + correo, "Usuario: " + usuario, "Contraseña: " + contraseña];
    console.log(array);

    class persona {
        constructor(nombre, usuario) {
            this.nombre = nombre;
            this.usuario = usuario;
        }
    }

    const alumno = new persona(nombre, usuario);
    console.log("Nuevo alumno registrado:");
    console.log(alumno);

    function finRegistro() {
        alert("Gracias por su registro")
    }

    finRegistro()

    nombre = prompt("Escriba nombre y apellido del alumno: (si quiere finalizar ingrese salir)");
}


