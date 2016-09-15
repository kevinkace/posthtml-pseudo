"use strict";

const pseudoRegexp = require("./pseudoRegexp"),

    groups = require("./groups"),

    uniq = require("lodash/uniq");


module.exports = function addClassNames(classNames, include) {
    include.forEach((inc) => {
        if(pseudoRegexp.test(inc)) {
            return classNames.push(inc);
        }

        groups[inc].forEach((groupItem) => {
            classNames.push(groupItem);
        });
    });

    return uniq(classNames);
};
