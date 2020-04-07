requirejs.config({
    baseUrl: 'js'
})

require(['views/main'],function (main) {
    webix.ready(function () {
        webix.ui();

    });
});