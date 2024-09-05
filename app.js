const axios = require ('axios')
const cheerio = require('cheerio')
const express = require('express')
const app = express()

const url = 'https://es.wikipedia.org/wiki/Categor%C3%ADa:M%C3%BAsicos_de_rap'

app.get('/', (req, res) => {
    axios.get(url).then((response) =>{ // Llamamos a axios y nos traemos la url. Una vez que nos la traigamos, tiene que tener una respuesta con el "then"
        if(response.status === 200) {//Si nos devuelve un 200
            const html = response.data //Guardamos la respuesta
            console.log(html)
            res.send(html)
        }
    })
})

app.listen(3000, () => {
    console.log('Express esta escuchando en el puerto http://localhost:3000')
})