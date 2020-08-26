"use strict";

const addClassNames = require("../lib/addClassNames");

const groups = require("../lib/groups");

const classNamer = require("../lib/classNamer");

const reduceGroup = require("./reduceGroup");

const assert = require("assert");

const forEach = require("lodash/forEach");
const merge   = require("lodash/merge");


describe("/lib", () => {
    describe("/addClassNames.js", () => {
        forEach(groups, (classNames, groupName) => {
            it(`should add all classes from the ${groupName} group`, () => {
                assert.deepEqual(addClassNames({}, [ groupName ]), reduceGroup(groupName));
            });
        });

        it("should add individual class names", () => {
            assert.deepEqual(addClassNames({}, [ ":first-child" ]), { ":first-child" : classNamer });
        });

        it("should merge a class name", () => {
            assert.deepEqual(addClassNames({ ":first-child" : classNamer }, [ ":last-child" ]), { ":first-child" : classNamer, ":last-child" : classNamer });
        });

        it("should merge a class group", () => {
            assert.deepEqual(addClassNames({ ":first-child" : classNamer }, [ "only" ]), reduceGroup("only", { ":first-child" : classNamer }));
        });

        it("should add multiple class names", () => {
            assert.deepEqual(addClassNames({}, [ ":first-child", ":last-child" ]), { ":first-child" : classNamer, ":last-child" : classNamer });
        });

        it("should merge multiple class names", () => {
            assert.deepEqual(addClassNames({ ":read-only" : classNamer }, [ ":first-child", ":last-child" ]), {
                ":read-only"   : classNamer,
                ":first-child" : classNamer,
                ":last-child"  : classNamer
            });
        });

        it("should add class names and group names", () => {
            assert.deepEqual(addClassNames({}, [ ":first-child", "form" ]), reduceGroup("form", { ":first-child" : classNamer }));
        });

        it("should merge class names and group names", () => {
            assert.deepEqual(addClassNames({ ":root" : classNamer }, [ "form", ":first-child" ]),
                merge({ ":root" : classNamer }, reduceGroup("form", { ":first-child" : classNamer })));
        });

        it("should add class names without duplication", () => {
            assert.deepEqual(addClassNames({}, [ "all", ":first-child" ]), reduceGroup("all"));
        });
    });
});
