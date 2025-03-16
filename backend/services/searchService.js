import Crawl from "./webCrawlService.js"
import sleep from "../helpers/Sleep.js"


export default class SearchService{
    static async search(keyword){
        let i = 0
        const threshold = 3
        const result = null
        while(i++<threshold && result == null){
            const result = await Crawl.kariyernetCrawl(keyword)
            return result
        }
    }
}