function saludo (){
    alert ("Bienvenidos a nuestra tienda online")
};

saludo();

let nombre = prompt ("Ingresa tu nombre")

function saludoConNombre(nombre){
    alert("Hola, como estas? " + nombre);
};

saludoConNombre(nombre);

let opcion = parseInt(prompt("ingrese una opcion por favor:\n\n1. Ver productos\n2. Ver sucursales\n3. llamar a una sucursal\n\nPara salir ingrese 0"));

while (opcion !== 0) {
    if (opcion === 1) {
        
        alert("Estos son nuestros productos: ");
    } else if (opcion === 2) {
        aler("Estas son nuestras sucursales: ");
    } else if (opcion === 3) {
        alert("Estos son los numeros para comunicarte con nuestras sucursales")
    } else {
        alert("opcion NO VALIDA")
    }

    opcion = parseInt(prompt("Ingrese otra opcion:\n\n1. Ver productos\n2. Ver sucursales\n3. llamar a una sucursal\n\nPara salir ingrese 0"));

    if (opcion === 0) {
        alert("Muchas gracias por tu visita a nuestra pagina wep. Te esperamos en alguna de nuestras sucursales");
    }

}

