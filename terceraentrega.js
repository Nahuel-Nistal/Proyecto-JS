/* js formulario */

class Usuario {
    constructor(nombre, apellido, email, contrasena) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.email = email;
        this.contraseña = contrasena;
    }
};

const arrayUsuarios = [];

const formulario = document.getElementById("formulario");

formulario.addEventListener("submit", (e) => {
    e.preventDefault();

    const nombre = document.getElementById("nombre");
    const apellido = document.getElementById("apellido");
    const email = document.getElementById("email");
    const contrasena = document.getElementById("contrasena");

    const user = new Usuario(nombre.value, apellido.value, email.value, contrasena.value);
    arrayUsuarios.push(user);

    console.log(user);

    const userJSON = JSON.stringify(arrayUsuarios);
    localStorage.setItem("arrayUsuarios", userJSON);

    alert("Usuario registrado con exito. Gracias por su registro !!");

    formulario.reset();
});

