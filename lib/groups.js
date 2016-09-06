"use strict";

module.exports = {
    all : [
        ":disabled",
        ":empty",
        ":enabled",
        ":first-child",
        ":first-of-type",
        ":last-child",
        ":last-of-type",
        ":only-of-type",
        ":only-child",
        ":optional",
        ":read-only",
        ":read-write",
        ":required",
        ":root"
    ],
    firstLast : [
        ":first-child",
        ":first-child-of-type",
        ":last-child",
        ":last-child-of-type"
    ],
    firstLastNoType : [
        ":first-child",
        ":last-child"
    ],
    input : [
        ":disabled",
        ":enabled",
        ":optional",
        ":required"
    ],
    onlyChild : [
        ":only-child",
        ":only-child-of-type"
    ],
    readWrite : [
        ":read-only",
        ":read-write"
    ]
};
