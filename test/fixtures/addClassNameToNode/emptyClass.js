"use strict";

module.exports = {
    input : {
        tag   : "a",
        attrs : {
            href  : "#",
            class : ""
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
    },
    expected : {
        tag   : "a",
        attrs : {
            class : ":test",
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
