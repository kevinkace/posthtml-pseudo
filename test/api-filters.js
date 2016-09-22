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

        it("should not add class name to excluded tag", () =>
            posthtml()
                .use(pseudo({
                    include : {
                        classNames : [ "firstLastOnly" ]
                    },
                    exclude : {
                        tags : [ "p" ]
                    }
                }))
                .process(fixtures.group_exclude_tag.input)
                .then((result) => {
                    assert.equal(result.html, fixtures.group_exclude_tag.expected);
                })
        );

        it("should not add class name to excluded tags", () =>
            posthtml()
                .use(pseudo({
                    include : {
                        classNames : [ "firstLastOnly" ]
                    },
                    exclude : {
                        tags : [ "p", "div" ]
                    }
                }))
                .process(fixtures.group_exclude_tags.input)
                .then((result) => {
                    assert.equal(result.html, fixtures.group_exclude_tags.expected);
                })
        );

        it("should exclude tags even if included", () =>
            posthtml()
                .use(pseudo({
                    include : {
                        classNames : [ "firstLastOnly" ],
                        tags       : [ "p", "input" ]
                    },
                    exclude : {
                        tags : [ "p", "div" ]
                    }
                }))
                .process(fixtures.group_include_exclude_tags.input)
                .then((result) => {
                    assert.equal(result.html, fixtures.group_include_exclude_tags.expected);
                })
        );
    });
});
