const http = require('http');

function responderPeticion(request, response){
    response.end('Hola MUndo')
}

let server = http.createServer(responderPeticion);

server.listen(3000)
