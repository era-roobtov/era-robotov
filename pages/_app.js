import "./style.scss";

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;


let kek = 'close';
if (kek) {
  console.log('k')
} else {
  console.log('l')
}