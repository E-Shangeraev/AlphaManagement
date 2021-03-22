const gulp = require('gulp');
const sass = require('gulp-sass');
const browserSync = require('browser-sync');
const uglify = require('gulp-uglify');
const concat = require('gulp-concat');
const rename = require('gulp-rename');

gulp.task(function scss() {
  return gulp
    .src('app/scss/style.scss')
    .pipe(sass({ outputStyle: 'compressed' }))
    .pipe(rename({ suffix: '.min' }))
    .pipe(gulp.dest('app/css'))
    .pipe(browserSync.reload({ stream: true }));
});

gulp.task('css', function () {
  return gulp
    .src([
      'node_modules/normalize.css/normalize.css',
      'node_modules/slick-carousel/slick/slick.css',
      'node_modules/magnific-popup/dist/magnific-popup.css',
    ])
    .pipe(concat(libs.scss));
});

gulp.task('html', function () {
  return gulp.src('app/*.html').pipe(browserSync.reload({ stream: true }));
});

gulp.task('script', function () {
  return gulp
    .src('app/js/*.js')
    .pipe(concat('index.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest('app/js/dist'))
    .pipe(browserSync.reload({ stream: true }));
});

gulp.task('js', function () {
  return gulp
    .src([
      'node_modules/jquery/dist/jquery.min.js',
      'app/slick/slick.min.js',
      'node_modules/jquery.maskedinput/src/jquery.maskedinput.js',
      'node_modules/magnific-popup/dist/jquery.magnific-popup.js',
    ])
    .pipe(concat('libs.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest('app/js/libs'))
    .pipe(browserSync.reload({ stream: true }));
});

gulp.task(function watch() {
  gulp.watch('app/scss/**/*.scss', gulp.parallel('scss'));
  gulp.watch('app/*.html', gulp.parallel('html'));
  gulp.watch('app/js/*.js', gulp.parallel('script'));
});

gulp.task('browser-sync', function () {
  browserSync.init({
    server: {
      baseDir: './app',
      proxy: 'talant',
    },
  });
});

gulp.task('default', gulp.parallel('scss', 'script', 'js', 'browser-sync', 'watch'));
