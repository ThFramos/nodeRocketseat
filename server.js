const express = require('express');//acesso ao express
const mongoose = require('mongoose');// atualização automatica do servidor ao salvar arquivo
const requireDir = require('require-dir');//biblioteca facilita a require dos models

/* 
iniciando o app
*/
const app = express();//executar a função express

//iniciando o DB -> passando a url de conexão, caso tenha usuario de conexão deverá ser passado. ex:mongodb://user@password/ porta/nome da database
mongoose.connect("mongodb://localhost:27017/nodeapi",{
     useUnifiedTopology: true,
     useNewUrlParser: true 
     });

     requireDir('./src/models'); // importar a require- importart lib = yarn add require-dir



app.use('/api', require('./src/routes'))

//testando
//const Product = mongoose.model("Product"); //craindo var para importar ao db




//cirando primeira rota 
/* quando codigo estava tudo junto
app.get('/', (req,res)=>{    //req é a requisição de informações e res é a resposta dessa requisição
    //testando
    Product.create({//criando os dados para serem importados pelo db de acordo com o Schema
        title:"React native",
        description:"Build native apps with react",
        url: "http://github.com/facebook/react-native",
    })//verificar dados pelo robo 3t
    return res.send('Hello Thiago'); //sempre será o último item....return
}) */

app.listen(3001);//porta 3001 do navegado