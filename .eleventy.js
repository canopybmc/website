const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");

module.exports = function (eleventyConfig) {
  // Plugins
  eleventyConfig.addPlugin(syntaxHighlight);

  // Copy assets to output
  eleventyConfig.addPassthroughCopy("src/assets");

  // Copy robots.txt to root
  eleventyConfig.addPassthroughCopy("src/robots.txt");

  // --- Blog collection ---
  eleventyConfig.addCollection("blog", function (collectionApi) {
    return collectionApi
      .getFilteredByGlob("src/blog/*.md")
      .filter(post => !post.data.draft)
      .sort((a, b) => b.date - a.date);
  });

  // --- Blog filters ---
  eleventyConfig.addFilter("readingTime", content => {
    const words = (content || "").split(/\s+/).length;
    const minutes = Math.ceil(words / 200);
    return minutes === 1 ? "1 min read" : `${minutes} min read`;
  });

  eleventyConfig.addFilter("excerpt", content => {
    if (!content) return "";
    // Strip HTML tags, then take first 160 characters
    const text = content.replace(/<[^>]+>/g, "").trim();
    if (text.length <= 160) return text;
    return text.substring(0, 157).replace(/\s+\S*$/, "") + "...";
  });

  eleventyConfig.addFilter("isoDate", dateObj => {
    if (!dateObj) return "";
    const d = dateObj instanceof Date ? dateObj : new Date(dateObj);
    return d.toISOString();
  });

  eleventyConfig.addFilter("postDate", dateObj => {
    if (!dateObj) return "";
    const d = dateObj instanceof Date ? dateObj : new Date(dateObj);
    return d.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  });

  eleventyConfig.addFilter("postDateShort", dateObj => {
    if (!dateObj) return "";
    const d = dateObj instanceof Date ? dateObj : new Date(dateObj);
    return d.toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  });

  eleventyConfig.addFilter("authorData", (authorKey, authors) => {
    if (!authors || !authorKey) return {};
    return authors[authorKey] || {};
  });

  // --- Conference filters (existing) ---
  eleventyConfig.addFilter("futureConferences", conferences => {
    const now = new Date();
    now.setHours(0, 0, 0, 0);
    return conferences
      .filter(c => new Date(c.date_end || c.date_start) >= now)
      .sort((a, b) => new Date(a.date_start) - new Date(b.date_start));
  });

  eleventyConfig.addFilter("dateFormat", dateStr => {
    const date = new Date(dateStr + "T00:00:00");
    return date.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  });

  eleventyConfig.addFilter("dateFormatRange", (startStr, endStr) => {
    const start = new Date(startStr + "T00:00:00");
    const end = new Date(endStr + "T00:00:00");
    const startMonth = start.toLocaleDateString("en-US", { month: "short" });
    const endMonth = end.toLocaleDateString("en-US", { month: "short" });
    const year = start.getFullYear();

    if (startStr === endStr) {
      return `${startMonth} ${start.getDate()}, ${year}`;
    }
    if (startMonth === endMonth) {
      return `${startMonth} ${start.getDate()}–${end.getDate()}, ${year}`;
    }
    return `${startMonth} ${start.getDate()} – ${endMonth} ${end.getDate()}, ${year}`;
  });

  eleventyConfig.addFilter("confMonth", dateStr => {
    const date = new Date(dateStr + "T00:00:00");
    return date.toLocaleDateString("en-US", { month: "short" });
  });

  eleventyConfig.addFilter("confDay", dateStr => {
    const date = new Date(dateStr + "T00:00:00");
    return date.getDate();
  });

  eleventyConfig.addFilter("confYear", dateStr => {
    return dateStr.substring(0, 4);
  });

  eleventyConfig.addFilter("confDateDisplay", conf => {
    if (conf.tbd) {
      return "TBD " + conf.date_start.substring(0, 4);
    }
    const start = new Date(conf.date_start + "T00:00:00");
    const end = new Date(conf.date_end + "T00:00:00");
    const startMonth = start.toLocaleDateString("en-US", { month: "short" });
    const endMonth = end.toLocaleDateString("en-US", { month: "short" });
    const year = start.getFullYear();
    if (conf.date_start === conf.date_end) {
      return `${startMonth} ${start.getDate()}, ${year}`;
    }
    if (startMonth === endMonth) {
      return `${startMonth} ${start.getDate()}–${end.getDate()}, ${year}`;
    }
    return `${startMonth} ${start.getDate()} – ${endMonth} ${end.getDate()}, ${year}`;
  });

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
