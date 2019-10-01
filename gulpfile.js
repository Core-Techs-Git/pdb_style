const gulp = require('gulp');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const stylelinter = require('gulp-stylelint');
const livereload = require('gulp-livereload');
const sourcemaps = require('gulp-sourcemaps');

gulp.task('build', () => {
  return gulp.src('scss/*.scss')
    .pipe(sourcemaps.init())
    .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
    .pipe(stylelinter({
      reporters: [
        {formatter: 'string', console: true}
      ],
      debug: true,
      failAfterError: false
    }))
    .pipe(autoprefixer('last 2 version'))
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest('public/dist'));
});

gulp.task('watch', () => {
  livereload.listen();
  gulp.watch('scss/*.scss', ['build']);
  gulp.watch(['public/dist/**/*.css'], (files) => {
    livereload.changed(files);
  });
});
