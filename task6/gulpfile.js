const gulp = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const webpack = require('webpack-stream');

gulp.task("html", () => {
  return gulp
    .src("./src/html/*.html")
    .pipe(gulp.dest("./dist/html"));
});

gulp.task("sass", () => {
  return gulp
    .src("./src/scss/*.scss")
    .pipe(sass())
    .pipe(gulp.dest("./dist/css"));
});

gulp.task("images", () => {
  return gulp.src("./src/image/*").pipe(gulp.dest("./dist/img"));
});

const serverOptions = {
  livereload: true,
  open: true,
};

gulp.task('js', function() {
    return gulp.src('./src/js/*.js')
        .pipe(webpack(require('./webpack.config')))
        .pipe(gulp.dest('./dist/js'))
})

gulp.task("watch", function () {
  gulp.watch("./src/scss/**/*.scss", gulp.parallel("sass"));
  gulp.watch("./src/**/*.html", gulp.parallel("html"));
  gulp.watch("./src/img/**/*", gulp.parallel("images"));
  gulp.watch("./src/js/**/*.js", gulp.parallel("js"));
});

gulp.task(
  "default",
  gulp.series(
    gulp.parallel("html", "sass", "images", 'js'),
    gulp.parallel("watch")
  )
);