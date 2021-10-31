const { todos } = require('../data')

const setTodo = (req, res, next) => {
  const todoId = parseInt(req.params.id)
  req.todo = todos.find(todo => todo.id === todoId)

  if (req.todo == null) {
    return res.status(400).send('Todo not found')
  }

  next()
}

module.exports = { setTodo }
