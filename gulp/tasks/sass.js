// Generated by CoffeeScript 1.9.3
(function() {
  var autoprefixer, gulp, handleErrors, rename, sass, sourcemaps;

  gulp = require('gulp');

  sass = require('gulp-sass');

  rename = require('gulp-rename');

  autoprefixer = require('gulp-autoprefixer');

  sourcemaps = require('gulp-sourcemaps');

  handleErrors = require('../util/handleErrors');

  gulp.task('sass', function() {
    return gulp.src('./app/css/main.sass').pipe(sass({
      style: 'expanded',
      sourceComments: 'map',
      errLogToConsole: true,
      includePaths: './bower_components'
    })).pipe(sourcemaps.write()).pipe(gulp.dest('./build/css'));
  });

}).call(this);

//# sourceMappingURL=sass.js.map
