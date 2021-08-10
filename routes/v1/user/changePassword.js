const userService = require('../../../services/user')
module.exports = () => {
    return async (req, res) => {
        //const id = req.params.id;
        const data = req.body;
        res.status(200).send(
            {
                "success": true,
                "message": "Password has been changed!",
                "data": await userService.changePassword(data)
            }
        )
    }
}
