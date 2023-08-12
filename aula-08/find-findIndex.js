// find

const parceiros = [
    { id: '1', nome: 'Mateus' },
    { id: '2', nome: 'Alice' },
    { id: '3', nome: 'Breno' },
    { id: '1', nome: 'Mateus Paixão', ativo: true },
]

const parceiroEncontrado = parceiros.find(parceiro => {
    return parceiro.id === '1' && parceiro.ativo
})

console.log([1,3,4].find(numero => numero === 1)) //  1
console.log(parceiroEncontrado) // Mateus Paixão


console.clear()
const numeros = [1,3,4]
// console.log(numeros)

// findIndex
const indexEncontrado = numeros.findIndex(numero => numero === 1) // -1
// console.log(indexEncontrado)
if(indexEncontrado !== -1){
    console.log(numeros[indexEncontrado])
}

const indexParceiro = parceiros.findIndex(parceiro => {
    return parceiro.id === '1' && parceiro.ativo
})

console.log(indexParceiro)
console.log(parceiros[indexParceiro])