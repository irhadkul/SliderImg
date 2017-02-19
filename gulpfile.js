var gulp = require('gulp');
var sass = require('gulp-sass');
var sassGlob = require('gulp-sass-glob');
var minify = require('gulp-minify');

 gulp.task('default',function () {
    gulp.start('build_styles');
 });

gulp.task('build_styles', function () {
    return gulp
        .src('app/sass/main.scss')
        .pipe(sassGlob())
        .pipe(sass())
        .pipe(gulp.dest('dist/styles'));
});
gulp.task('build_js', function () {
    return gulp

    .src('app/js/*.js')
        .pipe(minify({
            ext:{
                src:'-debug.js',
                min:'-min.js'
            }

        }))
        .pipe(gulp.dest('dist/js'))
});
gulp.task('watch_styles',function(){
    gulp.watch('app/sass/**/*.scss', ['build_styles'] )

});

gulp.task('watch_js',function(){
    gulp.watch('app/js/**/*.js', ['build_js'] )

});