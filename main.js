console.log("Esta funcionando...")

const painel1 = document.querySelector("#par-ou-impar")
const painel2 = document.querySelector("#escolha-numeros")
const resultado = document.querySelector("#resultado")
const botaojogar = document.querySelector("#botao-jogar")
var numeroComputador 

function escolherParOuImpar(parOuImpar) {
    this.parOuImpar = parOuImpar
    console.log(parOuImpar)
    painel1.style.display = 'none'
    painel2.style.display = 'block'
    return parOuImpar
    
}

function escolherNumero(numeroUsuario) {
    this.numeroUsuario = numeroUsuario
    console.log(numeroUsuario)
    desabilitarBotoes()
    return numeroUsuario
}

function desabilitarBotoes() {
    for( i = 0; i<= 5; i++) {
        document.getElementById('b' + i).setAttribute('disabled', true)
        document.getElementById('b' + 1).classList.add('desabilitado')
    }
}

function selecionar (id) {
    const botao = document.getElementById (id)
    botao.classList.add('selecionado')
}

function gerarTextoEscolhaUsuario(){
    if(parOuImpar == 0) {
        textoParOuImpar = "Par"
    } else if (parOuImpar == 1) {
        textoParOuImpar = "Impar"
    }

    return textoParOuImpar
}

function verificarVencedor() {
    if ((numeroUsuario + numeroComputador) % 2 == parOuImpar) {
        vencedor = "Usuário"
    } else {
        vencedor = "Computador"
    }
    
    return vencedor 
}

function escolherNumeroComputador() {
    numeroComputador = Math.floor (Math.random() *6)
    console.log(numeroComputador)
}

function jogarParOuImpar () {
    painel2.style.display = 'none'
    resultado.style.display = 'block'
    botaojogar.style.display = 'none'

    resultado.innerHTML = "<h2 class='mensasgem centralizado'>Resultado; </h2>"

    var parOuImparEscolhido = gerarTextoEscolhaUsuario()
    escolherNumeroComputador()
    var nomeVencedor = verificarVencedor()   


    resultado.innerHTML += "<br>Par ou Impar? " + parOuImparEscolhido
    resultado.innerHTML += "<br>Usuário escolheu: " + numeroUsuario
    resultado.innerHTML += "<br>Computador escolheu: " + numeroComputador
    nomeVencedor == "Usuário" ? frase="Parabéns! Voce venceu!" : frase= "Que pena Voce perdeu!"
    resultado.innerHTML += "<br>" + frase



   
}

