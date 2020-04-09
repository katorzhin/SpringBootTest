requirejs.config({
    baseUrl: 'js'
});

require(['views/main', 'views/cars'], function (main, cars) {
    webix.ready(function () {
        webix.ui({
            id: 'root',
            container: "app",
            rows: [
                main
            ]
        });

    })
});