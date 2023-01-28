# posthtml-pseudo

[![Build][build-badge]][build]
[![Coverage][coverage-badge]][coverage]
[![Greenkeeper badge](https://badges.greenkeeper.io/kevinkace/posthtml-pseudo.svg)](https://greenkeeper.io/)
![super awesome][super-badge]

A [PostHTML](https://github.com/posthtml/posthtml) plugin to add [pseudo classes](https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-classes) to elements within `<body>`, eg `:first-child`/`:last-child`.

Before:
```html
<html>
    <body>
        <div>one</div>
        <div>two</div>
        <div>three</div>
    </body>
</html>
```

After:
```html
<html>
    <body>
        <div class=":first-child">one</div>
        <div>two</div>
        <div class=":last-child">three</div>
    </body>
</html>
```

:point_right: Check out [postcss-pseudo-classes](https://github.com/giuseppeg/postcss-pseudo-classes) for the other side of the equation.

:pencil: **Note on supported classes**: Pseudo classes dependent on input values (`:valid`, `:invalid`, ...), browser history (`:visted`, `:link`, ...), interaction (`:hover`, `:focus:`), parameters (`:nth-child()`, `:lang()`, ...), page url (`:target`) or require JS (`:indeterminate`), have been excluded. See [support list](#pseudo-class-names).

## Options

Options config has two properties &mdash; `include` and `exclude` &mdash; to define which psuedo class names to add, and which tags to add them to. Both `include.classNames` and `exclude.classNames` can be:

- a string of a [class name group](#class-name-groups)
- a string of a class name (`/^:\S+/`, from those in the `all` group)
- an array of class name groups and/or class names

### Example Options Config

This config adds all supported pseudo class names to all appropriate elements using their default class names.

```js
let config = {
    include : {
        classNames : "all" // all group
    }
};
```

Here's something more complex, adding only two class names but only to elements that aren't `div`, `table` or `form`.

```js
let config = {
    include : {
        classNames : [ ":first-child", ":last-child" ]
    },
    exclude : {
        tags : [
            "div", "table", "form"
        ]
    }
};
```

And here's an unrealistic and irresponsible config showing more options.

```js
let config = {
    include : {
        classNames : [
            "all", // include the "all" group using default class names
            { ":first-child" : "fc" }, // custom class name
            { "form" : (className) => className.replace(":", "") } // remove ":" from default classname
        ],
        tags : [
            "div",
            "p",
            "span"
        ]
    },
    exclude : {
        classNames : [
            "onlyChild",
            ":root",
            ":read-only"
        ],
        tags : [
            "div"
        ]
    }
}
```

### Class Name Groups

```js
{
    all : [
        ":default",
        ":disabled",
        ":empty",
        ":enabled",
        ":first-child"
        ":first-of-type",
        ":last-child",
        ":last-of-type",
        ":only-of-type",
        ":only-child",
        ":optional",
        ":read-only",
        ":read-write",
        ":required",
        ":root"
    ],
    firstLast : [
        ":first-child",
        ":first-child-of-type",
        ":last-child",
        ":last-child-of-type"
    ],
    firstLastOnly : [
        ":first-child",
        ":last-child"
    ],
    form : [
        ":default",
        ":disabled",
        ":enabled",
        ":optional",
        ":required",
        ":read-only",
        ":read-write"
    ],
    onlyChild : [
        ":only-child",
        ":only-child-of-type"
    ],
    readWrite : [
        ":read-only",
        ":read-write"
    ]
}
```

## Pseudo Class Names

List of supported and unsupported pseudo class names. Checkboxes track implementation status.

- ~~`:active`~~
- ~~`:any`~~
- ~~`:checked`~~
- [X] `:default`
- ~~`:dir()`~~ *
- [X] `:disabled`
- [X] `:empty`
- [X] `:enabled`
- [X] `:first`
- [X] `:first-child`
- [X] `:first-of-type`
- ~~`:fullscreen`~~
- ~~`:focus`~~
- ~~`:hover`~~
- ~~`:indeterminate`~~
- ~~`:in-range`~~
- ~~`:invalid`~~
- ~~`:lang()`~~ *
- [X] `:last-child`
- [X] `:last-of-type`
- ~~`:left`~~
- ~~`:link`~~
- ~~`:not()`~~ *
- ~~`:nth-child()`~~ *
- ~~`:nth-last-child()`~~ *
- ~~`:nth-last-of-type()`~~ *
- ~~`:nth-of-type()`~~ *
- [X] `:only-child`
- [X] `:only-of-type`
- [X] `:optional`
- ~~`:out-of-range`~~
- [X] `:read-only`
- [X] `:read-write`
- [X] `:required`
- ~~`:right`~~
- [X] `:root`
- ~~`:scope`~~
- ~~`:target`~~
- ~~`:valid`~~
- ~~`:visited`~~

\* Hope to add these, but require some thinking due to input parameters.

[build]: https://github.com/kevinkace/posthtml-pseudo/actions/workflows/npm-publish.yml
[build-badge]: https://github.com/kevinkace/posthtml-pseudo/actions/workflows/npm-publish.yml/badge.svg

[coverage]: https://coveralls.io/github/kevinkace/posthtml-pseudo
[coverage-badge]: https://coveralls.io/repos/github/kevinkace/posthtml-pseudo/badge.svg

[super-badge]: https://cdn.rawgit.com/kevinkace/posthtml-pseudo/f9adc82/superawesome.svg
