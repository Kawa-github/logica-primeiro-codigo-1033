


// // Cadastrar turma contendo

// //     código, number entre 1 e 10 (no máximo 10 turmas)
// //     máximo, number máximo de alunos de 5 a 10

const turmas = []

function criarTurma(codigo, maxAlunos) {
    const turmaEncontrada = turmas.find(turma => turma.codigo === codigo)

    if(codigo < 1 || codigo > 10 || maxAlunos < 5 || maxAlunos > 10){
        throw new Error('O codigo ou o máximo de alunos esta fora do escopo planejado')
    }

    if (turmaEncontrada) {
        throw new Error(`Já existe uma turma com o código ${codigo}.`)
    }

    turmas.push({ codigo, maxAlunos })
}

try {
    criarTurma(1, 10)
    criarTurma(2, 8)
    criarTurma(7, 8)
    criarTurma(4, 8)
    criarTurma(8, 8)
    // criarTurma(3, 8)
    // criarTurma(8, 1)
    
    console.log(turmas)
    console.log("Turmas cadastradas com sucesso!")

} catch (erro) {
    console.error(erro.message);
}



const alunos = []
function criarAluno(nome,sobrenome,email,turma,nascimento,notas,ativo = true){

    let dataNascimento = new Date(nascimento)

    let dia = dataNascimento.getDate()
    let mes = dataNascimento.getMonth() + 1 
    let ano = dataNascimento.getFullYear()

    let dataFormatada = dia + '/' + mes + '/' + ano;

    const alunoRepetido = alunos.find(aluno => aluno.email === email)
    // const validarEmail = alunos.filter(aluno => aluno.email.includes(".com"))

    // if(!validarEmail){
    //     throw new Error('Email invalido.')
    // }

    const aluno = {
        nome: nome.charAt(0).toUpperCase() + nome.slice(1),
        sobrenome: sobrenome,
        email: email,
        turma: turma,
        nascimento: dataFormatada,
        ativo: ativo === 1 ? true : false,
        notas: notas.map(nota => ({ nota: nota })),
        calcularMedia: function () {
            const somarNotas = this.notas.reduce((acc, current) => {
                return acc + current.nota
            }, 0)
            const media = somarNotas / 6
            
            return media
        },
    }
    
    if(turma < 1 || turma > 10){
        throw new Error('Turma inválida!')
    }


    if(alunoRepetido){
        throw new Error('Já existe um aluno com este e-mail.')
    }
    
    aluno.calcularMedia()
    alunos.push(aluno)
}

criarAluno(
    "kawa",
    "Ribeiro",
    "email@gmail.com",
    3,
    "2003-11-03",
    [5,4,9,2],
    1
)

criarAluno(
    "Raffa",
    "Moreira",
    "emaill@gmail.com",
    5,
    "2000-01-08",
    [5,4,9,2],
    1
)


criarAluno(
    "Joao",
    "Santos",
    "joao@gmail.com",
    3,
    "2009-05-05",
    [5,4,9,2],
    0
)

criarAluno(
    "Pedro",
    "Pereira",
    "pereirinha@gmail.com",
    8,
    "2005-01-00",
    [8,8,7,5],
    1
)

criarAluno(
    "lucas",
    "Moura",
    "lulu@gmail.com",
    10,
    "2001-03-03",
    [5,10,3,7],
    1
)

console.log(alunos)

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
// buscarAluno("Joazinho")

function desativarAluno(nomeAluno, ativo){
    const desativar = alunos
    .filter((item) =>{
        const { nome } = item
        return nome === nomeAluno
    })
    .map((item) => {
        item.ativo = ativo
    })
    return desativar
}

// desativarAluno("Raffa",false) 

function exibirAlunos(){
    alunos.forEach(aluno => {
        console.log(`Nome: ${aluno.nome} ${aluno.sobrenome}`)
        console.log(`Turma: ${aluno.turma}`)
        console.log(`Média: ${aluno.calcularMedia().toFixed(2)}`)
    })
}
// exibirAlunos()

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

gerarRelatorio()





