import React, { Component } from 'react'
import padStart from 'lodash.padstart'

function highlightCode(code, lang) {
  if (window.Prism) {
    return window.Prism.highlight(code, window.Prism.languages[lang]);
  } else {
    return code;
  }
}

const getLineNumber = index =>
  `<span class="token comment">${padStart(index + 1, 3)}.</span> `

const getHighlightedCodeLines = (code, lang) =>
  highlightCode(code, lang).split('\n').map(line => line.length === 0 ? '<br />' : line)

export default class CodeSnippet extends Component {
  render() {
    const {
      code,
      lang,
      showLineNumbers,
      codeStyle,
    } = this.props

    const style = {
      position: 'relative',
      textAlign: 'center',
      overflow: 'hidden',
      color: 'white',
      height: '646px',
      margin: 0,
      padding: '40% 0',
      whiteSpace: 'pre-wrap',
      wordBreak: 'break-word'
    }

    const lines = getHighlightedCodeLines(code, lang).map((line, index) =>
      <div
        key={index}
        dangerouslySetInnerHTML={{
          __html: showLineNumbers
            ? getLineNumber(index) + line
            : line
        }}
      />
    )

    return (
      <pre>
        <code
          style={{
            display: "inline-block",
            textAlign: "left",
            ...codeStyle,
          }}
        >
          {lines}
        </code>
      </pre>
    )
  }

}
