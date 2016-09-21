"use strict";

const pseudo = require("../"),
    posthtml = require("posthtml"),

    fixtures = require("./fixtures"),

    assert = require("assert");


describe("/lib", () => {
    describe("/pseudo.js", () => {
        it("should run posthtml", () =>
            posthtml()
                .process(fixtures.basic.input)
                .then((result) => {
                    assert.equal(result.html, fixtures.basic.expected);
                })
        );

        it("should process a fragment", () =>
            posthtml()
                .use(pseudo())
                .process(fixtures.fragment.input)
                .then((result) => {
                    assert.equal(result.html, fixtures.fragment.expected);
                })
        );

        it("should process empty html", () =>
            posthtml()
                .use(pseudo())
                .process(fixtures.emptyHtml.input)
                .then((result) => {
                    assert.equal(result.html, fixtures.emptyHtml.expected);
                })
        );

        it("should process include and exclude", () =>
            posthtml()
                .use(pseudo({
                    include : {
                        classNames : "firstLastOnly"
                    },
                    exclude : {
                        classNames : ":last-child"
                    }
                }))
                .process(fixtures.exclude.input)
                .then((result) => {
                    assert.equal(result.html, fixtures.exclude.expected);
                })
        );

        it("should process excluding group all", () =>
            posthtml()
                .use(pseudo({
                    exclude : {
                        classNames : "all"
                    }
                }))
                .process(fixtures.excludeAll.input)
                .then((result) => {
                    assert.equal(result.html, fixtures.excludeAll.expected);
                })
        );
    });
});
