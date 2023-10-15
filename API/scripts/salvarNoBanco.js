const {arrayResultado} = require('../script.js');
const sequelize = require('sequelize');
const {Sinais} = require('../models');

async function  salvarCorNoBanco (arrayResultado){
    for (const resultadoItem of arrayResultado) {
        await Sinais.create({
          cor: resultadoItem.lastCor,
          numero: resultadoItem.lastNumero,
          data: resultadoItem.data,
          hora: resultadoItem.hora,
        });
 
}
}
module.exports = salvarCorNoBanco;