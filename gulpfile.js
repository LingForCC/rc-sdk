import gulp from 'gulp';
import mocha from 'gulp-mocha';
import istanbul from 'gulp-istanbul';
import babelIstanbul from 'babel-istanbul';

gulp.task('pre-test', () => {
  return gulp.src('src/*')
  .pipe(istanbul({
    includeUntested: true,
    instrumenter: babelIstanbul.Instrumenter
  }))
  .pipe(istanbul.hookRequire());
});

gulp.task('test', ['pre-test'], () => {
  return gulp.src('test/*')
  .pipe(mocha())
  .pipe(istanbul.writeReports());
});

