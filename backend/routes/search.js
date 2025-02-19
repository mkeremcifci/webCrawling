import express from "express"

import searchService from "./../services/searchService.js"

const router = express.Router();

router.get("/", async(req, res)=>{
    try{
        searchService.search(req)
        res.sendStatus(200)
    }catch{
        res.sendStatus(500)
    }
    
})

export default router