// vue.config.js
module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/TechBlog/' // ここをあなたのリポジトリ名に置き換えます
    : '/'
}
