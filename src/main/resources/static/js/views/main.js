define(['views/cars'], function (cars) {
    return {

        type: "line",
        height: 400,
        rows: [
            {
                view: 'button',
                label: 'Cars',
                click: function () {
                    webix.ui(cars, $$("root"))
                }

            },
            {template: "Row 1"},
            {template: "Row 2"},
            {
                cols: [
                    {template: "col 1"},
                    {template: "col 2"}
                ]
            }
        ]
    }
});