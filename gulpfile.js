const gulp = require('gulp');
const browserSync = require("browser-sync").create();
const minifyCss = require("gulp-minify-css");

gulp.task('hello', function(done){
    console.log('Привет');
    done();
});

// Static server
gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });
    gulp.watch("./*.html").on("change", browserSync.reload);
});

gulp.task("mincss", function () {
  var fb = gulp.src("main.css");
  fb.pipe(minifyCss());
  fb.pipe(gulp.dest("main"));
  return fb;
});