const express = require('express')
const app = express()

const { setUser } = require('./helper/SetUser')
const { authUser } = require('./middleware/UserAuth')

app.use(express.json())

app.use(setUser)

app.get('/', (req, res) => {
  res.send('Home page')
})

app.get('/dashboard', authUser, (req, res) => {
  res.send('Dashboard Page')
})

app.get('/admin', (req, res) => {
  res.send('Admin Page')
})

app.listen(3009)
