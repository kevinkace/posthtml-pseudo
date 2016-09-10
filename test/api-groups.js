"use strict";

const assert = require("assert"),

    posthtml = require("posthtml"),
    pseudo   = require("../index"),

    fixtures = require("./fixtures");

describe("/lib", () => {
    describe("/pseudo.js", () => {
        // all
        it("should run posthtml with pseudo using group all", () =>
            posthtml()
                .use(pseudo({ include : "all" }))
                .process(fixtures.groups.all.input)
                .then((result) => {
                    assert.equal(result.html, fixtures.groups.all.expected);
                })
        );

        // firstLastOnly
        it("should run posthtml with pseudo using group firstLastOnly", () =>
            posthtml()
                .use(pseudo({ include : "firstLastOnly" }))
                .process(fixtures.groups.firstLastOnly.input)
                .then((result) => {
                    assert.equal(result.html, fixtures.groups.firstLastOnly.expected);
                })
        );

        // firstLast
        it("should run posthtml with pseudo using group firstLast", () =>
            posthtml()
                .use(pseudo({ include : "firstLast" }))
                .process(fixtures.groups.firstLast.input)
                .then((result) => {
                    assert.equal(result.html, fixtures.groups.firstLast.expected);
                })
        );

        // form
        it("should run posthtml with pseudo using group form", () =>
            posthtml()
                .use(pseudo({ include : "form" }))
                .process(fixtures.groups.form.input)
                .then((result) => {
                    assert.equal(result.html, fixtures.groups.form.expected);
                })
        );

        // only
        it("should run posthtml with pseudo using group only", () =>
            posthtml()
                .use(pseudo({ include : "only" }))
                .process(fixtures.groups.only.input)
                .then((result) => {
                    assert.equal(result.html, fixtures.groups.only.expected);
                })
        );

        // readWrite
        it("should run posthtml with pseudo using group readWrite", () =>
            posthtml()
                .use(pseudo({ include : "readWrite" }))
                .process(fixtures.groups.readWrite.input)
                .then((result) => {
                    assert.equal(result.html, fixtures.groups.readWrite.expected);
                })
        );
    });
});
