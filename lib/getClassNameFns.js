"use strict";

const classNameFunctions = require("./classNameFunctions"),

    addClassNames    = require("./addClassNames"),
    removeClassNames = require("./removeClassNames");


module.exports = function(config) {
    let classNames     = [],
        classFunctions = {};

    classNames = addClassNames(classNames, config.include);
    classNames = removeClassNames(classNames, config.exclude);

    classNames = classNames.sort();

    classNames.forEach((className) => {
        classFunctions[className] = classNameFunctions[className].bind(null, (className) => className);
    });

    return classFunctions;
};
