const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
require('dotenv').config()

let userData = []

const getAllUsersData = () => {
    return userData
}

const getUserData = (id) => {
    const userInfo = userData.filter(user => user.id == id);
    if (userInfo.length === 1) return userInfo[0];
    return "User with this id does not exist"
}

const updateUser = (id, data) => {
    const index = userData.findIndex(user => user.id == id)
    if (index !== -1){
        for (key of Object.keys(data)) {
            if (userData[index][key]) {
                userData[index][key] = data[key];

            }
        }
        return "Updated User"   
    }
    return "User not found" 
}
   
const insertUser = async (data) => {
    const userId = userData.length + 1;
    data['id'] = userId;
    const password = data['password'];
    //console.log(request.file)
    //const profileImage = (request.file.path)
    //data['profile_picture'] = profileImage
    const salt = await bcrypt.genSalt(Number(process.env.BCRYPT_SALT))
    const encrypted_password = await bcrypt.hash(password, salt)
    data['password'] = encrypted_password;
    userData.push(data);
    return
}

const loginUser = async (data) => {
    const userInfo = await userData.filter(user => user.user_email == data['user_email']);
    
    if (userInfo.length == 1) {
        const password = userInfo[0]['password'];
        const pwd = data['password']
        const check = bcrypt.compare(password, pwd)
        if(check){

             const token = jwt.sign(
                 {
                     "id": userInfo[0]['id'],
                     "user_email": userInfo[0]['user_email']
                 },
                 process.env.jwt_secret
             )
             return{
                 "message": "Success",
                 "token": token,
                 "status": 200
             }
         }
        return{
             "message": "Incorrect password",
             "status": 404
         }
    }
    return{
        "message": "User not found",
        "status": 404
    }
}


const changePassword = async (data) => {
    const userInfo = userData.filter(user => user.user_email == data['user_email']);
    const index = userInfo[0]['id'];
    if (userInfo.length == 1) {
        const old_password = data['password'];
        const new_password = data['new_password'];
        if (bcrypt.compare(old_password, userInfo.password)){
            const salt = await bcrypt.genSalt(Number(process.env.BCRYPT_SALT));
            const encrypted_password = await bcrypt.hash(new_password, salt);
            userData[index][password] = data[encrypted_password]

            return{
                "message": "Password updated!",
                "status": 200
            }
            
        }

        return{
            "message": "Incorrect password",
            "status": 404
        }
    }
    return{
        "message": "User not found",
        "status": 404
    }
}


module.exports = {
    getAllUsersData,
    getUserData,
    updateUser,
    insertUser,
    loginUser,
    changePassword
}