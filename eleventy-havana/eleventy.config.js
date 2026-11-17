export default function (eleventyConfig) {
    eleventyConfig.addPassthroughCopy('src/css');

    eleventyConfig.setInputDirectory('src');
    eleventyConfig.setOutputDirectory('dist');
}