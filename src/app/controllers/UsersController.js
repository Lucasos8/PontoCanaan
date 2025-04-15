import UsersRepository from "../repositories/UsersRepository.js"

class UsersController {
    async create(req, res) {
        try {
            //Aqui vai guardar todos os dados preenchido no forms de cadastro na constante USER.
            const USER = req.body;
            console.log(USER)
            
            //Aqui em RESULT é onde chamamos a função de criar em usursRepository com os dados guardado na constante USER mas a constate RESULT não vai ser usada em nada.
            const RESULT = await UsersRepository.create(USER)
            return res.redirect('/')
            
        } catch (error) {
            console.error(error);
            return res.status(500).json({ message: 'Erro ao cadastrar o usuário.' })
        }
    }

     //mostrar todos os usuários cadastrados no sistema na pag listaUsuario.
     async showAllEditar(req, res) {
        const users = await UsersRepository.findALL();
        res.render('listaUsuario', { users })
    }

    //mostrar todos os usuários cadastrados no sistema na pag index.
    async showAllIndex(req, res) {
        const users = await UsersRepository.findAllAtivos();
        res.render('index', { users })
    }

    //pegar um usuário específico
    async show(req, res) {
        const ID = req.params.id;

        try {
            const RESULT = await UsersRepository.findById(ID);
            if (RESULT) {
                //console.log(RESULT)
                res.render('editaUsuario', { user: RESULT });
            } else {
                res.status(404).send('Usuário não encontrado!!!');
            }
        } catch (error) {
            console.error("Erro ao buscar usuário:", error);
            res.status(500).send('Erro no servidor!');
        }

    }

    //atualizar dados do user 
    async update(req, res) {
        const USER = req.body
        const ID = req.params.id
        const RESULT = await UsersRepository.update(USER, ID)
        return res.redirect('/');
    }

    //deletar user    
    async delete(req, res) {
        const ID = req.params.id
        const RESULT = await UsersRepository.delete(ID)
        return res.redirect('/');
    }

}
export default new UsersController