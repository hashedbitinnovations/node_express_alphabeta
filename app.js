const express = require('express');

const app = express();


app.use('/studentlist123', (req, res) => {
    res.send('My 2nd Express Application')
})


app.use('/studentlist', (req, res) => {
    const list = [
        {
            id: 123,
            name: 'abc'
        },
        {
            id: 1234,
            name: 'abcd'
        },
        {
            id: 1235,
            name: 'abcde'
        }
    ]
    res.send(list)
})

app.use('/test', (req, res) => {
    res.send('My Express Application')
})

app.use('/html', (req, res) => {
    res.send('<h1>My Express App</h1>')
})





app.get('/getapi', (req, res) => {
    res.send('<h1>My get Express api</h1>')
})

app.post('/postapi', (req, res) => {
    res.send('<h1>My post Express api</h1>')
})

app.put('/putapi', (req, res) => {
    res.send('<h1>My put Express api</h1>')
})

app.delete('/deleteapi', (req, res) => {
    res.send('<h1>My delete Express api</h1>')
})


const facilitiesRoute = require('./routes/facilities');
app.use('/facilities', facilitiesRoute)

const roomsRoute = require('./routes/rooms');
app.use('/rooms', roomsRoute)


app.listen(4000);