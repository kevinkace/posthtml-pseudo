"use strict";

const addClassNameToNode = require("../addClassNameToNode");

module.exports = function(node) {
    let onlyChild;

    if(!node.tag || !node.content || !node.content.length) {
        return node;
    }

    node.content.some((child) => {
        if(!child.tag || child.tag === "body") {
            return false;
        }

        if(onlyChild && child.tag) {
            onlyChild = undefined;

            return true;
        }

        if(!onlyChild && child.tag) {
            onlyChild = child;
        }

        return false;
    });

    if(onlyChild) {
        addClassNameToNode(onlyChild, ":only-child");
    }

    return node;
};
