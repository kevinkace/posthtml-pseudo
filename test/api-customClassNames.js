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
                    include : {
                        classNames : [{ ":first-child" : "fc" }]
                    }
                }))
                .process(fixtures.class_string.input)
                .then((result) => {
                    assert.equal(result.html, fixtures.class_string.expected);
                })
        );

        it("should add custom class name for a class group", () =>
            posthtml()
                .use(pseudo({
                    include : {
                        classNames : [{ "firstLastOnly" : "flo" }]
                    }
                }))
                .process(fixtures.group_string.input)
                .then((result) => {
                    assert.equal(result.html, fixtures.group_string.expected);
                })
        );

        it("should add different custom class names for different pseudo classes", () =>
            posthtml()
                .use(pseudo({
                    include : {
                        classNames : [{
                                ":first-child" : "fc"
                            }, {
                                ":last-child" : "lc"
                            }]
                        }
                }))
                .process(fixtures.class_string2.input)
                .then((result) => {
                    assert.equal(result.html, fixtures.class_string2.expected);
                })
        );

        it("should add custom class name using function", () =>
            posthtml()
                .use(pseudo({
                    include : {
                        classNames : [{
                            "firstLastOnly" : (className) => {
                                return className.replace(/:|-/g, "");
                            }
                        }]
                    }
                }))
                .process(fixtures.class_function.input)
                .then((result) => {
                    assert.equal(result.html, fixtures.class_function.expected);
                })
        );
    });
});
