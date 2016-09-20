"use strict";

const pseudoRegexp = require("./pseudoRegexp"),

    groups = require("./groups"),

    classNamer = require("./classNamer"),

    flatten = require("lodash/flatten");


function key(o, i) {
    i = i || 0;

    return Object.keys(o)[i];
}

function value(o, i) {
    i = i || 0;

    return o[key(o, i)];
}


module.exports = function(classNames, include) {
    include = typeof include === "string" ? [ include ] : include;

    flatten(include).forEach((inc) => {
        if(typeof inc === "string") {
            inc = {
                classOrGroup : inc,
                classNamer   : classNamer
            };
        } else {
            inc = {
                classOrGroup : key(inc),
                classNamer   : typeof value(inc) === "function" ? value(inc) : classNamer.bind(value(inc))
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
