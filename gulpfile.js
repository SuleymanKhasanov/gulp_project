const { watch, series, parallel } = require("gulp");

const path = require("./config/path.js");

const app = require("./config/app.js");

const browserSync = require("browser-sync").create();

const clear = require("./tusk/clear.js");

const pug = require("./tusk/pug.js");

const scss = require("./tusk/scss.js");

const js = require("./tusk/js.js");

const img = require("./tusk/img.js");

const font = require("./tusk/font.js");



const server = () => {
   browserSync.init({
      server: {
         baseDir: path.root
      }
   });
};


const watcher = () => {
   watch(path.pug.watch, pug).on("all", browserSync.reload);
   watch(path.scss.watch, scss).on("all", browserSync.reload);
   watch(path.js.watch, js).on("all", browserSync.reload);
   watch(path.img.watch, img).on("all", browserSync.reload);
   watch(path.font.watch, font).on("all", browserSync.reload);
};

const build = series(
   clear,
   parallel(pug, scss, js, img, font)
);

const dev = series(
   build,
   parallel(watcher, server)
);

module.exports.pug = pug;
module.exports.scss = scss;
module.exports.js = js;
module.exports.img = img;
module.exports.font = font;
module.exports.watch = watcher;

module.exports.default = app.isProd
   ? build
   : dev;
