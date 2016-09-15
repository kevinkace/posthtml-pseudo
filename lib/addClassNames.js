"use strict";

const pseudoRegexp = require("./pseudoRegexp"),

    groups = require("./groups"),

    flatten = require("lodash/flatten"),
    uniq    = require("lodash/uniq");


module.exports = function addClassNames(classNames, include) {
    include = typeof include === "string" ? [ include ] : include;

    flatten(include).forEach((inc) => {
        if(pseudoRegexp.test(inc)) {
            return classNames.push(inc);
        }

        groups[inc].forEach((groupItem) => {
            classNames.push(groupItem);
        });
    });

    return uniq(classNames);
};
