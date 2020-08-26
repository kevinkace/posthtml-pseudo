"use strict";

const className = ":disabled";

const addPseudoToNode = require("../addPseudoToNode");


module.exports = function(classNamer, node) {
    if (node.attrs && typeof node.attrs.disabled === "string") {
        addPseudoToNode(node, classNamer(className));
    }

    return node;
};
