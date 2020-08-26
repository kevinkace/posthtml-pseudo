"use strict";

const className  = ":default";
const eligibleTags = [
        "button",
        "input"
    ];

const walk = require("posthtml/lib/api").walk;

const addPseudoToNode = require("../addPseudoToNode");

const get = require("lodash/get");


module.exports = function(classNamer, node) {
    let test = false;

    if (!node.tag || node.tag !== "form" || !node.content.length) {
        return node;
    }

    walk.call(node, (subNode) => {
        if (test || !subNode.tag || eligibleTags.indexOf(subNode.tag) === -1 ||
            (subNode.tag === "input" && get(subNode, [ "attrs", "type" ]) !== "submit")) {
            return subNode;
        }

        test = true;

        return addPseudoToNode(subNode, classNamer(className));
    });

    return node;
};
