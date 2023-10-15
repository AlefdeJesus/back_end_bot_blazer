const express = require('express');
const resultadoController = require('../controllers/resultadoController.js');

const router = express.Router();

router 
    .get('/home', resultadoController.obterDados)
    .post('/apagar', resultadoController.apagarDados)

module.exports = router;


