const { watch, series, parallel } = require("gulp");

const path = require("./config/path.js");

const browserSync = require("browser-sync").create();

const clear = require("./tusk/clear.js");

const pug = require("./tusk/pug.js");


const server = () => {
   browserSync.init({
      server: {
         baseDir: path.root
      }
   });
};


const watcher = () => {
   watch(path.pug.watch, pug).on("all", browserSync.reload);
};

module.exports.pug = pug;
module.exports.watch = watcher;

module.exports.dev = series(
   clear,
   pug,
   parallel(watcher, server)
);
