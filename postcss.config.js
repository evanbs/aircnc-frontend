const purgecss = require('@fullhuman/postcss-purgecss');

module.exports = {
  plugins: [
    require('autoprefixer'),
    require('precss'),
    require('lost'),
    require('stylelint'),
    process.env.NODE_ENV === 'production' &&
      purgecss({
        content: ['./src/**/*.js'],
        css: ['./src/**/*.css']
      })
  ]
};
