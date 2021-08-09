const express = require('express')
const app = express()
require('dotenv').config()
const bodyParser = require('body-parser')
app.use(bodyParser.json({extended: true}));
const routesController = require('./routes/v1')()

PORT = process.env.port || 8888
baseUrl = '/api/v1'
app.listen(8888, () => {
    console.log('Listening on ' + PORT)
})

// app.get('/user', (req, res) => {
//     res.status(200).send(
//         {
//             "success" : true,
//             "message": "Hello from get"
//         }
//     )
// });

app.use(baseUrl, routesController)