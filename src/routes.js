import PontoController from "./app/controllers/PontoController.js";
import UsersController from "./app/controllers/UsersController.js";
import { Router } from "express";

const ROUTER = Router()

//Rotas das páginas
ROUTER.get('/', UsersController.showAllIndex)//tela inicial
ROUTER.get('/ponto/:user_id/:data', PontoController.ShowRegistroHora)//tela de resgistrar/editar horas
ROUTER.get('/consulta/:user_id', PontoController.consultaPonto)//tela onde consulta e baixa os registros
ROUTER.get('/cadastroUsuario', (req, res) => {res.render('cadastroUsuario')})//tela para cadastrar novo usuário
ROUTER.get('/listaUsuario', UsersController.showAllEditar)//tela para selecionar o usuario que vai ser editado.
ROUTER.get('/editaUsuario/:id', UsersController.show)//teste

//Rotas para o CRUD dos usuários
ROUTER.post('/cadastroUser', UsersController.create)//criar novo usuário
ROUTER.post('/editarUser/:id', UsersController.update)//editar o usuário
ROUTER.post('/delete/:id', UsersController.delete)//deletar o usuário

//Rota para Registro de Ponto
ROUTER.post('/Registro/:id', PontoController.editaRegistro)//Para editar o Registro de horas.
ROUTER.post('/Registro/', PontoController.criaRegistro)//Para criar um registro de horas.




export default ROUTER