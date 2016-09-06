"use strict";

const addClassNameToNode = require("../addClassNameToNode"),

    className = ":empty";

module.exports = function(node) {
    if(!node.content) {
        addClassNameToNode(node, className);
    }

    return node;
};
