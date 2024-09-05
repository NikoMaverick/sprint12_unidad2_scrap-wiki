const axios = require ('axios')
const cheerio = require('cheerio')
const express = require('express')
const app = express()

const url = 'https://es.wikipedia.org/wiki/Categor%C3%ADa:M%C3%BAsicos_de_rap'

app.get('/', (req, res) => {
    axios.get(url).then((response) =>{ // Llamamos a axios y nos traemos la url. Una vez que nos la traigamos, tiene que tener una respuesta con el "then"
        if(response.status === 200) {//Si nos devuelve un 200 (Satisfactoria)
            const html = response.data //Guardamos la respuesta
            const $ = cheerio.load(html) // Nos carga lo que nos estamos trallendo. En este caso el html

            const pageTitle = $('title').text() //llamamos a cheerio($) para que nos devuelva el titulo(title) en texto(.text)
            const pTexts = $('p').text()
            
            const imgs = []; // Creamos variable para crear el array vacio para añadir las imagenes
            const links = []; //Creamos variable para crear el array vacio para añadir los enlaces
            
            $('img').each((index, element) => { // Recorremos todas las imagenes
                const img = $(element).attr('src') //Creamos una variable con las fotos, le pasamos el argumento "element" y el atributo "src", sacando el dato que contiene el "src"
                imgs.push(img) // Subimos las imagenes

            })

            $('a').each((index, element) => {
                const link = $(element).attr('href')
                links.push(link)
            })

            

            res.send(`
                <h1>${pageTitle}</h1>
                <h2>Imagenes</h2>
                <ul>
                    ${imgs.map(img => `<li>${img}</li>`).join}
                </ul>
                <h2>Enlaces</h2>
                <ul>
                    ${links.map(link => `<li>${link}</li>`).join} 
                </ul>
                `)
        }
    })
})

app.listen(3000, () => {
    console.log('Express esta escuchando en el puerto http://localhost:3000')
})