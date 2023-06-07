import "@/styles/globals.css";
import { ThemeProvider } from "next-themes";
import NextNProgress from "nextjs-progressbar";
import { useTheme } from "next-themes";

export default function App({ Component, pageProps }) {
  return (
    <>
      <NextNProgress
        height={3}
        color="#0A4D68"
        options={{ showSpinner: false }}
      />
      <ThemeProvider attribute="class">
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
