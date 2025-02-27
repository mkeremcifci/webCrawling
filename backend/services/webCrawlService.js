import puppeteer from 'puppeteer-extra';
import StealthPlugin from 'puppeteer-extra-plugin-stealth';
import "dotenv/config"

import sleep from '../helpers/Sleep.js';
import HandleBotDetection from '../helpers/handleBotDetection.js'
import Errors from '../helpers/error.js'
import getJobDetails from '../helpers/getJobDetails.js'

const {BotDetectionError, InternalServerError} = Errors

puppeteer.use(StealthPlugin());

export default class Crawl{
    static async kariyernetCrawl(job){
        try{const browser = await puppeteer.launch({
            headless: false,
            args: [
                '--no-sandbox',
                '--disable-setuid-sandbox',
            ]
            });
    
            const page = await browser.newPage();
    
    
            await page.setViewport({
                width: 1920,
                height: 1080
            });
    
            await page.goto(process.env.URL, { waitUntil: 'networkidle2' });
            if(!(await HandleBotDetection(page))){
                const searchInput = 'input[data-test="search-input-wrapper"]';
                const searchBtn = 'button[data-test="search-job-button"]';
        
                await page.waitForSelector(searchInput, { timeout: 60000 });
                await page.type(searchInput, job);
        
                await page.waitForSelector(searchBtn);
                await page.click(searchBtn);
        
                await page.waitForNavigation({ waitUntil: 'networkidle2' });

                await page.waitForSelector(".list-items-wrapper");

                const html = await page.content()
                
                const result = await getJobDetails(html)
        
                await browser.close()
                return result
    
            }
            else{
                await browser.close()
                const error = new BotDetectionError()
                return null
            }
        }catch(error){
            console.error(error)
        }
    }
}