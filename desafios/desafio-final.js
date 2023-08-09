


// // Cadastrar turma contendo

// //     código, number entre 1 e 10 (no máximo 10 turmas)
// //     máximo, number máximo de alunos de 5 a 10


const turmas = []

function criarTurma(codigo, maxAlunos) {
  const turma = {
    codigo: codigo,
    maximo: maxAlunos
  }
  turmas.push(turma)
}

for (let i = 1; i <= 10; i++) {
  criarTurma(i, Math.floor(Math.random() * 6) + 5)  
}

console.log(turmas)


const alunos = []
function criarAluno(nome,sobrenome,email,turma,nascimento,notas,ativo = true){

    const aluno = {
        nome: nome.charAt(0).toUpperCase() + nome.slice(1),
        sobrenome: sobrenome,
        email: email,
        turma: turma,
        nascimento: nascimento,
        ativo: ativo === 1 ? true : false,
        notas: notas.map(nota => ({ nota: nota })),
        calcularMedia: function () {
            const somarNotas = this.notas.reduce((acc, current) => {
                return acc + current.nota
            }, 0)
            const media = somarNotas / this.notas.length
            
            return media
        },
    }

    aluno.calcularMedia()
    alunos.push(aluno)
}

criarAluno(
    "kawa",
    "Ribeiro",
    "kawa@gmail.com",
    3,
    "30/12/2003",
    [5,4,9,2],
    1
)


criarAluno(
    "Joao",
    "Santos",
    "joao@gmail.com",
    3,
    "10/05/2003",
    [5,4,9,2],
    0
)

criarAluno(
    "Pedro",
    "Pereira",
    "pereirinha@gmail.com",
    8,
    "01/01/2005",
    [8,8,7,5],
    1
)

criarAluno(
    "Lucas",
    "Moura",
    "lulu@gmail.com",
    1,
    "01/07/2004",
    [5,10,3,7],
    1
)

function exibirAlunos(){
    alunos.forEach(aluno => {
        console.log(`Nome: ${aluno.nome} ${aluno.sobrenome}`)
        console.log(`Turma: ${aluno.turma}`)
        console.log(`Média: ${aluno.calcularMedia().toFixed(2)}`)
    })
}

// exibirAlunos()

function removerAluno(alunos, prop, value) {
    return alunos.filter((a) => a[prop] !== value)
}

let alunosFormat = removerAluno(alunos, "nome", "Pedro")
// console.log(alunosFormat)


function buscarAluno(nomeAluno) {
    const alunoEncontrado = alunos.find(aluno => aluno.nome === nomeAluno)

    if (alunoEncontrado) {
        console.log("Aluno encontrado: ")
        console.log(alunoEncontrado)
    } else {
        console.log("Aluno não encontrado :(")
    }
}

// buscarAluno("Kawa")
// buscarAluno("Maria")



//Retornar quantas turmas tem na escola
const quantidadeTurmas = turmas.length
// console.log("Quantidade de Turmas: ", quantidadeTurmas)

function desativarAluno(nomeAluno, ativo){
    const desativar = alunos
    .filter((item) =>{
        const { nome } = item
        return nome === nomeAluno
    })
    .map((item) => {
        item.ativo = ativo
    })
    console.log(alunos)
}

// desativarAluno("Pedro",0) 

const listarAlunosAtivos = alunos.filter((i) => i.ativo > 0)
// console.log("Alunos Ativos:", listarAlunosAtivos)

const listarAlunosInativos = alunos.filter((i) => i.ativo < 1)
// console.log("Alunos Inativos:", listarAlunosInativos)

function gerarRelatorio() {
    const quantidadeAlunos = alunos.length
    const quantidadeTurmas = turmas.length

    const alunosAprovados = alunos.filter((i) => i.calcularMedia() >= 6)    
    const alunosReprovados = alunos.filter((i) => i.calcularMedia() < 6)

    console.log("Quantidade de alunos:", quantidadeAlunos)
    console.log("Quantidade de turmas:", quantidadeTurmas)
    
    console.log("Alunos com média esperada:")
    alunosAprovados.forEach(aluno => {
        console.log(`Nome: ${aluno.nome} ${aluno.sobrenome}, Média: ${aluno.calcularMedia().toFixed(2)}`)
    })

    console.log("Alunos abaixo da média esperada:")
    alunosReprovados.forEach(aluno => {
        console.log(`Nome: ${aluno.nome} ${aluno.sobrenome}, Média: ${aluno.calcularMedia().toFixed(2)}`)
    })
}

// gerarRelatorio()





