// gustavo
let nombreHeroe1 = "All Might";
let poderHeroe1 = 89;
let nivelEnergiaHeroe1 = 50;
let daño1 = 6;
let defensaHeroe1 = 4;

//Jhefry
let nombreHeroe2 = "Frieren";
let poderHeroe2 = 85;
let nivelEnergiaHeroe2 = 98;
let daño2 = 6;
let defensaHeroe2 = 3;


let energiaActual = 0;


function ataque(nombre1, nombre2, ataque, energia, recuperacion) {
    console.log(`${nombre2} ataco a ${nombre1}`)
    defender(nombre1,nombre2, ataque, energia, recuperacion)
}

function defender(nombre1, nombre2, ataque, energia, recuperacion) {    
    energiaActual = energia - ataque
    console.log(`${nombre1} recibio ${ataque} de daño por parte de ${nombre2} le queda ${energiaActual}`)
    recargarEnergia(nombre1, energiaActual, recuperacion)
}

function recargarEnergia(nombre, energia, recuperacion) {
    console.log(`${nombre} recargo su energia, actualmente tiene ${energia+recuperacion}`)
}

ataque(nombreHeroe1, nombreHeroe2, daño2, nivelEnergiaHeroe1, 5)