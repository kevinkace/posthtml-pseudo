"use strict";

const each = require("lodash/each"),

    addClassNameToNode = require("../addClassNameToNode");

module.exports = function(node) {
    let tags = {};

    if(!node.tag || !node.content || !node.content.length) {
        return node;
    }

    node.content.forEach((child) => {
        if(!child.tag || child.tag === "body") {
            return;
        }

        if(tags[child.tag] === undefined) {
            tags[child.tag] = child;

            return;
        }

        tags[child.tag] = false;
    });

    each(tags, (child) => {
        if(!child) {
            return;
        }

        addClassNameToNode(child, ":only-of-type");
    });

    return node;
};
