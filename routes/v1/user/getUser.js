const userService = require('../../../services/user')
module.exports = () => {
    return (req, res) => {
        const id = req.params.id
        res.status(200).send(
            {
                "success": true,
                "message": "Fetched the user",
                "data": userService.getUserData(id)
            }
        )
    }
}