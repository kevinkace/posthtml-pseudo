"use strict";

const assert = require("assert"),

    addClassNameToNode = require("../lib/addClassNameToNode"),

    fixtures = require("./fixtures").addClassNameToNode;

describe("/lib", () => {
    describe("/addClassNameToNode.js", () => {
        it("should add a class name to a node without a class attr", () => {
            assert.deepEqual(addClassNameToNode(fixtures.noClass.input, ":test"), fixtures.noClass.expected);
        });

        it("should add a class name to a node with an empty class attr", () => {
            assert.deepEqual(addClassNameToNode(fixtures.emptyClass.input, ":test"), fixtures.emptyClass.expected);
        });

        it("should add a class name to the end of a node with a class attr", () => {
            assert.deepEqual(addClassNameToNode(fixtures.endClass.input, ":test"), fixtures.endClass.expected);
        });

        it("should add a class name sorted properly to a node with a class attr 1", () => {
            assert.deepEqual(addClassNameToNode(fixtures.sortClass1.input, ":first-of-type"), fixtures.sortClass1.expected);
        });

        it("should add a class name sorted properly to a node with a class attr 2", () => {
            assert.deepEqual(addClassNameToNode(fixtures.sortClass2.input, ":first-child"), fixtures.sortClass2.expected);
        });

        it("should add a class name sorted properly to a node with a class attr 3", () => {
            assert.deepEqual(addClassNameToNode(fixtures.sortClass3.input, ":first-child"), fixtures.sortClass3.expected);
        });

        it("should add a class name sorted properly to a node with a multiple classes", () => {
            assert.deepEqual(addClassNameToNode(fixtures.multiClass.input, ":first-of-type"), fixtures.multiClass.expected);
        });

        it("should add a class name sorted properly to a node with a multiple classes 2", () => {
            assert.deepEqual(addClassNameToNode(fixtures.multiClass2.input, ":first-of-type"), fixtures.multiClass2.expected);
        });
    });
});
