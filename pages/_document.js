import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html className="dark">
        <Head>
          {/* Favicon */}
          <link rel="icon" href="/logo.png" />
          
          {/* Preload font (zoals jij al had) */}
          <link
            rel="preload"
            href="/fonts/YourFont.woff2"
            as="font"
            type="font/woff2"
            crossOrigin="anonymous"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
