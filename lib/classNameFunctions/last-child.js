"use strict";

const className = ":last-child",

    addClassNameToNode = require("../addClassNameToNode");


module.exports = function(classNamer, node) {
    let lastChild;

    if(!node.tag || !node.content || !node.content.length) {
        return node;
    }

    node.content.forEach((child) => {
        if(!child.tag || child.tag === "body") {
            return;
        }

        lastChild = child;
    });

    if(lastChild) {
        addClassNameToNode(lastChild, classNamer(className));
    }

    return node;
};
