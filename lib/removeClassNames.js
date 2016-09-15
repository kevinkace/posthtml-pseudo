"use strict";

const pseudoRegexp = require("./pseudoRegexp"),

    groups = require("./groups"),

    flatten = require("lodash/flatten"),
    pull    = require("lodash/pull");


module.exports = function(classNames, exclude) {
    exclude = typeof exclude === "string" ? [ exclude ] : exclude;

    flatten(exclude).forEach((exc) => {
        if(pseudoRegexp.test(exc)) {
            return pull(classNames, exc);
        }

        groups[exc].forEach((groupItem) => {
            pull(classNames, groupItem);
        });
    });

    return classNames;
};
