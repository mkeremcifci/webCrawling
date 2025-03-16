import express from "express"

import searchRoutes from "./search.js"
import isAuthenticated from "./../middleware/isAuthenticated.js"
import register from './register.js'
import login from './login.js'

const router = express.Router()

function deneme(req, res){
    res.status(200).json({message:req.headers.authorization})
}


router.use("/search", searchRoutes)
router.use("/profile",deneme)
router.use("/register", register)
router.use("/login", login)

export default router