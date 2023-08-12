// Exercício: Calculadora de Índice de Massa Corporal (IMC)

// Descrição:
// A tarefa é criar uma calculadora de IMC usando variáveis. O IMC é uma medida que relaciona o peso e a altura de uma pessoa para avaliar se ela 
//está abaixo do peso, no peso normal, com sobrepeso ou obesa. A fórmula do IMC é: IMC = peso / (altura * altura).

// Instruções:

// Peça ao usuário que informe seu peso (em kg) e sua altura (em metros).

// Utilize variáveis para armazenar esses valores.

// Calcule o IMC usando a fórmula fornecida.

// Com base no resultado, informe ao usuário em qual faixa de IMC ele se encontra, de acordo com a tabela abaixo:

// IMC = peso / (altura * altura).

// Abaixo do peso: IMC < 18.5
// Peso normal: 18.5 <= IMC < 24.9 
// Sobrepeso: 25 <= IMC < 29.9
// Obesidade: IMC >= 30

function retornaIMC({altura, peso}){
    const imc = peso / (altura * altura) // altura**2

    let condicao = ''
    if(imc < 18.5){
        condicao = 'Abaixo do peso!'
    }else if(imc >= 18.5 && imc < 24.9){
        condicao = 'Peso normal!'
    }else if(imc >= 25 && imc < 29.9){
        condicao = 'Sobrepeso!'
    }else if(imc >= 30){
        condicao = 'Obesidade !'
    }

    console.log(condicao)
    return condicao
}

const condicao = retornaIMC({ 
    altura: 1.90, 
    peso: 40 
}) // Abaixo do peso!

// console.log(condicao)

retornaIMC({ 
    altura: 1.75, 
    peso: 67 
}) // Peso normal!

retornaIMC({ 
    altura: 1.70, 
    peso: 75 
}) // Sobrepeso!

retornaIMC({ 
    altura: 1.77, 
    peso: 100 
}) // Obesidade!

