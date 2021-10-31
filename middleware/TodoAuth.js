const { ROLE, todos } = require('../data')

const permissionScope = (user) => {
  if (user.role === ROLE.ADMIN) return todos
  return todos.filter(todo => todo.userId === user.id)
}

const viewTodo = (req, res, next) => {
  const user = req.user
  const todo = req.todo

  const hasAccess = (
    user.role === ROLE.ADMIN ||
    todo.id === user.id
  )

  if (!hasAccess) {
    return res.status(401).send('Not Allowed')
  }

  next()
}

module.exports = { permissionScope, viewTodo }
