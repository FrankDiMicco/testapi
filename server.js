const express = require('express')
const app = express()
const cors = require('cors')
const PORT = 8000

app.use(cors())

let herbs = {
    'tumeric': {
        'activeIng': 'curicumin',
        'activePart': 'root',
    },
    'willow wood tree': {
        'activeIng': 'salicylic acid',
        'activePart': 'bark',
    },
    'coffee': {
        'activeIng': 'caffeine',
        'activePart': 'beans',
    }
}



app.post('/quotes', (req, res) => {
  console.log('Hellooooooooooooooooo!')
})
//test
app.get('/', (request, response) => {
    //response.send('Hello World')
    response.sendFile(__dirname + '/index.html')
})

app.get('/api/herbs', (request, response) => {
    //response.send('Hello World')
    response.json(herbs)
})

app.listen(process.env.PORT || PORT, function() {
  console.log(`listening on ${PORT}`)
})
