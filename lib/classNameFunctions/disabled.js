"use strict";

const addClassNameToNode = require("../addClassNameToNode"),

    className = ":disabled";

module.exports = function(classNamer, node) {
    if(node.attrs && typeof node.attrs.disabled === "string") {
        addClassNameToNode(node, classNamer(className));
    }

    return node;
};
