"use strict";

const className  = ":enabled";
const eligibleTags = [
    "a",
    "button",
    "fieldset",
    "input",
    "optgroup",
    "option",
    "select",
    "textarea"
];

const addPseudoToNode = require("../addPseudoToNode");

const get = require("lodash/get");


module.exports = function(classNamer, node) {
    if (!node.tag) {
        return node;
    }

    if (eligibleTags.indexOf(node.tag) >= 0 && typeof get(node, [ "attrs", "disabled" ]) !== "string") {
        if (node.tag === "a" && typeof get(node, [ "attrs", "href" ]) !== "string") {
            return node;
        }

        addPseudoToNode(node, classNamer(className));
    }

    return node;
};
