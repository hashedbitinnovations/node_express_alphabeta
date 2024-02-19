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

app.use('/', (req, res) => {
    res.send('My Express Application')
})


app.listen(4000);