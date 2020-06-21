const express = require('express')
const routes = express.Router()


routes.get('/', (req, res)=>{

    let dev = {

        nome: "Leo Porto",
        nick: "leoportogtr"
    }

    res.json(dev)
})

module.exports = routes