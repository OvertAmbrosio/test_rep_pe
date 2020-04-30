import Document, { Html, Head, Main, NextScript } from 'next/document'

class MetaData extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html>
        <Head><link rel="shortcut icon" type="image/x-icon" href="/static/favicon.ico" /></Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MetaData