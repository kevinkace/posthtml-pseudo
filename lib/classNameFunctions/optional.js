"use strict";

const className  = ":optional",
    eligibleTags = [
            "button",
            "input",
            "select",
            "textarea"
        ],

    addClassNameToNode = require("../addClassNameToNode"),

    get = require("lodash/get");


module.exports = function(classNamer, node) {
    if(!node.tag ||
        eligibleTags.indexOf(node.tag) === -1 ||
        typeof get(node, [ "attrs", "required"]) === "string") {
        return node;
    }

    addClassNameToNode(node, classNamer(className));

    return node;
};
