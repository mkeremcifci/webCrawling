import express from "express"

import searchService from "./../services/searchService.js"

const router = express.Router();

router.post("/", async(req, res)=>{
    try{
        if(await searchService.search(req))
        res.status(200).json({message:"Geldi"})
    }catch{
        res.status(500).json({message:"Gelmedi"})
    }
    
})

export default router