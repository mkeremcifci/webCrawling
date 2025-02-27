import * as cheerio from "cheerio";

const scrapeJobs = async (content) => {
  const jobData = [];
  const $ = cheerio.load(content);
  
  const titles = $(".list-items-wrapper .list-items .k-ad-card-title.multiline");
  const subtitles = $(".list-items-wrapper .list-items .subtitle");
  const jobDetails = $(".list-items-wrapper .list-items .job-detail");
  
  titles.each((i, el) => {
      jobData.push({
          title: $(el).text().trim(),
          subtitle: $(subtitles[i]).text().trim() || null,
          jobDetail: $(jobDetails[i]).text().trim() || null
      });
  });
  
  return jobData
};

export default scrapeJobs;