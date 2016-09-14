"use strict";

const addClassNameToNode = require("../addClassNameToNode"),

    className = ":empty",

    ineligibleTags = [
        "html"
    ];

module.exports = function(classNamer, node) {
    if(!node.tag || node.content || ineligibleTags.indexOf(node.tag) >= 0) {
        return node;
    }

    addClassNameToNode(node, classNamer(className));

    return node;
};
