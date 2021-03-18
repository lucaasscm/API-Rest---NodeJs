
/*var http = require('http')

http.createServer(function(req, res){
    res.writeHead(200, {'Content-Type': 'text/plain'})
    res.write("Hello World, Lucas!!!!!")
    res.end()
}).listen('3000/atendimentos') ---- Se não houvesse express*/

const customExpress = require('./config/customExpress')
const conexao = require('./infraestrutura/conexao')
const tabelas = require('./infraestrutura/tabelas')


conexao.connect(erro => {
    if(erro) {
        console.log(erro)
    }
    else{
        console.log('Conectado ao DB com sucesso')

        tabelas.init(conexao)
        const app = customExpress()
        app.listen(3000, () => console.log("Servidor rodando na porta 3000"))        
    }
})




