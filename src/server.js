const express = require('express')
const cors = require('cors')

const db = require('./database/db')
const routes = require('./routes/routes')

const app = express()

//conexão com o banco de dados
db.connect()

const allowedOrigins = [
    'http://127.0.0.1:5500',
    'http://www.api.com.br',
]

//habilita CORS
app.use(cors({
    //função para avaliar se as origens estão habilitadasa para acessar a API
    origin: function(origin, callback){
        let allowed = true

        //Exemplo: mobile app
        if (!origin) allowed = true

        if (!allowedOrigins.includes(origin)) allowed = false

        callback(null, allowed) //null = mensagem apdrão a ser retornada ao navegador caso allowed seja false 
    }

}))

//habilita servidor para receber dados via post (json)
app.use(express.json())

//definindo as rotas
app.use('/api', routes)

//executando o servidor
const port = process.env.PORT || 8080
app.listen(port, () => console.log(`Server is listening on port ${port}`))