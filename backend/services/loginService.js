import { BadRequestError } from "../helpers/error.js"
import User from "../models/User.js"


async function Login(email, password){

    const user = await User.findOne({ email })

    if(!user){
        throw new BadRequestError("Kullanıcı bulunamadı")
    }
    if (!(await user.matchPassword(password))){
        throw new BadRequestError("Email veya parola yanlş")
    }
    
}

export default Login