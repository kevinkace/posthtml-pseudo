"use strict";

const get = require("lodash/get"),

    addClassNameToNode = require("../addClassNameToNode"),

    eligibleTags = [
        "input",
        "select",
        "textarea"
    ],
    className = ":read-write";

module.exports = function(classNamer, node) {
    if(!node.tag ||
        eligibleTags.indexOf(node.tag) === -1 ||
        typeof get(node, [ "attrs", "readonly" ]) === "string") {
        return node;
    }

    addClassNameToNode(node, classNamer(className));

    return node;
};
