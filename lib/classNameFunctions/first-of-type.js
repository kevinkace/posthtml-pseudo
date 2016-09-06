"use strict";

const addClassNameToNode = require("../addClassNameToNode");

module.exports = function(node) {
    let tags = [];

    if(!node.tag || !node.content || !node.content.length) {
        return node;
    }

    node.content.forEach((child) => {
        if(!child.tag || tags.indexOf(child.tag) >= 0 || child.tag === "body") {
            return;
        }

        tags.push(child.tag);
        addClassNameToNode(child, ":first-of-type");
    });

    return node;
};
