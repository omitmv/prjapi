const express = require('express')
const app = express()

app.get('/', (req, res) => {
    res.send(`Hello World 1.0`)
})

app.listen(443, () => {
    console.log(`Server running on port 443`)
})