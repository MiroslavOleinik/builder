/* eslint-disable arrow-body-style */
/* eslint-disable no-alert */
/* eslint linebreak-style: ["error", "windows"] */
const gulp = require('gulp');
const sass = require('gulp-sass');
const browserSync = require('browser-sync').create();
const fileinclude = require('gulp-file-include');
const autoprefixer = require('gulp-autoprefixer');
const uglify = require('gulp-uglify-es').default;
const cleancss = require('gulp-cleancss');
const clean = require('gulp-clean');

gulp.task('sass', () => {
  return gulp.src('app/sass/**/*.sass')
    .pipe(sass())
    .pipe(autoprefixer(['last 15 versions', '> 1%', 'ie 8', 'ie 7'], { cascade: true }))
    .pipe(gulp.dest('app/css'))
    .pipe(browserSync.stream());
});

gulp.task('html', () => {
  return gulp.src('app/html/*.html')
    .pipe(fileinclude())
    .pipe(gulp.dest('app'))
    .pipe(browserSync.reload({ stream: true }));
});

gulp.task('html:build', () => {
  gulp.series('html');
  return gulp.src('app/*.html')
    .pipe(gulp.dest('build'));
});

gulp.task('css:build', () => {
  gulp.series('sass');
  return gulp.src('app/css/**/*.css')
    .pipe(cleancss({ keepBreaks: false }))
    .pipe(gulp.dest('./build/css'));
});

gulp.task('js:build', () => {
  return gulp.src('app/js/**/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('build/js'));
});

gulp.task('clean', () => {
  return gulp.src('build')
    .pipe(clean());
});

gulp.task('fonts:build', () => {
  return gulp.src('fonts/**/*.*')
    .pipe(gulp.dest('build/fonts'));
});

gulp.task('watch', () => {
  browserSync.init({
    server: './app',
    notify: false,
  });
  gulp.watch('app/sass/**/*.sass', gulp.parallel('sass'));
  gulp.watch('app/html/**/*.html', gulp.parallel('html'));
  gulp.watch('app/js/*.js', browserSync.stream());
});

gulp.task('build', gulp.series('clean', gulp.parallel('html:build', 'css:build', 'js:build', 'fonts:build')));

gulp.task('default', gulp.series('sass', 'html', 'watch'));
