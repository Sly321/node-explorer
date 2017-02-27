var gulp = require('gulp');
var util = require('gulp-util');
var mocha = require('gulp-mocha');
var runSequence = require('run-sequence');

function handleError(err) {
    console.log(err.toString());
    this.emit('end');
}

gulp.task('test', function () {
    return gulp.src('./test/*.js', { read: false })
    // gulp-mocha needs filepaths so you can't have any plugins before it
        .pipe(mocha({ reporter: 'spec' }))
        .on('error', handleError);
});

gulp.task('watch', function () {
    gulp.watch(['./test/*.js', './src/app/*.js'], function () {
        runSequence('test');
    });
});

gulp.task('default', function () {
    runSequence('test', 'watch');
});
