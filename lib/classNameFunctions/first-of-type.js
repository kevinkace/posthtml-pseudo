"use strict";

const className = ":first-of-type",

    addPseudoToNode = require("../addPseudoToNode");


module.exports = function(classNamer, node) {
    let tags = [];

    if(!node.tag || !node.content || !node.content.length) {
        return node;
    }

    node.content.forEach((child) => {
        if(!child.tag || tags.indexOf(child.tag) >= 0 || child.tag === "body") {
            return;
        }

        tags.push(child.tag);
        addPseudoToNode(child, classNamer(className));
    });

    return node;
};
