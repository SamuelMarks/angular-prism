angular-prism
=============

Angular bindings for [Prism.js](http://prismjs.com).

Tested with Angular 5+.

## Quick start

    npm i --save https://api.github.com/repos/SamuelMarks/angular-prism-dist/tarball 

Then add it to the `import:` of your module:

    import { CodeblockModule } from 'angular-prism';

Finally use it in that package like so:

    <prism-codeblock lang="mathml">
      foooooooo
    </prism-codeblock>

Often you'll need to escape characters, but it's still usable:

```
<prism-codeblock lang="clike" reduce_indent=2>
  #include {{ '<' }}cstdio>

  int main(void) {{ '{' }}
      puts("Hello World!");
  {{ '}' }}
</prism-codeblock>
```

## Development
Install Node.js and `@angular/cli`, then just use the regular `ng` commands. Also if you want to package it up, use:

    npm run build-pkg

## Open question

How do I allow the uses of my package to specify which plugins they want from Prism?

Or do I include them all and the minifiers within webpack will minify what you don't use?
