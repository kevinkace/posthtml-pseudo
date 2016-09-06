"use strict";

const get = require("lodash/get"),

    addClassNameToNode = require("../addClassNameToNode"),

    className = ":enabled",

    eligibleTags = [
        "a",
        "button",
        "fieldset",
        "input",
        "optgroup",
        "option",
        "select",
        "textarea"
    ];

module.exports = function(node) {
    if(!node.tag) {
        return node;
    }

    if(eligibleTags.indexOf(node.tag) >= 0 && typeof get(node, [ "attrs", "disabled" ]) !== "string") {
        if(node.tag === "a" && typeof get(node, [ "attrs", "href" ]) !== "string") {
            return node;
        }

        addClassNameToNode(node, className);
    }

    return node;
};
