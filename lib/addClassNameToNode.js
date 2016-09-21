"use strict";

const get  = require("lodash/get"),
    set    = require("lodash/set"),
    uniq   = require("lodash/uniq"),
    concat = require("lodash/concat");


module.exports = function(node, config) {
    let classes,
        pseudoClasses;

    if(!node.pseudo || !node.pseudo.length
        // ||
        // (config.include.tags && config.include.tags.indexOf(node.tag) === -1) ||
        // (config.exclude.tags && config.exclude.tags.indexOf(node.tag) !== -1)
        ) {
        return node;
    }

    classes = (get(node, [ "attrs", "class" ]) || "").split(" ");

    pseudoClasses = uniq(node.pseudo)
        .filter((pseudo) => {
            // don't add undefined classes, or if already present
            if(!pseudo || classes.indexOf(pseudo) !== -1) {
                return false;
            }

            return true;
        })
        .sort();

    delete node.pseudo;

    if(!pseudoClasses.length) {
        return node;
    }

    set(node, [ "attrs", "class" ], concat(classes, pseudoClasses).join(" ").trim());

    return node;
};
