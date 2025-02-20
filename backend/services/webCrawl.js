import puppeteer from 'puppeteer-extra';
import StealthPlugin from 'puppeteer-extra-plugin-stealth';
import "dotenv/config"
import { Console, error } from 'node:console';

import sleep from '../helpers/Sleep.js';
import HandleBotDetection from './../helpers/handleBotDetection.js'
import Errors from './../helpers/error.js'



const {BotDetectionError, InternalServerError} = Errors

const crawl = async (job)=>{
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
        await sleep(5000)

        const searchInput = 'input[data-test="search-input-wrapper"]';
        const searchBtn = 'button[data-test="search-job-button"]';

        await page.waitForSelector(searchInput, { timeout: 60000 });
        await page.type(searchInput, job);

        await page.waitForSelector(searchBtn);
        await page.click(searchBtn);

        await page.waitForNavigation({ waitUntil: 'networkidle2' });


        const jobs = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.list-items-wrapper .list-items')).map(item => ({
                title: item.querySelector('.k-ad-card-title.multiline')?.innerText.trim() || null,
                subtitle: item.querySelector('.subtitle')?.innerText.trim() || null,
                detail: item.querySelector('.job-detail')?.innerText.trim() || null
            }));
        });
    
        console.log(jobs);
        await sleep(10000000)

        await browser.close()
        return true

        }else{
            browser.close()
            const error = new BotDetectionError()
            return error
        }
    }catch(error){
        console.error(error)
    }
}

export default crawl