const Paciente = require('../models/Paciente');

describe('Paciente', () => {
    let paciente;

    beforeEach(() => {
        paciente = new Paciente(
            1,
            'Caio',
            70,
            1.75,
            80,
            90,
            'M'
        );
    });

    test('calcula o IMC corretamente', () => {
        expect(paciente.calcularIMC()).toBeCloseTo(22.86, 2);
    });

    test('classifica o IMC corretamente', () => {
        expect(paciente.classificarIMC()).toBe('normal');
    });

    test('calcula o RCQ corretamente', () => {
        expect(paciente.calcularRCQ()).toBeCloseTo(0.89, 2);
    });

    test('classifica o RCQ corretamente', () => {
        expect(paciente.classificarRCQ()).toBe('risco baixo');
    });
});