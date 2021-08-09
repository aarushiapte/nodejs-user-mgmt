const userService = require('../../../services/user')
module.exports = () => {
    return (req, res) => {
        res.status(200).send(
            {
                "success": true,
                "message": "Fetched all users",
                "data": userService.getAllUsersData()
            }
        )
    }
}