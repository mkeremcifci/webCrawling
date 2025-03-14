import jwt from 'jsonwebtoken'

const authenticate = ({ secret }) => {
    return async(req, res, next) => {
        try{
            console.log("Authenticate.js")

            let token = ""
            if(req.headers.authorization){
                console.log(req.headers.authorization)
                token = req.headers.authorization
            }
            if(token){
                console.log("Token var")
                req.user = "Kerem"
                console.log("Yetkilendirildi")
            }
        }
        catch(error){
            console.error(error)
        }
        next()
    }
}

export default authenticate