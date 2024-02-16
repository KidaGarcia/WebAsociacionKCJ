let dias = 2;
let horas = 0;
let minutos = 0;
let segundos = 0;
cargarSegundo();

function cargarSegundo() {
    let txtSegundos;

    if (segundos < 0) {
        segundos = 59;
        minutos--;
    }

    if (minutos < 0) {
        minutos = 59;
        horas--;
    }

    if (horas < 0) {
        horas = 23;
        dias--;
    }

    if (dias < 0) {
        dias = 0;
        horas = 0;
        minutos = 0;
        segundos = 0;
    }

    document.getElementById('dias').innerText = dias;
    document.getElementById('horas').innerText = horas;
    document.getElementById('minutos').innerText = minutos;
    document.getElementById('segundos').innerText = segundos;

    segundos--;
    setTimeout(cargarSegundo, 1000);
}

