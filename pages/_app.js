import "./style.scss";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return <>
    <Head>
      <link rel="shortcut icon" href="static/bluefav.ico" type="image/x-icon"/>
    </Head>
    <Component {...pageProps} />
  </>;
}

export default MyApp;