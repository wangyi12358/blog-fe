'use client'
import React from 'react'
import 'highlight.js';
import go from 'highlight.js/lib/languages/go'
import bash from 'highlight.js/lib/languages/bash'
import 'highlight.js/styles/androidstudio.css'
import MarkedReact from 'marked-react'
// @ts-ignore
import Lowlight from 'react-lowlight';


Lowlight.registerLanguage('go', go);
Lowlight.registerLanguage('bash', bash);
const renderer: any = {
  code(snippet: any, lang: any) {
    return <Lowlight key={this.elementId} language={lang} value={snippet} />;
  },
};

export default function Markdown({ children }: { children: string }) {
  return <article className="markdown-react prose"><MarkedReact renderer={renderer}>{children}</MarkedReact></article>
}
