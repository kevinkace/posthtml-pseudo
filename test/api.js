"use strict";

const pseudo = require("../");
const posthtml = require("posthtml");

const fixtures = require("./fixtures");

const assert = require("assert");


describe("/lib", () => {
    describe("/pseudo.js", () => {
        it("should run posthtml", () =>
            posthtml()
                .process(fixtures.basic.input)
                .then((result) => {
                    assert.strictEqual(result.html, fixtures.basic.expected);
                })
        );

        it("should process a fragment", () =>
            posthtml()
                .use(pseudo())
                .process(fixtures.fragment.input)
                .then((result) => {
                    assert.strictEqual(result.html, fixtures.fragment.expected);
                })
        );

        it("should process empty html", () =>
            posthtml()
                .use(pseudo())
                .process(fixtures.emptyHtml.input)
                .then((result) => {
                    assert.strictEqual(result.html, fixtures.emptyHtml.expected);
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
                    assert.strictEqual(result.html, fixtures.exclude.expected);
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
                    assert.strictEqual(result.html, fixtures.excludeAll.expected);
                })
        );

        it("should process all the things", () =>
            posthtml()
                .use(pseudo({
                    include : {
                        classNames : [
                            "form",
                            {
                                firstLastOnly : function(className) {
                                    return `${className.replace(/:|-/g, "")}-bookend`;
                                }
                            },
                            {
                                ":empty" : "hidden"
                            }
                        ]
                    },
                    exclude : {
                        classNames : [ "readWrite" ],
                        tags       : [ "div" ]
                    }
                }))
                .process(fixtures.allTheThings.input)
                .then((result) => {
                    assert.strictEqual(result.html, fixtures.allTheThings.expected);
                })
        );
    });
});
