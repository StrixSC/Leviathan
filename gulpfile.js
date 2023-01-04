const gulp = require('gulp');
const rename = require('gulp-rename');
const postcss = require('gulp-postcss');
const cleanCSS = require('gulp-clean-css');

gulp.task('css', () => gulp
  .src('stylesheets/**/*.css')
  .pipe(
    postcss([
      require('postcss-import'),
      require('tailwindcss/nesting'),
      require('tailwindcss'),
      require('autoprefixer'),
    ]),
  )
  .pipe(cleanCSS())
  .pipe(rename({ suffix: '.min' }))
  .pipe(gulp.dest('source/css')));


gulp.task('build', gulp.parallel('css'));
gulp.task('default', gulp.parallel('build'));
  
  
gulp.task('watch', () => {
  gulp.watch(['layout/**', 'stylesheets/**'], gulp.parallel('build'));
});