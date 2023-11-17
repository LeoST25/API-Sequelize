const { Router } = require('express')
const PessoaController = require('../controllers/PessoaController')
const MatriculaController = require('../controllers/MatriculaController')

const router = Router()


router
.get('/pessoas', PessoaController.pegaTodasAsPessoas)
.get('/pessoas/ativas', PessoaController.pegaPessoasAtivas)
.get('/pessoas/:id', PessoaController.pegaPessoa)
.get('/pessoas/matricula/lotada', PessoaController.pegaTurmasLotadas)
.get('/pessoas/:estudanteId/matricula', MatriculaController.pegaMatriculas)
.get('/pessoas/:estudanteId/matricula/:matriculaId',  MatriculaController.pegaUmaMatricula)
.get('/pessoas/matricula/:turmaId/confirmadas', MatriculaController.pegaMatriculasPorTurma)
.post('/pessoas', PessoaController.criaPessoa)
.post('/pessoas/:id/restaura', PessoaController.restauraPessoa)
.post('/pessoas/:estudanteId/cancela', PessoaController.cancelaPessoa)
.post('/pessoas/:estudanteId/matricula', MatriculaController.criaMatricula)
.post('/pessoas/:estudanteId/matricula/:matriculaId/restaura', MatriculaController.restauraMatricula)
.put('/pessoas/:id', PessoaController.atualizaPessoa)
.put('/pessoas/:estudanteId/matricula/:matriculaId',  MatriculaController.atualizaMatricula)
.delete('/pessoas/:id', PessoaController.apagaPessoa)
.delete('/pessoas/:estudanteId/matricula/:matriculaId',  MatriculaController.apagaMatricula)

module.exports = router