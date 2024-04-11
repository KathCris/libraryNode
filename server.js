// import http from 'http';
import app from "./src/app.js";

const PORT = 3000;

const rotas = {
    "/": "Curso de node"
}

// const server = http.createServer((req, res) => {
//     res.writeHead(200, {'Content-type': 'text/plain'});
//     res.end(rotas[req.url]);
// });

app.listen(PORT, () => {
    console.log('Servidor escutando')
})