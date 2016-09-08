"use strict";

const assert = require("assert"),

    posthtml = require("posthtml"),
    pseudo   = require("../index"),

    fixtures = require("./fixtures");

describe("/lib", () => {
    describe("/pseudo.js", () => {
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
    });
});
