class Paciente{
    constructor(cod, nome, peso, altura, circCintura, circQuadril, genero){
        this.cod = cod;
        this.nome = nome;
        this.peso = peso;
        this.altura = altura;
        this.circCintura = circCintura;
        this.circQuadril = circQuadril;
        this.genero = genero
    }

    

    calcularIMC(){
        return this.peso/(this.altura * this.altura)
    }
    calcularRCQ(){
        return this.circCintura/this.circQuadril
    }
    classificarIMC(){
        let imc = this.calcularIMC()

        if(imc < 0.0){
            return 'valor invalido, digite novamente'
        }else if(imc >= 0 && imc < 18.5){
            return 'magreza'
        }else if(imc >= 18.5 && imc < 25){
            return 'normal'
        }else if(imc >= 25 && imc < 30){
            return 'sobrepeso'
        }else if(imc >= 30 && imc < 35){
            return 'obesidade 1'
        }else if(imc >= 35 && imc < 40){
            return 'obesidade 2'
        }else if(imc >= 40){
            return 'obesidade 3'
        }
    }
    classificarRCQ(){
        let rcq = this.calcularRCQ()
        console.log('genero', this.genero)

        switch(this.genero){
            case 'M':
                if(rcq < 0.90){
                    return 'risco baixo'
                }else if(rcq >= 0.90 && rcq <= 1.0){
                    return 'risco moderado'
                }else if(rcq > 1.0){
                    return 'risco alto'
                }
            break
            case 'F':
                 if(rcq < 0.80){
                    return 'risco baixo'
                }else if(rcq >= 0.80 && rcq <= 0.85){
                    return 'risco moderado'
                }else if(rcq > 0.85){
                    return 'risco alto'
                }
            break
        }
    }
}
module.exports = Paciente