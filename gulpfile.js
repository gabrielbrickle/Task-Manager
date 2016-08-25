var gulp = require('gulp');
var sass = require('gulp-sass');
var watch = require('gulp-watch');
var browserify = require('gulp-browserify');
var surge = require('gulp-surge');

gulp.task('default', ['html', 'css', 'js'])

gulp.task('css', function() {
    gulp.src('./sass/styles.scss')
        .pipe(sass())
        .pipe(gulp.dest('./public'))
});

gulp.task('html', function() {
    gulp.src('./templates/*.html').pipe(gulp.dest('./public/templates'));

    return gulp.src('./index.html')
        .pipe(gulp.dest('./public'));
});

gulp.task('js', function() {
    gulp.src('./js/*.js')
        .pipe(browserify())
        .pipe(gulp.dest('./public'))
});

gulp.task('watch', function() {
    gulp.watch('./js/*.js', ['js']);
    gulp.watch('./js/*/*.js', ['js']);
    gulp.watch('./sass/*.scss', ['css']);
    gulp.watch('./index.html', ['html']);
    gulp.watch('./templates/*.html', ['html']);
    gulp.watch('./templates/*/*.html', ['html']);
});

gulp.task('deploy', [], function () {
 return surge({
   project: './public',         // Path to your static build directory
   domain: 'taskmanager.surge.sh'  // Your domain or Surge subdomain
 })
});
