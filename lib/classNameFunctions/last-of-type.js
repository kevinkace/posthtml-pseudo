"use strict";

const each = require("lodash/each"),

    addClassNameToNode = require("../addClassNameToNode");

module.exports = function(node) {
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
        addClassNameToNode(child, ":last-of-type");
    });

    return node;
};
