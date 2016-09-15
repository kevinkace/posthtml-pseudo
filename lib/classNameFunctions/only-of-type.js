"use strict";

const className = ":only-of-type",

    addClassNameToNode = require("../addClassNameToNode"),

    each = require("lodash/each");


module.exports = function(classNamer, node) {
    let tags = {};

    if(!node.tag || !node.content || !node.content.length) {
        return node;
    }

    node.content.forEach((child) => {
        if(!child.tag || child.tag === "body") {
            return;
        }

        if(tags[child.tag] === undefined) {
            tags[child.tag] = child;

            return;
        }

        tags[child.tag] = false;
    });

    each(tags, (child) => {
        if(!child) {
            return;
        }

        addClassNameToNode(child, classNamer(className));
    });

    return node;
};
