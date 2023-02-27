// config inicial 
const express = require('express')
const mongoose = require('mongoose')
const app = express()

//forma de ler JSON / middlewares 
app.use(
    express.urlencoded({
        extended: true,
    }),
)

app.use(express.json())

//rota inicial / endpoint
app.get('/', (req, res) => {

    // mostrar req

    res.json({ message: 'Oi Express!' })
})

//entregar uma porta

const DB_USER = "mateus"
const DB_PASSWORD = encodeURIComponent('u2cWh9-VwEUwZ4q')
mongoose
    .connect(
        `mongodb+srv://${DB_USER}:${DB_PASSWORD}@cluster0.3ryxake.mongodb.net/bancodaapi?retryWrites=true&w=majority`
    )
    .then(() => {
        console.log("Conectado ao MongoDB.")
        app.listen(3000)
    }
    )
    .catch((err) => console.log(err))
