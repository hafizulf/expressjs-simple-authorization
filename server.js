const express = require('express')
const app = express()

const { setUser } = require('./helper/SetUser')
const { authUser, authRole } = require('./middleware/UserAuth')
const { ROLE } = require('./data')

const todoRouter = require('./routes/todos')

app.use(express.json())

app.use(setUser)
app.use('/todos', todoRouter)

app.get('/', (req, res) => {
  res.send('Home page')
})

app.get('/dashboard', authUser, (req, res) => {
  res.send('Dashboard Page')
})

app.get('/admin', authUser, authRole(ROLE.ADMIN), (req, res) => {
  res.send('Admin Page')
})

app.listen(3009)
