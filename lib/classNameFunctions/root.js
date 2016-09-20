"use strict";

const className = ":root",

    addPseudoToNode = require("../addPseudoToNode");


module.exports = function(classNamer, node) {
    if(node.tag !== "html") {
        return node;
    }

    addPseudoToNode(node, classNamer(className));

    return node;
};
