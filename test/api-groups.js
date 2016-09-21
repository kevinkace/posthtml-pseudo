"use strict";

const pseudo = require("../"),
    posthtml = require("posthtml"),

    fixtures = require("./fixtures").groups,

    assert = require("assert");


describe("/lib", () => {
    describe("/pseudo.js", () => {
        // all
        it("should run posthtml with pseudo using group all", () =>
            posthtml()
                .use(pseudo({
                    include : {
                        classNames : "all"
                    }
                }))
                .process(fixtures.all.input)
                .then((result) => {
                    assert.equal(result.html, fixtures.all.expected);
                })
        );

        // firstLastOnly
        it("should run posthtml with pseudo using group firstLastOnly", () =>
            posthtml()
                .use(pseudo({
                    include : {
                        classNames : "firstLastOnly"
                    }
                }))
                .process(fixtures.firstLastOnly.input)
                .then((result) => {
                    assert.equal(result.html, fixtures.firstLastOnly.expected);
                })
        );

        // firstLast
        it("should run posthtml with pseudo using group firstLast", () =>
            posthtml()
                .use(pseudo({
                    include : {
                        classNames : "firstLast"
                    }
                }))
                .process(fixtures.firstLast.input)
                .then((result) => {
                    assert.equal(result.html, fixtures.firstLast.expected);
                })
        );

        // form
        it("should run posthtml with pseudo using group form", () =>
            posthtml()
                .use(pseudo({
                    include : {
                        classNames : "form"
                    }
                }))
                .process(fixtures.form.input)
                .then((result) => {
                    assert.equal(result.html, fixtures.form.expected);
                })
        );

        // only
        it("should run posthtml with pseudo using group only", () =>
            posthtml()
                .use(pseudo({
                    include : {
                        classNames : "only"
                    }
                }))
                .process(fixtures.only.input)
                .then((result) => {
                    assert.equal(result.html, fixtures.only.expected);
                })
        );

        // readWrite
        it("should run posthtml with pseudo using group readWrite", () =>
            posthtml()
                .use(pseudo({
                    include : {
                        classNames : "readWrite"
                    }
                }))
                .process(fixtures.readWrite.input)
                .then((result) => {
                    assert.equal(result.html, fixtures.readWrite.expected);
                })
        );
    });
});
