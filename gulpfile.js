var gulp = require("gulp"),
    browserify = require("browserify"),
    babelify = require("babelify"),
    source = require("vinyl-source-stream"),
    browserSync = require("browser-sync"),
    proxy = require("proxy-middleware"),
    url = require("url"),
    eslint = require('babel-eslint'),
    path = require("path"),
    pckage = require("./package.json"),
    del = require('del');


function handleError(err) {
  console.error(err.toString());
  this.emit('end');
}

gulp.task('lint', function() {
  gulp.src([pckage.paths.js, pckage.paths.jsx])
    .pipe(eslint())
    .pipe(eslint.format());
});

gulp.task('clean', function(cb) {
  del(['dist/**'], cb);
});

gulp.task('copy', function() {
    gulp.src('app/index.html')
      .pipe(gulp.dest('dist'));
});

gulp.task("js", function () {
  // note that we don't need to exclude the i18n modules from the main build
  // because they're not directly require'd

  var babelifyOpts = {
    presets: ['es2015', 'react']
  };

  return browserify(pckage.paths.app)
      .transform('babelify', babelifyOpts)
      .bundle()
      .on("error", handleError)
      .pipe(source(pckage.dest.app))
      .pipe(gulp.dest(pckage.dest.dist));
});

gulp.task("server", ["build"], function () {
    // Forward requests to /api to the API server
    var proxyOptions = url.parse("http://10.21.67.21:8080");
    proxyOptions.route = "/api";

    browserSync({
    	server: {
	       baseDir: "./dist",
        middleware: [proxy(proxyOptions)]
      }
    });
});

gulp.task("watch", ["server"], function () {
    return gulp.watch([pckage.paths.js, pckage.paths.jsx,
		       pckage.paths.html],
		      ["js", "copy", browserSync.reload]);
});

gulp.task("build", ["js", "copy"]);

gulp.task("default", ["watch"]);
