import express from "express"
import cros from "cors"
import "dotenv/config"

import routes from "./routes/index.js"
import { ConsoleMessage } from "puppeteer"


const PORT = process.env.PORT || 5000
const app = express()

app.use(cros())
app.use(express.json()); 
app.use("/", routes)

app.listen(PORT,()=>{
    console.log("listning on:", PORT)
})