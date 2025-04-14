import mysql from 'mysql2'

const CONEXAO = mysql.createConnection({
    host: 'localhost',
    port: '3306',
    user: 'root',
    password: 'root',
    database: 'db_canaan'
})

CONEXAO.connect()

//Cod para consultas TODOS OS DADOS no banco

export const CONSULTA = (sql, valores = '', mensagemRegect) => {
    return new Promise((resolve, reject) => {
        CONEXAO.query(sql, valores, (error, result) => {
            if (error) return reject(mensagemRegect)
            const RESULT = JSON.parse(JSON.stringify(result))
            return resolve(RESULT)

        })
    })
}




export default CONEXAO