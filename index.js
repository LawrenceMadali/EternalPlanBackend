const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
// local imports
const connectDb = require('./database')
const eternalplansRoutes = require('./controllers/eternalplans.controller')
const { errorHandler } = require('./middleware')

const app = express()
// middleware
app.use(bodyParser.json())
app.use(cors({ origin:'http://localhost:4200'}))
app.use('/api/eternalplans', eternalplansRoutes)
app.use(errorHandler)

connectDb()
    .then(() => {
        console.log('Database connection succeeded.')
        app.listen(3000, 
            () => console.log('server started at port 3000.'))
    })
    .catch(err => console.log(err))