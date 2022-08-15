# My Blog

http://caracal.la or https://caracalla.github.io

I post main updates directly in `index.html` as "casual updates".  All other html files are wrappers around Markdown content, which I use JavaScript to render nicely.  If JS is enabled in the browser, the Markdown is displayed raw, ensuring that anyone should be able to read the content (although it may be missing interactive elements).

## TODO:
* Make it so that there's just `template.html` and a bunch of markdown files, and somehow one gets into the other properly
  * Ideally I could do this without breaking the compatibility with `noscript`
  * Or just a build script
* Investigate Hugo I guess?  I'm very much a "roll your own solution" kind of guy (and I honestly kind of hate Go), but maybe it's worth it to just make my life a little easier; maybe then I'd put more love into this.
