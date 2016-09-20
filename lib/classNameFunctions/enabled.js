"use strict";

const className  = ":enabled",
    eligibleTags = [
        "a",
        "button",
        "fieldset",
        "input",
        "optgroup",
        "option",
        "select",
        "textarea"
    ],

    addPseudoToNode = require("../addPseudoToNode"),

    get = require("lodash/get");


module.exports = function(classNamer, node) {
    if(!node.tag) {
        return node;
    }

    if(eligibleTags.indexOf(node.tag) >= 0 && typeof get(node, [ "attrs", "disabled" ]) !== "string") {
        if(node.tag === "a" && typeof get(node, [ "attrs", "href" ]) !== "string") {
            return node;
        }

        addPseudoToNode(node, classNamer(className));
    }

    return node;
};
