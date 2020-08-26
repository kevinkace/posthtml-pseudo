"use strict";

const groups = require("../lib/groups");

const classNamer = require("../lib/classNamer");

module.exports = function(groupName, base) {
    base = base || {};

    return groups[groupName].reduce((acc, cur) => {
        acc[cur] = classNamer;

        return acc;
    }, base);
};
