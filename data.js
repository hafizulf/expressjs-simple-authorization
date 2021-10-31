const ROLE = {
  ADMIN: 'admin',
  BASIC: 'basic'
}

const users = [
  { id: 1, name: 'skuy', role:ROLE.ADMIN },
  { id: 2, name: 'hafizul', role:ROLE.BASIC },
  { id: 3, name: 'furqan', role:ROLE.BASIC }
]

const todos = [
  { id: 1, name: 'Skuy project', userId: 1 },
  { id: 2, name: 'Hafizul project', userId: 2 },
  { id: 3, name: 'Furqan project', userId: 3 }
]

module.exports = { ROLE, users, todos }
