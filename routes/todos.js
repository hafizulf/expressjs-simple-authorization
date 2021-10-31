const express = require('express')
const router = express.Router()

const { setTodo, permissionScope } = require('../helper/Todos')
const { authUser } = require('../middleware/UserAuth')

router.get('/', authUser, (req, res) => {
  res.json(permissionScope(req.user))
})

router.get('/:id', setTodo, authUser, (req, res) => {
  res.json(req.todo)
})

module.exports = router;
