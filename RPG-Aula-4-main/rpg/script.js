const jogador = {
    corpo: document.querySelector("#jogador"),
    velocidadeDeMovimento: 30,
    olhando: 'direita'
}
const inimigo = {
    corpo: document.querySelector('#inimigo')
}
const andando = {
    intervaloA: false,
    intervaloD: false,
    intervaloW: false,
    intervaloS: false
}
const pressionado = {
    d: false,
    a: false,
    w: false,
    s: false
}
function funcaoJogador(evento) {
    let tecla = evento.key;
    if (getComputedStyle(jogador.corpo).left == getComputedStyle(inimigo.corpo).left) {
        window.alert("AAAAAAAH")
    }
    if (tecla == 'a') {
        if (pressionado.a == false) {
            pressionado.a = true;
            clearInterval(andando.intervaloD)
            andando.d = false;
                let velhaDistancia = Number(getComputedStyle(jogador.corpo).left.split("px")[0]);
                let novaDistancia = velhaDistancia - jogador.velocidadeDeMovimento;
                jogador.corpo.style.left = novaDistancia + "px";
                jogador.corpo.style.backgroundImage = "url('./assets/walking/walking-left.gif')";
            andando.intervaloA = setInterval(() => {
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
            clearInterval(andando.intervaloA)
            andando.a = false;
                let velhaDistancia = Number(getComputedStyle(jogador.corpo).left.split("px")[0]);
                let novaDistancia = velhaDistancia + jogador.velocidadeDeMovimento;
                jogador.corpo.style.left = novaDistancia + "px";
                jogador.corpo.style.backgroundImage = "url('./assets/walking/walking-right.gif')";
            andando.intervaloD = setInterval(() => {
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
            andando.intervaloW = setInterval(() => {
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
            andando.intervaloS = setInterval(() => {
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
        clearInterval(andando.intervaloA)
        andando.a = false;
        if (pressionado.d == true && andando.d == false) {
            let velhaDistancia = Number(getComputedStyle(jogador.corpo).left.split("px")[0]);
                let novaDistancia = velhaDistancia + jogador.velocidadeDeMovimento;
                jogador.corpo.style.left = novaDistancia + "px";
                jogador.corpo.style.backgroundImage = "url('./assets/walking/walking-right.gif')";
            andando.intervaloD = setInterval(() => {
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
        clearInterval(andando.intervaloD)
        andando.d = false;
        if (pressionado.a == true && andando.a == false){
            let velhaDistancia = Number(getComputedStyle(jogador.corpo).left.split("px")[0]);
                let novaDistancia = velhaDistancia - jogador.velocidadeDeMovimento;
                jogador.corpo.style.left = novaDistancia + "px";
                jogador.corpo.style.backgroundImage = "url('./assets/walking/walking-left.gif')";
            andando.intervaloA = setInterval(() => {
                let velhaDistancia = Number(getComputedStyle(jogador.corpo).left.split("px")[0]);
                let novaDistancia = velhaDistancia - jogador.velocidadeDeMovimento;
                jogador.corpo.style.left = novaDistancia + "px";
                jogador.olhando = 'esquerda'
            }, 100);
        }
    }
    if (tecla == 'w') {
        pressionado.w = false;
        clearInterval(andando.intervaloW)
        if (jogador.olhando == 'direita') {
            jogador.corpo.style.backgroundImage = "url('./assets/walking/facing-right.gif')";
        } else if (jogador.olhando == 'esquerda') {
            jogador.corpo.style.backgroundImage = "url('./assets/walking/facing-left.gif')";
        }
    }
    if (tecla == 's') {
        pressionado.s = false;
        clearInterval(andando.intervaloS)
        if (jogador.olhando == 'direita') {
            jogador.corpo.style.backgroundImage = "url('./assets/walking/facing-right.gif')";
        } else if (jogador.olhando == 'esquerda') {
            jogador.corpo.style.backgroundImage = "url('./assets/walking/facing-left.gif')";
        }
    }
}

window.addEventListener('keydown', funcaoJogador)
window.addEventListener('keyup', disfuncaoJogador)

let intervalo = setInterval(() => {
}, 1000);

clearInterval()
console.log(intervalo)
