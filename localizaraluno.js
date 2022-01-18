const Alunos = ['Ricardo', 'Paloma', 'Leticia', 'Dinho']
const media = [10, 7, 9, 6]
let geralAlunos = [Alunos, media]
console.log(geralAlunos)


const procAluno = (nomeAluno) => {
    if (geralAlunos[0].includes(nomeAluno)) {
        indice = geralAlunos[0].indexOf(nomeAluno)
        return geralAlunos[0][indice] + ', sua media é ' + geralAlunos[1][indice]
    } else {
        return 'Aluno nao esta na lista'
    }


}

console.log(procAluno('Paloma'))