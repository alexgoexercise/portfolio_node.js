import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* Font Awesome Kit removed to avoid sync script error */}
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
