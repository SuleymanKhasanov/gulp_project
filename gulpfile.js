const { src, dest, watch, series, parallel } = require("gulp");

const browserSync = require("browser-sync").create();

const gulpInclude = require("gulp-file-include");

const gulpHtmlMin = require("gulp-htmlmin");


const html = () => {
   return src("./src/html/*.html")
      .pipe(gulpInclude())
      .pipe(gulpHtmlMin({
         collapseWhitespace: true
      }))
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

const watcher = () => {
   watch("./src/html/**/*.html", html);
};

module.exports.html = html;
module.exports.watch = watcher;

module.exports.dev = series(
   html,
   parallel(watcher, server)
);
