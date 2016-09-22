"use strict";

const addClassNameToNode = require("../lib/addClassNameToNode"),

    fixtures = require("./fixtures").addClassNameToNode,

    assert = require("assert");


describe("/lib", () => {
    describe("/addClassNameToNode.js", () => {
        it("should add a class name to a node without a class attr", () => {
            assert.deepEqual(addClassNameToNode(fixtures.noClass.input), fixtures.noClass.expected);
        });

        it("should add a class name to a node with an empty class attr", () => {
            assert.deepEqual(addClassNameToNode(fixtures.emptyClass.input), fixtures.emptyClass.expected);
        });

        it("should add a class name to the end of a node with a class attr", () => {
            assert.deepEqual(addClassNameToNode(fixtures.endClass.input), fixtures.endClass.expected);
        });

        it("should not duplicate a class name", () => {
            assert.deepEqual(addClassNameToNode(fixtures.noDuplicate.input), fixtures.noDuplicate.expected);
        });

        it("should not duplicate a class name 2", () => {
            assert.deepEqual(addClassNameToNode(fixtures.noDuplicate2.input), fixtures.noDuplicate2.expected);
        });

        it("should not duplicate a class name 3", () => {
            assert.deepEqual(addClassNameToNode(fixtures.noDuplicate3.input), fixtures.noDuplicate3.expected);
        });
    });
});
