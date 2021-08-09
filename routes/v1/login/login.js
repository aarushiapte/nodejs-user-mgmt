const userService = require('../../../services/user')
module.exports = () => {
    return async(req, res) => {
        const data = req.body
        loginRes = await userService.loginUser(data);
        token = loginRes['token'] || null
        res.status(loginRes['status']).send(
            {
                "message": loginRes["message"],
                "token": token
            }
        )
    }
}