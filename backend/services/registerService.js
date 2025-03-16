import User from './../models/User.js'
import { BadRequestError } from './../helpers/error.js'
async function Register(firstName, lastName, email, password){
    if(await User.findOne({ email })){
        throw new BadRequestError('Email zaten mevcut')
    }
    else{
        const user = new User({
            firstName,
            lastName,
            email,
            password
        })
        
        await user.save()
        
    }
}

export default Register