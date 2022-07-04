const isProd = process.argv.includes("--producton");

const isDev = !isProd;

module.exports = {
   isProd: isProd,
   isDev: isDev,

   htmlmin: {
      collapseWithspace: isProd
   },

   pug: {
      pretty: isDev,
      data: {}
   },

   webpack: {
      mode: isProd ? "production" : "development"
   },

   imagemin: {
      verbose: true
   },

   fonter: {
      formats: ["ttf", "woff", "eot", "svg"]
   }
}