const { src, dest, series, parallel, watch } = require('gulp');
const sass = require('gulp-sass')(require('sass'));


function buildStyles() {
    return src('./src/**/*.scss')
        .pipe(sass())
        .pipe(dest('./dest/'))
}

function watchTask() {
    watch(['./src/**/*.scss'], { interval: 500 }, parallel(buildStyles))
}

exports.default = series(parallel(buildStyles, watchTask));