"use strict";

const addClassNameToNode = require("../addClassNameToNode"),

    className = ":last-child";

module.exports = function(classNamer, node) {
    let lastChild;

    if(!node.tag || !node.content || !node.content.length) {
        return node;
    }

    node.content.forEach((child) => {
        if(!child.tag || child.tag === "body") {
            return;
        }

        lastChild = child;
    });

    if(lastChild) {
        addClassNameToNode(lastChild, classNamer(className));
    }

    return node;
};
