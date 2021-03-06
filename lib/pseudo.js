"use strict";

const defaultConfig = {
        include : {
            classNames : [ "all" ]
        },
        exclude : {
            classNames : []
        }
    };

const getClassNameFns = require("./getClassNameFns");
const addClassNameToNode = require("./addClassNameToNode");

const defaults = require("lodash/defaults");
const each     = require("lodash/each");


module.exports = function(config) {
    let classNameFns = {};

    config = defaults(config, defaultConfig);

    classNameFns = getClassNameFns(config);

    return function postthmlPseudo(tree) {
        let head,
            position;

        // CSS rules don't apply to <head> so remove it if it exists
        tree.match({ tag : "html" }, (html) => {
            if (!html.content) {
                return html;
            }

            html.content.some((node, idx) => {
                if (node.tag === "head") {
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
            each(classNameFns, (fn) => {
                node = fn(node);
            });

            return node;
        });

        // add the class names to the class attr (sorted)
        tree.walk((node) => addClassNameToNode(node, config));

        // add <head> back
        if (head) {
            tree.match({ tag : "html" }, (html) => {
                html.content.splice(position, 0, head);

                return html;
            });
        }

        return tree;
    };
};
