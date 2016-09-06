"use strict";

const get = require("lodash/get"),

    addClassNameToNode = require("../addClassNameToNode"),

    eligibleTags = [
        "input",
        "select",
        "textarea"
    ];

module.exports = function(node) {
    if(!node.tag ||
        eligibleTags.indexOf(node.tag) === -1 ||
        typeof get(node, [ "attrs", "readonly"]) === "string") {
        return node;
    }

    addClassNameToNode(node, ":read-write");

    return node;
};
