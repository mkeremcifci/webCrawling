const HandleBotDetection = async (page) =>{
    const search = 'div[data-test="search-input-wrapper"]';
    if(await page.waitForSelector(search, { timeout: 60000 })){
        return true;
    };
    return false
}

export default HandleBotDetection