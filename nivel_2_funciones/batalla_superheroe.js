let nombreHeroe1 = "All Might";
let poderHeroe1 = 89;
let nivelEnergiaHeroe1 = 50;
let daño = 0;
let defensaHeroe1 = 4;

function ataque() {
    daño = Math.floor(Math.random() * 10) + 1; //Para generar un daño aleatorio entre 1 y 10
}

function defender(daño, defensa) {
    if (daño > defensa) {
        nivelEnergia -= daño;
        console.log(nivelEnergia)
    }
}

function recargarEnergia() {
    nivelEnergia += 10;
}
