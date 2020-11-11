const fs = require("fs");
const path = require("path");

const articlePath = path.resolve(__dirname, "src", "articles");

const filelist = fs.readdirSync(articlePath);

const articleList = filelist
  .map(file => {
    const stat = fs.statSync(path.resolve(articlePath, file));
    return {
      title: file.replace(/\.md/, ""),
      createTime: stat.birthtimeMs,
      updateTime: stat.mtimeMs
    };
  })
  .sort((a, b) => b.updateTime - a.updateTime);

module.exports = articleList;
