// Artur Alves.
// Desenvolvido para aprendizado da criação de um server.

//Criação de server na mão usando node.js
/*const http = require('http') // Carrega http no script e armeza na constante.

const server = http.createServer((req,res)=>{
    if(req.url == '/'){
        res.end('<h1>Home</h1>')
    }
    res.end('<h1> Pagina nao encontrada !')    
} 
) // Cria o server e armazena na constante.
// Req e Res correspondem a requisição e resposta do serviço, onde fica as funções.

server.listen(3001, 'localhost', () =>{
    console.log('Servidor está em: http://localhost:3001') // Escrita que aparece no console neste caso NODE.js
    console.log('Para desligar o server aperte ctrl+C.')

}) // A constante server com o servidor fica ouvindo a requisição feita no local host.*/

// Criação Server usando Express.js
// Para executar digite no console: node server.js

const express = require('express');
const extenso = require('./extenso');
const server = express();

server.get('/',(req,res) => {

    /*variavel de requição precisa ter:  req = {headers, method, url}*/

    console.log(req.params);

    res.send(`
   
    <h1>Digite o Numero de Requisicao</h1>

    <form action="/" method="GET"
        <label for="numero">Numero:<label>
        <input type="numero" name="numero" id="numero">
        <input type="submit" value="Enviar...">
    </form>
    `)
})

server.get('/numero-:numero',(req,res) => {    //passando um variável pelo req. Variável 'numero'. Use ":" e digite o nome da variavel

//`<script type="text/javascript" src="extenso.js"></script>`;
    console.log(req.params.numero);
    let escrita = extenso.extenso(req.params.numero);
    res.send(`<h1>O número digitado é: </h1><h2>`+ req.params.numero + "  =  " + escrita + "</h2>")
})

/*server.post('/',(req,res) => {
    res.send('<h1>Foi</h1>');  
})*/


server.listen(3001, () =>{

    console.log('Servidor está em: http://localhost:3001');
    console.log('Para desligar o server aperte ctrl+c');

})