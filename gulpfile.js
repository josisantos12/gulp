const gulp = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const imagemin = require('gulp-imagemin');

function compilaSass() {
  return gulp.src("./source/styles/*.scss")
  .pipe(sass())
  .pipe(gulp.dest('./build/styles'))
}

function compressImages() {
    return gulp.src('./source/img')
     .pipe(imagemin())
     .pipe(gulp.dest('./source/img'));
  }
  
  exports.default = compressImages;



exports.sass=compilaSass;
