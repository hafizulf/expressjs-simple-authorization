const { ROLE, todos } = require('../data')

const permissionScope = (user) => {
  if (user.role === ROLE.ADMIN) return todos
  return todos.filter(todo => todo.userId === user.id)
}

const setTodo = (req, res, next) => {
  const todoId = parseInt(req.params.id)
  req.todo = todos.find(todo => todo.id === todoId)
  console.log(req.todo);

  if (req.todo == null) {
    return res.status(400).send('Todo not found')
  }

  next()
}

module.exports = { setTodo, permissionScope }
