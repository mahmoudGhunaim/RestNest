const slugify = require('slugify');

const createSlug = (text) => slugify(text, {
  lower: true,
  strict: true,
});

module.exports = { createSlug };