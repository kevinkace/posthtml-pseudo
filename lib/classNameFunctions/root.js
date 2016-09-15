"use strict";

const className = ":root",

    addClassNameToNode = require("../addClassNameToNode");


module.exports = function(classNamer, node) {
    if(node.tag !== "html") {
        return node;
    }

    addClassNameToNode(node, classNamer(className));

    return node;
};
