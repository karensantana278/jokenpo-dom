let jogador1 = prompt('Qual é o seu nome?')
let jogadorPontos = 0;
let jogadorEscolha = 0;
let computadorPontos = 0;
let jogadaComputador = 0;



function sortearJogada(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min
}

function calcularPontuacao(ganhador){
    if(ganhador == 1){
        jogadorPontos++
        document.getElementById('jogador-pontos').innerHTML = jogadorPontos
    }else{
        computadorPontos++
        document.getElementById('computador-pontos').innerHTML = computadorPontos
    }
}

function mensagem(texto){
    let mensagem = document.getElementById('mensagem')
    mensagem.innerHTML = texto
}

function selectPlayer(nome){
    let jogadorNome = document.getElementById('jogador-nome')
    jogadorNome.innerHTML = nome
}

function selecionarJogada(tipo, escolha){
    document.getElementById(tipo + '-escolha-' + escolha).classList.add('selecionado')
}

function deselecionarJogada(tipo, escolha){
    document.getElementById(tipo + '-escolha-' + escolha).classList.remove('selecionado')
}

//calcula e retorna quem ganhou. //0 - empate // 1 - jogador // 2 - computador
function calcularEscolha(jogador, computador){
    if (jogador == 1) {
        if(computador == 1) {
            return 0
        }else if(computador == 2){
            return 2
        }else{
            return 1
        }
    }

    if(jogador == 2){
        if(computador == 2) {
            return 0
        }else if(computador == 3){
            return 2
        }else{
            return 1
        }
    }

    if(jogador == 3){
        if(computador == 3) {
            return 0
        }else if(computador == 1){
            return 2
        }else{
            return 1
        }
    }
}

//funções do jogo
// 1 - Pedra // 2 - Papel // 3 - Tesoura
function jogar(escolha){
    jogadorEscolha = escolha
    selecionarJogada('jogador', jogadorEscolha)
    //sortear jogada do computador
    jogadaComputador = sortearJogada(1, 3)
    selecionarJogada('computador', jogadaComputador)

    //calcular quem ganhou
    let ganhador = calcularEscolha(jogadorEscolha, jogadaComputador)

    if (ganhador == 0){
        mensagem('Empate')   
    }else if (ganhador == 1){
        mensagem(`Ponto para ${jogador1}`)
        calcularPontuacao(1)
    }else{
        mensagem('Ponto para computador')
        calcularPontuacao(2)
    }

    //somar pontos

    setTimeout(function(){
        deselecionarJogada('jogador', jogadorEscolha);
        deselecionarJogada('computador', jogadaComputador);
        mensagem(jogador1 + ' escolha uma opção...');
    },3500)

}


//seleciona jogada do jogador
document.querySelectorAll('#jogador-escolha a').forEach(escolha => {
    escolha.addEventListener('click', function(e){
        e.preventDefault()
        jogar(escolha.id.slice(-1))
    })
})    


selectPlayer(jogador1)
mensagem(`Bem-vindo ${jogador1} está preparado? Escolha uma opção acima...`)






