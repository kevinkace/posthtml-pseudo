"use strict";

const className    = ":empty",
    ineligibleTags = [
        "html"
    ],

    addClassNameToNode = require("../addClassNameToNode");

module.exports = function(classNamer, node) {
    if(!node.tag || node.content || ineligibleTags.indexOf(node.tag) >= 0) {
        return node;
    }

    addClassNameToNode(node, classNamer(className));

    return node;
};
