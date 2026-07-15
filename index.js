const Paciente = require('./models/Paciente')

let cadastrar = document.getElementById('cadastrar')
let mostrar = document.getElementById('mostrar')
let resposta = document.getElementById('resposta')
let pacientes = []
let contPac = 0

cadastrar.addEventListener('click', () =>{
    contPac++

    const pac = new Paciente (Number(contPac), document.getElementById('nome').value, Number(document.getElementById('peso').value), Number(document.getElementById('altura').value), Number(document.getElementById('circCintura').value), Number(document.getElementById('circQuadril').value), document.getElementById('genero').value)
    console.log(pac)
    pacientes.push(pac)

    let imc = pac.calcularIMC()
    let rcq =  pac.calcularRCQ()
    console.log(imc, rcq)

    resposta.innerHTML = `o imc de ${pac.nome} é de: ${imc.toFixed(2)} <br> o rcq de ${pac.nome} é de: ${rcq.toFixed(2)}`
})

mostrar.addEventListener('click', () =>{
    console.table(pacientes)
})