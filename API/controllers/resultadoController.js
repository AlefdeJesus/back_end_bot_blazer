const sequelize = require('sequelize');
const {Sinais} = require('../models');


class resultadoController {
  static async obterDados(req, res) {

    try {
      const sinais = await Sinais.findAll({
        order: [
          ['hora','DESC'],
        ],
      });
        return res.status(200).json(sinais);
    } catch (error) {
      return res.status(500).json({ erro: error.message });
    }
  }

  static async apagarDados(req, res) {
    try {
      await Sinais.destroy({
        where: {},
        truncate: true,
      });
      return res.status(200).json({ mensagem: 'Dados apagados com sucesso' });
    } catch (error) {
      return res.status(500).json({ erro: error.message });
    }
  }
}

module.exports = resultadoController;
