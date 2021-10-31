const express = require('express')
const router = express.Router()

const { setTodo } = require('../helper/SetTodo')
const { authUser } = require('../middleware/UserAuth')
const { permissionScope, viewTodo, deleteTodo } = require('../middleware/TodoAuth')

router.get('/', authUser, (req, res) => {
  res.json(permissionScope(req.user))
})

router.route('/:id')
  .get(setTodo, authUser, viewTodo, (req, res) => {
    res.json(req.todo)
  })
  .delete(setTodo, authUser, deleteTodo, (req, res) => {
    res.json('Todo has been deleted')
  })

module.exports = router;
