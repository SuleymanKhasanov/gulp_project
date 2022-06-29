const { src, dest, watch, series, parallel } = require("gulp");

const browserSync = require("browser-sync").create();

const del = require("del");

const plumber = require("gulp-plumber");

const notify = require("gulp-notify");

const gulpInclude = require("gulp-file-include");

const gulpHtmlMin = require("gulp-htmlmin");

const pugs = require("gulp-pug");


// const html = () => {
//    return src("./src/html/*.html")
//       .pipe(plumber({
//          errorHandler: notify.onError(error => ({
//             title: "HTML",
//             message: error.message

//          }))
//       }))
//       .pipe(gulpInclude())
//       .pipe(gulpHtmlMin({
//          collapseWhitespace: true
//       }))
//       .pipe(dest("./public"))
//       .pipe(browserSync.stream());
// };

const pug = () => {
   return src("./src/pug/**/*.pug")
      .pipe(plumber({
         errorHandler: notify.onError(error => ({
            title: "PUG",
            message: error.message

         }))
      }))
      .pipe(pugs())
      .pipe(dest("./public"))
      .pipe(browserSync.stream());
};


const server = () => {
   browserSync.init({
      server: {
         baseDir: "./public/"
      }
   });
};

const clear = () => {
   return del("./public/");
}

const watcher = () => {
   watch("./src/pug/**/*.pug", pug);
};

module.exports.pug = pug;
module.exports.watch = watcher;

module.exports.dev = series(
   clear,
   pug,
   parallel(watcher, server)
);
