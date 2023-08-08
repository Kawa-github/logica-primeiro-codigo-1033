


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

console.log(turmas);

// Cadastrar aluno contendo:

//     nome, string
//     sobrenome, string
//     email, string
//     turma, number (sendo um código de turma válido)
//     nascimento, sendo a data de nascimento do aluno
//     notas, sendo um array de números, de no máximo 5 posições
//     ativo, boolean // padrão true

const alunos = []
function criarAluno(nome,sobrenome,email,turma,nascimento,notas,ativo = true){
    const aluno = {
        nome: nome,
        sobrenome: sobrenome,
        email: email,
        turma: turma,
        nascimento: nascimento,
        notas: notas,
        ativo: (ativo == 1) ? true : false
    }
    alunos.push(aluno)
}

criarAluno(
    "Kawa",
    "Ribeiro",
    "kawa@gmail.com",
    3,
    "30/12/2003",
    "5,10,3,7",
    1
)

criarAluno(
    "Joao",
    "Santos",
    "joao@gmail.com",
    3,
    "10/05/2003",
    "5,10,3,7",
    0
)

criarAluno(
    "Pedro",
    "Pereira",
    "pereirinha@gmail.com",
    8,
    "01/01/2005",
    "5,10,3,7",
    1
)

console.log(alunos)

function removerAluno(alunos, prop, value) {
    return alunos.filter((a) => a[prop] !== value)
};
let alunosFormat = removerAluno(alunos, "nome", "Pedro");
// console.log(alunosFormat);


function buscarAluno(nomeAluno){
    const busca = alunos.filter((item, index) =>{
        const { nome } = item
        return nome === nomeAluno
    })
    console.log(busca)
}

buscarAluno("Pedro")

