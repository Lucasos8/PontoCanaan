import UsersController from "./app/controllers/UsersController.js";
import { Router } from "express";


const ROUTER = Router()

//Rotas das páginas mais usadas
ROUTER.get('/', UsersController.showAllIndex)//tela inicial
//ROUTER.get('', (req, res) => {res.render('registrarHoras')})//tela de resgistrar horas
//ROUTER.get('', (req, res) => {res.render('consultarHoras')})//tela onde consulta e baixa os registros
ROUTER.get('/cadastroUsuario', (req, res) => {res.render('cadastroUsuario')})//tela para cadastrar novo usuário
ROUTER.get('/listaUsuario', UsersController.showAllEditar)//tela para selecionar o usuario que vai ser editado.
ROUTER.get('/editaUsuario/:id', UsersController.show)//teste
//ROUTER.get('/editaUsuario/:id', (req, res) => {res.render('editaUsuario')})
//Rotas para o CRUD dos usuários
ROUTER.post('/cadastroUser', UsersController.create)//criar novo usuário
ROUTER.post('/editarUser/:id', UsersController.update)//editar o usuário
ROUTER.post('/delete/:id', UsersController.delete)//deletar o usuário

//Rotas para o registro de horas.








export default ROUTER