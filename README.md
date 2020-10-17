(setq markdown-xhtml-header-content
"<style type='text/css'>
body {
color: red;
line-height: 1.7em;
background-color: white;
padding: 0 1.9em;
}
p {
margin: 1em 0;
line-height: 1.7em;
}
table {
font-size: inherit;
font: 100%;
margin: 1em;
}
table th {
border-bottom: 1px solid #bbb;
padding: .2em 1em;
}
table td {
border-bottom: 1px solid #ddd;
padding: .2em 1em;
}
input[type=text],
input[type=password],
input[type=image],
textarea {
font: 99% helvetica, arial, freesans, sans-serif;
}
select,
option {
padding: 0 .25em;
}
optgroup {
margin-top: .5em;
}
pre,
code {
font: 12px Monaco, "Courier New", "DejaVu Sans Mono", "Bitstream Vera Sans Mono", monospace;
}
pre {
margin: 1em 0;
font-size: 12px;
background-color: #eee;
border: 1px solid #ddd;
padding: 5px;
line-height: 1.5em;
color: #444;
overflow: auto;
-webkit-box-shadow: rgba(0, 0, 0, 0.07) 0 1px 2px inset;
-webkit-border-radius: 3px;
-moz-border-radius: 3px;
border-radius: 3px;
}
pre code {
padding: 0;
font-size: 12px;
background-color: #eee;
border: none;
}
code {
font-size: 12px;
background-color: #f8f8ff;
color: #444;
padding: 0 .2em;
border: 1px solid #dedede;
}
img {
border: 0;
max-width: 100%;
}
abbr {
border-bottom: none;
}
a {
color: #4183c4;
text-decoration: none;
}
a:hover {
text-decoration: underline;
}
a code,
a:link code,
a:visited code {
color: #4183c4;
}
h2,
h3 {
margin: 1em 0;
}
h1,
h2,
h3,
h4,
h5,
h6 {
border: 0;
color: black;
}
h1 {
border-top: 1px solid #aaa;
padding-top: .9em;
margin-top: 1.5em;
font: 4.0em "Helvetica Neue", "Open Sans", sans-serif;
color: #353535;
font-weight: 100;
}
h1:first-child {
margin-top: 0;
padding-top: .25em;
border-top: none;
}
h1:first-letter {
color: red;
}
h2 {
font-size: 150%;
margin-top: 1.5em;
padding-top: .5em;
font: 200 2.0em "Helvetica Neue", "Open Sans", sans-serif;
}
h3 {
margin-top: 1em;
color: #AAAAAA;
font: 200 1.2em "Helvetica Neue", "Open Sans", sans-serif;
}
hr {
border: 1px solid #ddd;
}
ul {
margin: 1em 0 1em 2em;
}
ol {
margin: 1em 0 1em 2em;
}
ul li,
ol li {
margin-top: .7em;
margin-bottom: .7em;
}
ul ul,
ul ol,
ol ol,
ol ul {
margin-top: 0;
margin-bottom: 0;
}
blockquote {
margin: 1em 0;
border-left: 5px solid #ddd;
padding-left: .6em;
color: #555;
}
dt {
font-weight: bold;
margin-left: 1em;
}
dd {
margin-left: 2em;
margin-bottom: 1em;
}
@media screen and (min-width: 768px) {
body {
width: 650px;
margin: 10px auto;
}
}</style>")

<h1 align="center">
  <br>
    <img src="https://github.com/icao/curso-javascript-es6/blob/master/banner_es6.jpg" alt="logo" width="100%">
  <br>
</h1>

<!-- # curso-javascript-es6 -->

Este repositorio contiene el curso de es6

# h1 Heading 8-)

## h2 Heading

### h3 Heading

#### h4 Heading

##### h5 Heading

###### h6 Heading

## Horizontal Rules

---

---

---

## Typographic replacements

Enable typographer option to see result.

(c) (C) (r) (R) (tm) (TM) (p) (P) +-

test.. test... test..... test?..... test!....

!!!!!! ???? ,, -- ---

"Smartypants, double quotes" and 'single quotes'

## Emphasis

**This is bold text**

**This is bold text**

_This is italic text_

_This is italic text_

~~Strikethrough~~

## Blockquotes

> Blockquotes can also be nested...
>
> > ...by using additional greater-than signs right next to each other...
> >
> > > ...or with spaces between arrows.

## Lists

Unordered

- Create a list by starting a line with `+`, `-`, or `*`
- Sub-lists are made by indenting 2 spaces:
  - Marker character change forces new list start:
    - Ac tristique libero volutpat at
    * Facilisis in pretium nisl aliquet
    - Nulla volutpat aliquam velit
- Very easy!

Ordered

1. Lorem ipsum dolor sit amet
2. Consectetur adipiscing elit
3. Integer molestie lorem at massa

4. You can use sequential numbers...
5. ...or keep all the numbers as `1.`

Start numbering with offset:

57. foo
1. bar

## Code

Inline `code`

Indented code

    // Some comments
    line 1 of code
    line 2 of code
    line 3 of code

Block code "fences"

```
Sample text here...
```

Syntax highlighting

```js
var foo = function (bar) {
  return bar++
}

console.log(foo(5))
```

## Tables

| Option | Description                                                               |
| ------ | ------------------------------------------------------------------------- |
| data   | path to data files to supply the data that will be passed into templates. |
| engine | engine to be used for processing templates. Handlebars is the default.    |
| ext    | extension to be used for dest files.                                      |

Right aligned columns

| Option |                                                               Description |
| -----: | ------------------------------------------------------------------------: |
|   data | path to data files to supply the data that will be passed into templates. |
| engine |    engine to be used for processing templates. Handlebars is the default. |
|    ext |                                      extension to be used for dest files. |

## Links

[link text](http://dev.nodeca.com)

[link with title](http://nodeca.github.io/pica/demo/ 'title text!')

Autoconverted link <https://github.com/nodeca/pica> (enable linkify to see)

## Images

![Minion](https://octodex.github.com/images/minion.png)
![Stormtroopocat](https://octodex.github.com/images/stormtroopocat.jpg 'The Stormtroopocat')

Like links, Images also have a footnote style syntax

![Alt text][id]

With a reference later in the document defining the URL location:

[id]: https://octodex.github.com/images/dojocat.jpg 'The Dojocat'

## Plugins

The killer feature of `markdown-it` is very effective support of
[syntax plugins](https://www.npmjs.org/browse/keyword/markdown-it-plugin).

### [Emojies](https://github.com/markdown-it/markdown-it-emoji)

> Classic markup: :wink: :crush: :cry: :tear: :laughing: :yum:
>
> Shortcuts (emoticons): :-) :-( 8-) ;)

see [how to change output](https://github.com/markdown-it/markdown-it-emoji#change-output) with twemoji.

### [Subscript](https://github.com/markdown-it/markdown-it-sub) / [Superscript](https://github.com/markdown-it/markdown-it-sup)

- 19^th^
- H~2~O

### [\<ins>](https://github.com/markdown-it/markdown-it-ins)

++Inserted text++

### [\<mark>](https://github.com/markdown-it/markdown-it-mark)

==Marked text==

### [Footnotes](https://github.com/markdown-it/markdown-it-footnote)

Footnote 1 link[^first].

Footnote 2 link[^second].

Inline footnote^[Text of inline footnote] definition.

Duplicated footnote reference[^second].

[^first]: Footnote **can have markup**

    and multiple paragraphs.

[^second]: Footnote text.

### [Definition lists](https://github.com/markdown-it/markdown-it-deflist)

Term 1

: Definition 1
with lazy continuation.

Term 2 with _inline markup_

: Definition 2

        { some code, part of Definition 2 }

    Third paragraph of definition 2.

_Compact style:_

Term 1
~ Definition 1

Term 2
~ Definition 2a
~ Definition 2b

### [Abbreviations](https://github.com/markdown-it/markdown-it-abbr)

This is HTML abbreviation example.

It converts "HTML", but keep intact partial entries like "xxxHTMLyyy" and so on.

\*[HTML]: Hyper Text Markup Language

### [Custom containers](https://github.com/markdown-it/markdown-it-container)

::: warning
_here be dragons_
:::
