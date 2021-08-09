const routes = require('express').Router()
const multer = require('multer')
const storage = multer.diskStorage({
    destination: (request,file,cb) => {
        cb(null,'./uploads/')
    },
    filename: (request,file,cb) =>{
        cb(null, file.originalname)
    }
})
const upload = multer({storage:storage})
module.exports = () => {
    routes.post('/', upload.single('profileImage'), require('./registerUser')())
    return routes
}