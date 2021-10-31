const express = require('express')
const app = express()

app.use(express.json())

app.get('/', (req, res) => {
  res.send('Home page')
})

app.get('/dashboard', (req, res) => {
  res.send('Dashboard Page')
})

app.get('/admin', (req, res) => {
  res.send('Admin Page')
})

app.listen(3009)
