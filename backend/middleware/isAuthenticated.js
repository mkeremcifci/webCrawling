const isAuthenticated = async(req, res, next) => {
    if(req?.user){
        console.log("authneticated")
        return next()
    }
    console.log("Not authenticated")
}

export default isAuthenticated