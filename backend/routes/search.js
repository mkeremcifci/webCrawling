import express from "express"

import searchService from "./../services/searchService.js"
import handleError from "../helpers/handleError.js";

const router = express.Router();

router.post("/", async(req, res)=>{
    try{
        const keyword = req.body.keyword
        const result = await searchService.search(keyword)
        res.status(200).json({message:result})
    }catch(error){
        handleError(error, req, res)
    }
})

export default router