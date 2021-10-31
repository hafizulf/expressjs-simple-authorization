const { ROLE, todos } = require('../data')

const permissionScope = (user) => {
  if (user.role === ROLE.ADMIN) return todos
  return todos.filter(todo => todo.userId === user.id)
}

module.exports = { permissionScope }
