const routes = require('express').Router()
const auth = require('../../middleware/middleware')
module.exports = () => {
    routes.use('/user', auth, require('./user')())
    routes.use('/login', require('./login')())
    routes.use('/register', require('./register')())
    return routes
}