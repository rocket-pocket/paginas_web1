const express = require('express')
const app = express()
const port = 3100
const public = 'public'
const path = require('path')

app.use((req, resp, next) => {
    console.log(`recibida la petición:${req.url}`)/* ${req.url} -> mostrará las propiedades de la url */
    console.log(__dirname + public)
    next()
}) 
/* crear la ruta de el archivo html */
app.use(express.static(
    path.join(__dirname, public)
))
//lo comentamos por que para un servidor estático no lo necesitamos
/* app.get('/', (req, res) => {
    res.send('<h1>Hola , soy un servidor node y uso Express</h1>')
}) */
/* app.get('/Pepe', (req, res) => {
    res.send('<h1>Hola , soy Pepe</h1>')
}) */
/* app.route() */

app.get('/api/users', (req, resp) => {
    let.oDatos = {results: []}
    console.log(oDatos)
    resp.json(oDatos)
})
app.listen(port, () => {
    console.log('server ejecutandose en el puerto' + port)
})