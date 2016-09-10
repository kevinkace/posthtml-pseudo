"use strict";

const walk = require("posthtml/lib/api").walk,
    get    = require("lodash/get"),

    addClassNameToNode = require("../addClassNameToNode"),

    eligibleTags = [
        "button",
        "input"
    ],
    className = ":default";

module.exports = function(node) {
    let test = false;

    if(!node.tag || node.tag !== "form" || !node.content.length) {
        return node;
    }

    walk.call(node, (subNode) => {
        if(test || !subNode.tag || eligibleTags.indexOf(subNode.tag) === -1 ||
            (subNode.tag === "input" && get(subNode, [ "attrs", "type"]) !== "submit")) {
            return subNode;
        }

        test = true;
        addClassNameToNode(subNode, className);

        return subNode;
    });

    return node;
};
