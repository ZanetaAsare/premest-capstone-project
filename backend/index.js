const express = require('express')
const config = require('./helpers/config')

const app = express()


// middlewares
app.use(express.json())



// initializing app
app.listen(config.PORT, () => {
    console.log(`Server started on port: ${config.PORT}`)
})

