"use strict";

const addClassNameToNode = require("../addClassNameToNode");

module.exports = function(node) {
    if(node.tag !== "html") {
        return node;
    }

    addClassNameToNode(node, ":root");

    return node;
};
