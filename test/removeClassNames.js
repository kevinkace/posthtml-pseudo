"use strict";

const removeClassNames = require("../lib/removeClassNames"),

    groups = require("../lib/groups"),

    classNamer = require("../lib/classNamer"),

    reduceGroup = require("./reduceGroup"),

    assert = require("assert"),

    forEach = require("lodash/forEach"),
    concat  = require("lodash/concat");


function filteredGroups(excludeClasses) {
    return groups.all
        .filter((className) => excludeClasses.indexOf(className) === -1)
        .reduce((acc, cur) => {
            acc[cur] = classNamer;

            return acc;
        }, {});
};


describe("/lib", () => {
    describe("/removeClassNames.js", () => {
        forEach(groups, (classNames, groupName) => {
            it(`should remove all classes from the ${groupName} group`, () => {
                assert.deepEqual(removeClassNames(reduceGroup("all"), [ groupName ]), filteredGroups(groups[groupName]));
            });
        });

        it("should remove individual class names", () => {
            assert.deepEqual(removeClassNames(reduceGroup("all"), [ ":first-child" ]), filteredGroups([ ":first-child" ]));
        });

        it("should remove multiple class names", () => {
            assert.deepEqual(removeClassNames(reduceGroup("all"), [ ":first-child", ":last-child" ]), filteredGroups([ ":first-child", ":last-child" ]));
        });

        it("should remove multiple group names", () => {
            assert.deepEqual(removeClassNames(reduceGroup("all"), [ "only", "readWrite" ]), filteredGroups(concat(groups.only, groups.readWrite)));
        });

        it("should remove class names and group names", () => {
            assert.deepEqual(removeClassNames(reduceGroup("all"), [ ":first-child", "form" ]), filteredGroups(concat([ ":first-child" ], groups.form)));
        });
    });
});
