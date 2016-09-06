"use strict";

const defaults = require("lodash/defaults"),
    flatten    = require("lodash/flatten"),

    classNameFunctions = require("./classNameFunctions"),

    addClassNames    = require("./addClassNames"),
    removeClassNames = require("./removeClassNames"),

    defaultConfig = {
        include : [ "all" ],
        exclude : []
    };

function shallowArray(item) {
    if(!Array.isArray(item)) {
        item = [ item ];
    }

    return flatten(item);
}

module.exports = function(config) {
    let classNames = [];

    config = defaults(config, defaultConfig);

    config.include = shallowArray(config.include);
    config.exclude = shallowArray(config.exclude);

    classNames = addClassNames(classNames, config.include);
    classNames = removeClassNames(classNames, config.exclude);

    return function postthmlPseudo(tree) {
        tree.walk((node) => {
            classNames.forEach((className) => {
                node = classNameFunctions[className](node);
            });

            return node;
        });

        return tree;
    };
};
