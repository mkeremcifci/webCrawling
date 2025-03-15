import jwt from 'jsonwebtoken'

const authenticate = ({ secret }) => {
    return async(req, res, next) => {
        try{
            let token = ""
            if(req.headers.authorization){
                token = req.headers.authorization
            }
            if(token){
                console.log("Token var")
                req.user = "Kerem"
                console.log("Yetkilendirildi")
            }
        }
        catch(error){
            console.error("Hata", error)
        }
        next()
    }
}

export default authenticate