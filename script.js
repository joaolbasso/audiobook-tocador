const numeroCapitulos = 10;
let tocando = 0;
let capituloAtual = 1;

const botaoAudio = document.getElementById("audio-capitulo");
const botaoPlayPause = document.getElementById("play-pause");
const botaoProximaFaixa = document.getElementById("proximo");
const botaoAnteriorFaixa = document.getElementById("anterior"); 
const capitulo = document.getElementById("capitulo");

function tocarFaixa() {
    botaoAudio.play();
    botaoPlayPause.classList.remove('bi-play-circle');
    botaoPlayPause.classList.add('bi-pause-circle');
    tocando = 1;
}

function pausarFaixa() {
    botaoAudio.pause();
    botaoPlayPause.classList.add('bi-play-circle');
    botaoPlayPause.classList.remove('bi-pause-circle');
    tocando = 0;
}

function tocarEPausar() {
    if (tocando === 0) {
        tocarFaixa();
    } else {
        pausarFaixa();
    }
}

function proximaFaixa() {
    if (capituloAtual === numeroCapitulos) {
        capituloAtual = 1;
    } else {
        capituloAtual = capituloAtual + 1;
    }
    botaoAudio.src = "./books/dom-casmurro/" + capituloAtual +".mp3";
    capitulo.innerHTML = "Capítulo " + capituloAtual;
    tocarFaixa();
}

function anteriorFaixa() {
        if (capituloAtual > 1) {
            capituloAtual = capituloAtual - 1;
        } else {
            capituloAtual = numeroCapitulos;
        }
    botaoAudio.src = "./books/dom-casmurro/" + capituloAtual +".mp3";
    capitulo.innerHTML = "Capítulo " + capituloAtual;
    tocarFaixa();
}

botaoPlayPause.addEventListener('click', tocarEPausar);
botaoAnteriorFaixa.addEventListener('click', anteriorFaixa);
botaoProximaFaixa.addEventListener('click', proximaFaixa);