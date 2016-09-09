# posthtml-pseudo

[![Build][build]][build-badge]

This [PostHTML](https://github.com/posthtml/posthtml) plugin adds class names to elements within `<body>` for [pseudo classes](https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-classes), eg `:first-child`/`:last-child`.

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

Pseudo classes dependent on input values (`:valid`, `:invalid`, ...), browser history (`:visted`, `:link`, ...), interaction (`:hover`, `:focus:`), parameters (`:nth-child()`, `:lang()`, ...), page url (`:target`) or require JS (`:indeterminate`), have been excluded.

## Options

Options config has two properties &mdash; `include` and `exclude` &mdash; to define which psuedo class names to add. Both `include` and `exclude` can be:

- a string of a [class name group](https://github.com/kevinkace/posthtml-pseudo#class-name-groups)
- a string of a class name (`/^:\S+/`, from those in the `all` group)
- an array of class name groups and/or class names

### Example Options Config

```js
let config = {
    include : "all", // default is [ "all" ]
    exclude : [      // default is []
        "onlyChild",
        ":root",
        ":read-only"
    ]
}
```

### Class Name Groups

```js
{
    all : [
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
    input : [
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
- [ ] `:default`
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

[build]: https://travis-ci.org/kevinkace/posthtml-pseudo.svg?branch=master
[build-badge]: https://travis-ci.org/kevinkace/posthtml-pseudo