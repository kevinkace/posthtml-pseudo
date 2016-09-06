"use strict";

const fs = require("fs");

require.extensions[".html"] = (module, filename) => {
    module.exports = fs.readFileSync(filename, "utf8");
};

module.exports = {
    basic : {
        input    : require("./fixtures/basic.html"),
        expected : require("./fixtures/basic.expected.html")
    },
    classNames : {
        ":disabled" : {
            input    : require("./fixtures/classNames/disabled.html"),
            expected : require("./fixtures/classNames/disabled.expected.html")
        },
        ":empty" : {
            input    : require("./fixtures/classNames/empty.html"),
            expected : require("./fixtures/classNames/empty.expected.html")
        },
        ":enabled" : {
            input    : require("./fixtures/classNames/enabled.html"),
            expected : require("./fixtures/classNames/enabled.expected.html")
        },
        ":first-child" : {
            input    : require("./fixtures/classNames/first-child.html"),
            expected : require("./fixtures/classNames/first-child.expected.html")
        },
        ":first-of-type" : {
            input    : require("./fixtures/classNames/first-of-type.html"),
            expected : require("./fixtures/classNames/first-of-type.expected.html")
        },
        ":last-child" : {
            input    : require("./fixtures/classNames/last-child.html"),
            expected : require("./fixtures/classNames/last-child.expected.html")
        },
        ":last-of-type" : {
            input    : require("./fixtures/classNames/last-of-type.html"),
            expected : require("./fixtures/classNames/last-of-type.expected.html")
        },
        ":only-child" : {
            input    : require("./fixtures/classNames/only-child.html"),
            expected : require("./fixtures/classNames/only-child.expected.html")
        },
        ":only-of-type" : {
            input    : require("./fixtures/classNames/only-of-type.html"),
            expected : require("./fixtures/classNames/only-of-type.expected.html")
        },
        ":optional" : {
            input    : require("./fixtures/classNames/optional.html"),
            expected : require("./fixtures/classNames/optional.expected.html")
        }
        // ,
        // ":read-only" : {
        //     input    : require("./fixtures/classNames/read-only.html"),
        //     expected : require("./fixtures/classNames/read-only.expected.html")
        // },
        // ":read-write" : {
        //     input    : require("./fixtures/classNames/read-write.html"),
        //     expected : require("./fixtures/classNames/read-write.expected.html")
        // },
        // ":required" : {
        //     input    : require("./fixtures/classNames/required.html"),
        //     expected : require("./fixtures/classNames/required.expected.html")
        // },
        // ":root" : {
        //     input    : require("./fixtures/classNames/root.html"),
        //     expected : require("./fixtures/classNames/root.expected.html")
        // }
    }
};
