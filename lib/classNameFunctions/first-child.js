"use strict";

const className = ":first-child";

const addPseudoToNode = require("../addPseudoToNode");


module.exports = function(classNamer, node) {
    if (!node.tag || !node.content || !node.content.length) {
        return node;
    }

    node.content.some((child) => {
        if (!child.tag || child.tag === "body") {
            return false;
        }

        addPseudoToNode(child, classNamer(className));

        return true;
    });

    return node;
};
