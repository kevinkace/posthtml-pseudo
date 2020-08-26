"use strict";

const className = ":only-of-type";

const addPseudoToNode = require("../addPseudoToNode");

const each = require("lodash/each");


module.exports = function(classNamer, node) {
    let tags = {};

    if (!node.tag || !node.content || !node.content.length) {
        return node;
    }

    node.content.forEach((child) => {
        if (!child.tag || child.tag === "body") {
            return;
        }

        if (tags[child.tag] === undefined) {
            tags[child.tag] = child;

            return;
        }

        tags[child.tag] = false;
    });

    each(tags, (child) => {
        if (!child) {
            return;
        }

        addPseudoToNode(child, classNamer(className));
    });

    return node;
};
