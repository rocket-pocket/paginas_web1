/* require es como los imports (los imports es lo único que n
    no podemos usra en node) */
const http = require('http')

const port = 3000

http.createServer((request, response) => {
    response.writeHead(200, {"Content-Type": "text/html"})
    response.end("<h1>Hola Daniel</h1>")
}).listen(port)/* ->  arrancar el servidor */


console.log("servidor iniciado en el puerto " + port)