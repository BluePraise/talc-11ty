const EleventyFetch = require("@11ty/eleventy-fetch");
const { DateTime } = require("luxon");

module.exports = function (eleventyConfig) {

    eleventyConfig.addFilter("postDate", (dateObj) => {
        return DateTime.fromJSDate(dateObj).toLocaleString(DateTime.DATE_MED);
    })
    // let url = "https://api.github.com/repos/11ty/eleventy";
    eleventyConfig.setServerOptions({ showVersion: true })
    // move css and jpg to output folder
    eleventyConfig.addPassthroughCopy("src/assets/")
    eleventyConfig.addWatchTarget("src/assets/css/*.css")
    eleventyConfig.addPassthroughCopy("src/css/")


    // presents current year
    eleventyConfig.addShortcode("year", () => `${new Date().getFullYear()}`);

    return {
        dir: {
            input: 'src',
            includes: '_includes',
            output: 'public',
        },
        templateFormats: ['md', 'njk', 'html'],
        markdownTemplateEngine: 'njk',
        htmlTemplateEngine: 'njk',
        dataTemplateEngine: 'njk',
    }

}