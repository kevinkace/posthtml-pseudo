"use strict";

const pseudo = require("../index"),
    posthtml = require("posthtml"),

    fixtures = require("./fixtures").filters,

    assert = require("assert");

describe("/lib", () => {
    describe("/pseudo.js", () => {
        it("should only add class name to included tag", () =>
            posthtml()
                .use(pseudo({
                    include : {
                        classNames : [ "firstLastOnly" ],
                        tags       : [ "div" ]
                    }
                }))
                .process(fixtures.group_include_tag.input)
                .then((result) => {
                    assert.equal(result.html, fixtures.group_include_tag.expected);
                })
        );

        it("should only add class name to included tags", () =>
            posthtml()
                .use(pseudo({
                    include : {
                        classNames : [ "firstLastOnly" ],
                        tags       : [ "div", "p" ]
                    }
                }))
                .process(fixtures.group_include_tags.input)
                .then((result) => {
                    assert.equal(result.html, fixtures.group_include_tags.expected);
                })
        );
    });
});
