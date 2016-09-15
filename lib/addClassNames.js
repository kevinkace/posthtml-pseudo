"use strict";

const pseudoRegexp = require("./pseudoRegexp"),

    groups = require("./groups"),

    classNamer = require("./classNamer"),

    flatten = require("lodash/flatten");


module.exports = function(classNames, include) {
    include = typeof include === "string" ? [ include ] : include;

    flatten(include).forEach((inc) => {
        if(typeof inc === "string") {
            inc = {
                classOrGroup : inc,
                classNamer   : classNamer
            };
        }

        if(pseudoRegexp.test(inc.classOrGroup)) {
            classNames[inc.classOrGroup] = inc.classNamer;

            return;
        }

        groups[inc.classOrGroup].forEach((className) => {
            classNames[className] = inc.classNamer;
        });
    });

    return classNames;
};
