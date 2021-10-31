const { ROLE } = require('../data')

const permissionScope = (user, todos) => {
  if (user.role === ROLE.ADMIN) return todos
  return todos.filter(todo => todo.userId === user.id)
}

module.exports = { permissionScope }
