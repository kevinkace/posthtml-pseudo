"use strict";

const get = require("lodash/get"),

    addClassNameToNode = require("../addClassNameToNode"),

    eligibleTags = [
        "button",
        "input",
        "select",
        "textarea"
    ],
    className = ":optional";

module.exports = function(classNamer, node) {
    if(!node.tag ||
        eligibleTags.indexOf(node.tag) === -1 ||
        typeof get(node, [ "attrs", "required"]) === "string") {
        return node;
    }

    addClassNameToNode(node, classNamer(className));

    return node;
};
