module.exports = function (eleventyConfig) {
  // Copy assets to output
  eleventyConfig.addPassthroughCopy("src/assets");

  // Copy robots.txt to root
  eleventyConfig.addPassthroughCopy("src/robots.txt");

  // Set input and output directories
  return {
    dir: {
      input: "src",
      layouts: "_layouts",
      data: "_data",
      output: "_site",
    },
  };
};
