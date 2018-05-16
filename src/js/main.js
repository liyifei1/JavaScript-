require.config({
    baseUrl: "js/app",
    paths: {
        "jquery": "../libs/jquery01",
        "index": "index"
    }
});
require(["index"], function(index) {
    index();
})