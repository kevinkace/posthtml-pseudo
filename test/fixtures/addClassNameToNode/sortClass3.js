"use strict";

module.exports = {
    input : {
        tag   : "a",
        attrs : {
            href  : "#",
            class : "something :last-child"
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
            class : "something :first-child :last-child",
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
