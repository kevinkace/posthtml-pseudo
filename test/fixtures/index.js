"use strict";

const fs = require("fs");

require.extensions[".html"] = (module, filename) => {
    module.exports = fs.readFileSync(filename, "utf8");
};

module.exports = {
    basic : {
        input    : require("./basic.html"),
        expected : require("./basic.expected.html")
    },
    classNames : {
        ":disabled" : {
            input    : require("./classNames/disabled.html"),
            expected : require("./classNames/disabled.expected.html")
        },
        ":empty" : {
            input    : require("./classNames/empty.html"),
            expected : require("./classNames/empty.expected.html")
        },
        ":enabled" : {
            input    : require("./classNames/enabled.html"),
            expected : require("./classNames/enabled.expected.html")
        },
        ":first-child" : {
            input    : require("./classNames/first-child.html"),
            expected : require("./classNames/first-child.expected.html")
        },
        ":first-of-type" : {
            input    : require("./classNames/first-of-type.html"),
            expected : require("./classNames/first-of-type.expected.html")
        },
        ":last-child" : {
            input    : require("./classNames/last-child.html"),
            expected : require("./classNames/last-child.expected.html")
        },
        ":last-of-type" : {
            input    : require("./classNames/last-of-type.html"),
            expected : require("./classNames/last-of-type.expected.html")
        },
        ":only-child" : {
            input    : require("./classNames/only-child.html"),
            expected : require("./classNames/only-child.expected.html")
        },
        ":only-of-type" : {
            input    : require("./classNames/only-of-type.html"),
            expected : require("./classNames/only-of-type.expected.html")
        },
        ":optional" : {
            input    : require("./classNames/optional.html"),
            expected : require("./classNames/optional.expected.html")
        },
        ":read-only" : {
            input    : require("./classNames/read-only.html"),
            expected : require("./classNames/read-only.expected.html")
        },
        ":read-write" : {
            input    : require("./classNames/read-write.html"),
            expected : require("./classNames/read-write.expected.html")
        },
        ":required" : {
            input    : require("./classNames/required.html"),
            expected : require("./classNames/required.expected.html")
        },
        ":root" : {
            input    : require("./classNames/root.html"),
            expected : require("./classNames/root.expected.html")
        }
    },
    groups : {
        all : {
            input    : require("./groups/all.html"),
            expected : require("./groups/all.expected.html")
        },
        firstLastOnly : {
            input    : require("./groups/firstLastOnly.html"),
            expected : require("./groups/firstLastOnly.expected.html")
        },
        firstLast : {
            input    : require("./groups/firstLast.html"),
            expected : require("./groups/firstLast.expected.html")
        }
    }
};
