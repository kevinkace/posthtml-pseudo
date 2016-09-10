"use strict";

module.exports = {
    all : [
        ":default",
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
        ":first-of-type",
        ":last-child",
        ":last-of-type"
    ],
    firstLastOnly : [
        ":first-child",
        ":last-child"
    ],
    form : [
        ":default",
        ":disabled",
        ":enabled",
        ":optional",
        ":required",
        ":read-only",
        ":read-write"
    ],
    only : [
        ":only-child",
        ":only-of-type"
    ],
    readWrite : [
        ":read-only",
        ":read-write"
    ]
};
