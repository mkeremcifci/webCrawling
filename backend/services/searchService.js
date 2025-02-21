import crawl from "./webCrawl.js"
import Errors from "./../helpers/error.js"
import sleep from "../helpers/Sleep.js"

const {BotDetectionError, InternalServerError} = Errors 
export default class SearchService{
    static async search(req){
        const {job} = req.body

        const result = await crawl(job)

        if(result instanceof BotDetectionError){
            sleep(60000)
            SearchService.search(req)
        }
    }
}