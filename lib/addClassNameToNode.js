"use strict";

const get = require("lodash/get"),
    set   = require("lodash/set");

module.exports = function(node, className) {
    if(get(node, [ "attrs", "class"])) {
        node.attrs.class = `${node.attrs.class} ${className}`;
        return node;
    }

    set(node, [ "attrs", "class" ], className);
    return node;
};
