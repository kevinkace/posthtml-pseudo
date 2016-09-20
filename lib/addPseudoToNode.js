"use strict";

module.exports = function(node, className) {
    node.pseudo ?
        node.pseudo.push(className) :
        node.pseudo = [ className ];

    return node;
};
