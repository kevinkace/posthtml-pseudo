"use strict";

const get = require("lodash/get"),
    set   = require("lodash/set"),

    pseudoRegexp = require("./pseudoRegexp");

module.exports = function(node, className) {
    if(get(node, [ "attrs", "class" ])) {
        node.attrs.class = `${node.attrs.class} ${className}`
            .split(" ")
            .sort((class1, class2) => {
                let class1Test = pseudoRegexp.test(class1);

                if(class1Test ? pseudoRegexp.test(class2) : !pseudoRegexp.test(class2)) {
                    return class1 > class2;
                }

                if(pseudoRegexp.test(class2)) {
                    return -1;
                }

                return 1;
            })
            .join(" ");

        return node;
    }

    set(node, [ "attrs", "class" ], className);

    return node;
};
