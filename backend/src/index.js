const express = require('express')
const routes = require('./routes')
const cors = require('cors')

/*
*    Tipos de parâmetros
*
*   Query Params: Parâmetros nomeados enviados na rota após "?" (Filtros, paginação)
*   Route Params: Parâmetros utilizados para identificar recursos ex: url_base/users/1
*   Request Body: Corpo da requisição utilizado para criar ou alterar recursos
*
*   Banco de Dados
*
*   SQL: MySQL, SQLite, PostgreSQL, Oracle, Microsoft SQL Server
*   NoSQL: MongoDB, CouchDB, etc
*
*   Driver: SELECT * FROM users
*   Query Builder: table('users').select(*).where()
*
*
*/

const app = express()
app.use(cors(//{
    //origin: 'http:meuapp.com' caso esteja em prodution
//}
))
app.use(express.json())
app.use(routes)


app.listen(3333)