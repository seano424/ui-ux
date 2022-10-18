import NextDocument, { Html, Head, Main, NextScript } from 'next/document'

class Document extends NextDocument {
  render() {
    return (
      <Html lang="en">
        <Head />
        <body className="scroll-smooth debug-screens">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default Document
