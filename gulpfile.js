const {series, watch, src, dest, parallel} = require('gulp');
const pump = require('pump');

// gulp plugins and utils
var livereload = require('gulp-livereload');
var zip = require('gulp-zip');
var uglify = require('gulp-uglify');
var sourcemaps = require("gulp-sourcemaps");
var sass = require("gulp-sass")(require("sass"));

function serve(done) {
    livereload.listen({ host: "127.0.0.1" });
    done();
}

const handleError = (done) => {
    return function (err) {
        if (err) {
            console.log(err);
        }
        return done(err);
    };
};

function hbs(done) {
    pump([
        src(['*.hbs', 'partials/**/*.hbs', '!node_modules/**/*.hbs']),
        livereload()
    ], handleError(done));
}

function sassDev(done) {
    pump(
        [
            src("assets/sass/**/*.scss"),
            sourcemaps.init(),
            sass().on("error", sass.logError),
            sourcemaps.write(),
            dest("assets/built/"),
            livereload(),
        ],
        handleError(done)
    );
}

function sassProd(done) {
    pump(
        [
            src("assets/sass/**/*.scss"),
            sass().on("error", sass.logError),
            dest("assets/built/"),
        ],
        handleError(done)
    );
}

function fonts(done) {
    pump(
        [
            src("assets/fonts/**/*.woff"),
            src("assets/fonts/**/*.woff2"),
            dest("assets/built/fonts/"),
        ],
        handleError(done)
    );
}

function js(done) {
    pump([
        src('assets/js/*.js', {sourcemaps: true}),
        uglify(),
        dest('assets/built/', {sourcemaps: '.'}),
        livereload()
    ], handleError(done));
}

function zipper(done) {
    var targetDir = 'dist/';
    var themeName = require('./package.json').name;
    var filename = themeName + '.zip';

    pump([
        src([
            '**',
            '!node_modules', '!node_modules/**',
            '!dist', '!dist/**'
        ]),
        zip(filename),
        dest(targetDir)
    ], handleError(done));
}

const fontWatcher = () => watch("assets/fonts/**", fonts);
const sassWatcher = () => watch("assets/sass/**", sassDev);
const hbsWatcher = () => watch(['*.hbs', 'partials/**/*.hbs', '!node_modules/**/*.hbs'], hbs);
const watcher = parallel(fontWatcher, sassWatcher, hbsWatcher); 
const build = series(fonts, sassProd, js);
const dev = series(build, serve, watcher);

exports.build = build;
exports.zip = series(build, zipper);
exports.default = dev;
