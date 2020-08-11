import MarkdownIt from "markdown-it";
import hljs from "highlight.js";

export const getSingle = (fn:Function) => {
  let instance:any;
  return instance || (instance = fn())
};

export const md = getSingle(function() {
  return MarkdownIt({
          highlight: function(str:string, lang) {
            if (lang && hljs.getLanguage(lang)) {
              return (
                '<pre class="hljs"><code>' +
                hljs.highlight(lang, str, true).value +
                "</code></pre>"
              );
            }
            return (
              '<pre class="hljs"><code>' +
              MarkdownIt.prototype.utils.escapeHtml(str) +
              "</code></pre>"
            );
          }
        })
})