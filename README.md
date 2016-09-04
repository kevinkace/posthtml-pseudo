# posthtml-pseudo

# WORK IN PROGRESS - HOW DID YOU EVEN FIND THIS YOU CREEPER??

This [PostHTML](https://github.com/posthtml/posthtml) plugin adds class names to elements for [pseudo classes](https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-classes), eg `:first-child`/`:last-child`.
Any pseudo class names dependent on inputs values (`:valid`, `:invalid`, ...), browsery history (`:visted`, `:link`, ...), interaction (`:hover`, `:focus:`), or parameters (`:nth-child()`, `:lang()`, ...) have been excluded.

## Options

Options object has two properties &mdash; `include` and `exclude`&mdash; to define which psuedo class names to add. Both `include` and `exclude` can be:

- a string of a class name group
- a string of a class name (/^:\S+/, from those in the "all" group)
- an array of class name groups and/or class names

### Example Options Config

```js
var options = {
    include : "all", // default is "all"
    exclude : [      // default is null
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
    firstLastNoType : [
        ":first-child",
        ":last-child"
    ],
    input : [
        ":disabled",
        ":enabled",
        ":optional",
        ":required"
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

Those not struck out are implemented.

- ~~`:active`~~
- ~~`:checked`~~
- `:disabled`
- `:empty`
- `:enabled`
- `:first-child`
- `:first-of-type`
- ~~`:focus`~~
- ~~`:hover`~~
- ~~`:in-range`~~
- ~~`:invalid`~~
- ~~`:lang()`~~ *
- `:last-child`
- `:last-of-type`
- ~~`:link`~~
- ~~`:not()`~~ *
- ~~`:nth-child()`~~ *
- ~~`:nth-last-child()`~~ *
- ~~`:nth-last-of-type()`~~ *
- ~~`:nth-of-type()`~~ *
- `:only-of-type`
- `:only-child`
- `:optional`
- ~~`:out-of-range`~~
- `:read-only`
- `:read-write`
- `:required`
- `:root`
- ~~`:target`~~
- ~~`:valid`~~
- ~~`:visited`~~

\* Hope to add these, but require some thinking due to input parameters.