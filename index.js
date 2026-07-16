const Paciente = require('./models/Paciente')

let cadastrar = document.getElementById('cadastrar')
let mostrar = document.getElementById('mostrar')
let resposta = document.getElementById('resposta')
let contPac = 0

cadastrar.addEventListener('click', () =>{
    contPac++

    let pac = new Paciente (Number(contPac), document.getElementById('nome').value, Number(document.getElementById('peso').value), Number(document.getElementById('altura').value), Number(document.getElementById('circCintura').value), Number(document.getElementById('circQuadril').value), document.getElementById('genero').value)
    console.log(pac)

    let imc
    imc = pac.calcularIMC()
    let rcq
    rcq =  pac.calcularRCQ()
    console.log(imc, rcq)
    let classificacaoIMC = pac.classificarIMC()
    let classificacaoRCQ = pac.classificarRCQ()
    console.log(classificacaoIMC, classificacaoRCQ)

    resposta.innerHTML = `o imc de ${pac.nome} é de: ${imc.toFixed(2)} <br> o rcq de ${pac.nome} é de: ${rcq.toFixed(2)} <br> a classificação do imc de ${pac.nome} é: ${classificacaoIMC} <br> a classificação do rcq de ${pac.nome} é: ${classificacaoRCQ}`
})

mostrar.addEventListener('click', () =>{
    console.table(pacientes)
})