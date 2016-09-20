"use strict";

const pseudo = require("../"),
    posthtml = require("posthtml"),

    fixtures = require("./fixtures").customClassNames,

    assert = require("assert");


describe("/lib", () => {
    describe("/pseudo.js", () => {
        it("should add custom class name for a pseudo class", () =>
            posthtml()
                .use(pseudo({
                    include : [{ ":first-child" : "fc" }]
                }))
                .process(fixtures.class_string.input)
                .then((result) => {
                    assert.equal(result.html, fixtures.class_string.expected);
                })
        );

        it("should add custom class name for a class group", () =>
            posthtml()
                .use(pseudo({
                    include : [{ "firstLastOnly" : "flo" }]
                }))
                .process(fixtures.group_string.input)
                .then((result) => {
                    assert.equal(result.html, fixtures.group_string.expected);
                })
        );
    });
});
