"use strict";

const pseudoRegexp = require("./pseudoRegexp");

const groups = require("./groups");

const flatten = require("lodash/flatten");


module.exports = function(classNames, exclude) {
    exclude = typeof exclude === "string" ? [ exclude ] : exclude;

    flatten(exclude).forEach((exc) => {
        if (pseudoRegexp.test(exc)) {
            delete classNames[exc];

            return;
        }

        groups[exc].forEach((groupItem) => {
            delete classNames[groupItem];
        });
    });

    return classNames;
};
