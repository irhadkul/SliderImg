var gulp = require('gulp');
var sass = require('gulp-sass');
var sassGlob = require('gulp-sass-glob');
var minify = require('gulp-minify');
const jshint = require('gulp-jshint');
var handlebars = require('handlebars');
var gulpHandlebars = require('gulp-compile-handlebars')(handlebars); //default to require('handlebars') if not provided
var rename = require('gulp-rename');

//TODO: nunjucks
 gulp.task('default',function () {
    gulp.start('build_styles');
     gulp.start('build_js')
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
    .start('js_lint')
    .src('app/js/*.js')
        .pipe(minify({
            ext:{
                src:'-debug.js',
                min:'-min.js'
            }

        }))
        .pipe(gulp.dest('dist/js'))
});
gulp.task('js_lint', function() {
    return gulp.src('app/js/*.js')
        .pipe(jshint())
        .pipe(jshint.reporter('gulp-jshint-file-reporter', {
            filename: __dirname + '/debugJs/jshint-output.log'
        }));
});


gulp.task('watch_styles',function(){
    gulp.watch('app/sass/**/*.scss', ['build_styles'] )

});

gulp.task('watch_js',function(){
    gulp.watch('app/js/**/*.js', ['build_js'] )

});