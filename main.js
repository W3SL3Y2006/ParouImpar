console.log("Esta funcionando...")

const painel1 = document.querySelector("#par-ou-impar")
const painel2 = document.querySelector("#escolha-numeros")
const resultado = document.querySelector("#resultado")
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

function escolherNumeroComputador() {
    numeroComputador = Math.floor (Math.random() *6)
    console.log(numeroComputador)
}

function jogarParOuImpar () {
    console.log('Chamou a função jogar...')
}

