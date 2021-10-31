const { users } = require('../data')

const setUser = (req, res, next) => {
  const { userId } = req.body

  if (userId) {
    // returning userId or null if doesn't exist
    req.user = users.find(user => user.id === userId)
  }

  next()
}

module.exports = { setUser }
