const { src, dest } = require("gulp");



const plumber = require("gulp-plumber");

const notify = require("gulp-notify");

const gulpInclude = require("gulp-file-include");

const gulpHtmlMin = require("gulp-htmlmin");



const html = () => {
   return src("./src/html/*.html")
      .pipe(plumber({
         errorHandler: notify.onError(error => ({
            title: "HTML",
            message: error.message

         }))
      }))
      .pipe(gulpInclude())
      .pipe(gulpHtmlMin({
         collapseWhitespace: true
      }))
      .pipe(dest("./public"));
};


module.exports = html;