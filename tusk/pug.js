const { src, dest } = require("gulp");

const plumber = require("gulp-plumber");

const notify = require("gulp-notify");

const pugs = require("gulp-pug");

const webpHtml = require("gulp-webp-html");



const pug = () => {
   return src("./src/pug/**/*.pug")
      .pipe(plumber({
         errorHandler: notify.onError(error => ({
            title: "PUG",
            message: error.message

         }))
      }))
      .pipe(pugs())
      .pipe(webpHtml())
      .pipe(dest("./public"));
};

module.exports = pug;