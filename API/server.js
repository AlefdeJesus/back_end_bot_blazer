const app = require('./app.js');
const {realizarScraping} = require('./script.js');
const config = require('./config/config.js');
require('dotenv').config();

realizarScraping();



const porta = process.env.PORTA || 3333;


app.use((req,res)=>{
    res.status(404).json({erro:'Pagina não encontrada *.*'});
})

app.listen(porta,()=>{
    console.log(`Servidor rodando na porta ${porta} *_* `);
})