const userService = require('../../../services/user')
module.exports = () => {
    return (req, res) => {
        const id = req.params.id;
        const data = req.body;
        res.status(200).send(
            {
                "success": true,
                "data": userService.updateUser(id, data)
            }
        )
    }
}