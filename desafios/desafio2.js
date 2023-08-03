
const vendas = {
    '1 estrela': 2,
    '2 estrelas': 15,
    '3 estrelas': 18,
    '4 estrelas': 25,
    '5 estrelas': 40,
}
  
let totalClientes = 0
let totalNotas = 0

for (let v in vendas) {
    
    // console.log("prop: " , v)
    // console.log("valor: ", vendas[v])

    const quantidadeClientes = vendas[v]
    totalClientes = totalClientes + quantidadeClientes

    // console.log(totalClientes)
    //0           2                    1 = 2
    //2            15                   2   = 32
    // 32          18                   3 = 86
    //86           25                   4 = 186

    
    totalNotas += quantidadeClientes * parseInt(v)
    // console.log(totalNotas)
}

const media = totalNotas / totalClientes

  console.log('A média das avaliações é: ', media)
  