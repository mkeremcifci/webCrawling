import crawl from "./webCrawl.js"

export default class SearchService{
    static async search(req){
        const {job} = req.body
        crawl(job)
    }
}