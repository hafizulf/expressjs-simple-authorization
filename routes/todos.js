const express = require('express')
const router = express.Router()

const { setTodo } = require('../helper/SetTodo')
const { authUser } = require('../middleware/UserAuth')
const { permissionScope, viewTodo } = require('../middleware/TodoAuth')

router.get('/', authUser, (req, res) => {
  res.json(permissionScope(req.user))
})

router.get('/:id', setTodo, authUser, viewTodo, (req, res) => {
  res.json(req.todo)
})

module.exports = router;
