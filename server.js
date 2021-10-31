const express = require('express')
const app = express()

app.use('/', (req, res) => {
  res.send('Home page')
})

app.listen(3009)
