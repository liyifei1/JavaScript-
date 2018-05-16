var gulp = require("gulp");
var server = require("gulp-webserver");
gulp.task("server", function() {
    gulp.src("src")
        .pipe(server({
            port: 8080,
            open: true,
            livereload: true,
            middleware: function(req, res, next) {
                if (req.url === "/favicon.ico") {
                    return;
                }
                if (req.url == "/user") {
                    res.end("123");
                }
                next();
            }
        }))
})