"use strict";

const className = ":disabled",

    addClassNameToNode = require("../addClassNameToNode");


module.exports = function(classNamer, node) {
    if(node.attrs && typeof node.attrs.disabled === "string") {
        addClassNameToNode(node, classNamer(className));
    }

    return node;
};
