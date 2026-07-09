import { CONSULTA } from "../database/conexao.js"

class PontoRepository {

    //Aqui é para acessar e alterar dados de um usuário específico em 1 dia específico 
    //A meta é ver se tem algum dado e caso tenha poder acrescentar ou editar.
    showOneDay(user_id, data) {
        const SQL = "SELECT * FROM livro_de_ponto WHERE user_id=? AND data=?"
        // console.log(SQL)
        return CONSULTA(SQL, [user_id, data], 'Não foi possível localizar o registro')

    }

    criaRegistro(registro) {
        const SQL = "INSERT INTO livro_de_ponto SET user_id = ?, data = ?, entrada = ?, saida_intervalo = ?, retorno_intervalo = ?, saida = ?"
        return CONSULTA(SQL, [registro.user_id, registro.data, registro.entrada, registro.saida_intervalo, registro.retorno_intervalo, registro.saida], 'Não foi possível criar o registro');
    }



    editaRegistro(registro, id) {
        const SQL = "UPDATE livro_de_ponto SET entrada = ?, saida_intervalo = ?, retorno_intervalo = ?, saida = ? WHERE id = ?;"
        return CONSULTA(SQL, [registro.entrada, registro.saida_intervalo, registro.retorno_intervalo, registro.saida, id], 'Não foi possível atualizar o o registro');

    }

    consultaPonto(user_id) {
<<<<<<< HEAD
         const SQL = "SELECT * FROM livro_de_ponto WHERE user_id=? ORDER BY data DESC"
=======
         const SQL = "SELECT * FROM livro_de_ponto WHERE user_id=?"
>>>>>>> 21efcf23e1b3f18d85a26956a5290fdd36700610
        // console.log(SQL)
        return CONSULTA(SQL, user_id, 'Não foi possível localizar o registro')

    }

<<<<<<< HEAD
    consultaPorPeriodo(user_id, dataInicial, dataFinal) {
        const SQL = `SELECT * FROM livro_de_ponto WHERE user_id = ? AND data BETWEEN ? AND ? ORDER BY data;`;
        return CONSULTA( SQL, [user_id, dataInicial, dataFinal], 'Não foi possível localizar os registros.');
    }

=======
>>>>>>> 21efcf23e1b3f18d85a26956a5290fdd36700610
}

export default new PontoRepository