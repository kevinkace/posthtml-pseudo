"use strict";

const className    = ":empty",
    ineligibleTags = [
        "html"
    ],

    addPseudoToNode = require("../addPseudoToNode");

module.exports = function(classNamer, node) {
    if(!node.tag || node.content || ineligibleTags.indexOf(node.tag) >= 0) {
        return node;
    }

    addPseudoToNode(node, classNamer(className));

    return node;
};
