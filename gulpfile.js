var gulp = require('gulp');
var concat = require('gulp-concat');
gulp.task('default', function () {
return gulp.src('src/**/*.+(scss|js)')
    .pipe(concat('file'))
    .pipe(gulp.dest('dist'));
});