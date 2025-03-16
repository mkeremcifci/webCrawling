import express from 'express'

import loginService from './../services/loginService.js'
import handleError from '../helpers/handleError.js'

const router = express.Router()

router.post("/", async(req, res) => {
    try{
        const { email, password } = req.body
        await loginService(email, password)

        res.status(200).json({message: 'Giriş başarılı'})
    }
    catch(error){
        handleError(error, req, res)
    }
})

export default router