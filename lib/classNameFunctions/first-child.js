"use strict";

const addClassNameToNode = require("../addClassNameToNode"),

    className = ":first-child";

module.exports = function(classNamer, node) {
    if(!node.tag || !node.content || !node.content.length) {
        return node;
    }

    node.content.some((child) => {
        if(!child.tag || child.tag === "body") {
            return false;
        }

        addClassNameToNode(child, classNamer(className));

        return true;
    });

    return node;
};
