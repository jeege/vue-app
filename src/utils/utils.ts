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

type time = number | string;
export function formatTime(t: time, formatStr = "YYYY-MM-DD hh:mm:ss") {
  const date = new Date(t);
  const timeObj: Record<string, string> = {
    YYYY: `${date.getFullYear()}`,
    MM: `${date.getMonth() + 1}`,
    DD: `${date.getDate()}`,
    hh: `${date.getHours()}`.padStart(2, "0"),
    mm: `${date.getMinutes()}`.padStart(2, "0"),
    ss: `${date.getSeconds()}`.padStart(2, "0")
  };
  let arr;
  const regExp = /YYYY|MM|DD|hh|mm|ss/g;
  while ((arr = regExp.exec(formatStr))) {
    formatStr = formatStr.replace(arr[0], timeObj[arr[0]]);
  }
  return formatStr;
}
