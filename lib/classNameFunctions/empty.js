"use strict";

const className    = ":empty";
const ineligibleTags = [
    "html"
];

const addPseudoToNode = require("../addPseudoToNode");

module.exports = function(classNamer, node) {
    if (!node.tag || node.content || ineligibleTags.indexOf(node.tag) >= 0) {
        return node;
    }

    addPseudoToNode(node, classNamer(className));

    return node;
};
