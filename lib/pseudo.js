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
    let classNames = [],
        cnf = {};

    config = defaults(config, defaultConfig);

    config.include = shallowArray(config.include);
    config.exclude = shallowArray(config.exclude);

    classNames = addClassNames(classNames, config.include);
    classNames = removeClassNames(classNames, config.exclude);

    classNames = classNames.sort();

    classNames.forEach((className) => {
        cnf[className] = classNameFunctions[className].bind(null, (className) => className);
    });

    return function postthmlPseudo(tree) {
        let head,
            position;

        // CSS rules don't apply to <head> so remove it if it exists
        tree.match({ tag : "html" }, (html) => {
            if(!html.content) {
                return html;
            }

            html.content.some((node, idx) => {
                if(node.tag === "head") {
                    position = idx;
                    head = html.content.splice(idx, 1);

                    return true;
                }

                return false;
            });

            return html;
        });

        // add pseudo class names
        tree.walk((node) => {
            classNames
                .forEach((className) => {
                    node = cnf[className](node);
                });

            return node;
        });

        // add <head> back
        if(head) {
            tree.match({ tag : "html" }, (html) => {
                html.content.splice(position, 0, head);

                return html;
            });
        }

        return tree;
    };
};
