"use strict";

const assert = require("assert"),

    posthtml = require("posthtml"),

    fixtures = require("./fixtures");

describe("/lib", () => {
    describe("/pseudo.js", () => {
        it("should run posthtml", () =>
            posthtml()
                .process(fixtures.basic.input)
                .then((result) => {
                    assert.equal(result.html, fixtures.basic.expected);
                })
        );
    });
});
