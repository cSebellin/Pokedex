const express = require('express')
var cors = require('cors')
const port = 3000;
const api = express();

api.use(cors())

api.get('./api', (request, responde)=>{
   
    console.log('Hello World')
})

api.use('./pokemons', api)

api.listen(port,()=> {

})
