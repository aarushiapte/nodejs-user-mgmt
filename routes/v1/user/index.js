const routes = require('express').Router()
module.exports = () => {
    routes.get('/', require('./getAllUsers')())
    routes.get('/:id', require('./getUser')())
    routes.put('/:id', require('./updateUserInfo')())
    routes.put('/', require('./changePassword')())
    return routes
}