import { CONSULTA } from "../database/conexao.js"

class UsersRepository {

    //Cadastrar usuário
    create(user) {
        const SQL = "INSERT INTO users set ?;"
        return CONSULTA(SQL, user, 'Não foi possível cadastrar o usuário!')
    }

    //Mostrar todos os usuários
    findALL() {
        const SQL = "SELECT * FROM users;"
        return CONSULTA(SQL, 'Não foi possível localizar usuários')
    }

    //Mostrar todos os usuários que está ativo 
    findAllAtivos() {
        const SQL = "SELECT * FROM users WHERE ativo = 1;"
        return CONSULTA(SQL, 'Não foi possível localizar usuários')
    }
   
    //Mostrar 1 usuário pelo ID
    findById(id) {
        const SQL = "SELECT * FROM users WHERE id=?;"
        return CONSULTA(SQL, id, 'Não foi possível localizar o usuário.')
    }

    //atualizando o usuário
    update(user, id) {
        const SQL = "UPDATE users SET WHERE id=?;"
        return CONSULTA(SQL, [user, id], 'Não foi possível atualizar o usuário')
    }

    //deletando o usuário
    delete(id) {
        const SQL = "DELETE FROM users WHERE id=?;"
        return CONSULTA(SQL, id, 'Não foi possível deletar o usuário')
    }



}   
export default new UsersRepository()