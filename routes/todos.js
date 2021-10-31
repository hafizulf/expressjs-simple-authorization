const express = require('express')
const router = express.Router()

const { todos } = require('../data');
const { authUser } = require('../middleware/UserAuth')
const { permissionScope } = require('../helper/Todos')

router.get('/', authUser, (req, res) => {
  res.json(permissionScope(req.user, todos))
})

module.exports = router;
