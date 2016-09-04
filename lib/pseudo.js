"use strict";

const defaults = require("lodash/defaults"),
    flatten    = require("lodash/flatten"),
    uniq       = require("lodash/uniq"),
    remove     = require("lodash/remove"),

    defaultConfig = {
        include : [ "all" ],
        exclude : []
    },
    groups : {
        all : [
            ":disabled",
            ":empty",
            ":enabled",
            ":first-child"
            ":first-of-type",
            ":last-child",
            ":last-of-type",
            ":only-of-type",
            ":only-child",
            ":optional",
            ":read-only",
            ":read-write",
            ":required",
            ":root"
        ],
        firstLast : [
            ":first-child",
            ":first-child-of-type",
            ":last-child",
            ":last-child-of-type"
        ],
        firstLastNoType : [
            ":first-child",
            ":last-child"
        ],
        input : [
            ":disabled",
            ":enabled",
            ":optional",
            ":required"
        ],
        onlyChild : [
            ":only-child",
            ":only-child-of-type"
        ],
        readWrite : [
            ":read-only",
            ":read-write"
        ]
    },

    pseudoRegexp = /^:\S+/;

function shallowArray(item) {
    if(!Array.isArray(item)) {
        item = [ item ];
    }

    return flatten(item);
}

function addClassNAmes(classNames, include) {
    include.forEach((inc) => {
        if(pseudoRegexp.test(inc)) {
            return classNames.push(inc);
        }

        inc.forEach((groupItem) => {
            classNames.push(groupItem);
        });
    });

    return uniq(classNames);
}

function removeClassNames(classNames, exclude) {
    exclude.forEach((exc) => {
        if(pseudoRegexp(exc)) {
            return remove(classNames, (n) => {
                return n === exc;
            });

            exc.forEach((groupItem) => {
                remove(classNames, groupItem);
            });
        }
    });

    return classNames;
}

module.exports = function(config) {
    const classNameFns = {
        ":disabled" : function(node) {
            return node;
        },
        ":empty" : function(node) {
            return node;
        },
        ":enabled" : function(node) {
            return node;
        },
        ":first-child" : function(node) {
            return node;
        },
        ":first-of-type" : function(node) {
            return node;
        },
        ":last-child" : function(node) {
            return node;
        },
        ":last-of-type" : function(node) {
            return node;
        },
        ":only-of-type" : function(node) {
            return node;
        },
        ":only-child" : function(node) {
            return node;
        },
        ":optional" : function(node) {
            return node;
        },
        ":read-only" : function(node) {
            return node;
        },
        ":read-write" : function(node) {
            return node;
        },
        ":required" : function(node) {
            return node;
        },
        ":root" : function(node) {
            return node;
        }
    };

    let classNames = [];

    config = defaults(config, defaultConfig);

    config.include = shallowArray(config.include);
    config.exclude = shallowArray(config.exclude);

    classNames = addClassNames(classNames, config.include);
    classNames = removeClassNames(classNames, config.exclude);

    return function postthmlPseudo(tree) {
        tree.walk((node) => {
            classNames.forEach((className) => {
                node = classNameFns[className](node);
            });

            return node;
        });

        return tree;
    }
};
