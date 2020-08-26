"use strict";

const className  = ":required";
const eligibleTags = [
    "input",
    "select",
    "textarea"
];

const addPseudoToNode = require("../addPseudoToNode");

const get = require("lodash/get");


module.exports = function(classNamer, node) {
    if (!node.tag ||
        eligibleTags.indexOf(node.tag) === -1 ||
        typeof get(node, [ "attrs", "required" ]) !== "string") {
        return node;
    }

    addPseudoToNode(node, classNamer(className));

    return node;
};
