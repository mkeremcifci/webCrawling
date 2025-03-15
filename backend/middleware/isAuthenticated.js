import { UnauthorizedError } from './../helpers/error.js'
import handleError from './../helpers/handleError.js'

const isAuthenticated = async(req, res, next) => {
    if(req?.user){
        return next()
    }
    return handleError(new UnauthorizedError('Not autheticated'), req, res)
}

export default isAuthenticated