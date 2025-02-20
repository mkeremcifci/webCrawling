class HttpError extends Error{
    constructor(code, name, message){
        super(message)
        this.code = code
        this.name = name
        this.message = message
    }

    getErrorCode(){
        return(this.code)
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

export default {
    BotDetectionError,
    InternalServerError
}