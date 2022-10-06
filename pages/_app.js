// To load global CSS, create a file called `pages/_app.js` with the following content:
// You cannot import global CSS anywhere else.

import '../styles/global.css';

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}