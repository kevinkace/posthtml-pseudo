"use strict";

module.exports = {
    input : {
        tag: "a",
        attrs: {
            href: "#",
            class: "something another-thing :first-child"
        },
        content: [
            "\n    ",
                {
                tag: "span",
                attrs: {
                    class: "animals__cat",
                    style: "background: url(cat.png)"
                },
                content: ["Cat"]
            },
            "\n"
        ]
    },
    expected : {
        tag: "a",
        attrs: {
            class: "another-thing something :first-child :first-of-type",
            href: "#"
        },
        content: [
            "\n    ",
                {
                tag: "span",
                attrs: {
                    class: "animals__cat",
                    style: "background: url(cat.png)"
                },
                content: ["Cat"]
            },
            "\n"
        ]
    }
};
