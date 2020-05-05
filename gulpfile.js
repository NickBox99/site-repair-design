const gulp = require('gulp');
const browserSync = require("browser-sync").create();

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