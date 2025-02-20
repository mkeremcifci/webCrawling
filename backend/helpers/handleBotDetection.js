const HandleBotDetection = async (page) =>{
    const search = 'div[class="px-captcha-container"]';
    try{
        await page.waitForSelector(search, {timeout:6000})
        return true
    }catch(error){
        return false
    }
}

export default HandleBotDetection