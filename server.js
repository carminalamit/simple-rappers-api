const express = require('express')
const app = express()
const PORT = 3000

const rappers = {
    'post malone' : {
        'age': 27,
        'birthName': 'Austin Richard Post',
        'birthLocation': 'Los Angeles, California, U.S.'
    },
    'eminem' : {
        'age': 50,
        'birthName': 'Marshall Bruce Mathers III',
        'birthLocation': 'St. Joseph, Missouri, U.S.'
    },
    'the weeknd' : {
        'age': 33,
        'birthName': 'Abel Makkonen Tesfaye',
        'birthLocation': 'Toronto, Ontario, Canada'
    },
    'unknown' : {
        'age': 0,
        'birthName': 'unknown',
        'birthLocation': 'unknown'
    }
}

// '/' means main route
app.get('/', (request, response) => {
    // __dirname means current directory
    response.sendFile(__dirname + '/index.html')
})

// after colon ':' is query parameter
app.get('/api/:name', (request, response) => {
    const rapperName = request.params.name.toLowerCase()

    // we use bracket instead of . coz rapper names has space
    if (rappers[rapperName]) {
        response.json(rappers[rapperName])
    } else {
        response.json(rappers['unknown'])
    }
})


app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}!`)
})