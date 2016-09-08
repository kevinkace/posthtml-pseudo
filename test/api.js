"use strict";

const assert = require("assert"),

    posthtml = require("posthtml"),
    pseudo   = require("../index"),

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

        // it("should run posthtml with pseudo", () =>
        //     posthtml()
        //         .use(pseudo())
        //         .process(fixtures.groups.all.input)
        //         .then((result) => {
        //             assert.equal(result.html, fixtures.groups.all.expected);
        //         })
        // );
    });
});
