import "../styles/globals.css";
import { ThemeProvider } from "next-themes";

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider
      defaultTheme="system"
      attribute="class"
      enableSystem
      enableColorScheme
    >
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
