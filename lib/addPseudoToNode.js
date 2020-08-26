"use strict";

module.exports = function(node, className) {
    if (node.pseudo) {
        node.pseudo.push(className);
    } else {
        node.pseudo = [ className ];
    }

    return node;
};
