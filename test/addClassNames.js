"use strict";

const assert = require("assert"),

    forEach = require("lodash/forEach"),
    concat  = require("lodash/concat"),

    addClassNames = require("../lib/addClassNames"),

    groups = require("../lib/groups");

describe("/lib", () => {
    describe("/addClassNames.js", () => {
        forEach(groups, (classNames, groupName) => {
            it(`should add all classes from the ${groupName} group`, () => {
                assert.deepEqual(addClassNames([], [ groupName ]), groups[groupName]);
            });
        });

        it("should add individual class names", () => {
            assert.deepEqual(addClassNames([], [ ":first-child" ]), [ ":first-child"]);
        });

        it("should merge a class name", () => {
            assert.deepEqual(addClassNames([ ":first-child" ], [ ":last-child" ]), [ ":first-child", ":last-child" ]);
        });

        it("should merge a class group", () => {
            assert.deepEqual(addClassNames([ ":first-child" ], [ "only" ]), concat([ ":first-child" ], groups.only));
        });

        it("should add multiple class names", () => {
            assert.deepEqual(addClassNames([], [ ":first-child", ":last-child" ]), [ ":first-child", ":last-child" ]);
        });

        it("should merge multiple class names", () => {
            assert.deepEqual(addClassNames([ ":read-only" ], [ ":first-child", ":last-child" ]), [ ":read-only", ":first-child", ":last-child" ]);
        });

        it("should add class names and group names", () => {
            assert.deepEqual(addClassNames([], [ ":first-child", "form" ]), concat([ ":first-child" ], groups.form));
        });

        it("should merge class names and group names", () => {
            assert.deepEqual(addClassNames([ ":root" ], [ "form", ":first-child" ]), concat([ ":root" ], groups.form, ":first-child"));
        });

        it("should add class names without duplication", () => {
            assert.deepEqual(addClassNames([], [ "all", ":first-child" ]), groups.all);
        });
    });
});
