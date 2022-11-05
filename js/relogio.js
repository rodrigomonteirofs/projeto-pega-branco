function atualizaRelogio(){

    var display = document.querySelector('#relogio1')

    var agora = new Date();

    var horario = incrementandoZero(agora.getHours()) + ':' + incrementandoZero(agora.getMinutes()) + ':' + incrementandoZero(agora.getSeconds());

    display.textContent = horario;

}

function incrementandoZero (numero) {
    if (numero < 10) {
        numero = '0' + numero;
    }
        return numero;
}

atualizaRelogio();
setInterval(atualizaRelogio, 1000);
