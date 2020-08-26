"use strict";

const className = ":last-child";

const addPseudoToNode = require("../addPseudoToNode");


module.exports = function(classNamer, node) {
    let lastChild;

    if (!node.tag || !node.content || !node.content.length) {
        return node;
    }

    node.content.forEach((child) => {
        if (!child.tag || child.tag === "body") {
            return;
        }

        lastChild = child;
    });

    if (lastChild) {
        addPseudoToNode(lastChild, classNamer(className));
    }

    return node;
};
