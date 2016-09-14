"use strict";

const addClassNameToNode = require("../addClassNameToNode"),

    className = ":root";

module.exports = function(classNamer, node) {
    if(node.tag !== "html") {
        return node;
    }

    addClassNameToNode(node, classNamer(className));

    return node;
};
