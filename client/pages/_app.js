import "../styles/globals.css";
import "../styles/home.css";
import "../styles/authform.css";
import "../styles/footer.css";
import "../styles/contact.css";
import "../styles/pricing.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
