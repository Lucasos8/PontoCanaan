import PontoRepository from "../repositories/PontoRepository.js"

class PontoController {
//olhar o registro de ponto da pessoa que você selecionar. 
  async consultaPonto(req, res) {
    const user_id = req.params.user_id
     try {
      const registro = await PontoRepository.consultaPonto(user_id)
      res.render('consulta', { registro, user_id })
    } catch (error) {
      console.error("Deu ruim", error)
    }


}

  //Em ShowRegistroHora vai mostrar dados de usuário caso exista, se não existe não mostra nada     
  async ShowRegistroHora(req, res) {

    const user_id = req.params.user_id
    const data = req.params.data
    try {
      const registro = await PontoRepository.showOneDay(user_id, data)
      res.render('ponto', { registro, data, user_id })
    } catch (error) {
      console.error("Deu ruim", error)
    }
  }

  //editar um registro de horas(para acrescentar novas horas)
  async editaRegistro(req, res) {
    const id = req.body.id;
    const registro = req.body;

    try {
      await PontoRepository.editaRegistro(registro, id);
      return res.redirect('/');
    } catch (error) {
      console.error("Erro ao salvar registro:", error);
      res.status(500).send("Erro ao salvar registro");
    }
  }


  //Para criar um registro de horas 
  async criaRegistro(req, res) {
    const id = req.body.id;
    const registro = req.body;
    console.log(id)
    console.log(registro)

    await PontoRepository.criaRegistro(registro);

    return res.redirect('/');
  }
  

}



export default new PontoController