import PontoRepository from "../repositories/PontoRepository.js"
<<<<<<< HEAD
import UsersRepository from "../repositories/UsersRepository.js";
import UsersController from "./UsersController.js";
import XLSX from 'xlsx';


class PontoController {
  //olhar o registro de ponto da pessoa que você selecionar. 
=======

class PontoController {
//olhar o registro de ponto da pessoa que você selecionar. 
>>>>>>> 21efcf23e1b3f18d85a26956a5290fdd36700610
  async consultaPonto(req, res) {
    const user_id = req.params.user_id
     try {
      const registro = await PontoRepository.consultaPonto(user_id)
      res.render('consulta', { registro, user_id })
    } catch (error) {
      console.error("Deu ruim", error)
    }
<<<<<<< HEAD
  }

  //Faz a consulta do ponto filtrando por data e dera um excel .
  async exportarPeriodo(req, res) {
    try {
        const { user_id } = req.params;
        const { dataInicial, dataFinal } = req.query;


        //Aqui é para dar o nome do user para o arquivo
        const usuario = await UsersRepository.findById(user_id);//aqui vai fazer a consulta do usar baseado no userID 
        const nomeUsuario = usuario[0].nome;//aqui está pegando o nome e salvando
        const nomeArquivo = nomeUsuario.replace(/\s+/g, "_").replace(/[^\wÀ-ÿ]/g, "");//Aqui é para trocar o espaço no nome por outro caracter. 




        const registros =
            await PontoRepository.consultaPorPeriodo(
                user_id,
                dataInicial,
                dataFinal
            );
            console.log(registros)
        const dados = registros.map(r => ({
            Data: r.data,
            Entrada: r.entrada,
            Saida_Intervalo: r.saida_intervalo,
            Retorno_Intervalo: r.retorno_intervalo,
            Saida: r.saida
        }));

        const ws = XLSX.utils.json_to_sheet(dados);
        const wb = XLSX.utils.book_new();

        XLSX.utils.book_append_sheet(
            wb,
            ws,
            'Registros de Ponto'
        );

        const buffer = XLSX.write(
            wb,
            {
                type: 'buffer',
                bookType: 'xlsx'
            }
        );

        res.setHeader(
        'Content-Disposition',
         `attachment; filename=Ponto_${nomeArquivo}_${dataInicial}_a_${dataFinal}.xlsx`
        );
        res.setHeader(
            'Content-Type',
            'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
        );

        res.send(buffer);

    } catch (erro) {
        console.error(erro);
        res.status(500).send('Erro ao gerar a planilha.');
    }
  }
=======


}
>>>>>>> 21efcf23e1b3f18d85a26956a5290fdd36700610

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