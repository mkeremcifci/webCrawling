const scrapeJobs = async (page) => {
    return await page.evaluate(() => {
        return Array.from(document.querySelectorAll('.list-items-wrapper .list-items')).map(item => ({
            title: item.querySelector('.k-ad-card-title.multiline')?.innerText.trim() || null,
            subtitle: item.querySelector('.subtitle')?.innerText.trim() || null,
            detail: item.querySelector('.job-detail')?.innerText.trim() || null
        }));
    });
};

export default scrapeJobs;