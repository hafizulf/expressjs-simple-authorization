const { ROLE, todos } = require('../data')

const permissionScope = (user) => {
  if (user.role === ROLE.ADMIN) return todos
  return todos.filter(todo => todo.userId === user.id)
}

const viewTodo = (req, res, next) => {
  const hasAccess = (
    req.user.role === ROLE.ADMIN ||
    req.todo.id === req.user.id
  )

  if (!hasAccess) {
    return res.status(401).send('Not Allowed')
  }

  next()
}

const deleteTodo = (req, res, next) => {
  if (req.todo.id !== req.user.id) {
    return res.status(401).send('Not Allowed')
  }

  next()
}

module.exports = { permissionScope, viewTodo, deleteTodo }
