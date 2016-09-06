"use strict";

const addClassNameToNode = require("../addClassNameToNode"),

    className = ":disabled";

module.exports = function(node) {
    if(node.attrs && typeof node.attrs.disabled === "string") {
        addClassNameToNode(node, className);
    }

    return node;
};
