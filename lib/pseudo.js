"use strict";

const defaultConfig = {
        include : [ "all" ],
        exclude : []
    },

    getClassNameFns = require("./getClassNameFns"),
    addClassNameToNode = require("./addClassNameToNode"),

    defaults = require("lodash/defaults"),
    each     = require("lodash/each");


module.exports = function(config) {
    let classNameFns = {};

    config = defaults(config, defaultConfig);

    classNameFns = getClassNameFns(config);

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

        // add pseudo class names to temp attr
        tree.walk((node) => {
            each(classNameFns, (fn, cn) => {
                node = fn(node);
            });

            return node;
        });

        // add the class names to the class attr (sorted)
        tree.walk((node) => addClassNameToNode(node));

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
