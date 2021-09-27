import "./style.scss";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return <>
    <Head>
      <link rel="shortcut icon" href="static/favicon.ico" />
    </Head>
    <Component {...pageProps} />
  </>;
}

export default MyApp;