import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
      <meta charSet="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Admin Panel</title>
      </Head>
      <body className="bg-gray-200 font-Roboto">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
