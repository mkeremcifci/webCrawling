import express from "express"

import searchService from "./../services/searchService.js"

const router = express.Router();

router.post("/", async(req, res)=>{
    try{
        const keyword = req.body.keyword
        const result = await searchService.search(keyword)
        res.status(200).json({message:result})
    }catch{
        res.status(500).json({message:"Gelmedi"})
    }
    
})

export default router