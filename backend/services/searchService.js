import Crawl from "./webCrawlService.js"
import Errors from "./../helpers/error.js"
import sleep from "../helpers/Sleep.js"

const {BotDetectionError, InternalServerError} = Errors 
export default class SearchService{
    static async search(keyword){
        let i = 0
        const threshold = 3
        const result = null
        while(i++<threshold && result === null){
            const result = await Crawl.kariyernetCrawl(keyword)
            return result

        }
    }
}