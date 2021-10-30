var estadoLicuadora = "apagada";
var sonidoLicuadora = document.getElementById("blender-sound");
var botonLicuadora = document.getElementById("blender-button-sound");
var licuadora = document.getElementById("blender");

function controlarLiuadora() {
    if (estadoLicuadora == "apagada") {
        estadoLicuadora = "encendido";
        licuadora.classList.add("active");
        ejecutaSonido();
       /*  console.log("me prendiste") */
    } else {
        estadoLicuadora = "apagada";
        licuadora.classList.remove("active");
        ejecutaSonido();
        /* console.log("me apagaste"); */
    }
}

function ejecutaSonido() {
    if (sonidoLicuadora.paused) {
        botonLicuadora.play();
        sonidoLicuadora.play();
        sonidoLicuadora.onreset();
    } else {
        botonLicuadora.play();
        sonidoLicuadora.pause();
        sonidoLicuadora.currentTime = 0; //para resetear el audio
        sonidoLicuadora.onreset();
    }
}

// falta mejorar la lógica de los sonidos