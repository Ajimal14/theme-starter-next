import "../styles/main.scss";
import { ThemeProvider } from "../utils/context/theme-context";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
