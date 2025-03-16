class HttpError extends Error{
    constructor(code, name, message){
        super(code, name, message)
        this.code = code
        this.name = name
        this.message = message
    }

    toJson(){
        return{
            code : this.code,
            name:this.name,
            message:this.message 
        }
    }
}

class BotDetectionError extends HttpError{
    constructor(){
        super(403, "BotDetectionError", "Bot protection triggered")
    }
}

class InternalServerError extends HttpError{
    constructor(){
        super(500, "InternalServerError", "Server error")
    }
}

class UnauthorizedError extends HttpError {
    constructor(message){
        super(401, 'Unauthorized', message)
    }
}

class BadRequestError extends HttpError {
    constructor(message){
        super(400, "BadRequest", message)
    }
}

export {
    BotDetectionError,
    InternalServerError,
    UnauthorizedError,
    BadRequestError
}