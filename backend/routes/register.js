import express from 'express'

import registerService from './../services/registerService.js'
import handleError from './../helpers/handleError.js'
const router = express.Router()

router.post("/", async (req, res)=>{
    try{
        const { firstName, lastName, email, password } = req.body

        await registerService(firstName, lastName, email, password)
        
        res.status(200).json({message:'Kayıt başarılı'})
    }
    catch(error){
        handleError(error, req, res)
    }
})


export default router
