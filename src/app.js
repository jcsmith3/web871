const express = require('express')
const hbs = require('express-handlebars')
require('dotenv').config()
require('./DB/mongoose')

const app = express()

// Template engine
app.engine('hbs', hbs({
    extname: 'hbs',
    defaultLayout: 'layout',
}))
app.set('view engine', 'hbs');

// Express body parser
app.use(express.urlencoded({
    extended: true
}));
// app.use(express.json)

// Set routers
app.use('/', require('./Routes/index'))
app.use('/po', require('./Routes/Po-Routes'))
app.use('/skids', require('./Routes/Skid-Routes'))
app.use('/items', require('./Routes/Item-Routes'))

const PORT = process.env.PORT || 4000
app.listen(PORT, () => console.log(`Server Running on PORT:${PORT}`))