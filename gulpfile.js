const { watch, series, parallel } = require("gulp");

const path = require("./config/path.js");

const browserSync = require("browser-sync").create();

const clear = require("./tusk/clear.js");

const pug = require("./tusk/pug.js");

const scss = require("./tusk/scss.js");

const js = require("./tusk/js.js");


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
};

module.exports.pug = pug;
module.exports.scss = scss;
module.exports.js = js;
module.exports.watch = watcher;

module.exports.dev = series(
   clear,
   parallel(pug, scss, js),
   parallel(watcher, server)
);
