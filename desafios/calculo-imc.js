function calcularIMC(altura,peso){
    let imc = peso / parseFloat(altura * altura)
    if(imc < 18.5){
        console.log("Abaixo do peso!")
    }else if(imc >= 18.5 && imc <= 24.9){
        console.log("Peso normal!")
    }else if(imc >= 25 && imc <= 29.9){
        console.log("Sobrepeso")
    }else if (imc >= 30){
        console.log("Obesidade")
    }

    console.log(imc.toFixed(2))

    return imc
}

calcularIMC(1.80,35) // abaixo do peso
calcularIMC(1.70,68) // peso normal
calcularIMC(1.70,75) // sobre peso
calcularIMC(1.77,100) // obesidade