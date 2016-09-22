"use strict";

const classNameFunctions = require("./classNameFunctions"),

    addClassNames    = require("./addClassNames"),
    removeClassNames = require("./removeClassNames"),

    each = require("lodash/each");


module.exports = function(config) {
    let classNames     = {},
        classFunctions = {};

    classNames = addClassNames(classNames, config.include.classNames);
    classNames = removeClassNames(classNames, config.exclude.classNames);

    each(classNames, (fn, className) => {
        classFunctions[className] = classNameFunctions[className].bind(null, fn);
    });

    return classFunctions;
};
