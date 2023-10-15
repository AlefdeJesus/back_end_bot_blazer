const express = require('express');
const resultadoRouter = require('./resultadoRouter.js');


const routes = (app) => {
    app.route('/').get((req,res)=>{
        res.status(200).json({message:'Rota home *.* '});
    })

    app.use(
        express.json(),
        resultadoRouter

    )
}

module.exports = routes;