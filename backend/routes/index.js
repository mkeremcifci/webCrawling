import express from "express"

import searchRoutes from "./search.js"


const router = express.Router()

router.use("/search", searchRoutes)

export default router