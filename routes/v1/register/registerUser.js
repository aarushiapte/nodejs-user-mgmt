const userService = require('../../../services/user')

module.exports = () => {
    return (req, res) => {
        const data = req.body;
        userService.insertUser(data);
        res.status(200).send(
            {
                "success": true,
                "data": "User inserted"
            }
        )
    }
}