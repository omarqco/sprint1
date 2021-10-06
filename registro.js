// Declaracion del arreglo
const registros = [];

// Funcion para agregarRegistro()
function agregarRegistro () {
    // Tomamos los registros y asignamos a variables
    const username = document.querySelector('#Username').value;
    const correo = document.querySelector('#Correo').value;
    const contrasena = document.querySelector('#Contrasena').value;
    const confirmarcontrasena = document.querySelector('#Confirmar contrasena').value;
    
    // Declaramos un objeto para agregarlo al arreglo de objetos
    const newObjeto = {
        username,
        correo,
        contrasena,
        confirmarcontrasena,
    };

    newObjeto['username'] = username;
    newObjeto['correo'] = correo;
    newObjeto['contrasena'] = contrasena;
    newObjeto['confirmarcontrasena'] = confirmarcontrasena;
    return registros.push(newObjeto);
    
};

//Creamos la funcion para obtener en un arreglo los nombres de usuario alfanuméricos
function obtenerUsername(arreglo) {
    const expReg = new RegExp(/^[a-zA-Z0-9]+([._]?[a-zA-Z0-9]+)*$/);
    var arregloUsername = [];
    arreglo.map(function (valor) {
        if (expReg.test(valor.username)) {
            arregloUsername.push(valor);
        }
    });
    return arregloUsername;
}

//Creamos la funcion para obtener en un arreglo los correos con la extensión @hotmail.com
function filtrarCorreo(arreglo) {
    const expReg = new RegExp(/@hotmail.com$/);
    var arregloCorreo = [];
    arreglo.map(function (valor) {
        if (expReg.test(valor.correo)) {
            arregloCorreo.push(valor);
        }
    });
    return arregloCorreo;
}

// Escribimos los modulos que vamos a exportar
module.exports.registros = registros;
module.exports.agregarRegistro = agregarRegistro;
module.exports.obtenerUsername = obtenerUsername;
module.exports.filtrarCorreo = filtrarCorreo;
