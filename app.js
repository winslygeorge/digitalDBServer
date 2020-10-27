const express = require('express')
const { get } = require('./routes/getRoute')

const getRoute = require('./routes/getRoute')

const postRoute = require('./routes/postRoute')

const app = express()

const bodyparser = require('body-parser')

const port = process.env.PORT || 3040

app.use(express.json(bodyparser))

app.use('/', getRoute)

app.use('/', postRoute)

app.listen(port, (err)=>{

    if(!err){

    console.log("connected successfuly on port ${port}")
    }else{

        console.log("error connecting to the port " + port)
    }
})

