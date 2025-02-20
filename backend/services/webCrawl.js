import puppeteer from 'puppeteer-extra';
import StealthPlugin from 'puppeteer-extra-plugin-stealth';
import "dotenv/config"
import { Console } from 'node:console';

import sleep from '../helpers/Sleep.js';
import HandleBotDetection from './../helpers/handleBotDetection.js'



const crawl = async (job)=>{
    const browser = await puppeteer.launch({
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

    if(!HandleBotDetection(page)){
        await sleep(5000)

        const searchInput = 'input[data-test="search-input-wrapper"]';
        const searchBtn = 'button[data-test="search-job-button"]';

        await page.waitForSelector(searchInput, { timeout: 60000 });
        await page.type(searchInput, job);

        await page.waitForSelector(searchBtn);
        await page.click(searchBtn);

        await page.waitForNavigation({ waitUntil: 'networkidle2' });

        await sleep(100000000)

        await browser.close()
    }else{
        console.log("Bota düştü")
    }
    
}

export default crawl