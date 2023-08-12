// Cadastrar turma contendo

// código, number entre 1 e 10 (no máximo 10 turmas)
// máximo, number máximo de alunos de 5 a 10

// Relacionamento 
// Entidades: Turma e Aluno

const turma = {
    codigo: 0,
    maximoDeAlunos: 0 
}

let turmas = [{"codigo":1,"maximoDeAlunos":10},{"codigo":2,"maximoDeAlunos":10},{"codigo":3,"maximoDeAlunos":8},{"codigo":4,"maximoDeAlunos":8},{"codigo":5,"maximoDeAlunos":5}]

// Cadastro de turmas
// Turma com o código já existente
const cadastrarTurma = ({codigo, maximoDeAlunos}) => {

    // const turmaEncontrada = turmas.filter(turma => turma.codigo === codigo).length
    const turmaEncontrada = turmas.find(turma => turma.codigo === codigo)

    codigo = parseInt(codigo)
    maximoDeAlunos = parseInt(maximoDeAlunos)

    if(!codigo || !maximoDeAlunos){
        throw new Error('Erro de sintaxe')
    }

    if(codigo < 1 || codigo > 10 && maximoDeAlunos < 5 || maximoDeAlunos > 10){
        throw new Error('O codigo ou o maximo de alunos esta fora do escopo planejado')
    }

    if(!turmaEncontrada){
        turmas.push({ codigo, maximoDeAlunos})
    }

    return turmas
}

const turmaASerAtualiza = {
    codigo: 2,
    maximoDeAlunos: 10 
}
// turma especifica

/*
    turmas = [
        ...
        {
            codigo: 2,
            maximoDeAlunos: 10 
        },
        ..
        {
            codigo: 3, <- quero editar este
            maximoDeAlunos: 8 
        }
        {
            codigo: 4,
            maximoDeAlunos: 10 
        }
        ...
    ]
*/
const atualizarTurma = (turmaParaAtualizar) => {
    // const { codigo } = turmaParaAtualizar
    if(turmaParaAtualizar == undefined){
        return {
            status: 'erro'
        }
    }

    if(turmaParaAtualizar.codigo < 1 
    || turmaParaAtualizar.codigo > 10 
    || turmaParaAtualizar.maximoDeAlunos < 5 
    || turmaParaAtualizar.maximoDeAlunos > 10){
        throw new Error('O código ou máximo alunos está fora do escopo planejado')
    }

    const indexEncontrado = turmas.findIndex(turma => {
        return turma.codigo === turmaParaAtualizar.codigo
    })

    if(indexEncontrado < 0) throw new Error('Turma não encontrada')

    const turmasAtualizado = turmas.map((turma, index) => {
        if(indexEncontrado === index){
            return turmaParaAtualizar
        }

        return turma
    })

    turmas = turmasAtualizado

    return {
        status: 'sucesso'
    }
}

// console.log(turma)
console.log('SAÍDA', turmas)