"use strict";

const assert = require("assert"),

    forEach = require("lodash/forEach"),
    clone   = require("lodash/clone"),
    concat  = require("lodash/concat"),

    removeClassNames = require("../lib/removeClassNames"),

    groups = require("../lib/groups");

describe("/lib", () => {
    describe("/removeClassNames.js", () => {
        forEach(groups, (classNames, groupName) => {
            it(`should remove all classes from the ${groupName} group`, () => {
                assert.deepEqual(removeClassNames(clone(groups.all), [ groupName ]), groups.all.filter((className) => groups[groupName].indexOf(className) < 0));
            });
        });

        it("should remove individual class names", () => {
            assert.deepEqual(removeClassNames(groups.all, [ ":first-child" ]), groups.all.filter((className) => className !== ":first-child"));
        });

        it("should remove multiple class names", () => {
            assert.deepEqual(removeClassNames(groups.all, [ ":first-child", ":last-child" ]), groups.all.filter((className) => [ ":first-child", ":last-child" ].indexOf(className) < 0));
        });

        it("should remove multiple group names", () => {
            assert.deepEqual(removeClassNames(groups.all, [ "only", "readWrite" ]), groups.all.filter((className) => concat(groups.only, groups.readWrite).indexOf(className) < 0));
        });

        it("should remove class names and group names", () => {
            assert.deepEqual(removeClassNames(groups.all, [ ":first-child", "form" ]), groups.all.filter((className) => className !== ":first-child" && groups.form.indexOf(className) < 0));
        });
    });
});
