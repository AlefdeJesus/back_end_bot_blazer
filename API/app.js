const express = require('express');
const routes = require('./routes');
const Sequelize = require('sequelize');
const cors = require('cors');

const app = express();
app.use(express.json());

app.use(cors( {
    origin: '*',
    methods: 'GET, POST, OPTIONS, PATCH, DELETE, PUT',
    allowedHeaders: 'Content-Type, Authorization, Accept, X-Requested-With, credentials', // Certifique-se de incluir 'credentials'
    credentials: true
}));


routes(app);
const sequelize = new Sequelize(require('./config/config.js').development)

sequelize 
    .authenticate()
    .then(()=>{
        console.log("Conectado ao banco de dados *_* ")
    })
    .catch(error =>{
        console.log(error,'Erro ao conectar ao banco de dados *.* ')
    })

module.exports = app;