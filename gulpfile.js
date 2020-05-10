  var gulp      = require('gulp'), 
  less        = require('gulp-less'), 
  browserSync = require('browser-sync'); 
 
gulp.task('less', function() { 
  return gulp.src('source/less/style.less') 
    .pipe(less()) 
    .pipe(gulp.dest('source/css')) 
    .pipe(browserSync.reload({stream: true})) 
});
 
gulp.task('browser-sync', function() { 
  browserSync({ 
    server: { 
      baseDir: 'source' 
    },
    notify: false 
  });
});
 
gulp.task('watch', function() {
  gulp.watch('source/less/**/*.less', gulp.parallel('less')); 
});
gulp.task('default', gulp.parallel('less', 'browser-sync', 'watch'));
  