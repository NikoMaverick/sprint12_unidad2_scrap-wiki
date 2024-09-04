const axios = require ('axios')
const cheerio = require('cheerio')
const express = require('express')
const app = express()

const url = 'https://es.wikipedia.org/wiki/Categor%C3%ADa:M%C3%BAsicos_de_rap'

app.get('/', (req, res) => {
    res.send('FUNCIONA !!!!')
})

app.listen(3000, () => {
    console.log('Express esta escuchando en el puerto http://localhost:3000')
})