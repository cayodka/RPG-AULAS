const jogador = {
    corpo: document.querySelector("#jogador"),
    velocidadeDeMovimento: 30,
    olhando: 'direita'
}
const inimigo = {
    corpo: document.querySelector('#inimigo')
}
const pressionado = {
    d: false,
    a: false,
    w: false,
    s: false
}
const loopDeAnimacao = {
    intervaloA: false,
    intervaloD: false,
    intervaloW: false,
    intervaloS: false
}
const andandoPara = {
    direita:'',
    esquerda:'',
    cima:'',
    baixo:'',
}
function funcaoJogador(evento) {
    let tecla = evento.key;
    if (getComputedStyle(jogador.corpo).left == getComputedStyle(inimigo.corpo).left) {
        window.alert("AAAAAAAH")
    }
    if (tecla == 'a') {
        if (pressionado.a == false) {
            pressionado.a = true;
            andandoPara.esquerda = true;
            clearInterval(loopDeAnimacao.intervaloD)
            andandoPara.direita = false;
                let velhaDistancia = Number(getComputedStyle(jogador.corpo).left.split("px")[0]);
                let novaDistancia = velhaDistancia - jogador.velocidadeDeMovimento;
                jogador.corpo.style.left = novaDistancia + "px";
                jogador.corpo.style.backgroundImage = "url('./assets/walking/walking-left.gif')";
                loopDeAnimacao.intervaloA = setInterval(() => {
                let velhaDistancia = Number(getComputedStyle(jogador.corpo).left.split("px")[0]);
                let novaDistancia = velhaDistancia - jogador.velocidadeDeMovimento;
                jogador.corpo.style.left = novaDistancia + "px";
                jogador.olhando = 'esquerda'
            }, 100);
        }
    }
    if (tecla == 'd') {
        if (pressionado.d == false) {
            pressionado.d = true;
            andandoPara.direita = true;
            clearInterval(loopDeAnimaçao.intervaloA)
            andandoPara.esquerda= false;
                let velhaDistancia = Number(getComputedStyle(jogador.corpo).left.split("px")[0]);
                let novaDistancia = velhaDistancia + jogador.velocidadeDeMovimento;
                jogador.corpo.style.left = novaDistancia + "px";
                jogador.corpo.style.backgroundImage = "url('./assets/walking/walking-right.gif')";
            loopDeAnimaçao.intervaloD = setInterval(() => {
                let velhaDistancia = Number(getComputedStyle(jogador.corpo).left.split("px")[0]);
                let novaDistancia = velhaDistancia + jogador.velocidadeDeMovimento;
                jogador.corpo.style.left = novaDistancia + "px";
                jogador.olhando = 'direita'
            }, 100);
        }
    }
    if (tecla == 'w') {
        if (pressionado.w == false) {
            pressionado.w = true;
            let velhaDistancia = Number(getComputedStyle(jogador.corpo).top.split("px")[0]);
            let novaDistancia = velhaDistancia - jogador.velocidadeDeMovimento;
            jogador.corpo.style.top = novaDistancia + "px";
            if (jogador.olhando == 'direita') {
                jogador.corpo.style.backgroundImage = "url('./assets/walking/walking-right.gif')";
            } else if (jogador.olhando == 'esquerda') {
                jogador.corpo.style.backgroundImage = "url('./assets/walking/walking-left.gif')";
            }
            loopDeAnimaçao.intervaloW = setInterval(() => {
                let velhaDistancia = Number(getComputedStyle(jogador.corpo).top.split("px")[0]);
                let novaDistancia = velhaDistancia - jogador.velocidadeDeMovimento;
                jogador.corpo.style.top = novaDistancia + "px";
                if (jogador.olhando == 'direita') {
                    jogador.corpo.style.backgroundImage = "url('./assets/walking/walking-right.gif')";
                } else if (jogador.olhando == 'esquerda') {
                    jogador.corpo.style.backgroundImage = "url('./assets/walking/walking-left.gif')";
                }
            }, 100);
        }
    }
    if (tecla == 's') {
        if (pressionado.s == false) {
            pressionado.s = true;
            let velhaDistancia = Number(getComputedStyle(jogador.corpo).top.split("px")[0]);
            let novaDistancia = velhaDistancia + jogador.velocidadeDeMovimento;
            jogador.corpo.style.top = novaDistancia + "px";
            if (jogador.olhando == 'direita') {
                jogador.corpo.style.backgroundImage = "url('./assets/walking/walking-right.gif')";
            } else if (jogador.olhando == 'esquerda') {
                jogador.corpo.style.backgroundImage = "url('./assets/walking/walking-left.gif')";
            }
            loopDeAnimaçao.intervaloS = setInterval(() => {
                let velhaDistancia = Number(getComputedStyle(jogador.corpo).top.split("px")[0]);
                let novaDistancia = velhaDistancia + jogador.velocidadeDeMovimento;
                jogador.corpo.style.top = novaDistancia + "px";
                if (jogador.olhando == 'direita') {
                    jogador.corpo.style.backgroundImage = "url('./assets/walking/walking-right.gif')";
                } else if (jogador.olhando == 'esquerda') {
                    jogador.corpo.style.backgroundImage = "url('./assets/walking/walking-left.gif')";
                }
            }, 100);
        }
    }
}
function disfuncaoJogador(evento) {
    let tecla = evento.key;
    if (tecla == 'a') {
        if(pressionado.d == false){
            jogador.corpo.style.backgroundImage = "url('./assets/walking/facing-left.gif')";
        }
        pressionado.a = false;
        loopDeAnimaçao.a = false;
        clearInterval(loopDeAnimaçao.intervaloA)
        if (pressionado.d == true && loopDeAnimaçao.d == false) {
            let velhaDistancia = Number(getComputedStyle(jogador.corpo).left.split("px")[0]);
                let novaDistancia = velhaDistancia + jogador.velocidadeDeMovimento;
                jogador.corpo.style.left = novaDistancia + "px";
                jogador.corpo.style.backgroundImage = "url('./assets/walking/walking-right.gif')";
            loopDeAnimaçao.intervaloD = setInterval(() => {
                let velhaDistancia = Number(getComputedStyle(jogador.corpo).left.split("px")[0]);
                let novaDistancia = velhaDistancia + jogador.velocidadeDeMovimento;
                jogador.corpo.style.left = novaDistancia + "px";
                jogador.olhando = 'direita'
            }, 100);
        }
    }
    if (tecla == 'd') {
        if(pressionado.a == false){
            jogador.corpo.style.backgroundImage = "url('./assets/walking/facing-right.gif')";
        }
        pressionado.d = false;
        loopDeAnimaçao.d = false;
        clearInterval(loopDeAnimaçao.intervaloD)
        if (pressionado.a == true && loopDeAnimaçao.a == false){
            let velhaDistancia = Number(getComputedStyle(jogador.corpo).left.split("px")[0]);
                let novaDistancia = velhaDistancia - jogador.velocidadeDeMovimento;
                jogador.corpo.style.left = novaDistancia + "px";
                jogador.corpo.style.backgroundImage = "url('./assets/walking/walking-left.gif')";
            loopDeAnimaçao.intervaloA = setInterval(() => {
                let velhaDistancia = Number(getComputedStyle(jogador.corpo).left.split("px")[0]);
                let novaDistancia = velhaDistancia - jogador.velocidadeDeMovimento;
                jogador.corpo.style.left = novaDistancia + "px";
                jogador.olhando = 'esquerda'
            }, 100);
        }
    }
    if (tecla == 'w') {
        pressionado.w = false;
        clearInterval(loopDeAnimaçao.intervaloW)
        if (jogador.olhando == 'direita' && loopDeAnimaçao.d == false) {
            jogador.corpo.style.backgroundImage = "url('./assets/walking/facing-right.gif')";
        } else if (jogador.olhando == 'esquerda' && loopDeAnimaçao.a == false) {
            jogador.corpo.style.backgroundImage = "url('./assets/walking/facing-left.gif')";
        }
    }
    if (tecla == 's') {
        pressionado.s = false;
        clearInterval(loopDeAnimaçao.intervaloS)
        if (jogador.olhando == 'direita') {
            jogador.corpo.style.backgroundImage = "url('./assets/walking/facing-right.gif')";
        } else if (jogador.olhando == 'esquerda') {
            jogador.corpo.style.backgroundImage = "url('./assets/walking/facing-left.gif')";
        }
    }
}
window.addEventListener('keydown', funcaoJogador)
window.addEventListener('keyup', disfuncaoJogador)