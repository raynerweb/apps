var gulp = require( 'gulp' );
var chug = require('gulp-chug');

gulp.task('default', function(){
    // Find and run all gulpfiles under all subdirectories 
    gulp.src('./src/**/gulpfile.js').pipe(chug());
});
