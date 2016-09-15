"use strict";

const pseudo = require("../index"),
    posthtml = require("posthtml"),

    fixtures = require("./fixtures").classNames,

    assert = require("assert");


describe("/lib", () => {
    describe("/pseudo.js", () => {
        // :default
        it("should add :default", () =>
            posthtml()
                .use(pseudo({ include : ":default" }))
                .process(fixtures[":default"].input)
                .then((result) => {
                    assert.equal(result.html, fixtures[":default"].expected);
                })
        );

        // :disabled
        it("should add :disabled", () =>
            posthtml()
                .use(pseudo({ include : ":disabled" }))
                .process(fixtures[":disabled"].input)
                .then((result) => {
                    assert.equal(result.html, fixtures[":disabled"].expected);
                })
        );

        // :empty
        it("should add :empty", () =>
            posthtml()
                .use(pseudo({ include : ":empty" }))
                .process(fixtures[":empty"].input)
                .then((result) => {
                    assert.equal(result.html, fixtures[":empty"].expected);
                })
        );

        // :enabled
        it("should add :enabled", () =>
            posthtml()
                .use(pseudo({ include : ":enabled" }))
                .process(fixtures[":enabled"].input)
                .then((result) => {
                    assert.equal(result.html, fixtures[":enabled"].expected);
                })
        );

        // :first-child
        it("should add :first-child", () =>
            posthtml()
                .use(pseudo({ include : ":first-child" }))
                .process(fixtures[":first-child"].input)
                .then((result) => {
                    assert.equal(result.html, fixtures[":first-child"].expected);
                })
        );

        // :first-of-type
        it("should add :first-of-type", () =>
            posthtml()
                .use(pseudo({ include : ":first-of-type" }))
                .process(fixtures[":first-of-type"].input)
                .then((result) => {
                    assert.equal(result.html, fixtures[":first-of-type"].expected);
                })
        );

        // :last-child
        it("should add :last-child", () =>
            posthtml()
                .use(pseudo({ include : ":last-child" }))
                .process(fixtures[":last-child"].input)
                .then((result) => {
                    assert.equal(result.html, fixtures[":last-child"].expected);
                })
        );

        // :last-of-type
        it("should add :last-of-type", () =>
            posthtml()
                .use(pseudo({ include : ":last-of-type" }))
                .process(fixtures[":last-of-type"].input)
                .then((result) => {
                    assert.equal(result.html, fixtures[":last-of-type"].expected);
                })
        );

        // :only-child
        it("should add :only-child", () =>
            posthtml()
                .use(pseudo({ include : ":only-child" }))
                .process(fixtures[":only-child"].input)
                .then((result) => {
                    assert.equal(result.html, fixtures[":only-child"].expected);
                })
        );

        // :only-of-type
        it("should add :only-of-type", () =>
            posthtml()
                .use(pseudo({ include : ":only-of-type" }))
                .process(fixtures[":only-of-type"].input)
                .then((result) => {
                    assert.equal(result.html, fixtures[":only-of-type"].expected);
                })
        );

        // :optional
        it("should add :optional", () =>
            posthtml()
                .use(pseudo({ include : ":optional" }))
                .process(fixtures[":optional"].input)
                .then((result) => {
                    assert.equal(result.html, fixtures[":optional"].expected);
                })
        );

        // :read-only
        it("should add :read-only", () =>
            posthtml()
                .use(pseudo({ include : ":read-only" }))
                .process(fixtures[":read-only"].input)
                .then((result) => {
                    assert.equal(result.html, fixtures[":read-only"].expected);
                })
        );

        // :read-write
        it("should add :read-write", () =>
            posthtml()
                .use(pseudo({ include : ":read-write" }))
                .process(fixtures[":read-write"].input)
                .then((result) => {
                    assert.equal(result.html, fixtures[":read-write"].expected);
                })
        );

        // :required
        it("should add :required", () =>
            posthtml()
                .use(pseudo({ include : ":required" }))
                .process(fixtures[":required"].input)
                .then((result) => {
                    assert.equal(result.html, fixtures[":required"].expected);
                })
        );

        // :root
        it("should add :root", () =>
            posthtml()
                .use(pseudo({ include : ":root" }))
                .process(fixtures[":root"].input)
                .then((result) => {
                    assert.equal(result.html, fixtures[":root"].expected);
                })
        );
    });
});
