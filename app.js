const express = require('express')
const app = express()
const port = process.env.PORT || 3000
const routes = require('./routes')

app.use(routes)

app.listen(3000, ()=>{

    console.log('Online na porta ' + port)
})