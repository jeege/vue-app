import MarkdownIt from "markdown-it";
import hljs from "highlight.js";

export function getSingle<T>(fn: () => T) {
  let instance: T | undefined;
  return instance || (instance = fn());
}

// markdown-it插件，链接新窗口打开
const addLinkTarget = (md: MarkdownIt) => {
  md.renderer.rules["link_open"] = function(tokens, idx, options, env, self) {
    const aIndex = tokens[idx].attrIndex("target");
    if (aIndex < 0) {
      tokens[idx].attrPush(["target", "_blank"]);
    } else {
      (tokens[idx].attrs as [string, string][])[aIndex][1] = "_blank";
    }
    return self.renderToken(tokens, idx, options);
  };
};

export const md = getSingle(function() {
  return MarkdownIt({
    highlight: function(str: string, lang): string {
      if (lang && hljs.getLanguage(lang)) {
        return `<pre class="hljs ${lang}"><code class="${lang}">${
          hljs.highlight(lang, str, true).value
        }</code></pre>`;
      }
      return `<pre class="hljs"><code>${MarkdownIt.prototype.utils.escapeHtml(
        str
      )}</code></pre>`;
    }
  }).use(addLinkTarget);
});

export const articles = getSingle(function() {
  return require.context("@/articles", false, /\.md$/);
});
