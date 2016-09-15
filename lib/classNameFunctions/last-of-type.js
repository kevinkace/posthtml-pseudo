"use strict";

const className = ":last-of-type",

    addClassNameToNode = require("../addClassNameToNode"),

    each = require("lodash/each");


module.exports = function(classNamer, node) {
    let lastChildren = {};

    if(!node.tag || !node.content || !node.content.length) {
        return node;
    }

    node.content.forEach((child) => {
        if(!child.tag || child.tag === "body") {
            return;
        }

        lastChildren[child.tag] = child;
    });

    each(lastChildren, (child) => {
        addClassNameToNode(child, classNamer(className));
    });

    return node;
};
