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

    console.log(user)

    const userJSON = JSON.stringify(arrayUsuarios);
    localStorage.setItem("arrayUsuarios", userJSON);

    const botonUno = document.getElementById("botonUno")

    botonUno.addEventListener("click", () => {
        Swal.fire("Usuario registrado con exito. Gracias por su registro !!");
    })

    formulario.reset();
});

const iniciarSesion = document.getElementById("iniciarSesion");

//const nombreAutorizado = nombre;
//const contrasenaAutorizada = contrasena;
//const even = (element) => element === nombre && element === contrasena;
//console.log(contenedorClientes.some(even))

iniciarSesion.addEventListener("click", () => {
    const contenedorClientes = "json/data.json";

    fetch(contenedorClientes)
        .then(respuesta => respuesta.json())
        .then(datos => {
            console.log(datos)
        })
        .catch(error => console.log(error))
    //

    Swal.fire({
        title: "Login",
        html: `<input type="text" id="nombreLog" class="swal2-input" placeholder="nombre">
            <input type="text" id="contrasenaLog" class="swal2-input" placeholder="contraseña">`,
        confirmButtonText: "Enviar",
        showCancelButton: true,
        cancelButtonText: "Cancelar",
    }).then((result) => {
        if (result.isConfirmed) {
            const nombreLogin = document.getElementById("nombreLog").value;
            const contrasenaLogin = document.getElementById("contrasenaLog").value;
            
            //if
            Swal.fire({
                title: "Datos Incorrectos",
                icon: "success",
                confirmButtonText: "Aceptar",
            })

            if (even = (nombre, contrasena) => nombre === nombreLogin && contrasena === contrasenaLogin) {
                window.location.href = "registrado.html";
            }
        }
    })
})