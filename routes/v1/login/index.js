const routes = require('express').Router()
module.exports = () => {
    routes.post('/', require('./login')())
    return routes
}