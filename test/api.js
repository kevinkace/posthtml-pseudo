"use strict";

const assert = require("assert"),

    posthtml = require("posthtml"),
    pseudo   = require("../index"),

    fixtures = require("./fixtures"),

    groups = require("../lib/groups");

describe("/lib", () => {
    describe("/api.js", () => {
        it("should run posthtml", () =>
            posthtml()
                .process(fixtures.basic.input)
                .then((result) => {
                    assert.equal(result.html, fixtures.basic.expected);
                })
        );

        // it("should run posthtml with pseudo", () =>
        //     posthtml()
        //         .use(pseudo())
        //         .process(fixtures.all.input)
        //         .then((result) => {
        //             assert.equal(result.html, fixtures.all.expected);
        //         })
        // );

        // :disabled
        it("should add disabled", () =>
            posthtml()
                .use(pseudo({ include : ":disabled" }))
                .process(fixtures.classNames[":disabled"].input)
                .then((result) => {
                    assert.equal(result.html, fixtures.classNames[":disabled"].expected);
                })
        );

        // :empty
        it("should add empty", () =>
            posthtml()
                .use(pseudo({ include : ":empty" }))
                .process(fixtures.classNames[":empty"].input)
                .then((result) => {
                    assert.equal(result.html, fixtures.classNames[":empty"].expected);
                })
        );

        // :enabled
        it("should add enabled", () =>
            posthtml()
                .use(pseudo({ include : ":enabled" }))
                .process(fixtures.classNames[":enabled"].input)
                .then((result) => {
                    assert.equal(result.html, fixtures.classNames[":enabled"].expected);
                })
        );

        // :first-child
        it("should add first-child", () =>
            posthtml()
                .use(pseudo({ include : ":first-child" }))
                .process(fixtures.classNames[":first-child"].input)
                .then((result) => {
                    assert.equal(result.html, fixtures.classNames[":first-child"].expected);
                })
        );

        // :first-of-type
        it("should add first-of-type", () =>
            posthtml()
                .use(pseudo({ include : ":first-of-type" }))
                .process(fixtures.classNames[":first-of-type"].input)
                .then((result) => {
                    assert.equal(result.html, fixtures.classNames[":first-of-type"].expected);
                })
        );

        // :last-child
        it("should add last-child", () =>
            posthtml()
                .use(pseudo({ include : ":last-child" }))
                .process(fixtures.classNames[":last-child"].input)
                .then((result) => {
                    assert.equal(result.html, fixtures.classNames[":last-child"].expected);
                })
        );

        // :last-of-type
        it("should add last-of-type", () =>
            posthtml()
                .use(pseudo({ include : ":last-of-type" }))
                .process(fixtures.classNames[":last-of-type"].input)
                .then((result) => {
                    assert.equal(result.html, fixtures.classNames[":last-of-type"].expected);
                })
        );

        // :only-child
        it("should add only-child", () =>
            posthtml()
                .use(pseudo({ include : ":only-child" }))
                .process(fixtures.classNames[":only-child"].input)
                .then((result) => {
                    assert.equal(result.html, fixtures.classNames[":only-child"].expected);
                })
        );

        // :only-of-type
        it("should add only-of-type", () =>
            posthtml()
                .use(pseudo({ include : ":only-of-type" }))
                .process(fixtures.classNames[":only-of-type"].input)
                .then((result) => {
                    assert.equal(result.html, fixtures.classNames[":only-of-type"].expected);
                })
        );

        // :optional
        it("should add optional", () =>
            posthtml()
                .use(pseudo({ include : ":optional" }))
                .process(fixtures.classNames[":optional"].input)
                .then((result) => {
                    assert.equal(result.html, fixtures.classNames[":optional"].expected);
                })
        );

        // :read-only
        it("should add read-only", () =>
            posthtml()
                .use(pseudo({ include : ":read-only" }))
                .process(fixtures.classNames[":read-only"].input)
                .then((result) => {
                    assert.equal(result.html, fixtures.classNames[":read-only"].expected);
                })
        );

        // :read-write
        it("should add read-write", () =>
            posthtml()
                .use(pseudo({ include : ":read-write" }))
                .process(fixtures.classNames[":read-write"].input)
                .then((result) => {
                    assert.equal(result.html, fixtures.classNames[":read-write"].expected);
                })
        );

        // :required
        it("should add required", () =>
            posthtml()
                .use(pseudo({ include : ":required" }))
                .process(fixtures.classNames[":required"].input)
                .then((result) => {
                    assert.equal(result.html, fixtures.classNames[":required"].expected);
                })
        );
    });
});
