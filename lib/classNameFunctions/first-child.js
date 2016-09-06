"use strict";

const addClassNameToNode = require("../addClassNameToNode");

module.exports = function(node) {
    if(!node.tag || !node.content || !node.content.length) {
        return node;
    }

    node.content.some((child) => {
        if(!child.tag || child.tag === "body") {
            return false;
        }

        addClassNameToNode(child, ":first-child");

        return true;
    });

    return node;
};
