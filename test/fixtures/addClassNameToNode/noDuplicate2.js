"use strict";

module.exports = {
    input : {
        tag   : "a",
        attrs : {
            href  : "#",
            class : "something :test something"
        },
        content : [
            "\n    ",
            {
                tag   : "span",
                attrs : {
                    class : "animals__cat",
                    style : "background: url(cat.png)"
                },
                content : ["Cat"]
            },
            "\n"
        ],
        pseudo : [ ":test" ]
    },
    expected : {
        tag   : "a",
        attrs : {
            class : "something :test something",
            href  : "#"
        },
        content : [
            "\n    ",
            {
                tag   : "span",
                attrs : {
                    class : "animals__cat",
                    style : "background: url(cat.png)"
                },
                content : ["Cat"]
            },
            "\n"
        ]
    }
};
