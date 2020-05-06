const {src, dest, watch} = require('gulp');
const browserSync = require('browser-sync').create();
const minifyCss = require('gulp-minify-css');
const sass = require('gulp-sass');

// Static server
function bs() {
    serveSass();
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });
    watch("./*.html").on("change", browserSync.reload);
    watch("./sass/**/*.sass", serveSass);
    watch("./js/*.js").on("change", browserSync.reload);
};

function serveSass(){
    return src("./sass/*.sass")
    .pipe(sass())
    .pipe(dest("./css"))
    .pipe(browserSync.stream());
};

exports.serve = bs;

// minCss
function createMinCss() {
  var fb = src("main.css");
  fb.pipe(minifyCss());
  fb.pipe(dest("main"));
  return fb;
};