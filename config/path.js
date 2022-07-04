const pathSrc = "./src";

const pathDest = "./public";

module.exports = {
   root: pathDest,

   html: {
      src: pathSrc + "/html/*.html",
      watch: pathSrc + "/html/**/*.html",
      dest: pathDest
   },

   pug: {
      src: pathSrc + "/pug/*.pug",
      watch: pathSrc + "/pug/**/*.pug",
      dest: pathDest
   },

   css: {
      src: pathSrc + "/css/*.css",
      watch: pathSrc + "/css/**/*.css",
      dest: pathDest + "/css"
   },

   scss: {
      src: pathSrc + "/scss/*.{sass,scss}",
      watch: pathSrc + "/scss/**/*.{sass,scss}",
      dest: pathDest + "/css"
   },

   js: {
      src: pathSrc + "/js/*.js",
      watch: pathSrc + "/js/**/*.js",
      dest: pathDest + "/js"
   },

   img: {
      src: pathSrc + "/img/**/*",
      watch: pathSrc + "/img/**/*",
      dest: pathDest + "/img"
   },

   font: {
      src: pathSrc + "/font/**/*",
      watch: pathSrc + "/font/**/*",
      dest: pathDest + "/font"
   }
}