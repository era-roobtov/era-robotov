import React from "react";
import Head from "next/head";
import "./style.scss";
import ScrollContextProvider, {ScrollContext} from "../Context/ScrollContext";

function MyApp({Component, pageProps}) {
    return <>
        <Head>
            <link rel="shortcut icon" href="static/bluefav.ico" type="image/x-icon"/>
        </Head>
        <ScrollContextProvider>
            <Component {...pageProps} />
        </ScrollContextProvider>
    </>;
}

export default MyApp;