"use strict";

const flatten = require("lodash/flatten"),

    classNameFunctions = require("./classNameFunctions"),

    addClassNames    = require("./addClassNames"),
    removeClassNames = require("./removeClassNames");

function shallowArray(item) {
    if(!Array.isArray(item)) {
        item = [ item ];
    }

    return flatten(item);
}

module.exports = function(config) {
    let classNames     = [],
        classFunctions = {};

    config.include = shallowArray(config.include);
    config.exclude = shallowArray(config.exclude);

    classNames = addClassNames(classNames, config.include);
    classNames = removeClassNames(classNames, config.exclude);

    classNames = classNames.sort();

    classNames.forEach((className) => {
        classFunctions[className] = classNameFunctions[className].bind(null, (className) => className);
    });

    return classFunctions;
};
